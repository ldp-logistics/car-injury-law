import { NavBar } from "@/components/nav-bar";
import { Link } from "wouter";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StickyCta } from "@/components/sticky-cta";
import { SeoHead } from "@/components/seo-head";
import { CheckCircle, Award, Scale, Users, Briefcase } from "lucide-react";
import admaniImage from "@/assets/admani.jpg";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoHead
        title="About Admani Law | National Injury Network Director"
        description="Learn about Admani Law and founder Saad Admani. We connect accident victims with the top 1% of trial attorneys nationwide."
        canonicalUrl="https://www.carinjurylaw.com/about"
      />
      <NavBar />

      <main>
        {/* Hero */}
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
              The <span className="text-secondary"><a href="https://www.admanilaw.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Admani Law</a></span> Standard
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We aren't just a law firm. We are a national coalition of the most aggressive, winning trial lawyers in America, curated by Saad Admani.
            </p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-secondary/10 rounded-xl transform -rotate-2"></div>
                  <img
                    src={admaniImage}
                    alt="Saad Admani - Network Director"
                    className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute bottom-8 left-8 bg-white p-6 rounded shadow-xl max-w-xs">
                    <Link href="/attorneys/saad-admani" className="font-bold text-slate-900 text-lg hover:text-secondary transition-colors inline-block mb-1">
                      Saad Admani
                    </Link>
                    <p className="text-secondary font-bold text-sm uppercase tracking-wider">Network Director</p>
                    <p className="text-slate-500 text-sm mt-2">Rutgers Law School</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-serif text-slate-900">Architecting Victory.</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Saad Admani founded <a href="https://www.admanilaw.com" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">Admani Law</a> with a single mission: to level the playing field against billion-dollar insurance giants. Licensed in New Jersey and New York, Saad recognized that accident victims across the country were being underrepresented by "settlement mills."
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To solve this, he built the <strong><a href="https://www.admanilaw.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Admani Law Network</a></strong>—a hand-picked alliance of local trial attorneys who have proven they can win in court.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <Award className="h-8 w-8 text-secondary mb-2" />
                    <h3 className="font-bold text-slate-900">Top 1% Selection</h3>
                    <p className="text-sm text-slate-500">Only attorneys with 7-figure <Link href="/case-results" className="text-primary hover:underline font-semibold">verdict</Link> history.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <Scale className="h-8 w-8 text-secondary mb-2" />
                    <h3 className="font-bold text-slate-900">Litigation First</h3>
                    <p className="text-sm text-slate-500">We partner with firms that file lawsuits, not just claims.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vetting Process */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-serif text-slate-900 mb-4">Our Vetting Process</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We turn down 90% of attorneys who ask to join our <Link href="/join-network" className="text-primary hover:underline font-semibold">referral network</Link>. We only work with the best.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Briefcase className="h-10 w-10 text-primary" />,
                  title: "Trial Experience",
                  desc: "Must have lead counsel experience in actual jury trials. Insurance companies know who goes to court."
                },
                {
                  icon: <Users className="h-10 w-10 text-primary" />,
                  title: "Client Satisfaction",
                  desc: "Must maintain a 4.5+ star rating across Google and legal directories."
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-primary" />,
                  title: "Financial Resources",
                  desc: "Must have the capital to fund expert witnesses and accident reconstruction without charging the client upfront."
                }
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <StickyCta />
      <Footer />
    </div>
  );
}