import { LayoutGrid, Image as ImageIcon, Video, Quote } from 'lucide-react'
import clsx from 'clsx'
import { filters, type Filter } from '../../data/customers'

const meta = {
  all: { label: 'All', icon: LayoutGrid },
  photos: { label: 'Photos', icon: ImageIcon },
  videos: { label: 'Videos', icon: Video },
  testimonials: { label: 'Testimonials', icon: Quote },
}

export default function FilterTabs({ value, onChange }: { value: Filter; onChange: (f: Filter) => void }) {
  return (
    <div className="flex justify-center px-4">
      <div className="flex max-w-full gap-1 overflow-x-auto rounded-full bg-orange-50 p-1.5 shadow-sm">
        {filters.map((f) => {
          const { label, icon: Icon } = meta[f]
          return (
            <button
              key={f}
              onClick={() => onChange(f)}
              className={clsx(
                'flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition',
                value === f ? 'bg-maroon text-white shadow' : 'text-neutral-800 hover:text-saffron'
              )}
            >
              <Icon size={18} /> {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}