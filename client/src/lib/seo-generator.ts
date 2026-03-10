import { STATE_DATA } from "@/data/state-data";

// Core static pages
const CORE_PAGES = {
  "/": {
    title: "Car Injury Law | Nationwide Accident & Injury Attorneys",
    description: "Top-rated nationwide personal injury firm. We fight insurance companies to get you maximum compensation. Free case review. No win, no fee. Call 1-888-669-5559.",
    keywords: "car accident lawyer, injury attorney, truck accident, motorcycle crash, wrongful death"
  },
  "/es": {
    title: "Abogados de Accidentes de Auto | Representación Nacional",
    description: "Abogados de lesiones personales calificados a nivel nacional. Peleamos contra las compañías de seguros para obtener su máxima compensación. Consulta gratis.",
    keywords: "abogado de accidentes, lesiones personales, demanda, compensacion"
  },
  "/about": {
    title: "About Admani Law | National Injury Network Director",
    description: "Learn about Admani Law and founder Saad Admani. We connect accident victims with the top 1% of trial attorneys nationwide.",
    keywords: "Admani Law, Saad Admani, injury network, trial attorneys"
  },
  "/attorneys/saad-admani": {
    title: "Saad Admani, Esq. | Network Director & Lead Attorney",
    description: "Saad Admani is the founder of Admani Law and Director of the CarInjuryLaw.com Network. Licensed in NJ & NY, specializing in high-stakes injury litigation.",
    keywords: "Saad Admani, attorney profile, injury lawyer bio, NJ lawyer"
  },
  "/join-network": {
    title: "Join Our Attorney Network | Car Injury Law Referral Program",
    description: "Expand your practice with high-quality personal injury leads. Join the Admani Law network of elite trial attorneys.",
    keywords: "attorney referral network, legal leads, injury case referrals"
  },
  "/settlement-calculator": {
    title: "Car Accident Settlement Calculator | Estimate Your Case Value",
    description: "How much is your car accident case worth? Use our free settlement calculator to estimate compensation for medical bills, lost wages, and pain & suffering.",
    keywords: "settlement calculator, case value estimator, car accident compensation"
  },
  "/blog": {
    title: "Legal Insights & Resources | Admani Law Blog",
    description: "Expert articles on personal injury law, car accident settlements, and insurance claims. Stay informed with Admani Law.",
    keywords: "legal blog, injury law tips, accident guides"
  },
  "/case-results": {
    title: "Case Results & Settlements | Car Injury Law",
    description: "See our track record of success. Millions recovered for accident victims across the United States.",
    keywords: "case results, settlement amounts, verdict history"
  },
  "/glossary": {
    title: "Personal Injury Legal Glossary | Terms You Should Know",
    description: "Confused by legal jargon? Browse our comprehensive glossary of personal injury and insurance terms.",
    keywords: "legal glossary, injury law terms, insurance definitions"
  },
  "/vs-insurance": {
    title: "You vs. The Insurance Company | Level the Playing Field",
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
    title: "Truck Accident Lawyer | Semi-Truck Crash Attorneys",
    description: "Hit by a semi-truck? Our specialized truck accident lawyers fight trucking companies to get you justice. Federal regulations experts.",
    keywords: "truck accident lawyer, semi crash attorney, 18-wheeler accident"
  },
  "/practice-areas/motorcycle-accident": {
    title: "Motorcycle Accident Lawyer | Biker Injury Attorneys",
    description: "We ride, we understand. Aggressive representation for injured motorcyclists. We fight biker bias and get you paid.",
    keywords: "motorcycle accident lawyer, motorcycle injury attorney, biker lawyer"
  },
  "/practice-areas/wrongful-death": {
    title: "Wrongful Death Attorneys | Compassionate Legal Help",
    description: "Justice for your lost loved one. We handle wrongful death claims with compassion and aggression against those responsible.",
    keywords: "wrongful death lawyer, fatal accident attorney"
  },
  "/practice-areas/personal-injury": {
    title: "Personal Injury Lawyer | Nationwide Injury Attorneys",
    description: "Injured due to negligence? We handle all types of injury cases. No fee unless we win. Free consultation.",
    keywords: "personal injury lawyer, injury attorney, accident lawyer"
  },
  "/practice-areas/rideshare-accident": {
    title: "Uber & Lyft Accident Lawyer | Rideshare Injury Attorneys",
    description: "Injured in an Uber or Lyft? Complex insurance policies require specialized legal help. We sue rideshare giants.",
    keywords: "uber accident lawyer, lyft accident attorney, rideshare injury"
  },
  "/practice-areas/car-accident": {
    title: "Car Accident Lawyer | Auto Crash Attorneys",
    description: "Leading car accident attorneys nationwide. We maximize settlements for crashes, rear-ends, and T-bone accidents.",
    keywords: "car accident lawyer, auto accident attorney, car crash help"
  },
  "/practice-areas/pedestrian-injury": {
    title: "Pedestrian Accident Lawyer | Hit by Car Attorneys",
    description: "Pedestrians have rights. If you were hit by a vehicle, we help you recover compensation for your serious injuries.",
    keywords: "pedestrian accident lawyer, hit by car attorney"
  },
  "/practice-areas/bus-transit-injury": {
    title: "Bus & Public Transit Accident Lawyer",
    description: "Injured on a bus or train? We handle complex claims against public transit authorities and private bus companies.",
    keywords: "bus accident lawyer, transit injury attorney"
  },
  "/practice-areas/workplace-injury": {
    title: "Workplace Injury Lawyer | Construction & Industrial Accidents",
    description: "Injured on the job? We handle third-party liability claims for construction and industrial workplace accidents.",
    keywords: "workplace injury lawyer, construction accident attorney"
  },
  "/practice-areas/medical-malpractice": {
    title: "Medical Malpractice Lawyer | Negligence Attorneys",
    description: "Harmed by a doctor or hospital? We hold medical professionals accountable for negligence and errors.",
    keywords: "medical malpractice lawyer, hospital negligence attorney"
  },
  "/practice-areas/slip-and-fall": {
    title: "Slip and Fall Lawyer | Premises Liability Attorneys",
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

  // 2. Dynamic State Pages (e.g., /california)
  const stateMatch = Object.values(STATE_DATA).find(s => `/${s.slug}` === path);
  if (stateMatch) {
    return {
      title: `${stateMatch.name} Car Accident Lawyer | No Win No Fee Attorneys`,
      description: `Injured in ${stateMatch.name}? Our top-rated ${stateMatch.name} car accident lawyers fight for your maximum settlement. Statute of limitations is ${stateMatch.statute}. Free review.`,
      keywords: `${stateMatch.name} car accident lawyer, ${stateMatch.name} injury attorney, accident lawyer in ${stateMatch.name}`
    };
  }

  // 3. Dynamic Practice Area State Pages (e.g., /truck-accident-lawyer/texas)
  // We need to parse the URL: /practice-slug/state-slug
  const parts = path.split('/').filter(Boolean); // ["truck-accident-lawyer", "texas"]
  
  if (parts.length === 2) {
    const [practiceSlug, stateSlug] = parts;
    
    // Find state from the URL slug (e.g., "texas" from "texas-car-accident-lawyer" OR just "texas")
    // Note: In App.tsx, routes are like: /truck-accident-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}
    // So stateSlug is like "new-jersey"
    
    const state = Object.values(STATE_DATA).find(s => s.name.toLowerCase().replace(/ /g, '-') === stateSlug);
    
    if (state) {
      if (practiceSlug === "personal-injury-lawyer") {
        return {
          title: `${state.name} Personal Injury Lawyer | Accident Attorneys`,
          description: `Top-rated personal injury lawyers in ${state.name}. We handle car crashes, slip and falls, and workplace injuries across ${state.name}. Free consultation.`,
          keywords: `${state.name} personal injury lawyer, injury attorney ${state.name}`
        };
      }
      if (practiceSlug === "motorcycle-accident-lawyer") {
        return {
          title: `${state.name} Motorcycle Accident Lawyer | Biker Attorneys`,
          description: `Hit on your bike in ${state.name}? Our ${state.name} motorcycle accident lawyers fight for bikers rights. Get compensation for your injuries and bike repairs.`,
          keywords: `${state.name} motorcycle accident lawyer, biker attorney ${state.name}`
        };
      }
      if (practiceSlug === "truck-accident-lawyer") {
        return {
          title: `${state.name} Truck Accident Lawyer | 18-Wheeler Crash Attorneys`,
          description: `Semi-truck crash in ${state.name}? We know ${state.name} trucking laws. Our aggressive attorneys fight trucking companies for maximum payouts.`,
          keywords: `${state.name} truck accident lawyer, 18-wheeler attorney ${state.name}`
        };
      }
      if (practiceSlug === "pedestrian-injury-lawyer") {
        return {
          title: `${state.name} Pedestrian Accident Lawyer | Hit by Car`,
          description: `Hit by a car in ${state.name}? Our pedestrian injury lawyers help victims recover medical costs and lost wages. Don't face insurance alone.`,
          keywords: `${state.name} pedestrian accident lawyer, hit by car attorney ${state.name}`
        };
      }
      if (practiceSlug === "bus-accident-lawyer") {
        return {
          title: `${state.name} Bus Accident Lawyer | Transit Injury Attorneys`,
          description: `Injured on a bus in ${state.name}? We handle claims against ${state.name} transit authorities and private bus lines. Free case evaluation.`,
          keywords: `${state.name} bus accident lawyer, transit attorney ${state.name}`
        };
      }
      if (practiceSlug === "workplace-injury-lawyer") {
        return {
          title: `${state.name} Workplace Injury Lawyer | Job Site Accidents`,
          description: `Hurt on the job in ${state.name}? Beyond workers' comp, you may have a third-party claim. Talk to our ${state.name} workplace injury lawyers today.`,
          keywords: `${state.name} workplace injury lawyer, construction accident attorney ${state.name}`
        };
      }
      if (practiceSlug === "medical-malpractice-lawyer") {
        return {
          title: `${state.name} Medical Malpractice Lawyer | Negligence Attorneys`,
          description: `Victim of medical negligence in ${state.name}? Our malpractice attorneys hold doctors and hospitals accountable. Justice for your family.`,
          keywords: `${state.name} medical malpractice lawyer, hospital negligence attorney ${state.name}`
        };
      }
      if (practiceSlug === "slip-and-fall-lawyer") {
        return {
          title: `${state.name} Slip and Fall Lawyer | Premises Liability`,
          description: `Slipped and fell in ${state.name}? Property owners must keep you safe. Our ${state.name} premises liability lawyers fight for your compensation.`,
          keywords: `${state.name} slip and fall lawyer, premises liability attorney ${state.name}`
        };
      }
    }
    
    // Check for City Pages: /state-slug/city-slug (e.g., /texas/houston)
    // stateSlug is actually the first part in this case?
    // Route definition: path={`/${state.slug}/${citySlug}`}
    // Example: /texas-car-accident-lawyer/houston
    
    const stateBySlug = Object.values(STATE_DATA).find(s => s.slug === parts[0]);
    if (stateBySlug) {
      const citySlug = parts[1];
      // Try to match city slug back to a city name roughly
      // We can just capitalize it for the title if exact match isn't easy, or loop cityList
      const cityName = stateBySlug.cityList.find(c => c.toLowerCase().replace(/ /g, '-') === citySlug) 
                     || citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      
      return {
        title: `${cityName} Car Accident Lawyer | ${stateBySlug.name} Injury Attorneys`,
        description: `Top-rated car accident lawyer in ${cityName}, ${stateBySlug.name}. Local representation for serious injury cases. Free consultation 24/7.`,
        keywords: `${cityName} car accident lawyer, ${cityName} injury attorney, accident lawyer in ${cityName}`
      };
    }
  }

  return null;
}
