import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'

function DonorRegistration() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const bmi = useMemo(() => {
    const heightInCm = parseFloat(height)
    const weightInKg = parseFloat(weight)

    if (!heightInCm || !weightInKg) return ''

    const heightInMeters = heightInCm / 100
    const bmiValue = weightInKg / (heightInMeters * heightInMeters)

    return bmiValue.toFixed(1)
  }, [height, weight])

  return (
    <div>
      <PageHeader title="Donor Registration" subtitle="Apply to become a verified donor." />

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <form className="grid gap-6">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Basic Information</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border p-3" placeholder="National ID Number" />
              <input className="rounded-xl border p-3" placeholder="Blood Group" />

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
                step="0.1"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />

              <input
                className="rounded-xl border bg-slate-50 p-3"
                placeholder="Calculated BMI"
                value={bmi}
                readOnly
              />

              <select className="rounded-xl border p-3">
                <option>How often do you donate?</option>
                <option>First time</option>
                <option>Occasionally</option>
                <option>Regularly</option>
              </select>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Health Screening</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <select className="rounded-xl border p-3">
                <option>Do you have any chronic disease?</option>
                <option>No</option>
                <option>Yes</option>
              </select>

              <input className="rounded-xl border p-3" placeholder="If yes, mention chronic disease" />

              <select className="rounded-xl border p-3">
                <option>Do you have asthma?</option>
                <option>No</option>
                <option>Yes</option>
              </select>

              <select className="rounded-xl border p-3">
                <option>Do you often feel dizziness or fainting?</option>
                <option>No</option>
                <option>Yes</option>
              </select>

              <select className="rounded-xl border p-3">
                <option>Do you have anemia?</option>
                <option>No</option>
                <option>Yes</option>
              </select>

              <select className="rounded-xl border p-3">
                <option>Do you have diabetes?</option>
                <option>No</option>
                <option>Yes</option>
              </select>

              <select className="rounded-xl border p-3">
                <option>Do you have high blood pressure?</option>
                <option>No</option>
                <option>Yes</option>
              </select>

              <select className="rounded-xl border p-3">
                <option>Do you have any heart disease?</option>
                <option>No</option>
                <option>Yes</option>
              </select>

              <select className="rounded-xl border p-3">
                <option>Have you had any recent surgery?</option>
                <option>No</option>
                <option>Yes</option>
              </select>

              <input className="rounded-xl border p-3" placeholder="If yes, mention surgery details" />

              <select className="rounded-xl border p-3">
                <option>Are you currently taking any medication?</option>
                <option>No</option>
                <option>Yes</option>
              </select>

              <input className="rounded-xl border p-3" placeholder="If yes, list medications" />

              <select className="rounded-xl border p-3">
                <option>Have you had any serious allergy?</option>
                <option>No</option>
                <option>Yes</option>
              </select>

              <select className="rounded-xl border p-3">
                <option>Have you been sick recently?</option>
                <option>No</option>
                <option>Yes</option>
              </select>

              <select className="rounded-xl border p-3">
                <option>Do you smoke?</option>
                <option>No</option>
                <option>Yes</option>
              </select>

              <select className="rounded-xl border p-3">
                <option>Do you consume alcohol?</option>
                <option>No</option>
                <option>Yes</option>
              </select>

              <select className="rounded-xl border p-3">
                <option>Have you donated blood in the last 3 months?</option>
                <option>No</option>
                <option>Yes</option>
              </select>

              <select className="rounded-xl border p-3">
                <option>Have you tested positive for hepatitis or other blood-borne disease?</option>
                <option>No</option>
                <option>Yes</option>
              </select>

              <textarea
                className="rounded-xl border p-3 md:col-span-2"
                rows="4"
                placeholder="Additional health notes"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Verification</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border p-3 md:col-span-2" type="file" />
            </div>
          </div>

          <button className="rounded-xl bg-red-600 px-4 py-3 font-semibold text-white">
            Submit Donor Application
          </button>
        </form>
      </div>
    </div>
  )
}

export default DonorRegistration