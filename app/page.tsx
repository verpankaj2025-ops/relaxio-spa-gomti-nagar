import Image from 'next/image';
import Link from 'next/link';

import { getFAQSchema } from '@/lib/seo';

import { faqsData } from "@/lib/faqs";

import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  ShieldCheck,
  BedDouble,
  Sparkles,
  MessageCircle,
} from 'lucide-react';

import type { Metadata } from "next";

import dynamic from "next/dynamic";

const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => (
    <div className="py-10 text-center text-stone-500">
      Loading FAQ...
    </div>
  ),
});



export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Luxury Wellness Spa in Gomti Nagar Lucknow | Relaxio Spa",

  description:
    "Relaxio Spa is a luxury wellness spa in Gomti Nagar Lucknow offering relaxing therapies, premium ambience, private rooms, and professional massage experiences.",

  alternates: {
    canonical: "https://relaxiospa.in",
  },

  openGraph: {
    title: "Luxury Wellness Spa in Gomti Nagar Lucknow | Relaxio Spa",

    description:
      "Experience luxury wellness and relaxing spa therapies at Relaxio Spa in Gomti Nagar Lucknow with private rooms and professional therapists.",

    url: "https://relaxiospa.in",

    siteName: "Relaxio Spa",

    images: [
      {
        url: "https://relaxiospa.in/images/luxury-spa-gomti-nagar-lucknow.avif",
        width: 1200,
        height: 630,
        alt: "Relaxio Spa Gomti Nagar Lucknow",
      },
    ],

    locale: "en_IN",
    type: "website",
  },
};

