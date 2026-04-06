function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-8 overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg shadow-slate-200/60 backdrop-blur sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
        BloodyLegends
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
        {subtitle}
      </p>
    </div>
  )
}

export default PageHeader