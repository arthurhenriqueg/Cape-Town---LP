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

// Interior photos of the development
const interiorImages = [
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
  },
  {
    url: "https://i.ibb.co/NpcvV3p/photo-1487958449943-2429e8be8625.jpg",
    alt: "Área Comum"
  },
  {
    url: "https://i.ibb.co/HnbS827/photo-1518005020951-eccb494ad742.jpg",
    alt: "Entrada Principal"
  }
];

// Floor plan images
const floorPlanImages = [
  {
    url: "https://i.ibb.co/mtjpsqm/photo-1483058712412-4245e9b90334.jpg",
    alt: "Planta Tipo A - 3 Suítes"
  },
  {
    url: "https://i.ibb.co/JBDN62X/photo-1460574283810-2aab119d8511.jpg",
    alt: "Planta Tipo B - 4 Suítes"
  },
  {
    url: "https://i.ibb.co/NVdf239/photo-1459767129954-1b1c1f9b9ace.jpg",
    alt: "Planta Penthouse"
  },
  {
    url: "https://i.ibb.co/YpDQyKf/photo-1431576901776-e539bd916ba2.jpg",
    alt: "Área Comum - Layout"
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
