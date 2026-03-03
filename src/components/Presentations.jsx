import SectionHeader from './SectionHeader'

const DRIVE_VIEW_URL =
  'https://drive.google.com/file/d/1G_55rOhU-WJtMdOofDPOc8pqQd740xDk/view?usp=sharing'

export default function Presentations() {
  return (
    <section id="presentation" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Presentation"
          title="Digital Maturity HR"
          description="A comprehensive presentation on digital maturity in HR — communicating research findings and strategy recommendations to stakeholders."
        />

        <div className="text-center">
          <a
            href={DRIVE_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark rounded-xl text-white font-medium text-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Presentation
          </a>
        </div>
      </div>
    </section>
  )
}
