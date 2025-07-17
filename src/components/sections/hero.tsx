
"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-20 pb-12 md:pt-24 md:pb-16 flex flex-col justify-center items-center text-center overflow-hidden min-h-[80vh]">
      <div className="absolute inset-0 z-0">
         <Image 
          src="https://res.cloudinary.com/dghc9qsru/image/upload/v1751288168/kajetan-sumila-RRB5PAF04Kw-unsplash_avif_vrmidu.avif" 
          alt="Assortment of colorful t-shirts"
          layout="fill"
          objectFit="cover"
          className="opacity-10 dark:opacity-5"
          data-ai-hint="colorful t-shirts"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
          variants={itemVariants}
        >
          Wujudkan Imajinasimu, <span className="text-primary">di Atas Kain Kami</span>
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8"
          variants={itemVariants}
        >
          Selamat datang di Kampung Kaos Kidung. Kami mewujudkan ide-ide brilian Anda dengan kaos polos, custom, dan konveksi berkualitas wahid.
        </motion.p>
        <motion.div variants={itemVariants} className="mb-12">
          <Button asChild size="lg">
            <Link href="#products">Lihat Layanan Kami</Link>
          </Button>
        </motion.div>
        
        <motion.div 
          variants={itemVariants} 
          className="max-w-2xl mx-auto"
        >
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl border">
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dghc9qsru&public_id=bumper_ireeod&profile=cld-looping&autoplay=true&mute=true"
              width="640"
              height="360"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
