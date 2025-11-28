import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConsentModal } from "@/components/ConsentModal";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PartnerProgram from "./pages/PartnerProgram";
import AmbassadorClub from "./pages/AmbassadorClub";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PersonalDataPolicy from "./pages/PersonalDataPolicy";
import PublicOffer from "./pages/PublicOffer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ConsentModal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/partner-program" element={<PartnerProgram />} />
          <Route path="/ambassador-club" element={<AmbassadorClub />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/personal-data-policy" element={<PersonalDataPolicy />} />
          <Route path="/public-offer" element={<PublicOffer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
