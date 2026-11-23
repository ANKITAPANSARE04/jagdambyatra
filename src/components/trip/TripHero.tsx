import { CalendarDays, MapPin, Landmark, Plane } from 'lucide-react'
import type { TripDetail } from '../../types'
import dumimg from '../../assets/images/banner.jpg'

export default function TripHero({ trip }: { trip: TripDetail }) {
  const facts = [
    { icon: CalendarDays, text: trip.duration },
    { icon: MapPin, text: `From ${trip.from}` },
    { icon: Landmark, text: trip.places },
  ]
  return (
    <section className="relative overflow-hidden">
      <img src={dumimg} alt="" className="absolute inset-y-0  h-full w-full object-cover object-right " />
      <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/85 to-transparent md:via-ivory/60" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 md:pb-20">
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-saffron-dark">
          <Plane size={16} /> {trip.badge}
        </span>
        <h1 className="mt-4  text-4xl font-bold text-neutral-900 md:text-5xl">{trip.title}</h1>
        <p className="mt-3 max-w-md text-neutral-800">{trip.intro}</p>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
          {facts.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <Icon size={30} strokeWidth={1.5} className="text-saffron" />
              <span className="max-w-[7rem] text-sm font-semibold leading-tight">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}