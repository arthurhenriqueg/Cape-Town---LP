import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryHorizontal, GalleryVertical, GalleryThumbnails } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

// Interior photos of the development - Updated with new images
const interiorImages = [
  {
    url: "https://i.ibb.co/0R5tnjcT/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf-1.jpg",
    alt: "Cape Town Fachada Principal"
  },
  {
    url: "https://i.ibb.co/SX2C9hRz/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf-2.jpg",
    alt: "Cape Town Vista Noturna"
  },
  {
    url: "https://i.ibb.co/ZRpRM0ST/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf-3.jpg",
    alt: "Cape Town Área Comum"
  },
  {
    url: "https://i.ibb.co/8LHjDPY3/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf-4.jpg",
    alt: "Cape Town Interior Luxuoso"
  },
  {
    url: "https://i.ibb.co/pjwbRzvQ/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf-5.jpg",
    alt: "Cape Town Vista do Mar"
  },
  {
    url: "https://i.ibb.co/JW4vNb3m/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf-6.jpg",
    alt: "Cape Town Vista Externa"
  },
  {
    url: "https://i.ibb.co/LhzK3Z5Z/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf-7.jpg",
    alt: "Cape Town Perspectiva"
  }
];

// Floor plan images - Only one floor plan as specified
const floorPlanImages = [
  {
    url: "https://i.ibb.co/NdKpyDPT/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf.jpg",
    alt: "Planta Cape Town - Layout Completo"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState<string | null>(null);
  
  // Modal controller for full-size image view
  const openModal = (url: string, alt: string) => {
    setSelectedImage(url);
    setSelectedImageAlt(alt);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageAlt(null);
  };

  return (
    <section id="gallery" className="py-20 bg-beige">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-charcoal mb-6">Por dentro do CapeTown</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-body mb-8 max-w-3xl mx-auto">
            Confira algumas imagens do Cape Town e impressione-se com o padrão de excelência
            em todos os detalhes deste empreendimento exclusivo em Balneário Camboriú.
          </p>
        </div>
        
        <Tabs defaultValue="fotos" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-charcoal/10">
              <TabsTrigger value="fotos" className="data-[state=active]:bg-gold data-[state=active]:text-white">
                <GalleryHorizontal className="mr-2 h-4 w-4" />
                Fotos
              </TabsTrigger>
              <TabsTrigger value="plantas" className="data-[state=active]:bg-gold data-[state=active]:text-white">
                <GalleryThumbnails className="mr-2 h-4 w-4" />
                Plantas
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Interior Photos Content */}
          <TabsContent value="fotos" className="mt-0">
            <div className="space-y-8">
              <div className="relative mx-auto max-w-5xl px-4">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {interiorImages.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <div 
                            className="overflow-hidden rounded-sm relative group cursor-pointer"
                            onClick={() => openModal(image.url, image.alt)}
                          >
                            <img 
                              src={image.url} 
                              alt={image.alt}
                              className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                              <p className="text-white font-serif">{image.alt}</p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 -translate-x-1/2 bg-white/80 hover:bg-white" />
                  <CarouselNext className="right-0 translate-x-1/2 bg-white/80 hover:bg-white" />
                </Carousel>
              </div>
              
              <ScrollArea className="h-24 rounded-md border border-gold/20 bg-white/40">
                <div className="flex p-4 space-x-4">
                  {interiorImages.map((image, index) => (
                    <div 
                      key={index}
                      className="shrink-0 cursor-pointer"
                      onClick={() => openModal(image.url, image.alt)}
                    >
                      <img 
                        src={image.url} 
                        alt={image.alt} 
                        className="h-16 w-24 object-cover rounded-sm hover:ring-2 hover:ring-gold transition-all"
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
          
          {/* Floor Plans Content */}
          <TabsContent value="plantas" className="mt-0">
            <div className="space-y-8">
              <div className="relative mx-auto max-w-5xl px-4">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {floorPlanImages.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                        <div className="p-1">
                          <div 
                            className="overflow-hidden rounded-sm relative group cursor-pointer"
                            onClick={() => openModal(image.url, image.alt)}
                          >
                            <img 
                              src={image.url} 
                              alt={image.alt}
                              className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                              <p className="text-white font-serif">{image.alt}</p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 -translate-x-1/2 bg-white/80 hover:bg-white" />
                  <CarouselNext className="right-0 translate-x-1/2 bg-white/80 hover:bg-white" />
                </Carousel>
              </div>
              
              <ScrollArea className="h-24 rounded-md border border-gold/20 bg-white/40">
                <div className="flex p-4 space-x-4">
                  {floorPlanImages.map((image, index) => (
                    <div 
                      key={index}
                      className="shrink-0 cursor-pointer"
                      onClick={() => openModal(image.url, image.alt)}
                    >
                      <img 
                        src={image.url} 
                        alt={image.alt} 
                        className="h-16 w-24 object-cover rounded-sm hover:ring-2 hover:ring-gold transition-all"
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-6 text-charcoal/60 flex items-center justify-center">
          <GalleryVertical size={16} className="mr-2" />
          <span className="text-sm">clique nas imagens para ampliar</span>
        </div>
      </div>
      
      {/* Full-size image modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt={selectedImageAlt || "Imagem ampliada"} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <Button 
              variant="outline" 
              size="sm" 
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white/80 hover:bg-white text-charcoal rounded-full"
            >
              ✕
            </Button>
            <p className="text-white text-center mt-4 font-serif">{selectedImageAlt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
