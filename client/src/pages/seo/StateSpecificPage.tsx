import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { ChatWidget } from "@/components/chat-widget";
import { LeadForm } from "@/components/lead-form";
import { SeoHead } from "@/components/seo-head";
import { StateSpecificPageData } from "@/data/state-specific-pages";
import { STATE_DATA } from "@/data/state-data";
import { MapPin, Shield, Clock, AlertTriangle, ChevronRight, DollarSign, Scale, CalendarClock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { FaqSection } from "@/components/faq-section";
import { internalLink } from "@/utils/link-helper";
import { InternalLinksFooter } from "@/components/seo/InternalLinksFooter";
import SEOContentSection from "@/components/seo/SEOContentSection";
import { STATE_SPECIFIC_PAGES } from "@/data/state-specific-pages";

interface StateSpecificPageProps {
  data: StateSpecificPageData;
}

export default function StateSpecificPage({ data }: StateSpecificPageProps) {
  // Pull state data to cross reference
  const stateData = STATE_DATA[data.state];

  // In the improbable edge case state data wasn't found, map to a safe fallback
  if (!stateData) {
    return <div>State data not found for {data.state}</div>;
  }

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentDate = new Date().toISOString();

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans pb-20 md:pb-0">
      <SeoHead 
        title={data.title}
        description={data.description}
        canonicalUrl={`https://www.carinjurylaw.com/${data.slug}/`}
        lastUpdated={currentDate}
      />

      <NavBar />
      
      <main>
        {/* HERO SECTION */}
        <div id="overview" className="relative bg-[#0b1b36] min-h-[600px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
            style={{ backgroundImage: `url(${stateData.bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b36] via-[#0b1b36]/90 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                
                {/* State Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-bold tracking-wide uppercase">
                  <MapPin className="h-4 w-4" />
                  <span>{stateData.name} ({stateData.abbr})</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-white font-serif leading-tight">
                  {data.h1}
                </h1>
                
                {/* Trust Bar */}
                <div className="flex flex-wrap gap-4 pt-2 pb-4">
                  <div className="flex items-center gap-2 text-gray-200">
                    <Scale className="h-5 w-5 text-secondary" />
                    <span className="font-semibold">Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
                    <Shield className="h-5 w-5 text-secondary" />
                    <span className="font-semibold">No Win No Fee</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span className="font-semibold">Available 24/7</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button onClick={scrollToForm} size="lg" className="bg-secondary text-primary font-bold hover:bg-secondary/90 text-lg py-6 px-8 h-auto shadow-lg">
                    Get Free {stateData.name} Case Review
                  </Button>
                </div>
              </div>
              
              {/* Lead Form Panel */}
              <div className="lg:pl-12" id="lead-form">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* STATE DATA STATS BAR OVERLAP */}
        <div className="relative -mt-8 z-20 container mx-auto px-4 mb-16">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 md:p-8 border border-slate-100 flex flex-col md:flex-row gap-8 justify-between divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            <div className="flex-1 px-4 flex flex-col items-center text-center group">
              <div className="bg-primary/5 p-3 rounded-full mb-3 group-hover:bg-secondary/20 transition-colors">
                <CalendarClock className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Filing Deadline</div>
              <div className="text-xl font-bold text-slate-800">{stateData.statute}</div>
            </div>

            <div className="flex-1 px-4 flex flex-col items-center text-center group pt-6 md:pt-0">
              <div className="bg-primary/5 p-3 rounded-full mb-3 group-hover:bg-secondary/20 transition-colors">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">State Fault Law</div>
              <div className="text-xl font-bold text-slate-800">{stateData.faultSystem}</div>
            </div>

            <div className="flex-1 px-4 flex flex-col items-center text-center group pt-6 md:pt-0">
              <div className="bg-primary/5 p-3 rounded-full mb-3 group-hover:bg-secondary/20 transition-colors">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Min. Auto Insurance</div>
              <div className="text-xl font-bold text-slate-800">{stateData.minInsurance}</div>
            </div>

            <div className="flex-1 px-4 flex flex-col items-center text-center group pt-6 md:pt-0">
              <div className="bg-primary/5 p-3 rounded-full mb-3 group-hover:bg-secondary/20 transition-colors">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Est. Avg Liability Value</div>
              <div className="text-xl font-bold text-slate-800">{stateData.avgSettlement}</div>
            </div>
            
          </div>
        </div>

        {/* CONTENT SECTION */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Main Content Column */}
              <div className="lg:col-span-2 space-y-12 prose prose-lg max-w-none text-gray-700">
                
                {stateData.warning && (
                  <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl shadow-sm mb-8">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="text-red-600 h-6 w-6 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-red-900 font-bold text-lg mb-2">{stateData.warning.title}</h4>
                        <p className="text-red-800 m-0">{stateData.warning.text}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <h2 className="text-3xl font-bold font-serif text-primary border-b border-secondary/30 pb-4 inline-block">Aggressive Representation in {stateData.name}</h2>
                <p>
                  Every state operates under drastically different legal constraints, and trying to navigate the complex injury claims process without a dedicated <strong className="text-primary">{data.keyword}</strong> almost always results in a drastically reduced settlement. In {stateData.name}, the law utilizes a <strong className="text-secondary">{stateData.faultSystem}</strong> approach, meaning that any percentage of fault assigned to you by an aggressive insurance adjuster can destroy the value of your case. You cannot risk negotiating with hostile corporate entities who train their adjusters to weaponize state-specific statutes against vulnerable victims. By retaining Car Injury Law, you immediately shield yourself behind top litigators who understand exactly how to counter these predatory tactics. 
                </p>
                <p>
                  Time is your most critical adversary. In {stateData.name}, the statute of limitations is rigorously enforced at <strong className="text-secondary">{stateData.statute}</strong>. The moment the accident occurs, critical evidence begins degrading, witness testimonies blur, and defense attorneys begin constructing a narrative designed to minimize your injuries. Your {data.keyword} will instantly dispatch investigative resources, issue spoliation letters to preserve vital dashcam or security footage, and retain industry-leading accident reconstruction engineers to irrevocably establish the other party's liability. Don't let an auto insurance conglomerate dictate your financial future. 
                </p>

                {stateData.faq && stateData.faq.length > 0 && (
                  <div className="pt-8">
                    <h3 className="text-2xl font-bold font-serif text-primary mb-6">Frequently Asked Questions in {stateData.name}</h3>
                    <FaqSection items={stateData.faq} />
                  </div>
                )}

                <SEOContentSection 
                  whyChoose={data.contentBlocks.whyChoose}
                  howWeHelp={data.contentBlocks.howWeHelp}
                  faqs={data.contentBlocks.faqs}
                  keyword={data.keyword}
                />

                {/* Related Pages Section */}
                {(() => {
                  const related = STATE_SPECIFIC_PAGES
                    .filter(p => p.slug !== data.slug)
                    .slice(0, 6);

                  return (
                    <div className="border-t mt-10 pt-6 px-4">
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

              {/* Sidebar: State Local Links */}
              <div className="lg:col-span-1">
                <div className="bg-slate-50 text-slate-900 rounded-xl p-6 shadow-md border border-slate-200">
                  <h3 className="text-xl font-bold font-serif mb-6 border-b border-slate-300 pb-4">Top {stateData.name} Cities Served</h3>
                  <div className="space-y-3">
                    {stateData.cityList.map((city) => {
                      const citySlug = city.toLowerCase().replace(/\s+/g, '-');
                      return (
                        <Link key={citySlug} href={internalLink(`${stateData.slug}/${citySlug}`)} className="flex items-center gap-2 group hover:text-secondary transition-colors font-semibold">
                          <ChevronRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                          <span>{city}</span>
                        </Link>
                      );
                    })}
                  </div>

                  {stateData.nearbyStates && stateData.nearbyStates.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-slate-300">
                      <h3 className="text-lg font-bold font-serif mb-4">Nearby Areas</h3>
                      <div className="flex flex-wrap gap-2">
                         {stateData.nearbyStates.map(state => {
                           const nearbyStateData = STATE_DATA[state];
                           return nearbyStateData ? (
                             <Link key={state} href={internalLink(nearbyStateData.slug)} className="text-sm bg-white border border-slate-200 px-3 py-1.5 rounded-full hover:border-secondary hover:text-secondary transition-colors font-medium">
                               {nearbyStateData.name}
                             </Link>
                           ) : null;
                         })}
                      </div>
                    </div>
                  )}

                  <div className="mt-8 pt-6 border-t border-slate-300">
                    <Button onClick={scrollToForm} className="w-full bg-secondary text-primary font-bold hover:bg-secondary/90 shadow-lg text-lg h-14">
                      Start Your Claim
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <InternalLinksFooter links={data.internalLinks} />

      </main>
      
      <StickyCta />
      <ChatWidget />
      <Footer />
    </div>
  );
}
