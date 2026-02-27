import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gift, Send } from "lucide-react";

export function ReferralModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="hidden md:flex gap-2 border-dashed border-gray-300 text-gray-500 hover:text-primary hover:border-primary">
          <Gift className="h-4 w-4" /> Refer a Friend
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-secondary" />
            Referral Program
          </DialogTitle>
          <DialogDescription>
            Do you know someone who has been injured? Connect them with us. We treat every referral like family.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="friend-name">Friend's Name</Label>
            <Input id="friend-name" placeholder="Jane Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="friend-contact">Friend's Email or Phone</Label>
            <Input id="friend-contact" placeholder="Contact Info" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="referrer-name">Your Name (So we can thank you)</Label>
            <Input id="referrer-name" placeholder="Your Name" />
          </div>
          <Button className="w-full bg-primary font-bold" onClick={() => setOpen(false)}>
            <Send className="mr-2 h-4 w-4" /> Send Referral
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}