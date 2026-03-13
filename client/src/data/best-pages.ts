import { internalLink } from "../utils/link-helper";

export interface BestPageData {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  category: string;
  internalLinks?: { label: string; href: string }[];
}

export const BEST_PAGES: BestPageData[] = [
  // ── BEST INJURY LAWYERS ───────────────────────
  { slug: "best-injury-lawyers", keyword: "best injury lawyers", title: "Best Injury Lawyers in the USA | Car Injury Law", description: "Rated among the best injury lawyers in the USA. Get the compensation you deserve with our expert team. Free 24/7 consultation. No win no fee.", h1: "Best Injury Lawyers — Proven Results For Every Injury Victim", category: "Personal Injury", internalLinks: [
    { label: "Best Accident Lawyer", href: internalLink("best-accident-lawyer") },
    { label: "Best Personal Injury Attorneys", href: internalLink("best-personal-injury-attorneys") }
  ]},
  { slug: "best-accident-lawyer", keyword: "best accident lawyer", title: "Best Accident Lawyer | Car Injury Law", description: "Looking for the best accident lawyer? Car Injury Law fights for maximum compensation. Free case review 24/7. No win no fee.", h1: "Best Accident Lawyer — Fighting For The Compensation You Deserve", category: "Car Accident" },
  { slug: "best-personal-injury-attorneys", keyword: "best personal injury attorneys", title: "Best Personal Injury Attorneys | Car Injury Law", description: "Among the best personal injury attorneys in the USA. No win no fee. Free consultation available around the clock.", h1: "Best Personal Injury Attorneys — Trusted Results Nationwide", category: "Personal Injury" },
  { slug: "best-injury-law-firm", keyword: "best injury law firm", title: "Best Injury Law Firm | Car Injury Law", description: "Rated among the best injury law firms in America. Get high-quality legal representation today. Free case evaluation. No fees until we win your case.", h1: "Best Injury Law Firm — Maximum Results For Every Client", category: "Personal Injury" },
  { slug: "best-accident-attorneys", keyword: "best accident attorneys", title: "Best Accident Attorneys | Car Injury Law", description: "Among the best accident attorneys in the USA fighting for injury victims. Free consultation 24/7. No win no fee.", h1: "Best Accident Attorneys — We Set The Standard For Results", category: "Car Accident" },
  { slug: "best-motorcycle-accident-lawyer", keyword: "best motorcycle accident lawyer", title: "Best Motorcycle Accident Lawyer | Car Injury Law", description: "Rated among the best motorcycle accident lawyers in the USA. Free case review. No fees until we win.", h1: "Best Motorcycle Accident Lawyer — Proven Results For Riders", category: "Motorcycle Accident" },
  { slug: "best-personal-injury-lawyer-near-me", keyword: "best personal injury lawyer near me", title: "Best Personal Injury Lawyer Near Me | Car Injury Law", description: "Find the best personal injury lawyer near you. Car Injury Law serves all 50 states. Free consultation 24/7.", h1: "Best Personal Injury Lawyer Near Me — Top Rated Near You", category: "Personal Injury" },
  { slug: "best-car-accident-lawyer", keyword: "best car accident lawyer", title: "Best Car Accident Lawyer | Car Injury Law", description: "Looking for the best car accident lawyer? Our attorneys fight for maximum compensation. Free consultation 24/7.", h1: "Best Car Accident Lawyer — Top Rated Car Accident Attorneys", category: "Car Accident" },
  { slug: "best-truck-accident-lawyer", keyword: "best truck accident lawyer", title: "Best Truck Accident Lawyer | Car Injury Law", description: "Rated among the best truck accident lawyers in the USA. Free case review 24/7. No fees until we win.", h1: "Best Truck Accident Lawyer — Top Rated Truck Accident Attorneys", category: "Truck Accident", internalLinks: [
    { label: "Best Car Accident Lawyer", href: internalLink("best-car-accident-lawyer") },
    { label: "Truck Accident Lawyer", href: internalLink("practice-areas/truck-accident") }
  ]},
  { slug: "best-slip-and-fall-lawyer", keyword: "best slip and fall lawyer", title: "Best Slip and Fall Lawyer | Car Injury Law", description: "Find the best slip and fall lawyers in the USA. Car Injury Law provides expert legal help for premises accidents. Free 24/7 consultations available.", h1: "Best Slip and Fall Lawyer — Top Rated Premises Liability Attorneys", category: "Slip & Fall" },
];
