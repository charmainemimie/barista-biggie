"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Coffee, Calendar, Users } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cream-light mb-4">Get In Touch</h1>
          <p className="text-xl text-gold-accent">Ready to Elevate Your Coffee Experience?</p>
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
                  Whether you're planning an intimate gathering, a large-scale event, or seeking consultation services,
                  I bring passion, precision, and artistry to every cup. Let's discuss how we can make your coffee
                  experience unforgettable.
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

            {/* Services */}
            <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gold-accent">Services Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gold-accent" />
                    <div>
                      <h3 className="font-semibold text-cream-light">Event Catering</h3>
                      <p className="text-sm text-cream-light/80">Weddings, festivals, corporate events</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gold-accent" />
                    <div>
                      <h3 className="font-semibold text-cream-light">Staff Training</h3>
                      <p className="text-sm text-cream-light/80">Barista skills and coffee expertise</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-gold-accent" />
                    <div>
                      <h3 className="font-semibold text-cream-light">Menu Consultation</h3>
                      <p className="text-sm text-cream-light/80">Signature blends and beverage innovation</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge className="bg-gold-accent text-coffee-dark">Available for Events</Badge>
                  <Badge className="bg-cream-light text-coffee-dark">Consultation Services</Badge>
                  <Badge className="bg-gold-accent text-coffee-dark">Training Programs</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-coffee-medium/40 border-cream-light/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gold-accent">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cream-light mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-coffee-dark/50 border border-cream-light/20 rounded-lg text-cream-light placeholder-cream-light/50 focus:outline-none focus:ring-2 focus:ring-gold-accent focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cream-light mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-coffee-dark/50 border border-cream-light/20 rounded-lg text-cream-light placeholder-cream-light/50 focus:outline-none focus:ring-2 focus:ring-gold-accent focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-cream-light mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-coffee-dark/50 border border-cream-light/20 rounded-lg text-cream-light focus:outline-none focus:ring-2 focus:ring-gold-accent focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="event-catering">Event Catering</option>
                    <option value="staff-training">Staff Training</option>
                    <option value="menu-consultation">Menu Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cream-light mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-coffee-dark/50 border border-cream-light/20 rounded-lg text-cream-light placeholder-cream-light/50 focus:outline-none focus:ring-2 focus:ring-gold-accent focus:border-transparent resize-none"
                    placeholder="Tell me about your project or event..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold-accent text-coffee-dark hover:bg-gold-accent/90 h-12 text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
