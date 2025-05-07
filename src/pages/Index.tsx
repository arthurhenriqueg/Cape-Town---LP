import { useEffect, useCallback, memo } from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import ImplementationSection from "../components/ImplementationSection";
import LeisureSection from "../components/LeisureSection";
import LocationSection from "../components/LocationSection";
import OpportunitySection from "../components/OpportunitySection";
import ContactSection from "../components/ContactSection";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { toast } from "sonner";
import { getWhatsAppLink } from '../utils/whatsapp';

const Index = () => {
  const handleClick = useCallback(() => {
    window.open(getWhatsAppLink(), "_blank");
  }, []);

  useEffect(() => {
    // Google Analytics 4 script injection
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-6MDZR11FR9';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-6MDZR11FR9');
    `;
    document.head.appendChild(script2);

    const timer = setTimeout(() => {
      toast("Unidades Disponíveis", {
        description: "Temos unidades disponíveis para você. Deseja falar com um consultor?",
        action: {
          label: "Falar agora",
          onClick: handleClick,
        },
      });
    }, 30000);

    return () => clearTimeout(timer);
  }, [handleClick]);

  return (
    <div className="min-h-screen bg-beige">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ImplementationSection />
      <LeisureSection />
      <GallerySection />
      <LocationSection />
      <OpportunitySection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default memo(Index);


