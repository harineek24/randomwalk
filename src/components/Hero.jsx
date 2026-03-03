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
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
          Wearing Multiple Hats
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-purple-400 bg-clip-text text-transparent">
            at a Startup
          </span>
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          I conducted in-depth market research and competitive analysis, designed
          end-to-end user journey workflows, built reporting dashboards, and
          delivered executive presentations on digital maturity in HR — all while
          developing the workflows that tied these efforts together.
        </p>
      </div>
    </section>
  )
}
