import HeroSection from "./hero-section"
import GamesShowcase from "./games-showcase"
import FeaturesSection from "./features-section"
import CTASection from "./cta-section"

export default function ArcadeLanding() {
  return (
    <div className="min-h-screen bg-gray-900">
      <HeroSection />
      <GamesShowcase />
      <FeaturesSection />
      <CTASection />
    </div>
  )
}
