import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Gift, Trophy, Calendar } from "lucide-react"

const groupPackages = [
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Birthday Party Package",
    price: "$80",
    duration: "3 hours",
    description: "Perfect celebration for kids and teens",
    features: [
      "Up to 8 participants",
      "Dedicated party area",
      "Birthday cake included",
      "Party decorations",
      "Unlimited arcade access",
      "VR experience for birthday child",
      "Party host assistance",
    ],
    color: "from-pink-600 to-purple-600",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Group Gaming Session",
    price: "$120",
    duration: "2 hours",
    description: "Team building and group fun",
    features: [
      "Up to 12 participants",
      "All arcade games access",
      "Group tournament setup",
      "Snacks and drinks included",
      "Team competition prizes",
      "Group photo session",
    ],
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Tournament Package",
    price: "$200",
    duration: "4 hours",
    description: "Competitive gaming experience",
    features: [
      "Up to 20 participants",
      "Professional tournament setup",
      "Live scoreboard display",
      "Winner prizes included",
      "Tournament certificates",
      "Food and beverage service",
      "Event photography",
    ],
    color: "from-yellow-600 to-orange-600",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Corporate Event",
    price: "$300",
    duration: "Half day",
    description: "Professional team building",
    features: [
      "Up to 30 participants",
      "Private venue access",
      "Customized gaming activities",
      "Catering options available",
      "Team building exercises",
      "Professional event coordination",
      "Corporate branding options",
    ],
    color: "from-green-600 to-teal-600",
  },
]

export default function GroupPackages() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Group <span className="text-yellow-400">Packages</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Special packages for parties, events, and group celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groupPackages.map((pkg, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${pkg.color} border-none shadow-2xl hover:scale-105 transition-all duration-300`}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-white">{pkg.icon}</div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-white">{pkg.title}</CardTitle>
                    <p className="text-white/80">{pkg.description}</p>
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-white/80">/ {pkg.duration}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-bold" size="lg">
                  Book Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
