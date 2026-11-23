import type { Trip, Destination } from '../types'

export const trips: Trip[] = [
  { id: 1, title: 'Uttarakhand Char Dham Yatra', badge: 'Bookings Open',slug: 'char-dham-yatra',
    image: '/images/kedarnath.jpg', date: '21 Oct 2027', duration: '14 Days / 13 Nights', price: 100000 },
  { id: 2, title: 'Rajasthan Yatra', badge: 'Popular', slug: 'rajasthan-yatra',
    image: '/images/rajasthan.jpg', date: '13 Nov 2027', duration: '10 Days / 9 Nights', price: 32000 },
  { id: 3, title: 'Kerala Tour', badge: 'Bookings Open', slug: 'kerala-tour',
    image: '/images/kerala.jpg', duration: '10 Days / 9 Nights' },
  { id: 4, title: 'Dubai Trip 2027', badge: 'International', slug: 'dubai-trip-2027',
    image: '/images/dubai.jpg', date: '10 Feb 2027', duration: '5 Days / 4 Nights', price: 88000 },
]

export const destinations: Destination[] = [
  { name: 'Char Dham', image: '/images/kedarnath.jpg' },
  { name: 'Jyotirlinga', image: '/images/jyotirlinga.jpg' },
  { name: 'South India', image: '/images/south-india.jpg' },
  { name: 'Rajasthan', image: '/images/rajasthan.jpg' },
  { name: 'Ayodhya', image: '/images/ayodhya.jpg' },
  { name: 'International', image: '/images/international.jpg' },
]