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
    title: "Car Injury Law | Nationwide Accident & Injury Attorneys",
    description: "Top-rated nationwide personal injury firm. We fight insurance companies to get you maximum compensation. Free case review. No win, no fee. Call 1-888-669-5559.",
    keywords: "car accident lawyer, injury attorney, truck accident, motorcycle crash, wrongful death, settlement calculator, Saad Admani",
    canonical: "https://www.carinjurylaw.com/",
    ogTitle: "Car Injury Law | Get Maximum Compensation",
    ogDescription: "Injured in a crash? We fight the big giants every day. Available 24/7 for a free consultation.",
    ogImage: "https://www.carinjurylaw.com/og-image.png"
};

function generateTagsHtml(meta: MetaTags): string {
    // Ensure we escape strings properly to avoid XSS or broken HTML
    const escape = he.encode;

    return `
    <title>${escape(meta.title)}</title>
    <meta name="description" content="${escape(meta.description)}" />
    <meta name="keywords" content="${escape(meta.keywords)}" />
    <link rel="canonical" href="${escape(meta.canonical)}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escape(meta.canonical)}" />
    <meta property="og:title" content="${escape(meta.ogTitle)}" />
    <meta property="og:description" content="${escape(meta.ogDescription)}" />
    <meta property="og:image" content="${escape(meta.ogImage)}" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${escape(meta.canonical)}" />
    <meta property="twitter:title" content="${escape(meta.ogTitle)}" />
    <meta property="twitter:description" content="${escape(meta.ogDescription)}" />
    <meta property="twitter:image" content="${escape(meta.ogImage)}" />
  `;
}

function getBaseUrl(urlPath: string): string {
    if (urlPath === '/' || urlPath === '') return "https://www.carinjurylaw.com/";
    // Ensure it starts with a slash
    const cleanPath = urlPath.startsWith('/') ? urlPath : `/${urlPath}`;
    // Ensure it doesn't end with a slash if it's not the root
    const formattedPath = cleanPath.endsWith('/') && cleanPath.length > 1
        ? cleanPath.slice(0, -1)
        : cleanPath;
    return `https://www.carinjurylaw.com${formattedPath}`;
}

