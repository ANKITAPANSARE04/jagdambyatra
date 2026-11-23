import { LayoutGrid, CalendarDays, Globe, Landmark } from 'lucide-react'
import clsx from 'clsx'
import { categoryTabs, type CategoryKey } from '../../data/destinationPage'

const icons = {
  all: LayoutGrid,
  upcoming: CalendarDays,
  india: Landmark,
  international: Globe,
}

export default function CategoryTabs({
  value,
  onChange,
}: {
  value: CategoryKey
  onChange: (k: CategoryKey) => void
}) {
  return (
    <section className="relative z-10 mx-auto -mt-14 max-w-7xl px-4">
      <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-3 shadow-lg lg:grid-cols-4">
        {categoryTabs.map((t) => {
          const Icon = icons[t.key]
          const active = value === t.key
          return (
            <button
              key={t.key}
              onClick={() => onChange(t.key)}
              className={clsx(
                'flex items-center gap-4 rounded-xl px-5 py-4 text-left transition',
                active ? 'bg-maroon text-white shadow' : 'bg-orange-50/70 hover:bg-orange-100'
              )}
            >
              <Icon size={34} strokeWidth={1.5} className={clsx('shrink-0', active ? 'text-white' : 'text-saffron')} />
              <span className="leading-tight">
                <span className="block  text-lg font-bold">{t.title}</span>
                <span className={clsx('text-sm', active ? 'text-white/85' : 'text-neutral-600')}>{t.sub}</span>
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}