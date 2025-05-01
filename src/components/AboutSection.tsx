
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="heading-lg text-charcoal mb-6">
              Inspirado na elegância da icônica praia sul-africana
            </h2>
            <div className="gold-divider" />
            <p className="text-body mb-6">
              Com apenas dois apartamentos por andar, cada unidade possui 139m², distribuídos em 
              3 suítes e uma ampla área social integrada à cozinha, garantindo sofisticação, 
              conforto e funcionalidade para um estilo de vida contemporâneo.
            </p>
            <p className="text-body mb-8">
              Cape Town é uma obra-prima arquitetônica que redefine o conceito de luxo em 
              Balneário Camboriú, combinando design sofisticado, materiais nobres e uma atenção 
              meticulosa aos detalhes.
            </p>
            <div className="flex items-center">
              <p className="italic text-gold mr-4">Jayme Bernardo</p>
              <img 
                src="https://www.homedesign.com.br/media/4844/jayme-bernardo.jpg" 
                alt="Assinatura Jayme Bernardo" 
                className="h-16 w-auto"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="bg-gold/20 w-full h-full absolute -top-6 -left-6 z-0 rounded-sm" />
              <img 
                src="<img src="https://i.ibb.co/2XRb0dW/Whats-App-Image-2025-04-30-at-17-52-39-3.jpg" alt="Whats-App-Image-2025-04-30-at-17-52-39-3" border="0">" 
                alt="Cape Town Building" 
                className="w-full h-auto object-cover z-10 relative rounded-sm shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 p-4 bg-gold text-white rounded-sm z-20 subtle-shadow">
                <p className="font-serif text-lg">Design Exclusivo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
