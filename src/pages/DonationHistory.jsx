import PageHeader from '../components/PageHeader'
import ProtectedDonorFeature from '../components/ProtectedDonorFeature'
import { donationHistory } from '../data/dummyData'

function DonationHistory() {
  return (
    <ProtectedDonorFeature>
      <div>
        <PageHeader title="Donation History" subtitle="See your completed donations and records." />

        <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold text-slate-700">Date</th>
                <th className="px-4 py-3 text-sm font-semibold text-slate-700">Recipient / Hospital</th>
                <th className="px-4 py-3 text-sm font-semibold text-slate-700">Blood Group</th>
                <th className="px-4 py-3 text-sm font-semibold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {donationHistory.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-3 text-sm text-slate-600">{item.date}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{item.recipient}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{item.bloodGroup}</td>
                  <td className="px-4 py-3 text-sm font-medium text-green-600">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ProtectedDonorFeature>
  )
}

export default DonationHistory