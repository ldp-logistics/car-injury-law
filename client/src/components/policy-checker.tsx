import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

export function PolicyChecker() {
  const [checked, setChecked] = useState<string[]>([]);

  const items = [
    "Bodily Injury Liability",
    "Property Damage Liability",
    "Uninsured Motorist (UM)",
    "Underinsured Motorist (UIM)",
    "Personal Injury Protection (PIP)",
    "Medical Payments (MedPay)"
  ];

  const toggle = (item: string) => {
    if (checked.includes(item)) {
      setChecked(checked.filter(i => i !== item));
    } else {
      setChecked([...checked, item]);
    }
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
             <span className="text-secondary font-bold tracking-wider text-sm uppercase">Protection Check</span>
            <h3 className="text-3xl font-bold font-serif text-primary">Are You Fully Covered?</h3>
            <p className="text-muted-foreground mt-2">
              Most drivers don't know what's in their policy until it's too late. Check your declarations page for these critical coverages.
            </p>
          </div>

          <Card className="bg-white shadow-lg border-t-4 border-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <ShieldAlert className="h-5 w-5 text-secondary" />
                Policy Coverage Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => (
                <div key={item} className="flex items-center space-x-3 p-3 rounded hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                  <Checkbox id={item} onCheckedChange={() => toggle(item)} />
                  <label
                    htmlFor={item}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer w-full"
                  >
                    {item}
                  </label>
                </div>
              ))}
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800 mb-4">
                  <strong>Tip:</strong> Uninsured Motorist (UM) coverage is the most important protection you can buy. It protects YOU if you are hit by a driver with no insurance.
                </div>
                <Button className="w-full font-bold">Get Free Policy Review</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}