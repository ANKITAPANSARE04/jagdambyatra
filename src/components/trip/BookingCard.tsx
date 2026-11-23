import { CalendarDays, Clock, Plane, CreditCard, MessageCircle, Phone } from 'lucide-react'
import type { TripDetail } from '../../types'
import { WHATSAPP_NUMBER, PHONES } from '../../data/contact'

const inr = (n: number) => '₹' + n.toLocaleString('en-IN')

export default function BookingCard({ trip }: { trip: TripDetail }) {
  const msg = encodeURIComponent(
    `Hello Jagdamb Yatra, I am interested in "${trip.title}" (${trip.departure}). Please share details.`
  )
  const rows = [
    { icon: CalendarDays, label: 'Departure Date', value: trip.departure },
    { icon: Clock, label: 'Duration', value: trip.duration },
    { icon: Plane, label: 'Departure City', value: trip.from },
  ]

  return (
    <aside className="rounded-2xl border border-orange-100 bg-white p-6 shadow-md lg:sticky lg:top-24">
      <h2 className=" text-2xl font-bold text-maroon">Book Your Trip</h2>

      <p className="mt-4 flex items-baseline gap-2">
        <span className=" text-3xl font-bold text-saffron-dark" translate="no">{inr(trip.price)}</span>
        <span className="text-sm text-neutral-600">/ per person</span>
      </p>

      <div className="mt-4 flex items-center justify-between rounded-lg bg-orange-100/70 px-4 py-3 text-sm">
        <span><b>Payment</b> (to book your seat)</span>
        <b translate="no">{inr(trip.advance)}</b>
      </div>

      <ul className="mt-4 divide-y divide-orange-100 text-sm">
        {rows.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex items-center justify-between gap-3 py-3">
            <span className="flex items-center gap-2 text-neutral-600">
              <Icon size={16} className="text-saffron" /> {label}
            </span>
            <b className="text-right">{value}</b>
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          `Hello, I want to book my seat for "${trip.title}" and pay the advance of ${inr(trip.advance)}.`
        )}`}
        target="_blank"
        rel="noreferrer"
        className="mt-4 flex items-center justify-center gap-2 rounded-full bg-saffron px-5 py-3.5 font-semibold text-white shadow hover:bg-saffron-dark"
      >
        <CreditCard size={20} /> Book Your Seat (Pay Advance)
      </a>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-full border border-green-600 px-3 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-50"
        >
          <MessageCircle size={18} /> Enquire on WhatsApp
        </a>
        <a
          href={`tel:${PHONES[0]}`}
          className="flex items-center justify-center gap-2 rounded-full border border-maroon px-3 py-2.5 text-sm font-semibold text-maroon hover:bg-maroon hover:text-white"
        >
          <Phone size={18} /> Call Us
        </a>
      </div>
    </aside>
  )
}