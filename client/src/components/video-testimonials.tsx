import { Link } from "wouter";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";

const videos = [
  {
    id: 1,
    name: "James T.",
    case: "Rear-End Collision",
    settlement: "$250k",
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop" 
  },
  {
    id: 2,
    name: "Maria R.",
    case: "Uber Accident",
    settlement: "$1.1M",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop"
  },
  {
    id: 3,
    name: "Robert K.",
    case: "Hit & Run",
    settlement: "$85k",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop"
  }
];

export function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold tracking-wider text-sm uppercase">Client Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif">
            Hear From Our Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="relative group aspect-[9/16] md:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer bg-gray-800 shadow-2xl"
              onClick={() => setActiveVideo(video.id)}
            >
              <img 
                src={video.thumbnail} 
                alt={video.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                loading="lazy"
              />
              
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/50">
                  <Play className="h-8 w-8 text-white fill-white ml-1" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="font-bold text-lg">{video.name}</p>
                <p className="text-sm text-gray-300">{video.case}</p>
                <div className="mt-2 inline-block bg-green-600/90 px-3 py-1 rounded text-xs font-bold">
                  <Link href="/case-results" className="text-primary hover:underline font-semibold">Settlement</Link>: {video.settlement}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}