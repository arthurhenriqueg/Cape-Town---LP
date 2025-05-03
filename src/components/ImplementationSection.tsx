import React from 'react';

const ImplementationSection = () => {
  return (
    <section id="implementation" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-full">
              <img 
                src="https://i.ibb.co/CsBN8NDt/fachada.webp"
                alt="Implantação Cape Town" 
                className="w-full h-full object-cover rounded-sm subtle-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent rounded-sm" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-serif text-xl">Terreno amplo de cinco lotes</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="heading-lg text-charcoal mb-6">
              Diferencial de Implantação
            </h2>
            <div className="gold-divider" />
            <p className="text-body mb-6">
              Uma torre única, estrategicamente posicionada em um amplo terreno de cinco lotes,
              localizado em uma ponta de quadra privilegiada.
            </p>
            <p className="text-body mb-8">
              Sua localização, com duas esquinas, proporciona ventilação cruzada, abundante 
              iluminação natural e uma sensação de amplitude e liberdade raramente encontrada 
              em empreendimentos urbanos.
            </p>
            
            <div className="bg-beige p-6 rounded-sm subtle-shadow">
              <h4 className="heading-sm text-charcoal mb-4">Vantagens da implantação:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  <span className="text-body">Ponta de quadra privilegiada</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  <span className="text-body">Dupla orientação para o sol</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  <span className="text-body">Ventilação natural otimizada</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  <span className="text-body">Maior distância entre edificações vizinhas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;
