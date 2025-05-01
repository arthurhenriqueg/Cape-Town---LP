import { useState } from 'react';

const LeisureSection = () => {
  const [activeTab, setActiveTab] = useState('general');

  const leisureAreas = [
    { 
      id: 'pool', 
      name: 'Piscina térmica', 
      image: 'https://i.ibb.co/VcWvVrF7/Whats-App-Image-2025-04-30-at-17-52-44-2.jpg' 
    },
    { 
      id: 'spa', 
      name: 'Sauna e spa', 
      image: 'https://i.ibb.co/SwxS0DFR/Whats-App-Image-2025-04-30-at-17-52-37.jpg' 
    },
    { 
      id: 'garden', 
      name: 'Jardins', 
      image: 'https://i.ibb.co/mQcxMPm/Whats-App-Image-2025-04-30-at-17-52-44-1.jpg' 
    },
    { 
      id: 'party', 
      name: 'Salões de festas', 
      image: 'https://i.ibb.co/8g5TmB6D/Whats-App-Image-2025-04-30-at-17-52-42-4.jpg' 
    },
    { 
      id: 'gourmet', 
      name: 'Espaço gourmet', 
      image: 'https://i.ibb.co/Y4p1KKvz/Whats-App-Image-2025-04-30-at-17-52-39-4.jpg' 
    },
    { 
      id: 'kids', 
      name: 'Área kids', 
      image: 'https://i.ibb.co/0pHwhjzY/Whats-App-Image-2025-04-30-at-17-52-40-2.jpg' 
    },
    { 
      id: 'gym', 
      name: 'Academia moderna', 
      image: 'https://i.ibb.co/FL8cTKrK/Whats-App-Image-2025-04-30-at-17-52-40-3.jpg' 
    },
    { 
      id: 'office', 
      name: 'Escritório para coworking', 
      image: 'https://i.ibb.co/h1LvtPH0/Whats-App-Image-2025-04-30-at-17-52-41-1.jpg'
    },
  ];

  return (
    <section id="leisure" className="py-20 bg-beige">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-charcoal mb-6">Lazer Completo em Dois Andares</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-body text-charcoal/80">
            O Cape Town oferece uma área de lazer completa, distribuída em dois andares, 
            projetada para proporcionar momentos inesquecíveis para você e sua família.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={`px-6 py-3 font-medium text-sm transition-all ${
              activeTab === 'general' 
                ? 'bg-gold text-white' 
                : 'bg-white text-charcoal hover:bg-gold-light/30'
            }`}
            onClick={() => setActiveTab('general')}
          >
            Áreas de Lazer
          </button>
          <button 
            className={`px-6 py-3 font-medium text-sm transition-all ${
              activeTab === 'rooftop' 
                ? 'bg-gold text-white' 
                : 'bg-white text-charcoal hover:bg-gold-light/30'
            }`}
            onClick={() => setActiveTab('rooftop')}
          >
            Rooftop Exclusivo
          </button>
        </div>
        
        {/* General Leisure Areas */}
        {activeTab === 'general' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leisureAreas.map((area) => (
              <div 
                key={area.id} 
                className="group relative overflow-hidden rounded-sm subtle-shadow hover-scale"
              >
                <img 
                  src={area.image} 
                  alt={area.name} 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-serif text-xl">{area.name}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Rooftop */}
        {activeTab === 'rooftop' && (
          <div className="bg-white rounded-sm overflow-hidden subtle-shadow">
            <div className="relative h-96">
              <img 
                src="https://i.ibb.co/jvr0hdyp/Whats-App-Image-2025-04-30-at-17-52-38.jpg" 
                alt="Rooftop Exclusive" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="heading-md text-white mb-2">Rooftop Exclusivo</h3>
                <p className="text-white/90">
                  Piscinas adulta e infantil no 33º andar com vista panorâmica
                </p>
              </div>
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h4 className="heading-sm text-charcoal mb-4">Vista deslumbrante</h4>
                  <p className="text-body text-charcoal/80 mb-4">
                    Do alto do 33º andar, contemple a beleza de Balneário Camboriú 
                    em uma experiência visual incomparável, enquanto desfruta da piscina 
                    e do solarium cuidadosamente projetados.
                  </p>
                </div>
                <div className="flex-1">
                  <h4 className="heading-sm text-charcoal mb-4">Dupla diversão</h4>
                  <p className="text-body text-charcoal/80 mb-4">
                    Piscinas adulta e infantil com infraestrutura completa, incluindo 
                    deck molhado, espreguiçadeiras e serviço de bar para dias 
                    perfeitos sob o sol.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeisureSection;
