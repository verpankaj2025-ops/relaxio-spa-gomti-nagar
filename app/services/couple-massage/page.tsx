import type { Metadata } from "next";
import { faqsData } from "@/lib/faqs";
import ServiceHero from "@/components/services/ServiceHero";
import Image from "next/image";
import Link from "next/link";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getServiceSchema,
} from "@/lib/seo";
import FAQ from "@/components/FAQ";
import PricingSection from "@/components/services/PricingSection";
import ExploreMore from "@/components/services/ExploreMore";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Couple Massage in Gomti Nagar Lucknow | Relaxio Spa",
  description:
    "Book Couple Massage in Gomti Nagar Lucknow at Relaxio Spa. Private spa rooms, synchronized wellness therapies, calming ambience and relaxing experiences for couples.",
  openGraph: {
    title: "Couple Massage in Gomti Nagar Lucknow | Relaxio Spa",
    description:
      "Private Couple Massage in Gomti Nagar Lucknow with relaxing wellness therapies, comfortable spa rooms and a premium shared spa experience.",
    url: "https://relaxiospa.in/services/couple-massage",
    siteName: "Relaxio Spa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://relaxiospa.in/images/couple-massage-lucknow.avif",
        width: 1200,
        height: 630,
        alt: "Couple Massage in Gomti Nagar Lucknow at Relaxio Spa",
      },
    ],
  },
  alternates: {
    canonical: "https://relaxiospa.in/services/couple-massage",
  },
};

export default function CoupleMassagePage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: "Couple Massage", item: "/services/couple-massage" },
  ];

  const faqs = faqsData["couple-massage"] || [];

  const serviceSchema = getServiceSchema({
    name: "Couple Massage in Gomti Nagar Lucknow",
    description:
      "Private Couple Massage experience in Gomti Nagar Lucknow with relaxing wellness therapies, comfortable spa rooms and a premium shared wellness environment.",
    url: "https://relaxiospa.in/services/couple-massage",
    image: "https://relaxiospa.in/images/couple-massage-lucknow.avif",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema(faqs)),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <ServiceHero
        title="Couple Massage in Gomti Nagar Lucknow"
        subtitle="Relax together with private wellness therapies designed for comfort, shared relaxation and a peaceful spa experience."
        image="/images/couple-massage-lucknow.avif"
        alt="Couple Massage in Gomti Nagar Lucknow at Relaxio Spa"
      />

      <section className="pt-20 pb-10 bg-[#fdfbf7] content-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-stone prose-base md:prose-lg max-w-none font-light text-stone-700">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
                Couple Massage in Gomti Nagar Lucknow
              </h2>

              <p className="text-lg text-stone-600 leading-relaxed">
                Relaxio Spa offers a private Couple Massage experience in Gomti
                Nagar Lucknow where partners can enjoy relaxing wellness
                therapies side by side in a calm and comfortable environment.
              </p>
            </div>

            <p className="text-stone-600 leading-relaxed mt-6 mb-10">
              Couples can choose synchronized wellness treatments, private spa
              rooms and a peaceful setting designed for relaxation and quality
              time together.
            </p>

            <div className="text-center mt-12 mb-16">
              <h2 className="text-3xl font-serif mb-4">
                Why Couples Enjoy Wellness Therapy Together
              </h2>

              <p className="text-stone-600 max-w-2xl mx-auto mb-8">
                Couple Massage gives partners an opportunity to relax together,
                disconnect from everyday stress and enjoy a shared wellness
                experience in a private environment.
              </p>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto text-left text-stone-700">
                {[
                  "Private couple spa room for a comfortable shared experience",
                  "Professional therapists for synchronized massage sessions",
                  "Calming ambience designed for relaxation",
                  "Suitable for couples and special occasions",
                  "A peaceful way to spend quality wellness time together",
                  "Helps create a relaxing break from busy schedules",
                  "Optional wellness facilities can complement the session",
                  "Premium amenities and hygienic spa environment",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1 text-sm">✔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-16 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/couple-massage-lucknow-spa.avif"
                alt="Private Couple Massage in Gomti Nagar Lucknow at Relaxio Spa"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover brightness-95"
                loading="lazy"
              />
            </div>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Why Guests Choose Our Couple Wellness Experience
            </h2>

            <p className="mb-6 leading-relaxed">
              At Relaxio Spa, our Couple Massage experience is designed for
              partners seeking privacy, relaxation and premium wellness
              therapies in Gomti Nagar Lucknow.
            </p>

            <p className="mb-10 leading-relaxed">
              Couples can enjoy synchronized treatments in a private setting
              with professional therapists, calming ambience and hygienic spa
              facilities. The focus is on comfort and a peaceful shared
              wellness experience.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Who Should Choose Couple Massage?
            </h2>

            <p className="mb-10 leading-relaxed">
              Couple Massage can suit partners looking for quality wellness
              time together. Guests may choose this experience for
              anniversaries, birthdays, special celebrations, date experiences
              or simply as a relaxing break from busy schedules.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              What Happens During a Couple Massage Session?
            </h2>

            <p className="mb-10 leading-relaxed">
              A session begins with a brief discussion about comfort,
              preferred pressure and wellness goals. Both guests can then enjoy
              synchronized treatments side by side in the same private spa
              room, creating a calm shared experience.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Benefits of Couple Massage
            </h2>

            <p className="mb-10 leading-relaxed">
              Couple Massage provides an opportunity for physical relaxation,
              stress reduction and uninterrupted time together. Many guests
              appreciate the shared experience because it combines wellness,
              comfort and quality time in one setting.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Why Relaxio Spa is a Preferred Choice for Couples
            </h2>

            <p className="mb-10 leading-relaxed">
              Relaxio Spa offers private couple spa rooms, professional
              therapists, hygienic facilities and a calm wellness environment
              in Gomti Nagar Lucknow. Our team focuses on privacy, comfort and
              a personalized guest experience.
            </p>
          </div>

          <PricingSection
            title="Couple Massage Packages in Gomti Nagar"
            description="Choose a 60, 90 or 120-minute couple wellness session at Relaxio Spa in Gomti Nagar Lucknow."
            buttonText="Book Couple Massage"
            whatsappMessage="Hi Relaxio Spa, I want Couple Massage in Gomti Nagar Lucknow."
            packages={[
              {
                name: "Romantic Escape",
                duration: "60 Minutes Therapy",
                price: "₹2,999",
              },
              {
                name: "Luxury Couple Retreat",
                duration: "90 Minutes Therapy",
                price: "₹3,999",
                popular: true,
              },
              {
                name: "Royal Couple Wellness",
                duration: "120 Minutes Therapy",
                price: "₹4,999",
              },
            ]}
          />

          <p className="text-center text-sm text-stone-600 mb-12">
            Looking for another wellness experience?{" "}
            <Link
              href="/services/balinese-massage"
              className="text-amber-800 underline underline-offset-4"
            >
              Explore Balinese Massage
            </Link>{" "}
            or{" "}
            <Link
              href="/services/spa-facilities"
              className="text-amber-800 underline underline-offset-4"
            >
              explore Jacuzzi & Steam Bath
            </Link>
            .
          </p>

          <ExploreMore
            therapies={[
              {
                title: "Balinese Massage in Gomti Nagar",
                href: "/services/balinese-massage",
                description:
                  "Relaxing aromatherapy wellness therapy designed for stress relief and calmness.",
              },
              {
                title: "Thai Massage in Gomti Nagar",
                href: "/services/thai-massage",
                description:
                  "Traditional assisted stretching therapy designed for flexibility and body relaxation.",
              },
              {
                title: "Deep Tissue Massage in Gomti Nagar",
                href: "/services/deep-tissue-massage",
                description:
                  "Firm-pressure wellness therapy focused on deeper muscle layers and physical recovery.",
              },
              {
                title: "Jacuzzi & Steam Bath",
                href: "/services/spa-facilities",
                description:
                  "Luxury Jacuzzi and Steam Bath facilities for complete relaxation.",
              },
            ]}
          />

          <div className="mt-16">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
