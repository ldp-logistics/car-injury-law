import { SeoContentSection } from "@/components/seo-content-section";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { LeadForm } from "@/components/lead-form";
import { CheckCircle, Shield, AlertTriangle, Scale } from "lucide-react";
import { SeoHead } from "@/components/seo-head";
import { StateData } from "@/data/state-data";
import stockImage from '@assets/stock_images/personal_injury_lawy_4d2da1ce.jpg';

interface PersonalInjuryStatePageProps {
  stateData: StateData;
}

export default function PersonalInjuryStatePage({ stateData }: PersonalInjuryStatePageProps) {
  const stateName = stateData.name;
  
  // Schema markup for LegalService
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Car Injury Law",
    "practiceArea": "Personal Injury Lawyer",
    "areaServed": stateName,
    "description": `Personal Injury Lawyers in ${stateName}. Experienced representation for accident victims.`,
    "url": `https://www.carinjurylaw.com/personal-injury-lawyer/${stateName.toLowerCase().replace(/ /g, '-')}`
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <SeoHead 
        title={`Personal Injury Lawyers in ${stateName} | Nationwide Accident Attorney`}
        description={`Looking for a Personal Injury Lawyer in ${stateName}? Our network of experienced attorneys fights for your rights. Free 24/7 consultation. No win, no fee.`}
        canonicalUrl={`https://www.carinjurylaw.com/personal-injury-lawyer/${stateName.toLowerCase().replace(/ /g, '-')}`}
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
                  {stateName} Legal Network
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold font-serif leading-tight">
                  Personal Injury Lawyers in <br/>
                  <span className="text-secondary">{stateName}</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  When negligence causes harm in {stateName}, you need a powerful advocate. We connect you with top-rated personal injury attorneys in {stateName} to fight for your rights.
                </p>
                <div className="space-y-3 pt-4">
                  {["No Win, No Fee Guarantee", "Millions Recovered for Clients", `Available 24/7 in ${stateName}`].map((item, i) => (
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
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">Experienced Personal Injury Lawyers in {stateName}</h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                If you have been injured due to someone else's negligence in {stateName}, you have specific <strong>Personal Injury legal rights in {stateName}</strong>. A qualified <strong>
                  {(stateName === "New York" || stateName === "New Jersey") ? (
                    <a href="https://www.admanilaw.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Personal Injury Lawyer in {stateName}</a>
                  ) : (
                    `Personal Injury Lawyer in ${stateName}`
                  )}
                </strong> acts as your shield against insurance companies who try to devalue your claim.
              </p>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Whether it's a car crash on {stateName} highways, a slip and fall, or a workplace accident, our network of <strong>Personal Injury Attorneys in {stateName}</strong> is dedicated to restoring your financial stability.
              </p>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                We handle complex cases including those requiring a <strong>Rideshare accident attorney {stateName}</strong> or an <strong>Uber accident attorney near {stateName}</strong>. These cases often involve multi-layered insurance policies that require specialized knowledge to navigate effectively.
              </p>
            </section>

            <section className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">Personal Injury Insurance Coverage in {stateName}</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Understanding insurance is the cornerstone of any successful claim. Most <strong>Car accident law firms near {stateName}</strong> will tell you that coverage depends heavily on how insurance works in {stateName}.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                In {stateName}, the specific rules regarding fault and liability play a crucial role. 
                {stateData.faultSystem.includes("No-Fault") 
                  ? ` ${stateName} is a No-Fault state, meaning your own insurance (PIP) typically pays first.` 
                  : ` ${stateName} is an At-Fault state, meaning the person who caused the accident is responsible.`}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Shield className="text-secondary h-5 w-5" /> Insurance Rules
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {stateName} follows a <strong>{stateData.faultSystem}</strong> system. Understanding this is vital for your claim.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <AlertTriangle className="text-destructive h-5 w-5" /> Statute of Limitations
                  </h3>
                  <p className="text-slate-600 text-sm">
                    In {stateName}, you generally have <strong>{stateData.statute}</strong> to file a lawsuit. Don't wait until it's too late.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-slate-700 mt-6 leading-relaxed">
                If you need an <strong>Uber accident lawyer in {stateName}</strong> or a <strong>{stateName} Lyft accident lawyer</strong>, be aware that rideshare companies have specific insurance tiers that apply depending on whether the driver was waiting for a ride, en route to a passenger, or transporting a passenger.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">Why Choose Car Injury Law for Personal Injury Case?</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Choosing the right representation can mean the difference between a small settlement and full compensation. As a premier referral network serving {stateName}, we offer:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-slate-900">Nationwide Coverage</strong>
                    <span className="text-slate-600">We have vetted partners in {stateName} and across all 50 states ready to take your case.</span>
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
                    <span className="text-slate-600">Accidents don't wait for business hours. Neither do we. Call us anytime if you need a <strong>Lyft accident attorney near me</strong> or help with any injury claim.</span>
                  </div>
                </li>
              </ul>
            </section>

            <section className="bg-primary text-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold font-serif mb-4 text-white">Speak With Our {(stateName === "New York" || stateName === "New Jersey") ? (
                    <a href="https://www.admanilaw.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Personal Injury Lawyer in {stateName}</a>
                  ) : (
                    `Personal Injury Lawyer in ${stateName}`
                  )} Today</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Time is limited. Evidence disappears, and statutes of limitations expire. Don't face the insurance giants alone. Contact a <strong>Uber accident attorney near me</strong> or a general personal injury expert today.
              </p>
              <button 
                onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-secondary rounded-full hover:bg-white transition-colors shadow-lg"
              >
                Get Your Free Case Review
              </button>
            </section>
            
            {/* NEW SEO CONTENT SECTION */}
            <SeoContentSection service="Personal Injury Lawyer" location={stateName} />

          </div>
        </div>
      </main>

      <StickyCta />
      <Footer />
    </div>
  );
}
