import PageHeader from '../components/PageHeader'
import DonorCard from '../components/DonorCard'
import { donors } from '../data/dummyData'

function FindDonors() {
  return (
    <div>
      <PageHeader title="Find Donors" subtitle="Browse verified and available donors by location and blood group." />

      <div className="mb-6 grid gap-4 rounded-2xl bg-white p-4 shadow-sm md:grid-cols-4">
        <input className="rounded-xl border p-3" placeholder="Search by name" />
        <select className="rounded-xl border p-3">
          <option>Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>
        <input className="rounded-xl border p-3" placeholder="City" />
        <button className="rounded-xl bg-red-600 px-4 py-3 font-semibold text-white">Search</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {donors.map((donor) => (
          <DonorCard key={donor.id} donor={donor} />
        ))}
      </div>
    </div>
  )
}

export default FindDonors