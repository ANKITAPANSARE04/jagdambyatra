import { useParams } from 'react-router-dom'
import TripDetail from './TripDetail'
import { TripView, useJagdambTrip } from '../trip-view/'

// /trips/:slug
// 1. Looks for the trip in the admin system (the API).
// 2. If it is not there (or the API is unreachable), the existing TripDetail page takes over, so old trips keep working.
export default function TripRoute() {
  const { slug = '' } = useParams()
  const { trip, loading } = useJagdambTrip(slug)

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10" aria-busy="true">
        <div className="h-96 animate-pulse rounded-xl bg-slate-100" />
      </div>
    )
  }

  if (trip) {
    // return <TripView slug={slug} enquireHref="/contact" className="mx-auto max-w-6xl px-4 py-10" />
      return <TripView slug="kedarnath-yatra" className="mx-auto max-w-6xl px-4 py-10" />

  }

  return <TripDetail />
}