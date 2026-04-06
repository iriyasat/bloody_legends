const uploads = [
  {
    id: 1,
    donor: 'Fariha Anjum',
    group: 'A-',
    source: 'Lab report',
    uploadedAt: 'Today, 9:20 AM',
    quality: 'Clear',
    status: 'Ready for approval',
  },
  {
    id: 2,
    donor: 'Rakib Hossain',
    group: 'O+',
    source: 'Hospital card',
    uploadedAt: 'Today, 11:50 AM',
    quality: 'Moderate',
    status: 'Needs manual inspection',
  },
  {
    id: 3,
    donor: 'Jannatul Mawa',
    group: 'AB+',
    source: 'Diagnostic report',
    uploadedAt: 'Yesterday, 8:15 PM',
    quality: 'Blurry',
    status: 'Request new upload',
  },
  {
    id: 4,
    donor: 'Naim Sheikh',
    group: 'B-',
    source: 'Blood certificate',
    uploadedAt: 'Yesterday, 3:40 PM',
    quality: 'Clear',
    status: 'Ready for approval',
  },
]

function statusClass(status) {
  if (status === 'Ready for approval') return 'bg-emerald-100 text-emerald-700'
  if (status === 'Needs manual inspection') return 'bg-amber-100 text-amber-700'
  return 'bg-rose-100 text-rose-700'
}

function BloodGroupReviews() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-black text-slate-800">Blood Group Reviews</h1>
        <p className="mt-2 text-sm text-slate-500">
          Inspect uploaded blood group proof, spot poor-quality files, and confirm blood type evidence before donor approval.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Ready for approval</p>
          <h2 className="mt-2 text-3xl font-black text-slate-800">12</h2>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Manual inspection</p>
          <h2 className="mt-2 text-3xl font-black text-slate-800">5</h2>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Reupload required</p>
          <h2 className="mt-2 text-3xl font-black text-slate-800">3</h2>
        </div>
      </section>

      <section className="space-y-4">
        {uploads.map((item) => (
          <div key={item.id} className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="grid gap-5 lg:grid-cols-[220px_1fr]">
              <div className="flex h-44 items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 text-center text-sm font-semibold text-slate-400">
                Upload Preview
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold text-slate-800">{item.donor}</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Source: {item.source} • Uploaded: {item.uploadedAt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
                      {item.group}
                    </span>
                    <span className={`rounded-full px-3 py-1 text-sm font-bold ${statusClass(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-500">Image quality</p>
                    <p className="mt-2 text-sm text-slate-700">{item.quality}</p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-500">Review hint</p>
                    <p className="mt-2 text-sm text-slate-700">
                      Cross-check the visible blood group and ensure the upload is readable enough for verification.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white">
                    Approve proof
                  </button>
                  <button className="rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white">
                    Mark for review
                  </button>
                  <button className="rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white">
                    Open upload
                  </button>
                  <button className="rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white">
                    Ask reupload
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default BloodGroupReviews