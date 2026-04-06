const stats = [
  { title: 'Pending Verifications', value: 14, note: 'Donor requests waiting for admin review' },
  { title: 'Blood Proof Reviews', value: 9, note: 'Uploads that need verification' },
  { title: 'Active Blood Requests', value: 22, note: 'Currently open or accepted requests' },
  { title: 'Completion Approvals', value: 6, note: 'Waiting for final admin action' },
]

const recentVerifications = [
  { name: 'Ayesha Rahman', group: 'A+', location: 'Dhanmondi, Dhaka', status: 'Pending review' },
  { name: 'Tanvir Hasan', group: 'O-', location: 'Uttara, Dhaka', status: 'Proof needs reupload' },
  { name: 'Nusrat Jahan', group: 'B+', location: 'Khulna', status: 'Ready to approve' },
]

const requestAlerts = [
  { patient: 'Mehedi Islam', hospital: 'DMCH', group: 'AB-', status: 'Accepted by donor' },
  { patient: 'Farzana Akter', hospital: 'Square Hospital', group: 'O+', status: 'Awaiting requester confirmation' },
  { patient: 'Rafi Ahmed', hospital: 'Popular Medical', group: 'A-', status: 'Admin follow-up needed' },
]

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Admin Panel</p>
        <h1 className="mt-2 text-3xl font-black text-slate-800">Admin Dashboard</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-500">
          Manage donor verification, blood group proof uploads, request oversight, and manual completion approvals from one place.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.title} className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">{item.title}</p>
            <h2 className="mt-3 text-3xl font-black text-slate-800">{item.value}</h2>
            <p className="mt-2 text-sm text-slate-500">{item.note}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800">Recent donor verification queue</h2>
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">Needs attention</span>
          </div>

          <div className="space-y-4">
            {recentVerifications.map((donor) => (
              <div key={donor.name} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{donor.name}</h3>
                    <p className="text-sm text-slate-500">{donor.location}</p>
                  </div>
                  <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
                    {donor.group}
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-600">{donor.status}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
                    Approve
                  </button>
                  <button className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white">
                    Reupload
                  </button>
                  <button className="rounded-xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800">Request oversight</h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">Live status</span>
          </div>

          <div className="space-y-4">
            {requestAlerts.map((item) => (
              <div key={item.patient} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{item.patient}</h3>
                    <p className="text-sm text-slate-500">{item.hospital}</p>
                  </div>
                  <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
                    {item.group}
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-600">{item.status}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-white">
                    View details
                  </button>
                  <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                    Mark completed
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800">Today’s admin summary</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-500">Approved today</p>
            <p className="mt-2 text-2xl font-black text-slate-800">7 donors</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-500">Requests completed</p>
            <p className="mt-2 text-2xl font-black text-slate-800">11 cases</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-500">Flagged accounts</p>
            <p className="mt-2 text-2xl font-black text-slate-800">3 users</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminDashboard