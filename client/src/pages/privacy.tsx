import { Link } from "wouter";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Shield, Lock, Eye } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8 pb-8 border-b border-gray-200">
          <h1 className="text-4xl font-bold font-serif text-primary mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last Updated: November 19, 2025</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-secondary" />
              <h2 className="text-2xl font-bold text-primary m-0">1. Information We Collect</h2>
            </div>
            <p>
              We collect information you provide directly to us, such as when you fill out a contact form, use our chat widget, or call our intake line. This may include your name, email address, phone number, and details about your legal case.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="h-6 w-6 text-secondary" />
              <h2 className="text-2xl font-bold text-primary m-0">2. How We Use Your Information</h2>
            </div>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to evaluate your potential legal claim, and to communicate with you. <strong>We do not sell your personal data to third parties.</strong>
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-6 w-6 text-secondary" />
              <h2 className="text-2xl font-bold text-primary m-0">3. <Link href="/attorneys/saad-admani" className="text-primary hover:underline font-semibold">Attorney</Link>-Client Privilege</h2>
            </div>
            <p>
              Submission of a form or use of our chat widget does not establish an attorney-client relationship. However, we treat all communications as confidential to the fullest extent permitted by law.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}