
import React, { useState, useCallback, memo } from 'react';
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

// Convertidas para WebP para melhor desempenho
const interiorImages = [
  { url: "https://i.ibb.co/0R5tnjc/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf-1.webp", alt: "Cape Town Fachada Principal" },
  { url: "https://i.ibb.co/SX2C9hR/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf-2.webp", alt: "Cape Town Vista Noturna" },
  { url: "https://i.ibb.co/ZRpRM0S/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf-3.webp", alt: "Cape Town Área Comum" },
  { url: "https://i.ibb.co/8LHjDPY/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf-4.webp", alt: "Cape Town Interior Luxuoso" },
  { url: "https://i.ibb.co/pjwbRzv/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf-5.webp", alt: "Cape Town Vista do Mar" },
  { url: "https://i.ibb.co/JW4vNb3/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf-6.webp", alt: "Cape Town Vista Externa" },
  { url: "https://i.ibb.co/LhzK3Z5/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf-7.webp", alt: "Cape Town Perspectiva" }
];

const floorPlanImages = [
  { url: "https://i.ibb.co/NdKpyDP/Jayme-Bernardo-Arquitetos-proposta-cape-town-1-pdf.webp", alt: "Planta Cape Town - Layout Completo" }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const openModal = useCallback((url: string, alt: string) => {
    setSelectedImage(url);
    setSelectedImageAlt(alt);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    setSelectedImageAlt(null);
  }, []);

  const handleImageLoad = useCallback((url: string) => {
    setLoadedImages(prev => [...prev, url]);
  }, []);

  // Pré-carrega a primeira imagem para exibição imediata
  React.useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = interiorImages[0].url;
  }, []);

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

          <TabsContent value="fotos">
            <div className="space-y-8">
              <div className="relative mx-auto max-w-5xl px-4">
                <Carousel opts={{ align: "start", loop: true }} className="w-full">
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
                              loading={index > 2 ? "lazy" : "eager"}
                              onLoad={() => handleImageLoad(image.url)}
                              className={`w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105 ${
                                loadedImages.includes(image.url) ? 'opacity-100' : 'opacity-0'
                              }`}
                              style={{ transition: 'opacity 0.3s' }}
                            />
                            {!loadedImages.includes(image.url) && (
                              <div className="absolute inset-0 bg-beige/30 flex items-center justify-center">
                                <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
                              </div>
                            )}
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
                        loading="lazy"
                        className="h-16 w-24 object-cover rounded-sm hover:ring-2 hover:ring-gold transition-all"
                        width={96}
                        height={64}
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="plantas">
            <div className="space-y-8">
              <div className="relative mx-auto max-w-5xl px-4">
                <Carousel opts={{ align: "start", loop: true }} className="w-full">
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
                              loading="eager"
                              onLoad={() => handleImageLoad(image.url)}
                              className={`w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105 ${
                                loadedImages.includes(image.url) ? 'opacity-100' : 'opacity-0'
                              }`}
                              style={{ transition: 'opacity 0.3s' }}
                              width={800}
                              height={600}
                            />
                            {!loadedImages.includes(image.url) && (
                              <div className="absolute inset-0 bg-beige/30 flex items-center justify-center">
                                <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
                              </div>
                            )}
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
                        loading="lazy"
                        className="h-16 w-24 object-cover rounded-sm hover:ring-2 hover:ring-gold transition-all"
                        width={96}
                        height={64}
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
          </div>
        </div>
      )}
    </section>
  );
};

export default memo(GallerySection);
