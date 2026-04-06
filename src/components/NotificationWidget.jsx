import { useState } from 'react'
import { Bell, MapPin, Droplets, CheckCircle2, Clock3, ShieldAlert, X } from 'lucide-react'

function NotificationWidget() {
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Urgent donation needed near you',
      message: 'A patient nearby needs O+ blood urgently.',
      time: '1 min ago',
      type: 'urgent',
      unread: true,
    },
    {
      id: 2,
      title: 'Your blood request was accepted',
      message: 'A donor has accepted your recent blood request.',
      time: '8 min ago',
      type: 'success',
      unread: true,
    },
    {
      id: 3,
      title: 'Donation confirmation needed',
      message: 'Please confirm whether the blood donation was completed.',
      time: '20 min ago',
      type: 'pending',
      unread: true,
    },
    {
      id: 4,
      title: 'New request matches your blood group',
      message: 'A nearby request matches your registered blood group.',
      time: '1 hour ago',
      type: 'request',
      unread: false,
    },
  ])

  const unreadCount = notifications.filter((item) => item.unread).length

  const toggleOpen = () => {
    setOpen((prev) => !prev)

    if (!open) {
      setNotifications((prev) =>
        prev.map((item) => ({
          ...item,
          unread: false,
        }))
      )
    }
  }

  const clearOne = (id) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id))
  }

  const clearAll = () => {
    setNotifications([])
  }

  const getIcon = (type) => {
    switch (type) {
      case 'urgent':
        return <ShieldAlert size={18} className="text-red-600" />
      case 'request':
        return <Droplets size={18} className="text-rose-600" />
      case 'success':
        return <CheckCircle2 size={18} className="text-emerald-600" />
      case 'pending':
        return <Clock3 size={18} className="text-amber-600" />
      default:
        return <MapPin size={18} className="text-sky-600" />
    }
  }

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {open && (
        <div className="mb-3 w-[340px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
            <div>
              <h3 className="text-base font-bold text-slate-800">Notifications</h3>
              <p className="text-xs text-slate-500">Alerts and updates</p>
            </div>

            {notifications.length > 0 && (
              <button
                onClick={clearAll}
                className="text-xs font-semibold text-red-600 transition hover:text-red-700"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="max-h-[380px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="px-4 py-10 text-center text-sm text-slate-500">
                No notifications yet.
              </div>
            ) : (
              notifications.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 border-b border-slate-100 px-4 py-4 transition hover:bg-slate-50"
                >
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-100">
                    {getIcon(item.type)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800">{item.title}</h4>
                        <p className="mt-1 text-sm text-slate-500">{item.message}</p>
                        <p className="mt-2 text-xs text-slate-400">{item.time}</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => clearOne(item.id)}
                        className="rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={toggleOpen}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-slate-200 transition hover:-translate-y-1"
      >
        <Bell className="text-slate-800" size={22} />

        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white">
            {unreadCount}
          </span>
        )}
      </button>
    </div>
  )
}

export default NotificationWidget