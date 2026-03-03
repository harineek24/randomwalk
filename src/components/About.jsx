const skills = [
  { name: 'Market Research', icon: '📊' },
  { name: 'User Journey Mapping', icon: '🗺️' },
  { name: 'Data Analysis', icon: '📈' },
  { name: 'Reporting & Dashboards', icon: '📋' },
  { name: 'Presentation Design', icon: '🎨' },
  { name: 'Cross-functional Collaboration', icon: '🤝' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              About My Internship
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              A startup experience that demanded versatility
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              At a fast-paced startup, I had the unique opportunity to contribute
              across multiple domains. Rather than being siloed into a single role,
              I took on responsibilities spanning market intelligence, product design,
              analytical reporting, and strategic presentations.
            </p>
            <p className="text-slate-400 leading-relaxed">
              This portfolio highlights the breadth and depth of my contributions —
              from building comprehensive market research spreadsheets to designing
              intuitive user journey workflows and delivering executive-level reports
              and presentations.
            </p>
          </div>

          {/* Right — skills grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group p-5 rounded-xl bg-surface-light/60 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="text-2xl block mb-3">{skill.icon}</span>
                <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
