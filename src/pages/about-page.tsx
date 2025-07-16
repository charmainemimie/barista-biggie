import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Globe, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cream-light mb-4">About Biggie</h1>
          <p className="text-xl text-gold-accent">Master of Coffee Artistry</p>
        </div>

        <div className="space-y-8">
          <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gold-accent flex items-center gap-3">
                <Coffee className="w-8 h-8" />
                Coffee Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cream-light/90 leading-relaxed mb-4">
                With profound expertise in mastering coffee blends and in-depth knowledge of Robusta, Arabica, Liberica,
                and Excelsa beans, I craft distinctive flavor profiles that transform every cup into an art form. My
                precision in calibrating grinders for optimal extraction and fine-tuning espresso machines ensures
                smooth, non-bitter shots every time.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-gold-accent text-coffee-dark">Robusta Expert</Badge>
                <Badge className="bg-cream-light text-coffee-dark">Arabica Specialist</Badge>
                <Badge className="bg-gold-accent text-coffee-dark">Liberica Master</Badge>
                <Badge className="bg-cream-light text-coffee-dark">Excelsa Artisan</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gold-accent flex items-center gap-3">
                <Users className="w-8 h-8" />
                Leadership Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cream-light/90 leading-relaxed">
                As Head Barista at Coffee Cousins, Assistant Manager at Baristas@Work, and Manager at Salute Coffee Co.,
                I've led teams, trained staff in advanced brewing techniques, and introduced signature drinks that have
                driven significant sales increases. My leadership style focuses on mentoring and fostering excellence in
                every team member.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gold-accent flex items-center gap-3">
                <Globe className="w-8 h-8" />
                Global Connection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cream-light/90 leading-relaxed">
                Fluent in English and Shona, with conversational A2-level German, I connect effortlessly with a global
                clientele. This multilingual ability has been invaluable in creating inclusive environments and serving
                diverse communities, from local Pretoria cafes to international festival attendees.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gold-accent flex items-center gap-3">
                <Award className="w-8 h-8" />
                Innovation & Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cream-light/90 leading-relaxed">
                My innovative approach to menu development has consistently delivered results. I've introduced signature
                drinks like Coffee Freezos, various fruit crushers, and unique pairings that have driven a 30% sales
                surge at Baristas@Work and a 17.5% sales increase at Salute Coffee Co. through creative menu additions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
