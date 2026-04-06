import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Chatbot from '../components/Chatbot'
import NotificationWidget from '../components/NotificationWidget'


function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-red-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 lg:ml-72">
          <Navbar />
          <main className="p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
      <NotificationWidget />
      <Chatbot />
    </div>
  )
}

export default DashboardLayout