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
    title: "Car Accident and Personal Injury Attorneys | Car Injury Law",
    description: "Expert car accident and personal injury lawyers. We fight insurance companies to maximize your settlement. Free consultation 24/7.",
    keywords: "car accident lawyer, personal injury attorney, truck accident lawyer",
    canonical: "https://www.carinjurylaw.com/",
    ogTitle: "Car Accident & Injury Attorneys | Car Injury Law",
    ogDescription: "Expert car accident and personal injury representation. We fight insurance companies to maximize your settlement. Free consultation 24/7.",
    ogImage: "https://www.carinjurylaw.com/og-image.jpg",
};


function fixDescription(
    desc: string,
    keyword: string
): string {
    const cleaned = desc.trim();

    if (cleaned.length >= 120 &&
        cleaned.length <= 160) {
        return cleaned;
    }

    if (cleaned.length > 160) {
        return cleaned.substring(0, 157) + '...';
    }

    if (cleaned.length < 120) {
        const suffixes = [
            ' Free consultation 24/7. No win no fee. Call now.',
            ' Speak with an attorney free today. No upfront costs.',
            ' Get a free case review today. We fight for maximum compensation.',
            ' Call 24/7 for free legal advice. No win no fee guarantee.',
            ' Free case evaluation available now. All 50 states served.'
        ]
        const suffix = suffixes[
            Math.abs(keyword.length) % suffixes.length
        ]
        return (cleaned + suffix).substring(0, 160);
    }

    return cleaned;
}

function generateTagsHtml(meta: MetaTags, path: string): string {
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
    return 'https://www.carinjurylaw.com' + cleanPath + '/';
}

export interface PageData {
    h1: string;
    title: string;
    description: string;
}

export function getPageData(url: string): PageData | null {
    const urlObj = new URL(url, 'http://localhost');
    const path = urlObj.pathname;
    const segments = path.split('/').filter(Boolean);

    const toCityCase = (str: string) => {
        return decodeURIComponent(str)
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    const getStateData = (slugPart: string): StateData | undefined => {
        return Object.values(STATE_DATA).find(
            (s) => s.slug === slugPart || s.name.toLowerCase().replace(/ /g, '-') === slugPart
        );
    };

    // --- 1. SEO Data Files ---
    if (segments.length === 1) {
        const pageData =
            (SERVICE_SYNONYM_PAGES.find(p => p.slug === segments[0]) as any) ||
            (NEAR_ME_PAGES.find(p => p.slug === segments[0]) as any) ||
            (PRACTICE_AREA_PAGES.find(p => p.slug === segments[0]) as any) ||
            (BEST_PAGES.find(p => p.slug === segments[0]) as any) ||
            (STATE_SPECIFIC_PAGES.find(p => p.slug === segments[0]) as any);

        if (pageData) {
            return {
                h1: pageData.h1 || pageData.title,
                title: pageData.title,
                description: pageData.description
            };
        }
    }

    // --- 2. Dynamic City/State / Statistics ---
    if (segments.length === 2 && segments[0] === 'car-accident-statistics') {
        const stateData = getStateData(segments[1]);
        if (stateData) {
            const title = `${stateData.name} Car Accident Stats 2025 | Car Injury Law`;
            return {
                h1: `${stateData.name} Car Accident Statistics`,
                title,
                description: `${stateData.name} car accident statistics and data. Statute of limitations: ${stateData.statute}. Know your rights.`
            };
        }
    }

    if (segments.length > 0) {
        const firstSegment = segments[0];
        const stateData = getStateData(firstSegment);

        if (stateData) {
            if (segments.length === 1) {
                return {
                    h1: `${stateData.name} Car Accident Lawyer`,
                    title: `${stateData.name} Car Accident Lawyer | Free Consultation`,
                    description: `Top-rated car accident lawyers in ${stateData.name}. ${stateData.faultSystem} state. Statute: ${stateData.statute}. Call 24/7.`
                };
            } else if (segments.length === 2) {
                const cityName = toCityCase(segments[1]);
                return {
                    h1: `${cityName} Car Accident Lawyer`,
                    title: `${cityName} Car Accident Lawyer | ${stateData.abbr} | Car Injury Law`,
                    description: `Injured in ${cityName}, ${stateData.abbr}? Our attorneys know ${stateData.name} laws. ${stateData.statute} to file. Free case review.`
                };
            }
        }
    }

    return null;
}

export function getMetaTagsHtml(url: string): string {
    const urlObj = new URL(url, 'http://localhost');
    const path = urlObj.pathname;
    const canonical = getBaseUrl(path);

    let meta = { ...DEFAULT_META, canonical };

    const pageData = getPageData(url);
    if (pageData) {
        meta.title = pageData.title;
        meta.description = fixDescription(pageData.description, pageData.h1);
        meta.ogTitle = meta.title;
        meta.ogDescription = meta.description;
        return generateTagsHtml(meta, path);
    }

    // Fallbacks for non-SEO-data pages
    if (path === '/') {
        meta.description = fixDescription(meta.description, "car injury law");
        return generateTagsHtml(meta, path);
    }

    if (path === '/about' || path === '/about/') {
        meta.title = "About Admani Law | Car Injury Law";
        meta.description = fixDescription("Learn about Car Injury Law and lead trial attorney Saad Admani.", "about");
    }

    meta.ogTitle = meta.title;
    meta.ogDescription = fixDescription(meta.description, "default");

    return generateTagsHtml(meta, path);
}