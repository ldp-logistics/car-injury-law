
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Mock STATE_DATA since we can't easily import TS in a quick JS script without setup
// I'll just extract the state names from the existing sitemap or hardcode them if I had them all.
// Actually, I can read the state-data.ts file and regex extract the names.

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sitemapPath = path.resolve(__dirname, '../../client/public/sitemap.xml');
const stateDataPath = path.resolve(__dirname, '../../client/src/data/state-data.ts');

const practiceAreas = [
  'truck-accident-lawyer',
  'motorcycle-accident-lawyer',
  'pedestrian-injury-lawyer',
  'bus-accident-lawyer',
  'workplace-injury-lawyer',
  'medical-malpractice-lawyer',
  'slip-and-fall-lawyer',
  'personal-injury-lawyer'
];

try {
  const stateDataContent = fs.readFileSync(stateDataPath, 'utf8');
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  // Extract state names using regex
  // Looking for: name: "Alabama",
  const stateNameRegex = /name:\s*"([^"]+)"/g;
  let match;
  const states = [];
  
  while ((match = stateNameRegex.exec(stateDataContent)) !== null) {
    states.push(match[1]);
  }

  console.log(`Found ${states.length} states.`);

  let newUrls = '';
  
  // Clean up sitemap content - remove closing tags to append
  let updatedContent = sitemapContent.replace('</urlset>', '');

  states.forEach(state => {
    const stateSlug = state.toLowerCase().replace(/ /g, '-');
    
    practiceAreas.forEach(area => {
      const url = `https://www.carinjurylaw.com/${area}/${stateSlug}`;
      
      // Check if URL already exists to avoid duplicates
      if (!sitemapContent.includes(`<loc>${url}</loc>`)) {
        newUrls += `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
      }
    });
  });

  if (newUrls.length > 0) {
    updatedContent += newUrls + '\n</urlset>';
    fs.writeFileSync(sitemapPath, updatedContent);
    console.log('Sitemap updated successfully.');
  } else {
    console.log('No new URLs to add.');
  }

} catch (error) {
  console.error('Error updating sitemap:', error);
}
