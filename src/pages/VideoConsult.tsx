
import { useState } from "react";
import { ArrowLeft, Video, Calendar, Clock, Star, User, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const VideoConsult = () => {
  const navigate = useNavigate();

  const availableDoctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "General Physician",
      experience: "8 years",
      rating: 4.8,
      price: "₹500",
      available: "Available Now",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      experience: "12 years",
      rating: 4.9,
      price: "₹800",
      available: "Available in 30 mins",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Dr. Anita Desai",
      specialty: "Pediatrician",
      experience: "10 years",
      rating: 4.7,
      price: "₹600",
      available: "Available at 3:00 PM",
      image: "https://images.unsplash.com/photo-1594824375190-0d83ee6c83f2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const upcomingAppointments = [
    {
      doctor: "Dr. Priya Sharma",
      specialty: "General Physician",
      date: "Today",
      time: "2:30 PM",
      type: "Follow-up",
      status: "Confirmed"
    },
    {
      doctor: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      date: "Tomorrow",
      time: "10:00 AM",
      type: "Consultation",
      status: "Pending"
    }
  ];

  const consultationHistory = [
    {
      doctor: "Dr. Anita Desai",
      specialty: "Pediatrician",
      date: "Jan 15, 2024",
      time: "11:00 AM",
      duration: "25 mins",
      prescription: "Available"
    },
    {
      doctor: "Dr. Priya Sharma",
      specialty: "General Physician",
      date: "Jan 10, 2024",
      time: "3:30 PM",
      duration: "20 mins",
      prescription: "Available"
    }
  ];

  const specialties = [
    "General Physician",
    "Cardiologist",
    "Dermatologist",
    "Pediatrician",
    "Orthopedic",
    "Gynecologist",
    "Psychiatrist",
    "ENT Specialist"
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
            <h1 className="text-xl font-bold text-gray-900">Video Consult</h1>
            <p className="text-sm text-gray-600">Consult with doctors online</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <Video className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <p className="font-medium">Instant Consult</p>
              <p className="text-xs text-gray-600">Available doctors</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="font-medium">Book Appointment</p>
              <p className="text-xs text-gray-600">Schedule later</p>
            </CardContent>
          </Card>
        </div>

        {/* Specialties */}
        <Card>
          <CardHeader>
            <CardTitle>Specialties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {specialties.map((specialty, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start text-sm h-auto py-2"
                  onClick={() => console.log(`Selected: ${specialty}`)}
                >
                  {specialty}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="doctors" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="doctors">Doctors</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="doctors" className="space-y-4">
            {availableDoctors.map((doctor) => (
              <Card key={doctor.id}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">{doctor.name}</h3>
                          <p className="text-sm text-gray-600">{doctor.specialty}</p>
                          <p className="text-xs text-gray-500">{doctor.experience} experience</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">{doctor.price}</p>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs">{doctor.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <Badge 
                          variant="secondary" 
                          className={doctor.available === "Available Now" ? "bg-green-100 text-green-800" : ""}
                        >
                          {doctor.available}
                        </Badge>
                        <Button size="sm">
                          <Video className="h-4 w-4 mr-1" />
                          Consult Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="appointments" className="space-y-4">
            {upcomingAppointments.map((appointment, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{appointment.doctor}</h3>
                      <p className="text-sm text-gray-600">{appointment.specialty}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{appointment.date}</span>
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{appointment.time}</span>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <Badge variant={appointment.status === "Confirmed" ? "default" : "secondary"}>
                        {appointment.status}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Reschedule</Button>
                        <Button size="sm">
                          <Video className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {consultationHistory.map((consultation, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{consultation.doctor}</h3>
                      <p className="text-sm text-gray-600">{consultation.specialty}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{consultation.date}</span>
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{consultation.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Duration: {consultation.duration}</p>
                    </div>
                    <div className="text-right space-y-2">
                      <Badge variant="secondary">Completed</Badge>
                      <div className="flex flex-col space-y-1">
                        <Button size="sm" variant="outline">View Report</Button>
                        <Button size="sm" variant="outline">Prescription</Button>
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

export default VideoConsult;
