import { SeoContentSection } from "@/components/seo-content-section";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { ChatWidget } from "@/components/chat-widget";
import { LeadForm } from "@/components/lead-form";
import { CheckCircle, MapPin, Shield, AlertTriangle, Gavel, Phone, Scale, Bike, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { StateData } from "@/data/state-data";
import { SeoHead } from "@/components/seo-head";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface MotorcycleStateLandingPageProps {
  data: StateData;
}

export default function MotorcycleStateLandingPage({ data }: MotorcycleStateLandingPageProps) {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentDate = new Date().toISOString();
  
  // Dynamic SEO Data based on user request
  const pageTitle = `Motorcycle Crash Lawyers in ${data.name} | ${data.name} Biker Injury Attorney`;
  const pageDesc = `Injured in a motorcycle accident in ${data.name}? Our experienced ${data.name} biker injury attorneys fight for riders' rights. No win, no fee.`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans pb-20 md:pb-0">
      <SeoHead 
        title={pageTitle}
        description={pageDesc}
        lastUpdated={currentDate}
        canonicalUrl={`https://www.carinjurylaw.com/motorcycle-accident-lawyer/${data.name.toLowerCase().replace(/ /g, '-')}`}
        ogImage={data.bgImage}
        schema={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": `Car Injury Law - ${data.name} Motorcycle Division`,
          "description": `Expert motorcycle accident lawyers serving all of ${data.name}.`,
          "url": `https://www.carinjurylaw.com/motorcycle-accident-lawyer/${data.name.toLowerCase().replace(/ /g, '-')}`,
          "telephone": "1-888-669-5559",
          "areaServed": {
            "@type": "State",
            "name": data.name,
            "abbreviation": data.abbr
          },
          "serviceType": "Motorcycle Accident Lawyer",
          "priceRange": "Contingency Fee",
          "knowsAbout": [
            "Motorcycle Accident Claims",
            "Biker Rights",
            "Lane Splitting Laws",
            "Motorcycle Safety Laws"
          ]
        }}
      />

      <NavBar />
      
      <Breadcrumbs 
        items={[
          { label: "Locations", href: "/#locations" },
          { label: "Practice Areas", href: "/practice-areas/motorcycle-accident" },
          { label: `${data.name} Motorcycle Accident Lawyer` }
        ]} 
      />

      <main>
        {/* H1: Motorcycle <Link href="/practice-areas/car-accident" className="text-primary hover:underline font-semibold">Crash</Link> Lawyers in [STATE] */}
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
                  <Bike className="h-4 w-4" />
                  Riders Representing Riders in {data.name}
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white font-serif leading-tight">
                  Motorcycle Crash Lawyers in <span className="text-secondary">{data.name}</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  Injured in a bike crash? We fight "biker bias" in {data.name} courts and insurance negotiations.
                  Get an attorney who respects the ride and fights for your rights.
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

        {/* H2: Experienced <Link href="/practice-areas/motorcycle-accident" className="text-primary hover:underline font-semibold">Motorcycle Accident Lawyers</Link> in [STATE] */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-3 gap-12">
               <div className="lg:col-span-2 space-y-12">
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Experienced Motorcycle Accident Lawyers in {data.name}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        Riding in {data.name} offers incredible freedom, but it also comes with unique risks. 
                        When accidents happen, injured riders often face unfair prejudice from <Link href="/blog/dealing-with-insurance-adjusters" className="text-primary hover:underline font-semibold"><Link href="/vs-insurance" className="text-primary hover:underline font-semibold">insurance</Link> adjusters</Link> 
                        and juries who assume the motorcyclist was reckless.
                      </p>
                      <p>
                        Our experienced {data.name} motorcycle accident lawyers know how to combat this bias. 
                        We understand the specific traffic laws in {data.name}, including rules regarding lane splitting, 
                        helmet requirements, and right-of-way violations that frequently cause motorcycle crashes.
                      </p>
                    </div>
                 </div>

                 {/* H2: Motorcycle Insurance Coverage in [STATE] */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Motorcycle Insurance Coverage in {data.name}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        Insurance requirements for motorcycles in {data.name} can differ significantly from 
                        standard auto policies. Understanding these nuances is critical for your recovery.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 my-8">
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="p-6">
                            <Shield className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">Helmet Laws & Liability</h3>
                            <p className="text-sm">
                              In {data.name}, helmet usage can impact your claim. Even if not legally required 
                              for all riders, insurance companies may argue that failure to wear one contributed 
                              to your injuries. We fight these "mitigation of damages" arguments.
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="p-6">
                            <Heart className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">PIP & MedPay</h3>
                            <p className="text-sm">
                              Unlike car accidents, PIP (Personal Injury Protection) often doesn't automatically 
                              cover motorcycles in many states. We investigate all available coverage, including 
                              MedPay and Uninsured Motorist policies, to pay your bills.
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <p>
                        Minimum liability limits in {data.name} are {data.minInsurance}, which is rarely enough 
                        to cover serious motorcycle injuries like traumatic brain injuries or spinal cord damage. 
                        We aggressively pursue underinsured motorist claims to bridge the gap.
                      </p>
                    </div>
                 </div>

                 {/* H2: Why Choose Car <Link href="/practice-areas/personal-injury" className="text-primary hover:underline font-semibold">Injury</Link> Law for Motorcycle Case? */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Why Choose Car Injury Law for Motorcycle Case?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bike className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-primary">We Ride, We Understand</h3>
                          <p className="text-gray-600">
                            Many of our network attorneys are riders themselves. We understand the physics of riding 
                            and can explain to a jury why an accident wasn't your fault.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Gavel className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-primary">Fighting Biker Bias</h3>
                          <p className="text-gray-600">
                            We don't let insurance companies stereotype you as "reckless." We use facts, 
                            expert reconstruction, and witness testimony to tell the truth.
                          </p>
                        </div>
                      </div>
                    </div>
                 </div>

                 {/* SEO Content Section */}
                 <SeoContentSection service="Motorcycle Accident Lawyer" location={data.name} />

                 {/* H2: Speak With Our Motorcycle Crash Lawyer in [STATE] Today. */}
                 <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10">
                       <Bike className="h-64 w-64 -mr-16 -mt-16" />
                    </div>
                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold font-serif mb-4">
                        Speak With Our Motorcycle Crash Lawyer in {data.name} Today
                      </h2>
                      <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                        You have limited time ({data.statute}) to file a claim in {data.name}. 
                        Don't let evidence disappear. Contact us 24/7 for a free, no-obligation consultation.
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
                        <span className="font-bold flex items-center gap-2"><MapPin className="h-4 w-4" /> Motorcycle Lawyers in {data.name}</span>
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