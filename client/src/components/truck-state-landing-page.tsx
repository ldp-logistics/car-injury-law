import { SeoContentSection } from "@/components/seo-content-section";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { ChatWidget } from "@/components/chat-widget";
import { LeadForm } from "@/components/lead-form";
import { CheckCircle, MapPin, Shield, AlertTriangle, Gavel, Phone, Scale, Truck, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { StateData } from "@/data/state-data";
import { SeoHead } from "@/components/seo-head";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface TruckStateLandingPageProps {
  data: StateData;
}

export default function TruckStateLandingPage({ data }: TruckStateLandingPageProps) {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentDate = new Date().toISOString();
  
  // Dynamic SEO Data based on user request
  const pageTitle = `Truck Accident Lawyers in ${data.name} | ${data.name} Commercial Vehicle Attorney`;
  const pageDesc = `Injured in a semi-truck accident in ${data.name}? Our experienced ${data.name} 18-wheeler accident lawyers fight trucking companies. No win, no fee.`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans pb-20 md:pb-0">
      <SeoHead 
        title={pageTitle}
        description={pageDesc}
        lastUpdated={currentDate}
        canonicalUrl={`https://www.carinjurylaw.com/truck-accident-lawyer/${data.name.toLowerCase().replace(/ /g, '-')}`}
        ogImage={data.bgImage}
        schema={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": `Car Injury Law - ${data.name} Trucking Division`,
          "description": `Expert truck accident lawyers serving all of ${data.name}.`,
          "url": `https://www.carinjurylaw.com/truck-accident-lawyer/${data.name.toLowerCase().replace(/ /g, '-')}`,
          "telephone": "1-888-669-5559",
          "areaServed": {
            "@type": "State",
            "name": data.name,
            "abbreviation": data.abbr
          },
          "serviceType": "Truck Accident Lawyer",
          "priceRange": "Contingency Fee",
          "knowsAbout": [
            "Truck Accident Claims",
            "FMCSA Regulations",
            "Commercial Vehicle Liability",
            "18-Wheeler Accidents"
          ]
        }}
      />

      <NavBar />
      
      <Breadcrumbs 
        items={[
          { label: "Locations", href: "/#locations" },
          { label: "Practice Areas", href: "/practice-areas/truck-accident" },
          { label: `${data.name} Truck Accident Lawyer` }
        ]} 
      />

      <main>
        {/* H1: Truck Accident Lawyers in [STATE] */}
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
                  <Truck className="h-4 w-4" />
                  Commercial Vehicle Experts in {data.name}
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white font-serif leading-tight">
                  Truck Accident Lawyers in <span className="text-secondary">{data.name}</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  Hit by an 18-wheeler? We hold trucking companies accountable in {data.name}.
                  <Link href="/about" className="text-primary hover:underline font-semibold">Our attorneys</Link> know FMCSA regulations and fight for maximum <Link href="/settlement-calculator" className="text-primary hover:underline font-semibold">compensation</Link>.
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

        {/* H2: Experienced Truck Accident Lawyers in [STATE] */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-3 gap-12">
               <div className="lg:col-span-2 space-y-12">
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Experienced Truck Accident Lawyers in {data.name}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        Truck accidents in {data.name} are fundamentally different from car crashes. 
                        They involve massive commercial vehicles, devastating injuries, and complex 
                        federal regulations (FMCSA) that trucking companies must follow.
                      </p>
                      <p>
                        Our experienced {data.name} truck accident lawyers understand these regulations inside 
                        and out. We investigate hours-of-service violations, maintenance logs, and 
                        hiring practices to prove negligence. We know how to preserve "black box" 
                        data before the trucking company can destroy it.
                      </p>
                    </div>
                 </div>

                 {/* H2: Truck Accident <Link href="/vs-insurance" className="text-primary hover:underline font-semibold">Insurance</Link> Coverage in [STATE] */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Truck Accident Insurance Coverage in {data.name}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        Commercial trucking policies carry much higher limits than standard auto insurance, 
                        often exceeding $1,000,000. However, accessing these funds requires fighting 
                        aggressive corporate defense teams.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 my-8">
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="p-6">
                            <Shield className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">Commercial Policy Limits</h3>
                            <p className="text-sm">
                              Federal law requires interstate carriers to have significant liability coverage. 
                              In {data.name}, we ensure you tap into all available layers of insurance, 
                              including excess and umbrella policies.
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-secondary">
                          <CardContent className="p-6">
                            <AlertTriangle className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">Multiple Defendants</h3>
                            <p className="text-sm">
                              In many {data.name} truck accidents, liability extends beyond the driver. 
                              We pursue claims against the trucking company, cargo loaders, maintenance 
                              providers, and truck manufacturers.
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <p>
                        Whether the accident involved a semi-truck, delivery van, or construction vehicle, 
                        we identify every potential source of compensation to cover your medical bills, 
                        lost wages, and pain and suffering.
                      </p>
                    </div>
                 </div>

                 {/* H2: Why Choose Car Injury Law for Truck Accident Case? */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Why Choose Car Injury Law for Truck Accident Case?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Gavel className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-primary">Litigation Strength</h3>
                          <p className="text-gray-600">
                            We have the resources to take on large trucking corporations and their 
                            insurance carriers. We don't back down from a fight.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Truck className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-primary">Industry Knowledge</h3>
                          <p className="text-gray-600">
                            We work with accident reconstructionists and trucking industry experts to 
                            build an undeniable case of <Link href="/practice-areas/personal-injury" className="text-primary hover:underline font-semibold">negligence</Link>.
                          </p>
                        </div>
                      </div>
                    </div>
                 </div>

                 {/* SEO Content Section */}
                 <SeoContentSection service="Truck Accident Lawyer" location={data.name} />

                 {/* H2: Speak With Our <Link href="/practice-areas/truck-accident" className="text-primary hover:underline font-semibold">Truck Accident <Link href="/attorneys/saad-admani" className="text-primary hover:underline font-semibold">Lawyer</Link></Link> in [STATE] Today. */}
                 <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10">
                       <Truck className="h-64 w-64 -mr-16 -mt-16" />
                    </div>
                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold font-serif mb-4">
                        Speak With Our Truck Accident Lawyer in {data.name} Today
                      </h2>
                      <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                        The trucking company has a team of lawyers working against you. You need a team 
                        fighting for you. You have limited time ({data.statute}) to file a claim in {data.name}. 
                        Contact us 24/7.
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
                        <span className="font-bold flex items-center gap-2"><MapPin className="h-4 w-4" /> Truck Lawyers in {data.name}</span>
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