import { ExperienceCard } from "@/components/experience-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ExperiencePage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cream-light mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-gold-accent">
            8 Years of Coffee Excellence
          </p>
        </div>

        <div className="space-y-8 mb-16">
          <ExperienceCard
            title="Manager & Barista"
            company="Salute Coffee Co., Pretoria"
            period="February 2024 – Present"
            description="Orchestrated café operations with finesse, steering a dedicated team, optimizing inventory, and elevating customer experiences in a dynamic, high-volume setting. Leveraged extensive knowledge of Robusta, Arabica, Liberica, and Excelsa beans to select premium varietals, tailoring blends to enhance beverage profiles. Meticulously calibrated grinders to achieve optimal particle size and adjusted extraction parameters to deliver smooth, balanced espresso profiles without bitterness. Mastered milk frothing techniques to create velvety microfoam, enhancing cappuccinos, lattes, and signature drinks. Spearheaded a transformative menu overhaul, introducing innovative beverages like the Cappuccino & Red Velvet Cake Pairing and non-coffee crushers (Raspberry Crusher, Cherry Crusher, Passion Fruit Crusher, Watermelon Crusher), which have driven a 17.5% sales increase to date. Trained staff in bean selection, precision brewing, and frothing methods, ensuring consistent quality across 100+ daily orders, fostering enduring customer loyalty."
            achievement="17.5% Sales Increase"
            achievementIcon="sales"
            image="../src/assets/biggie/salute1.jpg"
          />

          <ExperienceCard
            title="Assistant Manager & Barista"
            company="Baristas@Work, Pretoria"
            period="January 2019 – February 2023"
            description="Directed operations at a bustling Pretoria café, leading a proficient barista team with strategic oversight, streamlining inventory through meticulous stock ordering, and sourcing cost-effective suppliers to optimize operational efficiency. Ensured team excellence by vigilantly supervising staff performance, fostering accountability and adherence to high standards. Applied expert knowledge of Robusta, Arabica, Liberica, and Excelsa beans to curate exceptional roasts, selecting varietals to enhance beverage profiles. Fine-tuned grinder settings to optimize flavor extraction and calibrated espresso machines for smooth, non-bitter shots. Perfected milk frothing to achieve silken textures, elevating beverages like cappuccinos and lattes. Pioneered innovative drinks, including the Coffee Freezo, Mango Crusher, Lemonade Crusher, Pineapple Coconut Crusher, Strawberry Crusher, and Blueberry Vanilla Crusher, which collectively catalyzed a 30% sales surge. Expertly prepared cappuccinos, hot chocolates, café lattes, Americanos, and other artisanal beverages, managing 100+ daily orders with precision and charisma. My strategic leadership and technical expertise cemented the café’s status as a cherished local gem."
            achievement="30% Sales Surge"
            achievementIcon="sales"
            image="../src/assets/biggie/baristas1.jpg"
          />

          <ExperienceCard
            title="Head Barista"
            company="Coffee Cousins, Pretoria"
            period="December 2016 – January 2019"
            description="Commanded barista operations across three bustling Coffee Cousins locations with authoritative leadership, ensuring seamless operations and exceptional beverage quality. Masterfully managed inventory by overseeing stock sufficiency, coordinating the timely distribution of supplies from central storage to each shop, and maintaining optimal stock levels to support high-volume service. Spearheaded the onboarding and training of new staff, imparting expertise in coffee preparation and customer engagement to uphold impeccable standards. Strategically crafted schedules to ensure efficient staffing across all locations, balancing operational needs with team well-being. Demonstrated mastery in selecting and blending Robusta, Arabica, Liberica, and Excelsa beans to craft balanced, flavorful beverages. Adjusted grinder settings to perfect grind consistency and optimized extraction times for smooth, non-bitter espresso. Excelled in frothing milk to achieve a glossy, velvety texture, enhancing the quality of milk-based drinks. Crafted cappuccinos, hot chocolates, café lattes, Americanos, and diverse beverages, serving 100+ patrons daily with alacrity and warmth. Forged meaningful connections with a diverse clientele, leveraging fluency in English, Shona, and conversational A2 German to cultivate a vibrant, inclusive café culture."
            achievement="3 Locations Managed"
            achievementIcon="locations"
            image="../src/assets/biggie/coffeecousins1.jpg"
          />
        </div>

        {/* Special Events */}
        <div className="bg-coffee-dark/50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-cream-light mb-8">
            Special Events Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gold-accent">
                  Wedding Barista
                </CardTitle>
                <CardDescription className="text-cream-light">
                  Various Events, Pretoria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src="../src/assets/biggie/wedding1.jpg"
                      alt="Wedding Coffee Station"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-cream-light/90">
                    Engaged as a premier barista for nuptial celebrations across
                    Pretoria, I meticulously crafted artisanal cappuccinos, hot
                    chocolates, café lattes, Americanos, and signature beverages
                    like the Coffee Freezo for gatherings of up to 200 guests.
                    Applied expertise in grinder calibration and extraction
                    techniques to ensure every espresso shot was smooth and
                    flavorful, complemented by perfectly frothed milk for
                    creamy, visually stunning drinks. Harnessing my leadership
                    acumen from roles at Baristas@Work and Salute Coffee Co., I
                    orchestrated mobile coffee stations with unparalleled
                    precision, delivering exquisite beverages with warmth to
                    enhance every matrimonial occasion.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gold-accent">
                  Festival Barista
                </CardTitle>
                <CardDescription className="text-cream-light">
                  MTN Bushfire Festival, Eswatini
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src="../src/assets/biggie/mtn1.jpg"
                      alt="Festival Coffee Setup"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-cream-light/90">
                    At the world-renowned MTN Bushfire Festival in Malkerns
                    Valley, Eswatini, I dispensed over 5,000 cups of artisanal
                    coffee, including cappuccinos, hot chocolates, café lattes,
                    and Americanos, to thousands of attendees from over 60
                    nations. Utilized precise grinder and extraction settings to
                    deliver consistently smooth, non-bitter coffee, paired with
                    expertly frothed milk for exceptional quality in a
                    high-pressure environment. Drawing on my leadership
                    expertise from Baristas@Work and Salute Coffee Co., I
                    managed a mobile coffee café with celerity and panache,
                    enriching the festival experience at one of Africa’s
                    preeminent music and arts events.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
