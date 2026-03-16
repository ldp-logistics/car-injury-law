import express, { type Express, type Request, type Response, type NextFunction } from "express";
import { registerRoutes } from "./routes";
import fs from "fs";
import path from "path";
import { getMetaTagsHtml, getPageData, getPageContent, getRelatedLinks } from "./meta";
import compression from "compression";

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

const app = express();

// 1. Gzip Compression (Fixes "Not compressed" issue)
app.use(compression());

app.use(express.json({
  verify: (req: any, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

// 2. Trailing Slash Enforcement (Fixes "Non-canonical page in sitemap" ghosts)
app.use((req, res, next) => {
  if (req.path !== '/' && req.path.endsWith('/') && !req.path.match(/\.(xml|txt|rss|atom|json|png|jpg|jpeg|gif|svg|webp|js|css)$/)) {
    // Current behavior: if it HAS a slash, we are fine. 
    // Wait, usually the issue is missing slug? 
    // Ahrefs usually complains if sitemap has /path/ but server serves /path
    // Or vice versa. Let's force /path/ for all HTML routes.
    next();
  } else if (req.path !== '/' && !req.path.endsWith('/') && !req.path.match(/\.(xml|txt|rss|atom|json|png|jpg|jpeg|gif|svg|webp|js|css)$/)) {
    const query = req.url.slice(req.path.length);
    res.redirect(301, req.path + '/' + query);
  } else {
    next();
  }
});

// Request Logging Middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) logLine = logLine.slice(0, 79) + "…";
      log(logLine);
    }
  });
  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  if (app.get("env") === "development") {
    const { setupVite } = await import("./vite");
    await setupVite(app, server);
  } else {
    const distPath = path.resolve(process.cwd(), "dist/public");

    if (!fs.existsSync(distPath)) {
      throw new Error(`Build directory not found: ${distPath}`);
    }

    // Static files serve karte waqt index:false lazmi hai
    app.use(express.static(distPath, { index: false }));

    // Explicitly 404 missing XML/TXT sitemaps to prevent the React SPA catchall 
    // from returning 200 OK HTML. This fixes "Page in multiple sitemaps" SEO ghosts.
    app.use((req, res, next) => {
      if (req.path.match(/\.(xml|txt|rss|atom|json)$/)) {
        return res.status(404).send("Not Found");
      }
      next();
    });

    app.get("*", async (req, res, next) => {
      try {
        const indexPath = path.resolve(distPath, "index.html");
        let template = await fs.promises.readFile(indexPath, "utf-8");

        const metaTags = getMetaTagsHtml(req.originalUrl);
        const pageData = getPageData(req.originalUrl);
        const pageContent = getPageContent(req.originalUrl);
        const relatedLinks = getRelatedLinks(req.originalUrl);

        let html = template.replace("<head>", `<head>\n${metaTags}`);
        
        let injection = "";
        if (pageData && pageData.h1) {
          injection += `<h1 style="display:none">${pageData.h1}</h1>\n`;
        }
        injection += pageContent + relatedLinks;

        if (injection) {
          html = html.replace('<div id="root">', `<div id="root">\n${injection}`);
        }

        res.status(200).set({ "Content-Type": "text/html" }).send(html);
      } catch (e) {
        next(e);
      }
    });
  }

  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({ port, host: "0.0.0.0" }, () => {
    log(`serving on port ${port}`);
  });
})();