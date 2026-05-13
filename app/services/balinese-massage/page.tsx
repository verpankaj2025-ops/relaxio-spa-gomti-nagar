import ServiceHero from "@/components/services/ServiceHero";
import Image from 'next/image';
import Link from "next/link";
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';
import FAQ from "@/components/FAQ";
import FadeIn from '@/components/ui/FadeIn';
import { CheckCircle2 } from 'lucide-react';

async function getFAQs() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/faqs`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("FAQ fetch error:", error);
    return [];
  }
}

export const metadata = {
  title: 'Balinese Massage Therapy | Relaxio Spa',
  description:
    'Experience relaxing Balinese massage therapy with aromatherapy, gentle pressure techniques, and deep wellness relaxation at Relaxio Spa.',
  alternates: {
    canonical: 'https://relaxiospa.in/services/balinese-massage',
  },
  openGraph: {
    title: 'Balinese Massage Therapy | Relaxio Spa',
    description:
  'Experience relaxing Balinese massage therapy with aromatherapy, gentle pressure techniques, and deep wellness relaxation at Relaxio Spa.',
    url: 'https://relaxiospa.in/services/balinese-massage',
    images: ['https://relaxiospa.in/images/balinese-massage-gomti-nagar-lucknow.avif']
  }
};

export default async function BalineseMassagePage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Balinese Massage', item: '/services/balinese-massage' }
  ];

  const allFaqs = (await getFAQs()) || [];

const faqs = Array.isArray(allFaqs)
  ? allFaqs.filter(
      (f) => f.page?.toLowerCase().trim() === "balinese"
    )
  : [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
      />
      
      {/* Hero Section */}
          <ServiceHero
            title="Balinese Massage in Gomti Nagar Lucknow"
            subtitle="Aromatherapy-based wellness therapy designed to relax the body, calm the mind, and reduce everyday stress."
            image="/images/balinese-massage-gomti-nagar-lucknow.avif"
            alt="Luxury Balinese massage therapy at Relaxio Spa"
          />

      {/* Main Content */}
          <section className="pt-28 pb-24 bg-[#fdfbf7] content-auto">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-stone prose-base md:prose-lg max-w-none font-light text-stone-700">

              <h2 
                className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
                Incredible Benefits of Balinese Massage
               </h2>
              <p className="mb-6 leading-relaxed">
              Balinese massage combines aromatherapy, gentle stretching, and pressure techniques to create a deeply calming wellness experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  "Deeply relaxes the mind and reduces anxiety",
                  "Relieves muscle tension and joint pain",
                  "Improves blood circulation and heart rate",
                  "Enhances sleep quality and cures insomnia",
                  "Nourishes the skin with premium essential oils",
                  "Boosts the immune system and lymphatic drainage",
                  "Restores the body's natural energy balance",
                  "Alleviates symptoms of depression and stress"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#d4af37] shrink-0 mt-1" size={20} />
                  <span className="text-stone-700">{benefit}</span>
                  </div>
                ))}
              </div>
                     <FadeIn>
  <div className="my-16 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">

               <Image 
                   src="/images/balinese-massage-gomti-nagar-lucknow-spa.avif"
                   alt="Luxury Balinese massage therapy at Relaxio Spa"
                   fill
                   sizes="(max-width: 768px) 100vw, 1200px"

                   className="object-cover brightness-95"
                   loading="lazy"
                 />
              </div>
              </FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
                 Why Guests Love Our Balinese Therapy
              </h2>
              <p className="mb-6 leading-relaxed">
                At Relaxio Spa, we focus on creating a peaceful and comfortable wellness environment that supports deep relaxation and stress recovery.
              </p>
              <p className="mb-10 leading-relaxed">
                 Our therapists are certified experts in Balinese techniques. They understand how to identify body tension points and adjust pressure according to your comfort level. We maintain high hygiene standards using fresh premium-quality linens and sanitized equipment for every guest. Experience the pinnacle of wellness and discover why Relaxio Spa is known as a premium wellness destination.
              </p>

              <div className="bg-white/95 backdrop-blur-sm p-6 md:p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-stone-100 my-16 max-w-6xl mx-auto">
                <h2 className="font-serif text-3xl text-stone-900 mb-8 text-center">Balinese Massage Pricing</h2>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-stone-100 pb-6">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">Serenity Session</h4>
                      <p className="text-stone-500 text-sm">60 Minutes</p>
                    </div>
                    <div className="text-2xl font-serif text-[#d4af37]">₹2,499</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-100 pb-6">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">Deep Relaxation (Recommended)</h4>
                      <p className="text-stone-500 text-sm">90 Minutes</p>
                    </div>
                    <div className="text-2xl font-serif text-[#d4af37]">₹3,499</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">The Royal Balinese</h4>
                      <p className="text-stone-500 text-sm">120 Minutes</p>
                    </div>
                    <div className="text-2xl font-serif text-[#d4af37]">₹4,499</div>
                  </div>
                </div>
                <div className="mt-10 text-center">
                  <a 
                    href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20a%20Balinese%20Massage."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book Balinese Massage Appointment" 
                    className="inline-block px-10 py-4 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors duration-300 text-sm uppercase tracking-widest font-medium w-full md:w-auto">
                    Book Your Appointment
                  </a>
                </div>
              </div>

              <section className="mt-24">
  <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-10">
    Explore More Wellness Therapies
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <Link
      href="/services/thai-massage"
      className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-[#d4af37] hover:shadow-lg transition-all"
    >
      <h3 className="text-2xl font-serif text-stone-900 mb-4">
        Thai Massage
      </h3>

      <p className="text-stone-600 leading-relaxed">
        Traditional stretching and pressure-based therapy designed to improve flexibility and body relaxation.
      </p>
    </Link>

    <Link
      href="/services/deep-tissue-massage"
      className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-[#d4af37] hover:shadow-lg transition-all"
    >
      <h3 className="text-2xl font-serif text-stone-900 mb-4">
        Deep Tissue Massage
      </h3>

      <p className="text-stone-600 leading-relaxed">
        Deep pressure therapy focused on muscle recovery, stiffness reduction, and chronic tension relief.
      </p>
    </Link>

    <Link
      href="/services/couple-massage"
      className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-[#d4af37] hover:shadow-lg transition-all"
    >
      <h3 className="text-2xl font-serif text-stone-900 mb-4">
        Couple Massage
      </h3>

      <p className="text-stone-600 leading-relaxed">
        Enjoy a relaxing private spa experience for couples with premium wellness therapies and peaceful ambiance.
      </p>
    </Link>

  </div>
</section>

                <div className="mt-16">
                   <FAQ faqs={faqs} />
                </div>

          </div>
        </div>
      </section>
    </>
  );
}
