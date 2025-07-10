
import { useState } from "react";
import { ArrowLeft, User, Star, Clock, MapPin, Phone, Shield, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const HireManpower = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    { name: "Home Nursing", icon: Users, description: "Professional nursing care at home" },
    { name: "Physiotherapy", icon: User, description: "Physical therapy and rehabilitation" },
    { name: "Elderly Care", icon: Shield, description: "Specialized care for seniors" },
    { name: "Patient Attendant", icon: Clock, description: "24/7 patient assistance" },
    { name: "Medical Technician", icon: User, description: "Lab and diagnostic support" },
    { name: "Ambulance Staff", icon: Users, description: "Emergency medical personnel" }
  ];

  const availableStaff = [
    {
      id: 1,
      name: "Nurse Priya Patel",
      category: "Home Nursing",
      experience: "5 years",
      rating: 4.8,
      hourlyRate: 200,
      location: "T. Nagar, Chennai",
      availability: "Available Now",
      specialization: "Post-operative care, Elderly care",
      verified: true
    },
    {
      id: 2,
      name: "Mr. Suresh Kumar",
      category: "Physiotherapy",
      experience: "8 years",
      rating: 4.9,
      hourlyRate: 300,
      location: "Anna Nagar, Chennai",
      availability: "Available from 2:00 PM",
      specialization: "Sports injury, Joint mobility",
      verified: true
    },
    {
      id: 3,
      name: "Ms. Lakshmi Devi",
      category: "Elderly Care",
      experience: "10 years",
      rating: 4.7,
      hourlyRate: 250,
      location: "Adyar, Chennai",
      availability: "Available Tomorrow",
      specialization: "Dementia care, Mobility assistance",
      verified: true
    },
    {
      id: 4,
      name: "Mr. Ravi Shankar",
      category: "Patient Attendant",
      experience: "3 years",
      rating: 4.6,
      hourlyRate: 150,
      location: "Velachery, Chennai",
      availability: "Available Now",
      specialization: "ICU assistance, General care",
      verified: true
    }
  ];

  const bookings = [
    {
      id: 1,
      staffName: "Nurse Priya Patel",
      service: "Home Nursing",
      date: "Today",
      time: "2:00 PM - 6:00 PM",
      status: "Confirmed",
      totalCost: 800
    },
    {
      id: 2,
      staffName: "Mr. Suresh Kumar",
      service: "Physiotherapy",
      date: "Tomorrow",
      time: "10:00 AM - 11:00 AM",
      status: "Pending",
      totalCost: 300
    }
  ];

  const pastBookings = [
    {
      id: 1,
      staffName: "Ms. Lakshmi Devi",
      service: "Elderly Care",
      date: "Jan 15, 2024",
      duration: "8 hours",
      rating: 5,
      totalCost: 2000
    },
    {
      id: 2,
      staffName: "Mr. Ravi Shankar",
      service: "Patient Attendant",
      date: "Jan 10, 2024",
      duration: "12 hours",
      rating: 4,
      totalCost: 1800
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-4">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Hire Manpower</h1>
            <p className="text-sm text-gray-600">Professional healthcare staff</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Service Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Our Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceCategories.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-medium">{service.name}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="staff" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="staff">Available Staff</TabsTrigger>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="staff" className="space-y-4">
            {availableStaff.map((staff) => (
              <Card key={staff.id}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium">{staff.name}</h3>
                            {staff.verified && (
                              <Shield className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{staff.category}</p>
                          <p className="text-xs text-gray-500">{staff.experience} experience</p>
                          <p className="text-sm text-gray-600 mt-1">{staff.specialization}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">₹{staff.hourlyRate}/hr</p>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs">{staff.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{staff.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{staff.availability}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <Badge 
                          variant="secondary" 
                          className={staff.availability === "Available Now" ? "bg-green-100 text-green-800" : ""}
                        >
                          {staff.availability}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4 mr-1" />
                            Contact
                          </Button>
                          <Button size="sm">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="bookings" className="space-y-4">
            {bookings.map((booking) => (
              <Card key={booking.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{booking.staffName}</h3>
                      <p className="text-sm text-gray-600">{booking.service}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <span>{booking.date}</span>
                        <span>{booking.time}</span>
                      </div>
                      <p className="text-sm font-medium mt-1">Total: ₹{booking.totalCost}</p>
                    </div>
                    <div className="text-right space-y-2">
                      <Badge 
                        variant={booking.status === "Confirmed" ? "default" : "secondary"}
                        className={booking.status === "Confirmed" ? "bg-green-500" : ""}
                      >
                        {booking.status}
                      </Badge>
                      <div className="flex flex-col space-y-1">
                        <Button size="sm" variant="outline">Modify</Button>
                        <Button size="sm" variant="outline">Cancel</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {pastBookings.map((booking) => (
              <Card key={booking.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{booking.staffName}</h3>
                      <p className="text-sm text-gray-600">{booking.service}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <span>{booking.date}</span>
                        <span>Duration: {booking.duration}</span>
                      </div>
                      <p className="text-sm font-medium mt-1">Total: ₹{booking.totalCost}</p>
                    </div>
                    <div className="text-right space-y-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{booking.rating}.0</span>
                      </div>
                      <Badge variant="secondary">Completed</Badge>
                      <div className="flex flex-col space-y-1">
                        <Button size="sm" variant="outline">Rate Service</Button>
                        <Button size="sm" variant="outline">Book Again</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HireManpower;
