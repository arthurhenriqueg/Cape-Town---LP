
import { ChevronDown } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=4752&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 to-charcoal/40" />
      </div>
      
      {/* Hero Content */}
      <div className="container-custom relative z-10 text-white flex flex-col items-center text-center">
        <h1 className="heading-xl mb-4 max-w-4xl animate-slide-down opacity-0" style={{ animationDelay: '0.3s' }}>
          Cape Town: Sofisticação e Exclusividade em Balneário Camboriú
        </h1>
        <div className="w-20 h-0.5 bg-gold mb-8 animate-slide-down opacity-0" style={{ animationDelay: '0.5s' }} />
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-slide-down opacity-0" style={{ animationDelay: '0.7s' }}>
          O primeiro edifício em Balneário Camboriú projetado pelo renomado arquiteto Jayme Bernardo
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-down opacity-0" style={{ animationDelay: '0.9s' }}>
          <a href={getWhatsAppLink()} className="button-primary">
            Saiba mais sobre as unidades disponíveis
          </a>
          <a href={getWhatsAppLink()} className="button-secondary">
            Agende uma visita
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <span className="text-sm mb-1">Explore</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
