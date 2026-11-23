import dummyimg from '../../assets/images/banner.jpg';

export default function CustomersHero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={dummyimg}
        alt="Happy travellers taking a selfie"
        className="absolute inset-y-0 hidden h-full w-full object-cover object-top md:block"
      />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-ivory via-ivory/70 to-transparent md:block" />

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-12 md:pb-28 md:pt-14">
        <div className="max-w-xl">
          <p className="flex items-center gap-3 text-sm font-semibold tracking-wider text-saffron">
            HAPPY CUSTOMERS <span className="h-px w-6 bg-saffron" />
          </p>
          <h1 className="mt-3  text-4xl font-bold leading-tight text-neutral-900 md:text-5xl">
            Real People. Real Journeys.
            <span className="block text-saffron">Happy Travellers!</span>
          </h1>
          <p className="mt-4 max-w-md text-neutral-700">
            Heartfelt moments, joyful experiences and memories created together with Jagdamb Yatra.
          </p>
        </div>
        {/* mobile image */}
        <img src={dummyimg} alt="" className="mt-6 h-56 w-full rounded-2xl object-cover md:hidden" />
      </div>
    </section>
  )
}