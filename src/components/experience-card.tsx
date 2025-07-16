import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Users } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string // Keep as string, will split internally
  achievement?: string
  achievementIcon?: "sales" | "locations"
  image: string
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  achievement,
  achievementIcon,
  image,
}: ExperienceCardProps) {
  const getIcon = () => {
    switch (achievementIcon) {
      case "sales":
        return <Zap className="w-5 h-5" />
      case "locations":
        return <Users className="w-5 h-5" />
      default:
        return <Zap className="w-5 h-5" />
    }
  }

  // Split the description by newline characters to create an array of points
  const descriptionPoints = description.split("\n").filter((point) => point.trim() !== "")

  return (
    <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-2xl text-gold-accent">{title}</CardTitle>
            <CardDescription className="text-cream-light text-lg">{company}</CardDescription>
          </div>
          <Badge className="bg-gold-accent text-coffee-dark w-fit">{period}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ul className="text-cream-light/90 mb-4 list-disc list-inside space-y-2">
              {descriptionPoints.map((point, index) => (
                <li key={index}>{point.trim()}</li>
              ))}
            </ul>
            {achievement && (
              <div className="flex items-center gap-2 text-gold-accent font-semibold">
                {getIcon()}
                <span>{achievement}</span>
              </div>
            )}
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={`${title} at ${company}`}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
