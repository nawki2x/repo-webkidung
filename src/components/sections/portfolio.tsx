
"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const portfolioItems = [
  { id: 1, image: 'https://placehold.co/600x800.png', aiHint: 'band t-shirt' },
  { id: 2, image: 'https://placehold.co/600x800.png', aiHint: 'corporate event shirt' },
  { id: 3, image: 'https://placehold.co/600x800.png', aiHint: 'custom art apparel' },
  { id: 4, image: 'https://placehold.co/600x800.png', aiHint: 'university club shirt' },
  { id: 5, image: 'https://placehold.co/600x800.png', aiHint: 'sports team jersey' },
  { id: 6, image: 'https://placehold.co/600x800.png', aiHint: 'minimalist design shirt' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function PortfolioSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-secondary/50">
       <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Portofolio Mitra Partnership</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Intip kualitas dan kreativitas yang kami persembahkan untuk para pelanggan.
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {portfolioItems.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                      <Image 
                        src={item.image} 
                        alt={`Portofolio ${item.id}`} 
                        width={600} 
                        height={800} 
                        className="object-cover w-full h-full"
                        data-ai-hint={item.aiHint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </motion.div>
    </section>
  );
}
