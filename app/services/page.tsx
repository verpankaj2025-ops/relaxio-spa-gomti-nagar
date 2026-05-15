import type { Metadata } from 'next';
import { faqsData } from '@/lib/faqs';
import Image from 'next/image';
import Link from 'next/link';
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: 'Luxury Spa Services in Gomti Nagar Lucknow | Relaxio Spa',
  description: 'Explore luxury wellness therapies at Relaxio Spa including Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Massage, Jacuzzi, and Steam Bath in Gomti Nagar Lucknow.',

alternates: {
  canonical: '/services',
},

openGraph: {
  title: 'Luxury Wellness Therapies | Relaxio Spa',
  description:
    'Explore luxury wellness therapies at Relaxio Spa including Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Massage, Jacuzzi, and Steam Bath in Gomti Nagar Lucknow.',
  url: 'https://relaxiospa.in/services',
  siteName: 'Relaxio Spa',
  locale: 'en_IN',
  type: 'website',
},
};


export default async function ServicesPage() {

  const servicesFaqs = faqsData.services;

  return (
    <>
    <div className="pt-28 pb-20 md:pt-32 md:pb-24 bg-stone-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-6">Our Premium Therapies</h1>
          <p className="text-stone-600 sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Discover the perfect treatment for your body and mind. Our certified therapists customize each session to your specific needs.
          </p>
        </div>

        <div className="space-y-24">
          {/* Deep Tissue */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
              <Image 
                src="/images/deep-tissue-massage-gomti-nagar-lucknow.avif"
                alt="Deep tissue wellness therapy at Relaxio Spa"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-4">Deep Tissue Massage</h2>
              <p className="text-stone-600 mb-6 font-light leading-relaxed">
                Designed to relieve severe tension in the muscle and the connective tissue or fascia. This type of massage focuses on the muscles located below the surface of the top muscles. Perfect for individuals who experience consistent pain, are involved in heavy physical activity, or have sustained physical injury.
              </p>
              <ul className="space-y-3 mb-8 font-light text-stone-700">
                <li>✓ Relieves chronic muscle tension</li>
                <li>✓ Improves blood pressure</li>
                <li>✓ Breaks up scar tissue</li>
                <li>✓ Rehabilitates injured muscles</li>
              </ul>
              <Link href="/services/deep-tissue-massage" className="inline-block border-b-2 border-amber-500 text-amber-600 pb-1 hover:text-amber-500 hover:border-amber-400 transition-colors uppercase tracking-widest text-sm font-medium">
                Learn More & Book
              </Link>
            </div>
          </div>

          {/* Balinese */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-serif text-stone-900 mb-4">Balinese Massage</h2>
              <p className="text-stone-600 mb-6 font-light leading-relaxed">
                A full-body, deep-tissue, holistic treatment. Balinese massage uses a combination of gentle stretches, acupressure, reflexology, and aromatherapy to stimulate the flow of blood, oxygen, and &quot;qi&quot; (energy) around your body, bringing a sense of wellbeing, calm, and deep relaxation.
              </p>
              <ul className="space-y-3 mb-8 font-light text-stone-700">
                <li>✓ Deep relaxation and stress relief</li>
                <li>✓ Improves circulation</li>
                <li>✓ Relieves joint pain</li>
                <li>✓ Boosts mood with aromatherapy</li>
              </ul>
              <Link href="/services/balinese-massage" className="inline-block border-b-2 border-amber-500 text-amber-600 pb-1 hover:text-amber-500 hover:border-amber-400 transition-colors uppercase tracking-widest text-sm font-medium">
                Learn More & Book
              </Link>
            </div>
            <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
         <Image 
           src="/images/balinese-massage-gomti-nagar-lucknow.avif"
           alt="Luxury Balinese massage therapy at Relaxio Spa"
           fill
           className="object-cover"
           loading="lazy"
/>
            </div>
          </div>

          {/* Thai Massage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
              <Image 
                 src="/images/thai-massage-gomti-nagar-lucknow.avif"
                 alt="Relaxing Thai massage therapy at Relaxio Spa"
                 fill
                 className="object-cover"
                 loading="lazy"
               />
            </div>
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-4">Thai Massage</h2>
              <p className="text-stone-600 mb-6 font-light leading-relaxed">
                An ancient healing system combining acupressure, Indian Ayurvedic principles, and assisted yoga postures. Unlike traditional massages, Thai massage doesn&apos;t use oils or lotions, and you remain fully clothed. The therapist uses their hands, knees, legs, and feet to move you into a series of yoga-like stretches.
              </p>
              <ul className="space-y-3 mb-8 font-light text-stone-700">
                <li>✓ Increases flexibility and range of motion</li>
                <li>✓ Relieves headaches and back pain</li>
                <li>✓ Boosts energy levels</li>
                <li>✓ Reduces stress and anxiety</li>
              </ul>
              <Link href="/services/thai-massage" className="inline-block border-b-2 border-amber-500 text-amber-600 pb-1 hover:text-amber-500 hover:border-amber-400 transition-colors uppercase tracking-widest text-sm font-medium">
                Learn More & Book
              </Link>
            </div>
          </div>
          {/* Couple Massage */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

  <div>
    <h2 className="text-3xl font-serif text-stone-900 mb-4">
      Couple Massage
    </h2>

    <p className="text-stone-600 mb-6 font-light leading-relaxed">
      Enjoy a romantic and relaxing couple massage experience in Gomti Nagar Lucknow with private luxury rooms and expert therapists.
    </p>

    <ul className="space-y-3 mb-8 font-light text-stone-700">
      <li>✓ Private luxury spa room</li>
      <li>✓ Relaxing ambiance</li>
      <li>✓ Aromatherapy oils</li>
      <li>✓ Perfect for couples</li>
    </ul>

    <Link
      href="/services/couple-massage"
      className="inline-block border-b-2 border-amber-500 text-amber-600 pb-1 hover:text-amber-500 hover:border-amber-400 transition-colors uppercase tracking-widest text-sm font-medium"
    >
      Learn More & Book
    </Link>
  </div>

  <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
    <Image
      src="/images/couple-massage-lucknow.avif"
      alt="Private couple wellness experience at Relaxio Spa"
      fill
      className="object-cover"
      loading="lazy"
    />
        </div>
        </div>
        
{/* Jacuzzi & Steam Bath */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

  <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
    <Image
      src="/images/jacuzzi-steam-bath-lucknow.avif"
      alt="Luxury jacuzzi and steam bath experience at Relaxio Spa"
      fill
      className="object-cover"
      loading="lazy"
    />
  </div>

  <div>
    <h2 className="text-3xl font-serif text-stone-900 mb-4">
      Jacuzzi & Steam Bath
    </h2>

    <p className="text-stone-600 mb-6 font-light leading-relaxed">
      Detox and relax your body with premium Jacuzzi and Steam Bath sessions at Relaxio Spa Gomti Nagar Lucknow.
    </p>

    <ul className="space-y-3 mb-8 font-light text-stone-700">
      <li>✓ Detoxifies the body</li>
      <li>✓ Improves blood circulation</li>
      <li>✓ Relieves stress & fatigue</li>
      <li>✓ Luxury spa experience</li>
    </ul>

    <Link
      href="/services/spa-facilities"
      className="inline-block border-b-2 border-amber-500 text-amber-600 pb-1 hover:text-amber-500 hover:border-amber-400 transition-colors uppercase tracking-widest text-sm font-medium"
    >
      Learn More & Book
    </Link>
  </div>

                    </div>
                    </div>

        {/* 👇 FAQ SECTION */}
        <div className="mt-24">
          <FAQ faqs={servicesFaqs} />
        </div>

      </div>
    </div>
  </>
);
}