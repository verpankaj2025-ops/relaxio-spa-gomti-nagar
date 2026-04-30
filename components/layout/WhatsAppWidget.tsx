'use client';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20found%20you%20through%20your%20website%20and%20want%20to%20book%20a%20spa%20session."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#1ebe57] transition-colors duration-200 flex items-center justify-center group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp with Relaxio Spa"
    >
      <MessageCircle size={28} />
      
      {/* Tooltip */}
      <span
  aria-hidden="true"
  className="hidden md:block absolute right-full mr-4 bg-white text-stone-900 text-sm py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium shadow-lg border border-stone-100"
>
        Book via WhatsApp
      </span>
      
      {/* Pulse Effect */}
      <span
  aria-hidden="true"
  className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-pulse opacity-75 pointer-events-none"
></span>
    </motion.a>
  );
}
