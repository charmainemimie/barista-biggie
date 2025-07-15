import HeroSection from "./hero-section"
import GamesShowcase from "./games-showcase"
import FeaturesSection from "./features-section"
import CTASection from "./cta-section"
import Footer from "./footer"
import Header from "./header"
export default function ArcadeLanding() {
  return (
    <div className="min-h-screen bg-gray-900">
        <Header />
      <HeroSection />
      <GamesShowcase />
      <FeaturesSection />
      <CTASection />
      <Footer />

    </div>
  )
}
