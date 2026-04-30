'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

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
              Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            <div className="absolute top-full left-0 hidden group-hover:block pt-2">
              <div className="bg-white shadow-xl rounded-lg border border-stone-100 p-2 w-64 flex flex-col">
                <Link 
  href="/services/thai-massage" 
  className="px-4 py-3 hover:bg-stone-50 rounded-md text-stone-700 hover:text-amber-600 transition-colors text-sm"
>
  Thai Massage
</Link>

<Link 
  href="/services/balinese-massage" 
  className="px-4 py-3 hover:bg-stone-50 rounded-md text-stone-700 hover:text-amber-600 transition-colors text-sm"
>
  Balinese Massage
</Link>

<Link 
  href="/services/deep-tissue-massage" 
  className="px-4 py-3 hover:bg-stone-50 rounded-md text-stone-700 hover:text-amber-600 transition-colors text-sm"
>
  Deep Tissue Massage
</Link>

{/* 👉 YAHAN SE PASTE KARO */}

<Link 
  href="/services/couple-massage" 
  className="px-4 py-3 hover:bg-stone-50 rounded-md text-stone-700 hover:text-amber-600 transition-colors text-sm"
>
  Couple Massage
</Link>

<Link 
  href="/services/spa-facilities" 
  className="px-4 py-3 hover:bg-stone-50 rounded-md text-stone-700 hover:text-amber-600 transition-colors text-sm"
>
  Jacuzzi & Steam Bath
</Link>
              </div>
            </div>
          </div>

          <Link 
  href="/blog" 
  className="text-stone-700 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-widest"
>
  Blog
</Link>

          <Link href="/contact" className="text-stone-700 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-widest">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <a 
          href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20an%20appointment." 
          target="_blank" 
          rel="noreferrer" 
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-amber-500 text-stone-900 rounded-full hover:bg-amber-600 transition-colors text-sm uppercase tracking-widest font-medium shadow-sm"
        >
          Book Now
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-stone-900" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {isMobileServicesOpen && (
                <div 
  id="mobile-services-menu"
  className="flex flex-col gap-2 pl-4 pt-2 pb-2 border-l-2 border-stone-100 ml-2 mt-2"
>
                  <Link 
                    href="/services/thai-massage" 
                    onClick={closeMenu} 
                    className="text-stone-600 py-2 hover:text-amber-600 transition-colors"
                  >
                    Thai Massage
                  </Link>
                  <Link 
                    href="/services/balinese-massage" 
                    onClick={closeMenu} 
                    className="text-stone-600 py-2 hover:text-amber-600 transition-colors"
                  >
                    Balinese Massage
                  </Link>
                  <Link 
                    href="/services/deep-tissue-massage" 
                    onClick={closeMenu} 
                    className="text-stone-600 py-2 hover:text-amber-600 transition-colors"
                  >
                    Deep Tissue Massage
                  </Link>

{/* 👉 YAHAN ADD KARO */}

<Link 
  href="/services/couple-massage" 
  onClick={closeMenu} 
  className="text-stone-600 py-2 hover:text-amber-600 transition-colors"
>
  Couple Massage
</Link>

<Link 
  href="/services/spa-facilities" 
  onClick={closeMenu} 
  className="text-stone-600 py-2 hover:text-amber-600 transition-colors"
>
  Jacuzzi & Steam Bath
</Link>
                </div>
              )}
            </div>

          <Link 
  href="/blog" 
  onClick={closeMenu} 
  className="text-stone-800 text-lg font-medium hover:text-amber-600 transition-colors py-2"
>
  Blog
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
              rel="noreferrer" 
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center w-full py-3 bg-amber-500 text-stone-900 rounded-full text-sm uppercase tracking-widest font-medium shadow-md hover:bg-amber-600 transition-colors"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
