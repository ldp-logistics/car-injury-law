import { CloudRain, AlertTriangle, X } from "lucide-react";
import { useState } from "react";

export function WeatherAlert() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-blue-900 text-white px-4 py-2 relative flex items-center justify-center gap-2 text-xs md:text-sm font-medium">
      <CloudRain className="h-4 w-4 text-blue-300" />
      <span><strong className="text-blue-200">Driver Alert:</strong> Heavy rain reported in your area. Accident risk is <strong>High</strong> today. Drive safe!</span>
      <button onClick={() => setVisible(false)} className="absolute right-2 md:right-4 hover:text-blue-200">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}