import { Truck, Car, Bike, User, Briefcase, AlertTriangle, Gavel } from "lucide-react";

export const CASE_RESULTS = [
  {
    id: "truck-spinal",
    amount: "$5,250,000",
    type: "Truck Accident",
    location: "Newark, NJ",
    icon: Truck,
    summary: "Commercial semi-truck collision resulting in severe spinal injuries requiring multiple surgeries.",
    details: "Our client was stopped at a red light when a commercial 18-wheeler failed to brake, striking the vehicle from behind at 45mph. The impact caused multiple herniated discs and required a spinal fusion surgery. The trucking company initially denied liability, claiming brake failure. Our experts proved the brakes were poorly maintained.",
    category: "truck"
  },
  {
    id: "motorcycle-intersection",
    amount: "$2,100,000",
    type: "Motorcycle Crash",
    location: "Miami, FL",
    icon: Bike,
    summary: "Intersection accident caused by distracted driver failing to yield right of way.",
    details: "A distracted driver turned left directly in front of our client's motorcycle. The defense argued our client was speeding. We utilized traffic camera footage and accident reconstruction experts to prove our client was traveling at the speed limit and had no time to react.",
    category: "motorcycle"
  },
  {
    id: "car-tbi",
    amount: "$985,000",
    type: "Car Accident",
    location: "Houston, TX",
    icon: Car,
    summary: "Rear-end collision resulting in traumatic brain injury (TBI).",
    details: "High-speed rear-end impact on the highway. Client suffered a concussion that developed into post-concussion syndrome affecting their ability to work. We secured compensation for lost future earning capacity.",
    category: "car"
  },
  {
    id: "pedestrian-crosswalk",
    amount: "$1,850,000",
    type: "Pedestrian Injury",
    location: "Chicago, IL",
    icon: User,
    summary: "Pedestrian struck by delivery vehicle in marked crosswalk.",
    details: "Client was legally crossing the street when a delivery van turned without looking. The driver claimed the sun was in his eyes. We argued that professional drivers have a higher duty of care.",
    category: "pedestrian"
  },
  {
    id: "rideshare-passenger",
    amount: "$750,000",
    type: "Rideshare Accident",
    location: "Los Angeles, CA",
    icon: Car,
    summary: "Passenger in Uber injured when driver fell asleep at the wheel.",
    details: "Our client was a backseat passenger. The Uber driver drifted into the center divider. We triggered the $1M commercial insurance policy to ensure full coverage for the client's orthopedic injuries.",
    category: "rideshare"
  },
  {
    id: "wrongful-death-highway",
    amount: "$3,400,000",
    type: "Wrongful Death",
    location: "Atlanta, GA",
    icon: Gavel,
    summary: "Fatal highway pile-up caused by reckless driving.",
    details: "A tragic loss of life due to a drunk driver causing a multi-car pileup. We represented the surviving family members to secure financial security for the victim's children.",
    category: "wrongful-death"
  },
  {
    id: "workplace-machinery",
    amount: "$1,100,000",
    type: "Workplace Injury",
    location: "Jersey City, NJ",
    icon: Briefcase,
    summary: "Construction worker injured by defective heavy machinery.",
    details: "While this was a workers' comp case, we identified a 'third-party claim' against the manufacturer of the defective machine, allowing for a significantly higher recovery than workers' comp alone.",
    category: "workplace"
  },
  {
    id: "slip-fall-retail",
    amount: "$625,000",
    type: "Slip & Fall",
    location: "New York, NY",
    icon: AlertTriangle,
    summary: "Severe fracture from wet floor with no warning signs.",
    details: "Client slipped in a major retail store. Surveillance video showed the spill had been there for 45 minutes without being cleaned. We proved the store had 'constructive notice' of the hazard.",
    category: "premises"
  }
];