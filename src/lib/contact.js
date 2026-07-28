// Contact form delivery via Web3Forms (https://web3forms.com) — a free,
// no-server form backend. Get a key in ~30s: go to web3forms.com, enter
// o.sojku@gmail.com, and paste the emailed access key below. Submissions
// will then be delivered straight to that inbox.
export const WEB3FORMS_ACCESS_KEY = '21f2401f-6174-47df-90ee-bc3b0daf7376'

const ENDPOINT = 'https://api.web3forms.com/submit'

export function isContactConfigured() {
  return (
    typeof WEB3FORMS_ACCESS_KEY === 'string' &&
    WEB3FORMS_ACCESS_KEY.length > 0 &&
    WEB3FORMS_ACCESS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY'
  )
}

// Submits the contact form. Returns { ok: true } on success or
// { ok: false, error } so the UI can show a friendly message.
export async function submitContact({ name, email, message }) {
  if (!isContactConfigured()) {
    return { ok: false, error: 'Contact form is not configured yet.' }
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: 'New project enquiry via sojku.dev',
        from_name: name,
        name,
        email,
        message,
      }),
    })

    const data = await res.json().catch(() => ({}))
    if (res.ok && data.success) return { ok: true }
    return { ok: false, error: data.message || 'Something went wrong. Please try again.' }
  } catch {
    return { ok: false, error: 'Network error. Please check your connection and try again.' }
  }
}
