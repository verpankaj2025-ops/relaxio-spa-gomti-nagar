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
  title: 'Deep Tissue Wellness Therapy | Relaxio Spa',
  description:
    'Experience deep tissue massage therapy designed to reduce muscle tension, improve flexibility, and support full-body recovery at Relaxio Spa.',
  alternates: {
  canonical: 'https://relaxiospa.in/services/deep-tissue-massage',
  },
  openGraph: {
    title: 'Deep Tissue Wellness Therapy | Relaxio Spa',
    description:
     'Experience deep tissue massage therapy designed to reduce muscle tension, improve flexibility, and support full-body recovery at Relaxio Spa.',
    url: 'https://relaxiospa.in/services/deep-tissue-massage',
    images: ['https://relaxiospa.in/images/deep-tissue-massage-gomti-nagar-lucknow.avif']
  }
};

export default async function DeepTissueMassagePage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Deep Tissue Massage', item: '/services/deep-tissue-massage' }
  ];

  const allFaqs = (await getFAQs()) || [];

const faqs = Array.isArray(allFaqs)
  ? allFaqs.filter(
      (f) => f.page?.toLowerCase().trim() === "deep-tissue"
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
  title="Deep Tissue Massage in Gomti Nagar Lucknow"
  subtitle="Firm-pressure wellness therapy designed to release muscle tightness, improve mobility, and support body recovery."
  image="/images/deep-tissue-massage-gomti-nagar-lucknow.avif"
  alt="Deep tissue wellness therapy at Relaxio Spa"
/>

      {/* Main Content */}
      <section className="pt-20 pb-10 bg-[#fdfbf7] content-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-stone prose-base md:prose-lg max-w-none font-light text-stone-700">
              <h2 
               className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">What Is Deep Tissue Massage?</h2>
              <p className="mb-6 leading-relaxed">
                Deep tissue massage is designed for people experiencing muscle tightness, body stiffness, post-workout fatigue, and restricted movement caused by physical stress.
              </p>
              <p className="mb-10 leading-relaxed">
                Unlike a standard relaxation massage, deep tissue therapy uses slow, deliberate strokes and firm pressure. Our highly trained therapists focus on the inner layers of your muscles, tendons, and fascia. By physically breaking down adhesions (bands of painful, rigid tissue), this massage restores normal movement and helps reduce physical discomfort.
              </p>

            <FadeIn>
              <div 
                className="my-16 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/deep-tissue-massage-gomti-nagar-lucknow-spa.avif"
                  alt="Deep tissue wellness therapy at Relaxio Spa"
                  fill
                  className="object-cover brightness-95"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  quality={80}
                  loading="lazy"
                />
              </div>
            </FadeIn>

              <h2 
               className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">Why You Need a Deep Tissue Massage</h2>
              <p 
                className="mb-6 leading-relaxed">
                Many guests choose deep tissue massage to reduce muscle tightness, improve mobility, and support post-workout body recovery. This therapy is especially helpful for people with physically demanding routines or long hours of sitting.</p>
                <div 
                 className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  "Helps reduce everyday muscle tension",
                  "Breaks up scar tissue and muscle adhesions",
                  "Supports muscle recovery after physical activity",
                  "Improves posture by releasing tight muscle groups",
                  "Flushes out toxins and lactic acid buildup",
                  "Increases joint mobility and flexibility",
                  "Supports post-workout body recovery",
                  "Encourages overall physical relaxation",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#d4af37] shrink-0 mt-1" size={20} 
                    />
                    <span 
                     className="text-stone-700">{benefit}</span>
                    </div>
                   ))}
                  </div>

              <h2 
               className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
               Why Guests Choose Our Deep Tissue Therapy
              </h2>
              <p className="mb-6 leading-relaxed">
                Performing a deep tissue massage requires extensive anatomical knowledge and physical skill. At Relaxio Spa, our therapists are certified experts in deep tissue modalities. We don&apos;t just apply hard pressure; we apply <em>smart</em> pressure, targeting the exact source of your discomfort.
              </p>
              <p className="mb-10 leading-relaxed">
                We combine firm-pressure massage techniques with a calm wellness environment to create a balanced and deeply relaxing recovery experience.
              </p>

              <PricingSection
  title="Deep Tissue Massage Pricing"
  description="Professional deep tissue wellness therapy designed to reduce muscle tension, improve mobility, and support full-body recovery in Gomti Nagar Lucknow."
  buttonText="Book Deep Tissue Massage"
  whatsappMessage="Hi Relaxio Spa, I want Deep Tissue Massage. (Source: Deep Tissue Page)"
  packages={[
    {
      name: "Targeted Relief",
      duration: "60 Minutes Therapy",
      price: "₹2,999",
    },
    {
      name: "Full Body Recovery",
      duration: "90 Minutes Therapy",
      price: "₹3,999",
      popular: true,
    },
    {
      name: "Ultimate Overhaul",
      duration: "120 Minutes Therapy",
      price: "₹4,999",
    },
  ]}
/>

<ExploreMore
  therapies={[
    {
      title: "Thai Massage",
      href: "/services/thai-massage",
      description:
        "Traditional stretching therapy designed for flexibility, deep relaxation, and body recovery.",
    },
    {
      title: "Balinese Massage",
      href: "/services/balinese-massage",
      description:
        "Aromatherapy-based wellness therapy focused on stress relief and peaceful relaxation.",
    },
    {
      title: "Couple Massage",
      href: "/services/couple-massage",
      description:
        "Luxury private spa experience for couples with calming ambience and wellness therapies.",
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
