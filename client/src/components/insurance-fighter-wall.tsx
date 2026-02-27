import { Shield, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const insurers = [
  "State Farm", "Geico", "Allstate", "Progressive", 
  "Liberty Mutual", "Farmers", "Nationwide", "USAA"
];

export function InsuranceFighterWall() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-secondary font-bold tracking-wider text-sm uppercase">We Know Their Tricks</span>
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-primary mt-2">
            We Fight The Big Giants Every Day
          </h3>
          <p className="text-muted-foreground mt-2">
            Insurance adjusters are trained to pay you less. We are trained to make them pay you more.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {insurers.map((name, i) => (
            <div key={i} className="relative group">
              <div className="h-24 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-black text-xl text-slate-400 group-hover:text-slate-800">{name}</span>
              </div>
              <div className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 delay-100 flex items-center gap-1">
                <CheckCircle className="h-3 w-3" /> WE WIN
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}