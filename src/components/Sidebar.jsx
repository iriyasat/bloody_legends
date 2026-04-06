import { NavLink } from 'react-router-dom'
import { currentUser } from '../data/dummyData'
import Chatbot from './Chatbot'

const commonLinks = [
  { label: 'Dashboard', path: '/app' },
  { label: 'Find Donors', path: '/app/find-donors' },
  { label: 'Blood Requests', path: '/app/blood-requests' },
  { label: 'Create Request', path: '/app/create-request' },
  { label: 'My Requests', path: '/app/my-requests' },
  { label: 'Profile', path: '/app/profile' },
]

const donorLinks = [
  { label: 'Donor Dashboard', path: '/app/donor-dashboard' },
  { label: 'Donation History', path: '/app/donation-history' },
]

function Sidebar() {
  const navClass = ({ isActive }) =>
    `block rounded-xl px-3 py-2 text-xs font-semibold transition ${
      isActive
        ? 'bg-red-600 text-white shadow-md shadow-red-200'
        : 'text-slate-700 hover:bg-slate-100'
    }`

  return (
    <aside className="hidden h-screen w-80 border-r border-slate-200/70 bg-white/90 p-4 shadow-sm backdrop-blur lg:fixed lg:flex lg:flex-col">
      <div className="mb-5 rounded-2xl bg-gradient-to-br from-red-600 to-rose-500 p-4 text-white shadow-lg">
        <h2 className="text-xl font-bold">BloodyLegends</h2>
        <p className="mt-1 text-xs text-red-100">Blood donation management</p>
      </div>

      <nav className="space-y-1.5">
        {commonLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={navClass}
            end={link.path === '/app'}
          >
            {link.label}
          </NavLink>
        ))}

        <div className="my-3 border-t border-slate-200" />

        {currentUser.donorVerified ? (
          donorLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navClass}>
              {link.label}
            </NavLink>
          ))
        ) : (
          <NavLink to="/app/donor-registration" className={navClass}>
            Become a Donor
          </NavLink>
        )}
      </nav>

      <div className="mt-4 min-h-0 flex-1">

      </div>
    </aside>
  )
}

export default Sidebar