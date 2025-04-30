
import { useState } from 'react';

const LeisureSection = () => {
  const [activeTab, setActiveTab] = useState('general');

  const leisureAreas = [
    { 
      id: 'pool', 
      name: 'Piscina térmica', 
      image: 'https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?q=80&w=2067&auto=format&fit=crop' 
    },
    { 
      id: 'spa', 
      name: 'Sauna e spa', 
      image: 'https://images.unsplash.com/photo-1579026080117-35ce5a57d5a1?q=80&w=2069&auto=format&fit=crop' 
    },
    { 
      id: 'garden', 
      name: 'Jardins', 
      image: 'https://images.unsplash.com/photo-1558383817-aea1c097483e?q=80&w=2072&auto=format&fit=crop' 
    },
    { 
      id: 'party', 
      name: 'Salões de festas', 
      image: 'https://images.unsplash.com/photo-1627916607164-7b20241db958?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      id: 'gourmet', 
      name: 'Espaço gourmet', 
      image: 'https://images.unsplash.com/photo-1651513785406-e3a03aaef392?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      id: 'kids', 
      name: 'Área kids', 
      image: 'https://images.unsplash.com/photo-1596997000103-e597b3ca50df?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      id: 'gym', 
      name: 'Academia moderna', 
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075&auto=format&fit=crop' 
    },
    { 
      id: 'office', 
      name: 'Escritório para coworking', 
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop'
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
                src="https://images.unsplash.com/photo-1626801722927-9e1c357bd9a0?q=80&w=2070&auto=format&fit=crop" 
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
