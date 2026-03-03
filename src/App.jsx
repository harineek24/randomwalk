import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MarketResearch from './components/MarketResearch'
import UserJourneys from './components/UserJourneys'
import Reporting from './components/Reporting'
import Presentations from './components/Presentations'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-slate-200">
      <Navbar />
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <MarketResearch />
      </ScrollReveal>
      <ScrollReveal>
        <UserJourneys />
      </ScrollReveal>
      <ScrollReveal>
        <Reporting />
      </ScrollReveal>
      <ScrollReveal>
        <Presentations />
      </ScrollReveal>
      <Footer />
    </div>
  )
}
