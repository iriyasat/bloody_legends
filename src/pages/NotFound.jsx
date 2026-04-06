import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-4 text-center">
      <h1 className="text-5xl font-bold text-slate-800">404</h1>
      <p className="mt-3 text-slate-600">Page not found.</p>
      <Link to="/" className="mt-5 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound