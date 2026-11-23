import { useState } from 'react'
import { Star, CalendarDays, CircleCheck, CircleX, BedDouble, Check, X } from 'lucide-react'
import * as Icons from 'lucide-react'
import clsx from 'clsx'
import type { TripDetail } from '../../types'

const tabs = [
  { key: 'highlights', label: 'Tour Highlights', icon: Star },
  { key: 'itinerary', label: 'Itinerary', icon: CalendarDays },
  { key: 'inclusions', label: 'Inclusions', icon: CircleCheck },
  { key: 'exclusions', label: 'Exclusions', icon: CircleX },
  { key: 'hotels', label: 'Hotels', icon: BedDouble },
] as const

type TabKey = (typeof tabs)[number]['key']

export default function TripTabs({ trip }: { trip: TripDetail }) {
  const [tab, setTab] = useState<TabKey>('highlights')

  const choose = (k: TabKey) => {
    if (k === 'itinerary') {
      // itinerary is its own section below, so scroll to it
      document.getElementById('itinerary')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    setTab(k)
  }

  return (
    <div className="mt-8">
      <div className="flex gap-1 overflow-x-auto">
        {tabs.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => choose(key)}
            className={clsx(
              'flex shrink-0 items-center gap-2 rounded-t-xl px-5 py-2.5 text-sm font-semibold transition',
              tab === key ? 'bg-saffron text-white' : 'text-neutral-800 hover:text-saffron'
            )}
          >
            <Icon size={16} /> {label}
          </button>
        ))}
      </div>

      <div className="rounded-b-2xl rounded-tr-2xl border border-orange-100 bg-white p-6 shadow-sm">
        {tab === 'highlights' && (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
            {trip.highlights.map((h) => {
              const Icon = (Icons as any)[h.icon] ?? Icons.Star
              return (
                <div key={h.label} className="flex flex-col items-center gap-2 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                    <Icon size={28} strokeWidth={1.5} className="text-saffron" />
                  </span>
                  <span className="text-sm font-medium leading-snug">{h.label}</span>
                </div>
              )
            })}
          </div>
        )}

        {(tab === 'inclusions' || tab === 'exclusions') && (
          <ul className="grid gap-3 sm:grid-cols-2">
            {(tab === 'inclusions' ? trip.inclusions : trip.exclusions).map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm">
                {tab === 'inclusions'
                  ? <Check size={18} className="mt-0.5 shrink-0 text-green-600" />
                  : <X size={18} className="mt-0.5 shrink-0 text-red-500" />}
                {t}
              </li>
            ))}
          </ul>
        )}

        {tab === 'hotels' && (
          <ul className="space-y-3">
            {trip.hotels.map((h) => (
              <li key={h.name} className="flex items-center justify-between rounded-xl border border-orange-100 px-4 py-3">
                <div>
                  <p className="font-semibold">{h.name}</p>
                  <p className="text-sm text-neutral-600">{h.city}</p>
                </div>
                <div className="flex text-saffron">
                  {Array.from({ length: h.stars }).map((_, i) => <Star key={i} size={16} className="fill-saffron" />)}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}