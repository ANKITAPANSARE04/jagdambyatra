import { useEffect, useState } from 'react'
import { useJagdambTrip } from './useJagdambTrip'

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })
const formatINR = (v: string | number) => inr.format(Number(v))
// Trip dates are calendar dates, so they are shown in UTC to avoid showing the day before
const formatDate = (iso: string | null) =>
  iso ? new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }) : ''

interface Props {
  slug: string // the trip's "web address ending", for example "kedarnath-yatra"
  enquireHref?: string // optional: where the "Enquire" button should go. Leave out to hide the button.
  className?: string
}

function Photos({ urls, title }: { urls: string[]; title: string }) {
  const [active, setActive] = useState(0)
  if (urls.length === 0) return null
  return (
    <div>
      <img
        src={urls[active]}
        alt={`${title}, photo ${active + 1} of ${urls.length}`}
        className="aspect-[16/10] w-full rounded-xl object-cover"
      />
      {urls.length > 1 && (
        <ul className="mt-3 grid grid-cols-6 gap-2">
          {urls.map((url, i) => (
            <li key={url}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === active}
                className={`block w-full overflow-hidden rounded-lg border-2 ${i === active ? 'border-amber-700' : 'border-transparent'}`}
              >
                <img src={url} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Points({ title, items, mark, markClass }: { title: string; items: string[]; mark: string; markClass: string }) {
  if (items.length === 0) return null
  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-slate-700">
            <span aria-hidden="true" className={markClass}>
              {mark}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

// STEP C: the display. <TripView slug="kedarnath-yatra" /> loads the trip and shows everything.
export function TripView({ slug, enquireHref, className }: Props) {
  const { trip, error, loading, retry } = useJagdambTrip(slug)

  // Browser tab title
  useEffect(() => {
    if (!trip) return
    const previous = document.title
    document.title = trip.seoTitle || trip.title
    return () => {
      document.title = previous
    }
  }, [trip])

  if (loading) return <div className={className} aria-busy="true"><div className="h-96 animate-pulse rounded-xl bg-slate-100" /></div>

  if (error || !trip) {
    const notFound = error?.status === 404
    return (
      <div className={`${className ?? ''} py-12 text-center`}>
        <h2 className="text-2xl font-bold text-slate-900">{notFound ? 'This trip is not available' : 'Something went wrong'}</h2>
        <p className="mt-2 text-slate-600">
          {notFound ? 'It may not be published yet, or it may have been removed.' : error?.message}
        </p>
        {!notFound && (
          <button type="button" onClick={retry} className="mt-5 rounded-lg border border-slate-300 px-4 py-2 font-medium">
            Try again
          </button>
        )}
      </div>
    )
  }

  // Cover photo first, then the gallery in the order the admin chose (no repeats)
  const urls = [trip.coverImageUrl, ...[...trip.images].sort((a, b) => a.sortOrder - b.sortOrder).map((i) => i.url)]
    .filter((u): u is string => Boolean(u))
    .filter((u, i, all) => all.indexOf(u) === i)
  const days = [...trip.itinerary].sort((a, b) => a.dayNumber - b.dayNumber)
  const soldOut = trip.availableSeats <= 0

  return (
    <article className={className}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div>
          <Photos urls={urls} title={trip.title} />

          <h1 className="mt-8 text-3xl font-bold text-slate-900">{trip.title}</h1>
          <p className="mt-1 text-slate-600">
            {trip.destination} · {trip.durationDays} days / {trip.durationNights} nights
            {trip.departureFrom ? ` · departs from ${trip.departureFrom}` : ''}
          </p>
          <p className="mt-6 whitespace-pre-line text-slate-700">{trip.description}</p>

          {trip.highlights.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-slate-900">Highlights</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {trip.highlights.map((h) => (
                  <li key={h} className="rounded-lg bg-amber-50 px-4 py-2 text-slate-800">
                    {h}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {days.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-slate-900">Day by day</h2>
              <div className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200">
                {days.map((day, i) => (
                  <details key={day.id} open={i === 0} className="p-4">
                    <summary className="cursor-pointer font-semibold text-slate-900">
                      Day {day.dayNumber}: {day.title}
                    </summary>
                    <p className="mt-3 whitespace-pre-line text-slate-700">{day.description}</p>
                    {day.activities.length > 0 && (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
                        {day.activities.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    )}
                    {(day.meals || day.stay) && (
                      <p className="mt-3 text-sm text-slate-500">
                        {day.meals ? `Meals: ${day.meals}` : ''}
                        {day.meals && day.stay ? ' · ' : ''}
                        {day.stay ? `Stay: ${day.stay}` : ''}
                      </p>
                    )}
                  </details>
                ))}
              </div>
            </section>
          )}

          {(trip.inclusions.length > 0 || trip.exclusions.length > 0) && (
            <section className="mt-10 grid gap-8 sm:grid-cols-2">
              <Points title="What is included" items={trip.inclusions} mark="✓" markClass="text-emerald-700" />
              <Points title="What is not included" items={trip.exclusions} mark="✕" markClass="text-red-700" />
            </section>
          )}

          {trip.terms && (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-slate-900">Terms and conditions</h2>
              <p className="mt-3 whitespace-pre-line text-sm text-slate-600">{trip.terms}</p>
            </section>
          )}
        </div>

        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-6 lg:sticky lg:top-6">
          {trip.discountPrice ? (
            <>
              <p className="text-3xl font-bold text-slate-900">{formatINR(trip.discountPrice)}</p>
              <p className="text-slate-400 line-through">{formatINR(trip.price)}</p>
            </>
          ) : (
            <p className="text-3xl font-bold text-slate-900">{formatINR(trip.price)}</p>
          )}
          <p className="text-sm text-slate-500">per person</p>

          <dl className="mt-5 space-y-2 text-slate-700">
            {trip.startDate && (
              <div className="flex justify-between gap-3">
                <dt>Starts</dt>
                <dd className="font-medium">{formatDate(trip.startDate)}</dd>
              </div>
            )}
            {trip.endDate && (
              <div className="flex justify-between gap-3">
                <dt>Ends</dt>
                <dd className="font-medium">{formatDate(trip.endDate)}</dd>
              </div>
            )}
            <div className="flex justify-between gap-3">
              <dt>Seats left</dt>
              <dd className={`font-medium ${soldOut ? 'text-red-700' : ''}`}>{soldOut ? 'Fully booked' : trip.availableSeats}</dd>
            </div>
          </dl>

          {enquireHref && (
            <a
              href={enquireHref}
              className="mt-6 block rounded-lg bg-amber-700 px-4 py-3 text-center font-semibold text-white hover:bg-amber-800"
            >
              {soldOut ? 'Ask about the next batch' : 'Enquire about this trip'}
            </a>
          )}
        </aside>
      </div>
    </article>
  )
}
