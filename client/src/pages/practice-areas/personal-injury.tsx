import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { LeadForm } from "@/components/lead-form";
import { CheckCircle, Shield, AlertTriangle, Scale } from "lucide-react";
import { SeoHead } from "@/components/seo-head";
import stockImage from '@assets/stock_images/personal_injury_lawy_4d2da1ce.jpg';
import { Link } from "wouter";
import { STATE_DATA } from "@/data/state-data";

export default function PersonalInjuryPage() {
  // Schema markup for LegalService
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Car Injury Law",
    "practiceArea": "Personal Injury Lawyer",
    "areaServed": "United States",
    "description": "Nationwide personal injury lawyers fighting for accident victims.",
    "url": "https://www.carinjurylaw.com/practice-areas/personal-injury"
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <SeoHead 
        title="Personal Injury Lawyer | Nationwide Accident Attorney Services"
        description="Injured in an accident? Our experienced personal injury lawyers fight for maximum compensation. No win, no fee. Free 24/7 consultation."
        canonicalUrl="https://www.carinjurylaw.com/practice-areas/personal-injury"
      />
      {/* Inject JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <NavBar />
      
      <main>
        {/* HERO */}
        <div className="relative bg-slate-900 min-h-[600px] flex items-center">
          <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay" style={{ backgroundImage: `url(${stockImage})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-bold tracking-wide uppercase">
                  <Scale className="h-4 w-4" />
                  Nationwide Legal Network
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold font-serif leading-tight">
                  Personal Injury <br/>
                  <span className="text-secondary">Lawyers</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  When negligence causes harm, you need a powerful advocate. We connect you with top-rated personal injury attorneys across the nation to fight for your rights.
                </p>
                <div className="space-y-3 pt-4">
                  {["No Win, No Fee Guarantee", "Millions Recovered for Clients", "Available 24/7 Nationwide"].map((item, i) => (
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
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">Experienced Personal Injury Lawyers</h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                If you have been injured due to someone else's negligence, you have specific <strong>Personal Injury legal rights</strong>. A qualified <strong>Personal Injury Lawyer</strong> acts as your shield against insurance companies who try to devalue your claim. Whether it's a car crash, a slip and fall, or a workplace accident, our network of <strong>Personal Injury Attorneys</strong> is dedicated to restoring your financial stability.
              </p>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                We handle complex cases including those requiring a <strong>Rideshare accident attorney</strong> or an <strong>Uber accident attorney</strong>. These cases often involve multi-layered insurance policies that require specialized knowledge to navigate effectively.
              </p>
            </section>

            <section className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">Personal Injury Insurance Coverage</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Understanding insurance is the cornerstone of any successful claim. Most <strong>Car accident law firms</strong> will tell you that coverage depends heavily on the "At-Fault" vs. "No-Fault" laws in your state.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Shield className="text-secondary h-5 w-5" /> No-Fault (PIP)
                  </h3>
                  <p className="text-slate-600 text-sm">
                    In "No-Fault" states, your own insurance (Personal Injury Protection) pays your medical bills first, regardless of who caused the crash.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <AlertTriangle className="text-destructive h-5 w-5" /> At-Fault Liability
                  </h3>
                  <p className="text-slate-600 text-sm">
                    In "At-Fault" states, the person who caused the accident is responsible for paying all damages, including pain and suffering.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">Why Choose Car Injury Law for Personal Injury Case?</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Choosing the right representation can mean the difference between a small settlement and full compensation. As a premier referral network, we offer:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-slate-900">Nationwide Coverage</strong>
                    <span className="text-slate-600">We have vetted partners in all 50 states ready to take your case.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-slate-900">No Upfront Fees</strong>
                    <span className="text-slate-600">You pay absolutely nothing unless we win your case. Our partners work on contingency.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-slate-900">Free 24/7 Consultation</strong>
                    <span className="text-slate-600">Accidents don't wait for business hours. Neither do we. Call us anytime.</span>
                  </div>
                </li>
              </ul>
            </section>

            <section className="bg-primary text-white p-8 rounded-xl text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-4 text-white">Speak With Our Personal Injury Lawyer Today</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Time is limited. Evidence disappears, and statutes of limitations expire. Don't face the insurance giants alone.
              </p>
              <button 
                onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-secondary rounded-full hover:bg-white transition-colors shadow-lg"
              >
                Get Your Free Case Review
              </button>
            </section>

            {/* States Section */}
            <section className="border-t pt-12">
              <h2 className="text-2xl font-bold font-serif text-primary mb-8 text-center">Find Personal Injury Lawyers in Your State</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
                {Object.values(STATE_DATA).map((state) => (
                  <Link 
                    key={state.slug} 
                    href={`/personal-injury-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`}
                    className="text-slate-600 hover:text-secondary hover:underline transition-colors"
                  >
                    Personal Injury Lawyers in {state.name}
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>

      <StickyCta />
      <Footer />
    </div>
  );
}
