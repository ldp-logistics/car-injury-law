import { m } from "framer-motion";
import { LeadForm } from "./lead-form";
import { CheckCircle, ShieldCheck } from "lucide-react";

export function HeroSection() {
  const heroBg = "/assets/hero-bg.png";
  
  return (
    <div id="hero-section" className="relative bg-primary min-h-[800px] lg:min-h-[750px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg}
          srcSet={`${heroBg} 640w, ${heroBg} 1024w, ${heroBg} 1920w`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          alt="Car Accident Law Firm Hero Background - City Traffic Motion Blur representing speed and urgency" 
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <m.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold tracking-wide backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-secondary" />
              <span className="text-gray-200">The Official <span className="text-white font-bold">Admani Law</span> Network</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight font-serif tracking-tight">
              Injured? Get The <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-300">Brand Power</span> You Deserve.
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed font-light">
              Don't just hire a lawyer. Hire a <strong className="text-white font-bold">National Legal Force.</strong> <br/>
              We connect you with the most aggressive trial attorneys in America.
            </p>

            <div className="flex flex-col gap-4 pt-2 border-l-2 border-secondary/30 pl-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                <span className="font-bold text-lg tracking-wide">Over $500 Million Recovered</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                <span className="font-bold text-lg tracking-wide">Top 1% of Trial Lawyers Network</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
                <span className="font-bold text-lg tracking-wide">Admani Law Quality Guarantee</span>
              </div>
            </div>
          </m.div>

          {/* Right Column: Form */}
          <div className="lg:pl-12" id="lead-form">
            <div className="relative">
               {/* Glow effect behind form */}
               <div className="absolute -inset-4 bg-secondary/20 rounded-xl blur-xl"></div>
               <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}