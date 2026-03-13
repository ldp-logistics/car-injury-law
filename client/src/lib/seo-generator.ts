import { STATE_DATA } from "@/data/state-data";

// Core static pages
const CORE_PAGES = {
  "/": {
    title: "Car Accident & Injury Attorneys | Car Injury Law",
    description: "Top-rated nationwide personal injury firm. We fight insurance companies to get you maximum compensation. Free case review. No win, no fee. Call 1-888-669-5559.",
    keywords: "car accident lawyer, injury attorney, truck accident, motorcycle crash, wrongful death"
  },
  "/es": {
    title: "Abogados de Accidentes de Auto | Car Injury Law",
    description: "Abogados de lesiones personales calificados a nivel nacional. Peleamos contra las compañías de seguros para obtener su máxima compensación. Consulta gratis.",
    keywords: "abogado de accidentes, lesiones personales, demanda, compensacion"
  },
  "/about": {
    title: "About Admani Law | Car Injury Law",
    description: "Learn about Admani Law and founder Saad Admani. We connect accident victims with the top 1% of trial attorneys nationwide.",
    keywords: "Admani Law, Saad Admani, injury network, trial attorneys"
  },
  "/attorneys/saad-admani": {
    title: "Saad Admani, Esq. | Car Injury Law",
    description: "Saad Admani is the founder of Admani Law and Director of the CarInjuryLaw.com Network. Licensed in NJ & NY, specializing in high-stakes injury litigation.",
    keywords: "Saad Admani, attorney profile, injury lawyer bio, NJ lawyer"
  },
  "/join-network": {
    title: "Join Our Attorney Network | Car Injury Law",
    description: "Expand your practice with high-quality personal injury leads. Join the Admani Law network of elite trial attorneys.",
    keywords: "attorney referral network, legal leads, injury case referrals"
  },
  "/settlement-calculator": {
    title: "Car Accident Settlement Calculator | Car Injury Law",
    description: "How much is your car accident case worth? Use our free settlement calculator to estimate compensation for medical bills, lost wages, and pain & suffering.",
    keywords: "settlement calculator, case value estimator, car accident compensation"
  },
  "/blog": {
    title: "Legal Insights & Resources | Car Injury Law",
    description: "Expert articles on personal injury law, car accident settlements, and insurance claims. Stay informed with Admani Law.",
    keywords: "legal blog, injury law tips, accident guides"
  },
  "/case-results": {
    title: "Case Results & Settlements | Car Injury Law",
    description: "See our track record of success. Millions recovered for accident victims across the United States.",
    keywords: "case results, settlement amounts, verdict history"
  },
  "/glossary": {
    title: "Personal Injury Legal Glossary | Car Injury Law",
    description: "Confused by legal jargon? Browse our comprehensive glossary of personal injury and insurance terms.",
    keywords: "legal glossary, injury law terms, insurance definitions"
  },
  "/vs-insurance": {
    title: "You vs. The Insurance Company | Car Injury Law",
    description: "Insurance companies have teams of lawyers. You should too. Learn how we fight their tactics to win your case.",
    keywords: "insurance tactics, claim denial, insurance adjuster"
  },
  "/sitemap": {
    title: "Sitemap | Car Injury Law",
    description: "Complete list of pages on CarInjuryLaw.com. Find local attorneys in your state and city.",
    keywords: "sitemap, site directory"
  },
  "/thank-you": {
    title: "Thank You | Car Injury Law",
    description: "Thank you for contacting us. A member of our legal team will reach out shortly.",
    keywords: "thank you, submission received"
  },
  "/privacy": {
    title: "Privacy Policy | Car Injury Law",
    description: "Our commitment to protecting your personal information. Read our full privacy policy.",
    keywords: "privacy policy, data protection"
  },
  "/terms": {
    title: "Terms of Service | Car Injury Law",
    description: "Terms and conditions for using CarInjuryLaw.com.",
    keywords: "terms of service, user agreement"
  },
  "/safety-resources": {
    title: "Safety Resources & Accident Prevention | Car Injury Law",
    description: "Guides and tips for staying safe on the road. Prevention is the best protection.",
    keywords: "safety resources, accident prevention, driving safety"
  },
  // Main Practice Areas
  "/practice-areas/truck-accident": {
    title: "Truck Accident Lawyers | Car Injury Law",
    description: "Hit by a semi-truck? Our specialized truck accident lawyers fight trucking companies to get you justice. Federal regulations experts.",
    keywords: "truck accident lawyer, semi crash attorney, 18-wheeler accident"
  },
  "/practice-areas/motorcycle-accident": {
    title: "Motorcycle Accident Lawyers | Car Injury Law",
    description: "We ride, we understand. Aggressive representation for injured motorcyclists. We fight biker bias and get you paid.",
    keywords: "motorcycle accident lawyer, motorcycle injury attorney, biker lawyer"
  },
  "/practice-areas/wrongful-death": {
    title: "Wrongful Death Attorneys | Car Injury Law",
    description: "Justice for your lost loved one. We handle wrongful death claims with compassion and aggression against those responsible.",
    keywords: "wrongful death lawyer, fatal accident attorney"
  },
  "/practice-areas/personal-injury": {
    title: "Personal Injury Lawyers | Car Injury Law",
    description: "Injured due to negligence? We handle all types of injury cases. No fee unless we win. Free consultation.",
    keywords: "personal injury lawyer, injury attorney, accident lawyer"
  },
  "/practice-areas/rideshare-accident": {
    title: "Uber & Lyft Accident Lawyers | Car Injury Law",
    description: "Injured in an Uber or Lyft? Complex insurance policies require specialized legal help. We sue rideshare giants.",
    keywords: "uber accident lawyer, lyft accident attorney, rideshare injury"
  },
  "/practice-areas/car-accident": {
    title: "Car Accident Lawyers | Car Injury Law",
    description: "Leading car accident attorneys nationwide. We maximize settlements for crashes, rear-ends, and T-bone accidents.",
    keywords: "car accident lawyer, auto accident attorney, car crash help"
  },
  "/practice-areas/pedestrian-injury": {
    title: "Pedestrian Accident Lawyers | Car Injury Law",
    description: "Pedestrians have rights. If you were hit by a vehicle, we help you recover compensation for your serious injuries.",
    keywords: "pedestrian accident lawyer, hit by car attorney"
  },
  "/practice-areas/bus-transit-injury": {
    title: "Bus & Public Transit Accident Lawyers | Car Injury Law",
    description: "Injured on a bus or train? We handle complex claims against public transit authorities and private bus companies.",
    keywords: "bus accident lawyer, transit injury attorney"
  },
  "/practice-areas/workplace-injury": {
    title: "Workplace Injury Lawyers | Car Injury Law",
    description: "Injured on the job? We handle third-party liability claims for construction and industrial workplace accidents.",
    keywords: "workplace injury lawyer, construction accident attorney"
  },
  "/practice-areas/medical-malpractice": {
    title: "Medical Malpractice Lawyers | Car Injury Law",
    description: "Harmed by a doctor or hospital? We hold medical professionals accountable for negligence and errors.",
    keywords: "medical malpractice lawyer, hospital negligence attorney"
  },
  "/practice-areas/slip-and-fall": {
    title: "Slip and Fall Lawyers | Car Injury Law",
    description: "Injured on unsafe property? We fight property owners and insurance companies in slip and fall cases.",
    keywords: "slip and fall lawyer, premises liability attorney"
  }
};

