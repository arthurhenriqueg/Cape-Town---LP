
import { Users, LayoutGrid, ArrowsUpFromLine } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Exclusividade",
      description: "Apenas 2 apartamentos por andar, garantindo privacidade e tranquilidade.",
      icon: <Users className="w-12 h-12 text-gold" />
    },
    {
      title: "Amplos Espaços",
      description: "139m² de área privativa, distribuídos de forma inteligente e funcional.",
      icon: <LayoutGrid className="w-12 h-12 text-gold" />
    },
    {
      title: "Design Contemporâneo",
      description: "3 suítes e área social integrada com acabamentos premium.",
      icon: <ArrowsUpFromLine className="w-12 h-12 text-gold" />
    }
  ];

  return (
    <section id="features" className="py-20 bg-beige">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-charcoal mb-6">Diferenciais do Projeto</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-body text-charcoal/80">
            Cape Town foi concebido para oferecer uma experiência de moradia incomparável,
            com características que o tornam único no mercado imobiliário de alto padrão.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-sm subtle-shadow card-hover flex flex-col items-center text-center"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="heading-sm mb-4 text-charcoal">{feature.title}</h3>
              <p className="text-body text-charcoal/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
