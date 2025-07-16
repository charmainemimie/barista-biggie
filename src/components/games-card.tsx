import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Clock, Zap } from "lucide-react"


interface GameCardProps {
  title: string
  description: string
  category: string
  players?: string
  difficulty?: string
  duration?: string
  image?: string
  isVR?: boolean
  isNew?: boolean
}

export default function GameCard({
  title,
  description,
  category,
  players,
  difficulty,
  duration,
  image,
  isVR = false,
  isNew = false,
}: GameCardProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "classic":
        return "bg-yellow-600"
      case "modern":
        return "bg-blue-600"
      case "vr":
        return "bg-purple-600"
      case "multiplayer":
        return "bg-green-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 overflow-hidden">
      <div className="relative">
        {(isNew || isVR) && (
          <div className="absolute top-2 right-2 z-10 flex gap-2">
            {isNew && <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">NEW</span>}
            {isVR && <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">VR</span>}
          </div>
        )}

        <div className="relative overflow-hidden">
          <img
            src={image || "/placeholder.svg?height=200&width=300"}
            alt={title}
            width={300}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs px-2 py-1 rounded ${getCategoryColor(category)} text-white font-semibold`}>
            {category}
          </span>
          {difficulty && (
            <span className="text-xs text-gray-400 border border-gray-600 px-2 py-1 rounded">{difficulty}</span>
          )}
        </div>

        <h3 className="text-xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">
          {title}
        </h3>

        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
          {players && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{players}</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          )}
        </div>

        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
          <Zap className="w-4 h-4 mr-2" />
          Play Now
        </Button>
      </CardContent>
    </Card>
  )
}
