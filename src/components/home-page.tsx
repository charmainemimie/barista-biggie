
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, Users, Award, Globe, Zap, Target, Eye } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import ExperiencePage from "../pages/experience-page"
import PortfolioPage from "../pages/portfolio-page"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-coffee-dark via-coffee-medium to-coffee-dark">
      <HeroSection />

      {/* Vision & Mission */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-gold-accent" />
                  <CardTitle className="text-2xl text-cream-light">Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-cream-light/90 leading-relaxed">
                  To elevate coffee artistry by delivering the highest level of sensory experience in every cup,
                  inspiring joy and connection worldwide while sharing my expertise in coffee craftsmanship with
                  baristas and enthusiasts to foster a global community of excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-gold-accent" />
                  <CardTitle className="text-2xl text-cream-light">Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-cream-light/90 leading-relaxed">
                  To craft every cup with unparalleled expertise, leveraging my mastery of coffee craftsmanship, precise
                  grinder calibration, optimized extraction techniques, and velvety milk frothing to deliver smooth,
                  flavorful experiences while fostering inclusive, memorable customer interactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-coffee-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cream-light mb-8">Explore My Journey</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/experience">
              <Button className="w-full bg-gold-accent text-coffee-dark hover:bg-gold-accent/90 h-16 text-lg">
                Professional Experience
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button className="w-full bg-cream-light text-coffee-dark hover:bg-cream-light/90 h-16 text-lg">
                Signature Blends
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="w-full bg-gold-accent text-coffee-dark hover:bg-gold-accent/90 h-16 text-lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
 <ExperiencePage />

      {/* Artisanal Blends */}
  <PortfolioPage />

      {/* Skills */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cream-light mb-12">Core Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Coffee className="w-8 h-8" />,
                title: "Barista Artistry",
                description:
                  "Masterfully skilled in crafting cappuccinos, lattes, and artisanal blends with unparalleled quality.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Coffee Bean Expertise",
                description: "Proficient in selecting and blending Robusta, Arabica, Liberica, and Excelsa beans.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Grinder Calibration",
                description: "Expert in adjusting grinder settings for optimal particle size and precise extraction.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Leadership & Mentorship",
                description:
                  "Expertly guided barista teams across multiple locations, training staff in advanced techniques.",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Multilingual Engagement",
                description: "Fluent in English and Shona, with conversational A2-level German for diverse clientele.",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Beverage Innovation",
                description:
                  "Pioneered artisanal blends driving 30% sales increases through creative menu development.",
              },
            ].map((skill, index) => (
              <Card key={index} className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-gold-accent mb-4 flex justify-center">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-cream-light mb-3">{skill.title}</h3>
                  <p className="text-cream-light/90 text-sm">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-coffee-dark border-t border-cream-light/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-cream-light mb-4">Ready to Elevate Your Coffee Experience?</h3>
          <p className="text-cream-light/90 mb-6">
            Let's craft something extraordinary together. From intimate gatherings to large-scale events, I bring
            passion, precision, and artistry to every cup.
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="bg-gold-accent text-coffee-dark px-6 py-2 text-lg">Available for Events</Badge>
            <Badge className="bg-cream-light text-coffee-dark px-6 py-2 text-lg">Consultation Services</Badge>
          </div>
        </div>
      </footer>
    </div>
  );
}
