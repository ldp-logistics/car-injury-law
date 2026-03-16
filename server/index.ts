import express, { type Express, type Request, type Response, type NextFunction } from "express";
import { registerRoutes } from "./routes";
import fs from "fs";
import path from "path";
import { getMetaTagsHtml, getPageData, getPageContent, getRelatedLinks } from "./meta";
import compression from "compression";

const PRACTICE_AREA_SSR: Record<string, {
  h1: string
  content: string
  faqs: Array<{question: string; answer: string}>
}> = {
  'truck-accident': {
    h1: 'Truck Accident Lawyer | Car Injury Law',
    content: `Truck accidents are among the most
      catastrophic crashes on American roads.
      A fully loaded commercial truck weighing
      up to 80000 pounds can cause devastating
      injuries that change lives permanently.
      Trucking companies have specialized legal
      teams ready to fight your claim from the
      moment the accident happens. Our truck
      accident lawyers understand federal
      trucking regulations hours of service
      violations and how to hold both the driver
      and trucking company fully accountable.
      We have recovered millions for truck
      accident victims across all 50 states.
      Call us 24/7 for a completely free
      case evaluation with no obligation.`,
    faqs: [
      {
        question: 'Who is liable in a truck accident?',
        answer: `Multiple parties can be liable
          including the truck driver trucking company
          cargo loader and truck manufacturer.
          Our attorneys investigate all parties
          to maximize your compensation.`
      },
      {
        question: 'How long do I have to file?',
        answer: `The statute of limitations varies
          by state but is typically 2 to 3 years.
          Evidence like black box data can be
          deleted quickly so contact us immediately.`
      },
      {
        question: 'How much is my case worth?',
        answer: `Truck accident settlements are
          typically much larger than regular car
          accident cases due to severity of injuries
          and multiple liable parties. Cases can
          range from hundreds of thousands to
          several million dollars.`
      }
    ]
  },
  'personal-injury': {
    h1: 'Personal Injury Lawyer | Car Injury Law',
    content: `If you have been injured due to
      someone else negligence you need an
      experienced personal injury lawyer fighting
      for your rights. At Car Injury Law our
      attorneys have recovered millions for
      injured victims across all 50 states.
      We handle car accidents truck crashes
      motorcycle accidents slip and falls
      workplace injuries and more. Our team
      knows exactly how insurance companies
      try to minimize your claim and we know
      how to stop them. With zero upfront costs
      and a no win no fee guarantee you have
      nothing to lose. Call us today for a
      completely free case evaluation.`,
    faqs: [
      {
        question: `How much does a personal
          injury lawyer cost?`,
        answer: `Our personal injury lawyers
          work on contingency meaning you pay
          nothing upfront. We only get paid
          when we win your case.`
      },
      {
        question: 'How long does a case take?',
        answer: `Most personal injury cases
          settle within 3 to 12 months.
          Complex cases involving serious
          injuries can take longer.`
      },
      {
        question: 'What damages can I recover?',
        answer: `You may recover medical bills
          lost wages pain and suffering emotional
          distress and future care costs.`
      }
    ]
  },
  'workplace-injury': {
    h1: 'Workplace Injury Lawyer | Car Injury Law',
    content: `Workplace injuries can happen in
      any industry and the consequences can be
      life changing. Whether you were injured
      on a construction site in a warehouse
      or in an office our workplace injury
      lawyers know how to navigate complex
      workers compensation claims and third
      party lawsuits to maximize your recovery.
      Many injured workers do not realize they
      may be entitled to compensation beyond
      basic workers comp. Our attorneys
      investigate every angle to ensure you
      receive full compensation for your
      injuries lost income and future needs.`,
    faqs: [
      {
        question: `Can I sue my employer
          for a workplace injury?`,
        answer: `In most cases workers comp
          is the exclusive remedy against your
          employer. However if a third party
          contributed to your injury you may
          have additional claims beyond workers
          compensation.`
      },
      {
        question: `What if my workers comp
          claim was denied?`,
        answer: `A denied workers comp claim
          is not the end. Our attorneys can
          appeal denials and fight for the
          benefits you are legally entitled to.`
      },
      {
        question: `How long do I have to
          file a workplace injury claim?`,
        answer: `Deadlines vary by state but
          you should report your injury to
          your employer immediately and contact
          an attorney as soon as possible to
          protect your rights.`
      }
    ]
  },
  'motorcycle-accident': {
    h1: 'Motorcycle Accident Lawyer | Car Injury Law',
    content: `Motorcycle accident victims face
      unique challenges when seeking compensation.
      Insurance companies often unfairly blame
      riders for accidents regardless of the
      actual facts. Our motorcycle accident
      lawyers fight against this bias and
      build strong cases that prove liability
      and maximize your compensation. We
      understand the specific injuries motorcyclists
      suffer including road rash broken bones
      traumatic brain injuries and spinal damage.
      Our attorneys have handled hundreds of
      motorcycle cases and know exactly how
      to get you the maximum settlement.`,
    faqs: [
      {
        question: `What if the other driver
          says I was at fault?`,
        answer: `Insurance companies routinely
          blame motorcyclists unfairly. Our
          attorneys gather all evidence including
          camera footage witness statements and
          accident reconstruction to prove the
          true cause of your crash.`
      },
      {
        question: `Do I need to wear a helmet
          to recover compensation?`,
        answer: `Helmet laws vary by state and
          not wearing one does not necessarily
          bar you from recovery. Contact us
          to understand your rights in your
          specific state.`
      },
      {
        question: `What compensation can
          a motorcyclist recover?`,
        answer: `You can recover medical bills
          lost wages pain and suffering bike
          repair costs and permanent disability
          compensation if applicable.`
      }
    ]
  },
  'car-accident': {
    h1: 'Car Accident Lawyer | Car Injury Law',
    content: `After a car accident you are dealing
      with injuries medical bills missed work
      and insurance companies who want to
      pay you as little as possible. Our car
      accident lawyers level the playing field.
      We handle all communications with insurance
      adjusters gather evidence build your case
      and fight for every dollar you deserve.
      With offices serving all 50 states and
      attorneys available 24 hours a day 7
      days a week we are always ready to help.
      Zero upfront costs and no win no fee
      means you have nothing to lose by
      calling us today.`,
    faqs: [
      {
        question: `What should I do immediately
          after a car accident?`,
        answer: `Call 911 seek medical attention
          document the scene with photos get
          witness information and contact a
          car accident lawyer before speaking
          to any insurance company.`
      },
      {
        question: `How long do I have to file
          a car accident claim?`,
        answer: `Statutes of limitations vary
          by state from 1 to 6 years. Do not
          wait as evidence disappears and
          witnesses become harder to find.`
      },
      {
        question: `Should I accept the insurance
          company settlement offer?`,
        answer: `Never accept a settlement offer
          before consulting a lawyer. First
          offers are almost always far below
          what your case is truly worth.`
      }
    ]
  },
  'slip-and-fall': {
    h1: 'Slip and Fall Lawyer | Car Injury Law',
    content: `Property owners have a legal duty
      to maintain safe conditions for visitors.
      When they fail to fix hazards like wet
      floors broken stairs poor lighting or
      uneven surfaces they can be held liable
      for your injuries. Slip and fall cases
      require acting fast to preserve evidence
      before it disappears. Our slip and fall
      lawyers know exactly what evidence to
      gather and how to prove negligence
      against property owners and their
      insurance companies.`,
    faqs: [
      {
        question: `How do I prove a slip
          and fall case?`,
        answer: `You must show the property
          owner knew or should have known about
          the hazard and failed to fix it.
          Evidence includes surveillance footage
          incident reports and witness statements.`
      },
      {
        question: `Can I sue a store or
          restaurant for a slip and fall?`,
        answer: `Yes. Businesses have a legal
          duty to maintain safe premises for
          customers. Our attorneys handle all
          types of premises liability claims.`
      },
      {
        question: `What compensation can
          I get for a slip and fall?`,
        answer: `You may recover medical bills
          lost wages pain and suffering and
          any permanent disability caused
          by the fall.`
      }
    ]
  },
  'wrongful-death': {
    h1: 'Wrongful Death Lawyer | Car Injury Law',
    content: `Losing a loved one due to someone
      else negligence is devastating. While
      no amount of money can undo your loss
      a wrongful death claim can provide
      financial security for your family
      and hold the responsible party accountable.
      Our wrongful death attorneys handle
      these sensitive cases with the compassion
      and dedication your family deserves.
      We fight for compensation covering
      funeral expenses lost income loss of
      companionship and emotional suffering.`,
    faqs: [
      {
        question: `Who can file a wrongful
          death claim?`,
        answer: `Typically immediate family
          members including spouses children
          and parents can file wrongful death
          claims. Laws vary by state so contact
          us to understand your specific rights.`
      },
      {
        question: `What damages are available
          in a wrongful death case?`,
        answer: `Damages can include funeral
          costs medical bills before death
          lost future income loss of
          companionship and emotional distress.`
      },
      {
        question: `How long do I have to file
          a wrongful death claim?`,
        answer: `Wrongful death statutes of
          limitations vary by state from 1
          to 3 years. Contact us immediately
          to protect your family rights.`
      }
    ]
  },
  'uber-lyft-accident': {
    h1: 'Uber Lyft Accident Lawyer | Car Injury Law',
    content: `Rideshare accidents involving Uber
      and Lyft create complex insurance situations.
      Uber and Lyft provide different levels of
      coverage depending on whether the driver
      was waiting for a request en route to
      pickup or actively transporting a rider.
      Our rideshare accident lawyers navigate
      these complex insurance systems and
      identify all available compensation
      sources to maximize your recovery.`,
    faqs: [
      {
        question: `Does Uber cover passengers
          in an accident?`,
        answer: `Yes. When a passenger is in
          an Uber vehicle the company provides
          up to 1 million dollars in liability
          coverage. Getting Uber to pay requires
          an experienced rideshare attorney.`
      },
      {
        question: `Can I sue Uber directly?`,
        answer: `Uber classifies drivers as
          independent contractors which limits
          direct liability. However you can
          make a claim against Uber insurance
          policy through our attorneys.`
      },
      {
        question: `What if the Uber driver
          caused the accident?`,
        answer: `If the Uber driver caused
          the accident you can file a claim
          against Uber commercial insurance.
          Our attorneys handle all communications
          with Uber insurance team.`
      }
    ]
  }
};

function getSsrContent(path: string): string {

  // ── Practice Areas ──────────────────────────────────────────────
  if (path.startsWith('/practice-areas/')) {
    const practiceSlug = path
      .replace('/practice-areas/', '')
      .replace(/\/$/, '');

    const practiceData = PRACTICE_AREA_SSR[practiceSlug];

    if (practiceData) {
      const faqs = practiceData.faqs
        .map(f => `
          <div>
            <h3>${f.question}</h3>
            <p>${f.answer}</p>
          </div>
        `).join('');

      return `
        <div id="ssr-content">
          <h1>${practiceData.h1}</h1>
          <p>${practiceData.content}</p>
          <div>
            <h2>Frequently Asked Questions</h2>
            ${faqs}
          </div>
        </div>
      `;
    }
  }

  // ── About ────────────────────────────────────────────────────────
  if (path === '/about/' || path === '/about') {
    return `
      <div id="ssr-content">
        <h1>About Car Injury Law</h1>
        <p>Car Injury Law is a nationwide
          personal injury law firm serving
          accident victims across all 50 states.
          Our experienced attorneys have recovered
          millions for injured clients and are
          available 24 hours a day 7 days a week
          for free consultations with no upfront
          costs and no win no fee guarantee.</p>
      </div>
    `;
  }

  // ── Attorney Profile ─────────────────────────────────────────────
  if (path === '/attorney-profile/' || path === '/attorney-profile') {
    return `
      <div id="ssr-content">
        <h1>Our Attorneys | Car Injury Law</h1>
        <p>Car Injury Law attorneys are experienced
          personal injury lawyers dedicated to
          fighting for maximum compensation for
          accident victims across all 50 states.
          Our legal team handles car accidents
          truck accidents motorcycle crashes
          slip and fall injuries and more.</p>
      </div>
    `;
  }

  // ── Case Results ─────────────────────────────────────────────────
  if (path === '/case-results/' || path === '/case-results') {
    return `
      <div id="ssr-content">
        <h1>Case Results | Car Injury Law</h1>
        <p>Car Injury Law has recovered millions
          for injury victims across the United
          States. Our attorneys have successfully
          resolved thousands of personal injury
          cases including car accidents truck
          crashes motorcycle accidents and
          workplace injuries. View our case
          results to see what we have recovered
          for clients like you.</p>
      </div>
    `;
  }

  // ── Calculator ───────────────────────────────────────────────────
  if (path === '/calculator/' || path === '/calculator') {
    return `
      <div id="ssr-content">
        <h1>Car Accident Settlement Calculator | Car Injury Law</h1>
        <p>Use our free car accident settlement
          calculator to estimate the value of
          your personal injury claim. Our tool
          considers medical bills lost wages
          pain and suffering and other damages
          to give you a realistic estimate of
          your potential settlement amount.</p>
      </div>
    `;
  }

  // ── Glossary ─────────────────────────────────────────────────────
  if (path === '/glossary/' || path === '/glossary') {
    return `
      <div id="ssr-content">
        <h1>Personal Injury Legal Glossary | Car Injury Law</h1>
        <p>Understanding legal terminology
          is important when pursuing a personal
          injury claim. Our comprehensive glossary
          explains common legal terms used in
          car accident and personal injury cases
          in plain easy to understand language.</p>
      </div>
    `;
  }

  // ── Join Network ─────────────────────────────────────────────────
  if (path === '/join-network/' || path === '/join-network') {
    return `
      <div id="ssr-content">
        <h1>Join Our Attorney Network | Car Injury Law</h1>
        <p>Are you a personal injury attorney
          looking to grow your practice?
          Join the Car Injury Law attorney
          network and connect with accident
          victims in your area who need
          experienced legal representation.</p>
      </div>
    `;
  }

  // ── Safety Resources ─────────────────────────────────────────────
  if (path === '/safety-resources/' || path === '/safety-resources') {
    return `
      <div id="ssr-content">
        <h1>Road Safety Resources | Car Injury Law</h1>
        <p>Car Injury Law is committed to
          promoting road safety across America.
          Our safety resources provide valuable
          information about preventing car
          accidents staying safe on the road
          and what to do if you are involved
          in an accident.</p>
      </div>
    `;
  }

  // ── vs Insurance ─────────────────────────────────────────────────
  if (path === '/vs-insurance/' || path === '/vs-insurance') {
    return `
      <div id="ssr-content">
        <h1>Fighting Insurance Companies | Car Injury Law</h1>
        <p>Insurance companies have one goal
          after an accident — pay you as little
          as possible. Car Injury Law levels
          the playing field. Our attorneys know
          every tactic insurance adjusters use
          to minimize claims and we counter
          each one aggressively to maximize
          your settlement.</p>
      </div>
    `;
  }

  // ── Sitemap ──────────────────────────────────────────────────────
  if (path === '/sitemap/' || path === '/sitemap') {
    return `
      <div id="ssr-content">
        <h1>Sitemap | Car Injury Law</h1>
        <p>Browse the full sitemap of Car Injury Law
          to find information about our practice areas
          attorney profiles case results and resources
          for accident victims across all 50 states.</p>
      </div>
    `;
  }

  // ── Florida State Page ───────────────────────────────────────────
  if (path === '/florida-car-accident-lawyer/' || path === '/florida-car-accident-lawyer') {
    return `
      <div id="ssr-content">
        <h1>Florida Car Accident Lawyer | Car Injury Law</h1>
        <p>If you were injured in a car accident
          in Florida our experienced attorneys are
          ready to fight for your maximum compensation.
          Florida has strict no fault insurance laws
          that make it critical to work with an
          experienced car accident attorney.
          We offer free consultations 24 hours
          a day with no upfront costs and no win
          no fee guarantee.</p>
      </div>
    `;
  }

  // ── Dynamic: City Landing Page ───────────────────────────────────
  // Pattern: /{state}-car-accident-lawyer/{city}/
  const cityMatch = path.match(/^\/([a-z-]+)-car-accident-lawyer\/([a-z-]+)\/?$/);
  if (cityMatch) {
    const stateSlug = cityMatch[1];
    const citySlug = cityMatch[2];
    const cityName = citySlug
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    const stateName = stateSlug
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    return `
      <div id="ssr-content">
        <h1>Car Accident Lawyer in ${cityName} ${stateName} | Car Injury Law</h1>
        <p>If you were injured in a car accident
          in ${cityName} ${stateName} our
          experienced attorneys are ready to
          fight for your maximum compensation.
          We offer free consultations 24 hours
          a day with no upfront costs and
          no win no fee guarantee. Serving
          all of ${stateName} including
          ${cityName} and surrounding areas.</p>
      </div>
    `;
  }

  // ── Dynamic: State Template ──────────────────────────────────────
  // Pattern: /{state}-car-accident-lawyer/
  const stateMatch = path.match(/^\/([a-z-]+)-car-accident-lawyer\/?$/);
  if (stateMatch) {
    const stateSlug = stateMatch[1];
    const stateName = stateSlug
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    return `
      <div id="ssr-content">
        <h1>Car Accident Lawyer in ${stateName} | Car Injury Law</h1>
        <p>If you were injured in a car accident
          in ${stateName} our experienced attorneys
          are ready to fight for your maximum
          compensation. We handle all car accident
          cases in ${stateName} including serious
          injuries wrongful death and truck crashes.
          Free consultations available 24 hours a day
          with no upfront costs and no win no fee
          guarantee.</p>
      </div>
    `;
  }

  // ── Dynamic: State Statistics ────────────────────────────────────
  // Pattern: /car-accident-statistics/{state}/
  if (path.startsWith('/car-accident-statistics/')) {
    const stateSlug = path
      .replace('/car-accident-statistics/', '')
      .replace(/\/$/, '');
    const stateName = stateSlug
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    return `
      <div id="ssr-content">
        <h1>Car Accident Statistics in ${stateName} | Car Injury Law</h1>
        <p>Car accident statistics in
          ${stateName} show the serious impact
          of traffic crashes on residents
          every year. Understanding these
          statistics helps drivers stay safe
          and helps accident victims understand
          the importance of working with an
          experienced car accident lawyer
          to protect their rights.</p>
      </div>
    `;
  }

  return "";
}

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

