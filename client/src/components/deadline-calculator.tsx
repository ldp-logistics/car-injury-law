import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Timer } from "lucide-react";

export function DeadlineCalculator() {
  const [date, setDate] = useState("");
  const [deadline, setDeadline] = useState<string | null>(null);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  const calculateDeadline = () => {
    if (!date) return;
    const accidentDate = new Date(date);
    // Mock 2 year statute for example
    const limitDate = new Date(accidentDate);
    limitDate.setFullYear(accidentDate.getFullYear() + 2);
    
    const today = new Date();
    const diffTime = Math.abs(limitDate.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    setDeadline(limitDate.toLocaleDateString());
    setDaysLeft(diffDays);
  };

  return (
    <section className="py-12 bg-amber-50 border-y border-amber-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-destructive font-bold mb-2">
              <AlertTriangle className="h-5 w-5" />
              <span className="uppercase tracking-wider text-sm">Statute of Limitations Checker</span>
            </div>
            <h3 className="text-2xl font-bold text-primary font-serif mb-2">
              When Does Your Right to Sue Expire?
            </h3>
            <p className="text-gray-700">
              Enter your accident date to see your estimated filing deadline. Don't let time run out.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100 w-full md:w-auto min-w-[300px]">
            {!daysLeft ? (
              <div className="space-y-4">
                <div>
                  <label htmlFor="accident-date" className="text-xs font-bold text-gray-500 mb-1 block">Accident Date</label>
                  <Input id="accident-date" type="date" onChange={(e) => setDate(e.target.value)} />
                </div>
                <Button onClick={calculateDeadline} disabled={!date} className="w-full font-bold bg-primary">
                  Check Deadline
                </Button>
              </div>
            ) : (
              <div className="text-center animate-in zoom-in">
                <p className="text-xs text-gray-500 uppercase font-bold">You Have Approximately</p>
                <div className="text-4xl font-black text-destructive my-2 flex items-center justify-center gap-2">
                  <Timer className="h-8 w-8" />
                  {daysLeft} Days
                </div>
                <p className="text-sm font-medium text-gray-800">Until {deadline}</p>
                <Button onClick={() => setDaysLeft(null)} variant="link" className="text-xs text-gray-400 mt-2">
                  Check Another Date
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}