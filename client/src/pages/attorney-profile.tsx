import { Link } from "wouter";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { SeoHead } from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, BookOpen, Scale, Briefcase, GraduationCap } from "lucide-react";
import attorneyImg from "@assets/admani_1763525477578.jpg";

export default function AttorneyProfilePage() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoHead 
        title="Saad Admani, Esq. | Network Director & Lead Attorney"
        description="Saad Admani is the founder of Admani Law and Director of the CarInjuryLaw.com Network. Licensed in NJ & NY, specializing in high-stakes injury litigation."
        canonicalUrl="https://www.carinjurylaw.com/attorneys/saad-admani"
        ogImage={attorneyImg}
        ogType="profile"
        schema={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Saad Admani",
          "jobTitle": "Network Director & Managing Attorney",
          "worksFor": {
            "@type": "LegalService",
            "name": "Admani Law"
          },
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Rutgers Law School"
          },
          "knowsAbout": ["Personal Injury Law", "Civil Litigation", "Network Management"],
          "sameAs": [
            "https://www.linkedin.com/in/saadadmani",
            "https://www.avvo.com/attorneys/saad-admani"
          ]
        }}
      />
      <NavBar />
      
      <main className="pt-10 pb-20">
        {/* Hero Profile Section */}
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="md:col-span-1 relative min-h-[400px]">
                <img 
                  src={attorneyImg} 
                  alt="Saad Admani, Esq." 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r" />
              </div>
              
              <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-wider mb-4 text-sm">
                  <Award className="h-4 w-4" /> Network Director
                </div>
                <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
                  <Link href="/attorneys/saad-admani" className="text-primary hover:underline font-semibold">Saad Admani</Link>, <span className="text-secondary">Esq.</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                  "My goal wasn't just to build a law firm. It was to build a nationwide force that could stand up to the biggest insurance companies in America."
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm border-none">
                    <GraduationCap className="h-4 w-4 mr-2 text-secondary" /> Rutgers Law School
                  </Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm border-none">
                    <Scale className="h-4 w-4 mr-2 text-secondary" /> Licensed in NJ & NY
                  </Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm border-none">
                    <Briefcase className="h-4 w-4 mr-2 text-secondary" /> 12+ Years Experience
                  </Badge>
                </div>

                <Button onClick={scrollToForm} className="bg-secondary text-primary font-bold w-fit h-12 px-8 hover:bg-secondary/90">
                  Request Case Review
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold font-serif text-primary mb-6">Biography</h2>
                <div className="prose prose-lg text-slate-600">
                  <p>
                    Saad Admani is the founder and managing attorney of <a href="https://www.admanilaw.com" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">Admani Law</a>. A graduate of Rutgers Law School, Saad began his career with a singular focus: leveling the playing field for <Link href="/practice-areas/personal-injury" className="text-primary hover:underline font-semibold">injury</Link> victims.
                  </p>
                  <p>
                    Recognizing that no single attorney can be an expert in every jurisdiction, Saad architected the <strong>CarInjuryLaw.com Network</strong>. This curated alliance connects victims with vetted, high-performing trial attorneys in their specific local jurisdiction, ensuring that every client gets "home court advantage" while backed by the resources of a national brand.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold font-serif text-primary mb-6">Philosophy</h2>
                <div className="bg-slate-50 p-8 rounded-xl border-l-4 border-secondary">
                  <p className="text-xl font-serif italic text-slate-700 mb-4">
                    "Insurance companies have billions. We have the truth, and we have each other. That is enough to win."
                  </p>
                  <div className="grid gap-4 mt-6">
                    {[
                      "Aggressive Representation: We don't accept lowball offers.",
                      "Transparency: Clients deserve to know the truth about their case.",
                      "Accessibility: Justice shouldn't be hard to reach."
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
              <Card className="border-none shadow-lg bg-slate-900 text-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold font-serif mb-6 text-secondary flex items-center gap-2">
                    <BookOpen className="h-5 w-5" /> Bar Admissions
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span>State of New Jersey</span>
                      <span className="text-secondary font-bold">Active</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span>State of New York</span>
                      <span className="text-secondary font-bold">Active</span>
                    </li>
                    <li className="flex justify-between items-center pt-2">
                      <span>US District Court (NJ)</span>
                      <span className="text-secondary font-bold">Admitted</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <StickyCta />
      <Footer />
    </div>
  );
}