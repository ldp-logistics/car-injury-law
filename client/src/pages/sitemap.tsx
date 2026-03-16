import { SERVICE_SYNONYM_PAGES } from '@/data/service-synonym-pages'
import { NEAR_ME_PAGES } from '@/data/near-me-pages'
import { PRACTICE_AREA_PAGES } from '@/data/practice-area-pages'
import { BEST_PAGES } from '@/data/best-pages'
import { STATE_SPECIFIC_PAGES } from '@/data/state-specific-pages'
import { STATE_DATA } from '@/data/state-data'
import { BLOG_POSTS_DATA } from '@/data/blog-posts'
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { SeoHead } from "@/components/seo-head";

const EXTRA_PAGES = [
  { slug: 'accident-attorney-kentucky', label: 'Accident Attorney Kentucky' },
  { slug: 'utah-accident-lawyer', label: 'Utah Accident Lawyer' },
  { slug: 'injury-at-work-lawyers', label: 'Injury at Work Lawyers' },
  { slug: 'slip-and-fall-injury-attorneys', label: 'Slip and Fall Injury Attorneys' },
  { slug: 'rideshare-injury-lawyer', label: 'Rideshare Injury Lawyer' },
  { slug: 'personal-injury-law-firms-near-me', label: 'Personal Injury Law Firms Near Me' },
  { slug: 'slip-and-fall-attorney', label: 'Slip and Fall Attorney' },
  { slug: 'personal-injury-attorneys-near-me', label: 'Personal Injury Attorneys Near Me' },
  { slug: 'surgical-error-lawyer', label: 'Surgical Error Lawyer' },
  { slug: 'motorcycle-injury-lawyer', label: 'Motorcycle Injury Lawyer' },
  { slug: 'wrongful-death-lawyer', label: 'Wrongful Death Lawyer' },
  { slug: 'head-on-collision-lawyer', label: 'Head On Collision Lawyer' },
  { slug: 'bicycle-accident-lawyer-near-me', label: 'Bicycle Accident Lawyer Near Me' },
  { slug: 'workplace-injury-attorney', label: 'Workplace Injury Attorney' },
  { slug: 'workplace-accident-lawyer', label: 'Workplace Accident Lawyer' },
  { slug: 'trip-and-fall-lawyer', label: 'Trip and Fall Lawyer' },
  { slug: 'uber-accident-lawyer', label: 'Uber Accident Lawyer' },
  { slug: 'personal-injury-law', label: 'Personal Injury Law' },
  { slug: 'motorcycle-crash-lawyer', label: 'Motorcycle Crash Lawyer' },
  { slug: 'accident-attorneys-near-me', label: 'Accident Attorneys Near Me' },
  { slug: 'hit-and-run-accident-lawyer', label: 'Hit and Run Accident Lawyer' },
  { slug: 'semi-truck-accident-lawyer', label: 'Semi Truck Accident Lawyer' },
  { slug: 'bus-accident-attorney', label: 'Bus Accident Attorney' },
  { slug: 'truck-accident-attorney', label: 'Truck Accident Attorney' },
  { slug: 'uber-accident-lawyer-near-me', label: 'Uber Accident Lawyer Near Me' },
  { slug: 'nampa-truck-accident-lawyer', label: 'Nampa Truck Accident Lawyer' },
  { slug: 'misdiagnosis-lawyer', label: 'Misdiagnosis Lawyer' },
  { slug: 'pedestrian-accident-attorney', label: 'Pedestrian Accident Attorney' },
  { slug: 'motorcycle-accident-attorney', label: 'Motorcycle Accident Attorney' },
  { slug: 'bicycle-accident-lawyer', label: 'Bicycle Accident Lawyer' },
  { slug: 'lyft-accident-lawyer-near-me', label: 'Lyft Accident Lawyer Near Me' },
  { slug: 'wrongful-death-law_firm', label: 'Wrongful Death Law Firm' },
  { slug: 'slip-and-fall-injury-lawyers', label: 'Slip and Fall Injury Lawyers' },
  { slug: 'utah-car-accident-attorney', label: 'Utah Car Accident Attorney' },
  { slug: 'medical-negligence-lawyer', label: 'Medical Negligence Lawyer' },
  { slug: 'rhode-island-car-accident-injury-attorneys', label: 'Rhode Island Car Accident Injury Attorneys' },
  { slug: 'motorcycle-injury-attorney', label: 'Motorcycle Injury Attorney' },
  { slug: 'truck-accident-lawyers-near-me', label: 'Truck Accident Lawyers Near Me' },
  { slug: 'best-personal-injury-attorneys', label: 'Best Personal Injury Attorneys' },
  { slug: 'slip-and-fall-attorney-near-me', label: 'Slip and Fall Attorney Near Me' },
  { slug: 'lyft-accident-attorney', label: 'Lyft Accident Attorney' },
  { slug: 'best-injury-law-firm', label: 'Best Injury Law Firm' },
  { slug: 'public-transit-accident-lawyer', label: 'Public Transit Accident Lawyer' },
  { slug: 'rollover-accident-lawyer', label: 'Rollover Accident Lawyer' },
  { slug: 'rideshare-accident-lawyer', label: 'Rideshare Accident Lawyer' },
  { slug: 'best-slip-and-fall-lawyer', label: 'Best Slip and Fall Lawyer' },
  { slug: 'lawyer-for-truck-accident', label: 'Lawyer for Truck Accident' },
  { slug: 'serious-injury-lawyer', label: 'Serious Injury Lawyer' },
  { slug: 'spinal-cord-injury-lawyer', label: 'Spinal Cord Injury Lawyer' },
  { slug: 'personal-injury-firms', label: 'Personal Injury Firms' },
  { slug: 'attorney-injury', label: 'Attorney Injury' },
  { slug: 'best-injury-lawyers', label: 'Best Injury Lawyers' },
  { slug: 'slip-and-fall-accident-lawyers', label: 'Slip and Fall Accident Lawyers' },
  { slug: 'soft-tissue-injury-lawyer', label: 'Soft Tissue Injury Lawyer' },
  { slug: 'lawyer-for-personal-injury', label: 'Lawyer for Personal Injury' },
  { slug: 'uber-accident', label: 'Uber Accident' },
  { slug: 'attorney-injury-personal', label: 'Attorney Injury Personal' },
  { slug: 'underride-accident-lawyer', label: 'Underride Accident Lawyer' },
  { slug: 'rideshare-accident-law-firm', label: 'Rideshare Accident Law Firm' },
  { slug: 'alabama-accident-injury-lawyer', label: 'Alabama Accident Injury Lawyer' },
  { slug: 'rideshare-accident-attorney', label: 'Rideshare Accident Attorney' },
  { slug: 'personal-injury-firms-near-me', label: 'Personal Injury Firms Near Me' },
  { slug: 'construction-accident-law-firm', label: 'Construction Accident Law Firm' },
  { slug: 'fatal-accident-lawyer', label: 'Fatal Accident Lawyer' },
  { slug: 'whiplash-injury-lawyer', label: 'Whiplash Injury Lawyer' },
  { slug: 'best-accident-lawyer', label: 'Best Accident Lawyer' },
  { slug: 'personal-injury-claim-lawyer', label: 'Personal Injury Claim Lawyer' },
  { slug: 'catastrophic-injury-lawyer', label: 'Catastrophic Injury Lawyer' },
  { slug: 'jackknife-accident-lawyer', label: 'Jackknife Accident Lawyer' },
  { slug: 'wrongful-death-attorney', label: 'Wrongful Death Attorney' },
  { slug: 'lyft-accident-lawyer', label: 'Lyft Accident Lawyer' },
  { slug: 'accidents-lawyer', label: 'Accidents Lawyer' },
  { slug: 'pedestrian-injury-attorney', label: 'Pedestrian Injury Attorney' },
  { slug: 'rear-end-collision-lawyer', label: 'Rear End Collision Lawyer' },
  { slug: 'accident-lawyer-missouri', label: 'Accident Lawyer Missouri' },
  { slug: 'best-motorcycle-accident-lawyer', label: 'Best Motorcycle Accident Lawyer' },
  { slug: 'big-rig-accident-lawyer', label: 'Big Rig Accident Lawyer' },
  { slug: 'lawyers-for-auto-accidents', label: 'Lawyers for Auto Accidents' },
  { slug: 'pi-lawyers-near-me', label: 'PI Lawyers Near Me' },
  { slug: 'best-accident-attorneys', label: 'Best Accident Attorneys' },
  { slug: 'best-personal-injury-lawyer-near-me', label: 'Best Personal Injury Lawyer Near Me' },
  { slug: 'automobile-accident-attorneys', label: 'Automobile Accident Attorneys' },
  { slug: 'construction-accident-lawyer-near-me', label: 'Construction Accident Lawyer Near Me' },
  { slug: 'unsafe-property-lawyer', label: 'Unsafe Property Lawyer' },
  { slug: 'injury-attorneys-near-me', label: 'Injury Attorneys Near Me' },
  { slug: 'pi-attorney-near-me', label: 'PI Attorney Near Me' },
  { slug: 'motorcycle-accident-attorneys-near-me', label: 'Motorcycle Accident Attorneys Near Me' },
  { slug: 'personal-lawyers-near-me', label: 'Personal Lawyers Near Me' },
  { slug: 'lawyer-injury', label: 'Lawyer Injury' },
  { slug: 'pedestrian-accident-lawyer', label: 'Pedestrian Accident Lawyer' },
  { slug: 'work-accident-lawyer', label: 'Work Accident Lawyer' },
  { slug: 'auto-accident-lawyers-near-me', label: 'Auto Accident Lawyers Near Me' },
  { slug: 'motorcycle-accident-lawyers-near-me', label: 'Motorcycle Accident Lawyers Near Me' },
  { slug: 'premises-liability-lawyer', label: 'Premises Liability Lawyer' },
  { slug: '18-wheeler-accident-lawyer', label: '18 Wheeler Accident Lawyer' },
  { slug: 'uninsured-motorist-lawyer', label: 'Uninsured Motorist Lawyer' },
  { slug: 'workers-compensation-lawyer', label: 'Workers Compensation Lawyer' },
  { slug: 'personal-accident-lawyer', label: 'Personal Accident Lawyer' },
  { slug: 'auto-accident-attorney-near-me', label: 'Auto Accident Attorney Near Me' },
  { slug: 'lawyer-injury-near-me', label: 'Lawyer Injury Near Me' },
  { slug: 'construction-accident-attorney', label: 'Construction Accident Attorney' },
  { slug: 'accident-claims-lawyers', label: 'Accident Claims Lawyers' },
  { slug: 'slip-and-fall-law', label: 'Slip and Fall Law' },
  { slug: 'personal-injury-lawyer-near-me', label: 'Personal Injury Lawyer Near Me' },
  { slug: 'uber-lyft-accident-lawyer', label: 'Uber Lyft Accident Lawyer' },
  { slug: 'pedestrian-hit-by-car-lawyer', label: 'Pedestrian Hit by Car Lawyer' },
  { slug: 'personal-attorney-injury', label: 'Personal Attorney Injury' },
  { slug: 'rhode-island-car-accident-injury-lawyer', label: 'Rhode Island Car Accident Injury Lawyer' },
  { slug: 'accidents-attorneys', label: 'Accidents Attorneys' },
  { slug: 'medical-malpractice-attorney', label: 'Medical Malpractice Attorney' },
  { slug: 'truck-accident-attorney-near-me', label: 'Truck Accident Attorney Near Me' },
  { slug: 'uber-accident-attorney-near-me', label: 'Uber Accident Attorney Near Me' },
  { slug: 'school-bus-accident-lawyer', label: 'School Bus Accident Lawyer' },
  { slug: 'traumatic-brain-injury-lawyer', label: 'Traumatic Brain Injury Lawyer' },
  { slug: 'broken-bone-accident-lawyer', label: 'Broken Bone Accident Lawyer' },
  { slug: 'personal-injury-lawyer-slip-and-fall', label: 'Personal Injury Lawyer Slip and Fall' },
  { slug: 'automobile-accident-lawyers', label: 'Automobile Accident Lawyers' },
  { slug: 'construction-accident-lawyer', label: 'Construction Accident Lawyer' },
  { slug: 'drunk-driver-accident-lawyer', label: 'Drunk Driver Accident Lawyer' },
  { slug: 'crosswalk-accident-lawyer', label: 'Crosswalk Accident Lawyer' },
  { slug: 'intersection-accident-lawyer', label: 'Intersection Accident Lawyer' },
  { slug: 'biker-accident-lawyer', label: 'Biker Accident Lawyer' },
  { slug: 'slip-and-fall', label: 'Slip and Fall' },
  { slug: 'work-injury-law-firm', label: 'Work Injury Law Firm' },
  { slug: 'wrongful-death-lawyer-hilo-hi', label: 'Wrongful Death Lawyer Hilo HI' },
  { slug: 'hawaii-lyft-accident-attorney', label: 'Hawaii Lyft Accident Attorney' },
  { slug: 'hawaii-lyft-accident-lawyer', label: 'Hawaii Lyft Accident Lawyer' },
  { slug: 'delaware-uber-accident-lawyer', label: 'Delaware Uber Accident Lawyer' },
  { slug: 'fort-smith-pedestrian-accident-lawyer', label: 'Fort Smith Pedestrian Accident Lawyer' },
  { slug: 'gulfport-bus-accident-attorney', label: 'Gulfport Bus Accident Attorney' },
  { slug: 'nampa-bus-accident-lawyer', label: 'Nampa Bus Accident Lawyer' },
  { slug: 'chandler-personal-injury-lawyer', label: 'Chandler Personal Injury Lawyer' },
  { slug: 'chandler-truck-accident-lawyer', label: 'Chandler Truck Accident Lawyer' },
  { slug: 'nampa-car-accident-lawyer', label: 'Nampa Car Accident Lawyer' },
  { slug: 'car-accident-lawyer-nampa', label: 'Car Accident Lawyer Nampa' },
  { slug: 'car-accident-lawyer-nampa-id', label: 'Car Accident Lawyer Nampa ID' },
  { slug: 'personal-injury-attorney-nampa', label: 'Personal Injury Attorney Nampa' },
  { slug: 'alabama-car-injury-attorney', label: 'Alabama Car Injury Attorney' },
  { slug: 'alabama-car-injury-attorneys', label: 'Alabama Car Injury Attorneys' },
  { slug: 'alabama-car-injury-lawyer', label: 'Alabama Car Injury Lawyer' },
  { slug: 'michigan-accident-lawyer', label: 'Michigan Accident Lawyer' },
  { slug: 'michigan-accident-attorney', label: 'Michigan Accident Attorney' },
  { slug: 'maryland-accident-lawyer', label: 'Maryland Accident Lawyer' },
  { slug: 'rhode-island-car-accident-injury-attorney', label: 'Rhode Island Car Accident Injury Attorney' },
  { slug: 'accident-lawyer-louisiana', label: 'Accident Lawyer Louisiana' },
  { slug: 'vs-insurance', label: 'VS Insurance' },
  { slug: 'case-results', label: 'Case Results' },
  { slug: 'safety-resources', label: 'Safety Resources' },
  { slug: 'glossary', label: 'Glossary' },
  { slug: 'join-network', label: 'Join Network' },
  { slug: 'settlement-calculator', label: 'Settlement Calculator' },
  { slug: 'about', label: 'About Us' },
  { slug: 'sitemap', label: 'Sitemap' },
]

