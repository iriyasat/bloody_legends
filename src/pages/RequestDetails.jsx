import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import RequestLocationMap from '../components/RequestLocationMap'
import { currentUser } from '../data/dummyData'
import { getRequests } from '../data/requestStore'

function RequestDetails() {
  const { id } = useParams()
  const requests = getRequests()
  const request = requests.find((item) => item.id === Number(id))

  if (!request) {
    return <p className="text-slate-600">Request not found.</p>
  }

  return (
    <div>
      <PageHeader title="Request Details" subtitle="Full request information and donation status tracking." />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
          <h3 className="text-2xl font-bold text-slate-800">{request.patientName}</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <p><span className="font-semibold">Blood Group:</span> {request.bloodGroup}</p>
            <p><span className="font-semibold">Units:</span> {request.unitsNeeded}</p>
            <p><span className="font-semibold">Hospital:</span> {request.hospital}</p>
            <p><span className="font-semibold">Location:</span> {request.location}</p>
            <p><span className="font-semibold">Urgency:</span> {request.urgency}</p>
            <p><span className="font-semibold">Date Needed:</span> {request.dateNeeded}</p>
            <p><span className="font-semibold">Requester:</span> {request.requester}</p>
            <p><span className="font-semibold">Status:</span> {request.status}</p>
          </div>

          <RequestLocationMap
            location={request.location}
            locationMeta={request.locationMeta}
          />

          <div className="mt-5 rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-700">Notes</p>
            <p className="mt-2 text-sm text-slate-600">{request.notes}</p>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800">Actions</h3>
          <div className="mt-4 space-y-3">
            <button className="w-full rounded-xl bg-red-600 px-4 py-3 font-semibold text-white">
              Accept Request
            </button>
            <button className="w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white">
              Mark Donation Done
            </button>
            {currentUser.role === 'user' && (
              <button className="w-full rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700">
                Confirm Donation Received
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestDetails