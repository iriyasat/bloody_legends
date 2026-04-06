const requests = [
  {
    id: '#BR-1021',
    patient: 'Mehedi Islam',
    hospital: 'DMCH',
    bloodGroup: 'AB-',
    units: 2,
    requester: 'Rima Sultana',
    status: 'Open',
  },
  {
    id: '#BR-1022',
    patient: 'Farzana Akter',
    hospital: 'Square Hospital',
    bloodGroup: 'O+',
    units: 1,
    requester: 'Shafin Rahman',
    status: 'Accepted',
  },
  {
    id: '#BR-1023',
    patient: 'Rafi Ahmed',
    hospital: 'Popular Medical',
    bloodGroup: 'A-',
    units: 3,
    requester: 'Muntaha Noor',
    status: 'Awaiting confirmation',
  },
  {
    id: '#BR-1024',
    patient: 'Samiha Jannat',
    hospital: 'United Hospital',
    bloodGroup: 'B+',
    units: 1,
    requester: 'Tariq Hasan',
    status: 'Disputed',
  },
]

function statusClass(status) {
  if (status === 'Open') return 'bg-blue-100 text-blue-700'
  if (status === 'Accepted') return 'bg-amber-100 text-amber-700'
  if (status === 'Awaiting confirmation') return 'bg-purple-100 text-purple-700'
  return 'bg-rose-100 text-rose-700'
}

function BloodRequestsAdmin() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-black text-slate-800">Blood Requests</h1>
        <p className="mt-2 text-sm text-slate-500">
          Monitor all request activity, check assigned donors, and step in when a request gets stuck or disputed.
        </p>
      </section>

      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-col gap-3 md:flex-row">
            <input
              type="text"
              placeholder="Search by patient, hospital, or request ID"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-red-400"
            />
            <select className="rounded-2xl border border-slate-200 px-4 py-3 outline-none">
              <option>All statuses</option>
              <option>Open</option>
              <option>Accepted</option>
              <option>Awaiting confirmation</option>
              <option>Disputed</option>
            </select>
          </div>

          <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
            Total requests: 48
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {requests.map((request) => (
            <div key={request.id} className="rounded-3xl border border-slate-200 p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-bold text-slate-800">{request.patient}</h2>
                    <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
                      {request.bloodGroup}
                    </span>
                    <span className={`rounded-full px-3 py-1 text-sm font-bold ${statusClass(request.status)}`}>
                      {request.status}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    {request.id} • {request.hospital}
                  </p>
                </div>

                <div className="grid gap-2 text-sm text-slate-600 md:text-right">
                  <p>
                    Requester: <span className="font-semibold text-slate-800">{request.requester}</span>
                  </p>
                  <p>
                    Units needed: <span className="font-semibold text-slate-800">{request.units}</span>
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button className="rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white">
                  View request
                </button>
                <button className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white">
                  Assign action
                </button>
                <button className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white">
                  Mark completed
                </button>
                <button className="rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white">
                  Flag case
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default BloodRequestsAdmin