import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import LocationPickerMap from '../components/LocationPickerMap'
import { createRequest } from '../data/requestStore'

function CreateRequest() {
  const navigate = useNavigate()
  const [location, setLocation] = useState({
    address: '',
    lat: null,
    lng: null,
  })

  const [patientName, setPatientName] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')
  const [hospital, setHospital] = useState('')
  const [unitsNeeded, setUnitsNeeded] = useState('1')
  const [dateNeeded, setDateNeeded] = useState('')
  const [urgency, setUrgency] = useState('')
  const [notes, setNotes] = useState('')

  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [gender, setGender] = useState('')
  const bmi = useMemo(() => {
    const heightInCm = parseFloat(height)
    const weightInKg = parseFloat(weight)

    if (!heightInCm || !weightInKg) return ''

    const heightInMeters = heightInCm / 100
    const bmiValue = weightInKg / (heightInMeters * heightInMeters)

    return bmiValue.toFixed(1)
  }, [height, weight])

  const getBmiStatus = (bmi) => {
    const value = parseFloat(bmi)

    if (!value) return ''
    if (value < 18.5) return 'Underweight'
    if (value < 25) return 'Normal'
    if (value < 30) return 'Overweight'
    return 'Obese'
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!patientName || !bloodGroup || !hospital || !dateNeeded || !urgency) {
      alert('Please fill in the required request details.')
      return
    }

    if (!location.address || location.lat == null || location.lng == null) {
      alert('Please pick a valid map location before submitting.')
      return
    }

    createRequest({
      patientName,
      bloodGroup,
      unitsNeeded: Number(unitsNeeded) || 1,
      hospital,
      location: location.address,
      locationMeta: {
        lat: location.lat,
        lng: location.lng,
      },
      urgency,
      dateNeeded,
      notes,
    })

    alert('Request created successfully.')
    navigate('/app/blood-requests')
  }

  return (
    <div>
      <PageHeader
        title="Create Blood Request"
        subtitle="Submit a blood request with patient and hospital details."
      />

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <input
            className="rounded-xl border p-3"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />

          <select
            className="rounded-xl border p-3"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="">Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>

          <input
            className="rounded-xl border p-3"
            placeholder="Hospital Name"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
          />

          <input
            className="rounded-xl border p-3"
            type="number"
            min="1"
            placeholder="Units Needed"
            value={unitsNeeded}
            onChange={(e) => setUnitsNeeded(e.target.value)}
          />

          <div className="md:col-span-2 space-y-3">
            <LocationPickerMap onLocationChange={setLocation} />
            <input
              className="w-full rounded-xl border bg-slate-100 p-3"
              value={location.address}
              readOnly
              placeholder="Selected address"
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                className="rounded-xl border bg-slate-100 p-3"
                value={location.lat ?? ''}
                readOnly
                placeholder="Latitude"
              />
              <input
                className="rounded-xl border bg-slate-100 p-3"
                value={location.lng ?? ''}
                readOnly
                placeholder="Longitude"
              />
            </div>
          </div>

          <input
            className="rounded-xl border p-3"
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <input
            className="rounded-xl border p-3"
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <select
            className="rounded-xl border p-3"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            className="rounded-xl border p-3 bg-slate-100"
            type="text"
            placeholder="BMI"
            value={bmi ? `${bmi} (${getBmiStatus(bmi)})` : ''}
            readOnly
          />

          <input
            className="rounded-xl border p-3 md:col-span-2"
            type="date"
            value={dateNeeded}
            onChange={(e) => setDateNeeded(e.target.value)}
          />

          <select
            className="rounded-xl border p-3 md:col-span-2"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
          >
            <option value="">Urgency Level</option>
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
          </select>

          <textarea
            className="min-h-[120px] rounded-xl border p-3 md:col-span-2"
            placeholder="Additional notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="rounded-xl bg-red-600 px-4 py-3 font-semibold text-white md:col-span-2"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateRequest