import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-14 md:py-16 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div className="md:col-span-2">
          <h3 className="text-3xl font-serif text-white mb-4 tracking-wide">
            Relaxio Spa<span className="text-[#d4af37]">.</span>
          </h3>

          <p className="mb-6 font-light leading-relaxed max-w-sm text-stone-400">
            Relaxio Spa offers peaceful wellness experiences with private rooms, relaxing therapies, and a calm luxury ambience in Gomti Nagar Lucknow.
          </p>

          <div className="flex gap-4"></div>
        </div>

          <div>
          <h4 className="text-white text-lg font-serif mb-6 tracking-wide">Quick Links</h4>
          <ul className="space-y-4 font-light">
            <li>
  <Link
    href="/services/thai-massage"
    className="hover:text-[#d4af37] transition-colors"
  >
    Thai Massage
  </Link>
</li>

<li>
  <Link
    href="/services/balinese-massage"
    className="hover:text-[#d4af37] transition-colors"
  >
    Balinese Massage
  </Link>
</li>

<li>
  <Link
    href="/services/deep-tissue-massage"
    className="hover:text-[#d4af37] transition-colors"
  >
    Deep Tissue Massage
  </Link>
</li>

<li>
  <Link
    href="/services/couple-massage"
    className="hover:text-[#d4af37] transition-colors"
  >
    Couple Massage
  </Link>
</li>

<li>
  <Link
    href="/blog"
    className="hover:text-[#d4af37] transition-colors"
  >
    Wellness Journal
  </Link>
</li>

<li>
  <Link href="/about" className="hover:text-[#d4af37] transition-colors">
    About Relaxio Spa
  </Link>
</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-serif mb-6 tracking-wide">Visit Us</h4>
          <address className="not-italic space-y-4 font-light" itemScope itemType="https://schema.org/PostalAddress">
            <p>
            <strong>Relaxio Spa</strong><br />
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

      {/* SEO INTERNAL LINKS */}
<div className="border-t border-stone-800 mt-12 pt-8">

  <div className="max-w-7xl mx-auto px-4">

    <h3 className="text-xl font-serif text-white mb-6">
      Popular Wellness Services
    </h3>

    <div className="space-y-2 text-sm">

      <Link
        href="/services/thai-massage"
        className="text-stone-400 hover:text-amber-400 transition-colors"
      >
        Thai Massage in Gomti Nagar Lucknow
      </Link>

      <Link
        href="/services/balinese-massage"
        className="text-stone-400 hover:text-amber-400 transition-colors"
      >
        Balinese Massage Therapy in Lucknow
      </Link>

      <Link
        href="/services/deep-tissue-massage"
        className="text-stone-400 hover:text-amber-400 transition-colors"
      >
        Deep Tissue Massage in Gomti Nagar
      </Link>

      <Link
        href="/services/couple-massage"
        className="text-stone-400 hover:text-amber-400 transition-colors"
      >
        Couple Spa in Lucknow
      </Link>

      <Link
        href="/services/spa-facilities"
        className="text-stone-400 hover:text-amber-400 transition-colors"
      >
        Jacuzzi & Steam Bath Spa
      </Link>

      <Link
        href="/blog"
        className="text-stone-400 hover:text-amber-400 transition-colors"
      >
        Wellness & Spa Blog
      </Link>

      <Link
        href="/blog/best-spa-in-gomti-nagar"
        className="text-stone-400 hover:text-amber-400 transition-colors"
       >
        Best Spa in Gomti Nagar Lucknow
      </Link>

    </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Relaxio Spa. All rights reserved.</p>

        <div className="flex gap-6">
          <a 
            href="https://wa.me/917081891995"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white"
           >
            <Phone aria-hidden="true" size={18} />
          </a>
        </div>
      </div>

      

  </div>

</div>

    </footer>
  );
}