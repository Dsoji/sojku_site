// Central place to configure booking. Replace CALENDLY_URL with your real
// Calendly link, e.g. 'https://calendly.com/sojku/30min'.
export const CALENDLY_URL = 'https://calendly.com/o-sojku/30min'

const CSS_HREF = 'https://assets.calendly.com/assets/external/widget.css'
const JS_SRC = 'https://assets.calendly.com/assets/external/widget.js'

let loadingPromise = null

// Lazy-load the Calendly widget assets only when someone books a call,
// so they don't slow down first page load.
function loadWidget() {
  if (typeof window === 'undefined') return Promise.reject(new Error('no window'))
  if (window.Calendly) return Promise.resolve()
  if (loadingPromise) return loadingPromise

  loadingPromise = new Promise((resolve, reject) => {
    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = CSS_HREF
      document.head.appendChild(link)
    }

    const existing = document.querySelector(`script[src="${JS_SRC}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', reject)
      return
    }

    const script = document.createElement('script')
    script.src = JS_SRC
    script.async = true
    script.onload = () => resolve()
    script.onerror = reject
    document.body.appendChild(script)
  })

  return loadingPromise
}

// Open the Calendly popup. Falls back to opening the link in a new tab if the
// widget script can't load (offline, blocked, etc.) so the button always works.
export async function openCalendly(event) {
  if (event) event.preventDefault()
  try {
    await loadWidget()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
      return
    }
    throw new Error('Calendly unavailable')
  } catch {
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
  }
}
