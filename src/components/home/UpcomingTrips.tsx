import { ArrowRight } from 'lucide-react'
import TripCard from './TripCard'
import { trips } from '../../data/trips'

export default function UpcomingTrips() {
  return (
    <section id="trips" className="mx-auto max-w-7xl px-4 py-14">
      <div className="flex items-end justify-between">
        <div>
          <h2 className=" text-3xl font-bold text-maroon ">Upcoming Yatras & Tours</h2>
          <div className="mt-2 h-0.5 w-10 bg-saffron" />
        </div>
        <a href="#" className="flex items-center gap-1 text-sm font-semibold text-maroon">
          View All Trips <ArrowRight size={16} />
        </a>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trips.map((t) => <TripCard key={t.id} trip={t} />)}
      </div>
    </section>
  )
}