export default async function Home() {

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

      
        <main>
          
          {/* 1. HERO SECTION */}
      <section className="min-h-[44vh] md:min-h-[54vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 z-0">
   <Image
  src="/images/luxury-spa-gomti-nagar-lucknow.avif"
  alt="Luxury wellness spa experience at Relaxio Spa"
  fill
  priority
  fetchPriority="high"
  quality={40}
  sizes="100vw"
  className="object-cover"
/>
          <div className="absolute inset-0 bg-black/55" />
        </div>
        
           <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20 pb-10">

               <span className="text-amber-300 tracking-[0.3em] uppercase text-[11px] font-medium mb-6 block">
                 Welcome to Relaxio Spa
               </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.05] tracking-[-0.03em] text-white mb-4">
                  Luxury Wellness Spa in Gomti Nagar Lucknow                  
                </h1>

                 <h2 className="text-base md:text-xl text-stone-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                      Relaxio Spa offers private wellness therapies, calming spa ambience, and professionally guided massage experiences designed for relaxation and comfort.
                   </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20a%20massage."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#d4af37] text-stone-900 rounded-full hover:bg-[#c19b2e] transition-all duration-300 hover:shadow-lg text-sm uppercase tracking-widest font-medium shadow-lg w-full sm:w-auto">
                Book Relaxation Package
             </a>
              <a href="tel:+917081891995" 
                 className="px-8 py-3.5 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-stone-900 transition-all duration-300 hover:shadow-lg text-sm uppercase tracking-[0.18em] font-medium w-full sm:w-auto">
                Call Now
              </a>
            </div>
            </div>
          
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-16 md:py-20 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
            <div className="text-center mb-20">
              <span className="text-amber-700 tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Our Offerings</span>
              <h2 className="text-3xl md:text-5xl tracking-[-0.03em] font-serif text-stone-900 mb-6">Luxury Spa Therapies</h2>
              <div className="w-20 h-0.5 bg-[#d4af37] mx-auto"></div>
            </div>
              
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Deep Tissue Massage',
                desc: 'Firm-pressure wellness therapy focused on muscle recovery, body relaxation, and reducing everyday physical tension.',
                img: '/images/deep-tissue-massage-gomti-nagar-lucknow.avif',
                alt: 'Deep tissue wellness therapy at Relaxio Spa',
                link: '/services/deep-tissue-massage',
                cta: 'Book Deep Tissue',
              },
              {
                title: 'Balinese Massage',
                desc: 'Aromatherapy wellness therapy designed to calm the mind, relax the body, and reduce everyday stress.',
                img: '/images/balinese-massage-gomti-nagar-lucknow.avif',
                alt: 'Luxury Balinese massage therapy at Relaxio Spa',
                link: '/services/balinese-massage',
                cta: 'Relax with Balinese',
              },
              {
                title: 'Thai Massage',
                desc: 'Traditional stretching and pressure-based therapy designed to improve flexibility and relaxation.',
                img: '/images/thai-massage-gomti-nagar-lucknow.avif',
                alt: 'Relaxing Thai massage therapy at Relaxio Spa',
                link: '/services/thai-massage',
                cta: 'Try Thai Massage',
              },
              {
  title: 'Couple Massage',
  desc: 'Enjoy a relaxing wellness experience for couples with private rooms, calming ambience, and professional therapists.',
  img: '/images/couple-massage-lucknow.avif',
  alt: 'Private couple wellness experience at Relaxio Spa',
  link: '/services/couple-massage',
  cta: 'Book Couple Spa',
},
{
  title: 'Jacuzzi & Steam Bath',
  desc: 'Relax your body and mind with steam therapy, warm jacuzzi sessions, and a peaceful wellness ambience.',
  img: '/images/jacuzzi-steam-bath-lucknow.avif',
  alt: 'Luxury jacuzzi and steam bath experience at Relaxio Spa',
  link: '/services/spa-facilities',
  cta: 'Relax in Jacuzzi',
},
            ].map((service) => (
              
                <Link
                    key={service.title}
                    href={service.link} 
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500 border border-stone-100">
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
                  <div className="p-6 text-center relative bg-white -mt-8 mx-4 rounded-2xl shadow-lg group-hover:-translate-y-1 transition-transform duration-500">
                    <h3 className="text-[30px] tracking-[-0.02em] font-serif mb-3 text-stone-900 group-hover:text-amber-700 transition-colors">{service.title}</h3>
                    <p className="text-stone-600 font-light mb-6 min-h-[72px]">{service.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-amber-700">
                     {service.cta}
                     <ArrowRight size={16} />
                     </span>
                  </div>
                </Link>
              
            ))}
          </div>
        </div>
      </section>

      {/* SEO INTERNAL LINKS SECTION */}
<section className="py-16 bg-[#fcfaf6] border-t border-stone-100">
  <div className="max-w-5xl mx-auto px-6 py-10 bg-white border border-stone-200/70 rounded-[36px] shadow-sm">

    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 text-center">
      Explore Premium Spa Services in Gomti Nagar Lucknow
    </h2>

    <p className="text-stone-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
      Relaxio Spa offers professional wellness therapies including Thai massage,
      Balinese massage, deep tissue massage, couple spa therapies, steam bath,
      and luxury relaxation experiences in Gomti Nagar Lucknow.
    </p>

    <div className="flex flex-wrap justify-center gap-4 pt-2">

  <Link
    href="/services/thai-massage"
    className="px-5 py-3 rounded-full border border-stone-200 bg-[#fcfaf6] text-stone-800 hover:border-amber-600 hover:text-amber-700 hover:bg-white transition-colors duration-200 text-sm tracking-wide"
  >
    Thai Massage in Gomti Nagar Lucknow
  </Link>

  <Link
    href="/services/balinese-massage"
    className="px-5 py-3 rounded-full border border-stone-200 bg-[#fcfaf6] text-stone-800 hover:border-amber-600 hover:text-amber-700 hover:bg-white transition-colors duration-200 text-sm tracking-wide"
  >
    Balinese Massage Spa in Lucknow
  </Link>

  <Link
    href="/services/deep-tissue-massage"
    className="px-5 py-3 rounded-full border border-stone-200 bg-[#fcfaf6] text-stone-800 hover:border-amber-600 hover:text-amber-700 hover:bg-white transition-colors duration-200 text-sm tracking-wide"
  >
    Deep Tissue Massage Therapy in Gomti Nagar
  </Link>

  <Link
    href="/services/couple-massage"
    className="px-5 py-3 rounded-full border border-stone-200 bg-[#fcfaf6] text-stone-800 hover:border-amber-600 hover:text-amber-700 hover:bg-white transition-colors duration-200 text-sm tracking-wide"
  >
    Couple Massage Spa in Lucknow
  </Link>

  <Link
    href="/services/spa-facilities"
    className="px-5 py-3 rounded-full border border-stone-200 bg-[#fcfaf6] text-stone-800 hover:border-amber-600 hover:text-amber-700 hover:bg-white transition-colors duration-200 text-sm tracking-wide"
  >
    Jacuzzi & Steam Bath Spa in Lucknow
  </Link>

   </div>
  </div>
