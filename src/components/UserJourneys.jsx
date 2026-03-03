import SectionHeader from './SectionHeader'

const CANVA_VIEW_URL =
  'https://www.canva.com/design/DAF_dFbConc/3UGCgFEGgRRiEi6mS7xSqA/view'

const CANVA_EMBED_URL =
  'https://www.canva.com/design/DAF_dFbConc/3UGCgFEGgRRiEi6mS7xSqA/view?embed'

const processSteps = [
  {
    step: '01',
    title: 'Research & Discovery',
    description: 'Conducted user interviews and analyzed behavioral data to map real user needs.',
  },
  {
    step: '02',
    title: 'Flow Mapping',
    description: 'Designed end-to-end user workflows covering onboarding, core actions, and edge cases.',
  },
  {
    step: '03',
    title: 'Iteration & Refinement',
    description: 'Iterated on flows based on stakeholder feedback and usability testing insights.',
  },
  {
    step: '04',
    title: 'Handoff & Documentation',
    description: 'Delivered polished workflow diagrams with clear annotations for the development team.',
  },
]

export default function UserJourneys() {
  return (
    <section id="user-journeys" className="py-24 px-6 bg-surface-light/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="User Journeys"
          title="User Journey Workflows"
          description="Designed detailed user journey maps and workflow diagrams to align the team on product experience and identify friction points."
        />

        {/* Embed */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface-light mb-8 shadow-2xl shadow-black/20">
          <div className="flex items-center gap-2 px-4 py-3 bg-surface-lighter/50 border-b border-white/5">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-xs text-slate-500 ml-2">User Journey Workflows</span>
          </div>
          <iframe
            src={CANVA_EMBED_URL}
            className="w-full h-[500px] md:h-[600px]"
            title="User Journey Workflows"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Open externally */}
        <div className="text-center mb-16">
          <a
            href={CANVA_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-slate-300 hover:text-white transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Full Design
          </a>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((item) => (
            <div key={item.step} className="relative p-6 rounded-xl bg-surface/80 border border-white/5">
              <span className="text-4xl font-extrabold text-primary/15 absolute top-4 right-4">
                {item.step}
              </span>
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
