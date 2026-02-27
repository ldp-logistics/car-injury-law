import { SeoContentSection } from "@/components/seo-content-section";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { ChatWidget } from "@/components/chat-widget";
import { LeadForm } from "@/components/lead-form";
import { CheckCircle, MapPin, Shield, AlertTriangle, Gavel, Phone, Scale, Stethoscope, Heart, Syringe, Building2, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { StateData } from "@/data/state-data";
import { SeoHead } from "@/components/seo-head";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface MedicalMalpracticeStateLandingPageProps {
  data: StateData;
}

export default function MedicalMalpracticeStateLandingPage({ data }: MedicalMalpracticeStateLandingPageProps) {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentDate = new Date().toISOString();
  
  // Dynamic SEO Data based on user request
  const pageTitle = `Medical Malpractice Lawyer in ${data.name} | ${data.name} Hospital Negligence Attorney`;
  const pageDesc = `Injured by medical negligence in ${data.name}? Our experienced ${data.name} medical malpractice lawyers fight hospital legal teams. Surgical errors, misdiagnosis, and more.`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans pb-20 md:pb-0">
      <SeoHead 
        title={pageTitle}
        description={pageDesc}
        lastUpdated={currentDate}
        canonicalUrl={`https://www.carinjurylaw.com/medical-malpractice-lawyer/${data.name.toLowerCase().replace(/ /g, '-')}`}
        ogImage={data.bgImage}
        schema={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": `Car Injury Law - ${data.name} Medical Malpractice Division`,
          "description": `Expert medical malpractice lawyers serving all of ${data.name}.`,
          "url": `https://www.carinjurylaw.com/medical-malpractice-lawyer/${data.name.toLowerCase().replace(/ /g, '-')}`,
          "telephone": "1-888-669-5559",
          "areaServed": {
            "@type": "State",
            "name": data.name,
            "abbreviation": data.abbr
          },
          "serviceType": "Medical Malpractice Lawyer",
          "priceRange": "Contingency Fee",
          "knowsAbout": [
            "Medical Malpractice Claims",
            "Surgical Errors",
            "Misdiagnosis",
            "Hospital Negligence",
            "Birth Injuries"
          ]
        }}
      />

      <NavBar />
      
      <Breadcrumbs 
        items={[
          { label: "Locations", href: "/#locations" },
          { label: "Practice Areas", href: "/practice-areas/medical-malpractice" },
          { label: `${data.name} Medical Malpractice Lawyer` }
        ]} 
      />

      <main>
        {/* H1: Medical Malpractice Lawyers in [STATE] */}
        <div id="overview" className="relative bg-slate-900 min-h-[600px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
            style={{ backgroundImage: `url('${data.bgImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-bold tracking-wide uppercase">
                  <Stethoscope className="h-4 w-4" />
                  Patient Advocates in {data.name}
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white font-serif leading-tight">
                  Medical Malpractice Lawyers in <span className="text-secondary">{data.name}</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  Injured by a doctor or hospital in {data.name}? We fight powerful healthcare systems and <Link href="/vs-insurance" className="text-black hover:underline font-semibold">insurance companies</Link> to get you the justice you deserve.
                </p>
                <div className="flex flex-col gap-3 pt-4">
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                    <span className="font-medium text-lg">No Win, No Fee Representation</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                    <span className="font-medium text-lg">Board-Certified Medical Experts</span>
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-3 gap-12">
               <div className="lg:col-span-2 space-y-12">
                 
                 {/* H2: Experienced Medical Malpractice Lawyers in [STATE] */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Experienced Medical Malpractice Lawyers in {data.name}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        When you seek medical treatment in {data.name}, you trust that doctors, nurses, and hospitals 
                        will provide a certain standard of care. When that trust is broken through negligence, the results 
                        can be life-altering.
                      </p>
                      <p>
                        Medical malpractice cases in {data.name} are complex. They require proving that a healthcare provider 
                        deviated from the "standard of care"—what a reasonably competent professional would have done under 
                        similar circumstances. Our experienced legal team works with top medical experts to build your case.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 my-8">
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="p-6">
                            <Syringe className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">Surgical Errors</h3>
                            <p className="text-sm">
                              From wrong-site surgery to retained instruments, we hold surgeons in {data.name} accountable for preventable operating room mistakes.
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="p-6">
                            <Building2 className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">Hospital Negligence</h3>
                            <p className="text-sm">
                              We investigate {data.name} hospitals for systemic failures, understaffing, and inadequate training that puts patients at risk.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                 </div>

                 {/* H2: Medical Liability Insurance Coverage in [STATE] */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Medical Liability Insurance Coverage in {data.name}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        Pursuing a claim in {data.name} involves navigating complex insurance policies and state-specific regulations regarding medical liability.
                      </p>
                      <p>
                        Many states, including {data.name}, may have specific "caps" or limits on non-economic damages (pain and suffering) in medical malpractice cases. 
                        Insurance companies often use these laws to minimize payouts. It is crucial to have an attorney who understands {data.name}'s specific malpractice laws to maximize your compensation within these legal frameworks.
                      </p>
                      <p>
                        We analyze all available insurance coverage, including individual provider malpractice insurance, hospital umbrella policies, and state patient compensation funds where applicable.
                      </p>
                    </div>
                 </div>

                 {/* H2: Why Choose Car Injury Law for Malpractice Case? */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Why Choose Car Injury Law for Malpractice Case?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <DollarSign className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-primary">Financial Resources</h3>
                          <p className="text-gray-600">
                            Malpractice cases are expensive to litigate. We advance all costs for experts and investigations. You pay nothing unless we win.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Gavel className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-primary">Trial Ready</h3>
                          <p className="text-gray-600">
                            Hospitals settle when they know your lawyer is ready to go to court. We prepare every case for trial from day one.
                          </p>
                        </div>
                      </div>
                    </div>
                 </div>

                 {/* SEO Content Section */}
                 <SeoContentSection service="Medical Malpractice Lawyer" location={data.name} />

                 {/* H2: Speak With Our Medical Malpractice Lawyer in [STATE] Today. */}
                 <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10">
                       <Stethoscope className="h-64 w-64 -mr-16 -mt-16" />
                    </div>
                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold font-serif mb-4">
                        Speak With Our Medical Malpractice Lawyer in {data.name} Today
                      </h2>
                      <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                        The statute of limitations for medical malpractice in {data.name} can be strict (typically around {data.statute}, though exceptions apply). 
                        Don't wait. Contact us 24/7 for a free, confidential consultation to discuss your case.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button onClick={scrollToForm} size="lg" className="bg-secondary text-primary font-bold hover:bg-secondary/90 px-8">
                          Get Free Consultation
                        </Button>
                        <a href="tel:1-888-669-5559" className="inline-flex items-center justify-center px-8 h-11 rounded-md border border-white/20 hover:bg-white/10 font-bold transition-colors">
                          <Phone className="mr-2 h-4 w-4" /> 1-888-669-5559
                        </a>
                      </div>
                    </div>
                 </div>

               </div>

               {/* SIDEBAR */}
               <aside className="lg:col-span-1">
                 <div className="sticky top-36 space-y-8">
                    {/* Areas Served Card */}
                    <Card className="overflow-hidden shadow-lg border-none">
                      <div className="bg-slate-900 p-4 text-white flex items-center justify-center">
                        <span className="font-bold flex items-center gap-2"><MapPin className="h-4 w-4" /> Areas Served in {data.name}</span>
                      </div>
                      <CardContent className="p-4 bg-white">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {data.cityList.map((city, i) => (
                            <span 
                              key={i} 
                              className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-bold border border-slate-200"
                            >
                              {city}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Nearby States */}
                    {data.nearbyStates && data.nearbyStates.length > 0 && (
                      <Card className="border-none shadow-lg">
                        <div className="bg-slate-100 p-4 border-b">
                           <h3 className="font-bold text-primary">Nearby Locations</h3>
                        </div>
                        <CardContent className="p-4">
                          <ul className="space-y-2">
                             {data.nearbyStates.map(slug => (
                               <li key={slug}>
                                 <Link href={`/medical-malpractice-lawyer/${slug.toLowerCase()}`} className="text-sm text-blue-600 hover:underline capitalize">
                                   {slug.replace(/-/g, ' ')}
                                 </Link>
                               </li>
                             ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                 </div>
               </aside>
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