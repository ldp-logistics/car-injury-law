import { STATE_DATA, type StateData } from "./state-data";
import { SERVICE_SYNONYM_PAGES } from "../client/src/data/service-synonym-pages";
import { NEAR_ME_PAGES } from "../client/src/data/near-me-pages";
import { PRACTICE_AREA_PAGES } from "../client/src/data/practice-area-pages";
import { BEST_PAGES } from "../client/src/data/best-pages";
import { STATE_SPECIFIC_PAGES } from "../client/src/data/state-specific-pages";
import {
    buildLegalServiceSchema,
    buildLocalBusinessSchema,
    buildBreadcrumbSchema,
    buildOrganizationSchema,
    buildArticleSchema,
    SITE_URL
} from './schema-builder';
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
    ${meta.schema ? `<script type="application/ld+json">${JSON.stringify(meta.schema)}</script>` : ''}
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
    keyword?: string;
    faqs?: Array<{ question: string; answer: string }>;
    slug?: string;
    state?: string;
    contentBlocks?: {
        whyChoose: string;
        howWeHelp: string;
    };
    internalLinks?: Array<{ label: string; href: string }>;
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

    // --- 0. Hardcoded Pages ---
    if (path === '/') {
        return {
            h1: "Car Accident and Personal Injury Attorneys",
            title: DEFAULT_META.title,
            description: DEFAULT_META.description,
            slug: "homepage"
        };
    }

    if (path === '/about' || path === '/about/') {
        return {
            h1: "About Car Injury Law",
            title: "About Admani Law | Car Injury Law",
            description: "Learn about Car Injury Law and lead trial attorney Saad Admani.",
            slug: "about"
        };
    }

    // --- 1. SEO Data Files (Matches slugs like 'personal-injury-lawyer') ---
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
                description: pageData.description,
                keyword: pageData.keyword,
                faqs: pageData.contentBlocks?.faqs,
                slug: pageData.slug,
                state: pageData.state,
                contentBlocks: pageData.contentBlocks,
                internalLinks: pageData.internalLinks
            };
        }
    }

    // --- 2. Dynamic City/State / Statistics ---
    // Statistics: /car-accident-statistics/texas/
    if (segments.length === 2 && segments[0] === 'car-accident-statistics') {
        const stateData = getStateData(segments[1]);
        if (stateData) {
            const title = `${stateData.name} Car Accident Stats 2025 | Car Injury Law`;
            return {
                h1: `${stateData.name} Car Accident Statistics`,
                title,
                description: `${stateData.name} car accident statistics and data. Statute of limitations: ${stateData.statute}. Know your rights.`,
                slug: `car-accident-statistics/${segments[1]}`,
                state: stateData.name.toLowerCase()
            };
        }
    }

    // City/State: /texas/ or /texas/houston/
    // We also need to check if these slugs exist in STATE_SPECIFIC_PAGES if accessed via their full slug
    if (segments.length > 0) {
        const firstSegment = segments[0];
        const stateData = getStateData(firstSegment);

        if (stateData) {
            // Check for state-specific page data by slug 'state-name-car-accident-lawyer'
            const fullStateSlug = `${stateData.name.toLowerCase().replace(/ /g, '-')}-car-accident-lawyer`;
            const seoData = STATE_SPECIFIC_PAGES.find(p => p.slug === fullStateSlug || p.slug === firstSegment);

            if (segments.length === 1) {
                return {
                    h1: seoData?.h1 || `${stateData.name} Car Accident Lawyer`,
                    title: seoData?.title || `${stateData.name} Car Accident Lawyer | Free Consultation`,
                    description: seoData?.description || `Top-rated car accident lawyers in ${stateData.name}. ${stateData.faultSystem} state. Statute: ${stateData.statute}. Call 24/7.`,
                    keyword: seoData?.keyword || `${stateData.name} car accident lawyer`,
                    slug: segments[0],
                    state: stateData.name.toLowerCase(),
                    contentBlocks: seoData?.contentBlocks,
                    internalLinks: seoData?.internalLinks
                };
            } else if (segments.length === 2) {
                const cityName = toCityCase(segments[1]);
                return {
                    h1: `${cityName} Car Accident Lawyer`,
                    title: `${cityName} Car Accident Lawyer | ${stateData.abbr} | Car Injury Law`,
                    description: `Injured in ${cityName}, ${stateData.abbr}? Our attorneys know ${stateData.name} laws. ${stateData.statute} to file. Free case review.`,
                    keyword: `${cityName} car accident lawyer`,
                    slug: `${segments[0]}/${segments[1]}`,
                    state: stateData.name.toLowerCase(),
                    // City pages don't have dedicated data blocks yet, will use fallback in getPageContent
                };
            }
        }
    }

    return null;
}

