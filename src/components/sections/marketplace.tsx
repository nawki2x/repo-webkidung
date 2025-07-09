
"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const marketplaces = [
  {
    name: 'Shopee',
    href: 'https://shopee.co.id/kidungkaos?entryPoint=ShopBySearch&searchKeyword=kampung%20kaos',
    logoSrc: 'https://static.cdnlogo.com/logos/s/28/shopee.svg',
  },
  {
    name: 'Tokopedia',
    href: 'https://www.tokopedia.com/sukapolos?entrance_name=search_suggestion_store&source=universe&st=product',
    logoSrc: 'https://static.cdnlogo.com/logos/t/23/tokopedia.svg',
  },
  {
    name: 'Lazada',
    href: 'https://www.lazada.co.id/shop/kampung-kaos-kidung',
    logoSrc: 'https://static.cdnlogo.com/logos/l/75/lazada.svg',
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

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function MarketplaceSection() {
  return (
    <section id="marketplace" className="py-24 sm:py-32 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Temukan Kami di Marketplace</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Belanja dengan mudah melalui marketplace favorit Anda.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {marketplaces.map((place) => (
            <motion.div key={place.name} variants={itemVariants}>
              <Link href={place.href} target="_blank" rel="noopener noreferrer">
                <div className="p-8 bg-card rounded-lg flex justify-center items-center h-40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <Image
                    src={place.logoSrc}
                    alt={`Logo ${place.name}`}
                    width={150}
                    height={60}
                    className="object-contain filter dark:invert"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
