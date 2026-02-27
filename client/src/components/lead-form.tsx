import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, ChevronLeft, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export function LeadForm({ className }: { className?: string }) {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const [_, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    accidentType: "",
    injury: "",
    name: "",
    phone: "",
    email: "",
    description: ""
  });

  const totalSteps = 3;

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Split name into first and last
    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

    try {
      // Send data to Clio Grow Inbox Lead API
      await fetch("https://grow.clio.com/inbox_leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inbox_lead: {
            from_first: firstName,
            from_last: lastName,
            from_message: `${formData.accidentType} - ${formData.injury === "yes" ? "Injured" : "Not Injured/Unsure"} - ${formData.description}`,
            from_email: formData.email,
            from_phone: formData.phone,
            referring_url: window.location.href, // Use current page URL
            from_source: "Car Injury Law Website Form"
          },
          inbox_lead_token: "c82d63faf8f02e27e23e0061b99eebb5" // Replace with actual token
        })
      });
    } catch (error) {
      console.error("Error submitting lead to Clio:", error);
      // We continue to show success message regardless of API error to not block the user experience
      // In a real app, we might want to retry or log this securely
    }

    // Navigate to Thank You Page immediately
    setLocation("/thank-you");
  };

  return (
    <div className={`bg-white rounded-xl shadow-2xl overflow-hidden border-t-4 border-secondary relative z-10 ${className}`} role="form" aria-label="Free Case Evaluation Form">
      <div className="bg-slate-50 p-4 border-b border-gray-100 flex justify-between items-center">
        <div>
          <h2 className="font-bold text-primary text-lg">Free Case Evaluation</h2>
          <p className="text-xs text-muted-foreground">Check eligibility in 30 seconds</p>
        </div>
        <div className="flex items-center gap-1 text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded-full">
          <span className="relative flex h-2 w-2 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Accepting New Cases
        </div>
      </div>

      {/* Progress Bar */}
      <div 
        className="h-1 w-full bg-gray-100" 
        role="progressbar" 
        aria-label="Form completion progress"
        aria-valuenow={(step / totalSteps) * 100} 
        aria-valuemin={0} 
        aria-valuemax={100}
      >
        <div 
          className="h-full bg-secondary transition-all duration-300"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-2" role="group" aria-labelledby="accident-type-label">
                  <Label id="accident-type-label" className="text-base font-bold">What type of accident happened?</Label>
                  <RadioGroup onValueChange={(v) => setFormData({...formData, accidentType: v})} className="grid grid-cols-1 gap-2">
                    {["Car Accident", "Truck/Semi Accident", "Motorcycle Accident", "Pedestrian Injury", "Other"].map((type) => (
                      <div key={type} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50 cursor-pointer transition-colors [&:has(:checked)]:border-secondary [&:has(:checked)]:bg-secondary/5">
                        <RadioGroupItem value={type} id={type} />
                        <Label htmlFor={type} className="flex-1 cursor-pointer">{type}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <Button type="button" onClick={nextStep} className="w-full bg-primary h-12 text-lg mt-4">
                  Next Step <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-2" role="group" aria-labelledby="injury-label">
                  <Label id="injury-label" className="text-base font-bold">Were you injured?</Label>
                  <RadioGroup onValueChange={(v) => setFormData({...formData, injury: v})} className="grid grid-cols-1 gap-2">
                    <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50 cursor-pointer [&:has(:checked)]:border-secondary [&:has(:checked)]:bg-secondary/5">
                      <RadioGroupItem value="yes" id="yes-injury" />
                      <Label htmlFor="yes-injury" className="flex-1 cursor-pointer">Yes, I was injured</Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50 cursor-pointer [&:has(:checked)]:border-secondary [&:has(:checked)]:bg-secondary/5">
                      <RadioGroupItem value="no" id="no-injury" />
                      <Label htmlFor="no-injury" className="flex-1 cursor-pointer">No / Not Sure Yet</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base font-bold">Brief Description</Label>
                  <Textarea 
                    id="description"
                    placeholder="Tell us a little about what happened..." 
                    className="resize-none"
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    aria-label="Brief description of the accident"
                  />
                </div>

                <div className="flex gap-2 mt-4">
                  <Button type="button" variant="outline" onClick={prevStep} className="h-12 px-4" aria-label="Go back to previous step">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button type="button" onClick={nextStep} className="flex-1 bg-primary h-12 text-lg">
                    Last Step <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="bg-amber-50 border border-amber-200 p-3 rounded text-xs text-amber-800 flex items-start gap-2" role="alert">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>Urgent: Legal deadlines apply. We need to contact you ASAP to preserve your rights.</span>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    aria-required="true" 
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      placeholder="(555) 555-5555" 
                      required 
                      aria-required="true" 
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      placeholder="john@example.com" 
                      type="email" 
                      required 
                      aria-required="true" 
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button type="button" variant="outline" onClick={prevStep} className="h-12 px-4" aria-label="Go back">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button type="submit" className="flex-1 bg-destructive hover:bg-destructive/90 h-12 text-lg font-bold shadow-lg animate-pulse">
                    Get My Free Review
                  </Button>
                </div>
                <p className="text-[10px] text-muted-foreground text-center mt-2">
                  By clicking, you agree to our Terms. Your info is 100% secure.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}