import React, { useMemo } from "react";
import { useLocation } from "wouter";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { LeadForm } from "@/components/lead-form";
import { SeoHead } from "@/components/seo-head";
import { SERVICE_SYNONYM_PAGES, type ServiceSynonymData } from "@/data/service-synonym-pages";
import { NEAR_ME_PAGES } from "@/data/near-me-pages";
import { Building2, Shield, Star, Scale, Clock, Users, Gavel } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { InternalLinksFooter } from "@/components/seo/InternalLinksFooter";
import SEOContentSection from "@/components/seo/SEOContentSection";
import InternalLinks from "@/components/InternalLinks";

const NearMePage = () => {
  const [location] = useLocation();
  
  const data = useMemo(() => {
    const slug = location.split("/").filter(Boolean).pop() || "";
    const matched = NEAR_ME_PAGES.find((p: ServiceSynonymData) => p.slug === slug);
    return matched || NEAR_ME_PAGES[0];
  }, [location]);

  if (!data) return null;

  const currentDate = new Date().toISOString();

  return (
    <div className="min-h-screen bg-white">
      <SeoHead 
        title={data.title}
        description={data.description}
        canonicalUrl={`https://www.carinjurylaw.com/${data.slug}/`}
        lastUpdated={currentDate}
      />

      <NavBar />

      <main>
        {/* Banner Section */}
        <section className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.h1}</h1>
              <p className="text-xl text-slate-300 mb-8">
                Looking for a {data.keyword}? We connect you with top-rated local legal experts who fight for your rights.
              </p>
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg"
              >
                Get a Free Consultation
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Trust Indicators */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-white border-none shadow-sm">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <Star className="h-8 w-8 text-yellow-500 mb-3" />
                        <h3 className="font-bold">Top Rated</h3>
                        <p className="text-sm text-gray-500">Local legal experts</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border-none shadow-sm">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <Scale className="h-8 w-8 text-primary mb-3" />
                        <h3 className="font-bold">Aggressive</h3>
                        <p className="text-sm text-gray-500">Representation with results</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border-none shadow-sm">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <Clock className="h-8 w-8 text-primary mb-3" />
                        <h3 className="font-bold">24/7 Support</h3>
                        <p className="text-sm text-gray-500">Always here for you</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="prose prose-lg max-w-none text-slate-600">
                  <p>
                    Finding the right legal representation is crucial when you're dealing with the aftermath of an accident. 
                    Our network of {data.keyword} specialists understands the local laws and court systems inside and out.
                  </p>
                  <p>
                    We provide comprehensive legal support tailored to your specific situation, ensuring you recover the maximum compensation 
                    possible for medical bills, lost wages, and pain and suffering.
                  </p>
                </div>

                <SEOContentSection 
                  whyChoose={data.contentBlocks.whyChoose}
                  howWeHelp={data.contentBlocks.howWeHelp}
                  faqs={data.contentBlocks.faqs}
                  keyword={data.keyword}
                />

                {/* Related Pages Section */}
                {(() => {
                  const related = NEAR_ME_PAGES
                    .filter(p => p.slug !== data.slug)
                    .slice(0, 6);

                  return (
                    <div className="border-t mt-10 pt-6 px-4 text-left">
                      <p className="font-semibold text-gray-700 mb-3">Related Services</p>
                      <div className="flex flex-wrap gap-3">
                        {related.map(p => (
                          <a key={p.slug}
                            href={'/' + p.slug + '/'}
                            className="text-blue-600 text-sm hover:underline">
                            {p.keyword}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>

              <div id="contact-form" className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="shadow-xl border-none">
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold mb-6 text-center">Free Case Review</h3>
                      <LeadForm />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Our Specialized Legal Services</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Shield, label: "Insurance Claims", desc: "Expert negotiation with carriers" },
                { icon: Gavel, label: "Litigation", desc: "Aggressive courtroom advocacy" },
                { icon: Users, label: "Expert Witnesses", desc: "Access to top industry experts" },
                { icon: Building2, label: "Corporate Liability", desc: "Holding companies accountable" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-primary">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold mb-2">{item.label}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <InternalLinks />
      </main>

      <InternalLinksFooter links={data.internalLinks || []} />
      <Footer />
    </div>
  );
};

export default NearMePage;
