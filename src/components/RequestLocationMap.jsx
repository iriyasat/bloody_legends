import { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'

const OPEN_FREE_MAP_STYLE = 'https://tiles.openfreemap.org/styles/liberty'

async function geocodeAddress(address) {
  if (!address) {
    return null
  }

  const params = new URLSearchParams({
    format: 'jsonv2',
    q: address,
    limit: '1',
  })

  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to geocode request location.')
  }

  const data = await response.json()

  if (!Array.isArray(data) || data.length === 0) {
    return null
  }

  return {
    lat: Number(data[0].lat),
    lng: Number(data[0].lon),
  }
}

function RequestLocationMap({ location, locationMeta }) {
  const mapContainerRef = useRef(null)
  const mapRef = useRef(null)
  const markerRef = useRef(null)

  const [resolvedCoords, setResolvedCoords] = useState(null)
  const [isResolving, setIsResolving] = useState(true)

  useEffect(() => {
    let isActive = true

    const resolveCoordinates = async () => {
      setIsResolving(true)

      try {
        if (locationMeta?.lat != null && locationMeta?.lng != null) {
          if (isActive) {
            setResolvedCoords({
              lat: Number(locationMeta.lat),
              lng: Number(locationMeta.lng),
            })
          }
          return
        }

        const found = await geocodeAddress(location)

        if (isActive) {
          setResolvedCoords(found)
        }
      } catch (error) {
        console.error(error)
        if (isActive) {
          setResolvedCoords(null)
        }
      } finally {
        if (isActive) {
          setIsResolving(false)
        }
      }
    }

    resolveCoordinates()

    return () => {
      isActive = false
    }
  }, [location, locationMeta])

  useEffect(() => {
    if (!mapContainerRef.current || !resolvedCoords) {
      return
    }

    if (!mapRef.current) {
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: OPEN_FREE_MAP_STYLE,
        center: [resolvedCoords.lng, resolvedCoords.lat],
        zoom: 14,
      })

      map.addControl(new maplibregl.NavigationControl(), 'top-right')

      const marker = new maplibregl.Marker({ color: '#dc2626' })
        .setLngLat([resolvedCoords.lng, resolvedCoords.lat])
        .addTo(map)

      mapRef.current = map
      markerRef.current = marker
    } else {
      markerRef.current?.setLngLat([resolvedCoords.lng, resolvedCoords.lat])
      mapRef.current.flyTo({
        center: [resolvedCoords.lng, resolvedCoords.lat],
        zoom: 14,
      })
    }
  }, [resolvedCoords])

  useEffect(() => {
    return () => {
      mapRef.current?.remove()
      mapRef.current = null
      markerRef.current = null
    }
  }, [])

  return (
    <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-3 text-sm font-semibold text-slate-700">Location Map</p>

      <div className="h-[260px] overflow-hidden rounded-xl border border-slate-200 bg-white">
        {isResolving ? (
          <div className="flex h-full items-center justify-center text-sm text-slate-500">
            Loading map location...
          </div>
        ) : resolvedCoords ? (
          <div ref={mapContainerRef} className="h-full w-full" />
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center text-sm text-slate-500">
            Could not resolve this request location on the map.
          </div>
        )}
      </div>

      {resolvedCoords && (
        <p className="mt-3 text-xs text-slate-500">
          Pin: {resolvedCoords.lat.toFixed(6)}, {resolvedCoords.lng.toFixed(6)}
        </p>
      )}
    </div>
  )
}

export default RequestLocationMap
