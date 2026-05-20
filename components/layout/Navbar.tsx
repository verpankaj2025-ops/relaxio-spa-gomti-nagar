import Link from 'next/link';

const services = [
  { name: 'Thai Massage', href: '/services/thai-massage' },
  { name: 'Balinese Massage', href: '/services/balinese-massage' },
  { name: 'Deep Tissue Massage', href: '/services/deep-tissue-massage' },
  { name: 'Couple Massage', href: '/services/couple-massage' },
  { name: 'Jacuzzi & Steam Bath', href: '/services/spa-facilities' },
];

const navLinkClass =
  'text-stone-700 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-widest';

const mobileLinkClass =
  'text-stone-800 text-lg font-medium hover:text-amber-600 transition-colors py-3 min-h-11 flex items-center';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Link
          href="/"
          prefetch={false}
          className="text-3xl font-serif tracking-wide flex items-center text-stone-900"
        >
          Relaxio<span className="text-amber-500">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          <Link href="/" prefetch={false} className={navLinkClass}>
            Home
          </Link>
          <Link href="/about" prefetch={false} className={navLinkClass}>
            About
          </Link>

          <div className="relative group">
            <Link
              href="/services"
              prefetch={false}
              className={`flex items-center gap-1 py-2 ${navLinkClass}`}
            >
              Services{' '}
              <span className="text-xs group-hover:rotate-180 transition-transform duration-200" aria-hidden="true">
                ⌄
              </span>
            </Link>
            <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 pt-2">
              <div className="bg-white shadow-lg rounded-lg border border-stone-100 p-2 w-64 flex flex-col">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    prefetch={false}
                    className="px-4 py-3 hover:bg-stone-50 rounded-md text-stone-700 hover:text-amber-600 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/blog" prefetch={false} className={`py-2 px-2 ${navLinkClass}`}>
            Wellness Journal
          </Link>
          <Link href="/contact" prefetch={false} className={`py-2 px-2 ${navLinkClass}`}>
            Contact
          </Link>
        </nav>

        <a
          href="https://wa.me/919455671995?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-amber-500 text-stone-900 rounded-full hover:bg-amber-600 transition-colors text-sm uppercase tracking-widest font-medium shadow-sm"
        >
          Book Session
        </a>

        {/* CSS-only mobile menu — no client JS */}
        <details className="md:hidden relative nav-mobile">
          <summary
            className="list-none min-h-11 min-w-11 flex items-center justify-center text-stone-900 cursor-pointer [&::-webkit-details-marker]:hidden"
            aria-label="Open navigation menu"
          >
            <span className="nav-icon-open text-2xl leading-none" aria-hidden="true">
              ☰
            </span>
            <span className="nav-icon-close text-2xl leading-none" aria-hidden="true">
              ×
            </span>
          </summary>

          <div className="absolute top-full right-0 mt-2 w-[min(100vw-2rem,20rem)] bg-white border border-stone-100 shadow-lg rounded-xl max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col px-4 py-6 gap-2" aria-label="Mobile">
              <Link href="/" prefetch={false} className={mobileLinkClass}>
                Home
              </Link>
              <Link href="/about" prefetch={false} className={mobileLinkClass}>
                About
              </Link>

              <details className="group/services">
                <summary className={`${mobileLinkClass} list-none cursor-pointer flex items-center justify-between [&::-webkit-details-marker]:hidden`}>
                  Services
                  <span className="text-sm" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <div className="flex flex-col gap-1 pl-4 pt-2 pb-2 border-l-2 border-stone-100 ml-2 mt-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      prefetch={false}
                      className="text-stone-600 py-3 min-h-11 flex items-center hover:text-amber-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </details>

              <Link href="/blog" prefetch={false} className={mobileLinkClass}>
                Wellness Journal
              </Link>
              <Link href="/contact" prefetch={false} className={mobileLinkClass}>
                Contact
              </Link>

              <a
                href="https://wa.me/919455671995?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center w-full py-3 px-1 bg-amber-500 text-stone-900 rounded-full text-sm uppercase tracking-widest font-medium shadow-md hover:bg-amber-600 transition-colors"
              >
                Book Session
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
