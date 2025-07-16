import PricingCard from "./pricing-card"

const membershipTiers = [
  {
    title: "Bronze Member",
    price: "25",
    duration: "per month",
    features: [
      "10% discount on all sessions",
      "Priority booking",
      "Monthly free gaming hour",
      "Member-only tournaments",
      "Birthday month special offer",
    ],
  },
  {
    title: "Silver Member",
    price: "45",
    duration: "per month",
    features: [
      "20% discount on all sessions",
      "VIP booking priority",
      "3 free gaming hours monthly",
      "Free VR session monthly",
      "Exclusive member events",
      "Guest pass privileges",
      "Merchandise discounts",
    ],
    isPopular: true,
  },
  {
    title: "Gold Member",
    price: "75",
    duration: "per month",
    features: [
      "30% discount on all sessions",
      "Unlimited booking priority",
      "5 free gaming hours monthly",
      "2 free VR sessions monthly",
      "Private gaming room access",
      "Complimentary group packages",
      "Premium merchandise included",
      "Personal gaming concierge",
    ],
  },
]

export default function MembershipTiers() {
  return (
    <section className="py-16 px-4 bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Membership <span className="text-yellow-400">Tiers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our gaming community and unlock exclusive benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {membershipTiers.map((tier, index) => (
            <PricingCard
              key={index}
              title={tier.title}
              price={tier.price}
              duration={tier.duration}
              features={tier.features}
              isPopular={tier.isPopular}
              buttonText="Join Now"
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Annual Membership Bonus</h3>
            <p className="text-gray-300">
              Pay annually and get 2 months free! Plus exclusive annual member perks and priority access to new games.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
