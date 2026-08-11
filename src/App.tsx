import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import {
  AboutPage,
  BlogPage,
  ContactPage,
  FaqPage,
  InvertersPage,
  ProjectsPage,
  SolarCalculatorPage,
  SolarGuidePage,
  SolarPanelsPage,
  SolarPricingPage,
  SolarSolutions,
  SolarSubsidyPage,
  SolutionDetail,
} from "./pages/pages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solar-solutions" element={<SolarSolutions />} />
          <Route path="/residential-solar" element={<SolutionDetail slug="residential-solar" />} />
          <Route path="/commercial-solar" element={<SolutionDetail slug="commercial-solar" />} />
          <Route path="/industrial-solar" element={<SolutionDetail slug="industrial-solar" />} />
          <Route path="/agricultural-solar" element={<SolutionDetail slug="agricultural-solar" />} />
          <Route path="/solar-panels" element={<SolarPanelsPage />} />
          <Route path="/inverters" element={<InvertersPage />} />
          <Route path="/solar-calculator" element={<SolarCalculatorPage />} />
          <Route path="/solar-subsidy" element={<SolarSubsidyPage />} />
          <Route path="/solar-pricing" element={<SolarPricingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/solar-guide" element={<SolarGuidePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
