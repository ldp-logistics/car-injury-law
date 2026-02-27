import { SeoContentSection } from "@/components/seo-content-section";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { LeadForm } from "@/components/lead-form";
import { CheckCircle, Car, Shield } from "lucide-react";
import { SeoHead } from "@/components/seo-head";

export default function RideshareAccidentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <SeoHead 
        title="Uber & Lyft Accident Lawyers | Rideshare Injury Attorneys"
        description="Injured in an Uber or Lyft? Rideshare insurance policies are complex. We fight for the $1 Million policy limit coverage you deserve."
        canonicalUrl="https://www.carinjurylaw.com/practice-areas/rideshare-accident"
      />
      <NavBar />
      
      <main>
        {/* HERO */}
        <div className="relative bg-slate-900 min-h-[600px] flex items-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-bold tracking-wide uppercase">
                  <Car className="h-4 w-4" />
                  Uber & Lyft Cases
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold font-serif leading-tight">
                  Rideshare Accident <br/>
                  <span className="text-secondary">Attorneys</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  Navigating the "Insurance Gap" in rideshare cases requires expertise. We know how to unlock the $1 Million insurance policies held by Uber and Lyft.
                </p>
                <div className="space-y-3 pt-4">
                  {["$1 Million Liability Coverage", "Passenger Injuries", "Driver Injuries"].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                       <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                       <span className="font-medium text-lg">{item}</span>
                     </div>
                  ))}
                </div>
              </div>
              <div className="lg:pl-12">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto space-y-12">
            <section>
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">The Three Stages of Rideshare Coverage</h2>
              <p className="text-lg text-slate-600 mb-4">
                Coverage depends entirely on the driver's "status" at the moment of the crash.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-gray-300">
                  <h3 className="font-bold text-lg text-slate-900">Period 1: App Off</h3>
                  <p className="text-slate-600">Driver's personal insurance applies. Uber/Lyft provide NO coverage.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-secondary">
                  <h3 className="font-bold text-lg text-slate-900">Period 2: App On, Waiting for Ride</h3>
                  <p className="text-slate-600">Limited coverage applies ($50k/$100k/$25k) if the driver's personal insurance denies the claim.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-green-500">
                  <h3 className="font-bold text-lg text-slate-900">Period 3: Passenger in Car (or En Route)</h3>
                  <p className="text-slate-600"><strong>$1,000,000</strong> coverage applies for liability and uninsured motorist claims.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">We Represent Passengers & Drivers</h2>
              <p className="text-lg text-slate-600">
                Whether you were a passenger in the Uber, a driver hit by an Uber, or an Uber driver hit by someone else, we can help. These cases involve multiple insurance companies pointing fingers at each other. We step in and demand payment.
              </p>
            </section>

            {/* SEO Content Section */}
            <SeoContentSection service="Rideshare Accident Lawyer" location="Nationwide" />
          </div>
        </div>
      </main>

      <StickyCta />
      <Footer />
    </div>
  );
}