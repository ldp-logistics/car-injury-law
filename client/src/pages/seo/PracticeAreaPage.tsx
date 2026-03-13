import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { ChatWidget } from "@/components/chat-widget";
import { LeadForm } from "@/components/lead-form";
import { SeoHead } from "@/components/seo-head";
import { PracticeAreaPageData } from "@/data/practice-area-pages";
import { Shield, Clock, CheckCircle, Scale, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { internalLink } from "@/utils/link-helper";
import { InternalLinksFooter } from "@/components/seo/InternalLinksFooter";

// Let's use an authoritative courtroom/legal background for general practice areas
import heroBg from "@assets/stock_images/courtroom_gavel_just_813cbcc0.jpg";

interface PracticeAreaPageProps {
  data: PracticeAreaPageData;
}

export default function PracticeAreaPage({ data }: PracticeAreaPageProps) {
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
        <div id="overview" className="relative bg-[#0b1329] min-h-[600px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
            style={{ backgroundImage: 'url(' + heroBg + ')' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1329] via-[#0b1329]/90 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-bold tracking-wide uppercase">
                  <span>{data.category} Representation</span>
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
                    Get Free Case Review Now
                  </Button>
                </div>
              </div>
              <div className="lg:pl-12" id="lead-form">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT & LINKS SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Main Content Column */}
              <div className="lg:col-span-2 space-y-10 prose prose-lg max-w-none text-gray-700">
                <h2 className="text-3xl font-bold font-serif text-primary">Why You Need a Specialized {data.keyword}</h2>
                <p>
                  When you are severely injured, the stakes are unthinkably high. The period immediately following an accident is when insurance companies are most aggressive, utilizing highly trained adjusters precisely to minimize the compensation you receive. By retaining a dedicated <strong className="text-primary">{data.keyword}</strong>, you establish an immediate firewall between yourself and predatory corporate tactics. We assume total control of all communications, ensuring you do not accidentally jeopardize your claim while you focus on medical recovery.
                </p>
                <p>
                  Not all law firms are equipped to handle complex litigation. Successfully litigating profound injuries requires vast financial resources to hire industry-leading accident reconstructionists, elite medical specialists, and life-care planners. Our track record demonstrates an uncompromising willingness to take cases exactly like yours to a jury verdict if the defense refuses to offer maximum policy limits. Do not let the insurance company determine the value of your future.
                </p>

                <div className="my-12 bg-slate-50 border border-slate-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold font-serif text-primary mb-6">Why Choose Car Injury Law?</h3>
                  <ul className="space-y-4 list-none pl-0">
                    <li className="flex items-start gap-4">
                      <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="block text-gray-900">National Reach, Aggressive Litigation</strong>
                        <span className="text-base text-gray-600">We litigate against the largest insurance conglomerates in America across all 50 states, utilizing uncompromising trial strategies.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="block text-gray-900">Zero Financial Risk For You</strong>
                        <span className="text-base text-gray-600">You pay absolutely nothing upfront. We front all investigative and court costs, and we only recover our fees if we successfully win your case.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="block text-gray-900">Maximum Valuation Engineering</strong>
                        <span className="text-base text-gray-600">We don't accept standard settlement tables. We prove your exact economic and non-economic damages to force maximum payouts.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sidebar: Related Practice Areas */}
              <div className="lg:col-span-1">
                <div className="bg-slate-900 text-white rounded-xl p-6 sticky top-24 shadow-xl">
                  <h3 className="text-xl font-bold font-serif mb-6 border-b border-white/20 pb-4">Comprehensive Legal Representation</h3>
                  <div className="space-y-3">
                    <Link href={internalLink("practice-areas/car-accident")} className="flex items-center gap-2 group hover:text-secondary transition-colors">
                      <ChevronRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform" />
                      <span>Car Accidents</span>
                    </Link>
                    <Link href={internalLink("practice-areas/truck-accident")} className="flex items-center gap-2 group hover:text-secondary transition-colors">
                      <ChevronRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform" />
                      <span>Truck Accidents</span>
                    </Link>
                    <Link href={internalLink("practice-areas/motorcycle-accident")} className="flex items-center gap-2 group hover:text-secondary transition-colors">
                      <ChevronRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform" />
                      <span>Motorcycle Accidents</span>
                    </Link>
                    <Link href={internalLink("practice-areas/personal-injury")} className="flex items-center gap-2 group hover:text-secondary transition-colors">
                      <ChevronRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform" />
                      <span>Personal Injury</span>
                    </Link>
                    <Link href={internalLink("practice-areas/slip-and-fall")} className="flex items-center gap-2 group hover:text-secondary transition-colors">
                      <ChevronRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform" />
                      <span>Slip and Fall</span>
                    </Link>
                    <Link href={internalLink("practice-areas/wrongful-death")} className="flex items-center gap-2 group hover:text-secondary transition-colors">
                      <ChevronRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform" />
                      <span>Wrongful Death</span>
                    </Link>
                    <Link href={internalLink("practice-areas/pedestrian-injury")} className="flex items-center gap-2 group hover:text-secondary transition-colors">
                      <ChevronRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform" />
                      <span>Pedestrian Injury</span>
                    </Link>
                    <Link href={internalLink("practice-areas/bus-transit-injury")} className="flex items-center gap-2 group hover:text-secondary transition-colors">
                      <ChevronRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform" />
                      <span>Bus & Transit Injury</span>
                    </Link>
                    <Link href={internalLink("practice-areas/workplace-injury")} className="flex items-center gap-2 group hover:text-secondary transition-colors">
                      <ChevronRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform" />
                      <span>Workplace Injury</span>
                    </Link>
                    <Link href={internalLink("practice-areas/medical-malpractice")} className="flex items-center gap-2 group hover:text-secondary transition-colors">
                      <ChevronRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform" />
                      <span>Medical Malpractice</span>
                    </Link>
                    <Link href={internalLink("practice-areas/rideshare-accident")} className="flex items-center gap-2 group hover:text-secondary transition-colors">
                      <ChevronRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform" />
                      <span>Rideshare Accidents</span>
                    </Link>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <Button onClick={scrollToForm} className="w-full bg-secondary text-primary font-bold hover:bg-secondary/90">
                      Request Callback
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
