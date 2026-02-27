import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { SeoHead } from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Shield, 
  Scale, 
  Clock, 
  MapPin, 
  User,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  HeadphonesIcon,
  Video,
  Users,
  Footprints,
  Car,
  Eye,
  FileSearch,
  MessageSquare,
  Activity
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { LeadForm } from "@/components/lead-form";
import { STATE_DATA } from "@/data/state-data";

export default function PedestrianInjuryPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    caseDetails: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/thank-you";
  };

  const currentDate = new Date().toISOString();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoHead
        title="Pedestrian Injury Lawyer | Crosswalk Accident Claims | Car Injury Law"
        description="Hit by a vehicle while walking or jogging? Our pedestrian injury lawyers fight for your rights. We prove driver negligence and secure maximum compensation. Free 24/7 consultation."
        lastUpdated={currentDate}
        canonicalUrl="https://www.carinjurylaw.com/practice-areas/pedestrian-injury"
        schema={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Car Injury Law",
          "description": "Expert pedestrian injury lawyers fighting for victims of crosswalk and sidewalk accidents",
          "url": "https://www.carinjurylaw.com/practice-areas/pedestrian-injury",
          "telephone": "1-888-669-5559",
          "priceRange": "Contingency Fee (No Win No Fee)",
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "serviceType": "Pedestrian Injury Lawyer",
          "knowsAbout": [
            "Pedestrian Accident Claims",
            "Crosswalk Safety Laws",
            "Right-of-Way Violations",
            "Driver Negligence",
            "Urban Accident Cases"
          ]
        }}
      />

      <NavBar />

      <main className="flex-1">
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
            <User className="w-full h-full" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
                  Protecting Those On Foot
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif leading-tight" data-testid="hero-heading">
                  <Link href="/practice-areas/pedestrian-injury" className="text-primary hover:underline font-semibold">Pedestrian Injury</Link> Lawyers
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  When drivers fail to yield, run red lights, or drive distracted, pedestrians pay 
                  the price with devastating injuries. We hold negligent drivers accountable and 
                  fight for the full <Link href="/settlement-calculator" className="text-primary hover:underline font-semibold">compensation</Link> you deserve.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-20"
              >
                <LeadForm />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-8 w-8 text-secondary" />
                  <span className="text-secondary font-bold tracking-wider text-sm uppercase">Legal Expertise</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-8" data-testid="heading-expertise">
                  Experienced Pedestrian Injury Lawyers
                </h2>
              </motion.div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Pedestrians have the right of way in designated areas, but too many drivers ignore 
                  these laws. Whether you were struck in a crosswalk, parking lot, or sidewalk, 
                  <Link href="/about" className="text-primary hover:underline font-semibold">our attorneys</Link> understand the complex laws that protect pedestrians and know how 
                  to prove driver <Link href="/practice-areas/personal-injury" className="text-primary hover:underline font-semibold">negligence</Link>.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-10">
                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <Footprints className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">Right-of-Way Laws</h3>
                      <p className="text-muted-foreground text-sm">
                        We analyze traffic laws specific to your location to prove the driver 
                        violated your right of way at crosswalks, intersections, and pedestrian zones.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <AlertTriangle className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">Crosswalk Safety</h3>
                      <p className="text-muted-foreground text-sm">
                        Drivers must yield to pedestrians in crosswalks. We investigate signal 
                        timing, visibility conditions, and driver behavior to build your case.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <Car className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">Urban Driver Negligence</h3>
                      <p className="text-muted-foreground text-sm">
                        Distracted driving, speeding in school zones, and failure to check for 
                        pedestrians are common causes. We prove these dangerous behaviors.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-lg leading-relaxed">
                  Urban areas present unique dangers for pedestrians—congested streets, distracted 
                  drivers, and poor visibility. Our attorneys specialize in these cases and know 
                  how to navigate the complexities of city traffic law.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                  <span className="text-secondary font-bold tracking-wider text-sm uppercase"><Link href="/vs-insurance" className="text-primary hover:underline font-semibold">Insurance</Link> Coverage</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary" data-testid="heading-insurance">
                  Pedestrian Accident Insurance Coverage
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Even though you weren't in a vehicle, you can still file a claim against the 
                  driver's auto insurance policy. We help you understand and maximize all available coverage.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-white">
                    <CardContent className="p-8">
                      <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                        <Car className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">Driver's Auto Policy Claims</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        When a driver hits you while you're walking, jogging, or crossing the street, 
                        their auto liability insurance covers your injuries. We file claims against 
                        their bodily injury liability coverage to compensate you for:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Emergency room and hospital bills
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Surgery and rehabilitation costs
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Lost wages during recovery
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Pain and suffering damages
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-white border-2 border-secondary">
                    <CardContent className="p-8">
                      <div className="h-16 w-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                        <Shield className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">Additional Coverage Options</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        If the driver is uninsured or underinsured, or if you have your own auto 
                        policy, additional coverage may be available. We explore every option to 
                        maximize your compensation:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Your own uninsured motorist coverage
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          MedPay from your auto policy
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Health insurance coordination
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Property owner liability (if applicable)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FileSearch className="h-8 w-8 text-secondary" />
                  <span className="text-secondary font-bold tracking-wider text-sm uppercase">Our Process</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-8" data-testid="heading-how-we-help">
                  How We Can Help Your Case
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full bg-gradient-to-br from-primary to-slate-800 text-white">
                    <CardContent className="p-8">
                      <Video className="h-12 w-12 text-secondary mb-6" />
                      <h3 className="text-2xl font-bold mb-4">CCTV & Dashcam Evidence</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Video evidence is often the key to winning pedestrian cases. We act quickly 
                        to gather footage from traffic cameras, business security systems, and 
                        dashcams before it's deleted or overwritten.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>Traffic camera footage requests</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>Nearby business CCTV acquisition</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>Dashcam and bodycam evidence</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full bg-gradient-to-br from-secondary/90 to-amber-600 text-primary">
                    <CardContent className="p-8">
                      <MessageSquare className="h-12 w-12 text-primary mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Witness Interviews</h3>
                      <p className="text-primary/80 leading-relaxed mb-6">
                        Eyewitnesses can confirm that the driver was distracted, speeding, or ran 
                        a red light. Our investigators locate and interview witnesses while their 
                        memories are fresh to build compelling testimony.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Immediate witness identification</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Recorded witness statements</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Expert testimony coordination</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Driver distraction evidence</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <span className="text-secondary font-bold tracking-wider text-sm uppercase">Our Advantage</span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif mt-4" data-testid="heading-why-choose-us">
                  Why Hire Car Injury Law
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                  Pedestrian injuries are often severe—broken bones, traumatic brain injuries, 
                  and spinal cord damage. We secure maximum compensation for these life-changing injuries.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="h-20 w-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Activity className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Maximum Compensation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Pedestrian accidents often result in catastrophic injuries. We fight 
                    aggressively to secure compensation that covers lifetime medical care, 
                    lost earning capacity, and pain and suffering.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="h-20 w-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Nationwide Coverage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Whether your accident occurred in a busy city intersection or a suburban 
                    neighborhood, our nationwide network ensures you have experienced local 
                    representation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="h-20 w-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">No Upfront Fees</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We work on a contingency fee basis—you pay nothing unless we win. This 
                    allows you to focus on healing while we focus on fighting for your rights.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 p-8 bg-white/5 rounded-2xl border border-white/10 text-center"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Clock className="h-8 w-8 text-secondary" />
                  <h3 className="text-xl font-bold">Free 24/7 Consultation</h3>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  Pedestrian accidents are traumatic and overwhelming. Our compassionate team 
                  is available around the clock to answer your questions, explain your options, 
                  and start building your case right away.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact-form" className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
              >
                <span className="text-secondary font-bold tracking-wider text-sm uppercase">Get Started Today</span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mt-4">
                  Free Case Evaluation
                </h2>
                <p className="text-muted-foreground mt-4">
                  Fill out the form below and one of our pedestrian injury attorneys will 
                  contact you within 24 hours.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="shadow-2xl border-0">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-semibold text-primary">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="mt-2 h-12"
                          data-testid="input-name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-sm font-semibold text-primary">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="mt-2 h-12"
                          data-testid="input-phone"
                        />
                      </div>

                      <div>
                        <Label htmlFor="caseDetails" className="text-sm font-semibold text-primary">
                          Case Details *
                        </Label>
                        <Textarea
                          id="caseDetails"
                          placeholder="Please describe your pedestrian accident and injuries..."
                          value={formData.caseDetails}
                          onChange={(e) => setFormData({ ...formData, caseDetails: e.target.value })}
                          required
                          className="mt-2 min-h-32 resize-none"
                          data-testid="textarea-case-details"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg py-6"
                        data-testid="button-submit-form"
                      >
                        Get Your Free Consultation
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        By submitting this form, you agree to our{" "}
                        <Link href="/privacy" className="underline">Privacy Policy</Link> and{" "}
                        <Link href="/terms" className="underline">Terms of Service</Link>.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-2">Or call us directly:</p>
                <a 
                  href="tel:1-888-669-5559" 
                  className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
                  data-testid="link-phone-number"
                >
                  1-888-669-5559
                </a>
                <p className="text-sm text-muted-foreground mt-1">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold font-serif text-primary mb-8 text-center">
              Pedestrian Injury Lawyers Serving All 50 States
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Object.values(STATE_DATA).map((state) => (
                <Link 
                  key={state.slug} 
                  href={`/pedestrian-injury-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`}
                  className="text-sm text-muted-foreground hover:text-secondary hover:underline transition-colors"
                >
                  Pedestrian Injury Lawyers in {state.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
