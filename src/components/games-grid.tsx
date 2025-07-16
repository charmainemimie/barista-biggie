"use client"

import { useState, useMemo } from "react"
import GameCard from "./game-card"
import CategoryFilter from "./game-cartegory-filter"

const allGames = [
  // Classic/Traditional Arcade Games
  {
    title: "Pac-Man",
    description: "Maze-chase game, avoid ghosts and eat pellets",
    category: "Classic",
    players: "1 Player",
    difficulty: "Easy",
    duration: "3-5 min",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Street Fighter II",
    description: "Iconic 2D fighting game",
    category: "Classic",
    players: "1-2 Players",
    difficulty: "Medium",
    duration: "2-3 min",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Mortal Kombat",
    description: "Brutal and fast-paced 1v1 fighting game",
    category: "Classic",
    players: "1-2 Players",
    difficulty: "Hard",
    duration: "2-3 min",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Time Crisis",
    description: "Light gun shooter with foot pedal for cover",
    category: "Classic",
    players: "1-2 Players",
    difficulty: "Medium",
    duration: "5-8 min",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Dance Dance Revolution (DDR)",
    description: "Rhythm game with foot pad",
    category: "Classic",
    players: "1-2 Players",
    difficulty: "Easy-Hard",
    duration: "3-4 min",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Daytona USA",
    description: "Arcade racing game with multiplayer cabinets",
    category: "Classic",
    players: "1-8 Players",
    difficulty: "Easy",
    duration: "3-5 min",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "House of the Dead",
    description: "Horror-themed light gun shooter",
    category: "Classic",
    players: "1-2 Players",
    difficulty: "Medium",
    duration: "10-15 min",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Air Hockey",
    description: "Physical table game with pucks and mallets",
    category: "Classic",
    players: "2 Players",
    difficulty: "Easy",
    duration: "5-10 min",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Pinball",
    description: "Mechanical ball-based arcade game",
    category: "Classic",
    players: "1 Player",
    difficulty: "Medium",
    duration: "3-8 min",
    image: "/placeholder.svg?height=200&width=300",
  },

  // Modern Arcade Games
  {
    title: "Mario Kart Arcade GP",
    description: "Racing with Nintendo characters",
    category: "Modern",
    players: "1-4 Players",
    difficulty: "Easy",
    duration: "3-4 min",
    image: "/placeholder.svg?height=200&width=300",
    isNew: true,
  },
  {
    title: "Initial D Arcade Stage",
    description: "Drifting-focused racing game",
    category: "Modern",
    players: "1-2 Players",
    difficulty: "Hard",
    duration: "4-6 min",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Fruit Ninja FX",
    description: "Touchscreen slicing game",
    category: "Modern",
    players: "1 Player",
    difficulty: "Easy",
    duration: "2-3 min",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Halo: Fireteam Raven",
    description: "Multiplayer sci-fi shooter in Halo universe",
    category: "Modern",
    players: "1-4 Players",
    difficulty: "Medium",
    duration: "8-12 min",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Big Buck Hunter Reloaded",
    description: "Hunting simulation shooter",
    category: "Modern",
    players: "1-2 Players",
    difficulty: "Easy",
    duration: "3-5 min",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Cruis'n Blast",
    description: "High-speed racing with over-the-top action",
    category: "Modern",
    players: "1-4 Players",
    difficulty: "Easy",
    duration: "3-4 min",
    image: "/placeholder.svg?height=200&width=300",
    isNew: true,
  },

  // VR Games
  {
    title: "Beat Saber",
    description: "Rhythm game where you slice blocks to music",
    category: "VR",
    players: "1 Player",
    difficulty: "Easy-Hard",
    duration: "3-5 min",
    image: "/placeholder.svg?height=200&width=300",
    isVR: true,
    isNew: true,
  },
  {
    title: "VR ZOMBIE SHOOTER",
    description: "Survive waves of zombies with guns in full 3D",
    category: "VR",
    players: "1 Player",
    difficulty: "Medium",
    duration: "5-10 min",
    image: "/placeholder.svg?height=200&width=300",
    isVR: true,
  },
  {
    title: "Richie's Plank Experience",
    description: "Simulate walking on a plank from a skyscraper",
    category: "VR",
    players: "1 Player",
    difficulty: "Easy",
    duration: "2-3 min",
    image: "/placeholder.svg?height=200&width=300",
    isVR: true,
  },
  {
    title: "Job Simulator",
    description: "Humorous VR sandbox game simulating 'jobs'",
    category: "VR",
    players: "1 Player",
    difficulty: "Easy",
    duration: "10-15 min",
    image: "/placeholder.svg?height=200&width=300",
    isVR: true,
  },
  {
    title: "Superhot VR",
    description: "Time moves only when you move — puzzle shooter",
    category: "VR",
    players: "1 Player",
    difficulty: "Medium",
    duration: "5-8 min",
    image: "/placeholder.svg?height=200&width=300",
    isVR: true,
  },
  {
    title: "Arizona Sunshine",
    description: "Full VR zombie survival game with co-op mode",
    category: "VR",
    players: "1-2 Players",
    difficulty: "Hard",
    duration: "15-30 min",
    image: "/placeholder.svg?height=200&width=300",
    isVR: true,
  },
  {
    title: "VR Karts",
    description: "Mario Kart-style racing game in VR",
    category: "VR",
    players: "1-4 Players",
    difficulty: "Easy",
    duration: "3-5 min",
    image: "/placeholder.svg?height=200&width=300",
    isVR: true,
  },
  {
    title: "The Walking Dead: Saints & Sinners",
    description: "Immersive zombie RPG in VR",
    category: "VR",
    players: "1 Player",
    difficulty: "Hard",
    duration: "20-45 min",
    image: "/placeholder.svg?height=200&width=300",
    isVR: true,
  },

  // Multiplayer VR
  {
    title: "Zero Latency VR",
    description: "Free-roam multiplayer VR games (zombies, aliens)",
    category: "Multiplayer",
    players: "2-8 Players",
    difficulty: "Medium",
    duration: "15-30 min",
    image: "/placeholder.svg?height=200&width=300",
    isVR: true,
    isNew: true,
  },
  {
    title: "Sandbox VR",
    description: "Social VR games with motion tracking",
    category: "Multiplayer",
    players: "2-6 Players",
    difficulty: "Easy",
    duration: "20-40 min",
    image: "/placeholder.svg?height=200&width=300",
    isVR: true,
  },
  {
    title: "Tower Tag VR",
    description: "VR laser tag",
    category: "Multiplayer",
    players: "2-8 Players",
    difficulty: "Easy",
    duration: "10-15 min",
    image: "/placeholder.svg?height=200&width=300",
    isVR: true,
  },
]

interface GamesGridProps {
  searchTerm: string
}

export default function GamesGrid({ searchTerm }: GamesGridProps) {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Classic", "Modern", "VR", "Multiplayer"]

  const filteredGames = useMemo(() => {
    let filtered = allGames

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter((game) => game.category === activeCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (game) =>
          game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          game.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    return filtered
  }, [activeCategory, searchTerm])

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All <span className="text-yellow-400">Games</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">Browse our complete collection of arcade games</p>
        </div>

        <CategoryFilter categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No games found matching your criteria.</p>
            <p className="text-gray-500 mt-2">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}
