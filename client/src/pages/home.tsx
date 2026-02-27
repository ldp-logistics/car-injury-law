import { Suspense, lazy } from "react";
import { NavBar } from "@/components/nav-bar";
import { HeroSection } from "@/components/hero-section";
import { TrustStrip } from "@/components/trust-strip";
import { ResultsSection } from "@/components/results-section";
import { FeaturesSection } from "@/components/features-section";
import { TeamSection } from "@/components/team-section";
import { Footer } from "@/components/footer";
import { FaqSection } from "@/components/faq-section";
import { StickyCta } from "@/components/sticky-cta";
import { SocialProof } from "@/components/social-proof";
import { AccessibilityWidget } from "@/components/accessibility-widget";
import { PracticeAreasGrid } from "@/components/practice-areas-grid";
import { CallbackScheduler } from "@/components/callback-scheduler";
import { DeadlineCalculator } from "@/components/deadline-calculator";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { SeoHead } from "@/components/seo-head";
import { SettlementTicker } from "@/components/settlement-ticker";
import { CaseTimeline } from "@/components/case-timeline";
import { AttorneyAudio } from "@/components/attorney-audio";

// Lazy load non-critical components
const ChatWidget = lazy(() => import("@/components/chat-widget").then(module => ({ default: module.ChatWidget })));
const ExitIntentModal = lazy(() => import("@/components/exit-intent-modal").then(module => ({ default: module.ExitIntentModal })));
const CrashKitModal = lazy(() => import("@/components/crash-kit-modal").then(module => ({ default: module.CrashKitModal })));
const VideoTestimonials = lazy(() => import("@/components/video-testimonials").then(module => ({ default: module.VideoTestimonials })));
const CalculatorSection = lazy(() => import("@/components/calculator-section").then(module => ({ default: module.CalculatorSection })));
const CoverageMap = lazy(() => import("@/components/coverage-map").then(module => ({ default: module.CoverageMap })));

export default function Home() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentDate = new Date().toISOString();

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans pb-20 md:pb-0 overflow-x-hidden">
      <SeoHead 
        title="Car Accident Lawyer | Nationwide Injury Network | Admani Law"
        description="Admani Law Network: Top-rated car accident attorneys nationwide. We fight insurance companies to get you maximum compensation. Free case review."
        lastUpdated={currentDate}
        canonicalUrl="https://www.carinjurylaw.com"
        schema={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Car Injury Law - Admani Law Network",
          "url": "https://www.carinjurylaw.com",
          "logo": "https://www.carinjurylaw.com/logo.png",
          "telephone": "1-888-669-5559",
          "priceRange": "Contingency Fee (No Win No Fee)",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "95 Christopher Columbus Dr, 16th Floor",
            "addressLocality": "Jersey City",
            "addressRegion": "NJ",
            "postalCode": "07302",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.7178,
            "longitude": -74.0431
          },
          "sameAs": [
            "https://www.facebook.com/admanilaw",
            "https://www.linkedin.com/in/saadadmani",
            "https://www.avvo.com/attorneys/saad-admani",
            "https://lawyers.justia.com/lawyer/saad-admani"
          ],
          "founder": {
            "@type": "Person",
            "name": "Saad Admani",
            "jobTitle": "Network Director & Lead Attorney",
            "alumniOf": "Rutgers Law School",
            "sameAs": [
              "https://www.linkedin.com/in/saadadmani",
              "https://www.avvo.com/attorneys/saad-admani"
            ]
          },
          "knowsAbout": [
            "Personal Injury Law",
            "Car Accident Settlements",
            "Trucking Federal Regulations (FMCSA)",
            "No-Fault Insurance Claims",
            "Wrongful Death Litigation",
            "Traumatic Brain Injury (TBI) Law"
          ],
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "12450",
            "bestRating": "5",
            "worstRating": "1"
          }
        }}
      />

      <ScrollProgress />
      <NavBar />
      <main>
        <SettlementTicker />
        <HeroSection />
        <TrustStrip />
        <CaseTimeline />
        <ResultsSection />
        <TeamSection />
        <Suspense fallback={<div className="h-96 bg-slate-100 animate-pulse rounded-lg" />}>
          <VideoTestimonials />
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-slate-100 animate-pulse rounded-lg" />}>
          <CalculatorSection />
        </Suspense>
        <FeaturesSection />
        <AttorneyAudio />
        <PracticeAreasGrid />
        <DeadlineCalculator />
        <Suspense fallback={<div className="h-96 bg-slate-100 animate-pulse rounded-lg" />}>
          <CoverageMap />
        </Suspense>
        <CrashKitModal />
        <FaqSection />
        <CallbackScheduler />
        
        <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
              Don't Settle For Less.
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
              The insurance company has lawyers. You should too.<br/>
              Call the Admani Law Network now.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={scrollToForm}
                className="bg-secondary text-primary font-bold py-4 px-8 rounded-lg text-xl hover:bg-secondary/90 transition-all shadow-xl transform hover:-translate-y-1 uppercase tracking-wide"
              >
                Free Case Review
              </button>
              <div className="sm:hidden text-sm opacity-70 mt-4">
                <p>Or call 24/7:</p>
                <a href="tel:1-888-669-5559" className="font-bold text-xl text-white underline">1-888-669-5559</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <StickyCta />
      
      <Suspense fallback={null}>
        <ChatWidget />
        <ExitIntentModal />
        <CrashKitModal />
      </Suspense>

      <SocialProof />
      <AccessibilityWidget />
      <BackToTop />
      <Footer />
    </div>
  );
}