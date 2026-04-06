import { useMemo } from 'react'
import PageHeader from '../components/PageHeader'
import RequestCard from '../components/RequestCard'
import { getRequests } from '../data/requestStore'

function BloodRequests() {
  const requests = useMemo(() => getRequests(), [])

  return (
    <div>
      <PageHeader title="Blood Requests" subtitle="Track open, accepted, and pending confirmation requests." />

      <div className="mb-6 grid gap-4 rounded-2xl bg-white p-4 shadow-sm md:grid-cols-4">
        <select className="rounded-xl border p-3">
          <option>All Blood Groups</option>
          <option>A+</option>
          <option>B+</option>
          <option>O+</option>
        </select>
        <select className="rounded-xl border p-3">
          <option>All Status</option>
          <option>Open</option>
          <option>Accepted</option>
          <option>Pending Confirmation</option>
          <option>Completed</option>
        </select>
        <select className="rounded-xl border p-3">
          <option>All Urgency</option>
          <option>Critical</option>
          <option>High</option>
          <option>Medium</option>
        </select>
        <button className="rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white">Apply Filter</button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {requests.map((request) => (
          <RequestCard key={request.id} request={request} />
        ))}
      </div>
    </div>
  )
}

export default BloodRequests