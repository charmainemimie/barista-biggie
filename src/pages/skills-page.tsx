import { SkillCard } from "@/components/skill-card"
import { Coffee, Award, Zap, Users, Globe, Target } from "lucide-react"

const skills = [
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Barista Artistry",
    description:
      "Masterfully skilled in crafting cappuccinos, lattes, and artisanal blends with unparalleled quality and aesthetic finesse.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Coffee Bean Expertise",
    description:
      "Proficient in selecting and blending Robusta, Arabica, Liberica, and Excelsa beans, leveraging their unique flavor profiles.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Grinder Calibration",
    description:
      "Expert in adjusting grinder settings for optimal particle size and precise extraction for rich, flavorful coffee.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Leadership & Mentorship",
    description:
      "Expertly guided barista teams across multiple locations, training staff in advanced brewing techniques and quality standards.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Multilingual Engagement",
    description:
      "Fluent in English and Shona, with conversational A2-level German for connecting with diverse global clientele.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Beverage Innovation",
    description:
      "Pioneered artisanal blends driving 30% sales increases through creative menu development and signature creations.",
  },
]

export default function SkillsPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cream-light mb-4">Core Skills & Expertise</h1>
          <p className="text-xl text-gold-accent">Technical Mastery Meets Creative Innovation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} title={skill.title} description={skill.description} />
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-coffee-dark/50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-cream-light mb-8">Technical Specializations</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-coffee-medium/40 rounded-lg p-6 border border-cream-light/20">
              <h3 className="text-xl font-bold text-gold-accent mb-4">Extraction Mastery</h3>
              <p className="text-cream-light/90">
                Skilled in fine-tuning espresso machine parameters to deliver smooth, balanced shots, eliminating harsh
                or bitter notes for superior quality in every cup.
              </p>
            </div>

            <div className="bg-coffee-medium/40 rounded-lg p-6 border border-cream-light/20">
              <h3 className="text-xl font-bold text-gold-accent mb-4">Milk Frothing Precision</h3>
              <p className="text-cream-light/90">
                Adept at frothing milk to achieve velvety microfoam with a glossy texture, elevating the quality of
                milk-based beverages like cappuccinos and lattes.
              </p>
            </div>

            <div className="bg-coffee-medium/40 rounded-lg p-6 border border-cream-light/20">
              <h3 className="text-xl font-bold text-gold-accent mb-4">Event Barista Mastery</h3>
              <p className="text-cream-light/90">
                Orchestrated mobile coffee stations at weddings and renowned festivals, serving thousands with agility
                and sophistication while maintaining quality standards.
              </p>
            </div>

            <div className="bg-coffee-medium/40 rounded-lg p-6 border border-cream-light/20">
              <h3 className="text-xl font-bold text-gold-accent mb-4">Quality Consistency</h3>
              <p className="text-cream-light/90">
                Maintained exceptional quality across 100+ daily orders, ensuring every beverage meets the highest
                standards through systematic processes and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
