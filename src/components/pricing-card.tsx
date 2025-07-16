import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  duration: string
  features: string[]
  isPopular?: boolean
  isVR?: boolean
  buttonText?: string
}

export default function PricingCard({
  title,
  price,
  duration,
  features,
  isPopular = false,
  isVR = false,
  buttonText = "Choose Plan",
}: PricingCardProps) {
  return (
    <Card
      className={`relative transition-all duration-300 hover:scale-105 ${
        isPopular
          ? "bg-gradient-to-br from-yellow-600 to-orange-600 border-yellow-400 shadow-2xl"
          : isVR
            ? "bg-gradient-to-br from-purple-900 to-pink-900 border-purple-500"
            : "bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className={`text-2xl font-bold ${isPopular ? "text-black" : "text-white"}`}>{title}</CardTitle>
        <div className="space-y-1">
          <div
            className={`text-4xl font-bold ${isPopular ? "text-black" : isVR ? "text-purple-300" : "text-yellow-400"}`}
          >
            ${price}
          </div>
          <div className={`text-sm ${isPopular ? "text-black/80" : "text-gray-400"}`}>{duration}</div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className={`w-5 h-5 ${isPopular ? "text-black" : isVR ? "text-purple-400" : "text-green-400"}`} />
              <span className={`${isPopular ? "text-black" : "text-gray-300"}`}>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full font-bold ${
            isPopular
              ? "bg-black text-yellow-400 hover:bg-gray-900"
              : isVR
                ? "bg-purple-600 hover:bg-purple-700 text-white"
                : "bg-yellow-500 hover:bg-yellow-600 text-black"
          }`}
          size="lg"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}
