import { ArrowRight } from 'lucide-react'

const images = Object.entries(
  import.meta.glob<string>('../../assets/images/*', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
).map(([path, src]) => ({
  src,
  name: path.split('/').pop()?.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ') ?? '',
}))

function ImageSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="flex shrink-0 gap-4 pr-4" aria-hidden={duplicate}>
      {images.map((image) => (
        <div
          key={image.src}
          role="img"
          aria-label={image.name}
          style={{ backgroundImage: `url("${image.src}")` }}
          className="h-64 w-64 shrink-0 rounded-xl bg-orange-50 bg-cover bg-center border border-gray-300 sm:w-72"
        />
      ))}
    </div>
  )
}

export default function HappyCustHome() {
  return (
    <section className="mx-auto  py-14"> 
      <div className="flex items-center justify-between   max-w-7xl mx-auto"> 
        <div className="px-4">
          <h2 className=" text-3xl font-bold text-maroon ">Happy Customers</h2>
          <div className="mt-2 h-0.5 w-10 bg-saffron" />
        </div> 
        <a href="/happy-customers" className="flex items-center gap-1 text-sm font-semibold text-maroon">
          Explore All <ArrowRight size={16} />
        </a>
      </div>
      <div
        className="happy-customer-carousel mt-6 overflow-hidden  max-w-8xl "
        role="region"
        aria-label="Happy customer photo carousel"
        tabIndex={0}
      >
        <div className="happy-customer-marquee flex w-max">
          <ImageSet />
          <ImageSet duplicate />
        </div>
      </div>
    </section>
  )
}