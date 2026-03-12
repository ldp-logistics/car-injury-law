import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { ChatWidget } from "@/components/chat-widget";
import { LeadForm } from "@/components/lead-form";
import { SeoHead } from "@/components/seo-head";
import { BestPageData, BEST_PAGES } from "@/data/best-pages";
import { Star, ShieldCheck, Trophy, BadgeCheck, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Background image - reusing one of the premium assets
import heroBg from "@assets/stock_images/smiling_lawyer_hands_47accf3a.jpg";

interface BestOfPageProps {
  data: BestPageData;
}

export default function BestOfPage({ data }: BestOfPageProps) {
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
        <div id="overview" className="relative bg-[#0a1128] min-h-[600px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
            style={{ backgroundImage: 'url(' + heroBg + ')' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/80 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10 py-16">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 backdrop-blur-sm text-secondary font-bold tracking-wide">
                <BadgeCheck className="h-5 w-5" />
                <span>Top Rated | Verified Results | 5 Stars</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-tight">
                {data.h1}
              </h1>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-secondary mb-1">$50M+</div>
                  <div className="text-gray-300 text-sm font-semibold uppercase tracking-wider">Recovered</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-secondary mb-1">5,000+</div>
                  <div className="text-gray-300 text-sm font-semibold uppercase tracking-wider">Cases Won</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-secondary mb-1">50</div>
                  <div className="text-gray-300 text-sm font-semibold uppercase tracking-wider">States Served</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-secondary mb-1">24/7</div>
                  <div className="text-gray-300 text-sm font-semibold uppercase tracking-wider">Available</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CONTENT & FORM SECTION */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid xl:grid-cols-12 gap-12">
              
              {/* Main Content */}
              <div className="xl:col-span-8 space-y-12">
                
                <div className="prose prose-lg max-w-none text-gray-700">
                  <h2 className="text-3xl font-bold font-serif text-primary border-b-2 border-secondary inline-block pb-2 mb-6">Securing Elite Legal Representation</h2>
                  <p>
                    When disaster strikes and you are left reeling from a devastating injury, the quality of your legal representation dictates the trajectory of your recovery. Finding a <strong className="text-primary">{data.keyword}</strong> isn't just about filing paperwork; it's about partnering with battle-tested litigators who possess the aggressive courtroom posture, vast financial reservoirs, and sheer determination required to force billion-dollar insurance conglomerates into paying maximum policy limits. We don't simply handle cases—we engineer landmark victories.
                  </p>
                  <p>
                    The difference between an average settlement and a life-altering verdict often comes down to the caliber of experts your firm can afford to deploy on day one. Our elite squad of highly specialized attorneys utilizes industry-leading accident reconstruction engineers, premier vocational economists, and world-class medical specialists to definitively prove the total, uncompromised value of your damages. While lesser firms push for quick, undervalued settlements to turn a rapid profit, we meticulously prepare every single case for trial. This uncompromising standard is why defendants consistently settle for maximum value before stepping into a courtroom against us.
                  </p>
                </div>

                {/* Why We Are The Best */}
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
                  <h3 className="text-2xl md:text-3xl font-bold font-serif text-primary mb-8 flex items-center gap-3">
                    <Trophy className="h-8 w-8 text-secondary" />
                    Why We Are Considered The Best
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                      <div className="bg-secondary/10 rounded-full p-3 h-fit">
                        <Star className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <strong className="block text-xl text-primary font-bold mb-2">Millions Recovered</strong>
                        <p className="text-gray-600">We have secured multi-million dollar verdicts and settlements for injury victims across the country, refusing to let insurance adjusters dictate your worth.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-secondary/10 rounded-full p-3 h-fit">
                        <ShieldCheck className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <strong className="block text-xl text-primary font-bold mb-2">No Win No Fee</strong>
                        <p className="text-gray-600">You carry zero financial risk. We front all costs for world-class investigations and you pay absolutely nothing out of pocket unless we win your case.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-secondary/10 rounded-full p-3 h-fit">
                        <Clock className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <strong className="block text-xl text-primary font-bold mb-2">Available 24/7</strong>
                        <p className="text-gray-600">Accidents don't adhere to business hours. Our dedicated rapid-response legal team is available around the clock, exactly when you need immediate guidance.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-secondary/10 rounded-full p-3 h-fit">
                        <MessageSquareQuote className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <strong className="block text-xl text-primary font-bold mb-2">Free Consultation</strong>
                        <p className="text-gray-600">Receive an aggressive, no-obligation case evaluation from a top-tier legal professional to understand exactly what your case is truly worth.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-serif text-primary px-2">Client Success Stories</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative">
                      <div className="flex text-secondary mb-4">
                        <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" />
                      </div>
                      <p className="text-gray-700 text-sm italic mb-4">"When the insurance company offered me a joke of a settlement, Car Injury Law stepped in and completely dismantled their defense. They recovered five times what was originally offered. Truly elite representation."</p>
                      <p className="font-bold text-slate-900 text-sm">— J.M. (Texas)</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative">
                      <div className="flex text-secondary mb-4">
                        <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" />
                      </div>
                      <p className="text-gray-700 text-sm italic mb-4">"I thought I would be drowning in medical debt for the rest of my life after the crash. This team made me feel like their only client. They didn't stop until every single bill was covered and my family was secure."</p>
                      <p className="font-bold text-slate-900 text-sm">— S.R. (Florida)</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative">
                      <div className="flex text-secondary mb-4">
                        <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" />
                      </div>
                      <p className="text-gray-700 text-sm italic mb-4">"Relentless. That's the only word for them. The attorneys fronted all the costs for expert reconstructions and took the fight straight to the trucking company. I am forever grateful for their incredible dedication."</p>
                      <p className="font-bold text-slate-900 text-sm">— D.L. (California)</p>
                    </div>
                  </div>
                </div>

                {/* Big CTA Button */}
                <div className="text-center pt-8">
                  <Button onClick={scrollToForm} size="lg" className="bg-primary text-secondary font-bold hover:bg-primary/90 text-xl py-8 px-12 h-auto rounded-full shadow-2xl shadow-primary/30 w-full md:w-auto">
                    See If You Have A Case — Free
                  </Button>
                </div>

                {/* Related Best Pages */}
                <div className="pt-12 border-t border-slate-200">
                  <h3 className="text-xl font-bold font-serif text-primary mb-6">More Top-Rated Legal Services</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BEST_PAGES.filter(p => p.slug !== data.slug).slice(0, 6).map((page, i) => (
                      <Link key={i} href={`/${page.slug}`} className="text-blue-700 hover:text-secondary font-semibold hover:underline flex items-center gap-2">
                        <span className="text-secondary opacity-50">•</span> {page.title.split('|')[0].trim()}
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
              
              {/* Sidebar Form */}
              <div className="xl:col-span-4" id="lead-form">
                <div className="sticky top-24">
                  <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border-t-4 border-secondary">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-primary font-serif">Request Free Case Review</h3>
                      <p className="text-sm text-gray-500 mt-2">100% Confidential. No Obligation. We respond within minutes.</p>
                    </div>
                    <LeadForm />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      
      <StickyCta />
      <ChatWidget />
      <Footer />
    </div>
  );
}
// Import required icons missing in standard lucide import line
import { Clock } from "lucide-react";
