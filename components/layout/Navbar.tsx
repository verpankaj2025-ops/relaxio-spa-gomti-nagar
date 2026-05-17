'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

const services = [
  {
    name: "Thai Massage",
    href: "/services/thai-massage",
  },
  {
    name: "Balinese Massage",
    href: "/services/balinese-massage",
  },
  {
    name: "Deep Tissue Massage",
    href: "/services/deep-tissue-massage",
  },
  {
    name: "Couple Massage",
    href: "/services/couple-massage",
  },
  {
    name: "Jacuzzi & Steam Bath",
    href: "/services/spa-facilities",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-3xl font-serif tracking-wide flex items-center text-stone-900"
          onClick={closeMenu}
        >
          Relaxio<span className="text-amber-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-stone-700 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-widest">
            Home
          </Link>
          <Link href="/about" className="text-stone-700 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-widest">
            About
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <Link 
              href="/services" 
              className="flex items-center gap-1 text-stone-700 hover:text-amber-600 font-medium transition-colors py-2 text-sm uppercase tracking-widest"
            >
              Services <span className="text-xs group-hover:rotate-180 transition-transform duration-200">⌄</span>
            </Link>
            <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 pt-2">
              <div className="bg-white shadow-lg rounded-lg border border-stone-100 p-2 w-64 flex flex-col">
                {services.map((service) => (
  <Link
    key={service.href}
    href={service.href}
    className="px-4 py-3 hover:bg-stone-50 rounded-md text-stone-700 hover:text-amber-600 transition-colors text-sm"
  >
    {service.name}
  </Link>
))}
              </div>
            </div>
          </div>

      <Link 
        href="/blog" 
        className="text-stone-700 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-widest py-2 px-2"
      >
        Wellness Journal
      </Link>

          <Link href="/contact" className="text-stone-700 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-widest py-2 px-2">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <a 
          href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20an%20appointment." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-amber-500 text-stone-900 rounded-full hover:bg-amber-600 transition-colors text-sm uppercase tracking-widest font-medium shadow-sm"
        >
          Book Session
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-stone-900" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
  <span className="text-2xl">×</span>
) : (
  <Menu strokeWidth={1.75} size={26} />
)}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 shadow-lg absolute top-full left-0 w-full max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col px-4 py-6 gap-4">
            <Link 
              href="/" 
              onClick={closeMenu} 
              className="text-stone-800 text-lg font-medium hover:text-amber-600 transition-colors py-2"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={closeMenu} 
              className="text-stone-800 text-lg font-medium hover:text-amber-600 transition-colors py-2"
            >
              About
            </Link>
            
            <div className="flex flex-col">
              <button 
           onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
           aria-expanded={isMobileServicesOpen}
           aria-controls="mobile-services-menu"
           aria-label="Toggle Services Menu"
           className="flex items-center justify-between text-stone-800 text-lg font-medium hover:text-amber-600 transition-colors py-2 w-full text-left"
         >
                Services
                <span
  className={`text-sm transition-transform duration-200 ${
  isMobileServicesOpen ? 'rotate-180' : ''
}`}
>
  ⌄
</span>
              </button>
              
              {isMobileServicesOpen && (
                <div 
              id="mobile-services-menu"
              className="flex flex-col gap-2 pl-4 pt-2 pb-2 border-l-2 border-stone-100 ml-2 mt-2"
        >
                  {services.map((service) => (
  <Link
    key={service.href}
    href={service.href}
    onClick={closeMenu}
    className="text-stone-600 py-2 hover:text-amber-600 transition-colors"
  >
    {service.name}
  </Link>
))}
                </div>
              )}
            </div>

          <Link 
             href="/blog" 
             onClick={closeMenu} 
             className="text-stone-800 text-lg font-medium hover:text-amber-600 transition-colors py-2"
           >
              Wellness Journal
             </Link>

            <Link 
              href="/contact" 
              onClick={closeMenu} 
              className="text-stone-800 text-lg font-medium hover:text-amber-600 transition-colors py-2"
            >
              Contact
            </Link>
            
            <a 
              href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20an%20appointment." 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center w-full py-3 px-1 bg-amber-500 text-stone-900 rounded-full text-sm uppercase tracking-widest font-medium shadow-md hover:bg-amber-600 transition-colors"
            >
              Book Session
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
