import ServiceHero from "@/components/services/ServiceHero";
import Image from "next/image";
import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import FadeIn from "@/components/ui/FadeIn";
import { CheckCircle2 } from "lucide-react";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";
import PricingSection from "@/components/services/PricingSection";
import ExploreMore from "@/components/services/ExploreMore";


export const metadata: Metadata = {
  title: "Luxury Jacuzzi & Steam Bath Experience | Relaxio Spa",
  description:
    "Relax and recharge with premium Jacuzzi and Steam Bath wellness sessions at Relaxio Spa in Gomti Nagar Lucknow.",
  keywords: [
  "Jacuzzi Lucknow",
  "Steam Bath Lucknow",
  "Luxury Spa Facilities",
  "Wellness Spa",
],
  alternates: {
    canonical: "/services/spa-facilities",
  },
  openGraph: {
    title: "Jacuzzi & Steam Bath in Gomti Nagar Lucknow | Relaxio Spa",
    description:
  "Relax and recharge with premium Jacuzzi and Steam Bath wellness sessions at Relaxio Spa in Gomti Nagar Lucknow.",
    url: "/services/spa-facilities",
    images: [
  {
    url: "https://relaxiospa.in/images/jacuzzi-steam-bath-lucknow.avif",
    width: 1200,
    height: 630,
    alt: "Jacuzzi and Steam Bath at Relaxio Spa",
  },
],
  },
};

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

export default async function SpaFacilitiesPage() {
  const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Services", item: "/services" },
  { name: "Spa Facilities", item: "/services/spa-facilities" },
];
  const allFaqs = (await getFAQs()) || [];

  const faqs = Array.isArray(allFaqs)
    ? allFaqs.filter(
        (f) => f.page?.toLowerCase().trim() === "spa-facilities"
      )
    : [];

  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
  }}
/>

{faqs.length > 0 && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(getFAQSchema(faqs)),
    }}
  />
)}

<ServiceHero
  title="Jacuzzi & Steam Bath in Gomti Nagar Lucknow"
  subtitle="Relax your body and mind with premium Jacuzzi and Steam Bath sessions at Relaxio Spa."
  image="/images/jacuzzi-steam-bath-lucknow.avif"
  alt="Luxury jacuzzi and steam bath experience at Relaxio Spa"
/>

      {/* MAIN CONTENT */}
      <section className="py-24 bg-[#fdfbf7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none font-light text-stone-700">

            {/* Intro */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-stone-600 leading-relaxed">
                Experience relaxing Jacuzzi and Steam Bath wellness sessions at Relaxio Spa designed for comfort, relaxation, and rejuvenation.
              </p>
            </div>

            {/* Benefits */}
              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 text-center">
                Incredible Benefits of Jacuzzi & Steam Bath
              </h2>

              <p className="mb-10 leading-relaxed text-center max-w-3xl mx-auto">
                Jacuzzi and Steam Bath therapies are more than just luxury spa facilities; they are powerful wellness experiences that help your body relax, detoxify, and recover from daily stress and fatigue.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  "Detoxifies the body and removes toxins",
                  "Improves blood circulation and recovery",
                  "Relieves muscle tension and body fatigue",
                  "Enhances skin health and glow",
                  "Reduces stress and mental exhaustion",
                  "Supports relaxation before massage therapy",
                  "Helps improve sleep quality",
                  "Provides a luxury wellness experience",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#d4af37] shrink-0 mt-1"
                      size={20}
                    />

                    <span className="text-stone-700">{benefit}</span>
                  </div>
                ))}
              </div>
            
            {/* Center Image */}
            <FadeIn>
              <div className="my-16 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                <Image

                  src="/images/jacuzzi-steam-bath-lucknow.avif"
                  alt="Luxury jacuzzi and steam bath experience at Relaxio Spa"
                  fill
                  sizes="100vw"
                  
                  className="object-cover"
                  loading="lazy"
                 />
              </div>
            </FadeIn>

            {/* Why Relaxio */}
              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
                Why Relaxio is the Best Spa in Gomti Nagar
              </h2>

              <p className="mb-6 leading-relaxed">
                At Relaxio Spa, we provide premium Jacuzzi and Steam Bath facilities designed for complete body relaxation and wellness. Our luxury spa environment, hygienic facilities, and peaceful ambience create the perfect experience for stress relief and rejuvenation.
              </p>

              <p className="mb-10 leading-relaxed">
                Whether you want to relax after a long day, prepare your body before massage therapy, or enjoy a complete wellness session, Relaxio Spa offers one of the best Jacuzzi and Steam Bath experiences in Gomti Nagar Lucknow.
              </p>
            
            <PricingSection
  title="Jacuzzi & Steam Bath Packages"
  description="Luxury Jacuzzi and steam bath wellness sessions with premium spa ambience, deep relaxation, and rejuvenating comfort in Gomti Nagar Lucknow."
  buttonText="Book Jacuzzi & Steam Bath"
  whatsappMessage="Hi Relaxio Spa, I want Jacuzzi & Steam Bath. (Source: Spa Facilities Page)"
  packages={[
    {
      name: "Relaxation Session",
      duration: "30 Minutes Session",
      price: "₹999",
    },
    {
      name: "Luxury Wellness Session",
      duration: "60 Minutes Session",
      price: "₹3,499",
      popular: true,
    },
    {
      name: "Complete Spa Experience",
      duration: "Jacuzzi + Steam Bath + Massage",
      price: "₹5,999",
    },
  ]}
/>

<ExploreMore
  therapies={[
    {
      title: "Deep Tissue Massage",
      href: "/services/deep-tissue-massage",
      description:
        "Deep muscle recovery therapy designed to reduce stiffness and physical stress.",
    },
    {
      title: "Balinese Massage",
      href: "/services/balinese-massage",
      description:
        "Luxury aromatherapy massage designed for calmness and peaceful wellness.",
    },
    {
      title: "Couple Massage",
      href: "/services/couple-massage",
      description:
        "Private wellness spa experience for couples with premium ambience and therapies.",
    },
  ]}
/>

            {/* FAQ */}
            <div className="mt-24">
              <FAQ faqs={faqs} />
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}