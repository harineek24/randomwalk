export default function SectionHeader({ label, title, description }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 leading-relaxed">{description}</p>
      )}
    </div>
  )
}
