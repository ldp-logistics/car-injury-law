import { Link } from "wouter";
import { PRACTICE_AREA_PAGES } from "@/data/practice-area-pages";
import { SERVICE_SYNONYM_PAGES } from "@/data/service-synonym-pages";
import { NEAR_ME_PAGES } from "@/data/near-me-pages";

interface RelatedLinksProps {
  currentSlug?: string;
}

export function RelatedLinks({ currentSlug }: RelatedLinksProps) {
  const practiceLinks = PRACTICE_AREA_PAGES.filter(
    (p) => p.slug !== currentSlug
  ).slice(0, 4);

  const synonymLinks = SERVICE_SYNONYM_PAGES.filter(
    (p) => p.slug !== currentSlug
  ).slice(0, 4);

  const nearMeLinks = NEAR_ME_PAGES.filter(
    (p) => p.slug !== currentSlug
  ).slice(0, 4);

  return (
    <nav aria-label="Related pages" className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold font-serif text-slate-800 mb-6">
          Related Practice Areas &amp; Resources
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
              Practice Areas
            </h3>
            <ul className="space-y-2">
              {practiceLinks.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/seo/${p.slug}/`}
                    className="text-sm text-primary hover:underline"
                  >
                    {p.keyword.replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
              Related Services
            </h3>
            <ul className="space-y-2">
              {synonymLinks.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/seo/${p.slug}/`}
                    className="text-sm text-primary hover:underline"
                  >
                    {p.keyword.replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
              Find a Lawyer Near You
            </h3>
            <ul className="space-y-2">
              {nearMeLinks.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/seo/${p.slug}/`}
                    className="text-sm text-primary hover:underline"
                  >
                    {p.keyword.replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
