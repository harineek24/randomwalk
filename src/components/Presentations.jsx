import SectionHeader from './SectionHeader'

const DRIVE_VIEW_URL =
  'https://drive.google.com/file/d/1G_55rOhU-WJtMdOofDPOc8pqQd740xDk/view?usp=sharing'

const DRIVE_EMBED_URL =
  'https://drive.google.com/file/d/1G_55rOhU-WJtMdOofDPOc8pqQd740xDk/preview'

export default function Presentations() {
  return (
    <section id="presentation" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Presentation"
          title="Digital Maturity HR"
          description="A comprehensive presentation on digital maturity in HR — communicating research findings and strategy recommendations to stakeholders."
        />

        {/* Google Drive Embed */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface-light mb-6 shadow-2xl shadow-black/20">
          <div className="flex items-center gap-2 px-4 py-3 bg-surface-lighter/50 border-b border-white/5">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-xs text-slate-500 ml-2">Digital Maturity HR — Presentation</span>
          </div>
          <iframe
            src={DRIVE_EMBED_URL}
            className="w-full h-[500px] md:h-[600px]"
            title="Digital Maturity HR Presentation"
            allow="autoplay"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Open externally */}
        <div className="text-center">
          <a
            href={DRIVE_VIEW_URL}
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
      </div>
    </section>
  )
}