export function getPageContent(url: string): string {
    const data = getPageData(url);
    if (!data) return "";

    const segments = new URL(url, 'http://localhost').pathname.split('/').filter(Boolean);
    const stateSlug = segments[0] === 'car-accident-statistics' ? segments[1] : segments[0];
    const stateData = Object.values(STATE_DATA).find(s => 
        s.slug === stateSlug || 
        s.name.toLowerCase().replace(/ /g, '-') === stateSlug
    );

    // 0. Fallback for Homepage
    if (data.slug === 'homepage') {
        return `
            <div class="ssr-content" style="display:none">
                <section>
                    <h1>Car Accident and Personal Injury Attorneys</h1>
                    <p>Car Injury Law is a premier personal injury law firm dedicated to fighting for victims of car accidents, truck accidents, and catastrophic injuries. Our team of experienced trial attorneys, led by Saad Admani, works tirelessly to maximize settlements and ensure our clients get the medical care and financial recovery they deserve.</p>
                    <p>We offer free consultations 24/7 and operate on a No Win, No Fee promise. Serving all 50 states, we specialize in navigating complex insurance claims and holding negligent parties accountable. Call us today to speak with a legal expert about your case.</p>
                </section>
            </div>
        `;
    }

    // 1. If we have specific content blocks, use them
    if (data.contentBlocks) {
        const { whyChoose, howWeHelp } = data.contentBlocks;
        return `
            <div class="ssr-content" style="display:none">
                <section>
                    <h2>Why Choose Car Injury Law?</h2>
                    <p>${whyChoose.replace(/\n\n/g, "</p><p>")}</p>
                </section>
                <section>
                    <h2>How Our Attorneys Can Help</h2>
                    <p>${howWeHelp.replace(/\n\n/g, "</p><p>")}</p>
                </section>
            </div>
        `;
    }

    // 2. Fallback for City/State pages if no blocks exist
    if (stateData) {
        const kw = data.keyword || data.h1;
        const location = segments.length === 2 && segments[0] !== 'car-accident-statistics' ? `${toCityCase(segments[1])}, ${stateData.name}` : stateData.name;
        
        if (segments[0] === 'car-accident-statistics') {
            return `
                <div class="ssr-content" style="display:none">
                    <section>
                        <h2>${stateData.name} Car Accident Statistics & Data 2025</h2>
                        <p>Understanding the latest <strong class="text-primary">${stateData.name} car accident statistics</strong> is vital for victims seeking justice. Each year, thousands of collisions occur on ${stateData.name} roadways, ranging from minor fender benders to catastrophic multi-vehicle accidents. Our data-driven analysis helps you understand the risks and your legal options.</p>
                        <p>In ${stateData.name}, the statute of limitations for personal injury claims is ${stateData.statute}. This means victims must act quickly to preserve evidence and file their claims. Whether you were involved in a distracted driving incident or a commercial truck collision, knowing the local trends and laws is the first step toward recovery.</p>
                    </section>
                    <section>
                        <h2>Legal Rights and Recovery in ${stateData.name}</h2>
                        <p>If you have been injured, you are entitled to fight for compensation for medical bills, lost wages, and pain and suffering. We provide aggressive representation for ${stateData.name} victims, ensuring that insurance companies are held accountable for the damages caused by negligent drivers. Contact us today for a free evaluation of your case.</p>
                    </section>
                </div>
            `;
        }

        return `
            <div class="ssr-content" style="display:none">
                <section>
                    <h2>Best ${kw} in ${location}</h2>
                    <p>Finding a top-rated <strong class="text-primary">${kw}</strong> in ${location} is critical after a serious accident. In ${stateData.name}, the law utilizes a ${stateData.faultSystem} approach, meaning fault can significantly impact your recovery. Our legal team understands ${stateData.name} statutes and fights for maximum compensation.</p>
                    <p>Every minute counts after a collision. The statute of limitations in ${stateData.name} is ${stateData.statute}. We help victims in ${location} navigate insurance claims, medical bills, and litigation to ensure they are not taken advantage of by large corporations.</p>
                </section>
                <section>
                    <h2>Aggressive Legal Representation You Can Trust</h2>
                    <p>Whether you were injured in a highway collision or a local intersection accident in ${location}, our attorneys are available 24/7 to provide a free case review. We operate on a contingency fee basis—you pay nothing unless we win your case. Our goal is to recover every dollar you deserve for medical expenses, lost wages, and pain and suffering.</p>
                </section>
            </div>
        `;
    }

    return "";
}

