import { useState } from 'react'
import CustomersHero from '../components/customers/CustomersHero'
import StatsBar from '../components/about/StatsBar'
import FilterTabs from '../components/customers/FilterTabs'
import GalleryGrid from '../components/customers/GalleryGrid'
import Lightbox from '../components/customers/Lightbox'
import TestimonialSlider from '../components/customers/TestimonialSlider'
import ShareExperience from '../components/customers/ShareExperience'
import { gallery, type Filter } from '../data/customers'
import type { GalleryItem } from '../types'

export default function HappyCustomers() {
  const [filter, setFilter] = useState<Filter>('all')
  const [open, setOpen] = useState<GalleryItem | null>(null)

  const items = gallery.filter((g) =>
    filter === 'all' ? true : filter === 'photos' ? g.type === 'photo' : g.type === 'video'
  )
  const showGallery = filter !== 'testimonials'

  return (
    <>
      <CustomersHero />

      {/* stats bar overlaps the bottom of the hero */}
      <div className="relative z-10 -mt-14">
        <StatsBar />
      </div>

      <div className="mt-10">
        <FilterTabs value={filter} onChange={setFilter} />
      </div>

      {showGallery && <GalleryGrid items={items} onOpen={setOpen} />}
      <TestimonialSlider />
      <ShareExperience />
      <Lightbox item={open} onClose={() => setOpen(null)} />
    </>
  )
}