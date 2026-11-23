import type { GalleryItem, Testimonial } from '../types'

export const gallery: GalleryItem[] = [
  // Row 1 (4 + 2 + 3 + 3 = 12 columns)
  { id: 1, type: 'photo', src: '/images/gallery/g1.jpg', alt: 'Char Dham group', span: 'md:col-span-4' },
  { id: 2, type: 'video', src: '/images/gallery/g2.jpg', video: '/videos/v1.mp4', duration: '0:58', alt: 'Ganga ghat video', span: 'md:col-span-2' },
  { id: 3, type: 'photo', src: '/images/gallery/g3.jpg', alt: 'Rajasthan fort group', span: 'md:col-span-3' },
  { id: 4, type: 'photo', src: '/images/gallery/g4.jpg', alt: 'Himalayan valley', span: 'md:col-span-3' },
  // Row 2 (3 + 2 + 2 + 3 + 2 = 12 columns)
  { id: 5, type: 'photo', src: '/images/gallery/g5.jpg', alt: 'Kerala backwaters', span: 'md:col-span-3' },
  { id: 6, type: 'photo', src: '/images/gallery/g6.jpg', alt: 'South India temple group', span: 'md:col-span-2' },
  { id: 7, type: 'video', src: '/images/gallery/g7.jpg', video: '/videos/v2.mp4', duration: '1:24', alt: 'Mountain meadow video', span: 'md:col-span-2' },
  { id: 8, type: 'photo', src: '/images/gallery/g8.jpg', alt: 'Senior travellers group', span: 'md:col-span-3' },
  { id: 9, type: 'photo', src: '/images/gallery/g9.jpg', alt: 'Palace by the lake', span: 'md:col-span-2' },
]

export const testimonials: Testimonial[] = [
  { id: 1, name: 'Meena Kulkarni', city: 'Mumbai',
    text: 'Very well organised trip to Char Dham. Bhausaheb Sir and the entire team took great care of everyone. A truly spiritual and memorable journey.' },
  { id: 2, name: 'Sanjay Patil', city: 'Pune',
    text: 'Our Rajasthan trip was superb! Hotels, travel, food and sightseeing – everything was well planned. Travelling with Jagdamb Yatra always feels like a family trip.' },
  { id: 3, name: 'Sunita Deshmukh', city: 'Thane',
    text: 'It was my first group tour and I had a wonderful experience. The team is helpful, friendly and very organised. Looking forward to many more trips with Jagdamb Yatra.' },
  { id: 4, name: 'Ramesh Joshi', city: 'Nashik',
    text: 'Senior citizens were looked after so well. Comfortable buses, good stays and delicious vegetarian food throughout the yatra.' },
  { id: 5, name: 'Anita Shinde', city: 'Navi Mumbai',
    text: 'The Jyotirlinga yatra was perfectly planned with enough time for darshan. We never felt rushed. Highly recommended!' },
  { id: 6, name: 'Prakash More', city: 'Kalyan',
    text: 'Great value for money and a very caring tour leader. The Kerala trip was relaxing and well organised from start to end.' },
]

export const filters = ['all', 'photos', 'videos', 'testimonials'] as const
export type Filter = (typeof filters)[number]