import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import handshakeImg from "@assets/generated_images/Professional_legal_consultation_hand_shake_d72d6224.png";

const testimonials = [
  {
    quote: "They fought for me when the insurance company tried to offer me pennies. I ended up with a settlement 10x what they originally offered. I can't thank them enough.",
    author: "Sarah M.",
    location: "California",
    settlement: "$450,000"
  },
  {
    quote: "After my truck accident, I was overwhelmed with medical bills. The team at Car Injury Law handled everything. They were professional, compassionate, and tough.",
    author: "Michael R.",
    location: "Texas",
    settlement: "$1.2 Million"
  },
  {
    quote: "I didn't have to pay a single dollar upfront. They covered all the costs of the lawsuit and won my case. Highly recommended for anyone injured in a crash.",
    author: "David L.",
    location: "Florida",
    settlement: "$850,000"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded bg-secondary/20 text-secondary font-bold text-sm mb-4">
              REAL CLIENT STORIES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
              We Don't Just Make Promises. <br/> We Deliver Results.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our track record speaks for itself. We have helped thousands of injury victims get their lives back on track.
            </p>
            
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video mb-8 md:mb-0">
              <img 
                src={handshakeImg} 
                srcSet={`${handshakeImg} 400w, ${handshakeImg} 800w, ${handshakeImg} 1200w`}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Client Meeting" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width="800"
                height="450"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-bold text-xl">"They treated me like family."</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Carousel className="w-full max-w-md mx-auto md:max-w-full">
              <CarouselContent>
                {testimonials.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="bg-white border-none shadow-lg">
                        <CardContent className="p-8">
                          <div className="flex gap-1 text-secondary mb-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                          </div>
                          <blockquote className="text-xl text-primary font-medium italic mb-6 leading-relaxed">
                            "{item.quote}"
                          </blockquote>
                          <div className="flex justify-between items-end border-t pt-4">
                            <div>
                              <p className="font-bold text-primary">{item.author}</p>
                              <p className="text-sm text-muted-foreground">{item.location}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-muted-foreground uppercase font-bold">Settlement</p>
                              <p className="text-2xl font-bold text-green-600">{item.settlement}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}