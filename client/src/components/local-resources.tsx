import { Wrench, Car, Stethoscope, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function LocalResources() {
  const [zip, setZip] = useState("");

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-primary p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-2">Find Approved Resources Near You</h2>
            <p className="text-blue-100">Locate trusted body shops, rental partners, and medical clinics.</p>
          </div>
          
          <div className="p-8">
            <div className="flex gap-4 mb-8">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Enter your Zip Code" 
                  className="pl-10 h-12 text-lg"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  aria-label="Enter your Zip Code to find resources"
                />
              </div>
              <Button className="h-12 px-8 font-bold bg-secondary text-primary hover:bg-secondary/90">
                Search
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Wrench, title: "Body Shops", count: "12 Locations" },
                { icon: Car, title: "Rental Cars", count: "8 Partners" },
                { icon: Stethoscope, title: "Medical Clinics", count: "24 Providers" },
              ].map((item, i) => (
                <div key={i} className="border border-gray-100 rounded-xl p-6 text-center hover:border-secondary/50 transition-colors cursor-pointer group">
                  <div className="h-12 w-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/10 transition-colors">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-secondary transition-colors" />
                  </div>
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}