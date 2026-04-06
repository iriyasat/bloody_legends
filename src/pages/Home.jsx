import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
              Emergency Blood Donation Platform
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Connect donors and patients faster when every second matters.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              BloodyLegends helps users create blood requests, find donors, track donations,
              and manage donor registration with a simple dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/register" className="rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white">
                Get Started
              </Link>
              <Link to="/login" className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-700">
                Login
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-red-50 p-5">
                <h3 className="font-bold text-red-700">Find Donors</h3>
                <p className="mt-2 text-sm text-slate-600">Search by blood group and location.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <h3 className="font-bold text-slate-700">Create Requests</h3>
                <p className="mt-2 text-sm text-slate-600">Post urgent needs quickly.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <h3 className="font-bold text-slate-700">Donor Registration</h3>
                <p className="mt-2 text-sm text-slate-600">Collect BMI and chronic disease data.</p>
              </div>
              <div className="rounded-2xl bg-red-50 p-5">
                <h3 className="font-bold text-red-700">Track Completion</h3>
                <p className="mt-2 text-sm text-slate-600">Requester confirms after donation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home