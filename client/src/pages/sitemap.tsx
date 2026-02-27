import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Link } from "wouter";
import { STATE_DATA } from "@/data/state-data";

export default function SitemapPage() {
  const practiceAreas = [
    { name: "Personal Injury", href: "/practice-areas/personal-injury" },
    { name: "Car Accidents", href: "/practice-areas/car-accident" },
    { name: "Truck Accidents", href: "/practice-areas/truck-accident" },
    { name: "Motorcycle Accidents", href: "/practice-areas/motorcycle-accident" },
    { name: "Pedestrian Injury", href: "/practice-areas/pedestrian-injury" },
    { name: "Bus & Transit Injury", href: "/practice-areas/bus-transit-injury" },
    { name: "Workplace Injury", href: "/practice-areas/workplace-injury" },
    { name: "Medical Malpractice", href: "/practice-areas/medical-malpractice" },
    { name: "Slip & Fall", href: "/practice-areas/slip-and-fall" },
    { name: "Wrongful Death", href: "/practice-areas/wrongful-death" },
    { name: "Rideshare Accidents", href: "/practice-areas/rideshare-accident" },
  ];

  const resources = [
    { name: "About Us", href: "/about" },
    { name: "Legal Blog", href: "/blog" },
    { name: "Glossary", href: "/glossary" },
    { name: "Vs Insurance", href: "/vs-insurance" },
    { name: "Settlement Calculator", href: "/settlement-calculator" },
    { name: "Join Network", href: "/join-network" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="py-20 container mx-auto px-4">
        <h1 className="text-4xl font-bold font-serif mb-8">Sitemap</h1>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-xl font-bold mb-4 border-b pb-2">Practice Areas</h2>
            <ul className="space-y-2">
              {practiceAreas.map(p => (
                <li key={p.name}><Link href={p.href} className="text-blue-600 hover:underline">{p.name}</Link></li>
              ))}
            </ul>

            <h2 className="text-xl font-bold mb-4 border-b pb-2">Resources</h2>
            <ul className="space-y-2">
              {resources.map(r => (
                <li key={r.name}><Link href={r.href} className="text-blue-600 hover:underline">{r.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-xl font-bold mb-4 border-b pb-2"><Link href="/practice-areas/personal-injury" className="text-primary hover:underline font-semibold">Personal Injury</Link> Lawyers by State</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                {Object.values(STATE_DATA).map(state => (
                  <Link key={state.slug} href={`/personal-injury-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`} className="text-gray-600 hover:text-primary hover:underline text-sm block">
                    {state.name} Personal Injury Lawyer
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 border-b pb-2"><Link href="/practice-areas/car-accident" className="text-primary hover:underline font-semibold">Car Accident</Link> Lawyers by State & City</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(STATE_DATA).map(state => (
                  <div key={state.slug} className="space-y-2">
                    <Link href={`/${state.slug}`} className="font-semibold text-gray-800 hover:text-primary hover:underline block">
                      {state.name} Car Accident Lawyer
                    </Link>
                    <ul className="pl-4 space-y-1 border-l-2 border-slate-100">
                      {state.cityList.map(city => (
                        <li key={city}>
                          <Link href={`/${state.slug}/${city.toLowerCase().replace(/ /g, '-')}`} className="text-gray-600 hover:text-primary hover:underline text-sm block">
                            {city}, {state.abbr}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 border-b pb-2">Medical Malpractice Lawyers by State</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                {Object.values(STATE_DATA).map(state => (
                  <Link key={state.slug} href={`/medical-malpractice-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`} className="text-gray-600 hover:text-primary hover:underline text-sm block">
                    {state.name} <Link href="/practice-areas/medical-malpractice" className="text-primary hover:underline font-semibold">Medical Malpractice Lawyer</Link>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 border-b pb-2"><Link href="/practice-areas/motorcycle-accident" className="text-primary hover:underline font-semibold">Motorcycle Accident Lawyers</Link> by State</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                {Object.values(STATE_DATA).map(state => (
                  <Link key={state.slug} href={`/motorcycle-accident-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`} className="text-gray-600 hover:text-primary hover:underline text-sm block">
                    {state.name} Motorcycle Accident Lawyer
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 border-b pb-2"><Link href="/practice-areas/truck-accident" className="text-primary hover:underline font-semibold">Truck Accident</Link> Lawyers by State</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                {Object.values(STATE_DATA).map(state => (
                  <Link key={state.slug} href={`/truck-accident-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`} className="text-gray-600 hover:text-primary hover:underline text-sm block">
                    {state.name} Truck Accident Lawyer
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 border-b pb-2"><Link href="/practice-areas/workplace-injury" className="text-primary hover:underline font-semibold">Workplace Injury</Link> Lawyers by State</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                {Object.values(STATE_DATA).map(state => (
                  <Link key={state.slug} href={`/workplace-injury-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`} className="text-gray-600 hover:text-primary hover:underline text-sm block">
                    {state.name} Workplace Injury Lawyer
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 border-b pb-2">Slip & Fall Lawyers by State</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                {Object.values(STATE_DATA).map(state => (
                  <Link key={state.slug} href={`/slip-and-fall-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`} className="text-gray-600 hover:text-primary hover:underline text-sm block">
                    {state.name} Slip & Fall Lawyer
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 border-b pb-2"><Link href="/practice-areas/bus-transit-injury" className="text-primary hover:underline font-semibold">Bus Accident</Link> Lawyers by State</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                {Object.values(STATE_DATA).map(state => (
                  <Link key={state.slug} href={`/bus-accident-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`} className="text-gray-600 hover:text-primary hover:underline text-sm block">
                    {state.name} Bus Accident Lawyer
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 border-b pb-2"><Link href="/practice-areas/pedestrian-injury" className="text-primary hover:underline font-semibold">Pedestrian Injury</Link> Lawyers by State</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                {Object.values(STATE_DATA).map(state => (
                  <Link key={state.slug} href={`/pedestrian-injury-lawyer/${state.name.toLowerCase().replace(/ /g, '-')}`} className="text-gray-600 hover:text-primary hover:underline text-sm block">
                    {state.name} Pedestrian Injury Lawyer
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}