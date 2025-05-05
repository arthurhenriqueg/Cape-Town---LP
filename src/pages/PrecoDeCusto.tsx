
import { memo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { getWhatsAppLink } from "../utils/whatsapp";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrecoDeCusto = () => {
  return (
    <div className="min-h-screen bg-beige">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container-custom">
          <Link to="/" className="flex items-center text-charcoal/70 hover:text-charcoal mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Voltar para a página inicial
          </Link>
          
          <h1 className="heading-xl mb-6">Como funciona o regime a preço de custo</h1>
          <div className="bg-white rounded-sm p-8 shadow-sm">
            <div className="prose max-w-none">
              <h2>O que é o regime a preço de custo?</h2>
              <p>
                O regime de construção a preço de custo é uma modalidade de incorporação imobiliária 
                onde os compradores das unidades são os próprios investidores da obra. Nesse sistema, 
                o incorporador não obtém lucro com a venda das unidades, mas sim pela taxa de administração 
                do empreendimento.
              </p>
              
              <h2>Vantagens para o comprador</h2>
              <ul>
                <li>
                  <strong>Preço mais acessível:</strong> O regime a preço de custo elimina a margem de lucro 
                  que construtoras e incorporadoras normalmente incluem no preço final das unidades.
                </li>
                <li>
                  <strong>Transparência:</strong> Todos os custos são detalhados e compartilhados com os condôminos, 
                  que têm acesso às prestações de contas.
                </li>
                <li>
                  <strong>Participação:</strong> Os compradores podem participar de decisões importantes durante 
                  a construção, acompanhando de perto a evolução do empreendimento.
                </li>
                <li>
                  <strong>Potencial de valorização:</strong> Como o preço inicial é geralmente mais baixo, 
                  há maior potencial de valorização quando o empreendimento é concluído.
                </li>
              </ul>
              
              <h2>Como funciona na prática</h2>
              <ol>
                <li>
                  <strong>Formação do grupo:</strong> O incorporador reúne um grupo de interessados em adquirir 
                  unidades no empreendimento.
                </li>
                <li>
                  <strong>Definição do projeto:</strong> O projeto arquitetônico e as especificações são apresentados 
                  e aprovados pelos participantes.
                </li>
                <li>
                  <strong>Contrato:</strong> É firmado um contrato de construção a preço de custo, estabelecendo 
                  direitos e deveres das partes.
                </li>
                <li>
                  <strong>Pagamentos:</strong> Os participantes fazem pagamentos periódicos conforme o cronograma da obra, 
                  cobrindo os custos reais da construção.
                </li>
                <li>
                  <strong>Prestação de contas:</strong> O incorporador presta contas regularmente sobre os gastos 
                  e o andamento da obra.
                </li>
                <li>
                  <strong>Conclusão:</strong> Ao final da obra, os participantes recebem suas unidades, tendo pago 
                  apenas o custo real da construção mais a taxa de administração.
                </li>
              </ol>
              
              <h2>O Cape Town e o regime a preço de custo</h2>
              <p>
                O empreendimento Cape Town foi construído sob o regime de preço de custo, permitindo que os primeiros 
                compradores tivessem acesso a unidades de alto padrão por valores mais acessíveis que o mercado. 
                A parceria entre R21 e A10 garantiu a qualidade e sofisticação do projeto, resultando em um empreendimento 
                exclusivo e valorizado.
              </p>
              
              <div className="mt-10 flex justify-center">
                <a href={getWhatsAppLink()} className="button-primary">
                  Fale com um consultor sobre as unidades disponíveis
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default memo(PrecoDeCusto);
