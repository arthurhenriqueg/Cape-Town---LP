
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { GalleryHorizontal } from 'lucide-react';

const galleryImages = [
  {
    url: "https://i.ibb.co/ymtz5254/Whats-App-Image-2025-04-30-at-17-52-43-2.jpg",
    alt: "Cape Town Fachada"
  },
  {
    url: "https://i.ibb.co/JWcZKbKj/Whats-App-Image-2025-04-30-at-17-52-43.jpg",
    alt: "Cape Town Implantação"
  },
  {
    url: "https://i.ibb.co/B2BBbMf/Whats-App-Image-2025-04-30-at-17-52-43-1.jpg",
    alt: "Cape Town Perspectiva"
  },
  {
    url: "https://i.ibb.co/kHC92MZ/image.png",
    alt: "Cape Town Interior"
  }
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-beige">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-charcoal mb-6">Galeria</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-body mb-8 max-w-3xl mx-auto">
            Confira algumas imagens do Cape Town e impressione-se com o padrão de excelência
            em todos os detalhes deste empreendimento exclusivo em Balneário Camboriú.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-5xl px-10">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-3/4">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-sm relative group">
                      <img 
                        src={image.url} 
                        alt={image.alt}
                        className="w-full aspect-[3/2] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                        <p className="text-white font-serif">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
            <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
          </Carousel>
          
          <div className="text-center mt-6 text-charcoal/60 flex items-center justify-center">
            <GalleryHorizontal size={16} className="mr-2" />
            <span className="text-sm">deslize para ver mais imagens</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
