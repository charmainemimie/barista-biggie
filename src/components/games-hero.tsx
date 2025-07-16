"use client"
import { Input } from "@/components/ui/input"
import { CircleArrowLeft, Search } from "lucide-react"
import { Link } from "react-router-dom"


interface GamesHeroProps {
  searchTerm: string
  onSearchChange: (value: string) => void
}

export default function GamesHero({ searchTerm, onSearchChange }: GamesHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-16 px-4">
      <div className="absolute inset-0 bg-black/20"><Link to="/"><CircleArrowLeft className="w-10 h-10 m-6" /></Link></div>
      <div className="relative container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Game Library
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
          Discover our extensive collection of classic arcade games, modern experiences, and cutting-edge VR adventures
        </p>

        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400"
          />
        </div>
      </div>
    </section>
  )
}
