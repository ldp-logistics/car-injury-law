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
  Bus,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  HeadphonesIcon,
  FileText,
  Users,
  Building,
  Gavel,
  Calendar,
  FileWarning,
  Landmark,
  ScrollText
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { LeadForm } from "@/components/lead-form";
import { STATE_DATA } from "@/data/state-data";

export default function BusTransitInjuryPage() {
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
        title="Bus Accident Lawyer | Public Transit Claims | Car Injury Law"
        description="Injured on a bus or public transit? Our experienced bus accident lawyers navigate government immunity laws and fight for your compensation. Free 24/7 consultation."
        lastUpdated={currentDate}
        canonicalUrl="https://www.carinjurylaw.com/practice-areas/bus-transit-injury"
        schema={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Car Injury Law",
          "description": "Expert bus accident lawyers handling public transit injury claims against government agencies and private carriers",
          "url": "https://www.carinjurylaw.com/practice-areas/bus-transit-injury",
          "telephone": "1-888-669-5559",
          "priceRange": "Contingency Fee (No Win No Fee)",
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "serviceType": "Bus Accident Lawyer",
          "knowsAbout": [
            "Bus Accident Claims",
            "Common Carrier Liability",
            "Government Tort Claims",
            "Transit Authority Lawsuits",
            "Notice of Claim Requirements"
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
            <Bus className="w-full h-full" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
                  Fighting Government Bureaucracy
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif leading-tight" data-testid="hero-heading">
                  Bus & Public Transit Injury Lawyers
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  When public buses, subways, or trains cause injuries, victims face complex legal 
                  battles against government agencies. We cut through the red tape and hold transit 
                  authorities accountable for passenger safety.
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
                  Experienced Bus Accident Lawyers
                </h2>
              </motion.div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Public transit systems and private bus companies are classified as "common carriers" 
                  under the law. This designation means they owe passengers the <strong>highest duty 
                  of care</strong>—a legal standard that works in your favor when negligence causes injuries.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-10">
                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <ScrollText className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">Common Carrier Laws</h3>
                      <p className="text-muted-foreground text-sm">
                        Buses and transit systems must exercise the highest degree of care for 
                        passenger safety. We use this elevated legal standard to prove negligence.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <Landmark className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">Transit Authority Responsibility</h3>
                      <p className="text-muted-foreground text-sm">
                        Government-run transit agencies have a legal duty to maintain safe vehicles, 
                        train drivers properly, and protect passengers from foreseeable harm.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <Users className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">Passenger Safety Standards</h3>
                      <p className="text-muted-foreground text-sm">
                        From sudden stops to driver negligence, we investigate how the transit 
                        system failed its duty to keep you safe during your journey.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-lg leading-relaxed">
                  Whether you were injured on a city bus, school bus, charter bus, subway, light 
                  rail, or commuter train, we understand the unique legal frameworks that govern 
                  these cases and how to maximize your recovery.
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
                  <span className="text-secondary font-bold tracking-wider text-sm uppercase">Insurance & Liability</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary" data-testid="heading-insurance">
                  Transit Liability and Coverage
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Suing government agencies requires navigating special rules and strict deadlines. 
                  We ensure your claim is filed correctly and on time.
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
                        <Building className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">Suing Government Agencies</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Most public transit systems are operated by government entities, which have 
                        special legal protections. However, these protections are not absolute. We 
                        know how to overcome "sovereign immunity" defenses and hold them accountable.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Federal Transit Administration regulations
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          State tort claims act procedures
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Municipal liability exceptions
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
                        <Calendar className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">Notice of Claim Deadlines</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Claims against government transit agencies require filing a formal "Notice 
                        of Claim" within strict deadlines—often as short as <strong>30 to 90 days</strong>. 
                        Missing this deadline can permanently bar your case.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          State-specific deadline requirements
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          Formal notice content requirements
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          Proper agency identification
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          We file within 48 hours of retention
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
                  <FileText className="h-8 w-8 text-secondary" />
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
                      <FileWarning className="h-12 w-12 text-secondary mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Cutting Through Government Red Tape</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Government agencies rely on procedural barriers to discourage claims. We 
                        navigate sovereign immunity laws, special pleading requirements, and 
                        bureaucratic obstacles to ensure your case moves forward.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>Proper agency identification</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>Immunity waiver analysis</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>Administrative claim processing</span>
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
                      <Gavel className="h-12 w-12 text-primary mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Pursuing All Liable Parties</h3>
                      <p className="text-primary/80 leading-relaxed mb-6">
                        We investigate whether private bus companies, city transit authorities, 
                        maintenance contractors, or vehicle manufacturers share responsibility. 
                        Multiple defendants mean more insurance coverage for your injuries.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Private charter bus companies</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Municipal transit authorities</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Vehicle maintenance companies</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Bus/train manufacturers</span>
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
                  We have specific experience in municipal lawsuits and know how to successfully 
                  pursue claims against government transit agencies.
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
                    <Landmark className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Municipal Lawsuit Experience</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Suing government agencies requires specialized knowledge. We've successfully 
                    navigated tort claims acts, sovereign immunity defenses, and administrative 
                    procedures across the country.
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
                    Transit laws vary by state and municipality. Our nationwide network ensures 
                    you have attorneys who understand the specific rules governing your local 
                    transit authority.
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
                    We work on a contingency fee basis—you pay nothing unless we win. This allows 
                    us to take on powerful government agencies without putting financial burden 
                    on you.
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
                  Time is critical in transit injury cases due to short notice of claim deadlines. 
                  Contact us immediately after your injury so we can protect your rights and 
                  meet all filing requirements.
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
                  Fill out the form below and one of our <Link href="/practice-areas/bus-transit-injury" className="text-black hover:underline font-semibold">bus accident</Link> attorneys will 
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
                          placeholder="Please describe your bus or transit accident and injuries..."
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
              Bus Injury Lawyers Serving All 50 States
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Object.values(STATE_DATA).map((state) => (
                <Link 
                  key={state.slug} 
                  href={`/bus-accident-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`}
                  className="text-sm text-muted-foreground hover:text-secondary hover:underline transition-colors"
                >
                  Bus Injury Lawyers in {state.name}
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
