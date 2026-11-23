import { stats } from '../../data/about'

export default function StatsBar() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-orange-100 bg-orange-50/70 px-6 py-6 md:grid-cols-4 md:divide-x md:divide-orange-200">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center justify-center gap-3 px-2">
            <Icon size={38} strokeWidth={1.5} className="shrink-0 text-saffron" />
            <div className="leading-tight">
              <p className=" text-xl font-bold text-maroon-dark">{value}</p>
              <p className="text-sm text-neutral-600">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}