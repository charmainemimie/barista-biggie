import { BlendCard } from "@/components/blend-card";
import profile1 from "@/assets/biggie/profile1.jpg";
import redvelvet1 from "@/assets/biggie/redvelvet1.jpg";
import mango1 from "@/assets/biggie/mango1.png";
//import butterscotch1 from "@/assets/biggie/butterscotch1.jpg";
import mixedberry1 from "@/assets/biggie/mixedberry1.jpg";
import lemonade1 from "@/assets/biggie/lemonade1.jpeg";
import matchamilkshake from "@/assets/biggie/matchamilkshake.jpg";
import matchamoonmistfrezo from "@/assets/biggie/matchamoonmistfrezo.jpg";
import butterscotch_icedcoffee from "@/assets/biggie/butterscotch_icedcoffee.jpg";

const blends = [
  {
    name: "Coffee Freezo",
    description:
      "A virtuoso creation blended with premium coffee freezo powder, chilled milk, and crowned with whipped cream and coffee beans. Perfected at Baristas@Work, contributing to a 30% sales surge.",
    image: profile1,
  },
  {
    name: "Cappuccino & Red Velvet Cake Pairing",
    description:
      "Classic cappuccino with rich double-shot espresso paired harmoniously with luscious red velvet cake. The cake's subtle cocoa notes enhance the cappuccino's nutty depth.",
    image: redvelvet1,
  },
  {
    name: "Mango Crusher",
    description:
      "A radiant tropical escape crafted with mango fruit concentrate, creating a chilled, slushy ambrosia. Garnished with fresh mint and dried mango slice.",
    image: mango1,
  },
  {
    name: "Butterscotch Freezo & Hazelnut Iced Coffee",
    description: (
      <>
        <span className="font-bold">Butterscotch Freezo:</span>
        {"\n"}
        Velvet espresso tempest collides with molten butterscotch nectar, entwined in a crashed-ice maelstrom veiled by creamy White Symphony white-chocolate silk. Scorched-sugar stardust crowns this gilded, frozen rapture on shattered crystal ice.
        {"\n\n"}
        <span className="font-bold">Hazelnut Iced Coffee:</span>
        {"\n"}
        Double espresso shadowed by silken hazelnut syrup elixir, cascading through chilled milk veils, crowned in whisper-soft nut-kissed froth. An enchanted, chilled grove in every seductive sip.
      </>
    ),
    image: butterscotch_icedcoffee,
  },
  {
    name: "Matcha Moon Mist Frezo",
    description:
      "Luminous matcha nebula blended into crushed-ice silk, veiled in pillowy green foam that drifts like mist over Kyoto hills. A frozen ritual of vibrant green serenity, where umami whispers meet tropical frost on the tongue.",
    image: matchamoonmistfrezo,
  },
  {
    name: "Matcha Milkshake",
    description:
      "Velvety vanilla ice cream fused with ceremonial matcha elixir, spun into a lush emerald cream dream. Crowned with billowing whipped silk and a shimmering veil of jade-green matcha stardust an opulent, earthy-sweet ritual chilled to perfection.",
    image: matchamilkshake,
  },

  {
    name: "Mixedberry Crusher",
    description:
      "Vibrant burst of berry bliss with mixed berry syrup, achieving perfect tart and sweet balance. A refreshing non-coffee delight that captivates guests.",
    image: mixedberry1,
  },
  {
    name: "Lemonade Crusher",
    description:
      "Zesty, invigorating delight with lemonade concentrate, garnished with fresh mint for elevated charm. Contributes to vibrant menu diversity and sales growth.",
    image: lemonade1,
  },
];

export default function PortfolioPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cream-light mb-4">
            Signature Artisanal Blends
          </h1>
          <p className="text-xl text-gold-accent">
            Crafted with Passion, Perfected with Expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blends.map((blend, index) => (
            <BlendCard
              key={index}
              name={blend.name}
              description={blend.description}
              image={blend.image}
            />
          ))}
        </div>

        <div className="mt-16 bg-coffee-medium/30 backdrop-blur-sm rounded-2xl p-8 border border-cream-light/20">
          <h2 className="text-2xl font-bold text-gold-accent mb-4 text-center">
            Innovation Results
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cream-light mb-2">
                30%
              </div>
              <p className="text-cream-light/90">
                Sales increase at Baristas@Work through innovative menu
                additions
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cream-light mb-2">
                17.5%
              </div>
              <p className="text-cream-light/90">
                Sales growth at Salute Coffee Co. with signature pairings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
