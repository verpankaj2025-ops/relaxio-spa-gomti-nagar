import Link from 'next/link';
import { IconPhone } from '@/components/icons';

const footerLinks = [
  { href: '/services', label: 'All Spa Services' },
  { href: '/services/thai-massage', label: 'Thai Massage' },
  { href: '/services/balinese-massage', label: 'Balinese Massage' },
  { href: '/services/deep-tissue-massage', label: 'Deep Tissue Massage' },
  { href: '/services/couple-massage', label: 'Couple Massage' },
  { href: '/blog', label: 'Wellness Journal' },
  { href: '/about', label: 'About Relaxio Spa' },
  { href: '/contact', label: 'Contact Relaxio Spa' },
];

const seoLinks = [
  { href: '/services/thai-massage', label: 'Thai Massage in Gomti Nagar Lucknow' },
  { href: '/services/balinese-massage', label: 'Balinese Massage Therapy in Lucknow' },
  { href: '/services/deep-tissue-massage', label: 'Deep Tissue Massage in Gomti Nagar' },
  { href: '/services/couple-massage', label: 'Couple Spa in Lucknow' },
  { href: '/services/spa-facilities', label: 'Jacuzzi & Steam Bath Spa' },
  { href: '/blog', label: 'Wellness & Spa Blog' },
  { href: '/blog/best-spa-in-gomti-nagar', label: 'Best Spa in Gomti Nagar Lucknow' },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 py-14 md:py-16 border-t border-stone-900 content-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-serif text-white mb-4 tracking-wide">
            Relaxio Spa<span className="text-[#d4af37]">.</span>
          </h3>
          <p className="mb-6 font-light leading-relaxed max-w-sm text-stone-300">
            Relaxio Spa offers peaceful wellness experiences with private rooms, relaxing therapies, and a calm luxury
            ambience in Gomti Nagar Lucknow.
          </p>
        </div>

        <div>
          <h4 className="text-white text-lg font-serif mb-5 tracking-wide">Quick Links</h4>
          <ul className="space-y-1.5 font-light">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  prefetch={false}
                  className="inline-flex min-h-[38px] items-center py-1.5 hover:text-[#d4af37] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-serif mb-6 tracking-wide">Visit Us</h4>
          <address className="not-italic space-y-4 font-light" itemScope itemType="https://schema.org/PostalAddress">
            <p>
              <strong>Relaxio Spa</strong>
              <br />
              <span itemProp="streetAddress">2nd Floor, 4/526, Vivek Khand 4,</span>
              <br />
              <span itemProp="addressLocality">Gomti Nagar, Lucknow</span>{' '}
              <span itemProp="postalCode">226010</span>
            </p>
            <p>Open Daily: 11:00 AM - 9:00 PM</p>
            <div className="pt-2 space-y-2">
              <a
                href="tel:+917081891995"
                className="text-[#d4af37] hover:text-white transition-colors font-medium text-lg"
                itemProp="telephone"
              >
                Call Now: +91 7081891995
              </a>
              <a
                href="tel:+919455671995"
                className="text-[#d4af37] hover:text-white transition-colors font-medium text-lg"
                itemProp="telephone"
              >
                +91 9455671995
              </a>
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-stone-800 mt-12 pt-8">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-serif text-white mb-5">Popular Wellness Services</h3>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Footer services">
            {seoLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="text-stone-300 hover:text-amber-400 transition-colors inline-flex min-h-[36px] items-center py-1 leading-relaxed"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10 pt-6 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
            <p>&copy; {new Date().getFullYear()} Relaxio Spa. All rights reserved.</p>
            <a
              href="https://wa.me/919455671995"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="min-h-11 min-w-11 rounded-full border border-stone-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white"
            >
              <IconPhone className="text-current" size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
