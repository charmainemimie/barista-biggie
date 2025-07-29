
import { Card, CardContent } from "@/components/ui/card";

type BlendCardProps = {
  name: string;
  description: string;
  image: string;
};

export function BlendCard({ name, description, image }: BlendCardProps) {
  return (
    <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm hover:bg-coffee-medium/60 transition-colors">
      <CardContent className="p-6">
        <div className="aspect-square rounded-lg overflow-hidden mb-4">
          <img
            loading="lazy"
            src={image || "/placeholder.svg"}
            alt={name}
            width={250}
            height={250}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-xl font-bold text-gold-accent mb-2">{name}</h3>
        <p className="text-cream-light/90 text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
