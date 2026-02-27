import { Link } from "wouter";
import { SeoContentSection } from "@/components/seo-content-section";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { LeadForm } from "@/components/lead-form";
import { CheckCircle, MapPin, Shield, AlertTriangle, Gavel, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StateData } from "@/data/state-data";
import { SeoHead } from "@/components/seo-head";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StatuteCountdown } from "@/components/statute-countdown";

interface CityLandingPageProps {
  stateData: StateData;
  city: string;
}

export default function CityLandingPage({ stateData, city }: CityLandingPageProps) {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentDate = new Date().toISOString();
  const pageTitle = `${city} Car Accident Lawyer | ${stateData.abbr} Injury Attorneys | Admani Law`;
  const pageDesc = `Injured in ${city}, ${stateData.abbr}? Top-rated local accident attorneys in ${city}. No win, no fee. ${stateData.statute} deadline applies. Call 1-888-669-5559.`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans pb-20 md:pb-0">
      <SeoHead 
        title={pageTitle}
        description={pageDesc}
        lastUpdated={currentDate}
        canonicalUrl={`https://www.carinjurylaw.com/${stateData.slug}/${city.toLowerCase().replace(/ /g, '-')}`}
        ogImage={stateData.bgImage}
        schema={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": `Car Injury Law - ${city} Division`,
          "description": `Top-rated car accident attorneys serving ${city}, ${stateData.name}.`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": city,
            "addressRegion": stateData.abbr,
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.7128", // Mock coords, real app would use geocoding
            "longitude": "-74.0060" 
          },
          "telephone": "1-888-669-5559",
          "areaServed": city,
          "priceRange": "Contingency Fee"
        }}
      />

      <NavBar />
      
      <Breadcrumbs 
        items={[
          { label: "Locations", href: "/#locations" },
          { label: stateData.name, href: `/${stateData.slug}` },
          { label: `${city} Car Accident Lawyer` }
        ]} 
      />

      <main>
        {/* HERO SECTION */}
        <div className="relative bg-slate-900 min-h-[500px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
            style={{ backgroundImage: `url('${stateData.bgImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-bold tracking-wide uppercase">
                  <MapPin className="h-4 w-4" />
                  Serving {city} & Surrounding Areas
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white font-serif leading-tight">
                  {city} <Link href="/practice-areas/car-accident" className="text-primary hover:underline font-semibold">Car Accident</Link> <br/>
                  <span className="text-secondary">Attorneys</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  Local representation matters. Our {city} network attorneys know the local courts, judges, and dangerous intersections like no one else.
                </p>
                <div className="flex flex-col gap-3 pt-4">
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                    <span className="font-medium text-lg">Nearby Medical Centers</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                    <span className="font-medium text-lg">Local Police Report Retrieval</span>
                  </div>
                </div>
              </div>
              <div className="lg:pl-12">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold font-serif text-primary mb-6">Why Hire a Local {city} Lawyer?</h2>
                <article className="prose prose-lg text-gray-600 max-w-none">
                  <p>
                    Accidents in {city} present unique challenges. From high-traffic areas to specific local ordinances in {stateData.name}, you need an <Link href="/attorneys/saad-admani" className="text-primary hover:underline font-semibold">attorney</Link> who understands the landscape.
                  </p>
                  <p>
                    Our network partners in {city} have successfully handled cases involving:
                  </p>
                  <ul>
                    <li>Intersections with high crash rates in {city}</li>
                    <li>Local hospital lien negotiations</li>
                    <li>Dealing with {stateData.name} specific <Link href="/blog/dealing-with-insurance-adjusters" className="text-primary hover:underline font-semibold"><Link href="/vs-insurance" className="text-primary hover:underline font-semibold">insurance</Link> adjusters</Link></li>
                  </ul>
                </article>
              </section>

              {/* Dynamic Countdown */}
              <StatuteCountdown statuteYears={parseInt(stateData.statute)} stateName={stateData.name} />

              <section>
                <h2 className="text-3xl font-bold font-serif text-primary mb-6">Common Crash Sites in {city}</h2>
                <Card className="bg-slate-50 border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-destructive/10 p-3 rounded-full">
                        <AlertTriangle className="h-6 w-6 text-destructive" />
                      </div>
                      <div>
                         <h3 className="text-lg font-bold text-primary mb-2">High Risk Intersections</h3>
                         <p className="text-gray-600 mb-4">
                           We frequently see accidents occurring on major arteries and intersections throughout {city}. 
                           Knowing the traffic patterns and signal timing at these locations can be crucial evidence.
                         </p>
                         <Button variant="outline" className="gap-2">
                           <Navigation className="h-4 w-4" />
                           Report a Dangerous Intersection
                         </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-bold font-serif text-primary mb-6">{city} Accident FAQs</h2>
                <Accordion type="single" collapsible className="w-full">
                  {/* ... accordion items ... */}
                </Accordion>
              </section>

              {/* NEW SEO CONTENT SECTION */}
              <SeoContentSection service="Car Accident Lawyer" location={city} type="city" />

            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-1">
              <div className="sticky top-36 space-y-8">
                <Card className="bg-secondary text-primary border-none shadow-xl">
                  <CardContent className="p-6 text-center">
                    <Gavel className="h-12 w-12 mx-auto mb-4 opacity-80" />
                    <h3 className="text-xl font-serif font-bold mb-2">Injured in {city}?</h3>
                    <p className="text-sm font-medium opacity-90 mb-6">
                      Don't speak to the insurance adjuster until you speak to us.
                    </p>
                    <Button 
                      onClick={scrollToForm}
                      className="w-full bg-primary text-white font-bold hover:bg-primary/90"
                    >
                      FREE CASE REVIEW
                    </Button>
                  </CardContent>
                </Card>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-secondary" />
                    Nearby Areas Served
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stateData.cityList.filter(c => c !== city).map((c, i) => (
                      <a key={i} href="#" className="text-xs bg-white text-gray-600 px-3 py-1.5 rounded-full border border-gray-200 hover:border-secondary hover:text-secondary transition-colors">
                        {c}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <StickyCta />
      <Footer />
    </div>
  );
}