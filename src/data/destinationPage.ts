import type { DestinationCard } from '../types'

export const destinationCards: DestinationCard[] = [
  { slug: 'uttarakhand', name: 'Uttarakhand', blurb: 'Char Dham, Kedarnath, Badrinath & more',
    image: '/images/dest/uttarakhand.jpg', region: 'india', zone: 'North India', days: 14, price: 100000, upcoming: true },
  { slug: 'rajasthan', name: 'Rajasthan', blurb: 'Jaipur, Udaipur, Jodhpur, Jaisalmer & more',
    image: '/images/dest/rajasthan.jpg', region: 'india', zone: 'West India', days: 10, price: 32000, upcoming: true },
  { slug: 'kerala', name: 'Kerala', blurb: 'Munnar, Thekkady, Alleppey, Kovalam & more',
    image: '/images/dest/kerala.jpg', region: 'india', zone: 'South India', days: 10, price: 38000, upcoming: true },
  { slug: 'south-india', name: 'South India', blurb: 'Rameshwaram, Madurai, Kanyakumari & more',
    image: '/images/dest/south-india.jpg', region: 'india', zone: 'South India', days: 8, price: 30000, upcoming: false },

  { slug: 'dubai', name: 'Dubai', blurb: 'Skyscrapers, desert safari, shopping & more',
    image: '/images/dest/dubai.jpg', region: 'international', zone: 'Middle East', days: 5, price: 88000, upcoming: true },
  { slug: 'singapore', name: 'Singapore', blurb: 'Marina Bay, Sentosa, city tour & more',
    image: '/images/dest/singapore.jpg', region: 'international', zone: 'South-East Asia', days: 5, price: 95000, upcoming: false },
  { slug: 'thailand', name: 'Thailand', blurb: 'Beaches, islands, shopping & more',
    image: '/images/dest/thailand.jpg', region: 'international', zone: 'South-East Asia', days: 6, price: 72000, upcoming: false },
  { slug: 'bali', name: 'Bali', blurb: 'Temples, beaches, culture & more',
    image: '/images/dest/bali.jpg', region: 'international', zone: 'South-East Asia', days: 6, price: 85000, upcoming: false },
]

export const regionOptions = ['North India', 'West India', 'South India', 'Middle East', 'South-East Asia']

export const durationOptions = [
  { label: 'Up to 5 days', test: (d: number) => d <= 5 },
  { label: '6 – 9 days', test: (d: number) => d >= 6 && d <= 9 },
  { label: '10+ days', test: (d: number) => d >= 10 },
]

export const priceOptions = [
  { label: 'Under ₹40,000', test: (p: number) => p < 40000 },
  { label: '₹40,000 – ₹90,000', test: (p: number) => p >= 40000 && p <= 90000 },
  { label: 'Above ₹90,000', test: (p: number) => p > 90000 },
]

export const sortOptions = [
  { value: 'popular', label: 'Popular' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name (A – Z)' },
]

export const categoryTabs = [
  { key: 'all', title: 'All Trips', sub: 'Explore all our tours' },
  { key: 'upcoming', title: 'Upcoming Trips', sub: 'Book your next journey' },
  { key: 'india', title: 'India Tours', sub: "Discover India's beauty" },
  { key: 'international', title: 'International Tours', sub: 'Explore the world' },
] as const

export type CategoryKey = (typeof categoryTabs)[number]['key']