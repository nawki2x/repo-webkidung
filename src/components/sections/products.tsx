
"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'Plain T-Shirts',
    description: 'High-quality, comfortable, and available in a wide variety of colors. Perfect for daily wear or as a base for your own creations.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'plain t-shirt'
  },
  {
    title: 'Custom Printing',
    description: 'Bring your designs to life with our expert printing services. We offer various techniques to match your vision and budget.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 't-shirt printing'
  },
  {
    title: 'Convection Services',
    description: 'Large-scale production for your brand, company, or event. We ensure consistency, quality, and timely delivery for every order.',
    image: 'https://placehold.co/600x400.png',
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
          <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need a single shirt or a thousand, we have a solution for you.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product) => (
            <motion.div key={product.title} variants={cardVariants}>
              <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={600}
                      height={400}
                      className="rounded-md object-cover w-full h-full"
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
