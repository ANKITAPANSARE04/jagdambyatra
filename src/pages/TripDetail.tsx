import { Link, useParams } from 'react-router-dom'
import TripHero from '../components/trip/TripHero'
import Gallery from '../components/trip/Gallery'
import BookingCard from '../components/trip/BookingCard'
import TripTabs from '../components/trip/TripTabs'
import Itinerary from '../components/trip/Itinerary'
// import WhyTravelCard from '../components/trip/WhyTravelCard' //try to use once, commented coz going back of prise card
import PlanBanner from '../components/trip/PlanBanner'
import { getTrip } from '../data/tripDetails' 
import illustration from '../assets/images/notfound.png'

export default function TripDetail() {
  const { slug } = useParams()
  const trip =getTrip(slug)

  if (!trip) {
    return (
      <div className="mx-auto max-w-md px-4 py-24 text-center">
        <img src={illustration} alt="Page not found" />
        <h1 className=" text-3xl font-bold text-maroon">Trip not found</h1>
        <Link to="/#trips" className="mt-4 inline-block rounded-full bg-saffron px-6 py-2.5 font-semibold text-white">
          View all trips
        </Link>
      </div>
    )
  }
  

  return (
    <>
      <TripHero trip={trip} />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_380px]">
        {/* LEFT COLUMN */}
        <div className="min-w-0">
          <Gallery images={trip.gallery} title={trip.title} />

          <h2 className="mt-10  text-3xl font-bold text-maroon">About This Tour</h2>
          <div className="mt-2 h-0.5 w-10 bg-saffron" />
          <p className="mt-3 leading-relaxed text-neutral-800">{trip.about}</p>

          <TripTabs trip={trip} />
          <Itinerary trip={trip} />
        </div>

        {/* RIGHT COLUMN */}
        <div className="min-w-0 space-y-8">
          <BookingCard trip={trip} />
          {/* <WhyTravelCard /> */}
        </div>
      </div>

      <PlanBanner />
    </>
  )
}