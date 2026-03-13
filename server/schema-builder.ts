export const SITE_NAME = 'Car Injury Law';
export const SITE_URL = 'https://www.carinjurylaw.com';
export const SITE_PHONE = '+1-800-000-0000';
export const SITE_EMAIL = 'info@carinjurylaw.com';

export const buildLegalServiceSchema = (
  name: string,
  description: string,
  url: string,
  areaServed: string = 'United States',
  faqs?: Array<{question: string; answer: string}>
) => {
  const legalService: any = {
    "@type": "LegalService",
    "@id": url + "#legalservice",
    "name": name,
    "description": description,
    "url": url,
    "telephone": SITE_PHONE,
    "email": SITE_EMAIL,
    "priceRange": "Free Consultation",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Contingency Fee",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": areaServed
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "ratingCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Free Case Evaluation"
          }
        }
      ]
    }
  };

  if (faqs && faqs.length > 0) {
    const faqSchema = {
      "@type": "FAQPage",
      "@id": url + "#faqpage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    return {
      "@context": "https://schema.org",
      "@graph": [legalService, faqSchema]
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [legalService]
  };
};

export const buildBreadcrumbSchema = (
  items: Array<{name: string; url: string}>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const buildLocalBusinessSchema = (
  stateName: string,
  stateUrl: string
) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": [
        "LegalService",
        "LocalBusiness"
      ],
      "@id": stateUrl + "#localbusiness",
      "name": SITE_NAME + " - " + stateName,
      "description": "Car accident and personal injury lawyers serving " + stateName + ". Free consultation available 24/7.",
      "url": stateUrl,
      "telephone": SITE_PHONE,
      "priceRange": "Free Consultation",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": stateName,
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "State",
        "name": stateName
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "ratingCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  ]
});
