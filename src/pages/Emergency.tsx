
import { Phone, MapPin, Shield, User, Mic, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Emergency = () => {
  const navigate = useNavigate();

  const emergencyContacts = [
    { 
      title: "Free Ambulance", 
      number: "108", 
      description: "Government Emergency Service",
      color: "bg-green-600 hover:bg-green-700"
    },
    { 
      title: "Private Ambulance", 
      number: "208", 
      description: "Faster Response Time",
      color: "bg-blue-600 hover:bg-blue-700"
    },
  ];

  const quickActions = [
    {
      icon: MapPin,
      title: "Ambulance GPS Tracking",
      subtitle: "Track ambulance location",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Shield,
      title: "Nearby Hospitals",
      subtitle: "Find closest medical facilities",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      action: () => navigate("/hospitals")
    },
    {
      icon: MapPin,
      title: "Save Location",
      subtitle: "Save current location for emergency",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: User,
      title: "Medical ID",
      subtitle: "View health profile & emergency contacts",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const handleEmergencyCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handlePanicButton = () => {
    // Trigger panic mode - in real app this would:
    // 1. Get current location
    // 2. Send SMS to emergency contacts
    // 3. Call emergency services
    // 4. Vibrate device
    console.log("PANIC BUTTON ACTIVATED - Sending location to emergency contacts");
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200, 100, 200]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white pb-20">
      {/* Emergency Header */}
      <div className="bg-red-600 text-white px-4 py-8">
        <div className="text-center">
          <Zap className="h-12 w-12 mx-auto mb-4 animate-pulse" />
          <h1 className="text-3xl font-bold mb-2">EMERGENCY SOS</h1>
          <p className="text-red-100">Help is just one tap away</p>
        </div>
      </div>

      {/* Main SOS Button */}
      <div className="px-4 py-8">
        <Button
          onClick={handlePanicButton}
          className="w-full h-24 bg-red-600 hover:bg-red-700 text-white text-2xl font-bold rounded-2xl shadow-lg animate-pulse"
        >
          <div className="flex flex-col items-center">
            <Zap className="h-8 w-8 mb-2" />
            EMERGENCY SOS
          </div>
        </Button>
        <p className="text-center text-sm text-gray-600 mt-3">
          Tap to alert emergency contacts and share your location
        </p>
      </div>

      {/* Quick Dial Options */}
      <div className="px-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Dial</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyContacts.map((contact, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-6">
                <div className="text-center">
                  <Phone className="h-8 w-8 mx-auto mb-3 text-gray-600" />
                  <h3 className="font-bold text-lg text-gray-900">{contact.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{contact.description}</p>
                  <Button
                    onClick={() => handleEmergencyCall(contact.number)}
                    className={`w-full ${contact.color} text-white font-bold py-3`}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call {contact.number}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Emergency Features */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Emergency Tools</h2>
          <Badge variant="outline" className="text-green-600 border-green-600">
            <Mic className="h-3 w-3 mr-1" />
            Voice Enabled
          </Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card
                key={index}
                className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                onClick={action.action}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${action.bgColor}`}>
                      <Icon className={`h-6 w-6 ${action.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Emergency Info */}
      <div className="px-4">
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-yellow-900 mb-1">Emergency Tips</h3>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Stay calm and provide clear information</li>
                  <li>• Share your exact location</li>
                  <li>• Keep your phone charged for emergencies</li>
                  <li>• Update your medical ID regularly</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Emergency;
