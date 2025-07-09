
"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
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
  const [activeSection, setActiveSection] = useState('#home');
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const headerHeight = headerRef.current?.offsetHeight || 80;
      const scrollY = window.scrollY + headerHeight + 20; // Add buffer

      const current = navLinks
        .map(link => {
          const element = document.getElementById(link.href.substring(1));
          return { href: link.href, element };
        })
        .filter(item => item.element)
        .findLast(item => scrollY >= item.element!.offsetTop);
      
      if (current && activeSection !== current.href) {
        setActiveSection(current.href);
      } else if (!current && window.scrollY < 400) {
        setActiveSection('#home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <header ref={headerRef} className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2">
            <Image
              className="block dark:hidden"
              src="https://res.cloudinary.com/dghc9qsru/image/upload/v1749725172/IMG_9100_trnsprnt_logo_web_dekajh.svg"
              alt="Kidung Kaos Kidung Logo"
              width={50}
              height={50}
              priority
            />
            <Image
              className="hidden dark:block"
              src="https://res.cloudinary.com/dghc9qsru/image/upload/v1751282729/IMG_9100_trnsprnt_putih_ybejev.svg"
              alt="Kidung Kaos Kidung Logo"
              width={50}
              height={50}
              priority
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={cn(
                  "text-sm font-medium transition-colors cursor-pointer",
                  activeSection === link.href ? "text-primary" : "text-foreground/60 hover:text-primary"
                )}
              >
                {link.name}
              </a>
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
                  <SheetHeader>
                    <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4 border-b">
                       <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-2">
                          <Image
                            className="block dark:hidden"
                            src="https://res.cloudinary.com/dghc9qsru/image/upload/v1749725172/IMG_9100_trnsprnt_logo_web_dekajh.svg"
                            alt="Kidung Kaos Kidung Logo"
                            width={40}
                            height={40}
                          />
                          <Image
                            className="hidden dark:block"
                            src="https://res.cloudinary.com/dghc9qsru/image/upload/v1751282729/IMG_9100_trnsprnt_putih_ybejev.svg"
                            alt="Kidung Kaos Kidung Logo"
                            width={40}
                            height={40}
                          />
                       </a>
                    </div>
                    <nav className="flex-grow flex flex-col items-center justify-center gap-8">
                       {navLinks.map((link) => (
                         <a
                            key={link.name} 
                            href={link.href} 
                            onClick={() => setOpen(false)}
                            className={cn(
                              "text-2xl font-semibold transition-colors cursor-pointer",
                              activeSection === link.href ? "text-primary" : "hover:text-primary"
                            )}
                         >
                           {link.name}
                         </a>
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
