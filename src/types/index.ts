export type TripBadge = 'Bookings Open' | 'Popular' | 'International'

export interface Trip {
  id: number
  title: string
  badge: TripBadge
  image: string
  date?: string
  duration: string
  price?: number // undefined = "Price on request"
}

export interface Destination {
  name: string
  image: string
}

export type GalleryItem = {
  id: number
  type: 'photo' | 'video'
  src: string            // image path, or the thumbnail for videos
  video?: string         // video file path (videos only)
  duration?: string      // e.g. "0:58"
  alt: string
  span: string           // desktop column span class (12-column grid)
}

export type Testimonial = {
  id: number
  text: string
  name: string
  city: string
  avatar?: string
}
export type DestinationCard = {
  slug: string
  name: string
  blurb: string
  image: string
  region: 'india' | 'international'
  zone: string        // for the "Select Region" filter
  days: number        // typical trip length, for the "Trip Duration" filter
  price: number       // starting price, for "Price Range" and "Sort By"
  upcoming: boolean   // has a trip with bookings open
}

export type TripDetail = {
  slug: string
  title: string
  badge: string                       // e.g. "International Tour"
  intro: string
  duration: string                    // "5 Days / 4 Nights"
  from: string                        // "Mumbai"
  places: string                      // "Dubai & Abu Dhabi"
  heroImage: string
  gallery: string[]
  price: number
  advance: number
  departure: string                   // "10 Feb 2027 – 14 Feb 2027"
  about: string
  highlights: { icon: string; label: string }[]   // icon = lucide icon name
  itinerary: { day: number; title: string; details: string }[]
  inclusions: string[]
  exclusions: string[]
  hotels: { name: string; city: string; stars: number }[]
}




































// may not required in future
export interface Trip {
  id: number
  slug: string          // add this
  title: string
  badge: TripBadge
  image: string
  date?: string
  duration: string
  price?: number
}