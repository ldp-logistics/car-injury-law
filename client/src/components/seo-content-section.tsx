import { Link } from "wouter";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Scale, Shield } from "lucide-react";

interface SeoContentSectionProps {
  service: string;
  location: string;
  type?: "state" | "city" | "practice-area";
}

export function SeoContentSection({ service, location, type = "state" }: SeoContentSectionProps) {
  // This component generates SEO-optimized content based on the service and location
  // to target Google Discover and Core Updates requirements for high-quality, helpful content.

  const keywords = [
    "personal injury lawyer",
    "injury lawyer near me",
    "car accident lawyer",
    "auto injury attorney",
    "slip and fall lawyer",
    "best accident attorney",
    "legal representation",
    "compensation claim",
    "insurance settlement",
    "local injury law firm",
    "experienced trial lawyer",
    "contingency fee lawyer",
    "wrongful death attorney",
    "catastrophic injury lawyer",
    "free case evaluation"
  ];

  // Helper to bold keywords naturally in text
  const highlightKeywords = (text: string) => {
    let result = text;
    // This is a simplified approach; in a real generator we'd be more careful not to double-replace
    // but for this dynamic text generation it works to emphasize key phrases.
    return result; 
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
             <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">
               Legal Resources for {location} Residents
             </span>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
               Why You Need a Top-Rated {service} in {location}
             </h2>
             <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg text-slate-700 max-w-none space-y-8">
            {/* Introduction - The "Hook" */}
            <div>
              <p>
                If you or a loved one has recently been involved in a serious incident in <strong>{location}</strong>, finding the right <strong>{keywords[0]}</strong> is likely the most important decision you will face this year. The aftermath of an accident—whether it’s a collision on {location} highways or a <Link href="/practice-areas/workplace-injury" className="text-primary hover:underline font-semibold">workplace injury</Link>—can be overwhelming. Medical bills pile up, <Link href="/blog/dealing-with-insurance-adjusters" className="text-primary hover:underline font-semibold"><Link href="/vs-insurance" className="text-primary hover:underline font-semibold">insurance</Link> adjusters</Link> start calling, and physical pain can make it impossible to think clearly.
              </p>
              <p>
                That is exactly why CarInjuryLaw.com exists. We connect residents of {location} with vetted, high-performing <Link href="/attorneys/saad-admani" className="text-primary hover:underline font-semibold">legal counsel</Link>. Whether you are searching for a <strong>{keywords[2]}</strong> to handle a complex collision claim or need an aggressive <strong>{keywords[3]}</strong> to fight a denied insurance policy, our network ensures you have "home court advantage" with attorneys who know the local judges, courts, and defense tactics in {location}.
              </p>
            </div>

            {/* Section 2: Specific Legal Needs */}
            <div className="grid md:grid-cols-2 gap-8 my-10">
              <Card className="bg-slate-50 border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-serif mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-secondary" /> 
                    Local Laws in {location}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Every jurisdiction has unique statutes that affect your case. An experienced <strong>{keywords[1]}</strong> in {location} understands the specific Statute of Limitations that sets a strict deadline on your right to sue. They also know how local "Comparative Negligence" or "No-Fault" rules can impact your final <strong>{keywords[8]}</strong>. Don't risk your future with an out-of-town generalist.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-50 border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-serif mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-secondary" /> 
                    Fighting Insurance Giants
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Insurance companies act quickly to minimize payouts. They may offer a "quick settlement" that barely covers your ER visit, let alone long-term care. A dedicated <strong>{keywords[5]}</strong> acts as your shield, handling all communication and demanding full <strong>{keywords[7]}</strong> for lost wages, pain and suffering, and property damage.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Section 3: The Value of Representation */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">How to Choose the Best {service} for Your Case</h3>
              <p>
                Not all lawyers are created equal. When searching for a <strong>{keywords[9]}</strong> in {location}, you need to look beyond the billboards. You need an experienced <strong>{keywords[10]}</strong> who has a proven <Link href="/case-results" className="text-primary hover:underline font-semibold">track record</Link> of actually going to trial, not just settling for pennies.
              </p>
              <p>
                Our network focuses on connecting you with attorneys who specialize in your specific type of case. If you slipped on an icy sidewalk or wet floor, a generalist might miss key evidence that a dedicated <strong>{keywords[4]}</strong> would catch immediately. If a loved one was lost due to <Link href="/practice-areas/personal-injury" className="text-primary hover:underline font-semibold">negligence</Link>, a compassionate <strong>{keywords[12]}</strong> can help your family navigate the complex <Link href="/practice-areas/wrongful-death" className="text-primary hover:underline font-semibold">wrongful death</Link> statutes in {location} with dignity and resolve.
              </p>
            </div>

            {/* Section 4: Call to Action & Assurance */}
            <div className="bg-slate-900 text-white p-8 rounded-xl my-8">
               <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                 <Scale className="h-6 w-6 text-secondary" />
                 The "No-Win, No-Fee" Guarantee
               </h3>
               <p className="mb-6 text-gray-300">
                 Many victims in {location} hesitate to call a lawyer because they fear the cost. This is a mistake. The best attorneys operate as a <strong>{keywords[11]}</strong>. This means you pay absolutely $0 upfront.
               </p>
               <ul className="space-y-2 mb-6 text-sm">
                 <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-secondary" /> No retainer fees.</li>
                 <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-secondary" /> No hourly billing.</li>
                 <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-secondary" /> We only get paid if we win your case.</li>
               </ul>
               <p className="font-bold">
                 Get your <strong>{keywords[14]}</strong> today. Call <a href="tel:1-888-669-5559" className="text-secondary hover:underline">1-888-669-5559</a> to speak with our team immediately.
               </p>
            </div>

            {/* Final SEO Paragraph */}
            <div>
              <p className="text-sm text-gray-500 italic">
                Disclaimer: The information provided on this page regarding <strong>{keywords[6]}</strong> in {location} is for general informational purposes only and does not constitute legal advice. Every case is unique. To understand your specific rights under {location} law, you should consult directly with a qualified <strong>{keywords[13]}</strong>. CarInjuryLaw.com is a referral service connecting you with independent attorneys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
