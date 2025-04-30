
import { useEffect } from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import ImplementationSection from "../components/ImplementationSection";
import LeisureSection from "../components/LeisureSection";
import LocationSection from "../components/LocationSection";
import OpportunitySection from "../components/OpportunitySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { toast } from "sonner";

const Index = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast(
        "Unidades Disponíveis",
        {
          description: "Temos unidades disponíveis para você. Deseja falar com um consultor?",
          action: {
            label: "Falar agora",
            onClick: () => window.open("https://wa.me/5547999999999", "_blank"),
          },
        }
      );
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-beige">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ImplementationSection />
      <LeisureSection />
      <LocationSection />
      <OpportunitySection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