export function getMetaTagsHtml(url: string): string {
    // Parse URL to ignore query strings
    const urlObj = new URL(url, 'http://localhost');
    const path = urlObj.pathname;
    const canonical = getBaseUrl(path);

    // Default meta baseline
    let meta = { ...DEFAULT_META, canonical };

    // Helper for City Title Case (e.g., new-york -> New York)
    const toTitleCase = (str: string) =>
        str.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

    const toCityCase = (str: string) => {
        return decodeURIComponent(str)
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    // --- 1. Static Routes ---
    if (path === '/') {
        return generateTagsHtml(meta);
    }

    if (path === '/about') {
        meta.title = "About Us | Car Injury Law | Nationwide Attorneys";
        meta.description = "Learn about Car Injury Law and lead trial attorney Saad Admani. We are dedicated to fighting for injury victims nationwide.";
        meta.ogTitle = meta.title;
        meta.ogDescription = meta.description;
        return generateTagsHtml(meta);
    }

    // Example for practice areas landing pages
    if (path === '/practice-areas/car-accident') {
        meta.title = "Car Accident Lawyers | Nationwide Representation | Car Injury Law";
        meta.description = "Injured in a car accident? Our experienced attorneys fight for the compensation you deserve. Available 24/7 for a free consultation.";
        meta.ogTitle = meta.title;
        meta.ogDescription = meta.description;
        return generateTagsHtml(meta);
    }

    if (path === '/practice-areas/truck-accident') {
        meta.title = "Truck Accident Attorneys | 18-Wheeler Crash Lawyers | Car Injury Law";
        meta.description = "Commercial truck accidents cause devastating injuries. We hold trucking corporations accountable and secure maximum settlements.";
        meta.ogTitle = meta.title;
        meta.ogDescription = meta.description;
        return generateTagsHtml(meta);
    }

    if (path === '/practice-areas/motorcycle-accident') {
        meta.title = "Motorcycle Accident Lawyers | Dedicated Representation | Car Injury Law";
        meta.description = "Motorcycle crash cases require aggressive representation. Don't let insurance companies blame you. Free case review today.";
        meta.ogTitle = meta.title;
        meta.ogDescription = meta.description;
        return generateTagsHtml(meta);
    }

    // --- 2. Dynamic State & City Routes ---

    // Helper to find state data by slug or name
    const getStateData = (slugPart: string): StateData | undefined => {
        return Object.values(STATE_DATA).find(
            (s) => s.slug === slugPart || s.name.toLowerCase().replace(/ /g, '-') === slugPart
        );
    };

    const segments = path.split('/').filter(Boolean); // e.g. ["alabama-car-accident-lawyer", "birmingham"]

    if (segments.length > 0) {
        const firstSegment = segments[0];

        // Check if it's a practice area state route: /personal-injury-lawyer/alabama
        let stateNameSlug: string | null = null;
        let practiceAreaName = "Car Accident"; // Default

        if (firstSegment === 'personal-injury-lawyer' && segments.length === 2) {
            stateNameSlug = segments[1];
            practiceAreaName = "Personal Injury";
        } else if (firstSegment === 'motorcycle-accident-lawyer' && segments.length === 2) {
            stateNameSlug = segments[1];
            practiceAreaName = "Motorcycle Accident";
        } else if (firstSegment === 'truck-accident-lawyer' && segments.length === 2) {
            stateNameSlug = segments[1];
            practiceAreaName = "Truck Accident";
        } else if (firstSegment === 'pedestrian-injury-lawyer' && segments.length === 2) {
            stateNameSlug = segments[1];
            practiceAreaName = "Pedestrian Injury";
        } else if (firstSegment === 'bus-accident-lawyer' && segments.length === 2) {
            stateNameSlug = segments[1];
            practiceAreaName = "Bus Accident";
        } else if (firstSegment === 'workplace-injury-lawyer' && segments.length === 2) {
            stateNameSlug = segments[1];
            practiceAreaName = "Workplace Injury";
        } else if (firstSegment === 'medical-malpractice-lawyer' && segments.length === 2) {
            stateNameSlug = segments[1];
            practiceAreaName = "Medical Malpractice";
        } else if (firstSegment === 'slip-and-fall-lawyer' && segments.length === 2) {
            stateNameSlug = segments[1];
            practiceAreaName = "Slip and Fall";
        }

        if (stateNameSlug) {
            const stateData = getStateData(stateNameSlug);
            if (stateData) {
                meta.title = `${stateData.name} ${practiceAreaName} Lawyer | Top-Rated Attorneys`;
                meta.description = `Injured in a ${practiceAreaName.toLowerCase()} in ${stateData.name}? Our top-rated injury lawyers fight for maximum compensation. Free case review. No win, no fee.`;
                meta.ogTitle = meta.title;
                meta.ogDescription = meta.description;
                return generateTagsHtml(meta);
            }
        }

        // Default state route: /alabama-car-accident-lawyer
        const stateData = getStateData(firstSegment);

        if (stateData) {
            if (segments.length === 1) {
                // State level
                meta.title = `${stateData.name} Car Accident Lawyer | Max Compensation`;
                meta.description = `Top-rated car accident lawyers in ${stateData.name}. We know ${stateData.name}'s laws, including the ${stateData.statute} statute of limitations. Free consultation!`;
                meta.ogTitle = meta.title;
                meta.ogDescription = meta.description;
                return generateTagsHtml(meta);
            } else if (segments.length === 2) {
                // City level: /alabama-car-accident-lawyer/birmingham
                const citySlug = segments[1];
                const cityName = toCityCase(citySlug);

                meta.title = `${cityName}, ${stateData.abbr} Car Accident Lawyer | Top Local Attorneys`;
                meta.description = `Injured in ${cityName}, ${stateData.abbr}? Our expert car accident lawyers fight the big insurance companies. Available 24/7 for a free case evaluation.`;
                meta.ogTitle = meta.title;
                meta.ogDescription = meta.description;
                return generateTagsHtml(meta);
            }
        }
    }

    // Fallback for everything else
    return generateTagsHtml(meta);
}
