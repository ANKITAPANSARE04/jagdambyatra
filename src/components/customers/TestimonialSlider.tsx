import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Flower2, Quote, Star } from 'lucide-react'
import clsx from 'clsx'
import { testimonials } from '../../data/customers'
import dumimg from '../../assets/images/banner.jpg'


export default function TestimonialSlider() {
  const ref = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(0)
  const [pages, setPages] = useState(1)

  const measure = () => {
    const el = ref.current
    if (!el) return
    setPages(Math.max(1, Math.round(el.scrollWidth / el.clientWidth)))
    setPage(Math.round(el.scrollLeft / el.clientWidth))
  }

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const goTo = (p: number) =>
    ref.current?.scrollTo({ left: p * ref.current.clientWidth, behavior: 'smooth' })

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-14">
      <div className="text-center">
        <h2 className=" text-3xl font-bold text-maroon">What Our Travellers Say</h2>
        <div className="mt-2 flex items-center justify-center gap-3 text-maroon">
          <span className="h-px w-24 bg-orange-300" />
          <Flower2 size={22} />
          <span className="h-px w-24 bg-orange-300" />
        </div>
      </div>

      <div className="relative mt-8">
        <button
          onClick={() => goTo(page - 1)}
          disabled={page === 0}
          aria-label="Previous"
          className="absolute -left-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-maroon text-white shadow disabled:bg-orange-100 disabled:text-orange-300 md:flex"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={ref}
          onScroll={measure}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="flex shrink-0 basis-full snap-start flex-col rounded-2xl border border-orange-100 bg-white p-6 shadow-sm md:basis-[calc((100%-3rem)/3)]"
            >
              <Quote className="fill-saffron text-saffron" size={26} />
              <p className="mt-3 flex-1 leading-relaxed text-neutral-700">{t.text}</p>
              <div className="mt-4 flex gap-1 text-saffron">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} className="fill-saffron" />)}
              </div>
              <div className="mt-3 flex items-center gap-3">
                {t.avatar ? (
                  <img src={dumimg} alt={t.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-saffron" />
                  // <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-saffron" />
                ) : (
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 font-bold text-saffron-dark ring-2 ring-saffron">
                    {t.name[0]}
                  </span>
                )}
                <div className="leading-tight">
                  <p className="font-semibold" translate="no">{t.name}</p>
                  <p className="text-sm text-neutral-500">{t.city}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          onClick={() => goTo(page + 1)}
          disabled={page >= pages - 1}
          aria-label="Next"
          className="absolute -right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-maroon text-white shadow disabled:bg-orange-100 disabled:text-orange-300 md:flex"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Page ${i + 1}`}
            className={clsx('h-2.5 w-2.5 rounded-full', i === page ? 'bg-maroon' : 'bg-orange-200')}
          />
        ))}
      </div>
    </section>
  )
}