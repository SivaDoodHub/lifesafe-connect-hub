
import { Home, Phone, Building2, Truck } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Phone, label: "Emergency", path: "/emergency" },
    { icon: Building2, label: "Hospitals", path: "/hospitals" },
    { icon: Truck, label: "Ambulance", path: "/ambulance" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:hidden">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;
          
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={cn(
                "flex flex-col items-center py-2 px-3 transition-colors",
                isActive ? "text-red-600" : "text-gray-500"
              )}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
