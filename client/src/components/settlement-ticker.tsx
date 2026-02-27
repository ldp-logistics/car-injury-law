import { Link } from "wouter";
import { DollarSign } from "lucide-react";

export function SettlementTicker() {
  return (
    <div className="fixed bottom-20 md:bottom-8 left-4 md:left-8 z-30 hidden md:flex flex-col gap-2 pointer-events-none">
      <div className="bg-white/90 backdrop-blur border border-gray-200 shadow-lg rounded-lg p-3 animate-in slide-in-from-left duration-700 fade-in">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-full">
            <DollarSign className="h-4 w-4 text-green-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-bold">Just Settled</p>
            <p className="font-bold text-primary">$1,250,000 <span className="text-xs font-normal text-gray-400">- <Link href="/practice-areas/truck-accident" className="text-black hover:underline font-semibold">Truck Accident</Link></span></p>
          </div>
        </div>
      </div>
    </div>
  );
}