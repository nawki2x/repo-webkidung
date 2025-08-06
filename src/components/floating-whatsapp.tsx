
"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"


export default function FloatingWhatsApp() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Link href="https://wa.me/6289504951975" target="_blank" rel="noopener noreferrer">
              <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:bg-[#128C7E] transition-colors">
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={32}
                  height={32}
                  className="filter invert"
                />
              </div>
            </Link>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Chat dengan kami di WhatsApp!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
