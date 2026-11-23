import { useEffect, useRef, useState } from 'react'
import { Users, Bus, CalendarDays, Heart, TentTree, UserGroup , ShieldCheck, Star} from 'lucide-react'
import fbg from '../../assets/images/featureBanner.png'

const features = [
  { icon: Users, text: 'Experienced Tour Leader' },
  { icon: Bus, text: 'Safe & Comfortable Travel' },
  { icon: CalendarDays, text: 'Well-Planned Itineraries' },
  { icon: Heart, text: 'Caring Support for Senior Citizens' },
]
const experiance = [
  {id : 1, count: { value: 100, suffix: '+' }, icon: TentTree, text: 'Trips Completed' },
  {id : 2, count: { value: 10000, suffix: '+' }, icon: UserGroup, text: 'Happy Travellers' },
  {id : 3, count: { value: 14, suffix: '+' }, icon: ShieldCheck, text: 'Years Experience' },
  {id : 4, count: { value: 4.5, suffix: '/5' }, icon: Star, text: 'Customer Rating' },
]

function AnimatedCount({ value, suffix }: { value: number; suffix: string }) {
  const countRef = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const element = countRef.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(value)
      return
    }

    let frame = 0
    let observer: IntersectionObserver | null = null

    const animate = () => {
      const startTime = performance.now()
      const duration = 1600

      const update = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const easedProgress = 1 - (1 - progress) ** 3
        setCount(value * easedProgress)

        if (progress < 1) frame = requestAnimationFrame(update)
      }

      frame = requestAnimationFrame(update)
    }

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer?.disconnect()
          animate()
        }
      }, { threshold: 0.35 })
      observer.observe(element)
    } else {
      animate()
    }

    return () => {
      observer?.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  const formattedCount = value >= 1000
    ? new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 })
      .format(count)
      .toLowerCase()
    : Number.isInteger(value)
      ? Math.floor(count).toString()
      : count.toFixed(1)

  return <span ref={countRef}>{formattedCount}{suffix}</span>
}

export function ExperienceStrip() {
  return ( 
    // Travel with Trust. Return with Memories
    
    <section className="bg-saffron/[0.04] border-y border-orange-100">
      
        <div className="mx-auto max-w-7xl px-4 pt-8 text-center md:pt-10" >
          <h2 className=" text-3xl font-bold text-maroon ">Travel with Trust. Return with Memories</h2>
          <div className="mt-2 h-0.5 w-10 bg-saffron mx-auto" />
        </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 md:grid-cols-4 md:gap-y-0">
        {experiance.map(({ icon: Icon, text, count }) => (
          <div
            key={text}
            className="flex items-center justify-center gap-4 px-3 md:border-r md:border-orange-200/70 md:last:border-r-0"
          >
            {/* Circular Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-saffron/10">
              <Icon
                className="text-saffron"
                size={28}
                strokeWidth={1.7}
              />
            </div> 

            {/* Number and Description */}
            <div className="flex flex-col items-start">
              <span className="text-3xl font-extrabold leading-none tracking-tight text-maroon md:text-3xl">
                <AnimatedCount value={count.value} suffix={count.suffix} />
              </span>

              <span className="mt-2 text-xs font-medium leading-snug text-neutral-500 sm:text-sm">
                {text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>

  )
}

export default function FeatureStrip() {
  return (
    <section
      className="bg-cover bg-center px-8 py-4"
      style={{
        backgroundImage: `linear-gradient(rgba(253, 251, 249, 0.4), rgba(253, 251, 249, 0.4)), url("${fbg}")`,
      }}
    >
        <div className="mx-auto max-w-7xl px-4 pt-8 text-center md:pt-10" >
          <h2 className=" text-3xl font-bold text-maroon ">Why Choose Jagdamb Yatra?</h2>
          <div className="mt-2 h-0.5 w-10 bg-saffron mx-auto" />
        </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4 md:divide-x md:divide-orange-200">
        
        {features.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center justify-center gap-3 px-4">
            <Icon className="shrink-0 text-saffron" size={36} strokeWidth={1.5} />  
            <span className="text-sm font-semibold">{text}</span> 
          </div>
        ))}
      </div>
    </section>
  )
}
