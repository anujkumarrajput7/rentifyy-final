import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocationProvider } from "@/contexts/LocationContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import LocationPage from "./pages/LocationPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryListingPage from "./pages/CategoryListingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LocationProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/location" element={<LocationPage />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/category/:slug" element={<CategoryListingPage />} />
                <Route path="/product/:id" element={<ProductDetailsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </LocationProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
