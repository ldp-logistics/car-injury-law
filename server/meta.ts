import { STATE_DATA, type StateData } from "./state-data";
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

function generateTagsHtml(meta: MetaTags): string {
    const escape = he.encode;
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

    if (segments.length > 0) {
        const firstSegment = segments[0];
        const stateData = getStateData(firstSegment);

        if (stateData) {
            if (segments.length === 1) {
                meta.title = `${stateData.name} Car Accident Lawyer | Car Injury Law`;
                meta.description = `Top-rated car accident lawyers in ${stateData.name}. We know the ${stateData.statute} statute of limitations.`;
            } else if (segments.length === 2) {
                const cityName = toCityCase(segments[1]);
                meta.title = `${cityName}, ${stateData.abbr} Car Accident Lawyer | Car Injury Law`;
                meta.description = `Injured in ${cityName}, ${stateData.abbr}? Our expert lawyers fight for your settlement.`;
            }
        }
    }

    meta.ogTitle = meta.title;
    meta.ogDescription = meta.description;

    return generateTagsHtml(meta);
}