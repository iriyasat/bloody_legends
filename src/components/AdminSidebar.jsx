import { NavLink } from 'react-router-dom'

const adminLinks = [
  { label: 'Admin Dashboard', path: '/admin' },
  { label: 'Donor Verifications', path: '/admin/donor-verifications' },
  { label: 'Blood Group Reviews', path: '/admin/blood-group-reviews' },
  { label: 'Blood Requests', path: '/admin/blood-requests' },
  { label: 'Completion Approvals', path: '/admin/completion-approvals' },
  { label: 'User Management', path: '/admin/user-management' },
]

function AdminSidebar() {
  const navClass = ({ isActive }) =>
    `block rounded-2xl px-4 py-3 text-sm font-semibold transition ${
      isActive
        ? 'bg-red-600 text-white shadow-md shadow-red-200'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`

  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-200 bg-white p-6 lg:block">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-red-600">BloodyLegends</h1>
        <p className="mt-1 text-sm text-slate-500">Administrator Panel</p>
      </div>

      <nav className="space-y-2">
        {adminLinks.map((link) => (
          <NavLink key={link.path} to={link.path} end={link.path === '/admin'} className={navClass}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default AdminSidebar