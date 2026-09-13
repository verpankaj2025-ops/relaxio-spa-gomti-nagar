import { faqsData } from "@/lib/faqs";
import ServiceHero from "@/components/services/ServiceHero";
import Image from "next/image";
import Link from "next/link";
import { getBreadcrumbSchema, getFAQSchema, getServiceSchema } from "@/lib/seo";
import FAQ from "@/components/FAQ";
import { IconCheckCircle } from "@/components/icons";
import PricingSection from "@/components/services/PricingSection";
import ExploreMore from "@/components/services/ExploreMore";

export const metadata = {
  title: "Balinese Massage in Gomti Nagar Lucknow | Relaxio Spa",
  description:
    "Book Balinese Massage in Gomti Nagar Lucknow at Relaxio Spa. Aromatherapy, gentle massage and stress-relief wellness therapy in a calm private environment.",
  alternates: {
    canonical: "https://relaxiospa.in/services/balinese-massage",
  },
  openGraph: {
    title: "Balinese Massage in Gomti Nagar Lucknow | Relaxio Spa",
    description:
      "Professional Balinese Massage in Gomti Nagar Lucknow with aromatherapy, relaxing massage techniques and a premium wellness experience.",
    url: "https://relaxiospa.in/services/balinese-massage",
    siteName: "Relaxio Spa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://relaxiospa.in/images/balinese-massage-gomti-nagar-lucknow.avif",
        width: 1200,
        height: 630,
        alt: "Balinese Massage in Gomti Nagar Lucknow at Relaxio Spa",
      },
    ],
  },
};

export default function BalineseMassagePage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: "Balinese Massage", item: "/services/balinese-massage" },
  ];

  const faqs = faqsData.balinese || [];

  const serviceSchema = getServiceSchema({
    name: "Balinese Massage in Gomti Nagar Lucknow",
    description:
      "Professional Balinese Massage therapy in Gomti Nagar Lucknow combining aromatherapy, relaxing massage techniques and wellness therapy.",
    url: "https://relaxiospa.in/services/balinese-massage",
    image:
      "https://relaxiospa.in/images/balinese-massage-gomti-nagar-lucknow.avif",
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
        title="Balinese Massage in Gomti Nagar Lucknow"
        subtitle="Aromatherapy-based massage designed to relax the body, calm the mind and support everyday stress relief."
        image="/images/balinese-massage-gomti-nagar-lucknow.avif"
        alt="Balinese Massage in Gomti Nagar Lucknow at Relaxio Spa"
      />

      <section className="pt-20 pb-10 bg-[#fdfbf7] content-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-light text-stone-700">
            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Balinese Massage in Gomti Nagar Lucknow
            </h2>

            <p className="mb-6 leading-relaxed">
              Relaxio Spa offers professional Balinese Massage in Gomti Nagar
              Lucknow for guests seeking a calming wellness experience.
              Aromatherapy oils, flowing massage movements and gentle
              stretching are combined to encourage relaxation and reduce
              everyday stress.
            </p>

            <p className="mb-10 leading-relaxed">
              The therapy can be a good choice for office professionals,
              travelers and guests who prefer a moderate-pressure massage with
              a soothing aromatherapy experience.
            </p>

            <div className="my-16 relative h-[350px] md:h-[450px] rounded-[32px] overflow-hidden shadow-lg">
              <Image
                src="/images/balinese-massage-gomti-nagar-lucknow-spa.avif"
                alt="Professional Balinese Massage therapy in Gomti Nagar Lucknow at Relaxio Spa"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Benefits of Balinese Massage
            </h2>

            <p className="mb-6 leading-relaxed">
              Balinese Massage focuses on relaxation, gentle bodywork and a
              soothing sensory experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-12">
              {[
                "Encourages deep relaxation and stress relief",
                "Helps reduce everyday muscle tension",
                "Supports a calm and restorative wellness experience",
                "Aromatherapy can enhance relaxation",
                "Suitable for guests who prefer moderate pressure",
                "Can be included in a regular wellness routine",
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
              Balinese Massage for Office Professionals
            </h2>

            <p className="mb-10 leading-relaxed">
              Long workdays can contribute to mental fatigue, stress and
              physical tension. Balinese Massage combines relaxing bodywork
              and aromatherapy to create a calm wellness break after work or
              during a busy week in Lucknow.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Who Should Choose Balinese Massage?
            </h2>

            <p className="mb-10 leading-relaxed">
              Balinese Massage can suit guests looking for stress relief,
              relaxation, gentle-to-moderate pressure and an aromatherapy-led
              wellness experience. It can also be a comfortable option for
              first-time spa guests.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              What Happens During a Balinese Massage?
            </h2>

            <p className="mb-10 leading-relaxed">
              A session may combine flowing strokes, gentle stretching,
              pressure-based techniques and aromatherapy oils. Guests can
              discuss comfort and pressure preferences with the therapist
              before the session.
            </p>

            <div className="w-24 h-px bg-[#d4af37] my-16 mx-auto" />

            <PricingSection
              title="Balinese Massage Packages in Gomti Nagar"
              description="Choose a 60, 90 or 120-minute Balinese Massage session at Relaxio Spa in Gomti Nagar Lucknow."
              buttonText="Book Balinese Massage"
              whatsappMessage="Hi Relaxio Spa, I want Balinese Massage in Gomti Nagar Lucknow."
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

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 mt-16">
              Balinese Massage Near Gomti Nagar Lucknow
            </h2>

            <p className="mb-6 leading-relaxed">
              Relaxio Spa is located in Vivek Khand 4, Gomti Nagar and welcomes
              guests from Gomti Nagar, Vibhuti Khand, Viram Khand,
              Patrakarpuram, Indira Nagar and nearby Lucknow areas.
            </p>

            <p className="mb-10 leading-relaxed">
              Contact Relaxio Spa to check current availability, session
              duration and the latest package details before booking.
            </p>

            <ExploreMore
              therapies={[
                {
                  title: "Thai Massage in Gomti Nagar",
                  href: "/services/thai-massage",
                  description:
                    "Traditional stretching-based massage designed for flexibility and physical relaxation.",
                },
                {
                  title: "Deep Tissue Massage in Gomti Nagar",
                  href: "/services/deep-tissue-massage",
                  description:
                    "Firm-pressure wellness therapy focused on deeper muscle layers and physical recovery.",
                },
                {
                  title: "Couple Massage in Gomti Nagar",
                  href: "/services/couple-massage",
                  description:
                    "A private shared wellness experience for couples with relaxing spa therapies.",
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
