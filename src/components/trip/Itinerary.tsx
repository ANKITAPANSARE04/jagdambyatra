import { useState } from 'react'
import { CalendarDays, ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import type { TripDetail } from '../../types'

export default function Itinerary({ trip }: { trip: TripDetail }) {
  const [open, setOpen] = useState<number[]>([])
  const allOpen = open.length === trip.itinerary.length

  const toggle = (d: number) =>
    setOpen((o) => (o.includes(d) ? o.filter((x) => x !== d) : [...o, d]))

  return (
    <section id="itinerary" className="mt-10 scroll-mt-28">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2  text-2xl font-bold text-maroon">
          <CalendarDays className="text-saffron" /> Day-wise Itinerary
        </h2>
        <button
          onClick={() => setOpen(allOpen ? [] : trip.itinerary.map((i) => i.day))}
          className="text-sm font-semibold text-maroon hover:text-saffron"
        >
          {allOpen ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      <div className="mt-4 space-y-2.5">
        {trip.itinerary.map(({ day, title, details }) => {
          const isOpen = open.includes(day)
          return (
            <div key={day} className="overflow-hidden rounded-xl border border-orange-100 bg-white">
              <button
                onClick={() => toggle(day)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-4 py-3 text-left"
              >
                <span className="shrink-0 rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-saffron-dark">
                  Day {day}
                </span>
                <span className="flex-1 text-sm font-semibold">{title}</span>
                <ChevronDown size={20} className={clsx('shrink-0 transition-transform', isOpen && 'rotate-180')} />
              </button>
              <div className={clsx('grid transition-all duration-300', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm leading-relaxed text-neutral-700">{details}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}