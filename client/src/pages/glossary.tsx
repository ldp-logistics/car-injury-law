import { Link } from "wouter";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SeoHead } from "@/components/seo-head";

const GLOSSARY_TERMS = [
  {
    term: "Ad Litem",
    def: "A person appointed by a court to represent the interests of a minor or incapacitated person in a lawsuit."
  },
  {
    term: "Comparative Negligence",
    def: "A legal principle that reduces the amount of damages a plaintiff can recover in a negligence-based claim based upon the degree of negligence that the plaintiff contributed to the cause of the injury."
  },
  {
    term: "Contingency Fee",
    def: "A fee arrangement where the lawyer is paid only if the lawsuit is successful or is favorably settled out of court. Admani Law operates on this model."
  },
  {
    term: "Damages",
    def: "Monetary compensation awarded by a court in a civil action to an individual who has been injured through the wrongful conduct of another party."
  },
  {
    term: "Deposition",
    def: "The taking of an oral statement of a witness under oath, before a court reporter, in a place away from the courtroom."
  },
  {
    term: "Gap Insurance",
    def: "Auto insurance coverage that pays the difference between the actual cash value of a vehicle and the current outstanding balance on a loan or lease."
  },
  {
    term: "Letter of Protection (LOP)",
    def: "A letter sent by a lawyer to a medical provider guaranteeing payment for medical services from a future lawsuit settlement."
  },
  {
    term: "Maximum Medical Improvement (MMI)",
    def: "The point at which an injured person's condition has stabilized and no further recovery or improvement is expected."
  },
  {
    term: "No-Fault Insurance",
    def: "A type of automobile insurance where your own insurance company pays for your medical expenses and lost wages, regardless of who caused the accident."
  },
  {
    term: "Subrogation",
    def: "The legal right of an insurance company to collect money they have paid to you from the party who actually caused the accident."
  },
  {
    term: "Tort",
    def: "A wrongful act or an infringement of a right (other than under contract) leading to civil legal liability."
  },
  {
    term: "Uninsured Motorist Coverage (UM)",
    def: "Insurance policy provision that protects you if you're involved in an accident with a driver who has no liability insurance."
  }
];

export default function GlossaryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoHead 
        title="Legal Glossary | Personal Injury Terms Defined"
        description="Confused by legal jargon? Our comprehensive glossary defines common personal injury terms like Subrogation, Tort, and Contingency Fees."
        canonicalUrl="https://www.carinjurylaw.com/glossary"
      />
      <NavBar />
      
      <main className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-serif text-slate-900 mb-4">Legal Glossary</h1>
            <p className="text-xl text-slate-600">Understanding the language of law.</p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search for a term..." 
                className="pl-10 h-12 text-lg bg-white shadow-sm" 
                aria-label="Search glossary terms"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {GLOSSARY_TERMS.map((item, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-primary font-serif">{item.term}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    {item.def}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}