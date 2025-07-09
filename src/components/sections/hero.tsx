
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
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
         <Image 
          src="https://placehold.co/1920x1080.png" 
          alt="Assortment of colorful t-shirts"
          layout="fill"
          objectFit="cover"
          className="opacity-10 dark:opacity-5"
          data-ai-hint="colorful t-shirts"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 text-center z-10"
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
        <motion.div variants={itemVariants}>
          <Button asChild size="lg">
            <Link href="#products">Lihat Layanan Kami</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
