import { Link } from 'react-router-dom'

function RequestCard({ request }) {
  const getUrgencyClasses = (urgency) => {
    switch (urgency) {
      case 'Critical':
        return 'bg-red-100 text-red-700 border border-red-200'
      case 'High':
        return 'bg-orange-100 text-orange-700 border border-orange-200'
      case 'Medium':
        return 'bg-amber-100 text-amber-700 border border-amber-200'
      default:
        return 'bg-slate-100 text-slate-700 border border-slate-200'
    }
  }

  const getStatusClasses = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-yellow-100 text-yellow-700 border border-yellow-200'
      case 'Accepted':
        return 'bg-blue-100 text-blue-700 border border-blue-200'
      case 'Pending Confirmation':
        return 'bg-orange-100 text-orange-700 border border-orange-200'
      case 'Completed':
        return 'bg-green-100 text-green-700 border border-green-200'
      default:
        return 'bg-slate-100 text-slate-700 border border-slate-200'
    }
  }

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-rose-500 p-5 text-white">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-100">
              Blood Request
            </p>
            <h3 className="mt-2 text-xl font-bold">{request.patientName}</h3>
            <p className="mt-1 text-sm text-red-100">{request.hospital}</p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-bold shadow-sm ${getUrgencyClasses(
              request.urgency
            )}`}
          >
            {request.urgency}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Blood Group
            </p>
            <p className="mt-1 text-lg font-bold text-slate-800">
              {request.bloodGroup}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Units Needed
            </p>
            <p className="mt-1 text-lg font-bold text-slate-800">
              {request.unitsNeeded}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Location
            </p>
            <p className="mt-1 font-semibold text-slate-800">
              {request.location}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Status
            </p>
            <span
              className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold ${getStatusClasses(
                request.status
              )}`}
            >
              {request.status}
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Request ID
            </p>
            <p className="font-semibold text-slate-700">#{request.id}</p>
          </div>

          <Link
            to={`/app/blood-requests/${request.id}`}
            className="inline-flex items-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RequestCard