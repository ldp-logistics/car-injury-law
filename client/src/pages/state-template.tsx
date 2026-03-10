import { Link } from "wouter";
import { SeoContentSection } from "@/components/seo-content-section";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { ChatWidget } from "@/components/chat-widget";
import { LeadForm } from "@/components/lead-form";
import { CheckCircle, MapPin, Shield, AlertTriangle, Clock, Gavel } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// TEMPLATE DATA - This would be dynamic in a real app
const STATE_DATA = {
  name: "New Jersey",
  abbr: "NJ",
  statute: "2 Years",
  faultSystem: "Modified Comparative Negligence",
  minInsurance: "$15,000 / $30,000",
  avgSettlement: "$45,000 - $150,000",
  cityList: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Toms River", "Trenton"]
};

export default function StatePage() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans pb-20 md:pb-0">
      <NavBar />
      
      <main>
        {/* HERO SECTION */}
        <div className="relative bg-primary min-h-[600px] flex items-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-bold tracking-wide uppercase">
                  <MapPin className="h-4 w-4" />
                  Serving All of {STATE_DATA.name}
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white font-serif leading-tight">
                  {STATE_DATA.name} Car Accident <br/>
                  <span className="text-secondary">Attorneys & Network</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  Injured in {STATE_DATA.name}? Don't fight the insurance company alone. 
                  We connect you with top-rated local trial lawyers who know {STATE_DATA.name}'s traffic laws inside and out.
                </p>
                <div className="flex flex-col gap-3 pt-4">
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                    <span className="font-medium text-lg">Local {STATE_DATA.name} Legal Experts</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                    <span className="font-medium text-lg">{STATE_DATA.statute} Statute of Limitations</span>
                  </div>
                </div>
              </div>
              <div className="lg:pl-12" id="lead-form">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className="bg-slate-50 border-b border-slate-200 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Statute of Limitations</p>
                <p className="text-2xl font-serif font-bold text-primary">{STATE_DATA.statute}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Fault System</p>
                <p className="text-xl font-serif font-bold text-primary">{STATE_DATA.faultSystem}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Min. Insurance</p>
                <p className="text-xl font-serif font-bold text-primary">{STATE_DATA.minInsurance}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Avg. Settlement</p>
                <p className="text-xl font-serif font-bold text-secondary">{STATE_DATA.avgSettlement}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold font-serif text-primary mb-6">Why You Need a {STATE_DATA.name} Car Accident Lawyer</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p>
                    {STATE_DATA.name}'s traffic laws are complex. From navigating the specific "{STATE_DATA.faultSystem}" rules to dealing with aggressive local insurance adjusters, you need a legal team that understands the local landscape.
                  </p>
                  <p>
                    Our network of attorneys in {STATE_DATA.name} has recovered millions for clients in cities like {STATE_DATA.cityList.join(", ")}. We don't just settle; we fight for the maximum compensation you deserve for medical bills, lost wages, and pain and suffering.
                  </p>
                </div>
              </section>

              {/* WARNING BOX */}
              <div className="bg-destructive/5 border-l-4 border-destructive p-6 rounded-r-lg">
                <div className="flex gap-4">
                  <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-destructive mb-2">Warning: The Clock is Ticking</h3>
                    <p className="text-gray-700">
                      In {STATE_DATA.name}, you generally only have <strong>{STATE_DATA.statute}</strong> from the date of the accident to file a lawsuit. If you miss this deadline, you may be forever barred from recovering compensation. Don't wait.
                    </p>
                  </div>
                </div>
              </div>

              <section>
                <h2 className="text-3xl font-bold font-serif text-primary mb-6">Common Accident Types in {STATE_DATA.name}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {["Rear-End Collisions", "Highway Pile-ups", "Intersection Crashes", "DUI Accidents", "Rideshare (Uber/Lyft)", "Truck Accidents"].map((type, i) => (
                    <Card key={i} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center gap-3">
                        <Shield className="h-5 w-5 text-secondary" />
                        <span className="font-bold text-primary">{type}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold font-serif text-primary mb-6">Frequently Asked Questions in {STATE_DATA.name}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {/* ... accordion items ... */}
                </Accordion>
              </section>

              {/* NEW SEO CONTENT SECTION */}
              <SeoContentSection service="Car Accident Lawyer" location={STATE_DATA.name} />

            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Local Map Card */}
                <Card className="overflow-hidden shadow-lg border-none">
                  <div className="bg-slate-900 p-4 text-white flex items-center justify-between">
                    <span className="font-bold flex items-center gap-2"><MapPin className="h-4 w-4" /> Areas Served</span>
                  </div>
                  <CardContent className="p-0">
                    <div className="aspect-square bg-slate-100 relative flex items-center justify-center">
                      <span className="text-slate-300 font-bold text-4xl">{STATE_DATA.abbr} MAP</span>
                      {/* Placeholder for Google Map Embed */}
                    </div>
                    <div className="p-4 bg-white">
                      <h4 className="font-bold text-primary mb-2">Serving Major Cities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {STATE_DATA.cityList.map((city, i) => (
                          <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-medium">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Results Card */}
                <Card className="bg-primary text-white border-none shadow-xl">
                  <CardContent className="p-6 text-center">
                    <Gavel className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-bold mb-2">Recent {STATE_DATA.abbr} Results</h3>
                    <div className="space-y-4 mt-6">
                      <div className="bg-white/10 p-3 rounded">
                        <p className="text-2xl font-bold text-secondary">$1,250,000</p>
                        <p className="text-sm text-gray-300"><Link href="/practice-areas/truck-accident" className="text-black hover:underline font-semibold">Truck Accident</Link> Settlement</p>
                      </div>
                      <div className="bg-white/10 p-3 rounded">
                        <p className="text-2xl font-bold text-secondary">$450,000</p>
                        <p className="text-sm text-gray-300">Car Crash Verdict</p>
                      </div>
                    </div>
                    <Button 
                      onClick={scrollToForm}
                      className="w-full bg-secondary text-primary font-bold mt-6 hover:bg-secondary/90"
                    >
                      GET YOUR FREE REVIEW
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

      </main>
      <StickyCta />
      <ChatWidget />
      <Footer />
    </div>
  );
}