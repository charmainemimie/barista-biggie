import GameCard from "./game-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const popularGames = [
  {
    title: "Street Fighter 6",
    image: "/placeholder.svg?height=200&width=300",
    category: "Fighting",
    players: "1-2 Players",
    isPopular: true,
  },
  {
    title: "Pac-Man Championship",
    image: "/placeholder.svg?height=200&width=300",
    category: "Classic",
    players: "1 Player",
    isPopular: true,
  },
  {
    title: "Dance Dance Revolution",
    image: "/placeholder.svg?height=200&width=300",
    category: "Rhythm",
    players: "1-2 Players",
    isPopular: false,
  },
  {
    title: "Time Crisis 5",
    image: "/placeholder.svg?height=200&width=300",
    category: "Shooter",
    players: "1-2 Players",
    isPopular: false,
  },
  {
    title: "Mario Kart Arcade",
    image: "/placeholder.svg?height=200&width=300",
    category: "Racing",
    players: "1-4 Players",
    isPopular: true,
  },
  {
    title: "Tekken 8",
    image: "/placeholder.svg?height=200&width=300",
    category: "Fighting",
    players: "1-2 Players",
    isPopular: false,
  },
];

export default function GamesShowcase() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Popular <span className="text-yellow-400">Games</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our most loved arcade games, from classic retro favorites
            to the latest releases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {popularGames.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              image={game.image}
              category={game.category}
              players={game.players}
              isPopular={game.isPopular}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-8 py-3 text-lg"
          >
            <Link to="/games">View All Games</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
