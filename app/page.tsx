import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import PricingSection from '@/components/home/PricingSection';
import BlogSection from '@/components/home/BlogSection';
import FAQ from '@/components/FAQ';
import {
  IconArrowRight,
  IconClock,
  IconMapPin,
  IconPhone,
} from '@/components/icons';
import {
  homeServices,
  seoPillLinks,
  wellnessHighlights,
  whyChooseCards,
} from '@/lib/home-content';
import { getFAQSchema, getLocalBusinessSchema, getWebsiteSchema } from '@/lib/seo';
import { faqsData } from '@/lib/faqs';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Luxury Wellness Spa in Gomti Nagar Lucknow | Relaxio Spa',
  description:
    'Best spa in Gomti Nagar Lucknow offering Thai massage, Balinese massage, deep tissue therapy, couple spa, jacuzzi and wellness treatments.',
  alternates: {
    canonical: 'https://relaxiospa.in',
  },
  openGraph: {
    title: 'Luxury Wellness Spa in Gomti Nagar Lucknow | Relaxio Spa',
    description:
      'Experience luxury wellness and relaxing spa therapies at Relaxio Spa in Gomti Nagar Lucknow with private rooms and professional therapists.',
    url: 'https://relaxiospa.in',
    siteName: 'Relaxio Spa',
    images: [
      {
        url: 'https://relaxiospa.in/images/luxury-spa-gomti-nagar-lucknow.avif',
        width: 1200,
        height: 630,
        alt: 'Relaxio Spa Gomti Nagar Lucknow',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

const locationRows = [
  {
    Icon: IconMapPin,
    title: 'Location',
    content: (
      <p className="text-stone-600 font-light leading-relaxed">
        2nd Floor, 4/526, Vivek Khand 4,
        <br />
        Gomti Nagar, Lucknow, UP 226010
      </p>
    ),
  },
  {
    Icon: IconClock,
    title: 'Operating Hours',
    content: (
      <p className="text-stone-600 font-light leading-relaxed">
        Monday - Sunday
        <br />
        11:00 AM - 9:00 PM
      </p>
    ),
  },
  {
    Icon: IconPhone,
    title: 'Contact',
    content: (
      <>
        <a href="tel:+917081891995" className="block text-stone-600 hover:text-[#d4af37] transition-colors">
          +91 7081891995
        </a>
        <a href="tel:+919455671995" className="block mt-2 text-stone-600 hover:text-[#d4af37] transition-colors">
          +91 9455671995
        </a>
        <a
          href="mailto:hello@relaxiospa.in"
          className="block mt-2 text-stone-600 hover:text-[#d4af37] transition-colors"
        >
          hello@relaxiospa.in
        </a>
      </>
    ),
  },
];

export default function Home() {
  const faqs = faqsData.home || [];

  return (
    <>
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFAQSchema(faqs)),
          }}
        />
      )}

      <HeroSection />

      <section className="py-16 md:py-20 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-20">
            <span className="text-amber-700 tracking-[0.2em] uppercase text-sm font-medium mb-4 block">
              Our Offerings
            </span>
            <h2 className="text-3xl md:text-5xl tracking-[-0.03em] font-serif text-stone-900 mb-6">
              Luxury Spa Therapies
            </h2>
            <div className="w-20 h-0.5 bg-[#d4af37] mx-auto" />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                prefetch={false}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-stone-100"
              >
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={40}
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent opacity-50" />
                </div>
                <div className="p-6 text-center relative bg-white -mt-8 mx-4 rounded-2xl shadow-lg">
                  <h3 className="text-2xl md:text-[30px] tracking-[-0.02em] font-serif mb-3 text-stone-900 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 font-light mb-6 min-h-[72px]">{service.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-amber-700">
                    {service.cta}
                    <IconArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fcfaf6] border-t border-stone-100 content-auto">
        <div className="max-w-5xl mx-auto px-6 py-10 bg-white border border-stone-200/70 rounded-[36px] shadow-sm">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 text-center">
            Explore Premium Spa Services in Gomti Nagar Lucknow
          </h2>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Relaxio Spa offers professional wellness therapies including Thai massage, Balinese massage, deep tissue
            massage, couple spa therapies, steam bath, and luxury relaxation experiences in Gomti Nagar Lucknow.
          </p>
          <nav className="flex max-w-4xl mx-auto flex-wrap justify-center gap-3 sm:gap-4 pt-2" aria-label="Spa services">
            {seoPillLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className="px-5 py-3 rounded-full border border-stone-200 bg-[#fcfaf6] text-stone-800 hover:border-amber-600 hover:text-amber-700 hover:bg-white transition-colors duration-200 text-sm tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mt-8 mx-auto max-w-fit rounded-full border border-stone-200/70 bg-[#f8f5ef] px-5 py-3 text-center text-xs sm:text-sm text-stone-600 shadow-sm">
            Looking for the full service menu?{" "}
            <Link
              href="/services"
              prefetch={false}
              className="font-medium text-amber-800 underline decoration-amber-700/50 underline-offset-4"
            >
              Explore all spa services in Gomti Nagar Lucknow
            </Link>
            .
          </p>
        </div>
      </section>

      <PricingSection />

      <section className="py-16 bg-[#fcfaf6] border-y border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          ```
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
              Areas We Serve Across Lucknow
            </h2>

            <p className="text-stone-600 max-w-3xl mx-auto">
              Relaxio Spa welcomes guests from Gomti Nagar, Indira Nagar,
              Chinhat, Hazratganj, Mahanagar, Faizabad Road and nearby areas
              looking for premium wellness experiences and professional
              massage therapies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">

            <Link
              href="/spa-in-indira-nagar-lucknow"
              className="px-5 py-3 rounded-full border border-stone-200 hover:border-amber-600 hover:text-amber-700"
            >
              Spa in Indira Nagar
            </Link>

            <Link
              href="/spa-in-aliganj-lucknow"
              className="px-5 py-3 rounded-full border border-stone-200 hover:border-amber-600 hover:text-amber-700"
            >
              Spa in Aliganj
            </Link>

            <Link
              href="/spa-in-chinhat-lucknow"
              className="px-5 py-3 rounded-full border border-stone-200 hover:border-amber-600 hover:text-amber-700"
            >
              Spa in Chinhat
            </Link>

            <Link
              href="/spa-in-hazratganj-lucknow"
              className="px-5 py-3 rounded-full border border-stone-200 hover:border-amber-600 hover:text-amber-700"
            >
              Spa in Hazratganj
            </Link>

            <Link
              href="/spa-in-mahanagar-lucknow"
              className="px-5 py-3 rounded-full border border-stone-200 hover:border-amber-600 hover:text-amber-700"
            >
              Spa in Mahanagar
            </Link>

            <Link
              href="/spa-in-gomti-nagar-extension-lucknow"
              className="px-5 py-3 rounded-full border border-stone-200 hover:border-amber-600 hover:text-amber-700"
            >
              Spa in Gomti Nagar Extension
            </Link>

            <Link
              href="/spa-near-faizabad-road-lucknow"
              className="px-5 py-3 rounded-full border border-stone-200 hover:border-amber-600 hover:text-amber-700"
            >
              Spa Near Faizabad Road
            </Link>

          </div>

        </div>
      </section>

      <section className="py-20 md:py-28 bg-white content-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-700 tracking-[0.35em] uppercase text-[11px] font-medium mb-5 block">
            Why Clients Return
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-[-0.03em] text-stone-900 leading-tight mb-6">
            Designed for Comfort, Privacy & Wellness
          </h2>
          <div className="w-20 h-[2px] bg-[#d4af37] mx-auto mb-8" />
          <p className="text-stone-600 max-w-3xl mx-auto leading-relaxed text-base md:text-lg font-light mb-16">
            Relaxio Spa is one of the most trusted spa destinations in Gomti Nagar Lucknow, offering professional massage therapies, private wellness rooms, premium spa experiences and complete relaxation treatments for individuals and couples.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseCards.map(({ Icon, title, description }) => (
              <article
                key={title}
                className="group card-surface rounded-[28px] border border-stone-200/80 bg-[#fcfaf6] p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative z-[1] icon-badge">
                  <Icon className="text-amber-700" size={30} />
                </div>
                <h3 className="relative z-[1] text-xl font-serif text-stone-900 mb-3">{title}</h3>
                <p className="relative z-[1] text-sm text-stone-600 leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-700 tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Find Us</span>
              <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mb-10">Visit Our Sanctuary in Gomti Nagar</h3>
              <ul className="space-y-8">
                {locationRows.map(({ Icon, title, content }) => (
                  <li key={title} className="flex items-start gap-6">
                    <span className="icon-ring">
                      <Icon className="text-amber-700" size={24} />
                    </span>
                    <div>
                      <h3 className="text-xl font-serif text-stone-900 mb-2">{title}</h3>
                      {content}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-[380px] md:h-[420px] w-full rounded-2xl overflow-hidden shadow-md relative">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=26.8553677,80.9985092"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Relaxio Spa location in Google Maps"
                className="absolute inset-0 z-10"
              />
              <Image
                src="/images/google-map-preview.webp"
                alt="Relaxio Spa Location Map"
                fill
                loading="lazy"
                quality={40}
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#f8f5ef] border-t border-stone-200/60 overflow-hidden relative content-auto">
        <div className="section-ambient-glow" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-[40px] border border-stone-200/70 bg-white shadow-lg overflow-hidden">
            <header className="px-8 md:px-16 lg:px-24 pt-16 md:pt-24 text-center">
              <span className="text-amber-700 tracking-[0.35em] uppercase text-[11px] font-medium mb-6 block">
                Premium Wellness Destination
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-[1.05] tracking-[-0.04em] max-w-4xl mx-auto mb-8">
                A Calm Escape for Relaxation & Wellness
              </h2>
              <div className="w-20 h-[2px] bg-[#d4af37] mx-auto mb-10" />
              <div className="max-w-3xl mx-auto space-y-7 text-stone-600 leading-relaxed text-[17px] md:text-lg font-light">
                <p>
                  Relaxio Spa is recognized as one of the best spa destinations in Gomti Nagar Lucknow, offering Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Spa experiences, Jacuzzi sessions and wellness therapies designed for complete relaxation and rejuvenation.
                </p>
                <p>
                  Whether you are looking for a body massage in Lucknow, a relaxing spa session, or a premium wellness experience, our professional therapists provide personalized treatments focused on stress relief, relaxation and overall well-being.
                </p>
                <p>
                  Elegant interiors, private wellness suites, soothing ambience, and professionally guided therapies create
                  a refined spa experience focused on privacy, rejuvenation, and complete relaxation.
                </p>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 md:p-14 lg:p-20">
              {wellnessHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[30px] border border-stone-200/70 bg-[#fcfaf6] p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="text-[11px] uppercase tracking-[0.3em] text-amber-700 font-medium block mb-5">
                    {item.label}
                  </span>
                  <h3 className="text-2xl font-serif text-stone-900 mb-4">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-sm">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="px-8 md:px-16 pb-16 md:pb-20 text-center">
              <a
                href="https://wa.me/919455671995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20a%20massage."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#d4af37] text-stone-900 rounded-full hover:bg-[#c19b2e] transition-all duration-300 hover:shadow-lg uppercase tracking-[0.2em] text-sm font-medium"
              >
                Book Your Wellness Session
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">
            Popular Spa Services in Gomti Nagar Lucknow
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            <Link href="/services/thai-massage">
              Thai Massage in Gomti Nagar Lucknow
            </Link>

            <Link href="/services/balinese-massage">
              Balinese Massage in Lucknow
            </Link>

            <Link href="/services/deep-tissue-massage">
              Deep Tissue Massage in Gomti Nagar
            </Link>

            <Link href="/services/couple-massage">
              Couple Massage in Lucknow
            </Link>

          </div>
        </div>
      </section>

      <BlogSection />

      <div className="mt-16 content-auto">
        <FAQ faqs={faqs} />
      </div>
    </>
  );
}
