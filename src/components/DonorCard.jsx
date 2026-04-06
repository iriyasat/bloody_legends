function DonorCard({ donor }) {
  const getVerificationClasses = (verified) => {
    return verified
      ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
      : 'bg-amber-100 text-amber-700 border border-amber-200'
  }

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-rose-500 p-5 text-white">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-100">
              Available Donor
            </p>
            <h3 className="mt-2 text-xl font-bold">{donor.name}</h3>
            <p className="mt-1 text-sm text-red-100">
              {donor.city}, {donor.area}
            </p>
          </div>

          <div className="rounded-2xl bg-white px-4 py-3 text-center shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Blood
            </p>
            <p className="mt-1 text-lg font-bold text-red-600">
              {donor.bloodGroup}
            </p>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Age
            </p>
            <p className="mt-1 text-lg font-bold text-slate-800">{donor.age}</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Gender
            </p>
            <p className="mt-1 font-semibold text-slate-800">{donor.gender}</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Last Donation
            </p>
            <p className="mt-1 font-semibold text-slate-800">
              {donor.lastDonation}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Verification
            </p>
            <span
              className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold ${getVerificationClasses(
                donor.verified
              )}`}
            >
              {donor.verified ? 'Verified' : 'Not Verified'}
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Availability
            </p>
            <p className="font-semibold text-slate-700">Ready to contact</p>
          </div>

          <button className="inline-flex items-center rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700">
            Contact Donor
          </button>
        </div>
      </div>
    </div>
  )
}

export default DonorCard