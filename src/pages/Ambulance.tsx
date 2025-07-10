
import { useState, useEffect } from "react";
import { MapPin, Phone, Clock, Navigation, Truck, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Ambulance = () => {
  const [currentLocation, setCurrentLocation] = useState("Detecting location...");
  const [selectedAmbulance, setSelectedAmbulance] = useState(null);

  const ambulanceTypes = [
    {
      id: 1,
      type: "BLS",
      name: "Basic Life Support",
      waitTime: "8 mins",
      phone: "+91 9876543220",
      vehicles: ["Ambulance Van", "Mini Ambulance"],
      fare: "₹500-800",
      availability: "available",
      features: ["Basic Medical Equipment", "Trained Paramedic", "Oxygen Support"]
    },
    {
      id: 2,
      type: "ALS",
      name: "Advanced Life Support",
      waitTime: "12 mins",
      phone: "+91 9876543221",
      vehicles: ["ICU Ambulance", "Cardiac Ambulance"],
      fare: "₹1200-2000",
      availability: "available",
      features: ["Advanced Medical Equipment", "Doctor on Board", "Defibrillator", "Ventilator"]
    },
    {
      id: 3,
      type: "ELS",
      name: "Emergency Life Support",
      waitTime: "18 mins",
      phone: "+91 9876543222",
      vehicles: ["Mobile ICU", "Trauma Ambulance"],
      fare: "₹2000-3500",
      availability: "busy",
      features: ["Complete ICU Setup", "Specialist Doctor", "Emergency Surgery Kit"]
    },
    {
      id: 4,
      type: "Patient Transport",
      name: "Non-Emergency Transport",
      waitTime: "25 mins",
      phone: "+91 9876543223",
      vehicles: ["Stretcher Van", "Wheelchair Accessible"],
      fare: "₹300-500",
      availability: "available",
      features: ["Comfortable Transport", "Basic First Aid", "Wheelchair Support"]
    }
  ];

  useEffect(() => {
    // Simulate location detection
    setTimeout(() => {
      setCurrentLocation("Anna Nagar, Chennai - 33KM Coverage Area");
    }, 2000);
  }, []);

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleBookAmbulance = (ambulance: any) => {
    setSelectedAmbulance(ambulance);
    console.log(`Booking ${ambulance.name}`);
    // In real app, this would open booking flow
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with Location */}
      <div className="bg-white shadow-sm px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Ambulance Booking</h1>
        
        {/* Location Display */}
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-red-600 mt-1" />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">Current Location</h3>
                <p className="text-sm text-gray-600">{currentLocation}</p>
                {currentLocation.includes("33KM") && (
                  <Badge className="mt-2 bg-green-100 text-green-800">
                    Coverage Available
                  </Badge>
                )}
              </div>
              <Button variant="outline" size="sm">
                <Navigation className="h-4 w-4 mr-1" />
                Change
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Map Section */}
        <Card>
          <CardContent className="p-0">
            <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-red-600 mx-auto mb-2 animate-pulse" />
                <p className="text-red-800 font-medium">Live Location Tracking</p>
                <p className="text-sm text-red-600">Your ambulance will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ambulance Types */}
      <div className="px-4 py-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Ambulance Type</h2>
        
        <div className="space-y-4">
          {ambulanceTypes.map((ambulance) => (
            <Card 
              key={ambulance.id} 
              className={`shadow-sm hover:shadow-md transition-all cursor-pointer border-2 ${
                selectedAmbulance?.id === ambulance.id ? 'border-red-500 bg-red-50' : 'border-transparent'
              }`}
              onClick={() => setSelectedAmbulance(ambulance)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <Truck className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-lg text-gray-900">{ambulance.type}</h3>
                        <div className={`w-3 h-3 rounded-full ${
                          ambulance.availability === 'available' ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                      <p className="text-gray-600 mb-2">{ambulance.name}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{ambulance.waitTime}</span>
                        </div>
                        <Badge variant="outline">{ambulance.fare}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <Badge 
                    variant={ambulance.availability === 'available' ? 'default' : 'destructive'}
                    className={ambulance.availability === 'available' ? 'bg-green-600' : ''}
                  >
                    {ambulance.availability === 'available' ? 'Available' : 'Busy'}
                  </Badge>
                </div>

                {/* Vehicle Types */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Vehicle Types:</p>
                  <div className="flex flex-wrap gap-2">
                    {ambulance.vehicles.map((vehicle, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {vehicle}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Features:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {ambulance.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCall(ambulance.phone);
                    }}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    disabled={ambulance.availability === 'busy'}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookAmbulance(ambulance);
                    }}
                    variant="outline"
                    className="flex-1"
                    disabled={ambulance.availability === 'busy'}
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Emergency Info */}
      <div className="px-4 pb-8">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Zap className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-blue-900 mb-1">Quick Tips</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Keep your phone charged and accessible</li>
                  <li>• Share your exact location with the operator</li>
                  <li>• Have patient details ready (age, condition)</li>
                  <li>• Clear the path for ambulance arrival</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Ambulance;
