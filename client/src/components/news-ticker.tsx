import { Link } from "wouter";
import { TrendingUp } from "lucide-react";

const newsItems = [
  "ALERT: New recall announced for major SUV manufacturer due to brake failure.",
  "SETTLEMENT: $2.5M recovered for pile-up victim in Atlanta.",
  "LEGAL UPDATE: Statute of limitations for injury claims may be shortening in some districts.",
  "VICTORY: Jury awards $8M to motorcycle accident survivor.",
  "NEWS: Distracted driving accidents up 15% this quarter - stay safe!",
];

export function NewsTicker() {
  return (
    <div className="bg-slate-900 text-white border-b border-slate-800 overflow-hidden h-10 flex items-center relative z-40">
      <div className="bg-destructive px-4 h-full flex items-center gap-2 font-bold text-xs uppercase tracking-wider z-10 shadow-lg shrink-0">
        <TrendingUp className="h-4 w-4" />
        <Link href="/blog" className="text-primary hover:underline font-semibold">Legal Updates</Link>
      </div>
      <div className="flex whitespace-nowrap overflow-hidden w-full relative">
        {/* Mask to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-12 animate-marquee items-center pl-4">
          {[...newsItems, ...newsItems, ...newsItems, ...newsItems].map((item, i) => (
            <span key={i} className="text-xs font-medium text-gray-300 flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}