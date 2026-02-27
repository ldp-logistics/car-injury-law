import { Link } from "wouter";
import { Shield, BadgeDollarSign, Clock, Scale, MapPin, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BadgeDollarSign,
    title: "No Win, No Fee",
    description: "We work on a contingency fee basis. You don't pay a dime unless we win your case."
  },
  {
    icon: Clock,
    title: "Available 24/7",
    description: "Accidents happen at all hours. Our legal team is standing by to take your call anytime."
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Our network has recovered millions of dollars in settlements and verdicts for our clients."
  },
  {
    icon: MapPin,
    title: "We Find The Best",
    description: "We vet attorneys across the country to ensure you get the strongest representation in your state."
  }
];

export function FeaturesSection() {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Car <Link href="/practice-areas/personal-injury" className="text-primary hover:underline font-semibold">Injury</Link> Law?</h2>
          <p className="text-lg text-muted-foreground">
            When you've been injured, you need a team that treats you like family and fights for you like a warrior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}