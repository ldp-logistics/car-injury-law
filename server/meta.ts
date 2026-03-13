import { STATE_DATA, type StateData } from "./state-data";
import { SERVICE_SYNONYM_PAGES } from "../client/src/data/service-synonym-pages";
import { NEAR_ME_PAGES } from "../client/src/data/near-me-pages";
import { PRACTICE_AREA_PAGES } from "../client/src/data/practice-area-pages";
import { BEST_PAGES } from "../client/src/data/best-pages";
import { STATE_SPECIFIC_PAGES } from "../client/src/data/state-specific-pages";
import he from "he";

interface MetaTags {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    schema?: any;
}

const DEFAULT_META: MetaTags = {
    title: "Car Accident & Injury Attorneys | Car Injury Law",
    description: "Expert car accident and personal injury lawyers. We fight insurance companies to maximize your settlement. Free consultation 24/7.",
    keywords: "car accident lawyer, personal injury attorney, truck accident lawyer",
    canonical: "https://www.carinjurylaw.com/",
    ogTitle: "Car Accident & Injury Attorneys | Car Injury Law",
    ogDescription: "Expert car accident and personal injury representation. We fight insurance companies to maximize your settlement. Free consultation 24/7.",
    ogImage: "https://www.carinjurylaw.com/og-image.jpg",
};

function generateSchema(meta: MetaTags, path: string): any {
    const baseSchema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Car Injury Law",
        "url": meta.canonical,
        "logo": "https://www.carinjurylaw.com/logo.png",
        "image": meta.ogImage,
        "telephone": "1-888-669-5559",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "95 Christopher Columbus Dr, 16th Floor",
            "addressLocality": "Jersey City",
            "addressRegion": "NJ",
            "postalCode": "07302",
            "addressCountry": "US"
        }
    };

    if (path === '/') return baseSchema;

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": meta.title,
        "description": meta.description,
        "url": meta.canonical,
        "mainEntity": baseSchema
    };
}

function generateTagsHtml(meta: MetaTags, path: string): string {
    const escape = he.encode;
    const schema = generateSchema(meta, path);
    
    return `
    <title>${escape(meta.title)}</title>
    <meta name="description" content="${escape(meta.description)}" />
    <meta name="keywords" content="${escape(meta.keywords)}" />
    <link rel="canonical" href="${escape(meta.canonical)}" />
    
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escape(meta.canonical)}" />
    <meta property="og:title" content="${escape(meta.ogTitle)}" />
    <meta property="og:description" content="${escape(meta.ogDescription)}" />
    <meta property="og:image" content="${escape(meta.ogImage)}" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${escape(meta.canonical)}" />
    <meta property="twitter:title" content="${escape(meta.ogTitle)}" />
    <meta property="twitter:description" content="${escape(meta.ogDescription)}" />
    <meta property="twitter:image" content="${escape(meta.ogImage)}" />

    <script type="application/ld+json" id="ssr-schema">
        ${JSON.stringify(schema)}
    </script>
  `;
}

function getBaseUrl(urlPath: string): string {
    const cleanPath = urlPath === '/' ? '' : urlPath.replace(/\/$/, "");
    return `https://www.carinjurylaw.com${cleanPath}/`;
}

