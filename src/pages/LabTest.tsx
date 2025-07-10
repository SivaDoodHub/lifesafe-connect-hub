
import { useState } from "react";
import { ArrowLeft, Search, MapPin, Clock, Star, Phone, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

interface LabTest {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  fastingRequired: boolean;
  reportTime: string;
  category: string;
}

interface Lab {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  distance: string;
  address: string;
  phone: string;
  homeCollection: boolean;
  discount?: number;
}

const LabTest = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLab, setSelectedLab] = useState<string | null>(null);

  const labTests: LabTest[] = [
    {
      id: "1",
      name: "Complete Blood Count (CBC)",
      price: 299,
      originalPrice: 450,
      description: "Complete blood analysis including RBC, WBC, Platelets",
      fastingRequired: false,
      reportTime: "6 hours",
      category: "blood"
    },
    {
      id: "2", 
      name: "Lipid Profile",
      price: 599,
      originalPrice: 800,
      description: "Cholesterol, Triglycerides, HDL, LDL analysis",
      fastingRequired: true,
      reportTime: "12 hours",
      category: "blood"
    },
    {
      id: "3",
      name: "Thyroid Function Test (TFT)",
      price: 799,
      originalPrice: 1200,
      description: "T3, T4, TSH levels analysis",
      fastingRequired: false,
      reportTime: "24 hours",
      category: "hormone"
    },
    {
      id: "4",
      name: "Liver Function Test",
      price: 699,
      originalPrice: 950,
      description: "SGOT, SGPT, Bilirubin, Protein analysis",
      fastingRequired: true,
      reportTime: "8 hours",
      category: "blood"
    },
    {
      id: "5",
      name: "Chest X-Ray",
      price: 399,
      description: "Digital chest X-ray imaging",
      fastingRequired: false,
      reportTime: "2 hours",
      category: "radiology"
    },
    {
      id: "6",
      name: "ECG (Electrocardiogram)",
      price: 199,
      description: "Heart rhythm and electrical activity test",
      fastingRequired: false,
      reportTime: "1 hour",
      category: "cardiac"
    },
    {
      id: "7",
      name: "Urine Routine Examination",
      price: 149,
      originalPrice: 250,
      description: "Complete urine analysis for infections and disorders",
      fastingRequired: false,
      reportTime: "4 hours",
      category: "urine"
    },
    {
      id: "8",
      name: "HbA1c (Diabetes Test)",
      price: 449,
      originalPrice: 600,
      description: "3-month average blood sugar level test",
      fastingRequired: false,
      reportTime: "6 hours",
      category: "diabetes"
    },
    {
      id: "9",
      name: "Vitamin D Test",
      price: 899,
      originalPrice: 1200,
      description: "25-Hydroxy Vitamin D level analysis",
      fastingRequired: false,
      reportTime: "48 hours",
      category: "vitamin"
    },
    {
      id: "10",
      name: "COVID-19 RT-PCR",
      price: 599,
      description: "Real-time PCR test for COVID-19 detection",
      fastingRequired: false,
      reportTime: "24 hours",
      category: "infection"
    }
  ];

  const labs: Lab[] = [
    {
      id: "1",
      name: "PathLab Diagnostics",
      rating: 4.5,
      reviews: 1200,
      distance: "1.2 km",
      address: "Anna Nagar, Chennai",
      phone: "+91 9876543210",
      homeCollection: true,
      discount: 20
    },
    {
      id: "2",
      name: "Metro Lab Centre",
      rating: 4.3,
      reviews: 890,
      distance: "2.1 km", 
      address: "T. Nagar, Chennai",
      phone: "+91 9876543211",
      homeCollection: true,
      discount: 15
    },
    {
      id: "3",
      name: "Apollo Diagnostics",
      rating: 4.7,
      reviews: 2100,
      distance: "3.5 km",
      address: "Adyar, Chennai",
      phone: "+91 9876543212",
      homeCollection: false
    }
  ];

  const getTestsByCategory = (category: string) => {
    if (category === "all") return labTests;
    return labTests.filter(test => test.category === category);
  };

  const filteredTests = labTests.filter(test =>
    test.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="flex-shrink-0"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Lab Tests</h1>
            <p className="text-sm text-gray-600">Book diagnostic tests</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-4 bg-white border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for tests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 py-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
            <TabsTrigger value="blood" className="text-xs">Blood</TabsTrigger>
            <TabsTrigger value="radiology" className="text-xs">Imaging</TabsTrigger>
            <TabsTrigger value="labs" className="text-xs">Labs</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredTests.map((test) => (
              <Card key={test.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1">{test.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{test.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {test.fastingRequired && (
                          <Badge variant="outline" className="text-xs">Fasting Required</Badge>
                        )}
                        <Badge variant="outline" className="text-xs flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {test.reportTime}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-green-600">₹{test.price}</span>
                        {test.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">₹{test.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <Button size="sm" className="flex-shrink-0">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="blood" className="space-y-4">
            {getTestsByCategory("blood").map((test) => (
              <Card key={test.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1">{test.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{test.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {test.fastingRequired && (
                          <Badge variant="outline" className="text-xs">Fasting Required</Badge>
                        )}
                        <Badge variant="outline" className="text-xs flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {test.reportTime}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-green-600">₹{test.price}</span>
                        {test.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">₹{test.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <Button size="sm" className="flex-shrink-0">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="radiology" className="space-y-4">
            {getTestsByCategory("radiology").map((test) => (
              <Card key={test.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1">{test.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{test.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="text-xs flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {test.reportTime}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-green-600">₹{test.price}</span>
                        {test.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">₹{test.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <Button size="sm" className="flex-shrink-0">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="labs" className="space-y-4">
            {labs.map((lab) => (
              <Card key={lab.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{lab.name}</h3>
                        {lab.discount && (
                          <Badge className="bg-red-100 text-red-600 text-xs">
                            {lab.discount}% OFF
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{lab.rating}</span>
                        <span className="text-sm text-gray-500">({lab.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                        <MapPin className="h-4 w-4" />
                        <span>{lab.address} • {lab.distance}</span>
                      </div>
                      {lab.homeCollection && (
                        <div className="flex items-center gap-1 text-sm text-green-600 mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>Home Collection Available</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 flex-shrink-0">
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button size="sm">
                        Select
                      </Button>
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

export default LabTest;
