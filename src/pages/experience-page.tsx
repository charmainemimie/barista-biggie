import { ExperienceCard } from "@/components/experience-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


export default function ExperiencePage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cream-light mb-4">Professional Experience</h1>
          <p className="text-xl text-gold-accent">8 Years of Coffee Excellence</p>
        </div>

        <div className="space-y-8 mb-16">
          <ExperienceCard
            title="Manager & Barista"
            company="Salute Coffee Co., Pretoria"
            period="February 2024 – Present"
            description="Orchestrated café operations with finesse, steering a dedicated team and elevating customer experiences in a dynamic, high-volume setting. Spearheaded a transformative menu overhaul, introducing innovative beverages like the Cappuccino & Red Velvet Cake Pairing."
            achievement="17.5% Sales Increase"
            achievementIcon="sales"
            image="/placeholder.svg?height=200&width=200"
          />

          <ExperienceCard
            title="Assistant Manager & Barista"
            company="Baristas@Work, Pretoria"
            period="January 2019 – February 2023"
            description="Directed operations at a bustling Pretoria café, leading a proficient barista team with strategic oversight. Pioneered innovative drinks including Coffee Freezo, Mango Crusher, and various fruit crushers."
            achievement="30% Sales Surge"
            achievementIcon="sales"
            image="/placeholder.svg?height=200&width=200"
          />

          <ExperienceCard
            title="Head Barista"
            company="Coffee Cousins, Pretoria"
            period="December 2016 – January 2019"
            description="Commanded barista operations across three bustling Coffee Cousins locations with authoritative leadership. Spearheaded onboarding and training of new staff, serving 100+ patrons daily."
            achievement="3 Locations Managed"
            achievementIcon="locations"
            image="/placeholder.svg?height=200&width=200"
          />
        </div>

        {/* Special Events */}
        <div className="bg-coffee-dark/50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-cream-light mb-8">Special Events Experience</h2>

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
      </div>
    </div>
  )
}
