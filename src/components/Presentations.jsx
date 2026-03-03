import SectionHeader from './SectionHeader'

const CANVA_VIEW_URL =
  'https://www.canva.com/design/DAF_S65NSm0/KF5Jm3hRjAYYIMuRq1GZKQ/view'

const CANVA_EMBED_URL =
  'https://www.canva.com/design/DAF_S65NSm0/KF5Jm3hRjAYYIMuRq1GZKQ/view?embed'

const strengths = [
  {
    title: 'Visual Storytelling',
    description:
      'Crafted slide decks that combined data, visuals, and narrative to make complex information engaging and easy to follow.',
  },
  {
    title: 'Executive Communication',
    description:
      'Delivered presentations to leadership that distilled weeks of research into focused, impactful takeaways.',
  },
  {
    title: 'Design & Clarity',
    description:
      'Maintained consistent, professional design standards — clean layouts, purposeful color use, and scannable information hierarchy.',
  },
]

export default function Presentations() {
  return (
    <section id="presentations" className="py-24 px-6 bg-surface-light/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Presentations"
          title="Presentation & Communication"
          description="Designed and delivered polished presentations that communicated research findings, strategy recommendations, and project updates to stakeholders."
        />

        {/* Embed */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface-light mb-8 shadow-2xl shadow-black/20">
          <div className="flex items-center gap-2 px-4 py-3 bg-surface-lighter/50 border-b border-white/5">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-xs text-slate-500 ml-2">Presentation Deck</span>
          </div>
          <iframe
            src={CANVA_EMBED_URL}
            className="w-full h-[500px] md:h-[600px]"
            title="Presentation Deck"
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
            View Full Presentation
          </a>
        </div>

        {/* Strengths */}
        <div className="grid md:grid-cols-3 gap-6">
          {strengths.map((item, i) => (
            <div
              key={item.title}
              className="relative p-6 rounded-xl bg-surface/80 border border-white/5 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-purple-400" />
              <h3 className="text-lg font-semibold text-white mb-2 mt-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
