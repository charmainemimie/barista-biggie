import { BlendCard } from "../components/blend-card"

const blends = [
  {
    name: "Coffee Freezo",
    description:
      "A virtuoso creation blended with premium coffee freezo powder, chilled milk, and crowned with whipped cream and coffee beans. Perfected at Baristas@Work, contributing to a 30% sales surge.",
    image: "https://i.ibb.co/35kBJ9fG/profile1.jpg",
  },
  {
    name: "Cappuccino & Red Velvet Cake Pairing",
    description:
      "Classic cappuccino with rich double-shot espresso paired harmoniously with luscious red velvet cake. The cake's subtle cocoa notes enhance the cappuccino's nutty depth.",
    image: "https://i.ibb.co/8DLB7zkg/IMG-2868.jpg",
  },
  {
    name: "Mango Crusher",
    description:
      "A radiant tropical escape crafted with mango fruit concentrate, creating a chilled, slushy ambrosia. Garnished with fresh mint and dried mango slice.",
    image: "/placeholder.svg?height=250&width=250",
  },
  {
    name: "Butterscotch Latte",
    description:
      "Decadent masterpiece with robust espresso, creamy white symphony, and rich butterscotch syrup, crowned with impeccably frothed milk for a velvety finish.",
    image: "/placeholder.svg?height=250&width=250",
  },
  {
    name: "Mixedberry Crusher",
    description:
      "Vibrant burst of berry bliss with mixed berry syrup, achieving perfect tart and sweet balance. A refreshing non-coffee delight that captivates guests.",
    image: "/placeholder.svg?height=250&width=250",
  },
  {
    name: "Lemonade Crusher",
    description:
      "Zesty, invigorating delight with lemonade concentrate, garnished with fresh mint for elevated charm. Contributes to vibrant menu diversity and sales growth.",
    image: "/placeholder.svg?height=250&width=250",
  },
]

export default function PortfolioPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cream-light mb-4">Signature Artisanal Blends</h1>
          <p className="text-xl text-gold-accent">Crafted with Passion, Perfected with Expertise</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blends.map((blend, index) => (
            <BlendCard key={index} name={blend.name} description={blend.description} image={blend.image} />
          ))}
        </div>

        <div className="mt-16 bg-coffee-medium/30 backdrop-blur-sm rounded-2xl p-8 border border-cream-light/20">
          <h2 className="text-2xl font-bold text-gold-accent mb-4 text-center">Innovation Results</h2>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cream-light mb-2">30%</div>
              <p className="text-cream-light/90">Sales increase at Baristas@Work through innovative menu additions</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cream-light mb-2">17.5%</div>
              <p className="text-cream-light/90">Sales growth at Salute Coffee Co. with signature pairings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
