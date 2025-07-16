import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Zap, Star } from "lucide-react"

const specialOffers = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Happy Hour Special",
    discount: "50% OFF",
    description: "Monday-Friday 2PM-5PM",
    details: "All arcade games half price during weekday afternoons",
    color: "from-blue-600 to-purple-600",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Student Discount",
    discount: "25% OFF",
    description: "Valid student ID required",
    details: "Special rates for students and educational groups",
    color: "from-green-600 to-teal-600",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Weekend Warriors",
    discount: "Buy 2 Get 1",
    description: "Saturday & Sunday",
    details: "Purchase 2 gaming sessions and get the 3rd one free",
    color: "from-orange-600 to-red-600",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "First-Time Visitor",
    discount: "FREE VR",
    description: "New customers only",
    details: "Free 30-minute VR session with any arcade package",
    color: "from-purple-600 to-pink-600",
  },
]

export default function SpecialOffers() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Special <span className="text-yellow-400">Offers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't miss out on these amazing deals and promotions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialOffers.map((offer, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${offer.color} border-none shadow-xl hover:scale-105 transition-all duration-300`}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-white mb-2">{offer.icon}</div>
                <CardTitle className="text-white text-lg">{offer.title}</CardTitle>
                <div className="text-2xl font-bold text-white">{offer.discount}</div>
                <p className="text-white/80 text-sm">{offer.description}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90 text-sm mb-4">{offer.details}</p>
                <Button className="bg-white text-gray-900 hover:bg-gray-100 font-bold text-sm">Claim Offer</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