export default function SitemapPage() {
  const states = Object.values(STATE_DATA)
  const practiceAreaSlugs = [
    'pedestrian-injury-lawyer',
    'bus-accident-lawyer',
    'medical-malpractice-lawyer',
    'motorcycle-accident-lawyer',
    'workplace-injury-lawyer',
    'slip-and-fall-lawyer',
    'truck-accident-lawyer',
    'personal-injury-lawyer',
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoHead 
        title="Site Map | Car Injury Law"
        description="Complete directory of all Car Injury Law pages. Find legal resources for every state, practice area, and injury type across all 50 states."
        canonicalUrl="https://www.carinjurylaw.com/sitemap/"
      />
      <NavBar />
      
      <main className="flex-grow max-w-6xl mx-auto py-12 px-4 shadow-sm bg-white my-8 rounded-xl border border-slate-200">
        <h1 className="text-4xl font-bold font-serif text-slate-900 mb-2">
          Site Map | Car Injury Law
        </h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed font-sans">
          Complete directory of all pages on
          Car Injury Law. Find legal resources
          for every state, practice area, and
          injury type across all 50 states.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-serif text-slate-900
            mb-6 border-b border-slate-100 pb-3">
            All Legal Services
          </h2>
          <div className="grid grid-cols-2
            md:grid-cols-4 gap-x-4 gap-y-2">
            {EXTRA_PAGES.map(p => (
              <a key={p.slug}
                href={'/' + p.slug + '/'}
                className="text-primary text-sm font-medium
                hover:underline transition-all hover:translate-x-1 inline-block">
                {p.label}
              </a>
            ))}
            {SERVICE_SYNONYM_PAGES.map(p => (
              <a key={p.slug}
                href={'/' + p.slug + '/'}
                className="text-primary text-sm font-medium
                hover:underline transition-all hover:translate-x-1 inline-block">
                {p.keyword}
              </a>
            ))}
            {NEAR_ME_PAGES.map(p => (
              <a key={p.slug}
                href={'/' + p.slug + '/'}
                className="text-primary text-sm font-medium
                hover:underline transition-all hover:translate-x-1 inline-block">
                {p.keyword}
              </a>
            ))}
            {BEST_PAGES.map(p => (
              <a key={p.slug}
                href={'/' + p.slug + '/'}
                className="text-primary text-sm font-medium
                hover:underline transition-all hover:translate-x-1 inline-block">
                {p.keyword}
              </a>
            ))}
            {PRACTICE_AREA_PAGES.map(p => (
              <a key={p.slug}
                href={'/' + p.slug + '/'}
                className="text-primary text-sm font-medium
                hover:underline transition-all hover:translate-x-1 inline-block">
                {p.keyword}
              </a>
            ))}
            {STATE_SPECIFIC_PAGES.map(p => (
              <a key={p.slug}
                href={'/' + p.slug + '/'}
                className="text-primary text-sm font-medium
                hover:underline transition-all hover:translate-x-1 inline-block">
                {p.keyword}
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-serif text-slate-900
            mb-6 border-b border-slate-100 pb-3">
            Practice Areas By State
          </h2>
          {practiceAreaSlugs.map(practice => (
            <div key={practice} className="mb-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="text-lg font-bold
                text-slate-800 mb-4 capitalize font-serif">
                {practice.replace(/-/g, ' ')}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {states.map(state => (
                  <a key={state.slug}
                    href={'/' + practice +
                      '/' + state.slug + '/'}
                    className="text-primary
                    text-xs font-semibold hover:underline">
                    {state.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-serif text-slate-900
            mb-6 border-b border-slate-100 pb-3">
            Car Accident Lawyers By State
          </h2>
          <div className="grid grid-cols-2
            md:grid-cols-4 gap-x-4 gap-y-2">
            {states.map(state => (
              <a key={state.slug}
                href={'/' + state.slug +
                  '-car-accident-lawyer/'}
                className="text-primary text-sm font-medium
                hover:underline">
                {state.name}
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-serif text-slate-900
            mb-6 border-b border-slate-100 pb-3">
            Car Accident Statistics By State
          </h2>
          <div className="grid grid-cols-2
            md:grid-cols-4 gap-x-4 gap-y-2">
            {states.map(state => (
              <a key={state.slug}
                href={'/car-accident-statistics/'
                  + state.slug + '/'}
                className="text-primary text-sm font-medium
                hover:underline">
                {state.name} Statistics
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-serif text-slate-900
            mb-6 border-b border-slate-100 pb-3">
            Blog Posts
          </h2>
          <div className="grid grid-cols-1
            md:grid-cols-2 gap-4">
            {BLOG_POSTS_DATA.map(post => (
              <a key={post.slug}
                href={'/blog/' + post.slug + '/'}
                className="text-primary text-sm font-medium p-3 bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 hover:bg-slate-100 transition-all
                hover:underline">
                {post.title}
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}