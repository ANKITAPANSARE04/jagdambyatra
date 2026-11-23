import type { TripDetail } from '../types'

export const tripDetails: TripDetail[] = [
  {
    slug: 'dubai-trip-2027',
    title: 'Dubai Trip 2027',
    badge: 'International Tour',
    intro: 'Explore the glamour, culture and iconic experiences of Dubai with Jagdamb Yatra.',
    duration: '5 Days / 4 Nights',
    from: 'Mumbai',
    places: 'Dubai & Abu Dhabi',
    heroImage: '/images/trips/dubai/hero.jpg',
    gallery: [
      '/images/trips/dubai/g1.jpg',
      '/images/trips/dubai/g2.jpg',
      '/images/trips/dubai/g3.jpg',
      '/images/trips/dubai/g4.jpg',
    ],
    price: 88000,
    advance: 25000,
    departure: '10 Feb 2027 – 14 Feb 2027',
    about:
      'A well-planned Dubai tour that takes you to world-famous attractions, a thrilling desert safari, a cruise dinner and a spiritual visit to the BAPS Temple in Abu Dhabi.',
    highlights: [
      { icon: 'Ship', label: 'Cruise Dinner' },
      { icon: 'Building2', label: 'Burj Khalifa (124th Floor)' },
      { icon: 'Flower2', label: 'Miracle Garden' },
      { icon: 'Landmark', label: 'BAPS Temple (Abu Dhabi)' },
      { icon: 'Car', label: 'Desert Safari' },
    ],
    itinerary: [
      { day: 1, title: 'Mumbai to Dubai – Welcome to the City of Dreams',
        details: 'Flight from Mumbai, airport pick-up, hotel check-in and an evening at leisure.' },
      { day: 2, title: 'Dubai City Tour – Burj Khalifa & Dubai Mall',
        details: 'Half-day city tour, visit to the 124th floor of Burj Khalifa, then free time at Dubai Mall.' },
      { day: 3, title: 'Miracle Garden – Global Village',
        details: 'Morning at Miracle Garden, followed by an evening at Global Village with shopping and shows.' },
      { day: 4, title: 'Desert Safari – Dune Bashing & Cultural Show',
        details: 'Afternoon desert safari with dune bashing, camel ride, BBQ dinner and a cultural show.' },
      { day: 5, title: 'Abu Dhabi – BAPS Temple – Return to Mumbai',
        details: 'Day trip to Abu Dhabi to visit the BAPS Temple, then transfer to the airport for the flight home.' },
    ],
    inclusions: [
      'Return flights from Mumbai',
      '4 nights hotel stay with breakfast',
      'Airport transfers and sightseeing by AC vehicle',
      'Desert safari with BBQ dinner',
      'Cruise dinner',
      'Experienced tour leader throughout',
    ],
    exclusions: [
      'UAE visa fees (unless mentioned)',
      'Lunch and personal expenses',
      'Travel insurance',
      'Optional activities and tips',
      'Anything not mentioned in inclusions',
    ],
    hotels: [
      { name: 'Deira / Bur Dubai Hotel', city: 'Dubai', stars: 4 },
    ],
  },
]

export const getTrip = (slug?: string) => tripDetails.find((t) => t.slug === slug)