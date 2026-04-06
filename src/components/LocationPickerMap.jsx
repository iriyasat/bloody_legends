import { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'

const OPEN_FREE_MAP_STYLE = 'https://tiles.openfreemap.org/styles/liberty'
const DEFAULT_CENTER = { lng: 90.4125, lat: 23.8103 }

function buildLocationPayload(address, lng, lat) {
  return {
    address,
    lat: Number(lat.toFixed(6)),
    lng: Number(lng.toFixed(6)),
  }
}

async function reverseGeocode(lat, lng) {
  const params = new URLSearchParams({
    format: 'jsonv2',
    lat: String(lat),
    lon: String(lng),
  })

  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?${params.toString()}`, {
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to reverse geocode current location.')
  }

  const data = await response.json()
  return data.display_name || `${lat.toFixed(6)}, ${lng.toFixed(6)}`
}

async function forwardGeocode(query) {
  const params = new URLSearchParams({
    format: 'jsonv2',
    q: query,
    limit: '1',
  })

  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to search location.')
  }

  const data = await response.json()

  if (!data.length) {
    return null
  }

  return {
    address: data[0].display_name,
    lat: Number(data[0].lat),
    lng: Number(data[0].lon),
  }
}

function LocationPickerMap({ onLocationChange }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const markerRef = useRef(null)

  const [searchQuery, setSearchQuery] = useState('')
  const [locationLabel, setLocationLabel] = useState('')
  const [isBusy, setIsBusy] = useState(false)

  const setMapLocation = async (lng, lat, shouldFly = true) => {
    if (!markerRef.current) return

    markerRef.current.setLngLat([lng, lat])

    if (shouldFly) {
      mapRef.current?.flyTo({
        center: [lng, lat],
        zoom: 14,
      })
    }

    const address = await reverseGeocode(lat, lng)
    const payload = buildLocationPayload(address, lng, lat)
    setLocationLabel(payload.address)
    onLocationChange(payload)
  }

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: OPEN_FREE_MAP_STYLE,
      center: [DEFAULT_CENTER.lng, DEFAULT_CENTER.lat],
      zoom: 11,
    })

    map.addControl(new maplibregl.NavigationControl(), 'top-right')

    const marker = new maplibregl.Marker({ draggable: true, color: '#dc2626' })
      .setLngLat([DEFAULT_CENTER.lng, DEFAULT_CENTER.lat])
      .addTo(map)

    marker.on('dragend', async () => {
      const lngLat = marker.getLngLat()
      setIsBusy(true)
      try {
        await setMapLocation(lngLat.lng, lngLat.lat, false)
      } catch (error) {
        console.error(error)
      } finally {
        setIsBusy(false)
      }
    })

    map.on('click', async (event) => {
      setIsBusy(true)
      try {
        await setMapLocation(event.lngLat.lng, event.lngLat.lat)
      } catch (error) {
        console.error(error)
      } finally {
        setIsBusy(false)
      }
    })

    mapRef.current = map
    markerRef.current = marker

    setMapLocation(DEFAULT_CENTER.lng, DEFAULT_CENTER.lat, false).catch((error) => {
      console.error(error)
      const fallback = buildLocationPayload(
        `${DEFAULT_CENTER.lat.toFixed(6)}, ${DEFAULT_CENTER.lng.toFixed(6)}`,
        DEFAULT_CENTER.lng,
        DEFAULT_CENTER.lat
      )
      setLocationLabel(fallback.address)
      onLocationChange(fallback)
    })

    return () => {
      map.remove()
      mapRef.current = null
      markerRef.current = null
    }
  }, [onLocationChange])

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported in your browser.')
      return
    }

    setIsBusy(true)

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          await setMapLocation(position.coords.longitude, position.coords.latitude)
        } catch (error) {
          console.error(error)
        } finally {
          setIsBusy(false)
        }
      },
      (error) => {
        console.error(error)
        alert('Could not get your location. Please allow location access.')
        setIsBusy(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    )
  }

  const handleSearch = async () => {
    if (!searchQuery.trim()) return

    setIsBusy(true)

    try {
      const found = await forwardGeocode(searchQuery)

      if (!found) {
        alert('No location found. Try a more specific address.')
        return
      }

      const payload = buildLocationPayload(found.address, found.lng, found.lat)
      markerRef.current?.setLngLat([payload.lng, payload.lat])
      mapRef.current?.flyTo({
        center: [payload.lng, payload.lat],
        zoom: 14,
      })
      setLocationLabel(payload.address)
      onLocationChange(payload)
    } catch (error) {
      console.error(error)
      alert('Location search failed. Please try again.')
    } finally {
      setIsBusy(false)
    }
  }

  return (
    <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
      <div className="flex flex-col gap-3 md:flex-row">
        <input
          className="w-full rounded-xl border p-3"
          placeholder="Search address, hospital, or area"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleSearch())}
        />

        <button
          type="button"
          onClick={handleSearch}
          className="rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white"
          disabled={isBusy}
        >
          Search
        </button>

        <button
          type="button"
          onClick={handleUseCurrentLocation}
          className="rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white"
          disabled={isBusy}
        >
          {isBusy ? 'Updating...' : 'Use Current Location'}
        </button>
      </div>

      <div ref={containerRef} className="h-[360px] w-full overflow-hidden rounded-2xl border border-slate-200" />

      <p className="rounded-xl bg-white p-3 text-sm text-slate-700">
        <span className="font-semibold text-slate-900">Selected location:</span>{' '}
        {locationLabel || 'Pick a point on the map or search for an address.'}
      </p>
      <p className="text-xs text-slate-500">
        Tip: click anywhere on the map or drag the red pin to fine-tune the location.
      </p>
    </div>
  )
}

export default LocationPickerMap
