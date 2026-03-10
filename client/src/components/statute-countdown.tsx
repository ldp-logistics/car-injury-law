import { useState, useEffect } from "react";
import { Timer, AlertCircle } from "lucide-react";

interface StatuteCountdownProps {
  statuteYears: number;
  stateName: string;
}

export function StatuteCountdown({ statuteYears, stateName }: StatuteCountdownProps) {
  // Mock a deadline relative to "today" to create urgency
  // In a real app, this might calculate from an input date, but for a landing page
  // we want to show the general strictness of the deadline.
  
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
      <div className="flex items-start gap-4">
        <div className="bg-red-500/20 p-3 rounded-full animate-pulse">
          <Timer className="h-6 w-6 text-red-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold font-serif mb-1 flex items-center gap-2">
            Statute of Limitations Warning
            <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-sans">Strict Deadline</span>
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            In {stateName}, you generally have <strong className="text-white underline decoration-red-500/50">{statuteYears} years</strong> from the date of the accident to file a lawsuit. Evidence disappears quickly.
          </p>
          
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-white/5 rounded p-2">
              <span className="block text-2xl font-bold text-secondary">0</span>
              <span className="text-[10px] text-slate-400 uppercase">Extensions</span>
            </div>
            <div className="bg-white/5 rounded p-2">
              <span className="block text-2xl font-bold text-secondary">100%</span>
              <span className="text-[10px] text-slate-400 uppercase">Strict</span>
            </div>
            <div className="bg-white/5 rounded p-2">
              <span className="block text-2xl font-bold text-secondary">24/7</span>
              <span className="text-[10px] text-slate-400 uppercase">Help</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}