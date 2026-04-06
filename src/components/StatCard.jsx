function StatCard({ title, value }) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-5 shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <p className="text-sm text-slate-500">{title}</p>
      <h3 className="mt-2 text-3xl font-bold text-slate-800">{value}</h3>
    </div>
  )
}

export default StatCard