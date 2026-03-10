import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Check } from "lucide-react";

const steps = [
  { title: "The Accident", desc: "Immediate medical attention & police report.", time: "Day 1" },
  { title: "Investigation", desc: "We gather evidence, witness statements, and cam footage.", time: "Week 1-2" },
  { title: "Treatment", desc: "You focus on healing. We handle the bills.", time: "Months 1-6" },
  { title: "Demand Package", desc: "We calculate total damages and send a demand letter.", time: "Month 6+" },
  { title: "Negotiation", desc: "We fight for maximum value. Most cases settle here.", time: "Month 7+" },
  { title: "Litigation", desc: "If they lowball, we file a lawsuit and go to court.", time: "As Needed" },
  { title: "Settlement", desc: "You receive your check tax-free.", time: "Victory" },
];

export function CaseTimeline() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-10">
           <span className="text-secondary font-bold tracking-wider text-sm uppercase">Lifecycle of a Case</span>
          <h3 className="text-3xl font-bold font-serif text-primary">What To Expect</h3>
        </div>
        
        <ScrollArea className="w-full whitespace-nowrap rounded-xl border bg-white p-8 shadow-sm">
          <div className="flex w-max space-x-8 p-4">
            {steps.map((step, i) => (
              <div key={i} className="w-[250px] relative group">
                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div className="absolute top-4 left-full w-8 h-0.5 bg-gray-200 -ml-2" />
                )}
                
                <div className="flex flex-col gap-4">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold border-2 z-10 ${i === 6 ? 'bg-secondary text-primary border-secondary' : 'bg-white text-gray-400 border-gray-200 group-hover:border-primary group-hover:text-primary transition-colors'}`}>
                    {i + 1}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">{step.time}</span>
                    <h4 className="font-bold text-lg text-primary mt-1 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-500 whitespace-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}