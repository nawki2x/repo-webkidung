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

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const aboutImages = [
  { id: 1, src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1751284507/store_acqxvy.jpg', alt: 'Toko Kampung Kaos Kidung', aiHint: 'clothing store exterior' },
  { id: 2, src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1751278499/store_dalam_ke2_kzrrmg.jpg', alt: 'Bagian Dalam Toko', aiHint: 'clothing store interior' },
  { id: 3, src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1751278498/store_dalam_ocv0uo.jpg', alt: 'Display Produk di Toko', aiHint: 't-shirt display' },
  { id: 4, src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1751278592/produksi_kidung_msbsgi.webp', alt: 'Proses Produksi Kaos', aiHint: 'screen printing' },
  { id: 5, src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1751278589/all_proses_zsccuv.jpg', alt: 'Seluruh Proses Produksi', aiHint: 'sewing machine' },
  { id: 6, src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1751278591/penjahitan_xentt1.webp', alt: 'Proses Penjahitan Kaos', aiHint: 'sewing process' },
];


export default function AboutSection() {
    const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  )
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/50">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Tentang Kampung Kaos Kidung</h2>
            <p className="text-muted-foreground mb-4">
              Selama bertahun-tahun, Kampung Kaos Kidung telah menjadi jantung kepercayaan komunitas kami untuk segala hal tentang kaos. Kami memulai dengan misi sederhana: menyediakan pakaian berkualitas tinggi, nyaman, dan modis yang disukai banyak orang.
            </p>
            <p className="text-muted-foreground">
              Dari sablon custom satuan hingga pesanan konveksi skala besar untuk bisnis dan acara, kami menangani setiap proyek dengan semangat dan presisi. Komitmen kami pada bahan dan pengerjaan berkualitas memastikan setiap kaos yang kami produksi adalah mahakarya yang akan Anda banggakan.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <Carousel
              plugins={[plugin.current]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-lg mx-auto"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {aboutImages.map((item) => (
                  <CarouselItem key={item.id}>
                    <Card className="overflow-hidden shadow-lg">
                      <CardContent className="flex aspect-[4/3] items-center justify-center p-0">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={600}
                          height={450}
                          className="object-cover w-full h-full"
                          data-ai-hint={item.aiHint}
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
