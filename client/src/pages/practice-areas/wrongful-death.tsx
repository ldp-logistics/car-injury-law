import { Link } from "wouter";
import { SeoContentSection } from "@/components/seo-content-section";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { LeadForm } from "@/components/lead-form";
import { CheckCircle, Heart, Users } from "lucide-react";
import { SeoHead } from "@/components/seo-head";

export default function WrongfulDeathPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <SeoHead 
        title="Wrongful Death Attorneys | Compassionate Legal Help"
        description="If you lost a loved one due to negligence, we can help you find justice. Admani Law connects families with top wrongful death litigators."
        canonicalUrl="https://www.carinjurylaw.com/practice-areas/wrongful-death"
      />
      <NavBar />
      
      <main>
        {/* HERO */}
        <div className="relative bg-slate-900 min-h-[600px] flex items-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-bold tracking-wide uppercase">
                  <Heart className="h-4 w-4" />
                  Compassionate Justice
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold font-serif leading-tight">
                  Wrongful Death <br/>
                  <span className="text-secondary">Litigation</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  No amount of money can replace a loved one. But justice matters. We help families secure their financial future after a tragic loss.
                </p>
                <div className="space-y-3 pt-4">
                  {["Funeral & Burial Expenses", "Loss of Companionship", "Loss of Future Income"].map((item, i) => (
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
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">We Handle The Legal Burden</h2>
              <p className="text-lg text-slate-600 mb-4">
                During this difficult time, the last thing you should worry about is arguing with <Link href="/vs-insurance" className="text-black hover:underline font-semibold">insurance companies</Link>. Our attorneys handle every aspect of the claim so you can focus on grieving and healing.
              </p>
            </section>

            <section className="bg-slate-50 p-8 rounded-xl border-l-4 border-secondary">
              <h3 className="text-2xl font-bold font-serif text-slate-900 mb-4">Who Can File a Claim?</h3>
              <p className="text-slate-600 mb-4">
                Wrongful death laws vary by state. Generally, the following family members may be eligible to file a lawsuit:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Users className="text-secondary h-5 w-5" />
                  <span className="font-bold text-slate-700">Spouses</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-secondary h-5 w-5" />
                  <span className="font-bold text-slate-700">Children</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-secondary h-5 w-5" />
                  <span className="font-bold text-slate-700">Parents</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-secondary h-5 w-5" />
                  <span className="font-bold text-slate-700">Estate Representatives</span>
                </div>
              </div>
            </section>

            {/* SEO Content Section */}
            <SeoContentSection service="Wrongful Death Lawyer" location="Nationwide" />
          </div>
        </div>
      </main>

      <StickyCta />
      <Footer />
    </div>
  );
}