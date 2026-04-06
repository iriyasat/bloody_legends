import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'
import RequestCard from '../components/RequestCard'
import { stats, requests } from '../data/dummyData'

function Dashboard() {
  return (
    <div>
      <PageHeader title="Dashboard" subtitle="Overview of requests, donors, and donation activity." />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold text-slate-800">Recent Blood Requests</h3>
        <div className="grid gap-4 lg:grid-cols-2">
          {requests.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard