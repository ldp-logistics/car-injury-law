import { Award, ShieldCheck, Star } from "lucide-react";

export function TrustStrip() {
  const mediaOutlets = [
    "FOX NEWS", "CNN", "Forbes", "USA TODAY", "NBC", "CBS", "ABC", "MSNBC", "Bloomberg", "Reuters", "Wall Street Journal", "TIME"
  ];

  return (
    <div className="bg-slate-50 border-b border-gray-200 overflow-hidden relative">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="flex items-center gap-4 text-gray-400 font-medium text-sm whitespace-nowrap min-w-max z-20 bg-slate-50 pr-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            AS FEATURED IN:
          </div>
          
          {/* Infinite Marquee */}
          <div className="relative flex overflow-hidden w-full mask-linear-fade">
            <div className="animate-marquee flex whitespace-nowrap gap-12 items-center opacity-50 grayscale">
              {mediaOutlets.map((outlet, i) => (
                <span key={i} className="text-xl font-serif font-black text-slate-800 mx-4">{outlet}</span>
              ))}
              {/* Duplicate for seamless loop */}
              {mediaOutlets.map((outlet, i) => (
                <span key={`dup-${i}`} className="text-xl font-serif font-black text-slate-800 mx-4">{outlet}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-200/60">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Award className="h-8 w-8 text-secondary" />
            <div className="flex flex-col">
              <span className="font-bold text-primary leading-none">Top 100</span>
              <span className="text-xs text-muted-foreground">Trial Lawyers</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <ShieldCheck className="h-8 w-8 text-secondary" />
            <div className="flex flex-col">
              <span className="font-bold text-primary leading-none">BBB Rated</span>
              <span className="text-xs text-muted-foreground">A+ Accredited</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Star className="h-8 w-8 text-secondary fill-secondary" />
            <div className="flex flex-col">
              <span className="font-bold text-primary leading-none">5.0 Stars</span>
              <span className="text-xs text-muted-foreground">Google Reviews</span>
            </div>
          </div>
          
           <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="h-8 w-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold font-serif">S</div>
            <div className="flex flex-col">
              <span className="font-bold text-primary leading-none">Super Lawyers</span>
              <span className="text-xs text-muted-foreground">2024 - 2025</span>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </div>
  );
}