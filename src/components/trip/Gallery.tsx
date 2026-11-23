import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import clsx from 'clsx'
import dumpic from '../../assets/images/banner.jpg'

export default function Gallery({ images, title }: { images: string[]; title: string }) {
  const [i, setI] = useState(0)
  const prev = () => setI((i - 1 + images.length) % images.length)
  const next = () => setI((i + 1) % images.length)

  return (
    <div>
      <div className="relative h-64 overflow-hidden rounded-2xl shadow-md md:h-[360px]">
        {images.map((src, idx) => (
          <img
            key={src}
            src={dumpic}
            // src={src}
            alt={`${title} ${idx + 1}`}
            className={clsx(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
              idx === i ? 'opacity-100' : 'opacity-0'
            )}
          />
        ))}
        <button onClick={prev} aria-label="Previous"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white">
          <ChevronLeft />
        </button>
        <button onClick={next} aria-label="Next"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white">
          <ChevronRight />
        </button>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-3">
        {images.map((src, idx) => (
          <button
            key={src}
            onClick={() => setI(idx)}
            className={clsx(
              'h-16 overflow-hidden rounded-lg border-2 md:h-20',
              idx === i ? 'border-saffron' : 'border-transparent opacity-80 hover:opacity-100'
            )}
          >
            <img //src={src} 
            src={dumpic}
            alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}