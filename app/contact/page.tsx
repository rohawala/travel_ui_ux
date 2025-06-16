'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const result = await res.json()
    setStatus(result.success ? 'Message sent!' : 'Something went wrong.')
    if (result.success) setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} className="w-full border px-4 py-2 rounded" />
        <input type="email" name="email" placeholder="Your Email" required value={form.email} onChange={handleChange} className="w-full border px-4 py-2 rounded" />
        <textarea name="message" placeholder="Your Message" required value={form.message} onChange={handleChange} className="w-full border px-4 py-2 rounded h-32" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
      {status && <p className="mt-4 text-center text-sm text-gray-600">{status}</p>}
    </section>
  )
}
