"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'Kaos Polos',
    description: 'Berkualitas tinggi, nyaman, dan tersedia dalam beragam warna. Sempurna untuk pakaian sehari-hari atau sebagai dasar untuk kreasimu.',
    image: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753697673/kaos_polos_updyi2.avif',
    aiHint: 'plain t-shirt'
  },
  {
    title: 'Polo T-shirt',
    description: 'Tampil kasual namun tetap rapi dengan koleksi kaos polo kami. Pilihan tepat untuk seragam kantor atau acara semi-formal.',
    image: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1751288298/polo_tshirt_edited_mxdyw9.avif',
    aiHint: 'polo shirt'
  },
  {
    title: 'Jaket Hoodie',
    description: 'Hangat dan bergaya, hoodie custom kami sempurna untuk komunitas, acara, atau merchandise brand Anda.',
    image: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753697673/hoodie_uuo6rf.avif',
    aiHint: 'hoodie jacket'
  },
  {
    title: 'Kemeja',
    description: 'Kemeja seragam berkualitas untuk tim Anda. Tampil profesional dan kompak dengan kemeja buatan kami.',
    image: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753697673/kemeja_b652lu.avif',
    aiHint: 'formal shirt'
  },
  {
    title: 'Kaos Anak',
    description: 'Nyaman dan aman untuk si kecil. Hadir dalam berbagai warna ceria dan bahan yang lembut di kulit.',
    image: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753697673/kaos_anak_npr0h2.avif',
    aiHint: 'kids t-shirt'
  },
  {
    title: 'Kaos Promosi',
    description: 'Jadikan kaos sebagai media promosi yang efektif. Ideal untuk acara, kampanye, atau merchandise perusahaan Anda.',
    image: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1754469725/kaos_promosi_jvbugo.avif',
    aiHint: 'promotional t-shirt'
  },
  {
    title: 'Jersey',
    description: 'Dibuat untuk performa maksimal, jersey kami cocok untuk tim olahraga Anda. Bahan ringan dan menyerap keringat.',
    image: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1751278566/sport_xv1bkb.jpg',
    aiHint: 'sports jersey'
  },
  {
    title: 'Sablon Custom',
    description: 'Wujudkan desainmu dengan layanan sablon ahli kami. Kami menawarkan berbagai teknik untuk menyesuaikan visi dan anggaran Anda.',
    image: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1751278560/produk_sablon_plastisol_ke_2_rlenla.jpg',
    aiHint: 't-shirt printing'
  },
  {
    title: 'Jasa Konveksi',
    description: 'Produksi skala besar untuk brand, perusahaan, atau acaramu. Kami menjamin konsistensi, kualitas, dan pengiriman tepat waktu untuk setiap pesanan.',
    image: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1751278596/sablon_pres_jahit_jgp0wh.webp',
    aiHint: 'clothing factory'
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Produk & Layanan Kami</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Butuh satu kaos atau ribuan? Kami punya solusinya untuk Anda.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product) => (
            <motion.div key={product.title} variants={cardVariants}>
              <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="relative w-full h-[250px] mb-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                      data-ai-hint={product.aiHint}
                    />
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
