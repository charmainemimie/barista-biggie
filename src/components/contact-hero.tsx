import { CircleArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactHero() {
    return (
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-16 px-4">
        <div className="absolute inset-0 bg-black/20"><Link to="/"><CircleArrowLeft className="w-10 h-10 m-6" /></Link></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Ready to level up your gaming experience? Get in touch with Chivhu's premier arcade destination!
          </p>
        </div>
      </section>
    )
  }
  