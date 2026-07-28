import { useState } from 'react'
import { submitContact } from '../lib/contact'

const display = "'Bricolage Grotesque', sans-serif"

const labelStyle = {
  display: 'block',
  fontSize: 12,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: '#241c33',
  marginBottom: 8,
}

const fieldStyle = {
  width: '100%',
  background: '#17131f',
  color: '#ece8f0',
  border: '1px solid #2c2833',
  borderRadius: 14,
  padding: '14px 16px',
  fontSize: 16,
  fontFamily: 'inherit',
  outline: 'none',
}

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'submitting') return

    const form = e.currentTarget
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    }

    setStatus('submitting')
    setError('')
    const result = await submitContact(data)

    if (result.ok) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
      setError(result.error)
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          background: '#ece8f0',
          borderRadius: 20,
          padding: 'clamp(28px,4vw,40px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: 320,
        }}
      >
        <div style={{ fontFamily: display, fontSize: 30, fontWeight: 800, letterSpacing: '-0.03em', color: '#17131f' }}>
          Message sent ✓
        </div>
        <p style={{ margin: '12px 0 0', fontSize: 16, lineHeight: 1.5, color: '#3a3346' }}>
          Thanks — we'll get back to you within 48 hours. In a hurry?{' '}
          <button
            type="button"
            onClick={() => setStatus('idle')}
            style={{ background: 'none', border: 'none', padding: 0, color: '#7a4fd0', fontWeight: 700, cursor: 'pointer', fontSize: 16 }}
          >
            Send another
          </button>
          .
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: '#ece8f0',
        borderRadius: 20,
        padding: 'clamp(24px,3.5vw,36px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
      }}
    >
      <div>
        <label htmlFor="cf-name" style={labelStyle}>Name</label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Ada Lovelace" style={fieldStyle} />
      </div>
      <div>
        <label htmlFor="cf-email" style={labelStyle}>Email</label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" style={fieldStyle} />
      </div>
      <div>
        <label htmlFor="cf-message" style={labelStyle}>Project details</label>
        <textarea id="cf-message" name="message" required rows={4} placeholder="Tell us what you're building…" style={{ ...fieldStyle, resize: 'vertical' }} />
      </div>

      {status === 'error' && (
        <p style={{ margin: 0, fontSize: 14, color: '#b3261e', fontWeight: 600 }}>{error}</p>
      )}

      <button
        type="submit"
        className="btn-press"
        disabled={status === 'submitting'}
        style={{
          background: '#17131f',
          color: '#ece8f0',
          fontFamily: display,
          fontSize: 18,
          fontWeight: 700,
          padding: '16px 32px',
          borderRadius: 100,
          border: 'none',
          cursor: status === 'submitting' ? 'default' : 'pointer',
          opacity: status === 'submitting' ? 0.7 : 1,
        }}
      >
        {status === 'submitting' ? 'Sending…' : 'Send message →'}
      </button>
    </form>
  )
}
