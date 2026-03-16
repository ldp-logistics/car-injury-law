import { SeoHead } from "@/components/seo-head";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { ChatWidget } from "@/components/chat-widget";
import { LeadForm } from "@/components/lead-form";
import { MapPin, TrendingUp, AlertTriangle, Shield, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { StateData } from "@/data/state-data";
import { RelatedLinks } from "@/components/related-links";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface StateStatisticsPageProps {
  data: StateData;
}

export default function StateStatisticsPage({ data }: StateStatisticsPageProps) {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentDate = new Date().toISOString();
  
  // Dynamic SEO Data based on server/meta.ts spec
  const pageTitle = `${data.name} Car Accident Statistics 2026 | Car Injury Law`;
  const pageDesc = `${data.name} car accident statistics and data. Fault system: ${data.faultSystem}. Statute of limitations: ${data.statute}. Average settlements ${data.avgSettlement}. Know your rights — free consultation.`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans pb-20 md:pb-0">
      <SeoHead 
        title={pageTitle}
        description={pageDesc}
        lastUpdated={currentDate}
        canonicalUrl={`https://www.carinjurylaw.com/car-accident-statistics/${data.name.toLowerCase().replace(/ /g, '-')}/`}
        ogImage={data.bgImage}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": pageTitle,
          "description": pageDesc,
          "url": `https://www.carinjurylaw.com/car-accident-statistics/${data.name.toLowerCase().replace(/ /g, '-')}/`,
          "author": { "@type": "Organization", "name": "Car Injury Law" }
        }}
      />

      <NavBar />
      
      <Breadcrumbs 
        items={[
          { label: "Locations", href: "/#locations" },
          { label: `${data.name} Lawyer`, href: `/${data.slug}` },
          { label: `${data.name} Statistics` }
        ]} 
      />

      <main>
        {/* Hero Section */}
        <div id="overview" className="relative bg-primary min-h-[500px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
            style={{ backgroundImage: `url('${data.bgImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-bold tracking-wide uppercase">
                  <TrendingUp className="h-4 w-4" />
                  2026 Data & Statistics
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white font-serif leading-tight">
                  <span className="text-secondary">{data.name}</span> Car Accident Statistics
                </h1>
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  Understanding the numbers is the first step to staying safe. Explore the latest crash data, settlement averages, and legal statutes for drivers in {data.name}.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button onClick={scrollToForm} size="lg" className="bg-secondary text-primary font-bold hover:bg-secondary/90">
                    Get Free Case Review
                  </Button>
                </div>
              </div>
              <div className="lg:pl-12" id="lead-form">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-3 gap-12">
               <div className="lg:col-span-2 space-y-12">
                 
                 {/* Key Legal Stats */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      Key Legal Statistics in {data.name}
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        When analyzing car accident statistics in {data.name}, it's essential to understand the underlying legal framework that dictates how compensation is awarded following a crash. Below are the crucial legal numbers every driver should know.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 my-8">
                        <Card className="border-l-4 border-l-secondary shadow-md">
                          <CardContent className="p-6">
                            <Shield className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">Fault System</h3>
                            <p className="text-sm font-semibold">{data.faultSystem}</p>
                            <p className="text-sm mt-2 text-gray-500">
                              This system determines how fault is assigned and who pays for damages after an accident in {data.name}.
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-secondary shadow-md">
                          <CardContent className="p-6">
                            <AlertTriangle className="h-8 w-8 text-secondary mb-3" />
                            <h3 className="font-bold text-lg mb-2">Statute of Limitations</h3>
                            <p className="text-sm font-semibold">{data.statute}</p>
                            <p className="text-sm mt-2 text-gray-500">
                              The strict legal deadline in {data.name} to file a personal injury lawsuit before your claim is permanently barred.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                 </div>

                 {/* Settlements */}
                 <div>
                    <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                      {data.name} Settlement Averages
                    </h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                      <p>
                        Victims often wonder what their case is worth. While every collision is unique, the state average settlement reflects the severity of injuries and the adequacy of insurance coverage.
                      </p>
                       <ul className="space-y-4 my-6">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                            <div>
                               <strong className="text-gray-900 block">Average Estimated Settlement:</strong>
                               <span>{data.avgSettlement}</span>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                            <div>
                               <strong className="text-gray-900 block">Minimum State Liability Coverage:</strong>
                               <span>{data.minInsurance}</span>
                            </div>
                          </li>
                       </ul>
                       <p>
                          In crashes involving extreme negligence, commercial trucks, or lasting disability, verdicts frequently exceed these averages significantly.
                       </p>
                    </div>
                 </div>

               </div>

               {/* SIDEBAR */}
               <aside className="lg:col-span-1">
                 <div className="sticky top-36 space-y-8">
                    {/* Areas Served Card */}
                    <Card className="overflow-hidden shadow-lg border-none">
                      <div className="bg-slate-900 p-4 text-white flex items-center justify-center">
                        <span className="font-bold flex items-center gap-2"><MapPin className="h-4 w-4" /> Top Cities in {data.name}</span>
                      </div>
                      <CardContent className="p-4 bg-white">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {data.cityList.slice(0, 15).map((city, i) => (
                            <Link 
                              key={i} 
                              href={`/${data.slug}/${city.toLowerCase().replace(/ /g, '-')}`}
                              className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-bold hover:bg-secondary hover:text-primary transition-colors border border-slate-200"
                            >
                              {city}
                            </Link>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                 </div>
               </aside>
             </div>
          </div>
        </section>
      </main>
      
      <StickyCta />
      <RelatedLinks />
      <ChatWidget />
      <Footer />
    </div>
  );
}
