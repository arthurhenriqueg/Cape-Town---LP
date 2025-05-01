
import { getWhatsAppLink } from "../utils/whatsapp";

const OpportunitySection = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-charcoal/80" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg text-white mb-6">Oportunidade Exclusiva</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-white/90 mb-8">
            Incorporado pela prestigiada parceria R21 & A10 e construído sob o regime de 
            preço de custo para moradores e investidores, o Cape Town teve todas as suas 
            unidades vendidas no lançamento.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-sm mb-10">
            <h3 className="heading-md text-gold mb-4">Disponível para você</h3>
            <p className="text-white/90 mb-6">
              Agora, uma bela oportunidade: duas unidades disponíveis para revenda, 
              que podem ser suas. Uma chance única de fazer parte deste empreendimento 
              exclusivo em Balneário Camboriú.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-sm">
                <h4 className="font-serif text-xl text-gold mb-2">Unidade 2201</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• 139m² de área privativa</li>
                  <li>• 3 suítes</li>
                  <li>• Vista para o mar</li>
                  <li>• 2 vagas de garagem</li>
                </ul>
              </div>
              
              <div className="bg-white/10 p-6 rounded-sm">
                <h4 className="font-serif text-xl text-gold mb-2">Unidade 2501</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• 139m² de área privativa</li>
                  <li>• 3 suítes</li>
                  <li>• Vista panorâmica</li>
                  <li>• 2 vagas de garagem</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <a 
              href={getWhatsAppLink()} 
              className="button-primary px-10 py-4 text-lg"
            >
              Garanta sua unidade exclusiva
            </a>
          </div>
          
          <div className="mt-16 flex items-center justify-center space-x-8">
            <div className="bg-white p-4 rounded-sm subtle-shadow">
              <img 
                src="https://placehold.co/200x80?text=R21" 
                alt="R21 Logo" 
                className="h-12"
              />
            </div>
            <span className="text-gold text-2xl">&</span>
            <div className="bg-white p-4 rounded-sm subtle-shadow">
              <img 
                src="https://placehold.co/200x80?text=A10" 
                alt="A10 Logo" 
                className="h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