</section>

      {/* 4. PRICING SECTION */}
      <section className="py-16 md:py-20 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-20">
              <span className="text-amber-700 tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Transparent Pricing</span>
              <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
                Wellness Therapy Packages
             </h3>

            <div className="w-20 h-0.5 bg-[#d4af37] mx-auto"></div>
            </div>
              

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic */}
            
              <div className="group relative overflow-hidden bg-white p-8 rounded-[28px] border border-stone-200/80 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
  
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-24 -left-24 w-56 h-56 bg-white/40 blur-3xl rotate-12"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-amber-100/20"></div>
                 </div>
                <h3 className="text-2xl font-serif text-stone-900 mb-2">Relaxation</h3>
                <p className="text-stone-500 font-light mb-8">60 Minutes Session</p>
                <div className="text-5xl tracking-[-0.03em] font-serif text-stone-900 mb-8">₹2,499</div>
                <ul className="space-y-4 mb-10 text-stone-600 font-light">
                  <li>Choice of Swedish or Balinese</li>
                  <li>Premium Essential Oils</li>
                  <li>Shower Facility</li>
                </ul>
                <a 
                  href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20the%20Relaxation%20package." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 border border-stone-900 text-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition-colors uppercase tracking-widest text-sm font-medium">
                  Book Deep Healing
                </a>
              </div>
            

            {/* Premium (Highlighted) */}
            
              <div className="group relative bg-stone-900 p-12 rounded-[32px] border border-[#d4af37]/80 text-center md:-translate-y-2 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-stone-900 px-6 py-2 rounded-full text-xs uppercase tracking-[0.25em] font-medium shadow-[0_10px_30px_rgba(212,175,55,0.35)] z-20">
                    Most Popular
                 </div>

                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                   <div className="absolute -top-24 -left-24 w-56 h-56 bg-white/10 blur-3xl rotate-12"></div>
                   <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-amber-500/10"></div>
                 </div>
                <h3 className="text-2xl font-serif text-white mb-2">Deep Healing</h3>
                <p className="text-stone-400 font-light mb-8">90 Minutes Session</p>
                <div className="text-5xl font-serif text-white mb-8">₹3,499</div>
                <ul className="space-y-4 mb-10 text-stone-300 font-light">
                  <li>Deep Tissue or Thai Massage</li>
                  <li>Hot Stone Therapy Add-on</li>
                  <li>Premium Essential Oils</li>
                  <li>Shower & Steam Facility</li>
                </ul>
                <a 
                  href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20a%20massage."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-[#d4af37] text-stone-900 rounded-full hover:bg-[#c19b2e] transition-all duration-300 hover:shadow-lg uppercase tracking-widest text-sm font-medium shadow-lg">
                  Book Couple Retreat
                 </a>
              </div>
            

            {/* Couple */}
            
              <div className="group relative overflow-hidden bg-white p-10 rounded-[28px] border border-stone-200/80 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]">

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-24 -left-24 w-56 h-56 bg-white/40 blur-3xl rotate-12"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-amber-100/20"></div>
                </div>
                <h3 className="text-[30px] tracking-[-0.02em] font-serif text-stone-900 mb-2">Couple&apos;s Retreat</h3>
                <p className="text-stone-500 font-light mb-8">90 Minutes Session</p>
                <div className="text-5xl tracking-[-0.03em] font-serif text-stone-900 mb-8">₹6,499</div>
                <ul className="space-y-4 mb-10 text-stone-600 font-light">
                  <li>Private Couple&apos;s Suite</li>
                  <li>Any Massage of Choice</li>
                  <li>Aromatherapy & Rose Petals</li>
                  <li>Private Shower Facility</li>
                </ul>
                <a 
                  href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20a%20massage."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-[#d4af37] text-stone-900 rounded-full hover:bg-[#c19b2e] transition-all duration-300 hover:shadow-lg uppercase tracking-widest text-sm font-medium shadow-lg">
                  Book Couple Retreat
                </a>
              </div>
            
          </div>
        </div>
      </section>

      <section className="py-18 md:py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">

    <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
      Why Guests Choose Relaxio Spa
    </h3>

    <p className="text-stone-600 max-w-2xl mx-auto mb-12 leading-relaxed">
      Relaxio Spa focuses on comfort, hygiene, privacy, and professional wellness experiences. Our peaceful ambience and trained therapists help guests relax, recover from stress, and enjoy a premium spa experience in Gomti Nagar Lucknow.
    </p>

    <div className="grid md:grid-cols-4 gap-4">

      <div className="p-6 bg-[#fdfbf7] rounded-xl text-center border border-stone-100">
  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
    <ShieldCheck className="text-amber-700" size={28} />
  </div>

  <h3 className="font-semibold mb-2 text-stone-900">
    Expert Therapists
  </h3>

  <p className="text-sm text-stone-600">
    Highly trained professionals
  </p>