// Helper to generate dynamic metadata
export function getSeoMetadata(path: string): { title: string; description: string; keywords?: string } | null {
  // 1. Check exact match in CORE_PAGES
  if (path in CORE_PAGES) {
    return CORE_PAGES[path as keyof typeof CORE_PAGES];
  }

  // 2. Dynamic State Pages (e.g., /california-car-accident-lawyer/)
  const stateMatch = Object.values(STATE_DATA).find(s => `/${s.slug}` === path || `/${s.slug}/` === path);
  if (stateMatch) {
    return {
      title: `${stateMatch.name} Car Accident Lawyer | Free Consultation`,
      description: `Injured in ${stateMatch.name}? Our top-rated lawyers fight for your maximum settlement. Statute: ${stateMatch.statute}. Free review.`,
      keywords: `${stateMatch.name} car accident lawyer, ${stateMatch.name} injury attorney, accident lawyer in ${stateMatch.name}`
    };
  }

  // 3. Dynamic Practice Area State Pages (e.g., /truck-accident-lawyer/texas/)
  const parts = path.split('/').filter(Boolean);
  
  if (parts.length === 2) {
    const [practiceSlug, stateSlug] = parts;
    
    // Find state from the URL slug
    const state = Object.values(STATE_DATA).find(s => s.name.toLowerCase().replace(/ /g, '-') === stateSlug);
    
    if (state) {
      const PRACTICE_LABELS: Record<string, string> = {
        "personal-injury-lawyer": "Personal Injury",
        "motorcycle-accident-lawyer": "Motorcycle Accident",
        "truck-accident-lawyer": "Truck Accident",
        "pedestrian-injury-lawyer": "Pedestrian Injury",
        "bus-accident-lawyer": "Bus Accident",
        "workplace-injury-lawyer": "Workplace Injury",
        "medical-malpractice-lawyer": "Medical Malpractice",
        "slip-and-fall-lawyer": "Slip and Fall"
      };

      if (PRACTICE_LABELS[practiceSlug]) {
        const label = PRACTICE_LABELS[practiceSlug];
        return {
          title: `${state.name} ${label} Lawyer | Car Injury Law`,
          description: `Need a ${label.toLowerCase()} lawyer in ${state.name}? We fight for maximum compensation. Free consultation. Call 24/7.`,
          keywords: `${state.name} ${label.toLowerCase()} lawyer, injury attorney ${state.name}`
        };
      }
    }
    
    // Check for City Pages: /texas-car-accident-lawyer/houston
    const stateBySlug = Object.values(STATE_DATA).find(s => s.slug === parts[0]);
    if (stateBySlug) {
      const citySlug = parts[1];
      const cityName = stateBySlug.cityList.find(c => c.toLowerCase().replace(/ /g, '-') === citySlug) 
                     || citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      
      return {
        title: `${cityName} Car Accident Lawyer | ${stateBySlug.abbr}`,
        description: `Top-rated car accident lawyer in ${cityName}, ${stateBySlug.abbr}. Local representation for serious injury cases. Free consultation.`,
        keywords: `${cityName} car accident lawyer, ${cityName} injury attorney, accident lawyer in ${cityName}`
      };
    }
  }

  return null;
}
