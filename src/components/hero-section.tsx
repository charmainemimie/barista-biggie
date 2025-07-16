import { Badge } from "@/components/ui/badge";
import handAndCoffee from "@/assets/biggie/handandcoffee.jpg";
import profile from "@/assets/biggie/profile.jpg";
export function HeroSection() {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={handAndCoffee}
          alt="Coffee beans background"
          className="opacity-100 w-full h-full object-cover" // Adjust opacity of the image
        />
        {/* Gradient Overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-dark via-coffee-medium to-coffee-dark opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cream-light shadow-2xl">
            <img
              src={profile}
              alt="Biggie Komborerai Shiri"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold text-cream-light mb-4">
            Biggie Komborerai Shiri
          </h1>
          <p className="text-xl text-gold-accent mb-6">
            Master Barista & Coffee Artisan
          </p>
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <Badge
              variant="secondary"
              className="bg-gold-accent text-coffee-dark px-4 py-2"
            >
              8 Years Experience
            </Badge>
            <Badge
              variant="secondary"
              className="bg-cream-light text-coffee-dark px-4 py-2"
            >
              3 Languages
            </Badge>
            <Badge
              variant="secondary"
              className="bg-gold-accent text-coffee-dark px-4 py-2"
            >
              Award-Winning Blends
            </Badge>
          </div>
        </div>

        <div className="bg-coffee-medium/30 backdrop-blur-sm rounded-2xl p-8 border border-cream-light/20">
          <p className="text-cream-light text-lg leading-relaxed">
            Passionate barista with 8 years of experience, transforming beans
            and brews into unforgettable moments at top Pretoria cafes like
            Coffee Cousins, Baristas@Work, and Salute Coffee Co. Master of
            coffee blends with in-depth knowledge of Robusta, Arabica, Liberica,
            and Excelsa beans, crafting distinctive flavor profiles that elevate
            every beverage to an art form.
          </p>
        </div>
      </div>
    </section>
  );
}
