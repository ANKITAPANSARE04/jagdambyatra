import { Mountain, Users, ShieldCheck, CalendarDays } from 'lucide-react'

const points = [
  { icon: Users, title: 'Experienced Tour Leader', text: 'Our leader travels with you.' },
  { icon: ShieldCheck, title: 'Safe & Comfortable Travel', text: 'Well-managed transportation and support.' },
  { icon: CalendarDays, title: 'Well-Planned Itinerary', text: 'Sightseeing, leisure and unique experiences.' },
]

export default function WhyTravelCard() {
  return (
    <aside className="rounded-2xl bg-orange-50 p-6">
      <div className="flex items-center gap-3">
        <Mountain size={44} strokeWidth={1.3} className="shrink-0 text-saffron" />
        <h3 className=" text-2xl font-bold leading-tight text-maroon">Why Travel with Jagdamb Yatra?</h3>
      </div>
      <ul className="mt-5 divide-y divide-orange-200">
        {points.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex gap-4 py-4">
            <Icon size={34} strokeWidth={1.5} className="shrink-0 text-saffron" />
            <div>
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-neutral-700">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}