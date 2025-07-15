import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
//import Image from "next/image"

interface GameCardProps {
  title: string
  image: string
  category: string
  players: string
  isPopular?: boolean
}

export default function GameCard({ title, image, category, players, isPopular }: GameCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
      {isPopular && (
        <div className="absolute -top-2 -right-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold z-10">
          Popular!
        </div>
      )}
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            width={300}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4 text-white">
          <h3 className="text-xl font-bold mb-2 text-yellow-400">{title}</h3>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm bg-purple-600 px-2 py-1 rounded">{category}</span>
            <span className="text-sm text-gray-300">{players}</span>
          </div>
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Play Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
