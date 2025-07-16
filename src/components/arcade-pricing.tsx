import PricingCard from "./pricing-card"

const arcadePlans = [
  {
    title: "Quick Play",
    price: "5",
    duration: "30 minutes",
    features: [
      "Access to classic arcade games",
      "Street Fighter, Pac-Man, etc.",
      "Perfect for a quick gaming fix",
      "No reservation required",
    ],
  },
  {
    title: "Gaming Session",
    price: "12",
    duration: "1 hour",
    features: [
      "All classic arcade games",
      "Racing and shooting games",
      "Dance Dance Revolution",
      "Free game tokens included",
      "Soft drink included",
    ],
    isPopular: true,
  },
  {
    title: "Extended Play",
    price: "20",
    duration: "2 hours",
    features: [
      "Unlimited arcade access",
      "All game categories",
      "Priority game selection",
      "Snacks & drinks included",
      "Tournament entry eligible",
    ],
  },
  {
    title: "All-Day Pass",
    price: "35",
    duration: "Full day",
    features: [
      "Unlimited gaming all day",
      "Access to all arcade games",
      "VIP lounge access",
      "Meals & drinks included",
      "Free tournament entries",
      "Gaming merchandise discount",
    ],
  },
]

export default function ArcadePricing() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Arcade <span className="text-yellow-400">Gaming</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Classic and modern arcade games for every skill level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {arcadePlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              duration={plan.duration}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
