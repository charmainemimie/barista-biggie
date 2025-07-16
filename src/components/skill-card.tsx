import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface SkillCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm hover:bg-coffee-medium/60 transition-colors">
      <CardContent className="p-6 text-center">
        <div className="text-gold-accent mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-bold text-cream-light mb-3">{title}</h3>
        <p className="text-cream-light/90 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
