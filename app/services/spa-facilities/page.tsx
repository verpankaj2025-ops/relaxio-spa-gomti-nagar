import type { Metadata } from "next";
import { faqsData } from "@/lib/faqs";
import ServiceHero from "@/components/services/ServiceHero";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import { IconCheckCircle } from "@/components/icons";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getServiceSchema,
} from "@/lib/seo";
import PricingSection from "@/components/services/PricingSection";
import ExploreMore from "@/components/services/ExploreMore";

export const metadata: Metadata = {
  title: "Jacuzzi & Steam Bath in Gomti Nagar Lucknow | Relaxio Spa",
  description:
    "Book Jacuzzi and Steam Bath in Gomti Nagar Lucknow at Relaxio Spa. Enjoy a premium wellness session for relaxation, stress relief and body recovery.",
  alternates: {
    canonical: "https://relaxiospa.in/services/spa-facilities",
  },
  openGraph: {
    title: "Jacuzzi & Steam Bath in Gomti Nagar Lucknow | Relaxio Spa",
    description:
      "Premium Jacuzzi and Steam Bath wellness experience in Gomti Nagar Lucknow with a calm spa environment and relaxing facilities.",
    url: "https://relaxiospa.in/services/spa-facilities",
    siteName: "Relaxio Spa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://relaxiospa.in/images/jacuzzi-steam-bath-lucknow.avif",
        width: 1200,
        height: 630,
        alt: "Jacuzzi and Steam Bath in Gomti Nagar Lucknow at Relaxio Spa",
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

  const serviceSchema = getServiceSchema({
    name: "Jacuzzi and Steam Bath in Gomti Nagar Lucknow",
    description:
      "Premium Jacuzzi and Steam Bath wellness experience in Gomti Nagar Lucknow for relaxation and a complete spa experience.",
    url: "https://relaxiospa.in/services/spa-facilities",
    image: "https://relaxiospa.in/images/jacuzzi-steam-bath-lucknow.avif",
  });

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <ServiceHero
        title="Jacuzzi & Steam Bath in Gomti Nagar Lucknow"
        subtitle="Relax your body and mind with premium Jacuzzi and Steam Bath wellness sessions at Relaxio Spa."
        image="/images/jacuzzi-steam-bath-lucknow.avif"
        alt="Jacuzzi and Steam Bath in Gomti Nagar Lucknow at Relaxio Spa"
      />

      <section className="py-24 bg-[#fdfbf7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-light text-stone-700">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
                Jacuzzi & Steam Bath in Gomti Nagar Lucknow
              </h2>

              <p className="text-lg text-stone-600 leading-relaxed">
                Relaxio Spa offers premium Jacuzzi and Steam Bath sessions in
                Gomti Nagar Lucknow for guests looking for a calm wellness
                experience, muscle relaxation and a refreshing break from
                everyday stress.
              </p>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 text-center">
              Benefits of Jacuzzi & Steam Bath
            </h2>

            <p className="mb-10 leading-relaxed text-center max-w-3xl mx-auto">
              Jacuzzi and Steam Bath sessions are designed to promote
              relaxation, support comfort after physical activity and create a
              premium wellness experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                "Encourages full-body relaxation",
                "Supports muscle comfort after physical activity",
                "Creates a calming break from everyday stress",
                "Complements massage and wellness sessions",
                "Offers a refreshing spa experience",
                "Supports a comfortable pre- or post-massage routine",
                "Provides a peaceful wellness environment",
                "Ideal for guests seeking premium spa facilities",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="group rounded-3xl border border-stone-200 bg-white/90 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-10 w-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0 mb-3">
                    <IconCheckCircle size={18} />
                  </div>

                  <span className="text-stone-700 leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="my-16 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/jacuzzi-steam-bath-lucknow.avif"
                alt="Luxury Jacuzzi and Steam Bath in Gomti Nagar Lucknow at Relaxio Spa"
                fill
                sizes="100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>

            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 text-center">
                Why Guests Choose Relaxio Spa
              </h2>

              <p className="mb-6 leading-relaxed">
                Relaxio Spa combines premium wellness facilities with a calm,
                hygienic environment designed to help guests unwind. The
                Jacuzzi and Steam Bath experience can be enjoyed on its own or
                as part of a broader wellness visit.
              </p>

              <p className="mb-10 leading-relaxed">
                Located in Gomti Nagar Lucknow, the spa is convenient for guests
                from nearby residential, commercial and business areas who want
                a comfortable wellness break.
              </p>

              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 text-center">
                Who Should Choose Jacuzzi & Steam Bath?
              </h2>

              <p className="mb-10 leading-relaxed">
                These facilities can suit office professionals, travelers,
                fitness enthusiasts and guests who want to relax before or
                after a massage session. Guests can choose the experience based
                on their preferred wellness routine and comfort.
              </p>

              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 text-center">
                What Happens During a Session?
              </h2>

              <p className="mb-10 leading-relaxed">
                Guests enjoy a calm and comfortable wellness environment with
                Jacuzzi or Steam Bath facilities selected as part of their
                package. A session can be paired with other massage therapies
                when included in a complete spa package.
              </p>

              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 text-center">
                Jacuzzi & Steam Bath Before or After Massage
              </h2>

              <p className="mb-10 leading-relaxed">
                Many guests include these facilities in a broader wellness
                visit to make the experience more relaxing and complete. Speak
                with the spa team about the available package and the preferred
                order of facilities and massage.
              </p>

              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 text-center">
                Jacuzzi & Steam Bath in Gomti Nagar Lucknow
              </h2>

              <p className="mb-10 leading-relaxed">
                Relaxio Spa is located in Vivek Khand 4, Gomti Nagar, Lucknow,
                making the facilities convenient for guests from Gomti Nagar,
                Vibhuti Khand, Viram Khand, Patrakarpuram, Indira Nagar and
                nearby areas.
              </p>
            </div>
          </div>

          <PricingSection
            title="Jacuzzi & Steam Bath Packages"
            description="Choose a relaxing Jacuzzi or Steam Bath session at Relaxio Spa in Gomti Nagar Lucknow, with package options that can include massage therapy."
            buttonText="Book Jacuzzi & Steam Bath"
            whatsappMessage="Hi Relaxio Spa, I want Jacuzzi & Steam Bath in Gomti Nagar Lucknow."
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
            Want to compare wellness services?{" "}
            <Link
              href="/services/deep-tissue-massage"
              className="text-amber-800 underline underline-offset-4"
            >
              Explore Deep Tissue Massage
            </Link>{" "}
            or{" "}
            <Link
              href="/services/couple-massage"
              className="text-amber-800 underline underline-offset-4"
            >
              explore Couple Massage
            </Link>
            .
          </p>

          <ExploreMore
            therapies={[
              {
                title: "Deep Tissue Massage in Gomti Nagar",
                href: "/services/deep-tissue-massage",
                description:
                  "Firm-pressure wellness therapy for muscle tension, mobility and physical recovery.",
              },
              {
                title: "Balinese Massage in Gomti Nagar",
                href: "/services/balinese-massage",
                description:
                  "Aromatherapy-based massage focused on relaxation and stress relief.",
              },
              {
                title: "Couple Massage in Gomti Nagar",
                href: "/services/couple-massage",
                description:
                  "Private shared wellness experience for couples with relaxing spa therapies.",
              },
              {
                title: "Thai Massage in Gomti Nagar",
                href: "/services/thai-massage",
                description:
                  "Traditional stretching-based therapy designed for flexibility and relaxation.",
              },
            ]}
          />

          <div className="rounded-[32px] bg-stone-900 text-white p-8 md:p-12 text-center mb-20 mt-20">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">
              Relax, Rejuvenate & Unwind
            </h2>

            <p className="text-stone-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Enjoy a premium Jacuzzi and Steam Bath wellness experience at
              Relaxio Spa in Gomti Nagar Lucknow.
            </p>

            <a
              href="https://wa.me/919455671995"
              className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-stone-900 font-medium hover:scale-105 transition-transform duration-300"
            >
              Book Wellness Session
            </a>
          </div>

          <div className="mt-16">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
