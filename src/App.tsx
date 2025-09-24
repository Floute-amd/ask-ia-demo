import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import BrowseCoursesPageWithAI from "./pages/BrowseCoursesPageWithAI";
import DemoPage from "./pages/DemoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<BrowseCoursesPageWithAI />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/course/:courseId" element={<CoursePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
