import { ArrowRight, CalendarDays, Clock } from 'lucide-react'
import clsx from 'clsx'
import type { Trip } from '../../types'
import dumpng from '../../assets/images/banner.jpg'
import { Link } from 'react-router-dom'

const badgeStyle = {
  'Bookings Open': 'bg-green-700',
  Popular: 'bg-saffron',
  International: 'bg-purple-600',
}
 
export const trips: Trip[] = [
  { id: 1, slug: 'dubai', title: 'Dubai Trip 2027', badge: 'Bookings Open', date: '10 Feb 2027 – 14 Feb 2027', duration: '5 Days / 4 Nights',  image: dumpng, price: 49999 },
]

export default function TripCard({ trip }: { trip: Trip }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-40">
        <img src={dumpng} alt={trip.title} className="h-full w-full object-cover" />
        {/* <img src={trip.image} alt={trip.title} className="h-full w-full object-cover" /> */}
        <span className={clsx('absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white', badgeStyle[trip.badge])}>
          {trip.badge}
        </span>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="min-h-[3rem]  text-lg font-bold text-maroon-dark">{trip.title}</h3>
        {trip.date && (
          <p className="flex items-center gap-2 text-sm text-neutral-600">
            <CalendarDays size={16} className="text-saffron" /> {trip.date}
          </p>
        )}
        <p className="flex items-center gap-2 text-sm text-neutral-600">
          <Clock size={16} className="text-saffron" /> {trip.duration}
        </p>
        <div className="flex items-center justify-between pt-3">
          <p className="text-sm">
            {trip.price ? (
              <>From <b className="text-base">₹{trip.price.toLocaleString('en-IN')}</b> / person</>
            ) : 'Price on request'}
          </p>
          {/* <button className="rounded-full bg-saffron p-2 text-white hover:bg-saffron-dark">
            <ArrowRight size={18} />
          </button> */}
          <Link to={`/trips/${trip.slug}`} className="rounded-full bg-saffron p-2 text-white hover:bg-saffron-dark">
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  )
}