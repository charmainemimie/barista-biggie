import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto">
        <Card className="bg-black/30 border-yellow-500/30 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to <span className="text-yellow-400">Play?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join the fun at Chivhu's premier gaming destination. Reserve your spot today or drop by to experience the
              excitement!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 text-lg">
                Reserve Your Time
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              >
                Browse All Games
              </Button>
            </div>
            <div className="mt-8 text-gray-300">
              <p className="text-lg">📍 Located in the heart of Chivhu</p>
              <p className="text-lg">🕒 Open Daily: 10 AM - 10 PM</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
