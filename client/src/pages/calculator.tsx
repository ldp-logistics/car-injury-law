import { Link } from "wouter";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CalculatorSection } from "@/components/calculator-section";
import { StickyCta } from "@/components/sticky-cta";
import { SeoHead } from "@/components/seo-head";

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoHead 
        title="Car Accident Settlement Calculator | Admani Law"
        description="How much is your car accident case worth? Use our free settlement calculator to estimate your compensation for medical bills, lost wages, and pain & suffering."
        canonicalUrl="https://www.carinjurylaw.com/settlement-calculator"
      />
      <NavBar />
      
      <main className="flex-grow pt-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-slate-900 mb-6">
              Car Accident <span className="text-secondary">Settlement Calculator</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Find out what your case could be worth in seconds. Our advanced algorithm considers medical expenses, property damage, and pain & suffering multipliers used by <Link href="/vs-insurance" className="text-black hover:underline font-semibold">insurance companies</Link>.
            </p>
          </div>

          <CalculatorSection />
          
          <div className="max-w-3xl mx-auto mt-16 prose prose-lg text-slate-600">
            <h2 className="text-slate-900 font-serif">How We Calculate Your Settlement</h2>
            <p>
              Insurance adjusters use specific formulas to determine the value of an injury claim. Our calculator mimics this process by aggregating your economic damages (bills, lost wages) and applying a multiplier for non-economic damages (pain and suffering) based on the severity of your injury.
            </p>
            
            <h3 className="text-slate-900 font-serif">Factors That Increase Value</h3>
            <ul>
              <li><strong>Severity of Injury:</strong> Permanent injuries command higher multipliers.</li>
              <li><strong>Medical Treatment:</strong> Consistent treatment gaps reduce value. Surgery increases value.</li>
              <li><strong>Liability:</strong> Clear fault on the other driver maximizes recovery.</li>
              <li><strong>Insurance Limits:</strong> The at-fault driver's policy limit is often the practical cap on recovery.</li>
            </ul>

            <div className="bg-slate-100 p-6 rounded-xl border-l-4 border-primary mt-8 not-prose">
              <p className="font-bold text-primary mb-2">Disclaimer</p>
              <p className="text-sm text-slate-600 m-0">
                This calculator provides an estimate only and does not guarantee a specific result. Every case is unique. For an accurate valuation, you must speak with a licensed attorney.
              </p>
            </div>
          </div>
        </div>
      </main>

      <StickyCta />
      <Footer />
    </div>
  );
}