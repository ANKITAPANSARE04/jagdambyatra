import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function JoinBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14">
      <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-maroon to-maroon-dark px-8 py-8 text-white md:flex-row">
        <div className="text-center md:text-left">
          <h2 className=" text-3xl font-bold">Be a Part of Our Next Journey</h2>
          <p className="mt-1 text-white/85">
            Explore our upcoming trips and travel with the Jagdamb Yatra family.
          </p>
        </div>
        <Link to="/#trips"
              className="flex items-center gap-2 rounded-full bg-saffron px-7 py-3 font-semibold text-white hover:bg-saffron-dark">
          View Upcoming Trips <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}