import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function EligibilityQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  
  const questions = [
    {
      q: "When did the accident happen?",
      options: ["Last 30 Days", "Last 6 Months", "Last 2 Years", "Over 2 Years Ago"]
    },
    {
      q: "Did you receive medical treatment?",
      options: ["Yes, immediately", "Yes, later on", "No, not yet", "No, I wasn't injured"]
    },
    {
      q: "Who was at fault?",
      options: ["The other driver", "Not sure", "Shared fault", "I was at fault"]
    }
  ];

  const handleOptionClick = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Done
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
          Check Eligibility
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center font-serif text-2xl">
            {step === questions.length ? "Eligibility Result" : "Do You Have a Case?"}
          </DialogTitle>
        </DialogHeader>

        {step < questions.length ? (
          <div className="py-4 space-y-6">
            <Progress value={(step / questions.length) * 100} className="h-2" aria-label="Quiz progress" />
            
            <h3 className="text-lg font-bold text-center">{questions[step].q}</h3>
            
            <div className="grid gap-3">
              {questions[step].options.map((opt, i) => (
                <Button key={i} variant="outline" className="h-12 text-left justify-start" onClick={handleOptionClick}>
                  {opt}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-6 text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-2">You May Be Eligible</h3>
              <p className="text-gray-600">Based on your answers, you likely qualify for significant <Link href="/settlement-calculator" className="text-primary hover:underline font-semibold">compensation</Link>. We recommend a full case review.</p>
            </div>
            <Button className="w-full bg-secondary text-primary font-bold h-12 text-lg" onClick={() => document.getElementById("lead-form")?.scrollIntoView({behavior: 'smooth'})}>
              Start Free Case Review
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}