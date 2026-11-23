import { Upload } from 'lucide-react'
import dumimg from '../../assets/images/banner.jpg'

const message = encodeURIComponent(
  'Hello Jagdamb Yatra, I would like to share my travel experience (photos / videos / review).'
)

export default function ShareExperience() {
  return (
    <section className="relative overflow-hidden bg-orange-50">
      <img
        src={dumimg}
        alt=""
        className="absolute inset-y-0 left-0 hidden h-full w-1/3 object-cover md:block"
      />
      <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-transparent via-transparent to-orange-50 md:block" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row md:pl-[36%]">
        <div className="text-center md:text-left">
          <h2 className=" text-3xl font-bold text-maroon">Share Your Travel Experience</h2>
          <p className="mt-2 max-w-lg text-sm text-neutral-700">
            Were you a part of our journey? Send us your photos, videos or a short review and get
            featured on our Happy Customers page!
          </p>
        </div>
        <a
          href={`https://wa.me/919082686465?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="flex shrink-0 items-center gap-2 rounded-full bg-saffron px-7 py-3.5 font-semibold text-white shadow hover:bg-saffron-dark"
        >
          <Upload size={18} /> Share Your Experience
        </a>
      </div>
    </section>
  )
}