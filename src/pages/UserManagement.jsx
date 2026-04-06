const users = [
  {
    id: 1,
    name: 'Rima Sultana',
    role: 'Requester',
    email: 'rima@example.com',
    status: 'Active',
    verification: 'Not donor',
  },
  {
    id: 2,
    name: 'Mahin Chowdhury',
    role: 'Verified Donor',
    email: 'mahin@example.com',
    status: 'Active',
    verification: 'Approved',
  },
  {
    id: 3,
    name: 'Nadia Islam',
    role: 'Verified Donor',
    email: 'nadia@example.com',
    status: 'Flagged',
    verification: 'Approved',
  },
  {
    id: 4,
    name: 'Sabbir Hasan',
    role: 'Pending Donor',
    email: 'sabbir@example.com',
    status: 'Under Review',
    verification: 'Pending',
  },
]

function roleClass(role) {
  if (role === 'Verified Donor') return 'bg-emerald-100 text-emerald-700'
  if (role === 'Pending Donor') return 'bg-amber-100 text-amber-700'
  return 'bg-slate-100 text-slate-700'
}

function statusClass(status) {
  if (status === 'Active') return 'bg-blue-100 text-blue-700'
  if (status === 'Flagged') return 'bg-rose-100 text-rose-700'
  return 'bg-amber-100 text-amber-700'
}

function UserManagement() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-black text-slate-800">User Management</h1>
        <p className="mt-2 text-sm text-slate-500">
          Review user roles, verification states, flagged accounts, and donor eligibility from a single admin view.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Total users</p>
          <h2 className="mt-2 text-3xl font-black text-slate-800">124</h2>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Verified donors</p>
          <h2 className="mt-2 text-3xl font-black text-slate-800">58</h2>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Pending donor accounts</p>
          <h2 className="mt-2 text-3xl font-black text-slate-800">12</h2>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Flagged users</p>
          <h2 className="mt-2 text-3xl font-black text-slate-800">4</h2>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            type="text"
            placeholder="Search users by name or email"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-red-400 md:max-w-md"
          />

          <div className="flex flex-wrap gap-3">
            <select className="rounded-2xl border border-slate-200 px-4 py-3 outline-none">
              <option>All roles</option>
              <option>Requester</option>
              <option>Pending Donor</option>
              <option>Verified Donor</option>
            </select>
            <select className="rounded-2xl border border-slate-200 px-4 py-3 outline-none">
              <option>All status</option>
              <option>Active</option>
              <option>Under Review</option>
              <option>Flagged</option>
            </select>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-slate-500">
                <th className="px-4">User</th>
                <th className="px-4">Role</th>
                <th className="px-4">Verification</th>
                <th className="px-4">Status</th>
                <th className="px-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="rounded-2xl bg-slate-50">
                  <td className="rounded-l-2xl px-4 py-4">
                    <p className="font-bold text-slate-800">{user.name}</p>
                    <p className="text-sm text-slate-500">{user.email}</p>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`rounded-full px-3 py-1 text-sm font-bold ${roleClass(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700">{user.verification}</td>
                  <td className="px-4 py-4">
                    <span className={`rounded-full px-3 py-1 text-sm font-bold ${statusClass(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="rounded-r-2xl px-4 py-4">
                    <div className="flex flex-wrap gap-2">
                      <button className="rounded-xl bg-slate-800 px-3 py-2 text-sm font-semibold text-white">
                        View
                      </button>
                      <button className="rounded-xl bg-amber-500 px-3 py-2 text-sm font-semibold text-white">
                        Flag
                      </button>
                      <button className="rounded-xl bg-rose-600 px-3 py-2 text-sm font-semibold text-white">
                        Suspend
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default UserManagement