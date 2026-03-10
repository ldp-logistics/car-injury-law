const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'client', 'public', 'sitemap.xml');
const headerPath = path.join(__dirname, 'client', 'src', 'components', 'nav-bar.tsx');
const footerPath = path.join(__dirname, 'client', 'src', 'components', 'footer.tsx');

const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
const headerContent = fs.readFileSync(headerPath, 'utf-8');
const footerContent = fs.readFileSync(footerPath, 'utf-8');

// Extract all <loc> from sitemap
const locRegex = /<loc>(.*?)<\/loc>/g;
const sitemapUrls = [];
let match;
while ((match = locRegex.exec(sitemapContent)) !== null) {
  // convert https://www.carinjurylaw.com/path to /path
  const url = match[1].replace('https://www.carinjurylaw.com', '');
  sitemapUrls.push(url === '' ? '/' : url);
}

// Extract all hrefs from header and footer
// Matching href="/something" or Link href="/something"
const hrefRegex = /href=["'](\/.*?)["']/g;
const navUrls = new Set();
while ((match = hrefRegex.exec(headerContent)) !== null) {
  navUrls.add(match[1]);
}
while ((match = hrefRegex.exec(footerContent)) !== null) {
  navUrls.add(match[1]);
}

const orphans = sitemapUrls.filter(url => !navUrls.has(url));

// Group orphans
const groups = {
  blogPosts: [],
  practiceAreas: [],
  statePages: [],
  cityPages: [],
  other: []
};

orphans.forEach(url => {
  if (url.startsWith('/blog/')) {
    groups.blogPosts.push(url);
  } else if (url.startsWith('/practice-areas/')) {
    groups.practiceAreas.push(url);
  } else if (url.split('/').length === 3 && url.includes('-car-accident-lawyer')) {
    groups.cityPages.push(url);
  } else if (url.includes('-car-accident-lawyer')) {
    groups.statePages.push(url);
  } else {
    groups.other.push(url);
  }
});

console.log("Total URLs in sitemap:", sitemapUrls.length);
console.log("Total unique URLs in Nav/Footer:", navUrls.size);
console.log("Total orphans:", orphans.length);
console.log("\n--- Breakdown ---");
console.log("Blog Posts:", groups.blogPosts.length);
console.log("Sub-Practice Areas:", groups.practiceAreas.length);
console.log("State Pages:", groups.statePages.length);
console.log("City Pages:", groups.cityPages.length);
console.log("Other:", groups.other);

// Print a few examples
console.log("\nExamples:");
console.log("Blog:", groups.blogPosts.slice(0, 3));
console.log("Practice:", groups.practiceAreas.slice(0, 3));
console.log("State:", groups.statePages.slice(0, 3));
console.log("City:", groups.cityPages.slice(0, 3));
