import { useState } from 'react'
import { ClipboardList, Send, CheckCircle2 } from 'lucide-react'
import clsx from 'clsx'
import { WHATSAPP_NUMBER, tripOptions, travelerOptions } from '../../data/contact'

type FormData = {
  name: string
  mobile: string
  email: string
  trip: string
  travelers: string
  message: string
}

const empty: FormData = { name: '', mobile: '', email: '', trip: '', travelers: '', message: '' }

const inputBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-saffron focus:ring-2 focus:ring-saffron/20'

export default function EnquiryForm() {
  const [data, setData] = useState<FormData>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [sent, setSent] = useState(false)

  const set = (k: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setData((d) => ({ ...d, [k]: e.target.value }))

  const validate = () => {
    const err: Partial<Record<keyof FormData, string>> = {}
    if (!data.name.trim()) err.name = 'Please enter your name'
    if (!/^[6-9]\d{9}$/.test(data.mobile)) err.mobile = 'Enter a valid 10-digit mobile number'
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) err.email = 'Enter a valid email'
    if (!data.trip) err.trip = 'Please select a trip'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const text = [
      'New Enquiry – Jagdamb Yatra',
      `Name: ${data.name}`,
      `Mobile: ${data.mobile}`,
      data.email && `Email: ${data.email}`,
      `Trip: ${data.trip}`,
      data.travelers && `Travelers: ${data.travelers}`,
      data.message && `Message: ${data.message}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
    setData(empty)
  }

  const field = (k: keyof FormData) =>
    clsx(inputBase, errors[k] ? 'border-red-400' : 'border-neutral-200')

  const Label = ({ children, required }: { children: string; required?: boolean }) => (
    <span className="mb-1.5 block text-sm font-semibold text-neutral-900">
      {children} {required && <span className="text-red-500">*</span>}
    </span>
  )
  const Err = ({ k }: { k: keyof FormData }) =>
    errors[k] ? <span className="mt-1 block text-xs text-red-500">{errors[k]}</span> : null

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-saffron">
            <ClipboardList size={30} strokeWidth={1.5} />
          </span>
          <div>
            <h2 className=" text-2xl font-bold text-maroon md:text-3xl">Plan Your Next Journey</h2>
            <p className="text-sm text-neutral-700">
              Share your details and our travel expert will get back to you soon.
            </p>
          </div>
        </div>
      </div>

      {sent && (
        <div className="mt-5 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">
          <CheckCircle2 size={18} /> Thank you! Your enquiry has opened in WhatsApp. Just press send.
        </div>
      )}

      <form onSubmit={submit} noValidate className="mt-6 grid gap-5 md:grid-cols-6">
        <label className="md:col-span-2">
          <Label required>Name</Label>
          <input className={field('name')} placeholder="Enter your name" value={data.name} onChange={set('name')} />
          <Err k="name" />
        </label>

        <label className="md:col-span-2">
          <Label required>Mobile Number</Label>
          <input
            className={field('mobile')}
            placeholder="Enter 10-digit number"
            inputMode="numeric"
            maxLength={10}
            value={data.mobile}
            onChange={(e) => setData((d) => ({ ...d, mobile: e.target.value.replace(/\D/g, '') }))}
          />
          <Err k="mobile" />
        </label>

        <label className="md:col-span-2">
          <Label>Email</Label>
          <input className={field('email')} type="email" placeholder="Enter your email" value={data.email} onChange={set('email')} />
          <Err k="email" />
        </label>

        <label className="md:col-span-3">
          <Label required>Interested Trip</Label>
          <select className={field('trip')} value={data.trip} onChange={set('trip')}>
            <option value="">Select a trip</option>
            {tripOptions.map((t) => <option key={t}>{t}</option>)}
          </select>
          <Err k="trip" />
        </label>

        <label className="md:col-span-3">
          <Label>Number of Travelers</Label>
          <select className={field('travelers')} value={data.travelers} onChange={set('travelers')}>
            <option value="">Select</option>
            {travelerOptions.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>

        <label className="md:col-span-6">
          <Label>Message</Label>
          <textarea
            rows={4}
            className={clsx(field('message'), 'resize-y')}
            placeholder="Tell us about your requirements..."
            value={data.message}
            onChange={set('message')}
          />
        </label>

        <div className="md:col-span-6">
          <button
            type="submit"
            className="flex items-center gap-2 rounded-full bg-saffron px-8 py-3.5 font-semibold text-white shadow transition hover:bg-saffron-dark"
          >
            <Send size={20} /> Send Inquiry
          </button>
        </div>
      </form>
    </div>
  )
}