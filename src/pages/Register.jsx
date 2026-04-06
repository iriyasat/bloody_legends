import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-slate-800">Create Account</h2>
        <p className="mt-2 text-sm text-slate-500">Register as a general user first.</p>

        <form className="mt-6 grid gap-4 sm:grid-cols-2">
          <input className="rounded-xl border p-3" placeholder="Full Name" />
          <input className="rounded-xl border p-3" placeholder="Email" />
          <input className="rounded-xl border p-3" placeholder="Phone Number" />
          <input className="rounded-xl border p-3" placeholder="Location" />
          <input className="rounded-xl border p-3 sm:col-span-2" type="password" placeholder="Password" />
          <Link to="/app" className="sm:col-span-2 rounded-xl bg-red-600 px-4 py-3 text-center font-semibold text-white">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Register