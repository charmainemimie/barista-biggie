"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Coffee, Calendar, Users } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cream-light mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gold-accent">
            Ready to Elevate Your Coffee Experience?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gold-accent flex items-center gap-3">
                  <Coffee className="w-8 h-8" />
                  Let's Create Something Extraordinary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cream-light/90 leading-relaxed mb-6">
                  Whether you're planning an intimate gathering, a large-scale
                  event, or seeking consultation services, I bring passion,
                  precision, and artistry to every cup. Let's discuss how we can
                  make your coffee experience unforgettable.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-cream-light">
                    <MapPin className="w-5 h-5 text-gold-accent" />
                    <span>Pretoria, South Africa</span>
                  </div>
                  <div className="flex items-center gap-3 text-cream-light">
                    <Mail className="w-5 h-5 text-gold-accent" />
                    <span>biggie.shiri@example.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-cream-light">
                    <Phone className="w-5 h-5 text-gold-accent" />
                    <span>+27 123 456 789</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div >
            {" "}
            {/* Services */}
            <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gold-accent">
                  Services Offered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gold-accent" />
                    <div>
                      <h3 className="font-semibold text-cream-light">
                        Event Catering
                      </h3>
                      <p className="text-sm text-cream-light/80">
                        Weddings, festivals, corporate events
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gold-accent" />
                    <div>
                      <h3 className="font-semibold text-cream-light">
                        Staff Training
                      </h3>
                      <p className="text-sm text-cream-light/80">
                        Barista skills and coffee expertise
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-gold-accent" />
                    <div>
                      <h3 className="font-semibold text-cream-light">
                        Menu Consultation
                      </h3>
                      <p className="text-sm text-cream-light/80">
                        Signature blends and beverage innovation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pb-5">
                  <Badge className="bg-gold-accent text-coffee-dark">
                    Available for Events
                  </Badge>
                  <Badge className="bg-cream-light text-coffee-dark">
                    Consultation Services
                  </Badge>
                  <Badge className="bg-gold-accent text-coffee-dark">
                    Training Programs
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
