import { SeoContentSection } from "@/components/seo-content-section";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { ChatWidget } from "@/components/chat-widget";
import { LeadForm } from "@/components/lead-form";
import { CheckCircle, MapPin, Shield, AlertTriangle, Gavel, Phone, Scale, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { StateData } from "@/data/state-data";
import { SeoHead } from "@/components/seo-head";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface StateLandingPageProps {
  data: StateData;
}

export default function StateLandingPage({ data }: StateLandingPageProps) {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentDate = new Date().toISOString();
  
  // Dynamic SEO Data based on user request
  const pageTitle = `${data.name} Car Accident Lawyer | ${data.name} Auto Injury Attorney`;
  const pageDesc = `Looking for a car accident lawyer in ${data.name}? Our experienced ${data.name} auto injury attorneys fight for your rights. No win, no fee. Call 24/7.`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans pb-20 md:pb-0">
      <SeoHead 
        title={pageTitle}
        description={pageDesc}
        lastUpdated={currentDate}
        canonicalUrl={`https://www.carinjurylaw.com/${data.slug}`}
        ogImage={data.bgImage}
        schema={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": `Car Injury Law - ${data.name}`,
          "description": `Expert car accident lawyers serving all of ${data.name}.`,
          "url": `https://www.carinjurylaw.com/${data.slug}`,
          "telephone": "1-888-669-5559",
          "areaServed": {
            "@type": "State",
            "name": data.name,
            "abbreviation": data.abbr
          },
          "serviceType": "Car Accident Lawyer",
          "priceRange": "Contingency Fee",
          "knowsAbout": [
            "Car Accident Claims",
            `${data.faultSystem}`,
            "Auto Injury Law",
            "Insurance Settlements"
          ]
        }}
      />

      <NavBar />
      
      <Breadcrumbs 
        items={[
          { label: "Locations", href: "/#locations" },
          { label: `${data.name} Car Accident Lawyer` }
        ]} 
      />

      <main>
        {/* H1: Car Accident Lawyers in [STATE] */}
        <div id="overview" className="relative bg-primary min-h-[600px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
            style={{ backgroundImage: `url('${data.bgImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-bold tracking-wide uppercase">
                  <MapPin className="h-4 w-4" />
                  Serving All of {data.name}
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white font-serif leading-tight">
                  Car Accident Lawyers in <span className="text-secondary">{data.name}</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  Injured in a crash? Our experienced {data.name} auto injury attorneys 
                  understand local traffic laws and insurance requirements. We fight for the compensation you deserve.
                </p>
                <div className="flex flex-col gap-3 pt-4">
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                    <span className="font-medium text-lg">No Win, No Fee Representation</span>
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

        {/* H2: Experienced Car Accident Lawyers in [STATE] */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-3 gap-12">
               <div className="lg:col-span-2 space-y-12">
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Experienced Car Accident Lawyers in {data.name}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        When you've been injured in a car accident in {data.name}, you need legal representation 
                        that understands the specific laws and regulations of the state. Our experienced 
                        car accident lawyers are well-versed in {data.name}'s traffic statutes, including 
                        the specific statute of limitations ({data.statute}) that applies to your case.
                      </p>
                      <p>
                        Car accident victims often face mounting medical bills, lost wages, and physical pain. 
                        Insurance companies often try to settle quickly for less than your case is worth. 
                        We protect your rights and ensure you pursue the full damages you are entitled to 
                        under {data.name} law.
                      </p>
                    </div>
                 </div>

                 {/* H2: Car Accident Insurance Coverage in [STATE] */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Car Accident Insurance Coverage in {data.name}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        {data.name} operates under a <strong className="text-primary">{data.faultSystem}</strong> system. 
                        Understanding how this impacts your claim is crucial.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 my-8">
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="p-6">
                            <Shield className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">Fault & Liability</h3>
                            <p className="text-sm">
                              {data.faultSystem.includes("No-Fault") 
                                ? `Since ${data.name} is a No-Fault state, you typically turn to your own PIP coverage first, regardless of who caused the crash.` 
                                : `In ${data.name}, the driver who caused the accident is responsible for the damages. Proving fault is essential to your claim.`}
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="p-6">
                            <DollarSign className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">Minimum Insurance</h3>
                            <p className="text-sm">
                              Drivers in {data.name} are required to carry minimum liability coverage of {data.minInsurance}. 
                              However, these minimums may not cover severe injuries, making legal counsel vital.
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <p>
                        Whether you are dealing with PIP (Personal Injury Protection), uninsured motorist coverage, 
                        or liability claims against another driver, our team knows how to navigate {data.name}'s 
                        insurance landscape to maximize your recovery.
                      </p>
                    </div>
                 </div>

                 {/* H2: Why Choose Car Injury Law for Car Accident Case? */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Why Choose Car Injury Law for Car Accident Case?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Gavel className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-primary">Local Expertise</h3>
                          <p className="text-gray-600">
                            We know {data.name} courts, judges, and insurance adjusters. We use this local 
                            knowledge to build stronger cases.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Scale className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-primary">Proven Results</h3>
                          <p className="text-gray-600">
                            Our network has recovered millions for accident victims across {data.name}. 
                            Average settlements in the state range from {data.avgSettlement}.
                          </p>
                        </div>
                      </div>
                    </div>
                 </div>

                 {/* SEO Content Section */}
                 <SeoContentSection service="Car Accident Lawyer" location={data.name} />

                 {/* H2: Speak With Our Car Accident Lawyer in [STATE] Today. */}
                 <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10">
                       <Phone className="h-64 w-64 -mr-16 -mt-16" />
                    </div>
                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold font-serif mb-4">
                        Speak With Our Car Accident Lawyer in {data.name} Today
                      </h2>
                      <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                        Don't let the insurance company dictate your future. You have a limited time 
                        ({data.statute}) to file a claim in {data.name}. Contact us 24/7 for a free, 
                        no-obligation consultation.
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
                            <Link 
                              key={i} 
                              href={`/${data.slug}/${city.toLowerCase().replace(/ /g, '-')}`}
                              className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-bold hover:bg-secondary hover:text-primary transition-colors border border-slate-200"
                            >
                              {city}
                            </Link>
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
                                 <Link href={`/${slug}-car-accident-lawyer`} className="text-sm text-blue-600 hover:underline capitalize">
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