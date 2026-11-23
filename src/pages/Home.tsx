import Hero from '../components/home/Hero'
import FeatureStrip, {ExperienceStrip} from '../components/home/FeatureStrip'
import UpcomingTrips from '../components/home/UpcomingTrips'
import HappyCustHome from '../components/home/HappyCustHome'
import CtaBanner from '../components/home/CtaBanner'
import whatsappIcon from '../assets/images/wapp.svg'
import { WHATSAPP_NUMBER } from '../data/contact'

export default function Home() {
  const message = encodeURIComponent('Hello Jagdamb Yatra, I would like to know more about your trips.')

  return (
    <>
      <Hero />
      <ExperienceStrip />
      <UpcomingTrips />
      <FeatureStrip />
      <HappyCustHome />
      <CtaBanner />
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-16 w-16 motion-safe:animate-bounce transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        <img src={whatsappIcon} alt="" className="h-full w-full" />
      </a>
    </>
  )
}