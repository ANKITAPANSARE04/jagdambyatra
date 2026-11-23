// The shape of the data that GET /api/public/trips/:slug returns (only the parts we display)

export interface TripDay {
  id: string
  dayNumber: number
  title: string
  description: string
  meals: string | null
  stay: string | null
  activities: string[]
}

export interface TripPhoto {
  id: string
  url: string
  sortOrder: number
}

export interface PublicTrip {
  id: string
  title: string
  slug: string
  destination: string
  shortDesc: string
  description: string
  price: string // money arrives as text, for example "24999"
  discountPrice: string | null
  durationDays: number
  durationNights: number
  maxSeats: number
  availableSeats: number
  startDate: string | null
  endDate: string | null
  departureFrom: string | null
  coverImageUrl: string | null
  isFeatured: boolean
  highlights: string[]
  inclusions: string[]
  exclusions: string[]
  terms: string | null
  seoTitle: string | null
  seoDescription: string | null
  itinerary: TripDay[]
  images: TripPhoto[]
}
