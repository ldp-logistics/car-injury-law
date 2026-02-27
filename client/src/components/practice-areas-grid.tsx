import { Car, Truck, Bike, User, Bus, HardHat, Stethoscope, AlertOctagon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const areas = [
  { icon: Car, title: "Car Accidents", desc: "Rear-ends, T-bones, and rollovers.", href: "/practice-areas/car-accident" },
  { icon: Truck, title: "Truck Accidents", desc: "18-wheelers and commercial vehicles.", href: "/practice-areas/truck-accident" },
  { icon: Bike, title: "Motorcycle Crashes", desc: "Lane splitting and visibility cases.", href: "/practice-areas/motorcycle-accident" },
  { icon: User, title: "Pedestrian Injury", desc: "Crosswalk and sidewalk negligence.", href: "/practice-areas/pedestrian-injury" },
  { icon: Bus, title: "Bus/Transit", desc: "Public transportation incidents.", href: "/practice-areas/bus-transit-injury" },
  { icon: HardHat, title: "Workplace Injury", desc: "Construction and industrial sites.", href: "/practice-areas/workplace-injury" },
  { icon: Stethoscope, title: "Medical Malpractice", desc: "Surgical errors and misdiagnosis.", href: "/practice-areas/medical-malpractice" },
  { icon: AlertOctagon, title: "Slip & Fall", desc: "Premises liability and negligence.", href: "/practice-areas/slip-and-fall" },
];

export function PracticeAreasGrid() {
  return (
    <section id="practice-areas" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold tracking-wider text-sm uppercase">What We Handle</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif text-primary">
            Comprehensive Injury Representation
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We focus exclusively on <Link href="/practice-areas/personal-injury" className="text-primary hover:underline font-semibold">personal injury</Link> law. This specialization allows us to win cases that general practitioners lose.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {areas.map((area, index) => {
            const cardContent = (
              <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200 cursor-pointer overflow-hidden h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full bg-white group-hover:bg-primary group-hover:text-white transition-colors">
                  <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/10">
                    <area.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{area.title}</h3>
                  <p className="text-xs text-muted-foreground group-hover:text-gray-300 leading-relaxed">
                    {area.desc}
                  </p>
                </CardContent>
              </Card>
            );

            return area.href ? (
              <Link key={index} href={area.href} data-testid={`link-practice-area-${index}`}>
                {cardContent}
              </Link>
            ) : (
              <div key={index}>{cardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}