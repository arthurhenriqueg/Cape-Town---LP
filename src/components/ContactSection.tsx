import { useState } from 'react';
import { toast } from "sonner";
import { getWhatsAppLink } from '../utils/whatsapp';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.");
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      newsletter: false,
    });
    
    // Redirecionar para WhatsApp com a mensagem
    window.open(getWhatsAppLink(), '_blank');
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
                    Avenida Atlântica, 5500 - Barra Norte
                    <br />
                    Balneário Camboriú - SC
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
                  <p className="text-charcoal/70">+55 (47) 992421044 (WhatsApp)</p>
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
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal/80 mb-1">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
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
      </div>
    </section>
  );
};

export default ContactSection;
