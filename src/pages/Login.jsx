import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-slate-800">Login</h2>
        <p className="mt-2 text-sm text-slate-500">Welcome back to BloodyLegends.</p>

        <form className="mt-6 space-y-4">
          <input
            className="w-full rounded-xl border p-3"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full rounded-xl border p-3"
            type="password"
            placeholder="Password"
          />

          <Link
            to="/app"
            className="block w-full rounded-xl bg-red-600 px-4 py-3 text-center font-semibold text-white"
          >
            Login
          </Link>

          <Link
            to="/admin"
            className="block w-full rounded-xl border border-slate-300 bg-slate-800 px-4 py-3 text-center font-semibold text-white transition hover:bg-slate-900"
          >
            Login as Administrator
          </Link>
        </form>

        <p className="mt-4 text-sm text-slate-500">
          Don’t have an account?{' '}
          <Link to="/register" className="font-semibold text-red-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login