</div>

      <div className="p-6 bg-[#fdfbf7] rounded-xl text-center border border-stone-100">
  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
    <BedDouble className="text-amber-700" size={28} />
  </div>

  <h3 className="font-semibold mb-2 text-stone-900">
    Private Rooms
  </h3>

  <p className="text-sm text-stone-600">
    Complete privacy & comfort
  </p>
</div>

      <div className="p-6 bg-[#fdfbf7] rounded-xl text-center border border-stone-100">
  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
    <Sparkles className="text-amber-700" size={28} />
  </div>

  <h3 className="font-semibold mb-2 text-stone-900">
    Luxury Ambience
  </h3>

  <p className="text-sm text-stone-600">
    Premium spa experience
  </p>
</div>

      <div className="p-6 bg-[#fdfbf7] rounded-xl text-center border border-stone-100">
  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
    <MessageCircle className="text-amber-700" size={28} />
  </div>

  <h3 className="font-semibold mb-2 text-stone-900">
    Easy Booking
  </h3>

  <p className="text-sm text-stone-600">
    WhatsApp & call support
  </p>
</div>

    </div>

  </div>
</section>

      {/* 5. LOCATION SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
              <div>
                <span className="text-amber-700 tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Find Us</span>
                <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-10">Visit Our Sanctuary in Gomti Nagar</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#fdfbf7] rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="text-amber-700" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-stone-900 mb-2">Location</h3>
                      <p className="text-stone-600 font-light leading-relaxed">
                        2nd Floor, 4/526, Vivek Khand 4,<br />
                        Gomti Nagar, Lucknow, UP 226010
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#fdfbf7] rounded-full flex items-center justify-center shrink-0">
                      <Clock className="text-amber-700" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-stone-900 mb-2">Operating Hours</h3>
                      <p className="text-stone-600 font-light leading-relaxed">
                        Monday - Sunday<br />
                        11:00 AM - 9:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#fdfbf7] rounded-full flex items-center justify-center shrink-0">
                      <Phone className="text-amber-700" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-stone-900 mb-2">Contact</h3>
                      <a
                        href="tel:+917081891995"
                        className="block text-stone-600 hover:text-[#d4af37] transition-colors"
                       >
                         +91 7081891995
                        </a>

<a
  href="mailto:hello@relaxiospa.in"
  className="block mt-2 text-stone-600 hover:text-[#d4af37] transition-colors"
>
  hello@relaxiospa.in
</a>
                    </div>
                  </div>
                </div>
              </div>
            

            
  <div className="h-[380px] md:h-[420px] w-full rounded-2xl overflow-hidden shadow-md relative">

    {/* 👇 CLICKABLE OVERLAY */}
    <a
  href="https://www.google.com/maps/dir/?api=1&destination=26.8553677,80.9985092"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Open Relaxio Spa location in Google Maps"
  className="absolute inset-0 z-10"
