import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ComparisonTable() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold tracking-wider text-sm uppercase">The Difference</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif text-primary">
            Us vs. The Rest
          </h2>
          <p className="text-muted-foreground mt-4">
            Not all law firms are created equal. See why we are the choice for serious injury cases.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-4 gap-4 mb-4 px-4">
              <div className="col-span-1"></div>
              <div className="col-span-1 text-center">
                <div className="bg-primary text-white py-4 rounded-t-lg font-bold text-xl shadow-lg relative top-2">
                  Car Injury Law
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Best Choice
                  </div>
                </div>
              </div>
              <div className="col-span-1 text-center py-4 font-bold text-gray-600">
                General Attorney
              </div>
              <div className="col-span-1 text-center py-4 font-bold text-gray-600">
                Insurance Adjuster
              </div>
            </div>

            <div className="space-y-2">
              {[
                { feature: "Available 24/7/365", us: true, general: false, insurance: false },
                { feature: "No Win, No Fee Guarantee", us: true, general: true, insurance: false },
                { feature: "Exclusive Focus on Injury Law", us: true, general: false, insurance: false },
                { feature: "Willing to go to Trial", us: true, general: "Rarely", insurance: false },
                { feature: "Advances Case Costs", us: true, general: "Sometimes", insurance: false },
                { feature: "Direct Attorney Access", us: true, general: false, insurance: false },
                { feature: "Works For YOUR Best Interest", us: true, general: true, insurance: false },
              ].map((row, i) => (
                <Card key={i} className={`border-none ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-4 items-center">
                      <div className="col-span-1 p-4 font-medium text-gray-700 pl-6">
                        {row.feature}
                      </div>
                      
                      {/* Us */}
                      <div className="col-span-1 p-4 flex justify-center bg-blue-50/50 border-x border-blue-100">
                        <div className="bg-green-100 p-1 rounded-full">
                          <Check className="h-6 w-6 text-green-600" />
                        </div>
                      </div>

                      {/* General */}
                      <div className="col-span-1 p-4 flex justify-center text-gray-500 font-medium">
                        {row.general === true ? (
                          <Check className="h-5 w-5 text-gray-400" />
                        ) : row.general === false ? (
                          <X className="h-5 w-5 text-red-300" />
                        ) : (
                          row.general
                        )}
                      </div>

                      {/* Insurance */}
                      <div className="col-span-1 p-4 flex justify-center text-gray-500">
                        {row.insurance === true ? (
                          <Check className="h-5 w-5 text-gray-400" />
                        ) : (
                          <X className="h-5 w-5 text-red-400" />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}