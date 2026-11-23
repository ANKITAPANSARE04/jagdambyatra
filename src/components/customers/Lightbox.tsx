import { useEffect } from 'react'
import { X } from 'lucide-react'
import type { GalleryItem } from '../../types'
import dumimg from '../../assets/images/banner.jpg'


export default function Lightbox({ item, onClose }: { item: GalleryItem | null; onClose: () => void }) {
  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4" onClick={onClose}>
      <button onClick={onClose} aria-label="Close"
              className="absolute right-4 top-4 rounded-full bg-white/90 p-2 hover:bg-white">
        <X />
      </button>
      <div className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        {item.type === 'video' ? (
          <video src={item.video} poster={item.src} controls autoPlay className="max-h-[85vh] rounded-xl" />
        ) : (
          <img src={dumimg} alt={item.alt} className="max-h-[85vh] rounded-xl object-contain" />
        )}
      </div>
    </div>
  )
}