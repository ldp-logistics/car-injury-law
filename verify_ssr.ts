import { getMetaTagsHtml, getPageContent, getRelatedLinks } from './server/meta';
import { SITE_URL } from './server/schema-builder';

const testUrls = [
    '/',
    '/personal-injury-lawyer/',
    '/texas/',
    '/texas/houston/',
    '/car-accident-statistics/texas/',
    '/motorcycle-accident-lawyer/texas/',
    '/truck-accident-lawyer/california/',
    '/about/'
];

async function verify() {
    console.log("=== SSR VERIFICATION V2 (Breadcrumbs & Practice Areas) ===\n");

    for (const url of testUrls) {
        console.log(`Testing URL: ${url}`);
        try {
            const metaHtml = getMetaTagsHtml(url);
            const contentHtml = getPageContent(url);
            const linksHtml = getRelatedLinks(url);

            // 1. Breadcrumb Check
            const hasBreadcrumbs = metaHtml.includes('BreadcrumbList');
            const breadcrumbCount = (metaHtml.match(/"@type":"ListItem"/g) || []).length;
            
            // 2. Schema Check
            const hasGraph = metaHtml.includes('"@graph"');
            
            // 3. Practice Area Route Check
            const hasPracticeAreaKeyword = url.includes('motorcycle') || url.includes('truck') 
                ? metaHtml.includes('Motorcycle') || metaHtml.includes('Truck')
                : true;

            // 4. Word Count Check (Approximate)
            const wordCount = contentHtml.split(/\s+/).length;

            console.log(`  - Breadcrumbs: ${hasBreadcrumbs ? '✅' : '❌'} (${breadcrumbCount} items)`);
            console.log(`  - Schema Graph: ${hasGraph ? '✅' : '❌'}`);
            console.log(`  - Content Length: ${wordCount} words ${wordCount > 100 ? '✅' : '⚠️'}`);
            console.log(`  - Related Links: ${linksHtml ? '✅' : '⚠️'}`);
            
            if (!hasBreadcrumbs || !hasGraph) {
                // Peek at schema if it failed
                const schemaMatch = metaHtml.match(/<script type="application\/ld\+json">(.*?)<\/script>/);
                if (schemaMatch) console.log(`  - JSON-LD: ${schemaMatch[1].substring(0, 100)}...`);
            }
        } catch (e: any) {
            console.error(`  - ERROR: ${e.message}`);
        }
        console.log("");
    }
}

verify().catch(console.error);
