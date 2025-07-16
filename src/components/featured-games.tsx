import GameCard from "./game-card"

const featuredGames = [
  {
    title: "Beat Saber",
    description: "Rhythm game where you slice blocks to music in virtual reality",
    category: "VR",
    players: "1 Player",
    difficulty: "Easy-Hard",
    duration: "3-5 min",
    image: "/placeholder.svg?height=200&width=300",
    isVR: true,
    isNew: true,
  },
  {
    title: "Street Fighter II",
    description: "Iconic 2D fighting game with legendary characters",
    category: "Classic",
    players: "1-2 Players",
    difficulty: "Medium",
    duration: "2-3 min",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Mario Kart Arcade GP",
    description: "Racing with Nintendo characters in arcade format",
    category: "Modern",
    players: "1-4 Players",
    difficulty: "Easy",
    duration: "3-4 min",
    image: "/placeholder.svg?height=200&width=300",
    isNew: true,
  },
]

export default function FeaturedGames() {
  return (
    <section className="py-16 px-4 bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-yellow-400">Games</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Check out our most popular and newest additions to the arcade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredGames.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>
      </div>
    </section>
  )
}
