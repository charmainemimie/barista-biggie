import { useState, useEffect, useCallback } from "react"
import review1 from "@/assets/biggie/review1.jpg";
import review2 from "@/assets/biggie/review2.jpg";
import review3 from "@/assets/biggie/review3.jpg";
import review4 from "@/assets/biggie/review4.jpg";
import review5 from "@/assets/biggie/review5.jpg";
import review6 from "@/assets/biggie/review6.jpg";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Review{
  id: number
  name: string
  title: string
  workplace: string
  image: string
  message: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Simbarashe Lawton",
    title: "Senior Manager",
    workplace: "Salute Coffee Co.",
    image: review1,
    message:
      "I’ve stood next to plenty of baristas.  But the ones who can thread a perfect 9-bar shot and still make the morning feel gentle and honest? They’re unicorns. You’re one of the rare ones. Keep being that good.",
  },
  {
    id: 2,
    name: "Tinotenda Nigel Mafudza",
    title: "Barista",
    workplace: "Coffee Cousins",
    image: review2,
    message:
      "Only a handful can nail a textbook shot and still make the whole space feel this relaxed and human. You’re absolutely one of them. High-caliber human + high-caliber barista. Keep up the good work!",
  },
  {
    id: 3,
    name: "Davies Dzingo",
    title: "Events Manager",
    workplace: "Vilkazi ",
    image:review3,
    message:
      "He defines what a good customer experience should be warm, attentive, real, and making you feel valued from the first moment. And the way he handles everything is just brilliant spot-on, professional, and full of heart.Let Biggie make you a coffee, you will not regret it, and it is 100% value for money!"
  },
  {
    id: 4,
    name: "Azra Hussein",
    title: "Regular Customer",
    workplace: "Salute Coffee Co.",
    image:review4,
    message:
      "Oh my goodness, my experience with Biggie, is pure magic! ✨ They had my usual oat milk Matcha ready almost before I even finished saying hi (how do they do that?!). My regular order can be a little fussy with the extra shot + extra hot + the tiniest whisper of vanilla, but they got it perfect like, see-the-stars-in-my-coffee perfect ☕It’s been a few years of being their loyal morning girl and they still make me feel so special every single time. I’m obsessed and I’m definitely never switching baristas. You’re the best part of my mornings! 🌸"


  },
  {
    id: 5,
    name: "Osimele Mkhize ",
    title: "Wedding Planner",
    workplace: "-",
    image:review5,
    message:
      "The best barista service we’ve ever experienced at our wedding,Biggie has impeccable taste and will assist you and your guests! with choosing the most stylish and suitable coffee option perfectly matched with your special request.He’s ever-smiling, bringing that genuine warmth and positive energy that instantly makes your day even brighter you could feel the love radiating from his Coffee station! Biggie’s customer service is phenomenal. He made every single guest feel truly special and valued from the first pour to the last. The way he handled the entire wedding crowd was just brilliant ,professional, effortless, and adding that extra magic touch to our big day.",
  },
  {
    id: 6,
    name: "Mr Suhaib Maraja",
    title: "Coffee Shop Owner",
    workplace: "-",
    image: review6,
    message: `If I could give 10 stars I would. We brought in Biggie to train our entire barista team (8 people, complete mix of experience levels from 2 weeks to 3 years on the job).
    
      In two intense weeks he managed to:
      • Completely reset our espresso dial-in standards  
      • Get everyone consistently pulling shots within ±0.3g and ±1.5 seconds of target  
      • Teach latte art that actually looks intentional (most of the team went from “abstract blob” to sellable rosettas/hearts/tulips)  
      • Standardise our pour-over & batch brew recipes so customers now notice the difference between days  
      • Dramatically improve customer-facing workflow & communication under pressure  
      • Somehow do all of this without making anyone feel stupid or demotivated  
      
      The biggest tell? Our Instagram DMs went from “nice coffee” to “this is the best flat white I’ve had in Joburg”.
      
      Biggie is patient, ridiculously knowledgeable, brutally honest when needed, but never cruel. He reads a café’s vibe and staff personalities very quickly and adjusts his approach accordingly.
      
      Thank you Mr B. K. Shiri 🙌🏾☕`
      },
]

    //function getVisibleReviews() {
      //  return reviews;
    //}
  
  export function ReviewsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
  
    const nextSlide = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, [])
  
    const prevSlide = useCallback(() => {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    }, [])
  
    useEffect(() => {
      if (isPaused) return
  
      const interval = setInterval(() => {
        nextSlide()
      }, 5000)
  
      return () => clearInterval(interval)
    }, [isPaused, nextSlide])
  
    const getCurrentReview = () => {
      return reviews[currentIndex]
    }
  
    return (
      <section className="py-20 px-4 bg-coffee-dark/80 border-t border-cream-light/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-light mb-4">
              What People Say
            </h2>
            <div className="w-24 h-1 bg-gold-accent mx-auto mb-4" />
            <p className="text-cream-light/70 max-w-2xl mx-auto">
              Testimonials from clients, colleagues and coffee enthusiasts
            </p>
          </div>
  
          <div
            className="relative"
            onMouseEnter={() => {
              setIsHovered(true)
              setIsPaused(true)
            }}
            onMouseLeave={() => {
              setIsHovered(false)
              setIsPaused(false)
            }}
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-coffee-medium/80 text-cream-light hover:bg-gold-accent hover:text-coffee-dark transition-all duration-300 ${
                isHovered ? "opacity-100 -translate-x-2" : "opacity-0"
              }`}
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
  
            <button
              onClick={nextSlide}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-coffee-medium/80 text-cream-light hover:bg-gold-accent hover:text-coffee-dark transition-all duration-300 ${
                isHovered ? "opacity-100 translate-x-2" : "opacity-0"
              }`}
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
  
            {/* Reviews Container */}
            <div className="overflow-hidden px-10">
              <div className="flex justify-center transition-all duration-500 ease-in-out">
                <div
                  key={getCurrentReview().id}
                  className="w-full max-w-4xl bg-gradient-to-br from-coffee-medium to-coffee-dark border border-cream-light/20 rounded-2xl p-10 md:p-12 shadow-xl shadow-gold-accent/10"
                >
                  <Quote className="w-12 h-12 text-gold-accent/50 mb-4" />
  
                  <div className="text-cream-light/90 text-sm md:text-sm leading-relaxed mb-4">
                    {getCurrentReview().message.split("\n").map((line, lineIdx) => (
                      <p
                        key={lineIdx}
                        className={`${line.startsWith("•") ? "pl-6" : ""} ${lineIdx > 0 ? "mt-2" : ""}`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
  
                  <div className="flex items-center gap-6 pt-4 border-t border-cream-light/10">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gold-accent bg-coffee-medium">
                      <img
                        src={getCurrentReview().image || "/placeholder.svg"}
                        alt={getCurrentReview().name}
                        className="w-full h-full object-cover"
                        
                      />
                    </div>
                    <div>
                      <h4 className="text-cream-light font-semibold text-lg md:text-xl">
                        {getCurrentReview().name}
                      </h4>
                      <p className="text-gold-accent text-base">{getCurrentReview().title}</p>
                      <p className="text-cream-light/60 text-base">
                        {getCurrentReview().workplace}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-gold-accent w-6"
                      : "bg-cream-light/30 hover:bg-cream-light/50"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  