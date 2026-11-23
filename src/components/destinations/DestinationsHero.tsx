
import dumban from '../../assets/images/banner.jpg'
export default function DestinationsHero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={dumban}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/80 to-transparent md:via-ivory/50" />

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-10 md:pb-28">
        <p className="flex items-center gap-3 text-sm font-semibold tracking-wider text-saffron">
          DESTINATIONS <span className="h-px w-6 bg-saffron" />
        </p>
        <h1 className="mt-3 max-w-md  text-4xl font-bold leading-tight text-maroon-dark md:text-5xl">
          Explore Incredible Destinations with
          <span className="block text-saffron">Jagdamb Yatra</span>
        </h1>
        {/* <p className="mt-4 max-w-md text-neutral-800">
          From sacred Yatras to scenic getaways, discover handpicked destinations for every traveller.
        </p> */}
      </div>
    </section>
  )
}