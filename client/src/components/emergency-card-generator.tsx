import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Contact, Smartphone, Download } from "lucide-react";

export function EmergencyCardGenerator() {
  const [data, setData] = useState({
    name: "",
    iceName: "",
    icePhone: "",
    bloodType: "",
    allergies: ""
  });
  const [generated, setGenerated] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start max-w-5xl mx-auto">
          <div className="flex-1">
            <span className="text-secondary font-bold tracking-wider text-sm uppercase">Preparedness</span>
            <h2 className="text-3xl font-bold font-serif text-primary mt-2 mb-4">
              Create Your Digital I.C.E. Card
            </h2>
            <p className="text-muted-foreground mb-8">
              In Case of Emergency (I.C.E.) cards save lives. Create a digital card to keep on your phone lock screen so first responders know who to call.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="your-name">Your Name</Label>
                  <Input id="your-name" placeholder="Jane Doe" onChange={e => setData({...data, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="blood-type">Blood Type</Label>
                  <Input id="blood-type" placeholder="O+" onChange={e => setData({...data, bloodType: e.target.value})} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="emergency-contact">Emergency Contact</Label>
                  <Input id="emergency-contact" placeholder="Mom / Spouse" onChange={e => setData({...data, iceName: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Contact Phone</Label>
                  <Input id="contact-phone" placeholder="(555) 123-4567" onChange={e => setData({...data, icePhone: e.target.value})} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="allergies-meds">Allergies / Meds</Label>
                <Input id="allergies-meds" placeholder="Penicillin, Insulin..." onChange={e => setData({...data, allergies: e.target.value})} />
              </div>
              <Button onClick={() => setGenerated(true)} className="w-full bg-primary font-bold h-12">
                Generate Card
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className={`w-[300px] h-[180px] rounded-xl shadow-2xl overflow-hidden relative transition-all duration-500 ${generated ? 'scale-100 opacity-100' : 'scale-95 opacity-50 blur-sm'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 text-white p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-black text-2xl uppercase italic tracking-tighter">EMERGENCY</h3>
                    <p className="text-xs font-bold opacity-80">MEDICAL INFO</p>
                  </div>
                  <Contact className="h-8 w-8 opacity-50" />
                </div>

                <div className="space-y-1 text-sm">
                  <p><span className="opacity-70 text-xs uppercase mr-2">Name:</span> <strong>{data.name || "YOUR NAME"}</strong></p>
                  <p><span className="opacity-70 text-xs uppercase mr-2">I.C.E:</span> <strong>{data.iceName || "CONTACT NAME"}</strong></p>
                  <p><span className="opacity-70 text-xs uppercase mr-2">Phone:</span> <strong>{data.icePhone || "PHONE NUMBER"}</strong></p>
                  <div className="flex gap-4 mt-2">
                     <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold">{data.bloodType || "TYPE"}</span>
                     <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold truncate max-w-[120px]">{data.allergies || "ALLERGIES"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}