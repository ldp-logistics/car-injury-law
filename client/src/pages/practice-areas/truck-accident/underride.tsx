import { Link } from "wouter";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { LeadForm } from "@/components/lead-form";
import { SeoHead } from "@/components/seo-head";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CheckCircle, ShieldAlert, Truck } from "lucide-react";

export default function UnderrideAccidentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoHead 
        title="Underride Truck Accident Lawyer | Admani Law"
        description="Underride crashes are among the deadliest accidents on the road. We fight for families affected by inadequate side guards and rear guards."
        canonicalUrl="https://www.carinjurylaw.com/practice-areas/truck-accident/underride"
      />
      <NavBar />
      <Breadcrumbs 
        items={[
          { label: "Practice Areas", href: "/sitemap" },
          { label: "Truck Accidents", href: "/practice-areas/truck-accident" },
          { label: "Underride Accidents" }
        ]} 
      />

      <main>
        <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-wider mb-4 text-sm">
                  <ShieldAlert className="h-4 w-4" /> Catastrophic <Link href="/practice-areas/personal-injury" className="text-primary hover:underline font-semibold">Injury</Link> Unit
                </div>
                <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
                  Underride <span className="text-secondary">Crashes</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  When a smaller vehicle slides underneath a semi-trailer, the safety systems of the car are bypassed. These are often fatal, and often preventable.
                </p>
              </div>
              <div className="bg-white p-1 rounded-xl">
                 <LeadForm />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h2 className="text-3xl font-bold font-serif text-primary mb-6">Why Underride Accidents Happen</h2>
          <p className="text-lg text-slate-600 mb-8">
            Federal law requires "Mansfield Bars" (rear impact guards) on trailers, but many are old, rusted, or defectively designed. Side underride guards are not yet mandatory, leading to preventable tragedies.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-12">
            <h3 className="text-xl font-bold text-red-700 mb-2">We Investigate The Equipment</h3>
            <p className="text-slate-700">
              We hire metallurgical experts to examine the truck's guards. If the metal was weak or the welds were poor, the manufacturer or maintenance company may be liable in addition to the driver.
            </p>
          </div>
        </div>
      </main>

      <StickyCta />
      <Footer />
    </div>
  );
}