import { Play } from 'lucide-react'
import clsx from 'clsx'
import type { GalleryItem } from '../../types'
import dummyimg from '../../assets/images/banner.jpg'

export default function GalleryGrid({ items, onOpen }: { items: GalleryItem[]; onOpen: (i: GalleryItem) => void }) {
  return (
    <div className="mx-auto mt-8 grid max-w-7xl auto-rows-[150px] grid-cols-2 gap-3 px-4 md:auto-rows-[165px] md:grid-cols-12">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onOpen(item)}
          className={clsx('group relative overflow-hidden rounded-2xl shadow-md', item.span)}
        >
          <img
            src={dummyimg}
            // src={item.src}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          {item.type === 'video' && (
            <>
              <span className="absolute inset-0 flex items-center justify-center bg-black/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/45 ring-2 ring-white/80 backdrop-blur-sm">
                  <Play className="ml-0.5 fill-white text-white" size={24} />
                </span>
              </span>
              <span className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-0.5 text-xs font-semibold text-white">
                {item.duration}
              </span>
            </>
          )}
        </button>
      ))}
    </div>
  )
}