import { Link } from "wouter";
import { internalLink } from "@/utils/link-helper";
import { CONTACT_INFO } from "@/data/contact-info";

export function Footer() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-white font-serif font-bold text-3xl leading-none tracking-tight">CarInjuryLaw<span className="text-secondary">.com</span></span>
              <span className="text-gray-400 font-sans font-bold text-xs tracking-widest leading-none mt-2 uppercase">A Division of <a href="https://www.admanilaw.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Admani Law</a></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
              America's premier injury network. We connect accident victims with top-tier trial attorneys who have a proven track record of fighting insurance companies.
            </p>
            <div className="flex flex-col mb-6">
              <span className="text-xs text-secondary font-bold uppercase tracking-wider mb-1">24/7 Emergency Line</span>
              <div className="text-3xl font-bold text-white font-serif">
                1-888-669-5559
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Headquarters</span>
              <address className="text-sm text-gray-300 not-italic leading-relaxed">
                <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{CONTACT_INFO.name}</a><br />
                {CONTACT_INFO.address.street}<br />
                {CONTACT_INFO.address.floor}<br />
                {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}
              </address>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-lg font-serif text-secondary">Company</h3>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li><Link href={internalLink("")} className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>Home</Link></li>
              <li><Link href={internalLink("about/")} className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>About Admani Law</Link></li>
              <li><Link href={internalLink("case-results/")} className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>Case Results</Link></li>
              <li><Link href={internalLink("vs-insurance/")} className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>Vs. Insurance</Link></li>
              <li><Link href={internalLink("safety-resources/")} className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>Safety Resources</Link></li>
              <li><Link href={internalLink("join-network/")} className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>Join Network (Attorneys)</Link></li>
              <li><Link href={internalLink("blog/")} className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>Legal Insights</Link></li>
              <li><button onClick={scrollToForm} className="hover:text-white transition-colors text-left flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"></span>Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-lg font-serif text-secondary">Practice Areas</h3>
            <ul className="space-y-3 text-gray-400 font-medium text-sm">
              <li><Link href={internalLink("practice-areas/truck-accident")} className="hover:text-white transition-colors">Truck Accidents</Link></li>
              <li><Link href={internalLink("practice-areas/motorcycle-accident")} className="hover:text-white transition-colors">Motorcycle Crashes</Link></li>
              <li><Link href={internalLink("practice-areas/wrongful-death")} className="hover:text-white transition-colors">Wrongful Death</Link></li>
              <li><Link href={internalLink("practice-areas/personal-injury")} className="hover:text-white transition-colors">Personal Injury</Link></li>
              <li><Link href={internalLink("practice-areas/rideshare-accident")} className="hover:text-white transition-colors">Uber/Lyft Accidents</Link></li>
              <li><Link href={internalLink("practice-areas/car-accident")} className="hover:text-white transition-colors">Car Accidents</Link></li>
              <li><Link href={internalLink("practice-areas/pedestrian-injury")} className="hover:text-white transition-colors">Pedestrian Injury</Link></li>
              <li><Link href={internalLink("practice-areas/bus-transit-injury")} className="hover:text-white transition-colors">Bus & Transit Accidents</Link></li>
              <li><Link href={internalLink("practice-areas/workplace-injury")} className="hover:text-white transition-colors">Workplace Injury</Link></li>
              <li><Link href={internalLink("practice-areas/medical-malpractice")} className="hover:text-white transition-colors">Medical Malpractice</Link></li>
              <li><Link href={internalLink("practice-areas/slip-and-fall")} className="hover:text-white transition-colors">Slip & Fall</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-lg font-serif text-secondary">National Coverage</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-500 font-medium">
              <li><Link href={internalLink("alabama-car-accident-lawyer")} className="hover:text-white transition-colors">Alabama</Link></li>
              <li><Link href={internalLink("arizona-car-accident-lawyer")} className="hover:text-white transition-colors">Arizona</Link></li>
              <li><Link href={internalLink("california-car-accident-lawyer")} className="hover:text-white transition-colors">California</Link></li>
              <li><Link href={internalLink("colorado-car-accident-lawyer")} className="hover:text-white transition-colors">Colorado</Link></li>
              <li><Link href={internalLink("florida-car-accident-lawyer")} className="text-white font-bold hover:text-secondary transition-colors">Florida</Link></li>
              <li><Link href={internalLink("georgia-car-accident-lawyer")} className="hover:text-white transition-colors">Georgia</Link></li>
              <li><Link href={internalLink("illinois-car-accident-lawyer")} className="hover:text-white transition-colors">Illinois</Link></li>
              <li><Link href={internalLink("maryland-car-accident-lawyer")} className="hover:text-white transition-colors">Maryland</Link></li>
              <li><Link href={internalLink("michigan-car-accident-lawyer")} className="hover:text-white transition-colors">Michigan</Link></li>
              <li><Link href={internalLink("new-jersey-car-accident-lawyer")} className="text-white font-bold hover:text-secondary transition-colors">New Jersey</Link></li>
              <li><Link href={internalLink("new-york-car-accident-lawyer")} className="hover:text-white transition-colors">New York</Link></li>
              <li><Link href={internalLink("north-carolina-car-accident-lawyer")} className="hover:text-white transition-colors">North Carolina</Link></li>
              <li><Link href={internalLink("ohio-car-accident-lawyer")} className="hover:text-white transition-colors">Ohio</Link></li>
              <li><Link href={internalLink("pennsylvania-car-accident-lawyer")} className="hover:text-white transition-colors">Pennsylvania</Link></li>
              <li><Link href={internalLink("texas-car-accident-lawyer")} className="hover:text-white transition-colors">Texas</Link></li>
              <li><Link href={internalLink("virginia-car-accident-lawyer")} className="hover:text-white transition-colors">Virginia</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} CarInjuryLaw.com. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-medium">
            <a href="/sitemap/" className="text-blue-600 text-sm hover:underline">Site Map</a>
            <Link href={internalLink("privacy")} className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href={internalLink("terms")} className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href={internalLink("join-network")} className="hover:text-white transition-colors">Attorney Portal</Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-[11px] text-gray-600 text-justify leading-relaxed bg-black/20 p-6 rounded-lg">
          <p className="mb-2">
            <strong className="text-gray-500 uppercase tracking-wider">Attorney Advertising & Network Disclosure</strong>
          </p>
          <p>
            CarInjuryLaw.com is a brand owned and operated by <strong><a href="https://www.admanilaw.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">ADMANI LAW</a></strong>. Saad Admani is the founder and managing attorney of <a href="https://www.admanilaw.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-gray-400 transition-colors">ADMANI LAW</a>, licensed to practice law in New Jersey and New York. For cases outside of these jurisdictions, we may refer your matter to a carefully vetted co-counsel or local attorney within our network who is licensed in your specific jurisdiction.
          </p>
          <p className="mt-2">
            While <a href="https://www.admanilaw.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-gray-400 transition-colors">ADMANI LAW</a> maintains joint responsibility for cases where we act as co-counsel, we do not guarantee any specific result. Past performance is not indicative of future outcomes. Use of this website does not create an attorney-client relationship until a retainer agreement is signed. All information provided is for general informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}