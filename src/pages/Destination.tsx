import { useMemo, useState } from 'react'
import { SearchX } from 'lucide-react'
import DestinationsHero from '../components/destinations/DestinationsHero'
import CategoryTabs from '../components/destinations/CategoryTabs'
import FilterBar, { emptyFilters, type Filters } from '../components/destinations/FilterBar'
import DestinationSection from '../components/destinations/DestinationSection'
import NotSureBanner from '../components/destinations/NotSureBanner' 

import {
  destinationCards, durationOptions, priceOptions, type CategoryKey,
} from '../data/destinationPage'

export default function Destinations() {
  const [category, setCategory] = useState<CategoryKey>('all')
  const [filters, setFilters] = useState<Filters>(emptyFilters)

  const results = useMemo(() => {
    const q = filters.search.trim().toLowerCase()
    const dur = durationOptions.find((d) => d.label === filters.duration)
    const pr = priceOptions.find((p) => p.label === filters.price)

    const list = destinationCards.filter((d) => {
      if (category === 'upcoming' && !d.upcoming) return false
      if (category === 'india' && d.region !== 'india') return false
      if (category === 'international' && d.region !== 'international') return false
      if (q && !`${d.name} ${d.blurb}`.toLowerCase().includes(q)) return false
      if (filters.region && d.zone !== filters.region) return false
      if (dur && !dur.test(d.days)) return false
      if (pr && !pr.test(d.price)) return false
      return true
    })

    switch (filters.sort) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break
      case 'price-desc': list.sort((a, b) => b.price - a.price); break
      case 'name': list.sort((a, b) => a.name.localeCompare(b.name)); break
    }
    return list
  }, [category, filters])

  const india = results.filter((d) => d.region === 'india')
  const intl = results.filter((d) => d.region === 'international')

  const reset = () => {
    setFilters(emptyFilters)
    setCategory('all')
  }

  return (
    <>
      <DestinationsHero />
      <CategoryTabs value={category} onChange={setCategory} />
      <FilterBar filters={filters} onChange={setFilters} />

      {results.length === 0 ? (
        <div className="mx-auto max-w-md px-4 py-16 text-center">
          <SearchX size={44} className="mx-auto text-saffron" strokeWidth={1.5} /> 
          <h3 className="mt-3  text-2xl font-bold text-maroon">No destinations found</h3>
          <p className="mt-1 text-neutral-600">Try changing your search or filters.</p>
          <button onClick={reset} className="mt-4 rounded-full bg-saffron px-6 py-2.5 font-semibold text-white hover:bg-saffron-dark">
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <DestinationSection
            title="Popular Destinations in India"
            linkLabel="View All India Tours"
            linkTo="/#trips"
            items={india}
          />
          <DestinationSection
            title="International Destinations"
            linkLabel="View All International Tours"
            linkTo="/#trips"
            items={intl}
          />
        </>
      )}

      <NotSureBanner />
    </>
  )
}