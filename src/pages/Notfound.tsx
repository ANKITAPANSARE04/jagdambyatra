import { Link } from 'react-router-dom'
import { Home, MapPin } from 'lucide-react'
import illustration from '../assets/images/notfound.png'
import illustrationMountain from '../assets/images/404mountain.png'


export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory to-orange-50/60">

      <img src={illustrationMountain} alt="404 – Page not found" className="absolute bottom-0 left-0 w-full select-none object-cover object-bottom" draggable={false} />
      {/* soft mountains at the bottom */}
      {/* <svg
        aria-hidden="true"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 h-32 w-full text-orange-200/50 md:h-44"
      >
        <path
          fill="currentColor"
          d="M0 200V120l120-60 110 70 140-90 150 100 130-70 160 90 150-110 140 90 120-50 120 80v80z"
        />
      </svg> */}

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-24 pt-10 text-center md:pb-32 md:pt-14">
        {illustration ? (
          <img
            src={illustration}
            alt="404 – Page not found"
            className="w-full max-w-3xl select-none rounded-3xl object-cover object-center shadow-lg md:max-w-4xl"
            draggable={false}
          />
        ) : (
          <p className=" text-[9rem] font-bold leading-none text-saffron">404</p>
        )}

        <h1 className="mt-8  text-3xl font-bold leading-tight text-maroon-dark md:text-5xl">
          Oops! The Page You’re Looking For
          <span className="block text-saffron">Could Not Be Found.</span>
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-800">
          It may have been moved, removed, or the link might be incorrect. Let’s get you back on
          the right journey.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-full bg-saffron px-9 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-saffron-dark"
          >
            <Home size={26} strokeWidth={1.8} /> Go to Home
          </Link>
          <Link
            to="/#trips"
            className="flex items-center gap-3 rounded-full border border-maroon bg-white/60 px-9 py-4 text-lg font-semibold text-maroon transition hover:bg-maroon hover:text-white"
          >
            <MapPin size={26} strokeWidth={1.8} /> Explore Trips
          </Link>
        </div>
      </div>
    </section>
  )
}