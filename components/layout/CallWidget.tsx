import { Phone } from 'lucide-react';

export default function CallWidget() {
  return (
    <a
      href="tel:+917081891995"
      aria-label="Call Relaxio Spa"
      className="fixed bottom-24 right-5 md:bottom-28 md:right-6 z-50 bg-stone-900 text-white p-4 rounded-full shadow-xl hover:bg-stone-800 transition-colors duration-200 flex items-center justify-center"
    >
      <Phone aria-hidden="true" size={26} />
    </a>
  );
}