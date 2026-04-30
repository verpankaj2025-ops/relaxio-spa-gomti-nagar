import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { getFAQSchema } from '@/lib/seo';
import FadeIn from '@/components/ui/FadeIn';
import {
  Star,
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

const FAQ = dynamic(() => import('@/components/FAQ'));

export const metadata: Metadata = {
  title: "Best Spa in Gomti Nagar Lucknow | Relaxio Spa",

  description:
    "Relaxio Spa offers Thai, Balinese, Deep Tissue and Couple Massage in Gomti Nagar Lucknow. Book your spa session now.",

  alternates: {
    canonical: "https://relaxiospa.in",
  },

  openGraph: {
    title: "Best Spa in Gomti Nagar Lucknow | Relaxio Spa",

    description:
      "Relaxio Spa offers Thai, Balinese, Deep Tissue and Couple Massage in Gomti Nagar Lucknow.",

    url: "https://relaxiospa.in",

    siteName: "Relaxio Spa",

    images: [
      {
        url: "https://relaxiospa.in/images/luxury-spa-gomti-nagar-lucknow.webp",
        width: 1200,
        height: 630,
        alt: "Relaxio Spa Gomti Nagar Lucknow",
      },
    ],

    locale: "en_IN",
    type: "website",
  },
};

export const revalidate = 3600;
async function getFAQs() {
  try {
    const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const res = await fetch(`${baseUrl}/api/faqs`, {
  next: { revalidate: 3600 },
});

    return res.json();
  } catch (error) {
    console.error("FAQ fetch error:", error);
    return [];
  }
}

export default async function Home() {
  const allFaqs = (await getFAQs()) || [];
const faqs = Array.isArray(allFaqs)
  ? allFaqs.filter(
      (f) => f.page?.toLowerCase().trim() === "home"
    )
  : [];

  const reviews = [
    { author: 'Priya S.', rating: 5, reviewBody: 'Absolutely the best spa in Gomti Nagar. The Balinese massage was incredibly relaxing. The hygiene and ambiance are top-notch.' },
    { author: 'Rahul M.', rating: 5, reviewBody: 'I had severe back pain and opted for the Deep Tissue massage. The therapist was highly skilled. Highly recommended!' },
    { author: 'Anjali & Vikram', rating: 5, reviewBody: 'We booked a couple\'s session for our anniversary. The private room, the oils, the service—everything felt like a 5-star luxury hotel.' }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
   <Image 
  src="/images/luxury-spa-gomti-nagar-lucknow.webp"
  alt="Luxury spa in Gomti Nagar Lucknow Relaxio Spa premium massage room" 
  fill 
  sizes="100vw"
  quality={75}
  placeholder="blur"
  className="object-cover"
  priority
/>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        
           <div 
             className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
            <span className="text-[#ffd369] tracking-[0.3em] uppercase text-sm font-medium mb-6 block">
              Welcome to Relaxio Spa
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white mb-4">
                  Best Spa in Gomti Nagar Lucknow
                  <br />
                  </h1>

                 <h2 className="text-lg md:text-2xl text-stone-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                      Experience the ultimate luxury massage spa in Lucknow. Relax, Rejuvenate, and Recharge with our premium therapies.
                   </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20a%20massage." 
                 className="px-10 py-4 bg-[#d4af37] text-stone-900 rounded-full hover:bg-[#c19b2e] transition-colors duration-300 text-sm uppercase tracking-widest font-medium shadow-lg w-full sm:w-auto">
                Book Now
              </a>
              <a href="tel:+917081891995" 
                 className="px-10 py-4 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-stone-900 transition-colors duration-300 text-sm uppercase tracking-widest font-medium w-full sm:w-auto">
                Call Now
              </a>
            </div>

        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-32 bg-[#fdfbf7] content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-[#f2cc60] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Our Offerings</span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Premium Body Massage Near Me</h2>
              <div className="w-20 h-0.5 bg-[#d4af37] mx-auto"></div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Deep Tissue Massage Lucknow',
                desc: 'Perfect for chronic pain relief and releasing deep muscle tension. The best deep tissue massage in Gomti Nagar.',
                img: '/images/deep-tissue-massage-gomti-nagar-lucknow.webp',
                alt: 'Deep tissue massage in Gomti Nagar Lucknow for pain relief at Relaxio Spa',
                link: '/services/deep-tissue-massage',
                cta: 'Book Deep Tissue'
              },
              {
                title: 'Balinese Massage Lucknow',
                desc: 'A holistic, full-body treatment combining acupressure and aromatherapy for ultimate relaxation.',
                img: '/images/balinese-massage-gomti-nagar-lucknow.webp',
                alt: 'Balinese massage in Gomti Nagar Lucknow with aromatherapy at Relaxio Spa',
                link: '/services/balinese-massage',
                cta: 'Relax with Balinese'
              },
              {
                title: 'Thai Massage Lucknow',
                desc: 'An active therapy that improves flexibility and energy flow. Experience authentic Thai massage in Lucknow.',
                img: '/images/thai-massage-gomti-nagar-lucknow.webp',
                alt: 'Thai massage in Gomti Nagar Lucknow with stretching therapy at Relaxio Spa',
                link: '/services/thai-massage',
                cta: 'Try Thai Massage'
              },
              {
  title: 'Couple Massage Lucknow',
  desc: 'Enjoy a romantic couple massage in Gomti Nagar with private rooms, expert therapists and luxury ambience.',
  img: '/images/couple-massage-lucknow.webp',
  alt: 'Couple massage in Gomti Nagar Lucknow with private spa room at Relaxio Spa',
  link: '/services/couple-massage',
  cta: 'Book Couple Spa'
},
{
  title: 'Jacuzzi & Steam Bath Lucknow',
  desc: 'Relax with jacuzzi and steam bath in Gomti Nagar for complete detox and luxury spa experience.',
  img: '/images/jacuzzi-steam-bath-lucknow.webp',
  alt: 'Jacuzzi and steam bath spa in Gomti Nagar Lucknow at Relaxio Spa',
  link: '/services/spa-facilities',
  cta: 'Relax in Jacuzzi'
},
            ].map((service) => (
              
                <Link
                    key={service.title}
                    href={service.link} 
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-stone-100">
                  <div className="relative h-96 overflow-hidden">
                    <Image 
                      src={service.img} 
                      alt={service.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={65}
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                  <div className="p-8 text-center relative bg-white -mt-10 mx-6 rounded-xl shadow-lg group-hover:-translate-y-1 transition-transform duration-500">
                    <h3 className="text-2xl font-serif mb-3 text-stone-900 group-hover:text-[#f2cc60] transition-colors">{service.title}</h3>
                    <p className="text-stone-600 font-light mb-6 min-h-[72px]">{service.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-[#f2cc60]">
                     {service.cta}
                     <ArrowRight size={16} />
                     </span>
                  </div>
                </Link>
              
            ))}
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS SECTION */}
      <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Image 
  src="/images/spa-texture-gomti-nagar.webp" 
  alt="Relaxio Spa Gomti Nagar Lucknow ambiance luxury spa background" 
  fill 
  sizes="100vw"
  quality={40}
  className="object-cover"
/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-[#f2cc60] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Guest Experiences</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                     What Our Clients Say
                </h2>

              <div className="w-20 h-0.5 bg-[#d4af37] mx-auto"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
                <div
                    key={review.author}
                    className="bg-stone-800/50 p-10 rounded-2xl border border-stone-700/50 hover:border-[#d4af37]/50 transition-colors duration-300 h-full flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={20} className="fill-[#d4af37] text-[#f2cc60]" />
                    ))}
                  </div>
                  <p className="text-stone-300 font-light text-lg leading-relaxed mb-8 flex-grow italic">
                    &quot;{review.reviewBody}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-stone-700 rounded-full flex items-center justify-center text-[#f2cc60] font-serif text-xl">
                      {review.author.charAt(0)}
                    </div>
                    <span className="font-medium tracking-wide">{review.author}</span>
                  </div>
                </div>
              
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRICING SECTION */}
      <section className="py-32 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-[#f2cc60] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Transparent Pricing</span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
                Massage Spa Packages in Lucknow
             </h2>

            <div className="w-20 h-0.5 bg-[#d4af37] mx-auto"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Basic */}
            
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-stone-100 text-center">
                <h3 className="text-2xl font-serif text-stone-900 mb-2">Relaxation</h3>
                <p className="text-stone-500 font-light mb-8">60 Minutes Session</p>
                <div className="text-4xl font-serif text-stone-900 mb-8">₹2,499</div>
                <ul className="space-y-4 mb-10 text-stone-600 font-light">
                  <li>Choice of Swedish or Balinese</li>
                  <li>Premium Essential Oils</li>
                  <li>Shower Facility</li>
                </ul>
                <a href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20the%20Relaxation%20package." className="block w-full py-4 border border-stone-900 text-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition-colors uppercase tracking-widest text-sm font-medium">
                  Book Now
                </a>
              </div>
            

            {/* Premium (Highlighted) */}
            
              <div className="bg-stone-900 p-12 rounded-2xl shadow-2xl border border-[#d4af37] text-center relative md:-translate-y-2">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-stone-900 px-6 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium">
                  Most Popular
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
                <a href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20the%20Deep%20Healing%20package." className="block w-full py-4 bg-[#d4af37] text-stone-900 rounded-full hover:bg-[#c19b2e] transition-colors uppercase tracking-widest text-sm font-medium shadow-lg">
                  Book Now
                </a>
              </div>
            

            {/* Couple */}
            
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-stone-100 text-center">
                <h3 className="text-2xl font-serif text-stone-900 mb-2">Couple&apos;s Retreat</h3>
                <p className="text-stone-500 font-light mb-8">90 Minutes Session</p>
                <div className="text-4xl font-serif text-stone-900 mb-8">₹6,499</div>
                <ul className="space-y-4 mb-10 text-stone-600 font-light">
                  <li>Private Couple&apos;s Suite</li>
                  <li>Any Massage of Choice</li>
                  <li>Aromatherapy & Rose Petals</li>
                  <li>Private Shower Facility</li>
                </ul>
                <a href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20the%20Couples%20Retreat." className="block w-full py-4 border border-stone-900 text-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition-colors uppercase tracking-widest text-sm font-medium">
                  Book Now
                </a>
              </div>
            
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">

    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
      Why Relaxio is the Best Spa in Gomti Nagar Lucknow
    </h2>

    <p className="text-stone-600 max-w-2xl mx-auto mb-12 leading-relaxed">
      Relaxio Spa is a premium luxury spa in Gomti Nagar Lucknow offering Thai, Balinese, Deep Tissue and Couple massage. Our trained therapists, hygienic private rooms and relaxing ambience make us the best body massage spa near you.
    </p>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="p-6 bg-[#fdfbf7] rounded-xl text-center border border-stone-100">
  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
    <ShieldCheck className="text-[#f2cc60]" size={28} />
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
    <BedDouble className="text-[#f2cc60]" size={28} />
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
    <Sparkles className="text-[#f2cc60]" size={28} />
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
    <MessageCircle className="text-[#f2cc60]" size={28} />
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
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
              <div>
                <span className="text-[#f2cc60] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Find Us</span>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-10">Visit Our Sanctuary in Gomti Nagar</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#fdfbf7] rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="text-[#f2cc60]" size={24} />
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
                      <Clock className="text-[#f2cc60]" size={24} />
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
                      <Phone className="text-[#e0b94b]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-stone-900 mb-2">Contact</h3>
                      <p className="text-stone-600 font-light leading-relaxed">
                        +91 7081891995<br />
                        info@relaxiospa.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            

            
  <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-xl relative">

    {/* 👇 CLICKABLE OVERLAY */}
    <a
  href="https://www.google.com/maps/dir/?api=1&destination=26.8553677,80.9985092"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Open Relaxio Spa location in Google Maps"
  className="absolute inset-0 z-10"
></a>

    {/* 👇 MAP */}
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5152049774847!2d80.9985092!3d26.855367700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be336e4d8fa9f%3A0x6a5eb278f8c99c28!2sRelaxio%20Spa%20Gomti%20Nagar%20Lucknow!5e0!3m2!1sen!2sin!4v1776642592306!5m2!1sen!2sin"
      width="100%" 
      height="100%" 
      style={{ border: 0, opacity: 0.9 }} 
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Relaxio Spa Location in Gomti Nagar Lucknow"
      className="pointer-events-none"
    />
    
  </div>

          </div>
        </div>
      </section>

      <div className="mt-16">
  <FAQ faqs={faqs} />
</div>
      
    </>
  );
}
