import { faqsData } from "@/lib/faqs";
import ServiceHero from "@/components/services/ServiceHero";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import { IconCheckCircle } from "@/components/icons";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";
import PricingSection from "@/components/services/PricingSection";
import ExploreMore from "@/components/services/ExploreMore";


export const metadata: Metadata = {
  title: "Luxury Jacuzzi & Steam Bath Experience | Relaxio Spa",
  description:
    "Experience Jacuzzi and Steam Bath in Gomti Nagar Lucknow at Relaxio Spa. Enjoy relaxation, stress relief, muscle recovery, and a luxury wellness experience.",
  keywords: [
    "Jacuzzi Lucknow",
    "Steam Bath Lucknow",
    "Luxury Spa Facilities",
    "Wellness Spa",
  ],
  alternates: {
    canonical: "https://relaxiospa.in/services/spa-facilities",
  },

  openGraph: {
    title: "Luxury Jacuzzi & Steam Bath Experience | Relaxio Spa",

    description:
      "Experience Jacuzzi and Steam Bath in Gomti Nagar Lucknow at Relaxio Spa. Enjoy relaxation, stress relief, muscle recovery, and a luxury wellness experience.",

    url:
      "https://relaxiospa.in/services/spa-facilities",

    siteName:
      "Relaxio Spa",

    locale:
      "en_IN",

    type:
      "website",

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

export default function SpaFacilitiesPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: "Spa Facilities", item: "/services/spa-facilities" },
  ];

  const faqs = faqsData["spa-facilities"] || [];

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
        alt="Luxury Jacuzzi and Steam Bath Facilities in Gomti Nagar Lucknow at Relaxio Spa"
      />

      {/* MAIN CONTENT */}
      <section className="py-24 bg-[#fdfbf7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none font-light text-stone-700">

            {/* Intro */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-stone-600 leading-relaxed">
                Experience Jacuzzi and Steam Bath in Gomti Nagar Lucknow at Relaxio Spa, designed for relaxation, stress relief, muscle recovery, and complete wellness rejuvenation in a luxury spa environment.
              </p>
            </div>

            {/* Benefits */}
            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 text-center">
              Incredible Benefits of Jacuzzi & Steam Bath
            </h2>

            <p className="mb-10 leading-relaxed text-center max-w-3xl mx-auto">
              Jacuzzi and Steam Bath therapies help relax muscles, improve circulation, reduce stress, support detoxification, and create a premium wellness experience for guests seeking relaxation in Lucknow.
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
                <div
                  key={idx}
                  className="group rounded-3xl border border-stone-200 bg-white/90 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-10 w-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0">
                    <IconCheckCircle size={18} />
                  </div>

                  <span className="text-stone-700 leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Center Image */}

            <div className="my-16 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
              <Image

                src="/images/jacuzzi-steam-bath-lucknow.avif"
                alt="Luxury Jacuzzi and Steam Bath Facilities in Gomti Nagar Lucknow at Relaxio Spa"
                fill
                sizes="100vw"

                className="object-cover"
                loading="lazy"
              />
            </div>

        
            {/* Why Relaxio */}

            <div className="max-w-3xl mx-auto">

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 text-center">
              Why Relaxio is the Best Spa in Gomti Nagar
            </h2>

            <p className="mb-6 leading-relaxed">
              At Relaxio Spa, our Jacuzzi and Steam Bath facilities are designed to provide complete body relaxation, stress relief, and a luxury wellness experience for guests visiting Gomti Nagar and other areas of Lucknow.
            </p>

            <p className="mb-10 leading-relaxed">
              Whether you want to relax after a long day, prepare your body before massage therapy, or enjoy a complete wellness session, Relaxio Spa offers one of the best Jacuzzi and Steam Bath experiences in Gomti Nagar Lucknow.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 text-center">
              Who Should Choose Jacuzzi & Steam Bath?
            </h2>

            <p className="mb-10 leading-relaxed">
              Jacuzzi and Steam Bath sessions are ideal for individuals looking to relax, reduce stress, and enjoy a premium wellness experience. Office professionals, travelers, fitness enthusiasts, and guests experiencing physical fatigue often choose these facilities to support recovery and relaxation.

              Many guests also enjoy Jacuzzi and Steam Bath sessions before or after massage therapies as part of a complete wellness routine designed to improve comfort and overall well-being.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 text-center">
              What Happens During a Jacuzzi & Steam Bath Session?
            </h2>

            <p className="mb-10 leading-relaxed">
              Guests begin their wellness experience in a clean and comfortable environment designed for relaxation. Steam Bath sessions help warm the body and promote relaxation, while Jacuzzi sessions provide soothing hydrotherapy designed to support comfort and recovery.

              The combination of warmth, water therapy, and a peaceful environment helps guests unwind from daily stress and enjoy a refreshing wellness experience.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 text-center">
              Benefits of Jacuzzi & Steam Bath
            </h2>

            <p className="mb-10 leading-relaxed">
              Jacuzzi and Steam Bath therapies are popular wellness options because they encourage relaxation, improve circulation, and support physical recovery. Many guests report feeling refreshed and relaxed after their session.

              These facilities are often used to reduce stress, relax muscles, support recovery after physical activity, and prepare the body for massage therapies. Regular wellness sessions can become an important part of a balanced lifestyle.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 text-center">
              Why Guests Choose Relaxio Spa
            </h2>

            <p className="mb-10 leading-relaxed">
              Relaxio Spa offers premium wellness facilities, hygienic standards, private comfort, and a calm atmosphere designed to help guests relax and recharge. Our Jacuzzi and Steam Bath facilities are maintained to high standards and are suitable for individuals seeking quality wellness experiences in Gomti Nagar Lucknow.

              Guests appreciate the combination of luxury ambience, professional service, and convenient location that makes Relaxio Spa a preferred wellness destination.
            </p>

          </div>

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

            <p className="text-center text-sm text-stone-600 mb-12">
              Want to compare wellness experiences before booking?{" "}
              <Link href="/blog" className="text-amber-800 underline underline-offset-4">
                Browse our spa and massage guides
              </Link>{" "}
              for relaxation ideas, service comparisons, and local wellness tips.
            </p>

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

            <div className="rounded-[32px] bg-stone-900 text-white p-8 md:p-12 text-center mb-20 mt-20">
              <h2 className="font-serif text-3xl md:text-5xl mb-6">
                Relax, Detox & Rejuvenate
              </h2>

              <p className="text-stone-300 max-w-2xl mx-auto leading-relaxed mb-8">
                Enjoy luxury Jacuzzi and steam wellness sessions designed
                for stress recovery, muscle relaxation, and peaceful rejuvenation.
              </p>

              <a
                href="https://wa.me/919455671995"
                className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-stone-900 font-medium hover:scale-105 transition-transform duration-300"
              >
                Book Wellness Session
              </a>
            </div>

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
