
import ContactHero from '../components/contact/ContactHero'
import InfoCards from '../components/contact/InfoCards'
import EnquiryForm from '../components/contact/EnquiryForm'
import WhatsAppCard from '../components/contact/WhatsAppCard'

export default function Contact() {
  return (
    <>
      <ContactHero />
      <InfoCards />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 lg:grid-cols-[1fr_380px]">
        <EnquiryForm />
        <WhatsAppCard />
      </section>
    </>
  )
}