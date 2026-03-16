import { SERVICE_SYNONYM_PAGES } from '../data/service-synonym-pages'
import { NEAR_ME_PAGES } from '../data/near-me-pages'
import { PRACTICE_AREA_PAGES } from '../data/practice-area-pages'
import { STATE_DATA } from '../data/state-data'

const PRACTICE_AREA_STATE_LINKS = [
  { slug: 'pedestrian-injury-lawyer', label: 'Pedestrian Injury Lawyer' },
  { slug: 'bus-accident-lawyer', label: 'Bus Accident Lawyer' },
  { slug: 'medical-malpractice-lawyer', label: 'Medical Malpractice Lawyer' },
  { slug: 'motorcycle-accident-lawyer', label: 'Motorcycle Lawyer' },
  { slug: 'workplace-injury-lawyer', label: 'Workers Comp Lawyer' },
  { slug: 'slip-and-fall-lawyer', label: 'Slip and Fall Lawyer' },
  { slug: 'truck-accident-lawyer', label: 'Truck Accident Lawyer' },
  { slug: 'personal-injury-lawyer', label: 'Personal Injury Lawyer' },
]

const TOP_STATES = [
  'california', 'texas', 'florida',
  'new-york', 'illinois', 'pennsylvania',
  'ohio', 'georgia', 'north-carolina',
  'michigan'
]

export default function InternalLinks() {
  const topStates = Object.values(STATE_DATA)
    .filter(s => TOP_STATES.includes(s.name.toLowerCase())) // Using name.toLowerCase() to match the slug-like strings in TOP_STATES

  const services = SERVICE_SYNONYM_PAGES
    .slice(0, 10)

  const nearMe = NEAR_ME_PAGES.slice(0, 8)

  const practiceAreas = PRACTICE_AREA_PAGES
    .slice(0, 8)

  return (
    <div className="border-t mt-10 pt-8 px-4 pb-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-lg font-bold text-gray-800 mb-6">
          Legal Resources
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          <div>
            <p className="font-semibold text-gray-700 mb-2 text-sm">
              Practice Areas
            </p>
            <ul className="space-y-1">
              {practiceAreas.map(p => (
                <li key={p.slug}>
                  <a href={'/' + p.slug + '/'}
                    className="text-blue-600 text-xs hover:underline">
                    {p.keyword}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-700 mb-2 text-sm">
              Legal Services
            </p>
            <ul className="space-y-1">
              {services.map(p => (
                <li key={p.slug}>
                  <a href={'/' + p.slug + '/'}
                    className="text-blue-600 text-xs hover:underline">
                    {p.keyword}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-700 mb-2 text-sm">
              Injury Types
            </p>
            <ul className="space-y-1">
              {PRACTICE_AREA_STATE_LINKS.map(p => (
                <li key={p.slug}>
                  <a href={'/' + p.slug + '/california/'}
                    className="text-blue-600 text-xs hover:underline">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-700 mb-2 text-sm">
              Near Me
            </p>
            <ul className="space-y-1">
              {nearMe.map(p => (
                <li key={p.slug}>
                  <a href={'/' + p.slug + '/'}
                    className="text-blue-600 text-xs hover:underline">
                    {p.keyword}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-700 mb-2 text-sm">
              States We Serve
            </p>
            <ul className="space-y-1">
              {topStates.map(s => (
                <li key={s.slug}>
                  <a href={'/' + s.slug + '/'}
                    className="text-blue-600 text-xs hover:underline">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-6 pt-4 border-t">
          <p className="font-semibold text-gray-700 mb-2 text-sm">
            Car Accident Statistics By State
          </p>
          <div className="flex flex-wrap gap-2">
            {topStates.map(s => (
              <a key={s.slug}
                href={'/car-accident-statistics/' + s.name.toLowerCase() + '/'}
                className="text-blue-600 text-xs hover:underline">
                {s.name} Statistics
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
