import { Link } from "wouter";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Calculator, RefreshCw } from "lucide-react";

export function CalculatorSection() {
  const [medicalBills, setMedicalBills] = useState([0]);
  const [lostWages, setLostWages] = useState([0]);
  const [severity, setSeverity] = useState([1]);
  const [estimatedValue, setEstimatedValue] = useState<number | null>(null);

  const calculate = () => {
    // Simple mock formula: (Medical + Wages) * (1 + (Severity * 0.5))
    const base = medicalBills[0] + lostWages[0];
    const multiplier = 1.5 + (severity[0] * 0.4); 
    setEstimatedValue(Math.round(base * multiplier));
  };

  const reset = () => {
    setMedicalBills([0]);
    setLostWages([0]);
    setSeverity([1]);
    setEstimatedValue(null);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
             <span className="text-secondary font-bold tracking-wider text-sm uppercase">Free Tool</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 font-serif">
              Injury Settlement Calculator
            </h2>
            <p className="text-muted-foreground mt-4">
              Estimate the potential value of your case in seconds. Note: This is an estimate, not a guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-primary text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calculator className="h-5 w-5 text-secondary" />
                  Case Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <label id="medical-bills-label" className="font-bold text-sm text-gray-600">Medical Expenses</label>
                    <span className="font-bold text-primary">{formatCurrency(medicalBills[0])}</span>
                  </div>
                  <Slider 
                    aria-labelledby="medical-bills-label"
                    value={medicalBills} 
                    onValueChange={setMedicalBills} 
                    max={100000} 
                    step={1000} 
                    className="cursor-pointer"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <label id="lost-wages-label" className="font-bold text-sm text-gray-600">Lost Wages</label>
                    <span className="font-bold text-primary">{formatCurrency(lostWages[0])}</span>
                  </div>
                  <Slider 
                    aria-labelledby="lost-wages-label"
                    value={lostWages} 
                    onValueChange={setLostWages} 
                    max={50000} 
                    step={500} 
                    className="cursor-pointer"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <label id="severity-label" className="font-bold text-sm text-gray-600">Injury Severity (1-10)</label>
                    <span className="font-bold text-primary">{severity[0]}</span>
                  </div>
                  <Slider 
                    aria-labelledby="severity-label"
                    value={severity} 
                    onValueChange={setSeverity} 
                    min={1}
                    max={10} 
                    step={1} 
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 px-1">
                    <span>Minor</span>
                    <span>Severe</span>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <Button onClick={calculate} className="flex-1 bg-secondary hover:bg-secondary/90 text-primary font-bold h-12 text-lg">
                    Calculate Value
                  </Button>
                  <Button onClick={reset} variant="outline" size="icon" className="h-12 w-12">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-slate-900 text-white h-full flex flex-col justify-center overflow-hidden relative">
              {/* Background effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
              
              <CardContent className="p-8 text-center relative z-10">
                <h3 className="text-xl font-medium text-gray-300 mb-2">Estimated Case Value</h3>
                
                {estimatedValue !== null ? (
                  <div className="animate-in zoom-in duration-500">
                    <div className="text-5xl md:text-6xl font-bold text-secondary font-serif mb-2 tracking-tight">
                      {formatCurrency(estimatedValue)}
                    </div>
                    <p className="text-sm text-gray-400 max-w-xs mx-auto mt-6">
                      *This is a preliminary estimate based on your inputs. Actual <Link href="/case-results" className="text-black hover:underline font-semibold">settlement</Link> amounts can vary significantly.
                    </p>
                    <Button className="mt-8 bg-white text-primary hover:bg-gray-100 font-bold w-full">
                      Get Official Evaluation
                    </Button>
                  </div>
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center opacity-50">
                    <DollarSign className="h-24 w-24 text-gray-700 mb-4" />
                    <p className="text-lg">Enter your details to see estimate</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}