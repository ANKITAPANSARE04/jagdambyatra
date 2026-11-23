import clsx from 'clsx'
import { infoCards } from '../../data/contact'

export default function InfoCards() {
  return (
    <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-4">
      <div className="grid gap-6 rounded-2xl bg-white p-6 shadow-lg sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-orange-100">
        {infoCards.map(({ icon: Icon, title, color, lines, links }) => (
          <div key={title} className="flex gap-4 lg:px-4">
            <span className={clsx('flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white', color)}>
              <Icon size={24} />
            </span>
            <div className="leading-snug">
              <h3 className="font-bold text-neutral-900">{title}</h3>
              <div className="mt-1 text-neutral-700">
                {lines.map((line, i) =>
                  links ? (
                    <a key={line} href={links[i]} className="block text-base font-medium hover:text-saffron" translate="no">
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="text-sm">{line}</p>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}