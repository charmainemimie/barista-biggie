import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Chivhu's #1 Gaming Spot!
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Experience the ultimate gaming adventure with the latest arcade games, retro classics, and cutting-edge
          entertainment in the heart of Chivhu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 text-lg">
           <Link to="/games">Browse Games</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
          >
            Reserve Time
          </Button>
        </div>
      </div>
    </section>
  )
}
