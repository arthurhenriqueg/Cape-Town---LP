import { useState } from 'react';
import { toast } from "sonner";
import { getWhatsAppLink } from '../utils/whatsapp';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    newsletter: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  // Função para gerar link WhatsApp com UTMs
  const getWhatsAppLinkWithUTM = (utmMedium: string) => {
    const baseLink = getWhatsAppLink();
    const utms = `utm_source=site&utm_medium=${utmMedium}&utm_campaign=capetown`;
    return baseLink + (baseLink.includes('?') ? '&' : '?') + utms;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.");
    console.log('Form submitted:', formData);

    // Enviar dados para SheetDB
    try {
      let phoneWithPrefix = formData.phone.trim();
      if (!phoneWithPrefix.startsWith('55')) {
        phoneWithPrefix = '55' + phoneWithPrefix.replace(/^0+/, '');
      }

      const response = await fetch('https://sheetdb.io/api/v1/p42et3nbe9uio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [
            {
              "Nome": formData.name,
              "Telefone": phoneWithPrefix,
              "Fonte de Dados": "Site",
              "Empreendimento": "Cape Town",
              "Data": new Date().toLocaleString('pt-BR')
            }
          ]
        }),
      });
      const result = await response.json();
      console.log('SheetDB response:', result);
    } catch (error) {
      console.error('Erro ao enviar para o SheetDB:', error);
    }

    // Redirecionar para WhatsApp com UTMs (formulário)
    window.open(getWhatsAppLinkWithUTM('formulario-button'), '_blank');

    // Reset form
    setFormData({
      name: '',
      phone: '',
      message: '',
      newsletter: false,
    });
  };

  return (
    <section id="contact" className="py-20 bg-beige">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-lg text-charcoal mb-6">Entre em Contato</h2>
            <div className="gold-divider" />
            <p className="text-body text-charcoal/80 mb-8">
              Estamos à disposição para fornecer mais informações sobre o Cape Town e 
              agendar sua visita para conhecer de perto este empreendimento exclusivo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-gold">📍</span>
                </div>
                <div>
                  <h4 className="font-serif font-medium text-lg mb-1">Endereço</h4>
                  <p className="text-charcoal/70">
                    R. 3110, N° 377 - sala 2 - Centro
                    <br />
                    Balneário Camboriú - SC, 88330-287
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-gold">📞</span>
                </div>
                <div>
                  <h4 className="font-serif font-medium text-lg mb-1">Telefone</h4>
                  <p className="text-charcoal/70">(47) 3514-8544</p>
                  <p className="text-charcoal/70">(47) 99242-1044 (WhatsApp)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-gold">✉️</span>
                </div>
                <div>
                  <h4 className="font-serif font-medium text-lg mb-1">E-mail</h4>
                  <p className="text-charcoal/70">contato@a10.com.br</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-serif font-medium text-lg mb-4">Horário de Atendimento</h4>
              <p className="text-charcoal/70 mb-2">Segunda a Sexta: 9h às 18h</p>
              <p className="text-charcoal/70">Sábado: 9h às 12h</p>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-sm subtle-shadow">
              <h3 className="heading-md text-charcoal mb-6">Quero saber mais sobre o Cape Town</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal/80 mb-1">
                      Nome completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-beige-dark rounded-sm focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal/80 mb-1">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-beige-dark rounded-sm focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal/80 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-beige-dark rounded-sm focus:outline-none focus:ring-1 focus:ring-gold"
                    ></textarea>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <input
                        id="newsletter"
                        name="newsletter"
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-gold focus:ring-gold border-beige-dark"
                      />
                      <label htmlFor="newsletter" className="ml-2 block text-sm text-charcoal/80">
                        Concordo em receber mensagens e novidades da A10
                      </label>
                    </div>
                    <p className="text-xs text-charcoal/60 ml-6 mt-1">
                      Não iremos mandar muitas mensagens, sabemos que não é legal!
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full button-primary py-4 text-center"
                  >
                    Enviar mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Botão WhatsApp fora do formulário (caso exista) */}
        <a
          href={getWhatsAppLinkWithUTM('whatsapp-button')}
          className="button-primary bg-green-500 hover:bg-green-600 text-center block mt-8 mx-auto max-w-xs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba mais sobre as unidades disponíveis
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
