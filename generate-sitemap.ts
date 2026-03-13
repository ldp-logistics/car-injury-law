import fs from 'fs';
import { STATE_DATA } from './client/src/data/state-data.ts';
import { SERVICE_SYNONYM_PAGES } from './client/src/data/service-synonym-pages.ts';
import { NEAR_ME_PAGES } from './client/src/data/near-me-pages.ts';
import { PRACTICE_AREA_PAGES } from './client/src/data/practice-area-pages.ts';
import { BEST_PAGES } from './client/src/data/best-pages.ts';
import { STATE_SPECIFIC_PAGES } from './client/src/data/state-specific-pages.ts';

const DOMAIN = 'https://www.carinjurylaw.com';

const staticRoutes = [
  '/',
  '/about/',
  '/attorneys/saad-admani/',
  '/join-network/',
  '/settlement-calculator/',
  '/blog/',
  '/case-results/',
  '/glossary/',
  '/vs-insurance/',
  '/sitemap/',
  '/safety-resources/',
  '/practice-areas/truck-accident/',
  '/practice-areas/truck-accident/jackknife/',
  '/practice-areas/truck-accident/underride/',
  '/practice-areas/motorcycle-accident/',
  '/practice-areas/wrongful-death/',
  '/practice-areas/personal-injury/',
  '/practice-areas/rideshare-accident/',
  '/practice-areas/car-accident/',
  '/practice-areas/pedestrian-injury/',
  '/practice-areas/bus-transit-injury/',
  '/practice-areas/workplace-injury/',
  '/practice-areas/medical-malpractice/',
  '/practice-areas/slip-and-fall/'
];

const urls: Array<{loc: string, priority: number}> = [];

staticRoutes.forEach(route => {
  urls.push({
    loc: `${DOMAIN}${route}`,
    priority: 0.8
  });
});

// Extract blog slugs via regex
const blogContent = fs.readFileSync('./client/src/data/blog-posts.ts', 'utf-8');
const slugs = [...blogContent.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);

slugs.forEach(slug => {
  urls.push({
    loc: `${DOMAIN}/blog/${slug}/`,
    priority: 0.8
  });
});

Object.values(STATE_DATA).forEach(state => {
  const stateNameSlug = state.name.toLowerCase().replace(/ /g, '-');
  
  // Practice areas by state
  urls.push({ loc: `${DOMAIN}/personal-injury-lawyer/${stateNameSlug}/`, priority: 0.8 });
  urls.push({ loc: `${DOMAIN}/motorcycle-accident-lawyer/${stateNameSlug}/`, priority: 0.8 });
  urls.push({ loc: `${DOMAIN}/truck-accident-lawyer/${stateNameSlug}/`, priority: 0.8 });
  urls.push({ loc: `${DOMAIN}/pedestrian-injury-lawyer/${stateNameSlug}/`, priority: 0.8 });
  urls.push({ loc: `${DOMAIN}/bus-accident-lawyer/${stateNameSlug}/`, priority: 0.8 });
  urls.push({ loc: `${DOMAIN}/workplace-injury-lawyer/${stateNameSlug}/`, priority: 0.8 });
  urls.push({ loc: `${DOMAIN}/medical-malpractice-lawyer/${stateNameSlug}/`, priority: 0.8 });
  urls.push({ loc: `${DOMAIN}/slip-and-fall-lawyer/${stateNameSlug}/`, priority: 0.8 });

  // State landing pages
  urls.push({ loc: `${DOMAIN}/${state.slug}/`, priority: 0.8 });

  // Cities
  state.cityList.forEach(city => {
    const citySlug = city.toLowerCase().replace(/ /g, '-');
    urls.push({ loc: `${DOMAIN}/${state.slug}/${citySlug}/`, priority: 0.8 });
  });
});

Object.values(STATE_DATA).forEach(state => {
  const stateNameSlug = state.name.toLowerCase().replace(/ /g, '-');
  urls.push({ 
    loc: `${DOMAIN}/car-accident-statistics/${stateNameSlug}/`, 
    priority: 0.9 
  });
});

SERVICE_SYNONYM_PAGES.forEach(page => {
  urls.push({ 
    loc: `${DOMAIN}/${page.slug}/`, 
    priority: 0.9
  });
});

NEAR_ME_PAGES.forEach(page => {
  urls.push({ 
    loc: `${DOMAIN}/${page.slug}/`, 
    priority: 0.9
  });
});

PRACTICE_AREA_PAGES.forEach(page => {
  urls.push({ 
    loc: `${DOMAIN}/${page.slug}/`, 
    priority: 0.9
  });
});

BEST_PAGES.forEach(page => {
  urls.push({ 
    loc: `${DOMAIN}/${page.slug}/`, 
    priority: 0.9
  });
});

STATE_SPECIFIC_PAGES.forEach(page => {
  urls.push({ 
    loc: `${DOMAIN}/${page.slug}/`, 
    priority: 0.9
  });
});

// URL and Content validator
urls.forEach(u => {
  if (!u.loc.startsWith('https://www.')) {
    console.error('BAD URL (No WWW):', u.loc);
  }
  if (!u.loc.endsWith('/')) {
    console.error('BAD URL (No Trailing Slash):', u.loc);
    // Auto-fix if missing
    u.loc = u.loc.endsWith('/') ? u.loc : u.loc + '/';
  }
});

// Content Quality Validator for SEO Pages
console.log('\n--- Running SEO Content Validation ---');
let errors = 0;

const validatePage = (page: any, source: string) => {
  const desc = page.description || '';
  if (desc.length < 130 || desc.length > 155) {
    console.warn(`[${source}] Meta Description Length Error (${desc.length}): ${page.slug}`);
    errors++;
  }
  if (desc.endsWith('...')) {
    console.warn(`[${source}] Meta Description Truncated: ${page.slug}`);
    errors++;
  }
  if (!page.h1) {
    console.error(`[${source}] Missing H1: ${page.slug}`);
    errors++;
  }
};

SERVICE_SYNONYM_PAGES.forEach(p => validatePage(p, 'ServiceSynonym'));
NEAR_ME_PAGES.forEach(p => validatePage(p, 'NearMe'));
PRACTICE_AREA_PAGES.forEach(p => validatePage(p, 'PracticeArea'));
BEST_PAGES.forEach(p => validatePage(p, 'BestOf'));
STATE_SPECIFIC_PAGES.forEach(p => validatePage(p, 'StateSpecific'));

if (errors > 0) {
  console.log(`\nValidation finished with ${errors} warnings/errors.\n`);
} else {
  console.log('All SEO pages passed validation (H1 present, Description 130-155 chars).\n');
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

urls.forEach(u => {
  xml += `  <url>\n`;
  xml += `    <loc>${u.loc}</loc>\n`;
  // Ensure priority is always formatted with one decimal place
  xml += `    <priority>${u.priority.toFixed(1)}</priority>\n`;
  xml += `  </url>\n`;
});

xml += `</urlset>\n`;

fs.writeFileSync('./client/public/sitemap.xml', xml);

console.log('Total URLs:', urls.length);
console.log('Sitemap generated successfully');
