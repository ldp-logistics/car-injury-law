import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { ChatWidget } from "@/components/chat-widget";
import { LeadForm } from "@/components/lead-form";
import { SeoHead } from "@/components/seo-head";
import { ServiceSynonymData } from "@/data/service-synonym-pages";
import { MapPin, Shield, Scale, Gavel, Phone, Scale as Scaled, AlertCircle, Clock, Search, FileText, CheckCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useEffect, useState } from "react";

// For the background image, let's just pick one of our highest quality dynamic options.
import heroBg from "@assets/stock_images/car_accident_crash_s_fd800196.jpg";

interface ServiceSynonymPageProps {
  data: ServiceSynonymData;
}

export default function ServiceSynonymPage({ data }: ServiceSynonymPageProps) {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentDate = new Date().toISOString();

  // Keyword extraction for linking context
  const kw = data.keyword.toLowerCase();

  // Decide the practice area link dynamically
  let internalLinkUrl = "/practice-areas/personal-injury";
  let internalLinkLabel = "your personal injury options";
  
  if (kw.includes("car") || kw.includes("auto") || kw.includes("traffic")) {
    internalLinkUrl = "/practice-areas/car-accident";
    internalLinkLabel = "detailed car accident legal process";
  } else if (kw.includes("truck")) {
    internalLinkUrl = "/practice-areas/truck-accident";
    internalLinkLabel = "commercial trucking lawsuit procedures";
  } else if (kw.includes("motorcycle") || kw.includes("bicycle") || kw.includes("bike")) {
    internalLinkUrl = "/practice-areas/motorcycle-accident";
    internalLinkLabel = "two-wheeled accident rights";
  } else if (kw.includes("pedestrian")) {
    internalLinkUrl = "/practice-areas/pedestrian-injury";
    internalLinkLabel = "pedestrian crosswalk injury guidelines";
  } else if (kw.includes("bus")) {
    internalLinkUrl = "/practice-areas/bus-transit-injury";
    internalLinkLabel = "transit accident protocols";
  } else if (kw.includes("work") || kw.includes("construction")) {
    internalLinkUrl = "/practice-areas/workplace-injury";
    internalLinkLabel = "workplace defect and workers claims";
  } else if (kw.includes("slip") || kw.includes("fall") || kw.includes("premises")) {
    internalLinkUrl = "/practice-areas/slip-and-fall";
    internalLinkLabel = "premises liability regulations";
  } else if (kw.includes("über") || kw.includes("uber") || kw.includes("lyft") || kw.includes("rideshare")) {
    internalLinkUrl = "/practice-areas/rideshare-accident";
    internalLinkLabel = "ridesharing liability coverage limits";
  } else if (kw.includes("death")) {
    internalLinkUrl = "/practice-areas/wrongful-death";
    internalLinkLabel = "wrongful death lawsuit timelines";
  }

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
        <div id="overview" className="relative bg-primary min-h-[600px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
            style={{ backgroundImage: 'url(' + heroBg + ')' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-bold tracking-wide uppercase">
                  <Shield className="h-4 w-4" />
                  Top Rated Representation
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white font-serif leading-tight">
                  {data.h1}
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  When you need an experienced <span className="text-secondary font-bold">{data.keyword}</span>, you cannot afford to wait. We fight the insurance companies to secure every single dollar you deserve. 
                  Zero upfront costs, completely free case evaluations.
                </p>
                <div className="flex flex-col gap-3 pt-4">
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                    <span className="font-medium text-lg">No Win, No Fee Guarantee</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                    <span className="font-medium text-lg">Available 24/7 for Free Consultation</span>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button onClick={scrollToForm} size="lg" className="bg-secondary text-primary font-bold hover:bg-secondary/90">
                    Get Free Case Review
                  </Button>
                </div>
              </div>
              <div className="lg:pl-12" id="lead-form">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* COMPREHENSIVE 800+ WORD ARTICLE BODY */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-bold font-serif text-primary">Why You Must Hire a {data.keyword} Immediately</h2>
                <p>
                  After suffering severe harm in an accident, victims are suddenly submerged in a high-stakes, adversarial system heavily slanted in favor of corporate insurance conglomerates. Medical bills escalate almost instantly. Rent or mortgage payments fall behind as missed wages erode personal savings. During this incredibly vulnerable time, insurance adjusters deploy highly tactical strategies designed exclusively to minimize your payout. They act quickly, often contacting victims within hours of an incident aiming to secure recorded statements or propose fast—and insultingly inadequate—settlement checks. This is precisely why hiring a dedicated, legally astute <strong>{data.keyword}</strong> is the most critical decision you can make in the aftermath of a traumatic event.
                </p>
                
                <p>
                  Insurance companies understand precisely how much a claim is worth. Their internal algorithms continuously calculate risk, projecting future medical deterioration and diminished earning capacity. Without a battle-tested {data.keyword} on your side, you are actively forfeiting your right to access the full spectrum of compensation. They leverage your inexperience. They exploit your financial desperation. Only by retaining seasoned trial counsel can you immediately halt this predatory interference.
                </p>

                <h2 className="text-3xl font-bold font-serif text-primary mt-12">Understanding The Strategic Approach Of A {data.keyword}</h2>
                <p>
                  The moment we intercept your file, a multifaceted legal counter-offensive begins. To build a comprehensive and impenetrable case for your damages, an elite {data.keyword} undertakes extensive preservation of evidence. Time is an aggressive adversary in litigation. Key evidence evaporates: skid marks fade into the asphalt, commercial surveillance camera footage auto-deletes on a cyclical loop, and eyewitness memories distort or become entirely unreachable. 
                </p>
                <p>
                  From subpoenaing cell phone records of distracted drivers to analyzing mechanical maintenance logs in catastrophic collisions, our firm operates with unyielding urgency. We retain industry-leading accident reconstructionists, vocational rehabilitation experts, and life-care planners to meticulously project the exact financial devastation this accident will force upon your future. We do not accept the "standard" valuation tables offered by adjusters; we prove your specific reality.
                </p>

                <div className="my-10 bg-slate-50 border border-slate-200 rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <AlertCircle className="text-secondary h-6 w-6" /> What To Expect During Your Claim
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <Search className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <strong className="text-gray-900 block">Exhaustive Discovery & Investigation:</strong>
                        <span className="text-base">We aggressively acquire police crash reports, bodycam footage, 911 audio transcripts, and internal corporate safety logs to ascertain absolute liability and nullify comparative fault arguments.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <strong className="text-gray-900 block">Ironclad Demand Packages:</strong>
                        <span className="text-base">Once you reach maximum medical improvement, your {data.keyword} synthesizes thousands of pages of medical charting into an irrefutable legal demand narrative that forces the carrier to respond.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                        <Gavel className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <strong className="text-gray-900 block">Fierce Trial Litigation:</strong>
                        <span className="text-base">If the defense refuses to extend maximum policy limits or tender adequate settlement offers, we flawlessly pivot into litigation, filing the lawsuit, conducting hostile depositions, and preparing your case for a full jury trial.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold font-serif text-primary mt-12">What Financial Compensation Is Available?</h2>
                <p>
                  The scope of potential damages recoverable in your claim is dictated entirely by the severity of negligence and the permanence of your injuries. However, an aggressive {data.keyword} will pursue two distinct categories of compensation: economic and non-economic damages.
                </p>
                <p>
                  <strong>Economic damages</strong> are the strictly quantifiable financial devastations you have incurred. This unequivocally covers past emergency room interventions, intensive care unit staging, surgical procedures, and physical therapy. Crucially, it must also encapsulate <em>future</em> care needs. If you require subsequent surgeries five years from now, or if you can no longer return to your prior profession and suffer a diminished earning capacity, that mathematical deficit must be paid by the at-fault party. 
                </p>
                <p>
                  <strong>Non-economic damages</strong> compensate you for the intangible, deeply human cost of the collision. This is the chronic physical pain, the Post-Traumatic Stress Disorder (PTSD), the loss of consortium for spouses whose marital relationships have fundamentally altered, and the loss of enjoyment in life. Because these damages lack an invoice, this is precisely where the sheer trial prowess of a great {data.keyword} yields the most profound value during negotiations. We force juries and adjusters alike to recognize the agonizing reality of your daily life.
                </p>

                <h2 className="text-3xl font-bold font-serif text-primary mt-12">The Impact Of Comparative Negligence Laws</h2>
                <p>
                  Depending heavily on the jurisdiction where your accident occurred, your compensation may be subject to comparative negligence frameworks. Insurance defense attorneys weaponize this heavily. If they can convince a jury or judge that you were partially responsible for the accident—even nominally—they can successfully reduce the compensation they are mandated to pay you by that exact percentage. 
                </p>
                <p>
                  If you are found 20% at fault for speeding slightly at the time a defective truck improperly turned across your lane, a $1,000,000 judgment will be reduced by $200,000. It is the primary objective of your {data.keyword} to fiercely contest these allegations, shielding you against unwarranted liability suppression.
                </p>

                <div className="bg-slate-900 text-white rounded-2xl p-8 my-12 text-center relative overflow-hidden">
                  <div className="relative z-10">
                    <Shield className="h-16 w-16 text-secondary mx-auto mb-4" />
                    <h3 className="text-2xl lg:text-3xl font-bold font-serif mb-4">You Don't Pay Unless We Win</h3>
                    <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                      Car Injury Law operates strictly on a contingency-fee basis. You will never receive a bill for hourly litigation, investigatory costs, or expert witness retainers during the lifespan of your case as you recover. We assume all financial risk, getting paid only a percentage of the final verdict or settlement. 
                    </p>
                    <div className="flex justify-center gap-4">
                      <Button onClick={scrollToForm} size="lg" className="bg-secondary text-primary font-bold hover:bg-secondary/90">
                        Start Your Free Consultation
                      </Button>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold font-serif text-primary mt-12">Crucial Steps To Take Now</h2>
                <p>
                  As you consider retaining a {data.keyword}, there are foundational steps you must take to protect the integrity of your impending lawsuit:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Cease Communication with Insurance:</strong> Terminate all conversations with the opposing insurance adjuster. Decline recorded statements aggressively. Direct all incoming correspondence to your retained legal counsel.</li>
                  <li><strong>Follow Medical Advice Exhaustively:</strong> The most destructive action a plaintiff can take is creating "gaps in treatment." Attend every physical therapy session. Fulfill all prescriptions. If you ignore medical protocols, the defense will successfully argue that your injuries are mild or entirely fabricated.</li>
                  <li><strong>Sever Social Media Usage:</strong> Deactivate or completely restrict all social media accounts. Defense teams utilize extensive surveillance tactics, including scraping public digital profiles to discover any photographic evidence that contradicts your injury limitations.</li>
                </ul>

                {kw.includes("near me") && (
                  <div className="my-10 bg-slate-50 border border-slate-200 rounded-xl p-8 shadow-sm">
                    <h3 className="text-2xl font-bold font-serif text-primary mb-4">We Serve All 50 States — No Matter Where You Are</h3>
                    <p className="mb-4 text-gray-700">
                      When searching for a <strong className="text-primary">{data.keyword}</strong>, you need a law firm with nationwide reach and local expertise. Car Injury Law serves injury victims in all 50 states, partnering with the top litigators in every jurisdiction to ensure you receive world-class representation without ever leaving your home.
                    </p>
                    <p className="font-bold text-gray-900 mb-4">Top States We Serve:</p>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 text-secondary font-semibold">
                      <li><Link href="/california" className="hover:underline">California</Link></li>
                      <li><Link href="/texas" className="hover:underline">Texas</Link></li>
                      <li><Link href="/florida" className="hover:underline">Florida</Link></li>
                      <li><Link href="/new-york" className="hover:underline">New York</Link></li>
                      <li><Link href="/illinois" className="hover:underline">Illinois</Link></li>
                      <li><Link href="/georgia" className="hover:underline">Georgia</Link></li>
                      <li><Link href="/ohio" className="hover:underline">Ohio</Link></li>
                      <li><Link href="/pennsylvania" className="hover:underline">Pennsylvania</Link></li>
                    </ul>
                  </div>
                )}

                <p className="mt-8">
                  The statute of limitations—the aggressive legal ticking clock capping how long you have to formally file a lawsuit—began running the moment your accident happened. For more contextual intelligence regarding localized litigation parameters, we recommend reviewing <Link href={internalLinkUrl} className="text-blue-600 font-bold hover:underline">{internalLinkLabel}</Link>. Do not wait until your medical bills spiral out of control and vital evidence disappears into the ether.
                </p>
                <p className="font-bold text-lg mt-6">
                  Contact Car Injury Law today. When you need a powerful, unyielding {data.keyword}, we step into the courtroom fully prepared to dominate the proceedings and reclaim your future.
                </p>
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
