import { MessageCircle, Phone } from 'lucide-react'
import heroImg from '../../assets/images/banner.jpg'

export default function AboutHero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
      <div>
        <p className="flex items-center gap-3 text-sm font-semibold tracking-wider text-saffron">
          ABOUT US <span className="h-px w-8 bg-saffron" />
        </p>
        <h1 className="mt-4  text-4xl font-bold leading-tight text-neutral-900 md:text-5xl">
          Journeys of Faith, Comfort in Every Mile,{' '}
          <span className="text-saffron">Memories for a Lifetime.</span>
        </h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-700">
          Jagdamb Yatra Group, Mumbai is a travel company dedicated to curating devotional and
          group journeys that are comfortable, well-organized and truly memorable.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <a href="https://wa.me/919082686465" target="_blank" rel="noreferrer"
             className="flex items-center gap-2 rounded-full bg-saffron px-6 py-3 text-sm font-semibold text-white shadow hover:bg-saffron-dark">
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
          <a href="tel:9076798465"
             className="flex items-center gap-2 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon hover:bg-maroon hover:text-white">
            <Phone size={18} /> Call Us
          </a>
        </div>
      </div>

      <img
        src={heroImg}
        alt="Travellers enjoying the mountains"
        className="h-72 w-full rounded-[2rem_0.5rem_2rem_0.5rem] object-cover shadow-lg md:h-80"
      />
    </section>
  )
}