import SectionHeader from './SectionHeader'

const JOURNEY_VIEW_URL =
  'https://www.canva.com/design/DAF_dFbConc/ZUOd1sl4D3dmGdhzC8cYdg/view?utm_content=DAF_dFbConc&utm_campaign=designshare&utm_medium=embeds&utm_source=link'

const JOURNEY_EMBED_URL =
  'https://www.canva.com/design/DAF_dFbConc/ZUOd1sl4D3dmGdhzC8cYdg/view?embed'

const PRESENTATION_VIEW_URL =
  'https://www.canva.com/design/DAF_S65NSm0/3Z-DKfTKj3oeEYuEfyevQg/watch?utm_content=DAF_S65NSm0&utm_campaign=designshare&utm_medium=embeds&utm_source=link'

const PRESENTATION_EMBED_URL =
  'https://www.canva.com/design/DAF_S65NSm0/3Z-DKfTKj3oeEYuEfyevQg/watch?embed'

const ZOOM = 1.75
const SCALE_PCT = `${(100 / ZOOM).toFixed(4)}%`

function ZoomedEmbed({ src, title, label, viewUrl }) {
  return (
    <div className="mb-8">
      {/* Embed with 175% zoom */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface-light shadow-2xl shadow-black/20">
        <div className="flex items-center gap-2 px-4 py-3 bg-surface-lighter/50 border-b border-white/5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <span className="text-xs text-slate-500 ml-2">{label}</span>
        </div>
        <div className="relative w-full overflow-hidden" style={{ height: '70vh' }}>
          <iframe
            src={src}
            style={{
              width: SCALE_PCT,
              height: SCALE_PCT,
              transform: `scale(${ZOOM})`,
              transformOrigin: 'top left',
              border: 'none',
            }}
            title={title}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      {/* Open externally */}
      <div className="text-center mt-4">
        <a
          href={viewUrl}
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
    </div>
  )
}

export default function UserJourneys() {
  return (
    <section id="user-journeys" className="py-16 px-6 bg-surface-light/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="User Journeys"
          title="User Journey Workflows"
          description="Designed detailed user journey maps and workflow diagrams to align the team on product experience and identify friction points."
        />

        <ZoomedEmbed
          src={JOURNEY_EMBED_URL}
          title="User Journey Roadmap"
          label="User Journey Roadmap"
          viewUrl={JOURNEY_VIEW_URL}
        />

        <ZoomedEmbed
          src={PRESENTATION_EMBED_URL}
          title="Digital Maturity HR — Canva Design"
          label="Digital Maturity HR — Design"
          viewUrl={PRESENTATION_VIEW_URL}
        />
      </div>
    </section>
  )
}
