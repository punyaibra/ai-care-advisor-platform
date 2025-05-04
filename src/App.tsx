
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ConsultPage from "./pages/ConsultPage";
import HistoryPage from "./pages/HistoryPage";
import ResourcesPage from "./pages/ResourcesPage";
import NotFound from "./pages/NotFound";
import Layout from "@/components/layout/Layout";
import { UserProvider } from "@/contexts/UserContext";
import { NotificationProvider } from "@/contexts/NotificationContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <NotificationProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout><HomePage /></Layout>} />
              <Route path="/consult" element={<Layout><ConsultPage /></Layout>} />
              <Route path="/history" element={<Layout><HistoryPage /></Layout>} />
              <Route path="/resources" element={<Layout><ResourcesPage /></Layout>} />
              <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </NotificationProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;
