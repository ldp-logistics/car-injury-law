import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { HeartHandshake, Award } from "lucide-react";
import confetti from "canvas-confetti";

export function SafeDriverPledge() {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState("");

  const handleSign = () => {
    if (!name) return;
    setSigned(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#ffffff']
    });
  };

  return (
    <section className="py-16 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1 text-secondary font-bold text-sm mb-6 border border-white/20">
            <HeartHandshake className="h-4 w-4" />
            Community Initiative
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Take the Safe Driver Pledge
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join 12,450+ others who have pledged to drive distraction-free to keep our roads safe.
          </p>

          {!signed ? (
            <div className="bg-white p-2 rounded-full max-w-md mx-auto flex flex-col sm:flex-row gap-2 shadow-2xl">
              <Input 
                placeholder="Enter your name to sign" 
                className="border-none text-gray-900 h-12 px-6 rounded-full focus-visible:ring-0 bg-transparent"
                value={name}
                aria-label="Enter your name to sign the pledge"
                onChange={(e) => setName(e.target.value)}
              />
              <Button 
                onClick={handleSign}
                className="rounded-full h-12 px-8 bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg"
              >
                I Pledge
              </Button>
            </div>
          ) : (
            <div className="bg-white text-primary p-8 rounded-xl shadow-2xl max-w-lg mx-auto animate-in zoom-in duration-500">
              <Award className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-serif mb-2">Certificate of Commitment</h3>
              <p className="text-gray-600 mb-4">This certifies that</p>
              <p className="text-3xl font-black text-primary font-serif border-b-2 border-secondary inline-block px-8 pb-2 mb-4">
                {name}
              </p>
              <p className="text-gray-600">Has pledged to drive safe and distraction-free.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}