></a>

    {/* 👇 MAP */}
    <Image
  src="/images/google-map-preview.webp"
  alt="Relaxio Spa Location Map"
  fill
  loading="lazy"
  quality={40}
  sizes="100vw"
  className="object-cover"
/>
    
  </div>

          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#fdfbf7] border-t border-stone-100 overflow-hidden">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-0 items-center rounded-[40px] overflow-hidden border border-stone-200/70 shadow-[0_20px_60px_rgba(0,0,0,0.06)] bg-white">

      {/* IMAGE SIDE */}
      <div className="relative h-[420px] md:h-[620px]">

        <Image
          src="/images/luxury-spa-gomti-nagar-lucknow.avif"
          alt="Luxury wellness spa ambience at Relaxio Spa"
          fill
          loading="lazy"
          quality={40}
          sizes="50vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

        {/* FLOATING BADGE */}
        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-white/40">

          <span className="block text-xs uppercase tracking-[0.25em] text-amber-700 mb-1">
            Relaxio Spa
          </span>

          <p className="text-stone-900 font-medium leading-snug">
            Luxury Wellness Experience <br />
            in Gomti Nagar Lucknow
          </p>

        </div>

      </div>

      {/* CONTENT SIDE */}
      <div className="p-8 md:p-16 lg:p-20">

        <span className="text-amber-700 tracking-[0.3em] uppercase text-xs font-medium mb-6 block">
          Premium Wellness Destination
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.05] tracking-[-0.03em] mb-8">
          Luxury Wellness Spa in Gomti Nagar Lucknow
        </h2>

        <div className="w-20 h-[2px] bg-[#d4af37] mb-10"></div>

        <div className="space-y-7 text-stone-600 leading-relaxed text-lg font-light">

          <p>
            Relaxio Spa is a premium wellness spa in Gomti Nagar Lucknow offering
            professional massage therapies, peaceful ambience, private spa rooms,
            and luxury wellness experiences for guests seeking relaxation and
            stress relief.
          </p>

          <p>
            Our wellness therapies include Thai massage, Balinese massage, deep
            tissue massage, couple spa experiences, jacuzzi sessions, steam bath,
            and premium relaxation packages designed for comfort and rejuvenation.
          </p>

          <p>
            Guests visiting Relaxio Spa in Gomti Nagar appreciate our hygiene,
            trained therapists, calming interiors, and private wellness spaces
            designed for premium spa experiences in Lucknow.
          </p>

        </div>

        {/* TRUST POINTS */}
        <div className="grid grid-cols-2 gap-4 mt-12">

          <div className="border border-stone-200 rounded-2xl p-5 bg-[#fcfaf6]">
            <h3 className="text-stone-900 font-medium mb-1">
              Private Rooms
            </h3>
            <p className="text-sm text-stone-500">
              Calm & premium ambience
            </p>
          </div>

          <div className="border border-stone-200 rounded-2xl p-5 bg-[#fcfaf6]">
            <h3 className="text-stone-900 font-medium mb-1">
              Luxury Therapies
            </h3>
            <p className="text-sm text-stone-500">
              Wellness-focused experiences
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

       {/* BLOG INTERNAL LINKS */}
