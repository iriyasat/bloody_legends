import { currentUser } from '../data/dummyData'

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/60 bg-white/75 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            BloodyLegends
          </h1>
          <p className="text-sm text-slate-500">
            Connecting blood donors with those in need
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-slate-800">
              {currentUser.name}
            </p>
            <p className="text-xs text-slate-500">{currentUser.location}</p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-rose-500 text-base font-bold text-white shadow-md">
            {currentUser.name.charAt(0)}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar