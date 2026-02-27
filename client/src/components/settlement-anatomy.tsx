import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { motion } from "framer-motion";

const data = [
  { name: "Medical Bills", value: 35, color: "#0F172A", desc: "Covers hospital stays, surgery, rehab, and future medical needs." },
  { name: "Pain & Suffering", value: 40, color: "#F59E0B", desc: "Compensation for physical pain, emotional distress, and loss of enjoyment." },
  { name: "Lost Wages", value: 15, color: "#3B82F6", desc: "Reimbursement for missed work and loss of future earning capacity." },
  { name: "Property Damage", value: 10, color: "#64748B", desc: "Repair or replacement of your vehicle and personal items." },
];

export function SettlementAnatomy() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-secondary font-bold tracking-wider text-sm uppercase">Educational</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 font-serif text-primary">
              Anatomy of a Settlement
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Understanding what you are entitled to is the first step to getting it. We pursue every single penny across these four key categories.
            </p>
            
            <div className="space-y-4">
              {data.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${activeIndex === index ? 'bg-slate-50 border-secondary shadow-md' : 'border-gray-100 hover:bg-gray-50'}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                    <h4 className="font-bold text-primary">{item.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 pl-7">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="h-[400px] relative bg-slate-50 rounded-2xl p-8 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={5}
                  dataKey="value"
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                      strokeWidth={activeIndex === index ? 4 : 0}
                      stroke={activeIndex === index ? "#fff" : "none"}
                      style={{ filter: activeIndex === index ? 'drop-shadow(0px 4px 6px rgba(0,0,0,0.2))' : 'none', transition: 'all 0.3s' }}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <p className="text-sm text-gray-400 font-bold uppercase">Your Claim</p>
                <p className="text-3xl font-serif font-bold text-primary">100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}