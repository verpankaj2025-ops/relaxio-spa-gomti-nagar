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
import { IconCheckCircle } from "@/components/icons";
import PricingSection from "@/components/services/PricingSection";
import ExploreMore from "@/components/services/ExploreMore";

export const metadata: Metadata = {
  title: "Thai Massage in Gomti Nagar Lucknow | Relaxio Spa",
  description:
    "Book Thai Massage in Gomti Nagar Lucknow at Relaxio Spa. Traditional stretching and pressure-based wellness therapy for flexibility, relaxation and body recovery.",
  alternates: {
    canonical: "https://relaxiospa.in/services/thai-massage",
  },
  openGraph: {
    title: "Thai Massage in Gomti Nagar Lucknow | Relaxio Spa",
    description:
      "Professional Thai Massage in Gomti Nagar Lucknow with assisted stretching, pressure techniques and a calm private wellness environment.",
    url: "https://relaxiospa.in/services/thai-massage",
    siteName: "Relaxio Spa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://relaxiospa.in/images/thai-massage-gomti-nagar-lucknow.avif",
        width: 1200,
        height: 630,
        alt: "Thai Massage in Gomti Nagar Lucknow at Relaxio Spa",
      },
    ],
  },
};

export default function ThaiMassagePage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: "Thai Massage", item: "/services/thai-massage" },
  ];

  const faqs = faqsData.thai || [];

  const serviceSchema = getServiceSchema({
    name: "Thai Massage in Gomti Nagar Lucknow",
    description:
      "Professional Thai Massage therapy in Gomti Nagar Lucknow for flexibility, stress relief and body relaxation.",
    url: "https://relaxiospa.in/services/thai-massage",
    image:
      "https://relaxiospa.in/images/thai-massage-gomti-nagar-lucknow.avif",
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
        title="Thai Massage in Gomti Nagar Lucknow"
        subtitle="Traditional stretching and pressure-based Thai therapy designed to improve flexibility, reduce body tension, and support relaxation."
        image="/images/thai-massage-gomti-nagar-lucknow.avif"
        alt="Thai Massage in Gomti Nagar Lucknow at Relaxio Spa"
      />

      <section className="pt-20 pb-10 bg-[#fdfbf7] content-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none font-light text-stone-700">
            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Thai Massage in Gomti Nagar Lucknow
            </h2>

            <p className="mb-6 leading-relaxed">
              Relaxio Spa offers professional Thai Massage in Gomti Nagar
              Lucknow for guests looking for a traditional stretching-based
              wellness experience. Sessions combine assisted stretching,
              rhythmic pressure techniques and guided body movement in a calm,
              private environment.
            </p>

            <p className="leading-relaxed mb-10">
              Thai Massage can be a suitable choice for guests experiencing
              everyday stiffness, reduced flexibility, physical fatigue or
              work-related tension. Therapists can adjust the experience around
              individual comfort and wellness goals.
            </p>

            <div className="my-16 relative h-[350px] md:h-[450px] rounded-[32px] overflow-hidden shadow-lg">
              <Image
                src="/images/thai-massage-gomti-nagar-lucknow-spa.avif"
                alt="Professional Thai Massage therapy in Gomti Nagar Lucknow at Relaxio Spa"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                quality={80}
                className="object-cover brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Benefits of Thai Massage
            </h2>

            <p className="mb-6 leading-relaxed">
              Thai Massage at Relaxio Spa is designed around flexibility,
              physical relaxation and a comfortable wellness experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-12">
              {[
                "Supports flexibility and range of motion",
                "Helps reduce everyday muscle tension and stiffness",
                "Supports mobility after long periods of sitting",
                "Encourages physical relaxation and recovery",
                "May help reduce everyday stress and fatigue",
                "Promotes a calm and restorative wellness experience",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <IconCheckCircle className="shrink-0 mt-1" size={20} />
                  <span className="text-stone-700">{benefit}</span>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Thai Massage for Office Professionals
            </h2>

            <p className="mb-6 leading-relaxed">
              Long working hours and prolonged sitting can contribute to neck,
              shoulder and lower-back tension. A guided Thai wellness session
              combines assisted stretching and pressure techniques to support
              mobility and relaxation.
            </p>

            <p className="mb-10 leading-relaxed">
              Guests from Gomti Nagar and nearby Lucknow areas often choose
              Thai Massage after work when they want a structured wellness
              session rather than a quick relaxation treatment.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Who Should Choose Thai Massage?
            </h2>

            <p className="mb-10 leading-relaxed">
              Thai Massage can be suitable for office professionals, fitness
              enthusiasts, travellers and guests looking for a stretching-based
              wellness experience. Your therapist can discuss comfort and
              pressure preferences before the session.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Thai Massage vs Deep Tissue Massage
            </h2>

            <p className="mb-10 leading-relaxed">
              Thai Massage emphasizes assisted stretching, mobility and
              pressure techniques, while Deep Tissue Massage focuses more on
              deeper muscle layers and persistent tension. The better option
              depends on your preferred wellness experience and personal goals.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              How Often Should You Get Thai Massage?
            </h2>

            <p className="mb-6 leading-relaxed">
              Many guests schedule Thai Massage every few weeks as part of a
              wellness routine. Frequency can vary according to lifestyle,
              activity level, stress and personal preferences.
            </p>

            <div className="w-24 h-px bg-[#d4af37] my-16 mx-auto" />

            <PricingSection
              title="Thai Massage Packages in Gomti Nagar"
              description="Choose a 60, 90 or 120-minute Thai Massage session at Relaxio Spa in Gomti Nagar Lucknow."
              buttonText="Book Thai Massage"
              whatsappMessage="Hi Relaxio Spa, I want Thai Massage in Gomti Nagar Lucknow."
              packages={[
                {
                  name: "Express Stretch",
                  duration: "60 Minutes Therapy",
                  price: "₹2,499",
                },
                {
                  name: "Deep Healing",
                  duration: "90 Minutes Therapy",
                  price: "₹3,499",
                  popular: true,
                },
                {
                  name: "Ultimate Rejuvenation",
                  duration: "120 Minutes Therapy",
                  price: "₹4,499",
                },
              ]}
            />

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 mt-16">
              Thai Massage Near Gomti Nagar Lucknow
            </h2>

            <p className="mb-6 leading-relaxed">
              Relaxio Spa is located in Vivek Khand 4, Gomti Nagar, making it
              convenient for guests from Gomti Nagar, Vibhuti Khand, Viram
              Khand, Patrakarpuram, Indira Nagar and nearby areas.
            </p>

            <p className="mb-10 leading-relaxed">
              For questions about session duration, availability or the latest
              price, contact Relaxio Spa before booking.
            </p>

            <p className="text-center text-sm text-stone-600 mb-12">
              Want to learn more?{" "}
              <Link
                href="/blog/best-thai-massage-benefits-lucknow"
                className="text-amber-800 underline underline-offset-4"
              >
                Read our Thai Massage guide
              </Link>{" "}
              or explore the{" "}
              <Link
                href="/blog"
                className="text-amber-800 underline underline-offset-4"
              >
                Wellness Journal
              </Link>
              .
            </p>

            <div className="w-24 h-px bg-[#d4af37] my-16 mx-auto" />

            <ExploreMore
              therapies={[
                {
                  title: "Balinese Massage in Gomti Nagar",
                  href: "/services/balinese-massage",
                  description:
                    "Aromatherapy-based massage designed for relaxation and a calming wellness experience.",
                },
                {
                  title: "Deep Tissue Massage in Gomti Nagar",
                  href: "/services/deep-tissue-massage",
                  description:
                    "Firm-pressure massage focused on deeper muscle layers, stiffness and physical recovery.",
                },
                {
                  title: "Couple Massage in Gomti Nagar",
                  href: "/services/couple-massage",
                  description:
                    "A private shared wellness experience for couples with relaxing massage therapies.",
                },
                {
                  title: "Jacuzzi & Steam Bath",
                  href: "/services/spa-facilities",
                  description:
                    "Premium Jacuzzi and Steam Bath facilities for relaxation and wellness.",
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
