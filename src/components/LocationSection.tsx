const LocationSection = () => {
  const proximityPoints = [
    { name: "Distrito de Design", distance: "300m", icon: "🏙️" },
    { name: "Polo gastronômico", distance: "500m", icon: "🍽️" },
    { name: "Praia Central", distance: "800m", icon: "🏖️" },
    { name: "Comércio de luxo", distance: "400m", icon: "🛍️" },
  ];
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-charcoal mb-6">Localização Privilegiada</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-body text-charcoal/80">
            O Cape Town está na região que mais se valoriza em Balneário Camboriú, ao lado 
            do Distrito de Design e do polo gastronômico de charme, garantindo um estilo 
            de vida sofisticado e prático.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">          <div className="lg:col-span-3">
            <div className="relative rounded-sm overflow-hidden subtle-shadow">              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402.1217310897963!2d-48.628320155193514!3d-27.002604199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b66d9c45a969%3A0xeefaf004f49edc5b!2sR.%203198%2C%20195%20-%20Centro%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088330-326!5e1!3m2!1spt-BR!2sbr!4v1749141874275!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="384" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Cape Town"
              />
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="heading-md text-charcoal mb-6">Pontos de interesse próximos</h3>
            <div className="gold-divider" />
            
            <div className="space-y-6 mt-6">
              {proximityPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-beige p-4 rounded-sm subtle-shadow"
                >
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">{point.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-lg">{point.name}</h4>
                    <p className="text-charcoal/70 text-sm">Distância: {point.distance}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 border-l-2 border-gold bg-beige-light">
              <p className="italic text-charcoal/80">
                "Localizado na região de maior valorização imobiliária da cidade, 
                o Cape Town está posicionado estrategicamente para garantir 
                conforto, conveniência e um excelente retorno de investimento."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LocationSection;
