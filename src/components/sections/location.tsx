"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function LocationSection() {
  return (
    <section id="location" className="py-24 sm:py-32 bg-secondary/50">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Kunjungi Toko Kami</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami tunggu kedatangan Anda! Temukan kami di lokasi yang mudah dijangkau.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8818341319293!2d111.4357115!3d-7.8023329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7998e77b54f28d%3A0x8b810a192efa7892!2sKIDUNG%20KONVEKSI!5e0!3m2!1sen!2sid!4v1755773149794!5m2!1sen!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Kidung Konveksi"
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-2">
            <motion.div
              className="bg-card p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Alamat Kami</h3>
                  <p className="text-muted-foreground">
                    5CXP+378, Krajan, Prajegan, Kec. Sukorejo, Kabupaten Ponorogo, Jawa Timur 63453
                  </p>
                  <Button asChild className="mt-4">
                    <Link href="https://maps.app.goo.gl/YFqq7Yrk8eGeyr4SA" target="_blank" rel="noopener noreferrer">
                      <Navigation className="mr-2 h-4 w-4" /> Buka di Google Maps
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
