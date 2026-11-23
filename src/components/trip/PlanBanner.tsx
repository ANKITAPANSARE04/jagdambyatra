import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PlanBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-orange-50 to-orange-100/70 px-8 py-7 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className=" text-3xl font-bold text-maroon">
            Plan Your Next <span className="text-saffron">Journey</span>
          </h2>
          <p className="mt-1 text-neutral-800">
            Share your details and we’ll get back to you with the best options.
          </p>
        </div>
        <Link to="/contact"
              className="flex items-center gap-2 rounded-full bg-saffron px-8 py-3.5 font-semibold text-white shadow hover:bg-saffron-dark">
          Send Enquiry <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}