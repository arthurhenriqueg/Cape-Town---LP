import { memo } from 'react';
import NavbarClean from "../components/NavbarClean";
import HeroSectionClean from "../components/HeroSectionClean";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import ImplementationSection from "../components/ImplementationSection";
import LeisureSection from "../components/LeisureSection";
import GallerySection from "../components/GallerySection";
import LocationSection from "../components/LocationSection";
import OpportunitySectionClean from "../components/OpportunitySectionClean";

const Corretores = () => {
  return (
    <div className="min-h-screen bg-beige">
      <NavbarClean />
      <HeroSectionClean />
      <AboutSection />
      <FeaturesSection />
      <ImplementationSection />
      <LeisureSection />
      <GallerySection />
      <LocationSection />
      <OpportunitySectionClean />
    </div>
  );
};

export default memo(Corretores);
