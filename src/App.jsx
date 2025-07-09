
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdminDashboard from "./pages/AdminDashboard";
import UploadPet from "./pages/UploadPet";
import BrowsePets from "./pages/BrowsePets";
import NotFound from "./pages/NotFound";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import './index.css'
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/upload" element={<UploadPet />} />
          <Route path="/admin/signin" element={<SignIn userType="admin" />} />
          <Route path="/admin/signup" element={<SignUp userType="admin" />} />
          <Route path="/customer/browse" element={<BrowsePets />} />
          <Route path="/customer/signin" element={<SignIn userType="customer" />} />
          <Route path="/customer/signup" element={<SignUp userType="customer" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
