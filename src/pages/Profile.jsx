import PageHeader from '../components/PageHeader'
import { currentUser } from '../data/dummyData'

function Profile() {
  return (
    <div>
      <PageHeader title="Profile" subtitle="Manage your personal and donor-related information." />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-1">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-3xl font-bold text-white">
            {currentUser.name.charAt(0)}
          </div>
          <h3 className="mt-4 text-xl font-bold text-slate-800">{currentUser.name}</h3>
          <p className="text-sm text-slate-500">{currentUser.email}</p>
          <p className="mt-2 text-sm text-slate-600">Location: {currentUser.location}</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-slate-500">Phone</p>
              <p className="font-semibold text-slate-800">{currentUser.phone}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Blood Group</p>
              <p className="font-semibold text-slate-800">{currentUser.bloodGroup}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Donor Applied</p>
              <p className="font-semibold text-slate-800">{currentUser.donorApplied ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Donor Verified</p>
              <p className="font-semibold text-slate-800">{currentUser.donorVerified ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">BMI</p>
              <p className="font-semibold text-slate-800">{currentUser.bmi}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Chronic Disease</p>
              <p className="font-semibold text-slate-800">{currentUser.chronicDisease}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile