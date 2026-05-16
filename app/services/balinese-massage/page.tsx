import ServiceHero from "@/components/services/ServiceHero";
import Image from 'next/image';
import Link from "next/link";
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';
import FAQ from "@/components/FAQ";
import FadeIn from '@/components/ui/FadeIn';
import { CheckCircle2 } from 'lucide-react';
import PricingSection from "@/components/services/PricingSection";
import ExploreMore from "@/components/services/ExploreMore";

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
                className="font-serif text-3xl md:text-amber-700xl text-stone-900 mb-6">
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
              <h2 className="font-serif text-3xl md:text-amber-700xl text-stone-900 mb-6">
                 Why Guests Love Our Balinese Therapy
              </h2>
              <p className="mb-6 leading-relaxed">
                At Relaxio Spa, we focus on creating a peaceful and comfortable wellness environment that supports deep relaxation and stress recovery.
              </p>
              <p className="mb-10 leading-relaxed">
                 Our therapists are certified experts in Balinese techniques. They understand how to identify body tension points and adjust pressure according to your comfort level. We maintain high hygiene standards using fresh premium-quality linens and sanitized equipment for every guest. Experience the pinnacle of wellness and discover why Relaxio Spa is known as a premium wellness destination.
              </p>

              <PricingSection
  title="Balinese Massage Packages"
  description="Luxury Balinese massage therapy with aromatherapy oils, stress relief techniques, and deep relaxation wellness experience in Gomti Nagar Lucknow."
  buttonText="Book Balinese Massage"
  whatsappMessage="Hi Relaxio Spa, I want Balinese Massage. (Source: Balinese Page)"
  packages={[
    {
      name: "Relaxation Therapy",
      duration: "60 Minutes Therapy",
      price: "₹2,499",
    },
    {
      name: "Signature Balinese",
      duration: "90 Minutes Therapy",
      price: "₹3,499",
      popular: true,
    },
    {
      name: "Royal Wellness Ritual",
      duration: "120 Minutes Therapy",
      price: "₹4,499",
    },
  ]}
/>

              <ExploreMore
  therapies={[
    {
      title: "Thai Massage",
      href: "/services/thai-massage",
      description:
        "Traditional stretching therapy designed for flexibility and deep body relaxation.",
    },
    {
      title: "Deep Tissue Massage",
      href: "/services/deep-tissue-massage",
      description:
        "Firm-pressure wellness therapy focused on muscle recovery and stiffness relief.",
    },
    {
      title: "Jacuzzi & Steam Bath",
      href: "/services/spa-facilities",
      description:
        "Luxury Jacuzzi and steam wellness sessions designed for relaxation and rejuvenation.",
    },
  ]}
/>

                <div className="mt-16">
                   <FAQ faqs={faqs} />
                </div>

          </div>
        </div>
      </section>
    </>
  );
}
