import { useEffect } from "react";
import { useLocation } from "wouter";
import { getSeoMetadata } from "@/lib/seo-generator";

/**
 * SEO HEAD COMPONENT
 * ------------------
 * Manages the document head for SEO purposes in this SPA.
 * Dynamically updates Title, Meta Tags, and injects JSON-LD Schema.
 * Uses getSeoMetadata for intelligent, route-based generation.
 * 
 * Usage:
 * <SeoHead 
 *   title="Page Title" 
 *   description="Page Description" 
 *   schema={{ "@context": "https://schema.org", ... }} 
 * />
 */
interface SeoHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  schema?: Record<string, any>;
  lastUpdated?: string;
}

export function SeoHead({ 
  title: propTitle, 
  description: propDescription, 
  canonicalUrl, 
  ogImage = "https://www.carinjurylaw.com/og-image.jpg", // Fallback
  ogType = "website",
  schema,
  lastUpdated
}: SeoHeadProps) {
  const [location] = useLocation();
  
  // Dynamic SEO Generation
  const generatedSeo = getSeoMetadata(location);
  
  // Priority: 1. Generated (Map/Dynamic) -> 2. Props (Page Specific override) -> 3. Defaults
  // Exception: If props are explicitly passed (like blog posts), they might override generic generation.
  // However, usually specific pages pass props, while generic ones rely on this.
  // Let's allow props to win if provided, as that means specific component logic.
  
  const title = propTitle || generatedSeo?.title || "Car Injury Law | Nationwide Accident Attorneys";
  const description = propDescription || generatedSeo?.description || "Expert car accident and personal injury representation nationwide. We fight insurance companies to maximize your settlement. Free consultation 24/7.";
  const keywords = generatedSeo?.keywords || "car accident lawyer, personal injury attorney, truck accident lawyer";
  
  const currentUrl = canonicalUrl || `https://www.carinjurylaw.com${location}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    updateMeta("description", description);
    
    // 2b. Update Keywords
    updateMeta("keywords", keywords);

    // 3. Update Open Graph Data
    updateMeta("og:title", title, "property");
    updateMeta("og:description", description, "property");
    updateMeta("og:image", ogImage, "property");
    updateMeta("og:url", currentUrl, "property");
    updateMeta("og:type", ogType, "property");
    updateMeta("og:site_name", "CarInjuryLaw.com | Admani Law Network", "property");

    // 4. Update Canonical Link
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", currentUrl);

    // 5. Inject Schema.org JSON-LD
    if (schema) {
      let script = document.querySelector("#seo-schema") as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = "seo-schema";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      
      // Add LastUpdated to Schema if present
      const finalSchema = {
        ...schema,
        ...(lastUpdated ? { dateModified: lastUpdated } : {})
      };
      
      script.text = JSON.stringify(finalSchema);
    }

    // 6. Add Last Updated Meta
    if (lastUpdated) {
      updateMeta("last-updated", lastUpdated);
    }

  }, [title, description, keywords, currentUrl, ogImage, ogType, schema, lastUpdated]);

  return null; // Headless component
}

// Helper to update or create meta tags
function updateMeta(nameOrProperty: string, content: string, attribute: "name" | "property" = "name") {
  let meta = document.querySelector(`meta[${attribute}='${nameOrProperty}']`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, nameOrProperty);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}
