"use client"

import { useState } from "react"
import GamesHero from "../components/games-hero"
import FeaturedGames from "../components/featured-games"
import GamesGrid from "../components/games-grid"

export default function GamesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="min-h-screen bg-gray-900">
      <GamesHero searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <FeaturedGames />
      <GamesGrid searchTerm={searchTerm} />
    </div>
  )
}
