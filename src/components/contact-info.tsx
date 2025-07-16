import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Calendar, Users } from "lucide-react"

const contactDetails = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    details: ["123 Main Street", "Chivhu, Zimbabwe"],
    color: "text-yellow-400",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: ["+263 XX XXX XXXX", "+263 XX XXX XXXX"],
    color: "text-green-400",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: ["info@miraclearcade.com", "bookings@miraclearcade.com"],
    color: "text-blue-400",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Operating Hours",
    details: ["Monday - Sunday", "10:00 AM - 10:00 PM"],
    color: "text-purple-400",
  },
]

const quickInfo = [
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Reservations",
    description: "Book your gaming session in advance",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Group Events",
    description: "Perfect for parties and team building",
  },
]

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Main Contact Details */}
      <Card className="bg-gradient-to-br from-purple-900 to-blue-900 border-purple-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-yellow-400 text-center">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className={`${item.color} mt-1`}>{item.icon}</div>
              <div>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-300">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 gap-4">
        {quickInfo.map((item, index) => (
          <Card key={index} className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="text-yellow-400">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Emergency Contact */}
      <Card className="bg-gradient-to-r from-red-900 to-red-800 border-red-700">
        <CardContent className="p-4 text-center">
          <h3 className="font-bold text-white mb-2">Emergency Contact</h3>
          <p className="text-red-200">For urgent matters: +263 XX XXX XXXX</p>
        </CardContent>
      </Card>
    </div>
  )
}
