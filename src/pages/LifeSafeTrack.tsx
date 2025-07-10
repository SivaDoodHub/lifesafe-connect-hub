
import { useState } from "react";
import { ArrowLeft, MapPin, Clock, Shield, Phone, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const LifeSafeTrack = () => {
  const navigate = useNavigate();
  const [activeTracking, setActiveTracking] = useState(true);

  const currentLocation = {
    latitude: 13.0827,
    longitude: 80.2707,
    address: "T. Nagar, Chennai, Tamil Nadu",
    timestamp: new Date().toLocaleTimeString()
  };

  const emergencyContacts = [
    { name: "John Doe", relationship: "Father", phone: "+91 98765 43210" },
    { name: "Jane Smith", relationship: "Mother", phone: "+91 87654 32109" },
    { name: "Dr. Kumar", relationship: "Family Doctor", phone: "+91 76543 21098" }
  ];

  const trackingHistory = [
    { time: "10:30 AM", location: "Home - Anna Nagar", status: "Safe" },
    { time: "11:15 AM", location: "Metro Station - Koyambedu", status: "Moving" },
    { time: "12:00 PM", location: "Office - T. Nagar", status: "Arrived" },
    { time: "01:30 PM", location: "Restaurant - Express Avenue", status: "Safe" },
    { time: "02:45 PM", location: "Current Location", status: "Active" }
  ];

  const safetyFeatures = [
    { icon: Shield, title: "24/7 Monitoring", description: "Continuous location tracking" },
    { icon: Phone, title: "Emergency Contacts", description: "Instant alerts to family" },
    { icon: AlertTriangle, title: "Panic Button", description: "One-tap emergency alert" },
    { icon: CheckCircle, title: "Safe Check-ins", description: "Regular status updates" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">LifeSafe Track</h1>
              <p className="text-sm text-gray-600">Real-time safety monitoring</p>
            </div>
          </div>
          <Badge variant={activeTracking ? "default" : "secondary"} className="bg-green-500">
            {activeTracking ? "Active" : "Inactive"}
          </Badge>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Current Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-red-500" />
              <span>Current Location</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Interactive Map</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-medium">{currentLocation.address}</p>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>Last updated: {currentLocation.timestamp}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button 
                className="flex-1 bg-red-600 hover:bg-red-700"
                onClick={() => alert("Emergency alert sent!")}
              >
                <AlertTriangle className="h-4 w-4 mr-2" />
                Panic Button
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setActiveTracking(!activeTracking)}
              >
                {activeTracking ? "Stop Tracking" : "Start Tracking"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="contacts" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>

          <TabsContent value="contacts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Emergency Contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-gray-600">{contact.relationship}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm">{contact.phone}</p>
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Add Contact
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Tracking History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trackingHistory.map((entry, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <p className="text-xs text-gray-600">{entry.time}</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{entry.location}</p>
                    </div>
                    <Badge 
                      variant={entry.status === "Safe" ? "default" : "secondary"}
                      className={entry.status === "Safe" ? "bg-green-500" : ""}
                    >
                      {entry.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {safetyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-4 text-center">
                      <Icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LifeSafeTrack;
