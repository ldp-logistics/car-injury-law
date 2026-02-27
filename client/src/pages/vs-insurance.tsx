import { Link } from "wouter";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { SeoHead } from "@/components/seo-head";
import { StickyCta } from "@/components/sticky-cta";

export default function VsInsurancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoHead 
        title="Admani Law vs. Insurance Adjusters | Don't Settle For Less"
        description="See the difference between handling a claim yourself vs. hiring Admani Law. We fight for maximum compensation while adjusters fight to pay you zero."
        canonicalUrl="https://www.carinjurylaw.com/vs-insurance"
      />
      <NavBar />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-6">
              Us vs. <span className="text-destructive">Them</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The <Link href="/vs-insurance" className="text-black hover:underline font-semibold">insurance adjuster</Link> works for the shareholders. We work for <strong>you</strong>. See the difference in results.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 relative">
              {/* VS Badge */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-xl hidden md:block">
                 <div className="bg-slate-900 text-white w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl font-serif border-4 border-white">VS</div>
              </div>

              {/* Insurance Side */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-600 font-serif">The Insurance Company</h3>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold mt-2">Their Goal: Pay You $0</p>
                </div>
                
                <ul className="space-y-6">
                  {[
                    "Offers a 'quick check' before you know your medical needs",
                    "Records your phone calls to use against you",
                    "Delays payment hoping you get desperate",
                    "Claims your injuries were 'pre-existing'",
                    "Pressures you to sign away your rights"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="bg-red-100 p-1 rounded-full mt-1">
                        <X className="h-4 w-4 text-red-600" />
                      </div>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Admani Law Side */}
              <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-2xl transform md:-translate-y-4 border-t-4 border-secondary">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white font-serif">Admani Law Network</h3>
                  <p className="text-sm text-secondary uppercase tracking-wider font-bold mt-2">Our Goal: Maximum Value</p>
                </div>
                
                <ul className="space-y-6">
                  {[
                    "Calculates future medical costs & lost wages",
                    "Handles ALL communication with adjusters",
                    "Files lawsuits to force fair settlements",
                    "Hires medical experts to prove your injuries",
                    "Charges ZERO fees unless we win your case"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="bg-secondary p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button className="w-full bg-secondary text-primary font-bold h-14 text-lg hover:bg-secondary/90">
                    Get An Aggressive Advocate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <StickyCta />
      <Footer />
    </div>
  );
}