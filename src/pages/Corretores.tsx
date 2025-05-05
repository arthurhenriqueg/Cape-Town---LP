import { memo } from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import ImplementationSection from "../components/ImplementationSection";
import LeisureSection from "../components/LeisureSection";
import GallerySection from "../components/GallerySection";
import LocationSection from "../components/LocationSection";
import OpportunitySection from "../components/OpportunitySection";

const Corretores = () => {
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
      {/* Footer e WhatsAppButton removidos */}
    </div>
  );
};

export default memo(Corretores);
