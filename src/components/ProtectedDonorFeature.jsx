import { Link } from 'react-router-dom'
import { currentUser } from '../data/dummyData'

function ProtectedDonorFeature({ children }) {
  if (!currentUser.donorVerified) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h3 className="text-xl font-bold text-slate-800">Please sign up as a donor first</h3>
        <p className="mt-2 text-sm text-slate-500">
          This section is available only for verified donors. You can still use all general features.
        </p>
        <Link
          to="/app/donor-registration"
          className="mt-4 inline-block rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white"
        >
          Go to Donor Registration
        </Link>
      </div>
    )
  }

  return children
}

export default ProtectedDonorFeature