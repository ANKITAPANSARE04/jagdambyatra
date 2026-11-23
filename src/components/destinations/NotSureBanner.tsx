import { ArrowRight, Headset, Plane } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../../data/contact'

const msg = encodeURIComponent('Hello Jagdamb Yatra, I need help choosing a destination.')

export default function NotSureBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-orange-50 to-orange-100/70 px-8 py-7 md:flex-row">
        <div className="flex items-center gap-6">
          <Plane size={52} strokeWidth={1.3} className="hidden shrink-0 -rotate-12 text-maroon md:block" />
          <div className="border-saffron md:border-l-2 md:pl-6">
            <h2 className=" text-3xl font-bold text-maroon">Not Sure Where to Go?</h2>
            <p className="mt-1 text-neutral-800">
              Get personalised trip recommendations from our travel experts.
            </p>
          </div>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}
          target="_blank"
          rel="noreferrer"
          className="flex shrink-0 items-center gap-3 rounded-full bg-saffron px-7 py-3.5 font-semibold text-white shadow hover:bg-saffron-dark"
        >
          <Headset size={22} /> Talk to Our Travel Expert <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}