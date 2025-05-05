import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";

// Lazy load das páginas
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrecoDeCusto = lazy(() => import("./pages/PrecoDeCusto"));
const Corretores = lazy(() => import("./pages/Corretores"));


const queryClient = new QueryClient();

// Type definition for Facebook Pixel
declare global {
  interface Window {
    fbq?: (
      type: string,
      eventName: string,
      params?: Record<string, any>
    ) => void;
  }
}

const App = () => {
  // 🔥 RASTREAMENTO GLOBAL DE CLIQUES EM BOTÕES WHATSAPP
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest("a[href*='wa.me'], a[href*='api.whatsapp.com']");
      if (anchor && typeof window.fbq !== "undefined") {
        window.fbq("track", "Contact");
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="p-4 text-center text-muted">Carregando...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/preco-de-custo" element={<PrecoDeCusto />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/corretores" element={<Corretores />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

