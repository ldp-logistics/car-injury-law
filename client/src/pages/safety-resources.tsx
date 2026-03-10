import { Link } from "wouter";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { SafeDriverPledge } from "@/components/safe-driver-pledge";
import { EmergencyCardGenerator } from "@/components/emergency-card-generator";
import { SeoHead } from "@/components/seo-head";
import { StickyCta } from "@/components/sticky-cta";

export default function SafetyResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoHead 
        title="Safety Tools & Resources | Admani Law"
        description="Free safety tools for drivers: Create a digital Emergency (ICE) Card and take the Safe Driver Pledge. Community initiatives by Admani Law."
        canonicalUrl="https://www.carinjurylaw.com/safety-resources"
      />
      <NavBar />
      
      <main className="pt-10 pb-20">
        <div className="container mx-auto px-4 text-center mb-12">
          <h1 className="text-4xl font-bold font-serif text-primary mb-4">Safety Resources</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don't just fight for you after an accident. We're committed to preventing them. Use these free tools to keep you and your family safe.
          </p>
        </div>

        <EmergencyCardGenerator />
        <div className="my-12"></div>
        <SafeDriverPledge />
      </main>

      <StickyCta />
      <Footer />
    </div>
  );
}