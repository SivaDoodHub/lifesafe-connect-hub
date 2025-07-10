
import { useState } from "react";
import { ArrowLeft, Search, ShoppingCart, Plus, Minus, Pill, Truck, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Medicines = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Pain Relief",
    "Cold & Flu",
    "Diabetes",
    "Heart Health",
    "Vitamins",
    "Skin Care",
    "Digestive",
    "First Aid"
  ];

  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Pain Relief",
      price: 25,
      originalPrice: 30,
      description: "For fever and pain relief",
      inStock: true,
      prescription: false,
      discount: "17% OFF"
    },
    {
      id: 2,
      name: "Crocin Advance",
      category: "Pain Relief",
      price: 45,
      originalPrice: 50,
      description: "Fast relief from headache",
      inStock: true,
      prescription: false,
      discount: "10% OFF"
    },
    {
      id: 3,
      name: "Azithromycin 500mg",
      category: "Antibiotics",
      price: 120,
      originalPrice: 120,
      description: "Antibiotic for bacterial infections",
      inStock: true,
      prescription: true,
      discount: null
    },
    {
      id: 4,
      name: "Vitamin D3 Tablets",
      category: "Vitamins",
      price: 180,
      originalPrice: 200,
      description: "Bone health supplement",
      inStock: true,
      prescription: false,
      discount: "10% OFF"
    }
  ];

  const orders = [
    {
      orderId: "ORD001",
      date: "Jan 20, 2024",
      items: 3,
      total: 250,
      status: "Delivered",
      deliveryDate: "Jan 22, 2024"
    },
    {
      orderId: "ORD002",
      date: "Jan 18, 2024",
      items: 2,
      total: 150,
      status: "In Transit",
      deliveryDate: "Expected Jan 21, 2024"
    }
  ];

  const addToCart = (medicineId: number) => {
    setCart(prev => ({
      ...prev,
      [medicineId]: (prev[medicineId] || 0) + 1
    }));
  };

  const removeFromCart = (medicineId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[medicineId] > 1) {
        newCart[medicineId]--;
      } else {
        delete newCart[medicineId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    medicine.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <h1 className="text-xl font-bold text-gray-900">Medicines</h1>
              <p className="text-sm text-gray-600">Order medicines online</p>
            </div>
          </div>
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search medicines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <Pill className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <p className="font-medium">Upload Prescription</p>
              <p className="text-xs text-gray-600">Get prescribed medicines</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="font-medium">Quick Reorder</p>
              <p className="text-xs text-gray-600">Reorder previous items</p>
            </CardContent>
          </Card>
        </div>

        {/* Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start text-sm h-auto py-2"
                  onClick={() => setSearchQuery(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="medicines" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="medicines">Medicines</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
          </TabsList>

          <TabsContent value="medicines" className="space-y-4">
            {filteredMedicines.map((medicine) => (
              <Card key={medicine.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">{medicine.name}</h3>
                          <p className="text-sm text-gray-600">{medicine.description}</p>
                          <Badge variant="secondary" className="mt-1">
                            {medicine.category}
                          </Badge>
                          {medicine.prescription && (
                            <Badge variant="outline" className="ml-2 mt-1 text-red-600 border-red-600">
                              Prescription Required
                            </Badge>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-lg">₹{medicine.price}</span>
                            {medicine.originalPrice > medicine.price && (
                              <span className="text-sm text-gray-500 line-through">
                                ₹{medicine.originalPrice}
                              </span>
                            )}
                          </div>
                          {medicine.discount && (
                            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                              {medicine.discount}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-2">
                          <Truck className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">Free delivery above ₹500</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {cart[medicine.id] ? (
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => removeFromCart(medicine.id)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="font-medium">{cart[medicine.id]}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => addToCart(medicine.id)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <Button
                              size="sm"
                              onClick={() => addToCart(medicine.id)}
                              disabled={!medicine.inStock}
                            >
                              Add to Cart
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            {orders.map((order) => (
              <Card key={order.orderId}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Order #{order.orderId}</h3>
                      <p className="text-sm text-gray-600">{order.date}</p>
                      <p className="text-sm text-gray-600">{order.items} items • ₹{order.total}</p>
                      <p className="text-xs text-gray-500 mt-1">{order.deliveryDate}</p>
                    </div>
                    <div className="text-right space-y-2">
                      <Badge 
                        variant={order.status === "Delivered" ? "default" : "secondary"}
                        className={order.status === "Delivered" ? "bg-green-500" : ""}
                      >
                        {order.status}
                      </Badge>
                      <div className="flex flex-col space-y-1">
                        <Button size="sm" variant="outline">Track Order</Button>
                        <Button size="sm" variant="outline">Reorder</Button>
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

export default Medicines;
