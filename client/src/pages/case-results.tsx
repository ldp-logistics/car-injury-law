import { Link } from "wouter";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { SeoHead } from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CASE_RESULTS } from "@/data/case-results-data";
import { Filter, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CaseResultsPage() {
  const [filter, setFilter] = useState("all");

  const filteredResults = filter === "all" 
    ? CASE_RESULTS 
    : CASE_RESULTS.filter(r => r.category === filter);

  const categories = [
    { id: "all", label: "All Results" },
    { id: "truck", label: "Truck Accidents" },
    { id: "car", label: "Car Accidents" },
    { id: "motorcycle", label: "Motorcycle" },
    { id: "wrongful-death", label: "Wrongful Death" },
    { id: "pedestrian", label: "Pedestrian" }
  ];

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoHead 
        title="Case Results & Settlements | Admani Law"
        description="View our track record of multi-million dollar settlements. Real results for real clients in truck accidents, car crashes, and wrongful death cases."
        canonicalUrl="https://www.carinjurylaw.com/case-results"
      />
      <NavBar />
      
      <main className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-wider text-sm uppercase">Proven <Link href="/case-results" className="text-primary hover:underline font-semibold">Track Record</Link></span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mt-2 mb-6">
              Real Results. Real Recoveries.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We have recovered over <strong>$500 Million</strong> for our clients. While every case is unique, our dedication to winning is constant.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? "default" : "outline"}
                onClick={() => setFilter(cat.id)}
                className={`rounded-full ${filter === cat.id ? 'bg-primary text-white' : 'bg-white hover:bg-slate-100'}`}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredResults.map((result, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="bg-slate-900 p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <result.icon className="w-24 h-24" />
                    </div>
                    <div className="relative z-10">
                      <Badge className="bg-secondary text-primary font-bold mb-3 hover:bg-secondary">
                        {result.location}
                      </Badge>
                      <h3 className="text-4xl font-bold font-serif text-secondary mb-1">
                        {result.amount}
                      </h3>
                      <p className="text-lg font-medium opacity-90">{result.type}</p>
                    </div>
                  </div>
                  
                  <div className="p-8 bg-white flex-1 flex flex-col">
                    <p className="font-bold text-slate-900 mb-3 text-lg leading-tight">
                      {result.summary}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      {result.details}
                    </p>
                    <Button 
                      onClick={scrollToForm}
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white font-bold group-hover:bg-primary group-hover:text-white transition-colors"
                    >
                      Get Similar Results
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <StickyCta />
      <Footer />
    </div>
  );
}