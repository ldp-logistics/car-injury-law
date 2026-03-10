import { useState, useRef } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import attorneyImg from "@assets/admani_1763525477578.jpg";

export function AttorneyAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  // In a real app, this would be an audio ref

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-primary text-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center gap-6">
          <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-secondary flex-shrink-0">
            <img src={attorneyImg} alt="Saad Admani" className="w-full h-full object-cover" loading="lazy" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <p className="text-secondary font-bold text-xs uppercase tracking-wider mb-1">A Personal Message</p>
            <h4 className="font-bold text-lg md:text-xl font-serif">"Why I became a lawyer..."</h4>
            <p className="text-sm text-gray-300 mt-1">Listen to Saad's story (1:30)</p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <Button 
              size="icon" 
              className="rounded-full bg-secondary text-primary hover:bg-secondary/90 h-10 w-10 flex-shrink-0"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-1" />}
            </Button>
            
            {/* Mock Waveform */}
            <div className="flex items-center gap-1 h-8 flex-1 md:w-48">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1 bg-white/50 rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse' : ''}`}
                  style={{ 
                    height: `${Math.max(20, Math.random() * 100)}%`,
                    opacity: isPlaying ? 1 : 0.5
                  }}
                />
              ))}
            </div>
            <Volume2 className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}