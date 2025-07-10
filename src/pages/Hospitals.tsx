
import { useState } from "react";
import { Search, Filter, MapPin, Phone, Navigation, Heart, Star, Bed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Hospitals = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Government", "Private", "Trust", "Wishlist"];
  
  const hospitals = [
    {
      id: 1,
      name: "Mount Multispeciality Hospital",
      location: "Anna Nagar, Chennai",
      availability: 4,
      distance: "Nearest",
      type: "Private",
      rating: 4.5,
      reviews: 1250,
      isWishlisted: false,
      phone: "+91 9876543210",
      services: ["ICU", "Emergency", "Cardiology"]
    },
    {
      id: 2,
      name: "Government General Hospital",
      location: "Park Town, Chennai",
      availability: 12,
      distance: "2.1 km",
      type: "Government",
      rating: 4.2,
      reviews: 890,
      isWishlisted: true,
      phone: "+91 9876543211",
      services: ["ICU", "Emergency", "Trauma"]
    },
    {
      id: 3,
      name: "Apollo Specialty Hospital",
      location: "Teynampet, Chennai",
      availability: 0,
      distance: "3.2 km",
      type: "Private",
      rating: 4.8,
      reviews: 2100,
      isWishlisted: false,
      phone: "+91 9876543212",
      services: ["ICU", "Surgery", "Oncology"]
    },
    {
      id: 4,
      name: "Trust Medical Center",
      location: "T. Nagar, Chennai",
      availability: 7,
      distance: "4.5 km",
      type: "Trust",
      rating: 4.3,
      reviews: 567,
      isWishlisted: true,
      phone: "+91 9876543213",
      services: ["ICU", "Pediatrics", "Orthopedics"]
    }
  ];

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hospital.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "All" || 
                         hospital.type === activeFilter || 
                         (activeFilter === "Wishlist" && hospital.isWishlisted);
    return matchesSearch && matchesFilter;
  });

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleDirections = (hospitalName: string) => {
    console.log(`Getting directions to ${hospitalName}`);
    // In real app, this would open Google Maps with directions
  };

  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const handleBookBed = (hospital: any) => {
    setSelectedHospital(hospital);
    setShowBookingForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-6 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">ICU & Hospital Availability</h1>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search hospitals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-3"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap ${
                activeFilter === filter 
                  ? "bg-blue-600 text-white" 
                  : "text-gray-600 border-gray-300"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="mx-4 my-6">
        <Card>
          <CardContent className="p-0">
            <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <p className="text-blue-800 font-medium">Interactive Map</p>
                <p className="text-sm text-blue-600">Hospital locations will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hospital Cards */}
      <div className="px-4 space-y-4">
        {filteredHospitals.map((hospital) => (
          <Card key={hospital.id} className="shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-lg text-gray-900">{hospital.name}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-1"
                    >
                      <Heart className={`h-4 w-4 ${hospital.isWishlisted ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                    </Button>
                  </div>
                  <p className="text-gray-600 text-sm flex items-center mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {hospital.location}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{hospital.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({hospital.reviews} reviews)</span>
                  </div>
                </div>
                
                <Badge variant={hospital.type === "Government" ? "default" : "secondary"}>
                  {hospital.type}
                </Badge>
              </div>

              {/* Availability & Distance */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 text-blue-600 mr-1" />
                    <span className={`font-medium ${hospital.availability > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      Available: {hospital.availability}
                    </span>
                  </div>
                  <Badge variant="outline" className="text-gray-600">
                    {hospital.distance}
                  </Badge>
                </div>
              </div>

              {/* Services */}
              <div className="flex flex-wrap gap-2 mb-4">
                {hospital.services.map((service, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {service}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button
                  onClick={() => handleCall(hospital.phone)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                
                <Button
                  onClick={() => handleDirections(hospital.name)}
                  variant="outline"
                  className="flex-1"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Directions
                </Button>
                
                {hospital.availability > 0 && (
                  <Button
                    onClick={() => handleBookBed(hospital)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Bed className="h-4 w-4 mr-2" />
                    Book Bed
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredHospitals.length === 0 && (
        <div className="text-center py-12">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No hospitals found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default Hospitals;
