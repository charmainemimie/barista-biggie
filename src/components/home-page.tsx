import { CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, Users, Award, Globe, Zap, Target, Eye } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

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
      <section className="py-16 px-4 bg-coffee-dark/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cream-light mb-12">Professional Experience</h2>

          <div className="space-y-8">
            {/* Salute Coffee Co */}
            <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-gold-accent">Manager & Barista</CardTitle>
                    <CardDescription className="text-cream-light text-lg">Salute Coffee Co., Pretoria</CardDescription>
                  </div>
                  <Badge className="bg-gold-accent text-coffee-dark w-fit">February 2024 – Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <p className="text-cream-light/90 mb-4">
                      Orchestrated café operations with finesse, steering a dedicated team and elevating customer
                      experiences in a dynamic, high-volume setting. Spearheaded a transformative menu overhaul,
                      introducing innovative beverages like the Cappuccino & Red Velvet Cake Pairing.
                    </p>
                    <div className="flex items-center gap-2 text-gold-accent font-semibold">
                      <Zap className="w-5 h-5" />
                      <span>17.5% Sales Increase</span>
                    </div>
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="Salute Coffee Co Experience"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Baristas@Work */}
            <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-gold-accent">Assistant Manager & Barista</CardTitle>
                    <CardDescription className="text-cream-light text-lg">Baristas@Work, Pretoria</CardDescription>
                  </div>
                  <Badge className="bg-gold-accent text-coffee-dark w-fit">January 2019 – February 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <p className="text-cream-light/90 mb-4">
                      Directed operations at a bustling Pretoria café, leading a proficient barista team with strategic
                      oversight. Pioneered innovative drinks including Coffee Freezo, Mango Crusher, and various fruit
                      crushers.
                    </p>
                    <div className="flex items-center gap-2 text-gold-accent font-semibold">
                      <Zap className="w-5 h-5" />
                      <span>30% Sales Surge</span>
                    </div>
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="Baristas@Work Experience"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coffee Cousins */}
            <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-gold-accent">Head Barista</CardTitle>
                    <CardDescription className="text-cream-light text-lg">Coffee Cousins, Pretoria</CardDescription>
                  </div>
                  <Badge className="bg-gold-accent text-coffee-dark w-fit">December 2016 – January 2019</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <p className="text-cream-light/90 mb-4">
                      Commanded barista operations across three bustling Coffee Cousins locations with authoritative
                      leadership. Spearheaded onboarding and training of new staff, serving 100+ patrons daily.
                    </p>
                    <div className="flex items-center gap-2 text-gold-accent font-semibold">
                      <Users className="w-5 h-5" />
                      <span>3 Locations Managed</span>
                    </div>
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="Coffee Cousins Experience"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cream-light mb-12">Special Events Experience</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gold-accent">Wedding Barista</CardTitle>
                <CardDescription className="text-cream-light">Various Events, Pretoria</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Wedding Coffee Station"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-cream-light/90">
                    Crafted artisanal beverages for nuptial celebrations across Pretoria, serving up to 200 guests with
                    mobile coffee stations and signature drinks like Coffee Freezo.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gold-accent">Festival Barista</CardTitle>
                <CardDescription className="text-cream-light">MTN Bushfire Festival, Eswatini</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Festival Coffee Setup"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-cream-light/90">
                    Served over 5,000 cups of artisanal coffee to thousands of attendees from 60+ nations at Africa's
                    premier music and arts festival.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Artisanal Blends */}
      <section className="py-16 px-4 bg-coffee-dark/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cream-light mb-12">Signature Artisanal Blends</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Coffee Freezo",
                description:
                  "A virtuoso creation blended with premium coffee freezo powder, chilled milk, and crowned with whipped cream and coffee beans.",
                image: "/placeholder.svg?height=250&width=250",
              },
              {
                name: "Cappuccino & Red Velvet Cake Pairing",
                description:
                  "Classic cappuccino with rich double-shot espresso paired harmoniously with luscious red velvet cake.",
                image: "/placeholder.svg?height=250&width=250",
              },
              {
                name: "Mango Crusher",
                description:
                  "A radiant tropical escape crafted with mango fruit concentrate, creating a chilled, slushy ambrosia.",
                image: "/placeholder.svg?height=250&width=250",
              },
              {
                name: "Butterscotch Latte",
                description:
                  "Decadent masterpiece with robust espresso, creamy white symphony, and rich butterscotch syrup.",
                image: "/placeholder.svg?height=250&width=250",
              },
              {
                name: "Mixedberry Crusher",
                description:
                  "Vibrant burst of berry bliss with mixed berry syrup, achieving perfect tart and sweet balance.",
                image: "/placeholder.svg?height=250&width=250",
              },
              {
                name: "Lemonade Crusher",
                description:
                  "Zesty, invigorating delight with lemonade concentrate, garnished with fresh mint for elevated charm.",
                image: "/placeholder.svg?height=250&width=250",
              },
            ].map((blend, index) => (
              <Card key={index} className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img
                      src={blend.image || "/placeholder.svg"}
                      alt={blend.name}
                      width={250}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gold-accent mb-2">{blend.name}</h3>
                  <p className="text-cream-light/90 text-sm">{blend.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
