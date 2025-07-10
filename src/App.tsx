
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Emergency from "./pages/Emergency";
import Hospitals from "./pages/Hospitals";
import Ambulance from "./pages/Ambulance";
import LabTest from "./pages/LabTest";
import LifeSafeTrack from "./pages/LifeSafeTrack";
import VideoConsult from "./pages/VideoConsult";
import Medicines from "./pages/Medicines";
import HireManpower from "./pages/HireManpower";
import BottomNavigation from "./components/BottomNavigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/ambulance" element={<Ambulance />} />
            <Route path="/lab" element={<LabTest />} />
            <Route path="/track" element={<LifeSafeTrack />} />
            <Route path="/consult" element={<VideoConsult />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/manpower" element={<HireManpower />} />
          </Routes>
          <BottomNavigation />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