<section className="py-16 bg-white">

  <div className="max-w-7xl mx-auto px-4">

    <h3 className="text-[30px] tracking-[-0.02em] font-serif text-center mb-12">
      Wellness & Spa Guides
    </h3>
    <p className="text-stone-500 text-lg mt-4 mb-10 max-w-2xl mx-auto leading-relaxed">
  Explore wellness insights, massage therapy benefits, and premium spa experiences designed for relaxation and rejuvenation.
</p>

    <div className="grid md:grid-cols-3 gap-5 lg:gap-6">

      {/* BLOG 1 */}
      <div className="group relative overflow-hidden bg-[#fffdf9] border border-stone-200/80 rounded-[30px] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">

        <Image
           src="/images/blog/best-spa-gomti-nagar.avif"
           alt="Best Spa in Gomti Nagar Lucknow"
           width={800}
           height={500}
           quality={40}
           className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
         />
         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">

  <div className="absolute -top-24 -left-24 w-56 h-56 bg-white/40 blur-3xl rotate-12"></div>

  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-amber-100/20"></div>

</div>

        <div className="p-8">

          <h4 className="font-serif text-[30px] tracking-[-0.02em] text-stone-900 leading-tight mb-4">
            Best Spa in Gomti Nagar Lucknow
          </h4>

          <p className="text-stone-600 leading-relaxed mb-6">
            Discover luxury wellness therapies, private spa rooms,
            and premium relaxation experiences at Relaxio Spa.
          </p>

          <Link
            href="/blog/best-spa-in-gomti-nagar"
            className="inline-flex items-center justify-center border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-200 px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em]"
          >
            Read Article
          </Link>

        </div>
      </div>

      {/* BLOG 2 */}
      <div className="group relative overflow-hidden bg-[#fffdf9] border border-stone-200/80 rounded-[30px] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">

        <Image
           src="/images/blog/deep-tissue-massage.avif"
           alt="Deep Tissue Massage Benefits"
           width={800}
           height={500}
           quality={40}
           className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
         />
         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">

  <div className="absolute -top-24 -left-24 w-56 h-56 bg-white/40 blur-3xl rotate-12"></div>

  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-amber-100/20"></div>

</div>

        <div className="p-8">

          <h4 className="font-serif text-[30px] tracking-[-0.02em] text-stone-900 leading-tight mb-4">
            Deep Tissue Massage Benefits
          </h4>

          <p className="text-stone-600 leading-relaxed mb-6">
            Learn how deep tissue massage helps improve muscle recovery,
            relaxation, and stress relief experiences.
          </p>

          <Link
            href="/blog/deep-tissue-massage-benefits"
            className="inline-flex items-center justify-center border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-200 px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em]"
          >
            Read Article
          </Link>

        </div>
      </div>

      {/* BLOG 3 */}
      <div className="group relative overflow-hidden bg-[#fffdf9] border border-stone-200/80 rounded-[30px] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">

        <Image
          src="/images/blog/thai-massage.avif"
          alt="Benefits of Thai Massage"
          width={800}
          height={500}
          quality={40}
          loading="lazy"
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">

           <div className="absolute -top-24 -left-24 w-56 h-56 bg-white/40 blur-3xl rotate-12"></div>

            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-amber-100/20"></div>

         </div>

        <div className="p-8">

          <h4 className="font-serif text-[30px] tracking-[-0.02em] text-stone-900 leading-tight mb-4">
            Benefits of Thai Massage
          </h4>

          <p className="text-stone-600 leading-relaxed mb-6">
            Explore wellness benefits of Thai massage including
            flexibility improvement and stress relief.
          </p>

          <Link
            href="/blog/thai-massage-benefits"
            className="inline-flex items-center justify-center border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 hover:shadow-lg px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em]"
          >
            Read Article
          </Link>

        </div>
      </div>

    </div>

  </div>

</section>

<div className="mt-24">
  <FAQ faqs={faqs} />
</div>
</main>
</>
);
}
