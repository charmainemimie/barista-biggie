import { CircleArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PricingHero() {
    return (
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-16 px-4">
      <div className="absolute inset-0 bg-black/20"><Link to="/"><CircleArrowLeft className="w-10 h-10 m-6" /></Link></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Gaming Packages
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-6">
            Choose the perfect gaming experience for you - from quick sessions to all-day adventures!
          </p>
          <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-yellow-300 font-semibold">🎮 Special Launch Offer: 20% off all packages this month!</p>
          </div>
        </div>
      </section>
    )
  }
  