// Helper to convert slug to Title Case
function toCityCase(str: string) {
    return decodeURIComponent(str)
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function getRelatedLinks(url: string): string {
    const data = getPageData(url);
    if (!data) return "";

    let links = data.internalLinks || [];

    // Fallback: If it's a state page, show city links
    const segments = new URL(url, 'http://localhost').pathname.split('/').filter(Boolean);
    if (links.length === 0 && segments.length === 1) {
        const stateSlug = segments[0];
        const stateData = Object.values(STATE_DATA).find(s => 
            s.slug === stateSlug || 
            s.name.toLowerCase().replace(/ /g, '-') === stateSlug
        );
        if (stateData) {
            links = stateData.cityList.slice(0, 10).map(city => ({
                label: `${city} Car Accident Lawyer`,
                href: `/${stateData.slug}/${city.toLowerCase().replace(/ /g, '-')}/`
            }));
        }
    }

    if (links.length === 0) return "";

    return `
        <div class="ssr-links" style="display:none">
            <h2>Related Legal Resources</h2>
            <ul>
                ${links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
            </ul>
        </div>
    `;
}

export function getMetaTagsHtml(url: string): string {
    const urlObj = new URL(url, 'http://localhost');
    const path = urlObj.pathname;
    const segments = path.split('/').filter(Boolean);
    const canonical = getBaseUrl(path);

    let meta: MetaTags = { ...DEFAULT_META, canonical };

    const pageData = getPageData(url);
    if (pageData) {
        meta.title = pageData.title;
        meta.description = fixDescription(pageData.description, pageData.h1);
        meta.ogTitle = meta.title;
        meta.ogDescription = meta.description;

        // --- Schema Generation Logic ---
        const pageUrl = SITE_URL + (path === '/' ? '/' : path + '/');

        if (path === '/') {
            meta.schema = buildOrganizationSchema();
        } else if (segments[0] === 'car-accident-statistics') {
            meta.schema = buildArticleSchema(pageData.title, pageData.description, pageUrl);
        } else if (pageData.slug && segments.length === 1 && !Object.values(STATE_DATA).some(s => s.slug === segments[0])) {
            // Service Synonym / Near Me / Practice Area pages (LegalService)
            const matchedState = Object.values(STATE_DATA).find(s => s.slug === pageData.state);
            meta.schema = buildLegalServiceSchema(
                pageData.keyword || pageData.h1,
                pageData.description,
                pageUrl,
                matchedState?.name || 'United States',
                pageData.faqs
            );
        } else {
            // State and City pages (LocalBusiness)
            const stateData = Object.values(STATE_DATA).find(s => 
                s.slug === segments[0] || s.name.toLowerCase().replace(/ /g, '-') === segments[0]
            );
            if (stateData) {
                meta.schema = buildLocalBusinessSchema(
                    stateData.name,
                    pageUrl
                );
            }
        }

        if (process.env.NODE_ENV === 'development' && meta.schema) {
            const validateSchema = (schema: object) => {
                const str = JSON.stringify(schema);
                if (!str.includes('@context')) console.error(`[Schema Error] ${path}: Missing @context`);
                if (!str.includes('@type')) console.error(`[Schema Error] ${path}: Missing @type`);
            };
            validateSchema(meta.schema);
        }

        return generateTagsHtml(meta, path);
    }

    return generateTagsHtml(meta, path);
}