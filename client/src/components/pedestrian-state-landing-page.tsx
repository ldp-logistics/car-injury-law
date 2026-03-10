import { SeoContentSection } from "@/components/seo-content-section";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { ChatWidget } from "@/components/chat-widget";
import { LeadForm } from "@/components/lead-form";
import { CheckCircle, MapPin, Shield, AlertTriangle, Gavel, Phone, Scale, User, Heart, Footprints } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { StateData } from "@/data/state-data";
import { SeoHead } from "@/components/seo-head";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface PedestrianStateLandingPageProps {
  data: StateData;
}

export default function PedestrianStateLandingPage({ data }: PedestrianStateLandingPageProps) {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentDate = new Date().toISOString();
  
  // Dynamic SEO Data based on user request
  const pageTitle = `Pedestrian Injury Lawyers in ${data.name} | ${data.name} Crosswalk Accident Attorney`;
  const pageDesc = `Hit by a car in ${data.name}? Our experienced ${data.name} pedestrian injury lawyers fight for your right of way. No win, no fee. Call 24/7.`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans pb-20 md:pb-0">
      <SeoHead 
        title={pageTitle}
        description={pageDesc}
        lastUpdated={currentDate}
        canonicalUrl={`https://www.carinjurylaw.com/pedestrian-injury-lawyer/${data.name.toLowerCase().replace(/ /g, '-')}`}
        ogImage={data.bgImage}
        schema={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": `Car Injury Law - ${data.name} Pedestrian Division`,
          "description": `Expert pedestrian injury lawyers serving all of ${data.name}.`,
          "url": `https://www.carinjurylaw.com/pedestrian-injury-lawyer/${data.name.toLowerCase().replace(/ /g, '-')}`,
          "telephone": "1-888-669-5559",
          "areaServed": {
            "@type": "State",
            "name": data.name,
            "abbreviation": data.abbr
          },
          "serviceType": "Pedestrian Injury Lawyer",
          "priceRange": "Contingency Fee",
          "knowsAbout": [
            "Pedestrian Accident Claims",
            "Right of Way Laws",
            "Hit and Run Cases",
            "Crosswalk Liability"
          ]
        }}
      />

      <NavBar />
      
      <Breadcrumbs 
        items={[
          { label: "Locations", href: "/#locations" },
          { label: "Practice Areas", href: "/practice-areas/pedestrian-injury" },
          { label: `${data.name} Pedestrian Injury Lawyer` }
        ]} 
      />

      <main>
        {/* H1: <Link href="/practice-areas/pedestrian-injury" className="text-primary hover:underline font-semibold">Pedestrian Injury</Link> Lawyers in [STATE] */}
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
                  <User className="h-4 w-4" />
                  Protecting Pedestrians in {data.name}
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white font-serif leading-tight">
                  Pedestrian Injury Lawyers in <span className="text-secondary">{data.name}</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  Hit while walking? Drivers in {data.name} have a duty to watch the road.
                  We hold negligent drivers accountable for crosswalk violations and hit-and-runs.
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

        {/* H2: Experienced Pedestrian Injury Lawyers in [STATE] */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-3 gap-12">
               <div className="lg:col-span-2 space-y-12">
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Experienced Pedestrian Injury Lawyers in {data.name}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        Pedestrians are the most vulnerable people on {data.name}'s roads. When a vehicle strikes a 
                        pedestrian, the results are often catastrophic. Our experienced pedestrian injury lawyers 
                        fight for victims who have been run down by careless drivers.
                      </p>
                      <p>
                        We understand {data.name}'s specific pedestrian safety laws, including right-of-way statutes 
                        at crosswalks and intersections. Drivers often try to blame the pedestrian for "jaywalking" 
                        or not looking—we gather video evidence and witness testimony to prove the driver was at fault.
                      </p>
                    </div>
                 </div>

                 {/* H2: Pedestrian Injury Insurance Coverage in [STATE] */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Pedestrian Injury Insurance Coverage in {data.name}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        Recovering compensation as a pedestrian involves navigating multiple insurance policies. 
                        In {data.name}, the at-fault driver's liability insurance is the primary source of recovery.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 my-8">
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="p-6">
                            <Shield className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">Driver Liability</h3>
                            <p className="text-sm">
                              We file claims against the driver's bodily injury liability policy. If their limits 
                              ({data.minInsurance} minimum in {data.name}) are too low to cover your medical bills, 
                              we look for other options.
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="p-6">
                            <AlertTriangle className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">Uninsured Motorist</h3>
                            <p className="text-sm">
                              If you were hit by an uninsured driver or a hit-and-run vehicle, you may be able 
                              to file a claim under your own auto insurance policy's Uninsured Motorist (UM) 
                              coverage, even though you were walking.
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <p>
                        In hit-and-run cases, which are all too common in {data.name}, we work with police and 
                        private investigators to track down the responsible driver. If they cannot be found, 
                        we help you access your own <Link href="/vs-insurance" className="text-black hover:underline font-semibold">insurance</Link> benefits.
                      </p>
                    </div>
                 </div>

                 {/* H2: Why Choose Car Injury Law for Pedestrian Case? */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Why Choose Car Injury Law for Pedestrian Case?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Footprints className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-primary">Pedestrian Specialists</h3>
                          <p className="text-gray-600">
                            We specialize in cases involving walkers, runners, and joggers. We know how to reconstruction 
                            impact points and calculate walking speeds to prove you had the right of way.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Heart className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-primary">Compassionate Advocacy</h3>
                          <p className="text-gray-600">
                            Pedestrian injuries are often severe. We handle all the legal stress so you can focus 
                            on your physical recovery and rehabilitation.
                          </p>
                        </div>
                      </div>
                    </div>
                 </div>

                 {/* SEO Content Section */}
                 <SeoContentSection service="Pedestrian Injury Lawyer" location={data.name} />

                 {/* H2: Speak With Our Pedestrian Injury Lawyer in [STATE] Today. */}
                 <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10">
                       <User className="h-64 w-64 -mr-16 -mt-16" />
                    </div>
                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold font-serif mb-4">
                        Speak With Our Pedestrian Injury Lawyer in {data.name} Today
                      </h2>
                      <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                        You have limited time ({data.statute}) to file a claim in {data.name}. 
                        Don't let the driver get away with negligence. Contact us 24/7 for a free, 
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
                        <span className="font-bold flex items-center gap-2"><MapPin className="h-4 w-4" /> Pedestrian Lawyers in {data.name}</span>
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