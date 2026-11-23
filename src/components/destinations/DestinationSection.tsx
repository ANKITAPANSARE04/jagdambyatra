import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import type { DestinationCard } from '../../types'

export default function DestinationSection({
  title, linkLabel, linkTo, items,
}: {
  title: string
  linkLabel: string
  linkTo: string
  items: DestinationCard[]
}) {
  if (items.length === 0) return null

  return (
    <section className="mx-auto max-w-7xl px-4 pt-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className=" text-3xl font-bold text-maroon">{title}</h2>
          <div className="mt-2 h-0.5 w-12 bg-saffron" />
        </div>
        <Link to={linkTo} className="flex items-center gap-1 text-sm font-semibold text-maroon hover:text-saffron">
          {linkLabel} <ArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((d) => (
          <Link
            key={d.slug}
            to={`/destinations/${d.slug}`}
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-36 overflow-hidden">
              <img
                src={d.image}
                alt={d.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between gap-2 px-4 py-3">
              <div className="min-w-0">
                <h3 className="flex items-center gap-1.5  text-lg font-bold text-maroon-dark">
                  <MapPin size={16} className="shrink-0 text-saffron" /> {d.name}
                </h3>
                <p className="truncate text-xs text-neutral-600">{d.blurb}</p>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-saffron transition group-hover:bg-saffron group-hover:text-white">
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}