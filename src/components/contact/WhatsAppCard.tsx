import { Headset, MessageCircle } from 'lucide-react'
import trailImg from '../../assets/images/contactHill.png'
import { WHATSAPP_NUMBER } from '../../data/contact'

export default function WhatsAppCard() {
  const msg = encodeURIComponent('Hello Jagdamb Yatra, I would like to know more about your upcoming trips.')
  return (
    <aside className="flex h-full flex-col rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-orange-100 to-orange-50 p-6">
        <Headset size={40} className="text-maroon" strokeWidth={1.5} />
        <h2 className="mt-3  text-3xl font-bold text-maroon">Prefer WhatsApp?</h2>
        <p className="mt-2 text-neutral-800">Get instant assistance from our travel expert.</p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center justify-center gap-3 rounded-full bg-green-600 px-6 py-4 text-lg font-semibold text-white shadow hover:bg-green-700"
        >
          <MessageCircle size={26} /> Chat on WhatsApp
        </a>

        <img src={trailImg} alt="" className="mt-auto w-full pt-6 opacity-90" />
      </div>
    </aside>
  )
}