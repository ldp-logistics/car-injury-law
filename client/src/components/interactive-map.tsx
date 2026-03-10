import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { STATE_DATA } from "@/data/state-data";
import { Button } from "@/components/ui/button";
import usMapImage from "@/assets/us-map.png";

export function InteractiveMap() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const regions = [
    { name: "Northeast", states: ["NJ", "NY", "PA", "CT", "MA"], color: "bg-secondary" },
    { name: "Southeast", states: ["FL", "GA", "NC", "SC", "AL"], color: "bg-blue-500" },
    { name: "Midwest", states: ["IL", "OH", "MI", "IN", "WI"], color: "bg-indigo-500" },
    { name: "Southwest", states: ["TX", "AZ", "NM", "NV", "OK"], color: "bg-orange-500" },
    { name: "West", states: ["CA", "WA", "OR", "CO", "UT"], color: "bg-amber-500" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold font-serif text-slate-900">
            National Reach. <span className="text-secondary">Local Power.</span>
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            We don't just have a license; we have a <strong>network</strong>. Admani Law has boots on the ground in all 50 states. Select your region to find your local <Link href="/about" className="text-black hover:underline font-semibold">legal team</Link>.
          </p>

          <div className="grid grid-cols-2 gap-4">
             {regions.map((region) => (
               <div 
                 key={region.name}
                 onMouseEnter={() => setHoveredState(region.name)}
                 onMouseLeave={() => setHoveredState(null)}
                 className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                   hoveredState === region.name 
                     ? "border-secondary bg-secondary/5 shadow-md" 
                     : "border-slate-100 bg-slate-50"
                 }`}
               >
                 <div className="flex items-center gap-2 mb-2">
                   <div className={`w-3 h-3 rounded-full ${region.color}`}></div>
                   <span className="font-bold text-slate-900">{region.name}</span>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {region.states.map(abbr => (
                     <span key={abbr} className="text-xs font-mono text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                       {abbr}
                     </span>
                   ))}
                 </div>
               </div>
             ))}
          </div>
        </div>

        <div className="relative bg-slate-900 rounded-2xl p-2 aspect-video flex items-center justify-center overflow-hidden group shadow-2xl border border-slate-800">
          {/* Map Visual */}
          <div className="absolute inset-0 z-0">
             <img 
               src={usMapImage}
               srcSet={`${usMapImage} 400w, ${usMapImage} 800w`}
               sizes="(max-width: 768px) 100vw, 50vw" 
               alt="National Legal Network Map" 
               className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105"
               loading="lazy"
               width="800"
               height="450"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900 opacity-80"></div>
          </div>

          <div className="relative z-10 text-center space-y-6 w-full max-w-md px-4">
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <MapPin className="h-16 w-16 text-secondary mx-auto drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
            </motion.div>
            
            <div className="space-y-2">
              <h4 className="text-3xl font-bold text-white font-serif tracking-tight">
                {hoveredState ? `Serving the ${hoveredState}` : "Select Your Region"}
              </h4>
              <p className="text-slate-400 text-sm">
                {hoveredState 
                  ? "Click below to find a vetted attorney in your area." 
                  : "Hover over the list to see our coverage."}
              </p>
            </div>
            
            {hoveredState ? (
              <Link href={`/${Object.values(STATE_DATA).find(s => regions.find(r => r.name === hoveredState)?.states.includes(s.abbr))?.slug || 'new-jersey-car-accident-lawyer'}`}>
                <Button className="w-full h-14 text-lg bg-secondary hover:bg-secondary/90 text-primary font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)] animate-in slide-in-from-bottom-4 fade-in duration-300">
                  Find {hoveredState} Attorneys
                </Button>
              </Link>
            ) : (
               <div className="h-14 flex items-center justify-center">
                 <span className="inline-flex h-2 w-2 rounded-full bg-secondary animate-ping mr-2"></span>
                 <span className="text-xs text-secondary font-bold uppercase tracking-widest">Network Active</span>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}