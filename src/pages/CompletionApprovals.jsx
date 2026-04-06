const approvals = [
  {
    id: '#CA-301',
    patient: 'Farzana Akter',
    donor: 'Mahin Chowdhury',
    hospital: 'Square Hospital',
    bloodGroup: 'O+',
    proof: 'Donor submitted image proof',
    waitTime: '18 hours',
    status: 'Awaiting requester update',
  },
  {
    id: '#CA-302',
    patient: 'Rafi Ahmed',
    donor: 'Nadia Islam',
    hospital: 'Popular Medical',
    bloodGroup: 'A-',
    proof: 'Hospital slip available',
    waitTime: '1 day',
    status: 'Ready for admin decision',
  },
  {
    id: '#CA-303',
    patient: 'Moumita Das',
    donor: 'Sabbir Hasan',
    hospital: 'Evercare Hospital',
    bloodGroup: 'B+',
    proof: 'Requester unreachable',
    waitTime: '2 days',
    status: 'Needs follow-up',
  },
]

function statusClass(status) {
  if (status === 'Awaiting requester update') return 'bg-amber-100 text-amber-700'
  if (status === 'Ready for admin decision') return 'bg-emerald-100 text-emerald-700'
  return 'bg-blue-100 text-blue-700'
}

function CompletionApprovals() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-black text-slate-800">Completion Approvals</h1>
        <p className="mt-2 text-sm text-slate-500">
          Handle cases where donation likely happened but the requester forgot to mark the request as completed.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Pending completion cases</p>
          <h2 className="mt-2 text-3xl font-black text-slate-800">6</h2>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Admin-reviewed today</p>
          <h2 className="mt-2 text-3xl font-black text-slate-800">4</h2>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Marked completed</p>
          <h2 className="mt-2 text-3xl font-black text-slate-800">3</h2>
        </div>
      </section>

      <section className="space-y-4">
        {approvals.map((item) => (
          <div key={item.id} className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-bold text-slate-800">{item.patient}</h2>
                  <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
                    {item.bloodGroup}
                  </span>
                  <span className={`rounded-full px-3 py-1 text-sm font-bold ${statusClass(item.status)}`}>
                    {item.status}
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  {item.id} • {item.hospital}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                Waiting for: <span className="font-semibold text-slate-800">{item.waitTime}</span>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-500">Assigned donor</p>
                <p className="mt-2 text-sm text-slate-700">{item.donor}</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-500">Available proof</p>
                <p className="mt-2 text-sm text-slate-700">{item.proof}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white">
                Confirm completion
              </button>
              <button className="rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white">
                Review proof
              </button>
              <button className="rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white">
                Contact requester
              </button>
              <button className="rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white">
                Keep pending
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default CompletionApprovals