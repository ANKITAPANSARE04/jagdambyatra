
import clsx from 'clsx'
import { languages, getCurrentLanguage, setLanguage } from '../../lib/translate'

export default function LanguageSwitcher() {
  const current = getCurrentLanguage()

  return (
    <div className="notranslate flex rounded-full border border-neutral-200 bg-white p-0.5 text-sm font-semibold" translate="no">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => code !== current && setLanguage(code)}
          aria-pressed={current === code}
          className={clsx(
            'rounded-full px-3 py-1.5 transition',
            current === code ? 'bg-saffron text-white' : 'text-neutral-500 hover:text-saffron'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}