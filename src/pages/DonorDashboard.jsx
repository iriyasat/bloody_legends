import PageHeader from '../components/PageHeader'
import ProtectedDonorFeature from '../components/ProtectedDonorFeature'
import { donationHistory } from '../data/dummyData'

function DonorDashboard() {
  return (
    <ProtectedDonorFeature>
      <div>
        <PageHeader title="Donor Dashboard" subtitle="Manage your donor activity and availability." />

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Donations</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-800">12</h3>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Pending Requests</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-800">2</h3>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Availability</p>
            <h3 className="mt-2 text-3xl font-bold text-green-600">Available</h3>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800">Recent Donor Activity</h3>
          <div className="mt-4 space-y-3">
            {donationHistory.map((item) => (
              <div key={item.id} className="rounded-xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-800">{item.recipient}</p>
                <p className="text-sm text-slate-500">{item.date} • {item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProtectedDonorFeature>
  )
}

export default DonorDashboard