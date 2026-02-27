import { SeoContentSection } from "@/components/seo-content-section";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { ChatWidget } from "@/components/chat-widget";
import { LeadForm } from "@/components/lead-form";
import { CheckCircle, MapPin, Shield, AlertTriangle, Gavel, Phone, Scale, Bus, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { StateData } from "@/data/state-data";
import { SeoHead } from "@/components/seo-head";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface BusStateLandingPageProps {
  data: StateData;
}

export default function BusStateLandingPage({ data }: BusStateLandingPageProps) {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentDate = new Date().toISOString();
  
  // Dynamic SEO Data based on user request
  const pageTitle = `Bus Injury Lawyers in ${data.name} | ${data.name} Public Transit Accident Attorney`;
  const pageDesc = `Injured in a bus accident in ${data.name}? Our experienced ${data.name} transit liability attorneys fight for your rights against government and private entities.`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans pb-20 md:pb-0">
      <SeoHead 
        title={pageTitle}
        description={pageDesc}
        lastUpdated={currentDate}
        canonicalUrl={`https://www.carinjurylaw.com/bus-accident-lawyer/${data.name.toLowerCase().replace(/ /g, '-')}`}
        ogImage={data.bgImage}
        schema={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": `Car Injury Law - ${data.name} Bus & Transit Division`,
          "description": `Expert bus accident lawyers serving all of ${data.name}.`,
          "url": `https://www.carinjurylaw.com/bus-accident-lawyer/${data.name.toLowerCase().replace(/ /g, '-')}`,
          "telephone": "1-888-669-5559",
          "areaServed": {
            "@type": "State",
            "name": data.name,
            "abbreviation": data.abbr
          },
          "serviceType": "Bus Accident Lawyer",
          "priceRange": "Contingency Fee",
          "knowsAbout": [
            "Bus Accident Claims",
            "Public Transit Liability",
            "Common Carrier Laws",
            "Government Tort Claims"
          ]
        }}
      />

      <NavBar />
      
      <Breadcrumbs 
        items={[
          { label: "Locations", href: "/#locations" },
          { label: "Practice Areas", href: "/practice-areas/bus-transit-injury" },
          { label: `${data.name} Bus Accident Lawyer` }
        ]} 
      />

      <main>
        {/* H1: Bus Injury Lawyers in [STATE] */}
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
                  <Bus className="h-4 w-4" />
                  Transit Accident Experts in {data.name}
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white font-serif leading-tight">
                  Bus Injury Lawyers in <span className="text-secondary">{data.name}</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  Injured on public transit or hit by a bus? We navigate the complex sovereign immunity laws 
                  and fight for maximum <Link href="/settlement-calculator" className="text-primary hover:underline font-semibold">compensation</Link> in {data.name}.
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

        {/* H2: Experienced Bus Accident Lawyers in [STATE] */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-3 gap-12">
               <div className="lg:col-span-2 space-y-12">
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Experienced Bus Accident Lawyers in {data.name}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        Bus accidents in {data.name} involve unique legal challenges. Buses are classified as "common carriers," 
                        meaning they owe a higher duty of care to their passengers than typical drivers. When they fail this duty, 
                        our experienced bus accident lawyers hold them accountable.
                      </p>
                      <p>
                        Whether you were injured on a city bus, school bus, charter bus, or airport shuttle, we investigate 
                        driver <Link href="/practice-areas/personal-injury" className="text-primary hover:underline font-semibold">negligence</Link>, improper maintenance, and hiring violations. We understand the specific transit 
                        regulations in {data.name} that protect passengers and other road users.
                      </p>
                    </div>
                 </div>

                 {/* H2: <Link href="/practice-areas/bus-transit-injury" className="text-primary hover:underline font-semibold">Transit Injury</Link> <Link href="/vs-insurance" className="text-primary hover:underline font-semibold">Insurance</Link> Coverage in [STATE] */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Transit Injury Insurance Coverage in {data.name}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        Recovering damages from bus accidents can be complicated by "Sovereign Immunity" laws if the 
                        bus is government-operated (like city transit or school districts). These laws in {data.name} often 
                        impose strict deadlines (sometimes as short as 90 days) and caps on damages.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 my-8">
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="p-6">
                            <Building2 className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">Government Claims</h3>
                            <p className="text-sm">
                              For public transit accidents, we file "Notice of Claim" promptly to preserve your 
                              right to sue. We know the specific procedural hurdles required by {data.name} law.
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="p-6">
                            <Shield className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">Private Carrier Liability</h3>
                            <p className="text-sm">
                              Private bus companies (charters, tour buses) typically carry high-limit commercial 
                              insurance policies (often $5M+). We fight their corporate insurers to ensure you 
                              receive full compensation.
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <p>
                        We navigate these complex insurance landscapes to cover your medical bills, lost wages, and 
                        pain and suffering, regardless of whether the liable party is a government entity or a private corporation.
                      </p>
                    </div>
                 </div>

                 {/* H2: Why Choose Car Injury Law for Bus Injury Case? */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Why Choose Car Injury Law for Bus Injury Case?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Gavel className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-primary">Litigation Experience</h3>
                          <p className="text-gray-600">
                            We aren't afraid to take government entities or large transport companies to trial. 
                            We have the resources to fight for the long haul.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bus className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-primary">Transit Knowledge</h3>
                          <p className="text-gray-600">
                            We understand bus mechanics, driver training standards, and electronic logging 
                            requirements. We find the negligence that others miss.
                          </p>
                        </div>
                      </div>
                    </div>
                 </div>

                 {/* SEO Content Section */}
                 <SeoContentSection service="Bus Accident Lawyer" location={data.name} />

                 {/* H2: Speak With Our Bus Injury <Link href="/attorneys/saad-admani" className="text-primary hover:underline font-semibold">Lawyer</Link> in [STATE] Today. */}
                 <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10">
                       <Bus className="h-64 w-64 -mr-16 -mt-16" />
                    </div>
                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold font-serif mb-4">
                        Speak With Our Bus Injury Lawyer in {data.name} Today
                      </h2>
                      <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                        Strict deadlines apply to bus accident claims in {data.name}, especially those involving 
                        government vehicles. Don't lose your right to compensation. Contact us 24/7 for a free consultation.
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
                        <span className="font-bold flex items-center gap-2"><MapPin className="h-4 w-4" /> Bus Accident Lawyers in {data.name}</span>
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