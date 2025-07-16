import PricingHero from "../components/pricing-hero";
import ArcadePricing from "../components/arcade-pricing";
import VRPricing from "../components/vr-pricing";
import GroupPackages from "../components/group-packages";
import MembershipTiers from "../components/membership-tiers";
import SpecialOffers from "../components/special-offers";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <PricingHero />
      <ArcadePricing />
      <VRPricing />
      <GroupPackages />
      <MembershipTiers />
      <SpecialOffers />
    </div>
  );
}
