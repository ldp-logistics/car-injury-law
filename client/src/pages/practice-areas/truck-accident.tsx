import { SeoContentSection } from "@/components/seo-content-section";
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
  FileText,
  Truck,
  AlertTriangle,
  CheckCircle,
  Users,
  DollarSign,
  HeadphonesIcon,
  Gavel,
  FileSearch,
  Calculator,
  HardDrive,
  ClipboardList,
  Wrench,
  Building2
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { LeadForm } from "@/components/lead-form";
import { STATE_DATA } from "@/data/state-data";

export default function TruckAccidentPage() {
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
        title="Truck Accident Lawyer | Commercial Vehicle Claims | Car Injury Law"
        description="Injured in a truck accident? Our experienced truck accident lawyers understand FMCSA regulations and fight against large trucking corporations. Free 24/7 consultation."
        lastUpdated={currentDate}
        canonicalUrl="https://www.carinjurylaw.com/practice-areas/truck-accident"
        schema={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Car Injury Law",
          "description": "Expert truck accident lawyers fighting for victims against commercial trucking companies",
          "url": "https://www.carinjurylaw.com/practice-areas/truck-accident",
          "telephone": "1-888-669-5559",
          "priceRange": "Contingency Fee (No Win No Fee)",
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "serviceType": "Truck Accident Lawyer",
          "knowsAbout": [
            "FMCSA Regulations",
            "Commercial Vehicle Accidents",
            "Black Box Data Recovery",
            "Driver Fatigue Claims",
            "Trucking Company Liability"
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
            <Truck className="w-full h-full" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
                  Specialized Commercial Vehicle Litigation
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif leading-tight" data-testid="hero-heading">
                  Truck Accident Attorneys
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Trucking companies have rapid response teams to minimize their liability. You need
                  attorneys who understand federal regulations and know how to secure critical evidence
                  before it disappears. We fight the giants so you can focus on recovery.
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
                  Experienced Truck Accident Lawyers
                </h2>
              </motion.div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Truck accident cases are fundamentally different from car accidents. Commercial trucks
                  are governed by the <strong>Federal Motor Carrier Safety Administration (FMCSA)</strong>,
                  which imposes strict regulations on trucking companies and drivers. Violations of these
                  federal rules often prove negligence and significantly strengthen your case.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-10">
                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <FileText className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">FMCSA Regulations</h3>
                      <p className="text-muted-foreground text-sm">
                        We analyze Hours of Service violations, weight limits, licensing requirements,
                        and drug testing compliance to prove regulatory violations.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <Clock className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">Driver Fatigue</h3>
                      <p className="text-muted-foreground text-sm">
                        Truck drivers are legally limited in driving hours. We investigate logbook
                        violations and prove when fatigued driving caused your accident.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <HardDrive className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">Black Box Data</h3>
                      <p className="text-muted-foreground text-sm">
                        Modern trucks have Electronic Control Modules (ECMs) recording speed, braking,
                        and engine data. We preserve and analyze this critical evidence.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-lg leading-relaxed">
                  Trucking companies often deploy rapid response teams to accident scenes to protect
                  their interests. Our attorneys act quickly to preserve evidence, send spoliation
                  letters, and ensure nothing is destroyed or hidden.
                </p>

                <div className="mt-12 pt-8 border-t border-slate-200">
                  <h3 className="text-2xl font-bold font-serif text-primary mb-6">Specific Types of Truck Accidents</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    <Link href="/practice-areas/truck-accident" className="text-black hover:underline font-semibold">Commercial truck</Link> crashes can happen in various ways, each with its own unique causes and federal regulations to consider. We handle all types of complex truck crash litigation, including:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link href="/practice-areas/truck-accident/jackknife" className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200 group">
                      <Truck className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-primary group-hover:text-secondary transition-colors">Jackknife Accidents</span>
                    </Link>
                    <Link href="/practice-areas/truck-accident/underride" className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200 group">
                      <AlertTriangle className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-primary group-hover:text-secondary transition-colors">Underride Collisions</span>
                    </Link>
                  </div>
                </div>
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
                  <span className="text-secondary font-bold tracking-wider text-sm uppercase">Insurance Coverage</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary" data-testid="heading-insurance">
                  Truck Accident Insurance Coverage
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Commercial trucking insurance is far more complex than standard auto policies.
                  Multiple parties may share liability, and policy limits are significantly higher.
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
                        <DollarSign className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">High-Limit Commercial Policies</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Federal law requires commercial trucks to carry significantly higher insurance
                        limits than passenger vehicles. Depending on cargo type, trucks must carry
                        between $750,000 and $5,000,000 in liability coverage.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Minimum $750,000 for general freight
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          $1M+ for oil and hazardous materials
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          $5M for certain toxic substances
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
                        <Users className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">Multi-Party Liability</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Unlike car accidents, truck crashes often involve multiple liable parties.
                        We identify all responsible parties to maximize your compensation and
                        ensure no stone is left unturned.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Truck driver (employee or contractor)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Trucking company (vicarious liability)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Cargo loading companies
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Truck/parts manufacturers
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
                  <Calculator className="h-8 w-8 text-secondary" />
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
                      <ClipboardList className="h-12 w-12 text-secondary mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Driver Logbook Audits</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Federal law requires truck drivers to maintain detailed logs of their driving
                        hours. We conduct thorough audits of these records to identify Hours of Service
                        violations that prove the driver was fatigued or non-compliant.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>Electronic Logging Device (ELD) analysis</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>Hours of Service violation detection</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>Trip history and route verification</span>
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
                      <Wrench className="h-12 w-12 text-primary mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Maintenance Record Review</h3>
                      <p className="text-primary/80 leading-relaxed mb-6">
                        Trucking companies are legally required to maintain their vehicles. We
                        investigate maintenance records to prove negligence when brake failures,
                        tire blowouts, or mechanical defects cause accidents.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Pre-trip inspection log analysis</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Repair history documentation</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>DOT inspection compliance review</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Component failure investigation</span>
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
                  Taking on large trucking corporations requires experience, resources, and determination.
                  We have a proven track record of holding these companies accountable.
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
                    <MapPin className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Nationwide Coverage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Commercial trucks cross state lines constantly, creating complex jurisdictional
                    issues. Our nationwide network ensures you have local expertise no matter
                    where your accident occurred.
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
                    <DollarSign className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">No Upfront Fees</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We work on a contingency fee basis—you pay nothing unless we win. This allows
                    us to go toe-to-toe with deep-pocketed trucking corporations without putting
                    financial burden on you.
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
                    <Clock className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Free 24/7 Consultation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Truck accidents are emergencies—evidence can disappear within hours. Our team
                    is available around the clock to take your call and begin protecting your
                    rights immediately.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 p-8 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="h-8 w-8 text-secondary" />
                  <h3 className="text-xl font-bold">Experience Against Corporate Giants</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Trucking companies carry multimillion-dollar insurance policies and will spend heavily to defend them. You need a team that isn't intimidated by their tactics and knows how to win.
                  Large trucking corporations have teams of lawyers and insurance adjusters working
                  to minimize your claim. We've successfully taken on the biggest names in the
                  industry and secured millions in settlements for our clients. When you hire us,
                  you level the playing field.
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
                  Fill out the form below and one of our experienced truck accident attorneys will
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
                          placeholder="Please describe your truck accident and injuries..."
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
              Truck Accident Lawyers Serving All 50 States
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Object.values(STATE_DATA).map((state) => (
                <Link
                  key={state.slug}
                  href={`/truck-accident-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`}
                  className="text-sm text-muted-foreground hover:text-secondary hover:underline transition-colors"
                >
                  Truck Accident Lawyers in {state.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <div className="container mx-auto px-4 py-16">
          <SeoContentSection service="Truck Accident Lawyer" location="Nationwide" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
