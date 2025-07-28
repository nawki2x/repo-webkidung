
"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const partnerLogos = [
  { name: 'PLN', src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753099185/Logo_PLN_iwxa47.png' },
  { name: 'IndiHome', src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753099184/Logo_indiHome_kr0fvl.png' },
  { name: 'Yamaha', src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753099185/Logo_Yamaha_mfszw8.png' },
  { name: 'BRI', src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753099183/Logo_BRI_wn2cmj.png' },
  { name: 'Bank Jatim', src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753099184/Logo_Bank_Jatim_j6y7nv.png' },
  { name: 'BNI', src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753099183/BNI_logo.svg_iayf7e.png' },
  { name: 'BCA', src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753099184/Logo_Bank_BCA_fy4dyl.png' },
  { name: 'BPR Jatim', src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753099184/Logo_BPR_Jatim_xd9jh8.png' },
  { name: 'Pemkab Ponorogo', src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753099185/Logo_PEMKAB_Ponorogo_tokljz.png' },
  { name: 'Djarum', src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753099184/Logo_Djarum_rkk3vi.png' },
  { name: 'YRKI', src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753099186/Logo_YRKI_ocmbi1.png' },
  { name: 'JFC', src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753099185/logo_JFC_wjzmj8.png' },
  { name: 'Desa Prajegan', src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753099184/Logo_desa_prajegan_yhlkk7.png' },
  { name: 'Kajawi', src: 'https://res.cloudinary.com/dghc9qsru/image/upload/v1753693628/LOGO_KAJAWI_smaller_resize_trnsprnt_zudyx9.png' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const logoContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const logoItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function PortfolioSection() {
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
            Dipercaya oleh berbagai merek, komunitas, dan institusi terkemuka. Kami bangga telah menjadi bagian dari cerita sukses mereka.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6"
          variants={logoContainerVariants}
        >
          {partnerLogos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={logoItemVariants}
              className="group"
            >
              <div className="flex justify-center items-center h-28 p-4 bg-card rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="relative w-full h-full">
                  <Image
                    src={logo.src}
                    alt={`Logo ${logo.name}`}
                    layout="fill"
                    objectFit="contain"
                    className="filter dark:invert"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