export function getMetaTagsHtml(url: string): string {
    const urlObj = new URL(url, 'http://localhost');
    const path = urlObj.pathname;
    const canonical = getBaseUrl(path);

    let meta = { ...DEFAULT_META, canonical };

    const toCityCase = (str: string) => {
        return decodeURIComponent(str)
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    // --- 1. Static & Practice Area Routes ---
    if (path === '/') {
        return generateTagsHtml(meta, path);
    }

    if (path === '/about' || path === '/about/') {
        meta.title = "About Admani Law | Car Injury Law";
        meta.description = "Learn about Car Injury Law and lead trial attorney Saad Admani.";
    }
    else if (path.includes('/practice-areas/')) {
        const segments = path.split('/').filter(Boolean);
        const area = segments[segments.length - 1].replace(/-/g, ' ');
        const formattedArea = toCityCase(area || "");

        meta.title = `${formattedArea} Lawyers | Car Injury Law`;
        meta.description = `Injured in a ${formattedArea.toLowerCase()} accident? Our attorneys fight for your compensation. Free consultation.`;
    }

    // --- 2. Dynamic State & City Routes ---
    const getStateData = (slugPart: string): StateData | undefined => {
        return Object.values(STATE_DATA).find(
            (s) => s.slug === slugPart || s.name.toLowerCase().replace(/ /g, '-') === slugPart
        );
    };

    const segments = path.split('/').filter(Boolean);

    // --- 3. SEO Pages ---
    if (segments.length === 1) {
        const pageData = 
          SERVICE_SYNONYM_PAGES.find(p => p.slug === segments[0]) || 
          NEAR_ME_PAGES.find(p => p.slug === segments[0]) ||
          PRACTICE_AREA_PAGES.find(p => p.slug === segments[0]) ||
          BEST_PAGES.find(p => p.slug === segments[0]) ||
          STATE_SPECIFIC_PAGES.find(p => p.slug === segments[0]);
          
        if (pageData) {
            meta.title = pageData.title;
            meta.description = pageData.description;
            meta.keywords = pageData.keyword;
            
            // Shorten description if too long (>160)
            if (meta.description.length > 160) {
                meta.description = meta.description.substring(0, 157) + "...";
            }

            return generateTagsHtml(meta, path);
        }
    }

    // Statistics pages
    if (segments.length === 2 && segments[0] === 'car-accident-statistics') {
      const stateData = getStateData(segments[1]);
      if (stateData) {
        meta.title = `${stateData.name} Car Accident Stats 2025 | Car Injury Law`;
        meta.description = `${stateData.name} car accident statistics and data. Statute of limitations: ${stateData.statute}. Know your rights.`;
        meta.keywords = `${stateData.name} car accident statistics, ${stateData.abbr} crash data, ${stateData.name} lawyer`;
        
        meta.ogTitle = meta.title;
        meta.ogDescription = meta.description;
        return generateTagsHtml(meta, path);
      }
    }

    if (segments.length > 0) {
        const firstSegment = segments[0];

        const PRACTICE_AREAS: Record<string, string> = {
            'personal-injury-lawyer': 'Personal Injury',
            'motorcycle-accident-lawyer': 'Motorcycle Accident',
            'truck-accident-lawyer': 'Truck Accident',
            'pedestrian-injury-lawyer': 'Pedestrian Injury',
            'bus-accident-lawyer': 'Bus Accident',
            'workplace-injury-lawyer': 'Workplace Injury',
            'medical-malpractice-lawyer': 'Medical Malpractice',
            'slip-and-fall-lawyer': 'Slip and Fall'
        };

        if (PRACTICE_AREAS[firstSegment] && segments.length === 2) {
            const stateSlug = segments[1];
            const stateData = getStateData(stateSlug);

            if (stateData) {
                const practiceLabel = PRACTICE_AREAS[firstSegment];
                meta.title = `${stateData.name} ${practiceLabel} Lawyer | Car Injury Law`;
                meta.description = `Need a ${practiceLabel.toLowerCase()} lawyer in ${stateData.name}? We handle ${stateData.name} cases. Free consultation. Call 24/7.`;
                meta.keywords = `${practiceLabel.toLowerCase()} ${stateData.name}, ${stateData.name} lawyer, injury attorney ${stateData.abbr}`;
                
                meta.ogTitle = meta.title;
                meta.ogDescription = meta.description;

                return generateTagsHtml(meta, path);
            }
        }

        const stateData = getStateData(firstSegment);

        if (stateData) {
            if (segments.length === 1) {
                meta.title = `${stateData.name} Car Accident Lawyer | Free Consultation`;
                meta.description = `Top-rated car accident lawyers in ${stateData.name}. ${stateData.faultSystem} state. Statute: ${stateData.statute}. Call 24/7.`;
                
            } else if (segments.length === 2) {
                const cityName = toCityCase(segments[1]);
                meta.title = `${cityName} Car Accident Lawyer | ${stateData.abbr} | Car Injury Law`;
                meta.description = `Injured in ${cityName}, ${stateData.abbr}? Our attorneys know ${stateData.name} laws. ${stateData.statute} to file. Free case review.`;
            }

            meta.ogTitle = meta.title;
            meta.ogDescription = meta.description;

            return generateTagsHtml(meta, path);
        }
    }

    meta.ogTitle = meta.title;
    meta.ogDescription = meta.description;

    return generateTagsHtml(meta, path);
}