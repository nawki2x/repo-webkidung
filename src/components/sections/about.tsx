
"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function AboutSection() {
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
              Selama bertahun-tahun, Kidung Kaos Kreations telah menjadi jantung kepercayaan komunitas kami untuk segala hal tentang kaos. Kami memulai dengan misi sederhana: menyediakan pakaian berkualitas tinggi, nyaman, dan modis yang disukai banyak orang.
            </p>
            <p className="text-muted-foreground">
              Dari sablon custom satuan hingga pesanan konveksi skala besar untuk bisnis dan acara, kami menangani setiap proyek dengan semangat dan presisi. Komitmen kami pada bahan dan pengerjaan berkualitas memastikan setiap kaos yang kami produksi adalah mahakarya yang akan Anda banggakan.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
               <Image
                src="https://placehold.co/600x450.png"
                alt="Workshop Kampung Kaos Kidung"
                width={600}
                height={450}
                className="object-cover w-full h-full"
                data-ai-hint="clothing workshop"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
