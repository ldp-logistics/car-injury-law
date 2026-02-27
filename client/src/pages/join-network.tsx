import { Link } from "wouter";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { SeoHead } from "@/components/seo-head";

export default function JoinNetworkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoHead 
        title="Attorney Referral Network | Join Admani Law"
        description="Partner with Admani Law. We refer high-value personal injury cases to vetted co-counsel nationwide."
        canonicalUrl="https://www.carinjurylaw.com/join-network"
      />
      <NavBar />
      
      <main className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold font-serif text-slate-900 mb-4">Partner With Admani Law</h1>
              <p className="text-xl text-slate-600">
                Expand your caseload with high-quality, pre-screened MVA referrals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Benefits */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-slate-900">Why <Link href="/join-network" className="text-primary hover:underline font-semibold">Join Our Network</Link>?</h2>
                <ul className="space-y-4">
                  {[
                    "Exclusive Geographic Territories",
                    "Pre-Qualified Leads (Not Raw Data)",
                    "Standard 25-33% Referral Fee Structure",
                    "Co-Counsel Opportunities on Catastrophic Cases",
                    "National Brand Marketing Support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                  <p className="italic text-slate-600">
                    "Admani Law sends us cases that are actually ready to sign. The intake quality is superior to any lead gen agency we've worked with."
                  </p>
                  <p className="font-bold text-slate-900 mt-4">- Partner Firm, Florida</p>
                </div>
              </div>

              {/* Application Form */}
              <Card className="shadow-xl border-t-4 border-primary">
                <CardHeader>
                  <CardTitle><Link href="/attorneys/saad-admani" className="text-primary hover:underline font-semibold">Attorney</Link> Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Jane" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Smith" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="firmName"><Link href="/about" className="text-primary hover:underline font-semibold">Law Firm</Link> Name</Label>
                      <Input id="firmName" placeholder="Smith & Associates, PC" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="jane@smithlaw.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="states">Bar Admissions (States)</Label>
                      <Input id="states" placeholder="NJ, NY, PA" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="practice">Primary Practice Areas</Label>
                      <Input id="practice" placeholder="MVA, Slip & Fall, Med Mal" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us about your firm's litigation capabilities..." />
                    </div>

                    <Button className="w-full bg-primary font-bold h-12 text-lg">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}