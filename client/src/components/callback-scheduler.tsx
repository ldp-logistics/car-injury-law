import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function CallbackScheduler() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSchedule = () => {
    setIsOpen(false);
    toast({
      title: "Call Scheduled!",
      description: `We'll call you on ${date?.toLocaleDateString()} at ${time}.`,
    });
  };

  return (
    <section className="py-12 bg-blue-50 border-y border-blue-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="bg-white p-4 rounded-full shadow-sm hidden md:block">
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary">Can't talk right now?</h3>
            <p className="text-gray-600">Schedule a free consultation at a time that works for you.</p>
          </div>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-white text-primary border-2 border-primary hover:bg-gray-50 font-bold h-12 px-8 text-lg shadow-sm">
              <CalendarDays className="mr-2 h-5 w-5" /> Schedule Callback
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif text-primary">Pick a Time</DialogTitle>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div className="border rounded-lg p-4 flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md"
                  disabled={(date) => date < new Date()}
                />
              </div>
              <Select onValueChange={setTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Time Slot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00 AM">9:00 AM - 11:00 AM</SelectItem>
                  <SelectItem value="11:00 AM">11:00 AM - 1:00 PM</SelectItem>
                  <SelectItem value="1:00 PM">1:00 PM - 3:00 PM</SelectItem>
                  <SelectItem value="3:00 PM">3:00 PM - 5:00 PM</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleSchedule} className="w-full bg-secondary text-primary font-bold hover:bg-secondary/90">
                Confirm Appointment
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}