const pendingDonors = [
  {
    id: 1,
    name: 'Ayesha Rahman',
    email: 'ayesha@example.com',
    location: 'Dhanmondi, Dhaka',
    formBloodGroup: 'A+',
    nidBloodGroup: 'A+',
    confidence: '96%',
    submitted: 'Today, 10:30 AM',
    nidStatus: 'AI Match Confirmed',
    note: 'NID blood group matches donor form input.',
  },
  {
    id: 2,
    name: 'Tanvir Hasan',
    email: 'tanvir@example.com',
    location: 'Uttara, Dhaka',
    formBloodGroup: 'O-',
    nidBloodGroup: 'B-',
    confidence: '91%',
    submitted: 'Yesterday, 7:45 PM',
    nidStatus: 'AI Mismatch Detected',
    note: 'Form value does not match extracted NID blood group.',
  },
  {
    id: 3,
    name: 'Nusrat Jahan',
    email: 'nusrat@example.com',
    location: 'Khulna',
    formBloodGroup: 'B+',
    nidBloodGroup: 'B+',
    confidence: '82%',
    submitted: 'Yesterday, 2:10 PM',
    nidStatus: 'Verified by Admin',
    note: 'AI matched successfully and admin verified the request.',
  },
  {
    id: 4,
    name: 'Siam Ahmed',
    email: 'siam@example.com',
    location: 'Chattogram',
    formBloodGroup: 'AB+',
    nidBloodGroup: 'Not detected',
    confidence: 'Low',
    submitted: '2 days ago',
    nidStatus: 'Unreadable NID',
    note: 'NID upload is unclear. Reupload required.',
  },
]

function getStatusClass(status) {
  if (status === 'AI Match Confirmed') return 'bg-emerald-100 text-emerald-700'
  if (status === 'AI Mismatch Detected') return 'bg-rose-100 text-rose-700'
  if (status === 'Verified by Admin') return 'bg-blue-100 text-blue-700'
  return 'bg-amber-100 text-amber-700'
}

function DonorVerifications() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-black text-slate-800">Donor Verifications</h1>
        <p className="mt-2 text-sm text-slate-500">
          Review donor applications, compare form blood group with NID-detected blood group, and approve only after validation.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Pending reviews</p>
          <h2 className="mt-2 text-3xl font-black text-slate-800">14</h2>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">AI match confirmed</p>
          <h2 className="mt-2 text-3xl font-black text-slate-800">8</h2>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Mismatches detected</p>
          <h2 className="mt-2 text-3xl font-black text-slate-800">3</h2>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Reupload needed</p>
          <h2 className="mt-2 text-3xl font-black text-slate-800">3</h2>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 flex-col gap-3 md:flex-row">
            <input
              type="text"
              placeholder="Search donor by name or email"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-red-400"
            />
            <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none">
              <option>All verification states</option>
              <option>AI Match Confirmed</option>
              <option>AI Mismatch Detected</option>
              <option>Unreadable NID</option>
              <option>Verified by Admin</option>
            </select>
          </div>

          <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
            {pendingDonors.length} applications shown
          </div>
        </div>

        <div className="mt-6 space-y-5">
          {pendingDonors.map((donor) => (
            <div key={donor.id} className="rounded-3xl border border-slate-200 p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-bold text-slate-800">{donor.name}</h2>
                    <span className={`rounded-full px-3 py-1 text-sm font-bold ${getStatusClass(donor.nidStatus)}`}>
                      {donor.nidStatus}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">{donor.email}</p>
                  <p className="mt-1 text-sm text-slate-500">{donor.location}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Submitted: <span className="font-semibold text-slate-800">{donor.submitted}</span>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-500">Form blood group</p>
                  <p className="mt-2 text-xl font-black text-slate-800">{donor.formBloodGroup}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-500">NID-detected blood group</p>
                  <p className="mt-2 text-xl font-black text-slate-800">{donor.nidBloodGroup}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-500">OCR confidence</p>
                  <p className="mt-2 text-xl font-black text-slate-800">{donor.confidence}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-dashed border-slate-300 p-4">
                  <p className="text-sm font-semibold text-slate-500">Uploaded documents</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">NID front</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">NID back</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">Form data</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-500">System note</p>
                  <p className="mt-2 text-sm text-slate-700">{donor.note}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white">
                  Approve donor
                </button>
                <button className="rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white">
                  View NID
                </button>
                <button className="rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white">
                  Request reupload
                </button>
                <button className="rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DonorVerifications