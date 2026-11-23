
import { useEffect } from 'react'
import { DEFAULT_LANGUAGE, languages } from '../../lib/translate'

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: any
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: DEFAULT_LANGUAGE,
          includedLanguages: languages.map((l) => l.code).join(','),
          autoDisplay: false,
        },
        'google_translate_element'
      )
    }

    if (!document.getElementById('google-translate-script')) {
      const s = document.createElement('script')
      s.id = 'google-translate-script'
      s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      s.async = true
      document.body.appendChild(s)
    }


  const hideBanner = () => {
    document
      .querySelectorAll<HTMLElement>('body > .skiptranslate, iframe.skiptranslate, .VIpgJd-ZVi9od-ORHb-OEVmcd')
      .forEach((el) => {
        if (el.id !== 'google_translate_element') el.style.display = 'none'
      })
    document.body.style.top = '0px'
  }

  hideBanner()
  const observer = new MutationObserver(hideBanner)
  observer.observe(document.body, { childList: true, attributes: true, attributeFilter: ['style'] })

  return () => observer.disconnect()
  }, [])

  // Google needs this element to exist; we hide it and use our own switcher
  return <div id="google_translate_element" className="hidden " />
}