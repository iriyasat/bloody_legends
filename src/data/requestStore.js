import { currentUser, requests as seedRequests } from './dummyData'

const STORAGE_KEY = 'bloodylegends.requests'

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
}

function normalizeRequests(data) {
  if (!Array.isArray(data)) {
    return [...seedRequests]
  }

  const seedById = new Map(seedRequests.map((request) => [request.id, request]))

  return data.map((request) => {
    const seed = seedById.get(request.id)

    if (!seed) {
      return request
    }

    return {
      ...request,
      locationMeta: request.locationMeta || seed.locationMeta || null,
    }
  })
}

export function getRequests() {
  if (!canUseStorage()) {
    return [...seedRequests]
  }

  const saved = window.localStorage.getItem(STORAGE_KEY)

  if (!saved) {
    return [...seedRequests]
  }

  try {
    const parsed = JSON.parse(saved)
    return normalizeRequests(parsed)
  } catch (error) {
    console.error('Failed to parse stored requests.', error)
    return [...seedRequests]
  }
}

export function saveRequests(requests) {
  if (!canUseStorage()) {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(requests))
}

export function createRequest(payload) {
  const existing = getRequests()
  const maxId = existing.reduce((max, item) => Math.max(max, Number(item.id) || 0), 100)

  const newRequest = {
    id: maxId + 1,
    patientName: payload.patientName,
    bloodGroup: payload.bloodGroup,
    unitsNeeded: payload.unitsNeeded,
    hospital: payload.hospital,
    location: payload.location,
    locationMeta: payload.locationMeta || null,
    urgency: payload.urgency,
    dateNeeded: payload.dateNeeded,
    status: 'Open',
    requester: currentUser.name,
    acceptedBy: null,
    notes: payload.notes || 'No additional notes.',
  }

  const next = [newRequest, ...existing]
  saveRequests(next)

  return newRequest
}

export function markRequestCompleted(requestId) {
  const next = getRequests().map((request) =>
    request.id === requestId
      ? {
          ...request,
          status: 'Completed',
        }
      : request
  )

  saveRequests(next)
  return next
}
