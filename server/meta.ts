import { STATE_DATA, type StateData } from "./state-data";
import { SERVICE_SYNONYM_PAGES } from "../client/src/data/service-synonym-pages";
import { NEAR_ME_PAGES } from "../client/src/data/near-me-pages";
import { PRACTICE_AREA_PAGES } from "../client/src/data/practice-area-pages";
import { BEST_PAGES } from "../client/src/data/best-pages";
import he from "he";

interface MetaTags {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
}

const DEFAULT_META: MetaTags = {
    title: "Car Accident & Injury Attorneys | Car Injury Law",
    description: "Expert car accident and personal injury lawyers in USA. We fight insurance companies to maximize your settlement. Free consultation 24/7.",
    keywords: "car accident lawyer, personal injury attorney, truck accident lawyer",
    canonical: "https://www.carinjurylaw.com/",
    ogTitle: "Car Accident & Injury Attorneys | Car Injury Law",
    ogDescription: "Expert car accident and personal injury representation nationwide. We fight insurance companies to maximize your settlement. Free consultation 24/7.",
    ogImage: "https://www.carinjurylaw.com/og-image.jpg",
};

function generateTagsHtml(meta: MetaTags, schema?: object): string {
    const escape = he.encode;
    const schemaTag = schema 
      ? `\n    <script type="application/ld+json">${JSON.stringify(schema)}</script>`
      : '';
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
    <meta property="twitter:image" content="${escape(meta.ogImage)}" />${schemaTag}
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
        return generateTagsHtml(meta);
    }

    if (path === '/about') {
        meta.title = "About Admani Law | Car Injury Law";
        meta.description = "Learn about Car Injury Law and lead trial attorney Saad Admani.";
    }
    else if (path.includes('/practice-areas/')) {
        const area = path.split('/').pop()?.replace(/-/g, ' ');
        const formattedArea = toCityCase(area || "");

        meta.title = `${formattedArea} Lawyers | Car Injury Law`;
        meta.description = `Injured in a ${formattedArea.toLowerCase()} accident? Our experienced attorneys fight for the compensation you deserve.`;
    }

    // --- 2. Dynamic State & City Routes ---
    const getStateData = (slugPart: string): StateData | undefined => {
        return Object.values(STATE_DATA).find(
            (s) => s.slug === slugPart || s.name.toLowerCase().replace(/ /g, '-') === slugPart
        );
    };

    const segments = path.split('/').filter(Boolean);

    // --- 3. Service Synonym Pages, Near Me Pages, Practice Area Pages & Best Pages ---
    if (segments.length === 1) {
        const bestPage = BEST_PAGES.find(p => p.slug === segments[0]);
        const pageData = 
          SERVICE_SYNONYM_PAGES.find(p => p.slug === segments[0]) || 
          NEAR_ME_PAGES.find(p => p.slug === segments[0]) ||
          PRACTICE_AREA_PAGES.find(p => p.slug === segments[0]) ||
          bestPage;
          
        if (pageData) {
            meta.title = pageData.title;
            meta.description = pageData.description;
            meta.keywords = pageData.keyword;
            
            const schema: any = {
                "@context": "https://schema.org",
                "@type": "LegalService",
                "name": "Car Injury Law",
                "url": meta.canonical,
                "description": meta.description
            };
            
            if (bestPage) {
              schema.aggregateRating = {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500",
                "bestRating": "5"
              };
            }
            
            return generateTagsHtml(meta, schema);
        }
    }

    // Statistics pages: /car-accident-statistics/{state}/
    if (segments.length === 2 && segments[0] === 'car-accident-statistics') {
      const stateData = getStateData(segments[1]);
      if (stateData) {
        meta.title = `${stateData.name} Car Accident Statistics 2025 | Car Injury Law`;
        meta.description = `${stateData.name} car accident statistics and data. Fault system: ${stateData.faultSystem}. Statute of limitations: ${stateData.statute}. Average settlements ${stateData.avgSettlement}. Know your rights — free consultation.`;
        meta.keywords = `${stateData.name} car accident statistics, ${stateData.abbr} car crash data 2025, ${stateData.name} accident lawyer`;
        
        // Add Article + LegalService schema
        const schema = {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": meta.title,
          "description": meta.description,
          "url": canonical,
          "author": { "@type": "Organization", "name": "Car Injury Law" }
        };
        meta.ogTitle = meta.title;
        meta.ogDescription = meta.description;
        return generateTagsHtml({ ...meta, canonical }, schema);
      }
    }

    if (segments.length > 0) {
        const firstSegment = segments[0];

        // --- 2a. Dynamic Practice Area + State Routes ---
        const PRACTICE_AREAS: Record<string, string> = {
            'personal-injury-lawyer': 'Personal Injury Lawyer',
            'motorcycle-accident-lawyer': 'Motorcycle Accident Lawyer',
            'truck-accident-lawyer': 'Truck Accident Lawyer',
            'pedestrian-injury-lawyer': 'Pedestrian Injury Lawyer',
            'bus-accident-lawyer': 'Bus Accident Lawyer',
            'workplace-injury-lawyer': 'Workplace Injury Lawyer',
            'medical-malpractice-lawyer': 'Medical Malpractice Lawyer',
            'slip-and-fall-lawyer': 'Slip and Fall Lawyer'
        };

        if (PRACTICE_AREAS[firstSegment] && segments.length === 2) {
            const stateSlug = segments[1];
            const stateData = getStateData(stateSlug);

            if (stateData) {
                const practiceLabel = PRACTICE_AREAS[firstSegment];
                const schema = {
                    "@context": "https://schema.org",
                    "@type": "LegalService",
                    "name": "Car Injury Law",
                    "url": canonical,
                    "serviceType": [practiceLabel],
                    "areaServed": {
                        "@type": "State",
                        "name": stateData.name
                    }
                };

                meta.title = `${stateData.name} ${practiceLabel} | Car Injury Law`;
                meta.description = `Need a ${practiceLabel} in ${stateData.name}? Our attorneys handle ${practiceLabel} cases under ${stateData.name}'s ${stateData.faultSystem} system. ${stateData.statute} to file. Free consultation. Call 24/7.`;
                meta.keywords = `${practiceLabel.toLowerCase()} ${stateData.name}, ${stateData.name} ${practiceLabel.toLowerCase()}, personal injury attorney ${stateData.abbr}`;
                
                meta.ogTitle = meta.title;
                meta.ogDescription = meta.description;

                return generateTagsHtml(meta, schema);
            }
        }

        // --- 2b. Dynamic State & City Routes (Car Accident Default) ---
        const stateData = getStateData(firstSegment);

        if (stateData) {
            let schema: any = undefined;

            if (segments.length === 1) {
                meta.title = `${stateData.name} Car Accident Lawyer | Free Consultation | Car Injury Law`;
                meta.description = `Top-rated car accident lawyers in ${stateData.name}. ${stateData.faultSystem} state. Statute of limitations: ${stateData.statute}. Average settlement ${stateData.avgSettlement}. Call 24/7 — free consultation.`;
                meta.keywords = `car accident lawyer ${stateData.name}, ${stateData.name} car accident attorney, personal injury lawyer ${stateData.abbr}`;
                
                const legalServiceSchema = {
                    "@type": "LegalService",
                    "name": "Car Injury Law",
                    "url": canonical,
                    "areaServed": {
                        "@type": "State",
                        "name": stateData.name
                    }
                };

                if (stateData.faq && stateData.faq.length > 0) {
                    const faqSchema = {
                        "@type": "FAQPage",
                        "mainEntity": stateData.faq.map(f => ({
                            "@type": "Question",
                            "name": f.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": f.answer
                            }
                        }))
                    };

                    schema = {
                        "@context": "https://schema.org",
                        "@graph": [legalServiceSchema, faqSchema]
                    };
                } else {
                    schema = {
                        "@context": "https://schema.org",
                        ...legalServiceSchema
                    };
                }

            } else if (segments.length === 2) {
                const cityName = toCityCase(segments[1]);
                meta.title = `${cityName} Car Accident Lawyer | ${stateData.name} | Car Injury Law`;
                meta.description = `Injured in a car accident in ${cityName}, ${stateData.abbr}? Our attorneys know ${stateData.name}'s ${stateData.faultSystem} laws. ${stateData.statute} to file. Avg settlement ${stateData.avgSettlement}. Free case review.`;
                meta.keywords = `car accident lawyer ${cityName}, ${cityName} ${stateData.abbr} car accident attorney, personal injury lawyer ${cityName}`;

                schema = {
                    "@context": "https://schema.org",
                    "@type": "LegalService",
                    "name": "Car Injury Law",
                    "url": canonical,
                    "areaServed": {
                        "@type": "City",
                        "name": cityName
                    }
                };
            }

            meta.ogTitle = meta.title;
            meta.ogDescription = meta.description;

            return generateTagsHtml(meta, schema);
        }
    }

    meta.ogTitle = meta.title;
    meta.ogDescription = meta.description;

    return generateTagsHtml(meta);
}