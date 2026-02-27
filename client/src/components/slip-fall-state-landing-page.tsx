import { SeoContentSection } from "@/components/seo-content-section";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { ChatWidget } from "@/components/chat-widget";
import { LeadForm } from "@/components/lead-form";
import { CheckCircle, MapPin, Shield, AlertTriangle, Gavel, Phone, Scale, Building, Home, Footprints } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { StateData } from "@/data/state-data";
import { SeoHead } from "@/components/seo-head";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface SlipFallStateLandingPageProps {
  data: StateData;
}

export default function SlipFallStateLandingPage({ data }: SlipFallStateLandingPageProps) {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentDate = new Date().toISOString();
  
  // Dynamic SEO Data based on user request
  const pageTitle = `Slip and Fall Lawyers in ${data.name} | ${data.name} Premises Liability Attorney`;
  const pageDesc = `Injured in a slip and fall accident in ${data.name}? Our experienced premises liability lawyers hold property owners accountable for negligence. Free consultation.`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans pb-20 md:pb-0">
      <SeoHead 
        title={pageTitle}
        description={pageDesc}
        lastUpdated={currentDate}
        canonicalUrl={`https://www.carinjurylaw.com/slip-and-fall-lawyer/${data.name.toLowerCase().replace(/ /g, '-')}`}
        ogImage={data.bgImage}
        schema={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": `Car Injury Law - ${data.name} Slip and Fall Division`,
          "description": `Expert slip and fall injury lawyers serving all of ${data.name}.`,
          "url": `https://www.carinjurylaw.com/slip-and-fall-lawyer/${data.name.toLowerCase().replace(/ /g, '-')}`,
          "telephone": "1-888-669-5559",
          "areaServed": {
            "@type": "State",
            "name": data.name,
            "abbreviation": data.abbr
          },
          "serviceType": "Slip and Fall Lawyer",
          "priceRange": "Contingency Fee",
          "knowsAbout": [
            "Premises Liability",
            "Slip and Fall Accidents",
            "Trip and Fall Claims",
            "Property Negligence"
          ]
        }}
      />

      <NavBar />
      
      <Breadcrumbs 
        items={[
          { label: "Locations", href: "/#locations" },
          { label: "Practice Areas", href: "/practice-areas/slip-and-fall" },
          { label: `${data.name} Slip and Fall Lawyer` }
        ]} 
      />

      <main>
        {/* H1: Slip and Fall Lawyers in [STATE] */}
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
                  <Footprints className="h-4 w-4" />
                  Premises Liability Experts in {data.name}
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white font-serif leading-tight">
                  Slip and Fall Lawyers in <span className="text-secondary">{data.name}</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  Injured on someone else's property in {data.name}? We hold negligent property owners 
                  accountable for dangerous conditions that cause serious injuries.
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

        {/* H2: Experienced Slip and Fall Lawyers in [STATE] */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-3 gap-12">
               <div className="lg:col-span-2 space-y-12">
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Experienced Slip and Fall Lawyers in {data.name}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        Slip and fall cases fall under "premises liability" law in {data.name}. Property owners—whether 
                        businesses, landlords, or homeowners—have a legal duty to keep their premises reasonably safe 
                        for visitors. When they fail to fix known hazards or warn you about them, they can be held liable.
                      </p>
                      <p>
                        Our experienced {data.name} slip and fall lawyers know how to prove negligence. We investigate 
                        wet floors, uneven pavement, poor lighting, icy walkways, and broken stairs to establish 
                        that the owner knew (or should have known) about the danger and failed to act.
                      </p>
                    </div>
                 </div>

                 {/* H2: Slip and Fall Insurance Coverage in [STATE] */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Slip and Fall Insurance Coverage in {data.name}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        Recovering compensation for a fall injury usually involves dealing with the property owner's 
                        insurance company. In {data.name}, there are two main types of coverage we pursue depending on 
                        where your accident happened.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 my-8">
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="p-6">
                            <Building className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">Commercial Liability</h3>
                            <p className="text-sm">
                              Stores, restaurants, hotels, and office buildings in {data.name} carry commercial 
                              general liability (CGL) insurance. These policies often have high limits to cover 
                              customer injuries, including medical bills and lost wages.
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="p-6">
                            <Home className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">Homeowners Insurance</h3>
                            <p className="text-sm">
                              If you were injured at a private residence in {data.name}, the owner's homeowners 
                              or renters insurance typically covers the claim. We handle these delicate situations 
                              professionally, dealing with the insurer rather than the individual.
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <p>
                        Insurance adjusters often try to blame the victim for "not watching where they were going." 
                        We fight back with evidence to show the hazard was not open and obvious, ensuring you receive 
                        fair compensation.
                      </p>
                    </div>
                 </div>

                 {/* H2: Why Choose Car Injury Law for Slip and Fall Case? */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Why Choose Car Injury Law for Slip and Fall Case?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Scale className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-primary">Evidence Preservation</h3>
                          <p className="text-gray-600">
                            Surveillance video of your fall is often deleted within days. We send immediate 
                            preservation letters to secure this critical evidence.
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
                            Many firms settle cheap. We are ready to take property owners and their insurance 
                            companies to court if they refuse to offer a fair settlement.
                          </p>
                        </div>
                      </div>
                    </div>
                 </div>

                 {/* SEO Content Section */}
                 <SeoContentSection service="Slip and Fall Lawyer" location={data.name} />

                 {/* H2: Speak With Our Slip and Fall Lawyer in [STATE] Today. */}
                 <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10">
                       <Footprints className="h-64 w-64 -mr-16 -mt-16" />
                    </div>
                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold font-serif mb-4">
                        Speak With Our Slip and Fall Lawyer in {data.name} Today
                      </h2>
                      <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                        Premises liability cases in {data.name} have a statute of limitations ({data.statute}). 
                        The longer you wait, the harder it is to prove the dangerous condition existed. 
                        Contact us 24/7 for a free consultation.
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
                        <span className="font-bold flex items-center gap-2"><MapPin className="h-4 w-4" /> Slip & Fall Lawyers in {data.name}</span>
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