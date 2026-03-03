export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/15 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Startup Internship Portfolio
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
          Wearing Multiple Hats
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-purple-400 bg-clip-text text-transparent">
            at a Startup
          </span>
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          From market research and data analysis to user journey design and
          executive presentations — a showcase of cross-functional impact.
        </p>

        <a
          href="#presentation"
          className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
        >
          View My Work
        </a>
      </div>
    </section>
  )
}
