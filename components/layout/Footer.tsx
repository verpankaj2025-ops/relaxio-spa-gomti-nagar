import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-20 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-serif text-white mb-6 tracking-wide">
            Relaxio Spa<span className="text-[#d4af37]">.</span>
          </h3>
          <p className="mb-8 font-light leading-relaxed max-w-sm text-stone-400">
            Relaxio Spa is the best spa in Gomti Nagar Lucknow offering Thai Massage, Balinese Massage, and Deep Tissue Massage. Book premium body massage near you with certified therapists for ultimate relaxation and pain relief.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-white transition-all duration-300" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-white transition-all duration-300" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-white transition-all duration-300" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white text-lg font-serif mb-6 tracking-wide">Quick Links</h4>
          <ul className="space-y-4 font-light">
            <li><Link href="/services/thai-massage">Thai Massage in Gomti Nagar Lucknow</Link></li>
            <li><Link href="/services/balinese-massage">Balinese Massage in Gomti Nagar Lucknow</Link></li>
            <li><Link href="/services/deep-tissue-massage">Deep Tissue Massage in Gomti Nagar Lucknow</Link></li>
            <li><Link href="/">Best Spa in Gomti Nagar Lucknow</Link></li>
            <li><Link href="/contact">Spa Near Me in Lucknow</Link></li>
            <li><Link href="/about" className="hover:text-[#d4af37] transition-colors">About Our Spa</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white text-lg font-serif mb-6 tracking-wide">Visit Us</h4>
          <address className="not-italic space-y-4 font-light" itemScope itemType="https://schema.org/PostalAddress">
            <p>
              <strong>Relaxio Spa Gomti Nagar Lucknow</strong><br />
              <span itemProp="streetAddress">2nd Floor, 4/526, Vivek Khand 4,</span><br />
              <span itemProp="addressLocality">Gomti Nagar, Lucknow</span> <span itemProp="postalCode">226010</span>
            </p>
            <p>Open Daily: 11:00 AM - 9:00 PM</p>
            <p className="pt-2">
              <a 
  href="tel:+917081891995" 
  className="text-[#d4af37] hover:text-white transition-colors font-medium text-lg"
  itemProp="telephone"
>
  Call Now: +91 7081891995
</a>
            </p>
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Relaxio Spa - Best Spa in Gomti Nagar Lucknow for Body Massage. All rights reserved.</p>
        <div className="flex gap-6">
          <a 
            href="https://wa.me/917081891995" 
            className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
