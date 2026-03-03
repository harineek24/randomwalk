import Presentations from './components/Presentations'
import UserJourneys from './components/UserJourneys'
import MarketResearch from './components/MarketResearch'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-slate-200">
      <ScrollReveal>
        <Presentations />
      </ScrollReveal>
      <ScrollReveal>
        <MarketResearch />
      </ScrollReveal>
      <ScrollReveal>
        <UserJourneys />
      </ScrollReveal>
      <Footer />
    </div>
  )
}
