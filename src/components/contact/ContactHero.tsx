import heroImg from '../../assets/images/banner.jpg'

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-y-0 right-0 hidden h-full w-3/5 object-cover object-center md:block"
      />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-ivory via-ivory/80 to-transparent md:block" />

      <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-12 md:pb-32">
        <p className="flex items-center gap-3 text-sm font-semibold tracking-wider text-saffron">
          CONTACT US <span className="h-px w-10 bg-saffron" />
        </p>
        <h1 className="mt-3  text-4xl font-bold leading-tight text-maroon md:text-5xl">
          Get in Touch with
          <span className="block text-saffron">Jagdamb Yatra</span>
        </h1>
        <p className="mt-4 max-w-lg text-neutral-800">
          Have a question, need trip details or want to book your seat? We’re here to help you plan
          your next journey!
        </p>
      </div>
    </section>
  )
}