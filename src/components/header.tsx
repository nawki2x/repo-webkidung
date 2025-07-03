
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/kidungkaos.official/', icon: <Image width={24} height={24} className="filter dark:invert" alt="Instagram" src="https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/instagram.svg" /> },
  { name: 'TikTok', href: 'https://www.tiktok.com/@kidungkaos', icon: <Image width={24} height={24} className="filter dark:invert" alt="TikTok" src="https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/tiktok.svg" /> },
];

const navLinks = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Layanan', href: '#products' },
  { name: 'Portofolio', href: '#portfolio' },
  { name: 'Toko Online', href: '#marketplace' },
  { name: 'Kontak', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="flex items-center gap-2">
            <Image
              src="https://res.cloudinary.com/dghc9qsru/image/upload/v1749725172/IMG_9100_trnsprnt_logo_web_dekajh.svg"
              alt="Kidung Kaos Kidung Logo"
              width={50}
              height={50}
              priority
              className="dark:invert"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    {link.icon}
                  </Button>
                </Link>
              ))}
            </div>
            <ThemeToggle />
            <div className="lg:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4 border-b">
                       <Link href="#home" onClick={() => setOpen(false)} className="flex items-center gap-2">
                          <Image
                            src="https://res.cloudinary.com/dghc9qsru/image/upload/v1749725172/IMG_9100_trnsprnt_logo_web_dekajh.svg"
                            alt="Kidung Kaos Kidung Logo"
                            width={40}
                            height={40}
                            className="dark:invert"
                          />
                       </Link>
                    </div>
                    <nav className="flex-grow flex flex-col items-center justify-center gap-8">
                       {navLinks.map((link) => (
                         <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className="text-2xl font-semibold hover:text-primary transition-colors">
                           {link.name}
                         </Link>
                       ))}
                    </nav>
                     <div className="flex justify-center gap-4 p-4 border-t">
                        {socialLinks.map((link) => (
                          <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                              {link.icon}
                            </Button>
                          </Link>
                        ))}
                     </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