// 2. Trailing Slash Enforcement & Legacy /seo/ Redirects
app.use((req, res, next) => {
  const path = req.path;
  const method = req.method;

  // Skip for non-GET, root, Vite internals, assets, and anything with a dot
  if (
    method !== 'GET' ||
    path === '/' ||
    path.startsWith('/@') || 
    path.startsWith('/src/') || 
    path.startsWith('/node_modules/') ||
    path.startsWith('/api/') ||
    path.includes('.')
  ) {
    return next();
  }

  if (path.startsWith('/seo/')) {
    const newPath = path.replace('/seo/', '/');
    const query = req.url.slice(path.length);
    log(`[SEO-REDIRECT] ${path} -> ${newPath}`, "seo-fix");
    res.redirect(301, newPath + query);
  } else if (!path.endsWith('/')) {
    const query = req.url.slice(path.length);
    log(`[SLASH-ENFORCE] ${path} -> ${path}/`, "seo-fix");
    res.redirect(301, path + '/' + query);
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
        const ssrContent = getSsrContent(req.path);

        let html = template.replace("<head>", () => `<head>\n${metaTags}`);
        
        let injection = "";
        if (pageData && pageData.h1) {
          injection += `<h1 style="display:none">${pageData.h1}</h1>\n`;
        }
        injection += pageContent + relatedLinks + ssrContent;

        if (injection) {
          html = html.replace('<div id="root">', () => `<div id="root">\n${injection}`);
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