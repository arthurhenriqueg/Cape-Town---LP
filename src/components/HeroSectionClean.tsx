import { ChevronDown } from 'lucide-react';
import { memo } from 'react';

const HeroSectionClean = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://i.ibb.co/Kz9h8vS1/Whats-App-Image-2025-04-30-at-17-52-42-3.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 to-charcoal/40" />
      </div>

      <div className="container-custom relative z-10 text-white flex flex-col items-center text-center">
        <h1 className="heading-xl mb-4 max-w-4xl animate-slide-down opacity-0" style={{ animationDelay: '0.3s' }}>
          Cape Town: Sofisticação e Exclusividade em Balneário Camboriú
        </h1>
        <div className="w-20 h-0.5 bg-gold mb-8 animate-slide-down opacity-0" style={{ animationDelay: '0.5s' }} />
        <p className="font-light italic text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-slide-down opacity-0" style={{ animationDelay: '0.7s' }}>
          Oportunidade única de investimento em um dos destinos mais valorizados do Brasil
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <span className="text-sm mb-1">Explore</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default memo(HeroSectionClean);
