import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'

export const PHONES = ['7045979185','9076786465', '9082686465', '9420321777']
export const WHATSAPP_NUMBER = '7045979185' // country code + number, no "+"

export const infoCards = [
  {
    icon: Phone,
    title: 'Call Us',
    color: 'bg-saffron',
    lines: PHONES,
    links: PHONES.map((p) => `tel:${p}`),
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    color: 'bg-green-500',
    lines: ['Chat with us instantly for trip details, booking and updates.'],
  },
  {
    icon: MapPin,
    title: 'Our Location',
    color: 'bg-saffron',
    lines: ['Jagdamb Yatra Group, Mumbai'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    color: 'bg-saffron',
    lines: ['9:00 a.m. to 9:00 p.m.', '(Every Day)'],
  },
]

export const tripOptions = [
  'Uttarakhand Char Dham Yatra',
  'Rajasthan Yatra',
  'Kerala Tour',
  'Dubai Trip 2027',
  'Jyotirlinga Yatra',
  'Ayodhya Yatra',
  'Other / Not sure yet',
]

export const travelerOptions = ['1', '2', '3', '4', '5', '6-10', '11-20', '20+']