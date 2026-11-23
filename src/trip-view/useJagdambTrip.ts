import { useCallback, useEffect, useState } from 'react'
import { fetchPublicTrip, TripApiError } from './api'
import type { PublicTrip } from './types'

// Loads one trip by its slug and tells you whether it is loading, failed, or ready
export function useJagdambTrip(slug: string) {
  const [trip, setTrip] = useState<PublicTrip | null>(null)
  const [error, setError] = useState<TripApiError | null>(null)
  const [loading, setLoading] = useState(true)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    fetchPublicTrip(slug, controller.signal)
      .then((data) => setTrip(data))
      .catch((err) => {
        if (controller.signal.aborted) return // the slug changed or the page closed, ignore
        setTrip(null)
        setError(err instanceof TripApiError ? err : new TripApiError(0, 'Something went wrong. Please try again.'))
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [slug, attempt])

  const retry = useCallback(() => setAttempt((n) => n + 1), [])
  return { trip, error, loading, retry }
}
