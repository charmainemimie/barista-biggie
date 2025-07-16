import ContactHero from "../components/contact-hero"
import ContactForm from "../components/contact-form"
import ContactInfo from "../components/contact-info"
import LocationMap from "../components/location-map"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <ContactHero />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes up 2 columns on large screens */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info - Takes up 1 column on large screens */}
            <div>
              <ContactInfo />
            </div>
          </div>

          {/* Location Map - Full width */}
          <div className="mt-12">
            <LocationMap />
          </div>
        </div>
      </section>
    </div>
  )
}
