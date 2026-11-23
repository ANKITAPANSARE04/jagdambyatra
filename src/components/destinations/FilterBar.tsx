import { Search, MapPin, CalendarDays, IndianRupee, ArrowUpDown, ChevronDown } from 'lucide-react'
import {
  regionOptions, durationOptions, priceOptions, sortOptions,
} from '../../data/destinationPage'

export type Filters = {
  search: string
  region: string
  duration: string
  price: string
  sort: string
}

export const emptyFilters: Filters = { search: '', region: '', duration: '', price: '', sort: 'popular' }

function Select({
  icon: Icon, value, onChange, placeholder, options,
}: {
  icon: typeof MapPin
  value: string
  onChange: (v: string) => void
  placeholder: string
  options: { value: string; label: string }[]
}) {
  return (
    <label className="relative flex items-center rounded-xl border border-neutral-200 bg-white">
      <Icon size={18} className="pointer-events-none absolute left-3 text-saffron" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-xl bg-transparent py-3 pl-10 pr-9 text-sm font-medium outline-none focus:ring-2 focus:ring-saffron/30"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <ChevronDown size={16} className="pointer-events-none absolute right-3 text-neutral-500" />
    </label>
  )
}

export default function FilterBar({
  filters, onChange,
}: {
  filters: Filters
  onChange: (f: Filters) => void
}) {
  const set = (k: keyof Filters) => (v: string) => onChange({ ...filters, [k]: v })

  return (
    <section className="mx-auto mt-8 max-w-7xl px-4">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1fr_repeat(4,minmax(0,170px))]">
        <label className="relative flex items-center rounded-xl border border-neutral-200 bg-white md:col-span-2 lg:col-span-1">
          <Search size={18} className="pointer-events-none absolute left-3 text-saffron" />
          <input
            value={filters.search}
            onChange={(e) => set('search')(e.target.value)}
            placeholder="Search destinations, tours or places..."
            className="w-full rounded-xl bg-transparent py-3 pl-10 pr-3 text-sm outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-saffron/30"
          />
        </label>

        <Select icon={MapPin} value={filters.region} onChange={set('region')} placeholder="Select Region"
                options={regionOptions.map((r) => ({ value: r, label: r }))} />
        <Select icon={CalendarDays} value={filters.duration} onChange={set('duration')} placeholder="Trip Duration"
                options={durationOptions.map((d) => ({ value: d.label, label: d.label }))} />
        <Select icon={IndianRupee} value={filters.price} onChange={set('price')} placeholder="Price Range"
                options={priceOptions.map((p) => ({ value: p.label, label: p.label }))} />
        <Select icon={ArrowUpDown} value={filters.sort === 'popular' ? '' : filters.sort}
                onChange={(v) => set('sort')(v || 'popular')} placeholder="Sort By"
                options={sortOptions.filter((s) => s.value !== 'popular')} />
      </div>
    </section>
  )
}