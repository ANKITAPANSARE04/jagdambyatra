import { Flower2 } from 'lucide-react'
import { whyUs } from '../../data/about'

export default function WhyTravel() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14">
      <div className="text-center">
        <h2 className=" text-3xl font-bold text-maroon">Why Travel With Jagdamb Yatra?</h2>
        <div className="mt-2 flex items-center justify-center gap-3 text-saffron">
          <span className="h-px w-24 bg-saffron" />
          <Flower2 size={22} />
          <span className="h-px w-24 bg-saffron" />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-5 md:divide-x md:divide-orange-200">
        {whyUs.map(({ icon: Icon, text }) => (
          <div key={text} className="flex flex-col items-center gap-3 px-3 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              <Icon size={30} strokeWidth={1.5} className="text-saffron" />
            </span>
            <p className="text-sm font-semibold">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}