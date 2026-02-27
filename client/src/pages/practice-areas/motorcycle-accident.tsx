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
  Bike,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  HeadphonesIcon,
  Search,
  HardHat,
  AlertCircle,
  Compass,
  Heart,
  Microscope,
  Camera,
  Users
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { LeadForm } from "@/components/lead-form";
import { STATE_DATA } from "@/data/state-data";

export default function MotorcycleAccidentPage() {
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
        title="Motorcycle Crash Lawyer | Protecting Riders' Rights | Car Injury Law"
        description="Injured in a motorcycle crash? We fight biker bias and protect riders' rights. Expert motorcycle accident lawyers. Free 24/7 consultation."
        lastUpdated={currentDate}
        canonicalUrl="https://www.carinjurylaw.com/practice-areas/motorcycle-accident"
        schema={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Car Injury Law",
          "description": "Expert motorcycle accident lawyers fighting biker bias and protecting riders' rights",
          "url": "https://www.carinjurylaw.com/practice-areas/motorcycle-accident",
          "telephone": "1-888-669-5559",
          "priceRange": "Contingency Fee (No Win No Fee)",
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "serviceType": "Motorcycle Accident Lawyer",
          "knowsAbout": [
            "Motorcycle Accident Claims",
            "Biker Bias Defense",
            "Road Hazard Analysis",
            "Helmet Law Implications",
            "Forensic Crash Reconstruction"
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
            <Bike className="w-full h-full" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
                  Advocates for the Riding Community
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif leading-tight" data-testid="hero-heading">
                  <Link href="/practice-areas/motorcycle-accident" className="text-primary hover:underline font-semibold">Motorcycle <Link href="/practice-areas/car-accident" className="text-primary hover:underline font-semibold">Crash</Link></Link> Lawyers
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Insurance companies and juries often blame the rider first. We don't let them. 
                  Our attorneys understand riding, fight "biker bias," and prove that you weren't 
                  at fault. Your passion for riding deserves fierce protection.
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
                  <span className="text-secondary font-bold tracking-wider text-sm uppercase">Fighting For Riders</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-8" data-testid="heading-expertise">
                  Overcoming "Biker Bias"
                </h2>
              </motion.div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  "Biker bias" is the unfair assumption that motorcyclists are reckless thrill-seekers 
                  who cause their own accidents. This prejudice affects how insurance adjusters evaluate 
                  claims and how juries perceive riders. We combat this bias head-on with evidence and 
                  expert testimony.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-10">
                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <AlertCircle className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">Proving You Weren't At Fault</h3>
                      <p className="text-muted-foreground text-sm">
                        We gather witness statements, traffic camera footage, and expert testimony 
                        to prove the other driver's negligence—they "didn't see you" is not an excuse.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <Compass className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">Road Hazard Analysis</h3>
                      <p className="text-muted-foreground text-sm">
                        Potholes, debris, oil slicks, and poor road design cause many motorcycle crashes. 
                        We investigate whether municipalities or property owners share liability.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <HardHat className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">Helmet Law Impact</h3>
                      <p className="text-muted-foreground text-sm">
                        We navigate complex helmet laws that vary by state. Whether you wore a helmet 
                        or not, we protect your rights and counter unfair reduction arguments.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-lg leading-relaxed">
                  Our attorneys don't just understand the law—they understand motorcycles and the 
                  unique physics of riding. This expertise allows us to effectively counter the 
                  unfair stereotypes that can hurt your case.
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
                  <span className="text-secondary font-bold tracking-wider text-sm uppercase">Insurance Coverage</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary" data-testid="heading-insurance">
                  Motorcycle Insurance Protection
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Motorcycle insurance works differently than car insurance. We help you understand 
                  your coverage options and maximize every avenue for <Link href="/settlement-calculator" className="text-primary hover:underline font-semibold">compensation</Link>.
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
                        <Heart className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">Motorcycle Injury Protection</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Motorcycle accidents often result in severe injuries due to limited protection. 
                        We pursue all available coverage to ensure your medical expenses, rehabilitation, 
                        and long-term care needs are fully addressed.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Medical payments coverage (MedPay)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <Link href="/practice-areas/personal-injury" className="text-primary hover:underline font-semibold">Personal injury</Link> protection (PIP)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Uninsured/underinsured motorist coverage
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Health insurance coordination
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
                        <Bike className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">Property Damage Recovery</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Your motorcycle isn't just transportation—it's a passion. We fight for full 
                        compensation for your bike, whether it's a standard ride or a custom build 
                        worth tens of thousands of dollars.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Full motorcycle replacement value
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Custom parts and accessories
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Riding gear replacement (helmet, jacket, boots)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Rental/loaner bike during recovery
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
                  <Microscope className="h-8 w-8 text-secondary" />
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
                      <Search className="h-12 w-12 text-secondary mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Forensic Crash Reconstruction</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        We work with accident reconstruction experts who specialize in motorcycle 
                        crashes. Using physics, evidence analysis, and advanced technology, we 
                        recreate exactly what happened to prove the other party's fault.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>Skid mark and debris field analysis</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>Vehicle damage pattern interpretation</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>3D crash scene modeling</span>
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
                      <Camera className="h-12 w-12 text-primary mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Protecting Rider's Rights</h3>
                      <p className="text-primary/80 leading-relaxed mb-6">
                        From the moment you contact us, we become your shield. We handle all 
                        communication with <Link href="/vs-insurance" className="text-primary hover:underline font-semibold">insurance companies</Link>, preserve critical evidence, and 
                        ensure your rights as a rider are never compromised.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Immediate evidence preservation</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Expert witness coordination</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Aggressive insurance negotiation</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Trial-ready case preparation</span>
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
                  We're not just lawyers who take motorcycle cases—we're advocates for the 
                  biking community who understand what riding means to you.
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
                    <Users className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Biking Community Advocates</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We respect the riding community and understand motorcycle culture. Your 
                    case won't be handled by attorneys who view bikers with prejudice—we're 
                    on your side from day one.
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
                    Whether you were riding through mountain passes, coastal highways, or city 
                    streets, our nationwide network ensures you have experienced local 
                    representation wherever your accident occurred.
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
                    We work on a contingency fee basis—you pay nothing unless we win your case. 
                    Focus on your recovery while we focus on fighting for the compensation 
                    you deserve.
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
                  Accidents happen at any hour. Our team is available around the clock to 
                  answer your questions and begin protecting your rights. Don't wait—evidence 
                  disappears and witnesses forget. Call us now.
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
                  Fill out the form below and one of our motorcycle crash attorneys will 
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
                          placeholder="Please describe your motorcycle crash and injuries..."
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
              Motorcycle Crash Lawyers Serving All 50 States
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Object.values(STATE_DATA).map((state) => (
                <Link 
                  key={state.slug} 
                  href={`/motorcycle-accident-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`}
                  className="text-sm text-muted-foreground hover:text-secondary hover:underline transition-colors"
                >
                  Motorcycle Crash Lawyers in {state.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <div className="container mx-auto px-4 py-16">
          <SeoContentSection service="Motorcycle Accident Lawyer" location="Nationwide" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
