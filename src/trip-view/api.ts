import type { PublicTrip } from './types'

// STEP A: where the data comes from.
// Put the address of the Jagdamb API in this website's .env file:
//   VITE_JAGDAMB_API_URL=https://api.yourdomain.com/api
const API_URL = ((import.meta.env.VITE_JAGDAMB_API_URL as string | undefined) || 'http://localhost:5000/api').replace(
  /\/$/,
  '',
)

export class TripApiError extends Error {
  readonly status: number

  constructor(
    status: number, // 404 = no published trip with this slug, 0 = server not reachable
    message: string,
  ) {
    super(message)
    this.status = status
    this.name = 'TripApiError'
  }
}

interface Envelope {
  success?: boolean
  data?: PublicTrip
  error?: { message?: string }
}

// STEP B: the API call. A plain GET, no login and no cookies.
export async function fetchPublicTrip(slug: string, signal?: AbortSignal): Promise<PublicTrip> {
  let res: Response
  try {
    res = await fetch(`${API_URL}/public/trips/${encodeURIComponent(slug)}`, { signal })
  } catch (err) {
    if (signal?.aborted) throw err
    throw new TripApiError(0, 'We could not reach the server. Please check your connection and try again.')
  }

  let body: Envelope | null = null
  try {
    body = await res.json()
  } catch {
    body = null
  }

  if (!res.ok || !body?.success || !body.data) {
    throw new TripApiError(res.status, body?.error?.message ?? 'Something went wrong. Please try again.')
  }
  return body.data
}
