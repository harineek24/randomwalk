export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Startup Internship Portfolio
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
          Wearing Multiple Hats
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-purple-400 bg-clip-text text-transparent">
            at a Startup
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          From market research and data analysis to user journey design and
          executive presentations — a showcase of cross-functional impact
          during my internship.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#market-research"
            className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-300 font-medium transition-all duration-200"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
            <div className="w-1 h-2.5 rounded-full bg-slate-500 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
