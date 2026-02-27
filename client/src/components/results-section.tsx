import { Trophy, ArrowUpRight, Car, Truck, Bike, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "wouter";

const results = [
  {
    amount: 5250000,
    type: "Truck Accident",
    desc: "Commercial semi-truck collision resulting in severe spinal injuries.",
    icon: Truck
  },
  {
    amount: 2100000,
    type: "Motorcycle Crash",
    desc: "Intersection accident caused by distracted driver.",
    icon: Bike
  },
  {
    amount: 985000,
    type: "Car Accident",
    desc: "Rear-end collision resulting in traumatic brain injury.",
    icon: Car
  },
  {
    amount: 1850000,
    type: "Pedestrian Injury",
    desc: "Pedestrian struck by delivery vehicle in crosswalk.",
    icon: User
  }
];

function CountUp({ end, prefix = "" }: { end: number, prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView && ref.current) {
      let startTimestamp: number | null = null;
      const duration = 2000;
      const element = ref.current;
      const format = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Ease-out expo function for smoother animation
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(easeOut * end);

        // Direct DOM manipulation to avoid React re-renders
        element.textContent = `${prefix}${format.format(currentCount)}`;

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }, [isInView, end, prefix]);

  return (
    <span ref={ref} className="tabular-nums block">
      {prefix}0
    </span>
  );
}

export function ResultsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-secondary font-bold tracking-wider text-sm uppercase mb-4">
              <Trophy className="h-4 w-4" />
              Proven Track Record
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif leading-tight">
              Recent Victories
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              We have recovered over $500 Million for our clients. While every case is unique, our dedication to winning is constant.
            </p>
          </div>
          <Link href="/case-results">
            <button className="hidden md:flex items-center gap-2 text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors mt-6 md:mt-0">
              VIEW ALL CASE RESULTS
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <Card key={index} className="bg-muted/20 border-none hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-default">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="h-12 w-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <result.icon className="h-6 w-6 text-secondary" />
                </div>
                <div className="mt-auto">
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">{result.type}</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif overflow-hidden text-ellipsis">
                    <CountUp end={result.amount} prefix="$" />
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{result.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/case-results">
            <button className="flex items-center justify-center w-full gap-2 text-primary font-bold border border-gray-200 rounded-lg py-4 hover:bg-gray-50 transition-colors">
              VIEW ALL CASE RESULTS
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}