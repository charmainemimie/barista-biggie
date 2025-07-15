import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Trophy, Gamepad2 } from "lucide-react"

const features = [
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: "Latest Games",
    description: "Experience the newest arcade releases and timeless classics",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Flexible Hours",
    description: "Open daily with extended hours for your gaming convenience",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Group Events",
    description: "Perfect for birthday parties, team building, and celebrations",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Tournaments",
    description: "Compete in weekly tournaments and win amazing prizes",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-yellow-400">Our Arcade?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-purple-900 to-blue-900 border-purple-700 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="text-yellow-400 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
