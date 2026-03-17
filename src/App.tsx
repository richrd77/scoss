import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Eager load homepage for LCP
import Index from "./pages/Index";

// Lazy load all other pages
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));
const ITInfrastructure = lazy(() => import("./pages/ITInfrastructure"));
const CustomSoftware = lazy(() => import("./pages/CustomSoftware"));
const CloudSolutions = lazy(() => import("./pages/CloudSolutions"));
const Cybersecurity = lazy(() => import("./pages/Cybersecurity"));
const ITConsulting = lazy(() => import("./pages/ITConsulting"));
const NetworkSolutions = lazy(() => import("./pages/NetworkSolutions"));
const TechnicalSupport = lazy(() => import("./pages/TechnicalSupport"));
const Internship = lazy(() => import("./pages/Internship"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/website-design-services-tumkur" element={<WebDevelopment />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
            <Route path="/services/custom-software-development" element={<CustomSoftware />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/it-consulting" element={<ITConsulting />} />
            <Route path="/services/network-solutions" element={<NetworkSolutions />} />
            <Route path="/services/technical-support" element={<TechnicalSupport />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
