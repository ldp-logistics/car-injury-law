import { Link } from "wouter";
import { useState } from "react";
import { FileText, CheckSquare, Download, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CrashKitModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-100 py-12 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 bg-blue-100 p-6 rounded-full">
              <FileText className="h-12 w-12 text-blue-600" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-primary mb-2">Free <Link href="/practice-areas/car-accident" className="text-primary hover:underline font-semibold">Car Accident</Link> Checklist</h3>
              <p className="text-muted-foreground">
                Don't know what to do after a crash? Download our printable step-by-step guide to keep in your glovebox. It could save your case.
              </p>
            </div>
            <Button onClick={() => setOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-8 text-lg shadow-lg">
              <Download className="mr-2 h-5 w-5" /> Download PDF
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <CheckSquare className="h-6 w-6 text-blue-600" />
              Get Your Free Crash Kit
            </DialogTitle>
            <DialogDescription>
              Enter your email to receive the printable PDF checklist instantly.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email-kit">Email Address</Label>
              <Input id="email-kit" placeholder="you@example.com" />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 font-bold text-lg h-12" onClick={() => setOpen(false)}>
              Send Me The Checklist
            </Button>
            <p className="text-xs text-center text-gray-400">
              We respect your privacy. No spam.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}