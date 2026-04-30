import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20found%20you%20through%20your%20website%20and%20want%20to%20book%20a%20spa%20session."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Relaxio Spa"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#1ebe57] transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center group"
    >
      <MessageCircle size={28} />

      <span
        aria-hidden="true"
        className="hidden md:block absolute right-full mr-4 bg-white text-stone-900 text-sm py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium shadow-lg border border-stone-100"
      >
        Book via WhatsApp
      </span>

      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-pulse opacity-75 pointer-events-none"
      ></span>
    </a>
  );
}