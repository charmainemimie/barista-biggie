"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    preferredDate: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add your form submission logic here
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-700 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-yellow-400">Get In Touch</CardTitle>
        <p className="text-center text-gray-300">Ready to game? Send us a message or reserve your spot!</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white focus:border-yellow-400"
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white focus:border-yellow-400"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white focus:border-yellow-400"
                placeholder="+263 XX XXX XXXX"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="inquiry-type" className="text-white">
                Inquiry Type
              </Label>
              <Select onValueChange={(value) => handleChange("inquiryType", value)}>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-yellow-400">
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="general">General Information</SelectItem>
                  <SelectItem value="reservation">Game Reservation</SelectItem>
                  <SelectItem value="party">Birthday Party</SelectItem>
                  <SelectItem value="tournament">Tournament Info</SelectItem>
                  <SelectItem value="group">Group Event</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferred-date" className="text-white">
              Preferred Date (if applicable)
            </Label>
            <Input
              id="preferred-date"
              type="date"
              value={formData.preferredDate}
              onChange={(e) => handleChange("preferredDate", e.target.value)}
              className="bg-gray-800 border-gray-600 text-white focus:border-yellow-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Message *
            </Label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="bg-gray-800 border-gray-600 text-white focus:border-yellow-400 min-h-[120px]"
              placeholder="Tell us about your gaming needs, questions, or special requests..."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-3 text-lg"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
