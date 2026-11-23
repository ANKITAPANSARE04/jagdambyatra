import { leaderPoints } from '../../data/about'
import leaderImg from '../../assets/images/banner.jpg'

export default function TourLeader() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14">
      <div className="grid gap-8 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm md:grid-cols-[300px_1fr]">
        <img src={leaderImg} alt="Shri Bhausaheb Kawade Patil"
             className="h-64 w-full rounded-2xl object-cover md:h-full" />
        <div className="self-center">
          <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold tracking-wide text-saffron">
            MEET OUR TOUR LEADER
          </span>
          <h2 className="mt-3  text-3xl font-bold text-maroon">Shri Bhausaheb Kawade Patil</h2>
          <p className="mt-2 max-w-xl text-neutral-700">
            The guiding force behind Jagdamb Yatra, he personally accompanies groups and ensures a
            smooth, enriching and safe travel experience.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {leaderPoints.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 rounded-xl border border-orange-100 px-4 py-3">
                <Icon size={26} strokeWidth={1.5} className="shrink-0 text-saffron" />
                <span className="text-sm font-semibold leading-snug">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}