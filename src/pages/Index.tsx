
import { useState } from "react";
import { 
  Truck, 
  TestTube, 
  Building2, 
  Phone, 
  Video, 
  Pill, 
  Users,
  Bell,
  MessageCircle,
  ChevronRight,
  Star
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  const services = [
    { icon: Truck, label: "Ambulance", color: "bg-red-100 text-red-600", path: "/ambulance" },
    { icon: TestTube, label: "Lab Test", color: "bg-blue-100 text-blue-600", path: "/lab" },
    { icon: Building2, label: "Hospital", color: "bg-green-100 text-green-600", path: "/hospitals" },
    { icon: Phone, label: "LifeSafe Track", color: "bg-purple-100 text-purple-600", path: "/track" },
    { icon: Video, label: "Video Consult", color: "bg-orange-100 text-orange-600", path: "/consult" },
    { icon: Pill, label: "Medicines", color: "bg-teal-100 text-teal-600", path: "/medicines" },
    { icon: Users, label: "Hire Manpower", color: "bg-indigo-100 text-indigo-600", path: "/manpower" },
  ];

  const offers = [
    { title: "40% OFF", subtitle: "Lab Tests", description: "Book now and save big!" },
    { title: "Free Consultation", subtitle: "Video Call", description: "First consultation free" },
    { title: "24/7 Support", subtitle: "Emergency", description: "Always here for you" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">LifeSafe</h1>
            <p className="text-gray-600">Your health companion</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </Button>
            <Button 
              onClick={() => navigate("/emergency")}
              className="bg-red-600 hover:bg-red-700 text-white px-6"
            >
              SOS
            </Button>
          </div>
        </div>
      </div>

      {/* Offers Carousel */}
      <div className="px-4 py-6">
        <div className="relative overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentOfferIndex * 100}%)` }}
          >
            {offers.map((offer, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold">{offer.title}</h3>
                        <p className="text-red-100">{offer.subtitle}</p>
                        <p className="text-sm text-red-200 mt-1">{offer.description}</p>
                      </div>
                      <Star className="h-8 w-8 text-yellow-300" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Carousel Dots */}
          <div className="flex justify-center mt-3 space-x-2">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentOfferIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentOfferIndex ? "bg-red-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                onClick={() => navigate(service.path)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm">{service.label}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="space-y-3">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Chat with Doctor</h3>
                    <p className="text-sm text-gray-600">Get instant medical advice</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Phone className="h-8 w-8 text-green-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Emergency Helpline</h3>
                    <p className="text-sm text-gray-600">24/7 available</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  FREE
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
