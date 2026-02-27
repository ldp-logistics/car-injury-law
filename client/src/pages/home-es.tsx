import { NavBar } from "@/components/nav-bar";
import { HeroSection } from "@/components/hero-section";
import { TrustStrip } from "@/components/trust-strip";
import { ResultsSection } from "@/components/results-section";
import { FeaturesSection } from "@/components/features-section";
import { TeamSection } from "@/components/team-section";
import { Footer } from "@/components/footer";
import { FaqSection } from "@/components/faq-section";
import { ProcessSection } from "@/components/process-section";
import { StickyCta } from "@/components/sticky-cta";
import { ChatWidget } from "@/components/chat-widget";
import { ExitIntentModal } from "@/components/exit-intent-modal";
import { SocialProof } from "@/components/social-proof";
import { CalculatorSection } from "@/components/calculator-section";
import { AccessibilityWidget } from "@/components/accessibility-widget";
import { CrashKitModal } from "@/components/crash-kit-modal";
import { VideoTestimonials } from "@/components/video-testimonials";
import { CoverageMap } from "@/components/coverage-map";
import { PracticeAreasGrid } from "@/components/practice-areas-grid";
import { CallbackScheduler } from "@/components/callback-scheduler";
import { DeadlineCalculator } from "@/components/deadline-calculator";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { SeoHead } from "@/components/seo-head";

export default function HomeES() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentDate = new Date().toISOString();

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans pb-20 md:pb-0 overflow-x-hidden">
      <SeoHead 
        title="Abogados de Accidentes de Auto | Admani Law"
        description="La red oficial de Admani Law. Abogados de accidentes de auto a nivel nacional luchando por su compensación máxima. Si no ganamos, no cobramos."
        lastUpdated={currentDate}
        canonicalUrl="https://www.carinjurylaw.com/es"
        lang="es"
      />

      <ScrollProgress />
      <NavBar />
      <main>
        {/* Simple Spanish Hero Overlay for Mockup */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-full bg-secondary text-primary text-center py-2 font-bold z-20">
            🇪🇸 Hablamos Español - Estamos aquí para ayudarle
          </div>
          <HeroSection />
        </div>
        
        <TrustStrip />
        <ResultsSection />
        <TeamSection />
        <VideoTestimonials />
        <CalculatorSection />
        <FeaturesSection />
        <PracticeAreasGrid />
        <ProcessSection />
        <DeadlineCalculator />
        <CoverageMap />
        <CrashKitModal />
        <FaqSection />
        <CallbackScheduler />
        
        <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
              No se conforme con menos.
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
              La compañía de seguros tiene abogados. Usted también debería tenerlos.<br/>
              Llame a la Red Admani Law ahora.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={scrollToForm}
                className="bg-secondary text-primary font-bold py-4 px-8 rounded-lg text-xl hover:bg-secondary/90 transition-all shadow-xl transform hover:-translate-y-1 uppercase tracking-wide"
              >
                Consulta Gratis
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <StickyCta />
      <ChatWidget />
      <ExitIntentModal />
      <SocialProof />
      <AccessibilityWidget />
      <BackToTop />
      <Footer />
    </div>
  );
}