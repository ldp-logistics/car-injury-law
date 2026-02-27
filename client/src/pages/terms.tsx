import { Link } from "wouter";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { FileText, AlertTriangle, Scale } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8 pb-8 border-b border-gray-200">
          <h1 className="text-4xl font-bold font-serif text-primary mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last Updated: November 19, 2025</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-secondary" />
              <h2 className="text-2xl font-bold text-primary m-0">1. Acceptance of Terms</h2>
            </div>
            <p>
              By accessing or using carinjurylaw.com, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use this website.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-secondary" />
              <h2 className="text-2xl font-bold text-primary m-0">2. No Legal Advice</h2>
            </div>
            <p>
              The materials on this website have been prepared for informational purposes only and are not legal advice. You should not act upon this information without seeking professional counsel.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-6 w-6 text-secondary" />
              <h2 className="text-2xl font-bold text-primary m-0">3. No Guarantee of Results</h2>
            </div>
            <p>
              <Link href="/case-results" className="text-black hover:underline font-semibold">Past results</Link> described on this site do not guarantee a similar outcome. Every case is different and must be judged on its own merits.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}