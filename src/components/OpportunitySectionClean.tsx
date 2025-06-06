
import { Link } from "react-router-dom";

const OpportunitySectionClean = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{ 
        backgroundImage: "url('https://i.ibb.co/ymtz5254/Whats-App-Image-2025-04-30-at-17-52-43-2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-charcoal/80" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg text-white mb-6">Oportunidade Exclusiva</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-white/90 mb-2">
            Incorporado pela prestigiada parceria R21 & A10 e construído sob o regime de 
            preço de custo para moradores e investidores, o Cape Town teve todas as suas 
            unidades vendidas no lançamento.
          </p>
          <Link to="/preco-de-custo" className="text-gold hover:text-gold/80 underline inline-block mb-8 transition-colors">
            Saiba como funciona o regime a preço de custo
          </Link>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-sm mb-10">
            <h3 className="heading-md text-gold mb-4">Disponível para você</h3>
            <p className="text-white/90 mb-6">
              Agora, uma bela oportunidade: unidades disponíveis para revenda, 
              que podem ser suas. Uma chance única de fazer parte deste empreendimento 
              exclusivo em Balneário Camboriú.
            </p>
            
            <div className="bg-white/10 p-6 rounded-sm">
              <h4 className="font-serif text-xl text-gold mb-2">Detalhes da Unidade</h4>
              <ul className="space-y-2 text-white/80">
                <li>• 139m² de área privativa</li>
                <li>• 3 suítes</li>
                <li>• Vista para o mar</li>
                <li>• 2 vagas de garagem</li>
              </ul>
            </div>
          </div>

          {/* BOTÃO REMOVIDO AQUI */}
          
          <div className="mt-16 flex items-center justify-center space-x-8">            <div className="bg-white p-4 rounded-sm subtle-shadow w-40 h-20 flex items-center justify-center">
              <img 
                src="https://i.ibb.co/PvwkvNxm/290022244-552984213221934-7854402405974812143-n.jpg" 
                alt="R21 Logo" 
                className="h-16 w-36 object-contain"
              />
            </div>
            <span className="text-gold text-2xl">&</span>
            <div className="bg-white p-4 rounded-sm subtle-shadow w-40 h-20 flex items-center justify-center">
              <img 
                src="https://i.ibb.co/SDjR1fRj/babb9f11cf69dd1b8799259b-removebg-preview.png" 
                alt="A10 Logo" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySectionClean;
