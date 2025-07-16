import { Badge } from "@/components/ui/badge";
import { Coffee, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-coffee-dark border-t border-cream-light/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-cream-light font-bold text-xl mb-4">
              <Coffee className="w-6 h-6 text-gold-accent"/>
              <span>Biggie Komborerai Shiri</span>
            </div>
            <p className="text-cream-light/90 text-sm">
              Master Barista with 8 years of experience crafting exceptional
              coffee experiences.
            </p>
          </div>

          <div>
            <h3 className="text-cream-light font-semibold mb-4">
              Contact Info
            </h3>
            <div className="space-y-2 text-sm text-cream-light/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-accent" />
                <span>Pretoria, South Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-accent" />
                <span>biggiekomboreraishiri@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-accent" />
                <span>+27 67 244 3534</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-cream-light font-semibold mb-4">Services</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-gold-accent text-coffee-dark text-xs">
                Event Catering
              </Badge>
              <Badge className="bg-cream-light text-coffee-dark text-xs">
                Consultation
              </Badge>
              <Badge className="bg-gold-accent text-coffee-dark text-xs">
                Training
              </Badge>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-cream-light/20">
          <p className="text-cream-light/70 text-sm">
            © 2025 Developed by{" "}
            <a href="mailto:charmaine@example.com" className="text-gold-accent">
              Charmaine
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
