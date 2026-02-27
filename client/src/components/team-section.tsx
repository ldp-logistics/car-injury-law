import { Link } from "wouter";
import attorneyImg from "@assets/admani_1763525477578.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Scale, Map } from "lucide-react";

export function TeamSection() {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="absolute top-6 -left-6 w-full h-full border-2 border-secondary/30 rounded-lg hidden md:block"></div>
              <img 
                src={attorneyImg}
                srcSet={`${attorneyImg} 400w, ${attorneyImg} 800w`} 
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Managing Attorney Saad Admani" 
                className="w-full rounded-lg shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700 object-cover"
                loading="lazy"
                width="600"
                height="800"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white text-primary p-6 rounded shadow-xl z-20 max-w-xs hidden md:block border border-slate-200">
                <p className="font-serif text-lg font-bold italic leading-relaxed">"We don't just refer cases. We curate victories."</p>
                <p className="text-xs font-bold text-gray-500 mt-2 uppercase tracking-wider">— <Link href="/attorneys/saad-admani" className="text-primary hover:underline font-semibold">Saad Admani</Link>, Founder</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary text-primary font-bold text-sm mb-6 tracking-wide uppercase">
              <Building2 className="h-4 w-4" />
              Leadership & Direction
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Saad Admani, Esq.</h2>
            <h3 className="text-xl text-secondary font-medium mb-6 flex items-center gap-2">
              <Scale className="h-5 w-5" />
              Founder of ADMANI LAW & Network Director
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                <strong>CarInjuryLaw.com</strong> is not just a website; it is the digital storefront of a national legal powerhouse. As the founder of <strong className="text-white">ADMANI LAW</strong>, Saad Admani has architected a unique <Link href="/join-network" className="text-primary hover:underline font-semibold">referral network</Link> that prioritizes <em>client results</em> above all else.
              </p>
              <p>
                Licensed in New Jersey and New York, Saad personally oversees the vetting process for every partner firm in our network. He ensures that when a client from Texas, Florida, or California calls us, they are connected not just to <em>a</em> lawyer, but to <em>the right</em> lawyer for their specific case.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-8 pt-8 border-t border-white/10 mb-8">
              <div>
                <span className="block text-4xl font-bold text-white mb-1 font-serif">$500M+</span>
                <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">Network Recoveries</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white mb-1 font-serif">50</span>
                <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">States Covered</span>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all font-bold px-8 py-6 h-auto text-lg">
                  Read Corporate Bio <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-serif font-bold text-primary mb-1">Saad Admani, Esq.</DialogTitle>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Managing Attorney | Admani Law</p>
                </DialogHeader>
                <div className="space-y-6 text-gray-600 mt-4">
                  <p>
                    Saad Admani is a seasoned litigator and the strategic architect behind the CarInjuryLaw.com national network. His vision was simple: democratize access to elite legal representation. By leveraging deep relationships with top trial firms across the country, he created a system where geography no longer limits a victim's ability to find justice.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                     <div>
                        <p className="font-bold text-primary border-b border-gray-200 pb-1 mb-2 uppercase text-xs tracking-wide">Bar Admissions</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2"><Map className="h-3 w-3 text-secondary" /> State of New Jersey</li>
                          <li className="flex items-center gap-2"><Map className="h-3 w-3 text-secondary" /> State of New York</li>
                          <li className="flex items-center gap-2"><Map className="h-3 w-3 text-secondary" /> U.S. District Court, D.N.J.</li>
                        </ul>
                     </div>
                     <div>
                        <p className="font-bold text-primary border-b border-gray-200 pb-1 mb-2 uppercase text-xs tracking-wide">Education</p>
                        <ul className="space-y-1 text-sm">
                          <li><strong>J.D.</strong>, Rutgers Law School</li>
                          <li><strong>B.A.</strong>, Rutgers College (Magna Cum Laude)</li>
                        </ul>
                     </div>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wide">Professional Distinctions</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white border border-slate-200 px-3 py-1 text-xs font-bold text-slate-700 rounded-full shadow-sm">Top 40 Under 40</span>
                      <span className="bg-white border border-slate-200 px-3 py-1 text-xs font-bold text-slate-700 rounded-full shadow-sm">Super Lawyers "Rising Star"</span>
                      <span className="bg-white border border-slate-200 px-3 py-1 text-xs font-bold text-slate-700 rounded-full shadow-sm">Million Dollar Advocates Forum</span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}