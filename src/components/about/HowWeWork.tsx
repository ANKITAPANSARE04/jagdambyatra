import { ArrowRight } from 'lucide-react'
import { Fragment } from 'react'
import { steps } from '../../data/about'

export default function HowWeWork() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14">
      <h2 className=" text-3xl font-bold text-maroon">How We Work</h2>
      <div className="mt-2 h-0.5 w-10 bg-saffron" />

      <div className="mt-10 flex flex-col items-stretch gap-4 md:flex-row md:items-center">
        {steps.map(({ icon: Icon, text }, i) => (
          <Fragment key={text}>
            <div className="relative flex flex-1 items-center gap-3 rounded-xl border border-orange-100 bg-orange-50/60 px-4 py-5">
              <span className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-saffron text-sm font-bold text-white shadow">
                {i + 1}
              </span>
              <Icon size={34} strokeWidth={1.5} className="shrink-0 text-saffron" />
              <p className="text-sm font-semibold leading-snug">{text}</p>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="hidden shrink-0 text-saffron md:block" size={20} />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  )
}