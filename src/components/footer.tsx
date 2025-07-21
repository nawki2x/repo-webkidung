
"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/people/Kajawi-official/61567127458669/', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/facebook.svg' },
  { name: 'WhatsApp', href: 'https://wa.me/6289504951975', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/whatsapp.svg' },
  { name: 'Instagram', href: 'https://www.instagram.com/kidungkaos.official/', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/instagram.svg' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@kidungkaos', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/tiktok.svg' },
];

const marketplaceLinks = [
  { name: 'Shopee', href: 'https://shopee.co.id/kidungkaos?entryPoint=ShopBySearch&searchKeyword=kampung%20kaos' },
  { name: 'Tokopedia', href: 'https://www.tokopedia.com/sukapolos?entrance_name=search_suggestion_store&source=universe&st=product' },
  { name: 'Lazada', href: 'https://www.lazada.co.id/shop/kampung-kaos-kidung' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="col-span-1 md:col-span-2">
            <Link href="#home" className="inline-flex items-center gap-2 mb-4">
              <Image
                className="block dark:hidden"
                src="https://res.cloudinary.com/dghc9qsru/image/upload/v1749725172/IMG_9100_trnsprnt_logo_web_dekajh.svg"
                alt="Logo Kidung Kaos Kidung"
                width={40}
                height={40}
              />
              <Image
                className="hidden dark:block"
                src="https://res.cloudinary.com/dghc9qsru/image/upload/v1751282729/IMG_9100_trnsprnt_putih_ybejev.svg"
                alt="Logo Kidung Kaos Kidung"
                width={40}
                height={40}
              />
              <span className="font-bold text-lg">Kampung Kaos Kidung</span>
            </Link>
            <p className="text-muted-foreground max-w-md mx-auto md:mx-0">
              Pusat terpercaya Anda untuk kaos polos, custom, dan konveksi berkualitas tinggi.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="mailto:kampungkaoskidung@gmail.com" className="hover:text-primary">Email: kampungkaoskidung@gmail.com</a></li>
              <li><a href="https://wa.me/6289504951975" className="hover:text-primary">WA: +62 895-0495-1975</a></li>
              <li><a href="https://maps.app.goo.gl/vPnvSzNiUgEPC49J8" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Ponorogo, Jawa Timur, Indonesia</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Beli di</h3>
            <ul className="space-y-2 text-muted-foreground">
              {marketplaceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Kampung Kaos Kidung. Hak Cipta Dilindungi.</p>
          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Image
                    src={link.src}
                    alt={`Logo ${link.name}`}
                    width={20}
                    height={20}
                    className="filter dark:invert"
                  />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
