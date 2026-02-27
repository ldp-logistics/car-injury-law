import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const topStates = [
    { name: "Florida", slug: "florida-car-accident-lawyer" },
    { name: "New Jersey", slug: "new-jersey-car-accident-lawyer" },
    { name: "New York", slug: "new-york-car-accident-lawyer" },
    { name: "Texas", slug: "texas-car-accident-lawyer" },
    { name: "California", slug: "california-car-accident-lawyer" }
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-lg mx-auto shadow-xl border-none">
        <CardContent className="pt-8 pb-8 px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-6 rounded-full">
              <AlertCircle className="h-12 w-12 text-destructive" />
            </div>
          </div>
          
          <h1 className="text-5xl font-black text-primary mb-2 font-serif">404</h1>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Page Not Found</h2>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Don't get lost in the legal system like you got lost on this website. If you've been injured, we can help guide you to the right attorney.
          </p>

          <div className="grid gap-3 mb-8">
            <Link href="/">
              <Button className="w-full bg-primary font-bold h-12 text-lg">
                <Home className="mr-2 h-5 w-5" /> Return Home
              </Button>
            </Link>
            
            <a href="tel:1-888-669-5559">
              <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10 font-bold h-12 text-lg">
                <Phone className="mr-2 h-5 w-5" /> Call 1-888-669-5559
              </Button>
            </a>
          </div>

          <div className="text-left">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-center">Popular Locations</p>
            <div className="grid grid-cols-2 gap-2">
              {topStates.map((state) => (
                <Link key={state.slug} href={`/${state.slug}`}>
                  <div className="flex items-center gap-2 p-2 rounded hover:bg-slate-100 text-sm font-medium text-gray-600 transition-colors cursor-pointer">
                    <MapPin className="h-3 w-3 text-secondary" />
                    {state.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}