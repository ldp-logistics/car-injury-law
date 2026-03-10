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
  Stethoscope,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  HeadphonesIcon,
  FileText,
  Building2,
  Syringe,
  Baby,
  Brain,
  Pill,
  ClipboardList,
  Users,
  FileSearch
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { LeadForm } from "@/components/lead-form";
import { STATE_DATA } from "@/data/state-data";

export default function MedicalMalpracticePage() {
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
        title="Medical Malpractice Lawyer | Healthcare Negligence Claims | Car Injury Law"
        description="Injured by medical negligence? Our medical malpractice lawyers have the resources to fight hospital legal teams. We hire experts to prove healthcare negligence. Free consultation."
        lastUpdated={currentDate}
        canonicalUrl="https://www.carinjurylaw.com/practice-areas/medical-malpractice"
        schema={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Car Injury Law",
          "description": "Expert medical malpractice lawyers fighting healthcare negligence with resources to take on hospital legal teams",
          "url": "https://www.carinjurylaw.com/practice-areas/medical-malpractice",
          "telephone": "1-888-669-5559",
          "priceRange": "Contingency Fee (No Win No Fee)",
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "serviceType": "Medical Malpractice Lawyer",
          "knowsAbout": [
            "Surgical Errors",
            "Misdiagnosis Claims",
            "Medication Mistakes",
            "Birth Injuries",
            "Hospital Negligence"
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
            <Stethoscope className="w-full h-full" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
                  Fighting Healthcare Negligence
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif leading-tight" data-testid="hero-heading">
                  Medical Malpractice Lawyers
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  When healthcare providers fail their duty to patients, the consequences can be 
                  devastating. We have the financial resources and medical expertise to take on 
                  hospital legal teams and hold them accountable.
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
                  Experienced Medical Malpractice Lawyers
                </h2>
              </motion.div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Medical malpractice occurs when healthcare providers deviate from the accepted 
                  standard of care, causing patient harm. These cases require specialized legal 
                  knowledge and medical expertise to prove negligence and secure compensation.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-10">
                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <Syringe className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">Surgical Errors</h3>
                      <p className="text-muted-foreground text-sm">
                        Wrong-site surgery, retained surgical instruments, anesthesia errors, 
                        and post-operative complications caused by negligence. We hold surgeons 
                        and surgical teams accountable.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <Brain className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">Misdiagnosis</h3>
                      <p className="text-muted-foreground text-sm">
                        Delayed diagnosis, failure to diagnose, or incorrect diagnosis of 
                        cancer, heart attacks, strokes, and infections. These errors can cost 
                        lives and cause preventable suffering.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <Pill className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">Medication Mistakes</h3>
                      <p className="text-muted-foreground text-sm">
                        Wrong medication, incorrect dosage, dangerous drug interactions, and 
                        pharmacy errors. We investigate the chain of care to identify all 
                        responsible parties.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <Baby className="h-10 w-10 text-secondary mb-4" />
                      <h3 className="font-bold text-primary text-lg mb-2">Birth Injuries</h3>
                      <p className="text-muted-foreground text-sm">
                        Cerebral palsy, Erb's palsy, brain damage, and other injuries caused 
                        by negligent prenatal care or delivery room errors. These cases often 
                        require lifetime care compensation.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-lg leading-relaxed">
                  We work with medical experts across all specialties to analyze your case, 
                  identify where the standard of care was breached, and prove causation between 
                  the negligence and your injuries.
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
                  Medical Liability Insurance
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Understanding the legal framework for medical malpractice is essential for 
                  building a successful case against healthcare providers and institutions.
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
                        <Scale className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">Standard of Care</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        To prove medical malpractice, we must demonstrate that the healthcare 
                        provider's actions fell below the "standard of care"—what a reasonably 
                        competent provider would have done in similar circumstances.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Expert testimony establishes the standard
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Medical records document the deviation
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Causation links negligence to injury
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
                        <Building2 className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">Institutional Accountability</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Beyond individual providers, hospitals and healthcare systems can be 
                        held liable for systemic failures, inadequate staffing, and negligent 
                        credentialing of physicians.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Hospital vicarious liability
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Negligent hiring/supervision claims
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Corporate negligence doctrine
                        </li>
                        <li className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Multiple insurance policies available
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
                      <Users className="h-12 w-12 text-secondary mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Medical Expert Review</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        We hire qualified medical experts in the relevant specialty to review 
                        your medical records, analyze the care you received, and provide expert 
                        opinions on whether the standard of care was breached.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>Board-certified specialists</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>Comprehensive record analysis</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                          <span>Written expert reports</span>
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
                      <ClipboardList className="h-12 w-12 text-primary mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Proving Causation</h3>
                      <p className="text-primary/80 leading-relaxed mb-6">
                        It's not enough to show negligence—we must prove the provider's actions 
                        directly caused your injury. Our experts establish this critical link 
                        through detailed medical analysis.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Medical causation analysis</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Timeline reconstruction</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Alternative outcome testimony</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Life care planning for damages</span>
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
                  We have the financial resources to fight large hospital legal teams and the 
                  medical expertise to prove healthcare negligence caused your injuries.
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
                    <DollarSign className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Resources to Fight Hospitals</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Medical malpractice cases are expensive to litigate. We have the financial 
                    resources to hire top medical experts, take depositions, and fight hospital 
                    defense teams for years if necessary.
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
                    Medical malpractice laws vary significantly by state—including damage caps 
                    and expert requirements. Our nationwide network ensures you have attorneys 
                    who know your state's specific rules.
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
                    <Scale className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">No Upfront Fees</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We work on a contingency fee basis—you pay nothing unless we win. This 
                    allows us to take on complex medical malpractice cases that other firms 
                    can't afford to pursue.
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
                  Medical malpractice has strict statutes of limitations. Contact us immediately 
                  to discuss your case and ensure your rights are protected before time runs out.
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
                  Fill out the form below and one of our medical malpractice attorneys will 
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
                          placeholder="Please describe the medical treatment and what went wrong..."
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
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
                  Medical Malpractice Lawyers Nationwide
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We have built a network of experienced medical malpractice attorneys across all 50 states 
                  to ensure you get the best <Link href="/about" className="text-black hover:underline font-semibold">legal representation</Link> near you.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {Object.values(STATE_DATA).map((state) => (
                  <Link 
                    key={state.slug} 
                    href={`/medical-malpractice-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`}
                    className="text-sm text-slate-600 hover:text-secondary hover:font-semibold transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-white hover:shadow-sm"
                  >
                    <MapPin className="h-3 w-3 text-secondary/70" />
                    Medical Malpractice Lawyers in {state.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
