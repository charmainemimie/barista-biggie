import PricingCard from "./pricing-card"

const vrPlans = [
  {
    title: "VR Starter",
    price: "15",
    duration: "30 minutes",
    features: [
      "Introduction to VR gaming",
      "Basic VR experiences",
      "Staff assistance included",
      "Safety briefing provided",
    ],
  },
  {
    title: "VR Adventure",
    price: "25",
    duration: "1 hour",
    features: [
      "Premium VR experiences",
      "Action & adventure games",
      "Multiplayer VR options",
      "High-end VR headsets",
      "Refreshments included",
    ],
    isPopular: true,
  },
  {
    title: "VR Marathon",
    price: "40",
    duration: "2 hours",
    features: [
      "Extended VR gaming",
      "All VR game library",
      "Private VR booth",
      "Custom game selection",
      "Snacks & drinks included",
      "VR gaming certificate",
    ],
  },
]

export default function VRPricing() {
  return (
    <section className="py-16 px-4 bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Virtual Reality <span className="text-purple-400">Experiences</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Step into another world with our cutting-edge VR technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {vrPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              duration={plan.duration}
              features={plan.features}
              isPopular={plan.isPopular}
              isVR={true}
              buttonText="Book VR Session"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
