import { Link } from "wouter";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { LeadForm } from "@/components/lead-form";
import { SeoHead } from "@/components/seo-head";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CheckCircle, AlertTriangle, Truck } from "lucide-react";

export default function JackknifeAccidentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoHead 
        title="Jackknife Truck Accident Lawyer | Admani Law"
        description="Jackknife accidents are often caused by braking errors or equipment failure. Our specialized truck accident team knows how to prove liability."
        canonicalUrl="https://www.carinjurylaw.com/practice-areas/truck-accident/jackknife"
      />
      <NavBar />
      <Breadcrumbs 
        items={[
          { label: "Practice Areas", href: "/sitemap" },
          { label: "Truck Accidents", href: "/practice-areas/truck-accident" },
          { label: "Jackknife Accidents" }
        ]} 
      />

      <main>
        <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-wider mb-4 text-sm">
                  <Truck className="h-4 w-4" /> Specialized Legal Representation
                </div>
                <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
                  Jackknife <span className="text-secondary">Truck Accidents</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  When a trailer swings out and folds against the cab, it sweeps across multiple lanes, causing devastation. We hold trucking companies accountable.
                </p>
              </div>
              <div className="bg-white p-1 rounded-xl">
                 <LeadForm />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h2 className="text-3xl font-bold font-serif text-primary mb-6">Common Causes of Jackknifing</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Improper Braking (Brake failure or driver error)",
              "Speeding too fast for conditions",
              "Unsecured Cargo shifting weight",
              "Worn Tires losing traction"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-secondary flex-shrink-0" />
                <span className="font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>

          <div className="prose prose-lg text-slate-600 max-w-none">
            <p>
              Proving fault in a jackknife accident requires immediate investigation. We send our team to the scene to measure skid marks, download the truck's "Black Box" (ECU) data, and inspect the braking system before evidence is destroyed.
            </p>
          </div>
        </div>
      </main>

      <StickyCta />
      <Footer />
    </div>
  );
}