import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function LocationMap() {
  return (
    <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-yellow-400 text-center">
          Find Us
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden mb-4">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30177.84663815876!2d30.8690051875136!3d-19.009547534066765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1933001d16a7d545%3A0x325bf994e7de526a!2sChivhu%20Location%20Shopping%20Centre!5e0!3m2!1sen!2sde!4v1752661452844!5m2!1sen!2sde"
           
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
        </div>

        <div className="text-center">
          <h3 className="font-bold text-white mb-2">Easy to Find</h3>
          <p className="text-gray-300 mb-4">
            Located in the heart of Chivhu, easily accessible by public
            transport and with ample parking available.
          </p>
          <div className="center gap-4 text-sm">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-yellow-400">By Car</h4>
              <p className="text-gray-300">Free parking available</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
