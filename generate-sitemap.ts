import fs from 'fs';
import { STATE_DATA } from './client/src/data/state-data.ts';

const DOMAIN = 'https://www.carinjurylaw.com';

const staticRoutes = [
  '/',
  '/es',
  '/about',
  '/attorneys/saad-admani',
  '/join-network',
  '/settlement-calculator',
  '/blog',
  '/case-results',
  '/glossary',
  '/vs-insurance',
  '/sitemap',
  '/privacy',
  '/terms',
  '/safety-resources',
  '/practice-areas/truck-accident',
  '/practice-areas/truck-accident/jackknife',
  '/practice-areas/truck-accident/underride',
  '/practice-areas/motorcycle-accident',
  '/practice-areas/wrongful-death',
  '/practice-areas/personal-injury',
  '/practice-areas/rideshare-accident',
  '/practice-areas/car-accident',
  '/practice-areas/pedestrian-injury',
  '/practice-areas/bus-transit-injury',
  '/practice-areas/workplace-injury',
  '/practice-areas/medical-malpractice',
  '/practice-areas/slip-and-fall'
];

const urls: Array<{loc: string, changefreq: string, priority: number}> = [];

staticRoutes.forEach(route => {
  urls.push({
    loc: `${DOMAIN}${route === '/' ? '' : route}/`,
    changefreq: 'weekly',
    priority: 1.0
  });
});

// Extract blog slugs via regex to avoid import issues with assets
const blogContent = fs.readFileSync('./client/src/data/blog-posts.ts', 'utf-8');
const slugs = [...blogContent.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);

slugs.forEach(slug => {
  urls.push({
    loc: `${DOMAIN}/blog/${slug}/`,
    changefreq: 'weekly',
    priority: 1.0
  });
});

Object.values(STATE_DATA).forEach(state => {
  const stateNameSlug = state.name.toLowerCase().replace(/ /g, '-');
  
  // Practice areas by state
  urls.push({ loc: `${DOMAIN}/personal-injury-lawyer/${stateNameSlug}/`, changefreq: 'weekly', priority: 1.0 });
  urls.push({ loc: `${DOMAIN}/motorcycle-accident-lawyer/${stateNameSlug}/`, changefreq: 'weekly', priority: 1.0 });
  urls.push({ loc: `${DOMAIN}/truck-accident-lawyer/${stateNameSlug}/`, changefreq: 'weekly', priority: 1.0 });
  urls.push({ loc: `${DOMAIN}/pedestrian-injury-lawyer/${stateNameSlug}/`, changefreq: 'weekly', priority: 1.0 });
  urls.push({ loc: `${DOMAIN}/bus-accident-lawyer/${stateNameSlug}/`, changefreq: 'weekly', priority: 1.0 });
  urls.push({ loc: `${DOMAIN}/workplace-injury-lawyer/${stateNameSlug}/`, changefreq: 'weekly', priority: 1.0 });
  urls.push({ loc: `${DOMAIN}/medical-malpractice-lawyer/${stateNameSlug}/`, changefreq: 'weekly', priority: 1.0 });
  urls.push({ loc: `${DOMAIN}/slip-and-fall-lawyer/${stateNameSlug}/`, changefreq: 'weekly', priority: 1.0 });

  // State landing pages
  urls.push({ loc: `${DOMAIN}/${state.slug}/`, changefreq: 'weekly', priority: 1.0 });

  // Cities
  state.cityList.forEach(city => {
    const citySlug = city.toLowerCase().replace(/ /g, '-');
    urls.push({ loc: `${DOMAIN}/${state.slug}/${citySlug}/`, changefreq: 'weekly', priority: 1.0 });
  });
});

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

urls.forEach(u => {
  xml += `  <url>\n`;
  xml += `    <loc>${u.loc}</loc>\n`;
  xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
  // Ensure priority is always formatted with one decimal place
  xml += `    <priority>${u.priority.toFixed(1)}</priority>\n`;
  xml += `  </url>\n`;
});

xml += `</urlset>\n`;

fs.writeFileSync('./client/public/sitemap.xml', xml);
console.log('Sitemap generated successfully! Total URLs:', urls.length);
