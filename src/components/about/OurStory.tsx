import groupImg from '../../assets/images/banner.jpg'

export default function OurStory() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2">
      <div className="relative">
        <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-2xl bg-saffron" />
        <img src={groupImg} alt="Jagdamb Yatra Group travellers"
             className="relative h-72 w-full rounded-2xl object-cover shadow-lg" />
      </div>
      <div>
        <h2 className=" text-3xl font-bold text-maroon">Our Story</h2>
        <p className="mt-4 leading-relaxed text-neutral-700">
          What began as a passion for travel and devotion has grown into a trusted travel group
          for families, senior citizens and spiritual travellers across Mumbai and beyond. Our
          goal is simple — to make every yatra safe, comfortable and filled with togetherness.
        </p>
      </div>
    </section>
  )
}