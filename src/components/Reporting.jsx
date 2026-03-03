import SectionHeader from './SectionHeader'

const reportingSkills = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'KPI Dashboards',
    description:
      'Built dashboards that tracked key performance indicators, enabling leadership to monitor progress and make data-driven pivots.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: 'Trend Analysis',
    description:
      'Identified and visualized trends across user behavior and market data, highlighting opportunities and risks to the team.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Weekly Reports',
    description:
      'Delivered concise weekly reports that synthesized cross-functional updates into clear, actionable summaries for stakeholders.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: 'Data Visualization',
    description:
      'Transformed complex datasets into intuitive charts and visual narratives that made insights accessible to non-technical audiences.',
  },
]

export default function Reporting() {
  return (
    <section id="reporting" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Reporting"
          title="Analytical Reporting Skills"
          description="Created data-driven reports and dashboards that provided leadership with clear visibility into metrics, trends, and actionable insights."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {reportingSkills.map((item) => (
            <div
              key={item.title}
              className="group p-8 rounded-2xl bg-surface-light/60 border border-white/5 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
