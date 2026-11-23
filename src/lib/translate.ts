
export const DEFAULT_LANGUAGE = 'en' // language your site text is written in

export const languages = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'mr', label: 'मराठी' },
] as const

export type LangCode = (typeof languages)[number]['code']

const COOKIE = 'googtrans'

export function getCurrentLanguage(): LangCode {
  const match = document.cookie.match(/googtrans=\/[^/]+\/([a-z]+)/)
  const code = match?.[1] as LangCode | undefined
  return languages.some((l) => l.code === code) ? code! : DEFAULT_LANGUAGE
}

export function setLanguage(code: LangCode) {
  const host = window.location.hostname
  const expire = 'expires=Thu, 01 Jan 1970 00:00:00 GMT'

  // clear any old value (both host and domain variants)
  document.cookie = `${COOKIE}=; ${expire}; path=/`
  document.cookie = `${COOKIE}=; ${expire}; path=/; domain=${host}`

  if (code !== DEFAULT_LANGUAGE) {
    const value = `/${DEFAULT_LANGUAGE}/${code}`
    document.cookie = `${COOKIE}=${value}; path=/`
    document.cookie = `${COOKIE}=${value}; path=/; domain=${host}`
  }
  window.location.reload()
}