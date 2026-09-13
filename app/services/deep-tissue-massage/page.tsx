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
  title: "Deep Tissue Massage in Gomti Nagar Lucknow | Relaxio Spa",
  description:
    "Book Deep Tissue Massage in Gomti Nagar Lucknow at Relaxio Spa. Firm-pressure wellness therapy for muscle tension, mobility, relaxation and physical recovery.",
  alternates: {
    canonical: "https://relaxiospa.in/services/deep-tissue-massage",
  },
  openGraph: {
    title: "Deep Tissue Massage in Gomti Nagar Lucknow | Relaxio Spa",
    description:
      "Professional Deep Tissue Massage in Gomti Nagar Lucknow with focused pressure techniques, a calm private setting and wellness-focused care.",
    url: "https://relaxiospa.in/services/deep-tissue-massage",
    siteName: "Relaxio Spa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://relaxiospa.in/images/deep-tissue-massage-gomti-nagar-lucknow.avif",
        width: 1200,
        height: 630,
        alt: "Deep Tissue Massage in Gomti Nagar Lucknow at Relaxio Spa",
      },
    ],
  },
};

export default function DeepTissueMassagePage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: "Deep Tissue Massage", item: "/services/deep-tissue-massage" },
  ];

  const faqs = faqsData["deep-tissue"] || [];

  const serviceSchema = getServiceSchema({
    name: "Deep Tissue Massage in Gomti Nagar Lucknow",
    description:
      "Professional Deep Tissue Massage therapy in Gomti Nagar Lucknow designed to reduce muscle tension, support recovery and promote physical relaxation.",
    url: "https://relaxiospa.in/services/deep-tissue-massage",
    image:
      "https://relaxiospa.in/images/deep-tissue-massage-gomti-nagar-lucknow.avif",
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
        title="Deep Tissue Massage in Gomti Nagar Lucknow"
        subtitle="Firm-pressure wellness therapy designed to release muscle tightness, improve mobility and support body recovery."
        image="/images/deep-tissue-massage-gomti-nagar-lucknow.avif"
        alt="Deep Tissue Massage in Gomti Nagar Lucknow at Relaxio Spa"
      />

      <section className="pt-20 pb-10 bg-[#fdfbf7] content-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-stone prose-base md:prose-lg max-w-none font-light text-stone-700">
            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Deep Tissue Massage in Gomti Nagar Lucknow
            </h2>

            <p className="mb-6 leading-relaxed">
              Relaxio Spa offers professional Deep Tissue Massage in Gomti
              Nagar Lucknow for guests experiencing muscle tightness, body
              stiffness, physical fatigue or tension from long working hours,
              travel or exercise.
            </p>

            <p className="mb-10 leading-relaxed">
              Deep Tissue Massage uses slow, focused strokes and firm pressure
              to work on deeper muscle layers. Pressure can be adjusted around
              individual comfort and wellness goals throughout the session.
            </p>

            <div className="my-16 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/deep-tissue-massage-gomti-nagar-lucknow-spa.avif"
                alt="Professional Deep Tissue Massage therapy in Gomti Nagar Lucknow at Relaxio Spa"
                fill
                className="object-cover brightness-95"
                sizes="(max-width: 768px) 100vw, 1200px"
                quality={80}
                loading="lazy"
              />
            </div>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Benefits of Deep Tissue Massage
            </h2>

            <p className="mb-6 leading-relaxed">
              Deep Tissue Massage is designed around targeted pressure,
              physical relaxation and mobility support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-12">
              {[
                "Helps reduce everyday muscle tension and stiffness",
                "Supports muscle recovery after physical activity",
                "May improve mobility and flexibility",
                "Can help release tight areas after prolonged sitting",
                "Useful for guests with active or physically demanding routines",
                "Encourages overall physical relaxation",
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
              Deep Tissue Massage for Office Professionals
            </h2>

            <p className="mb-10 leading-relaxed">
              Long hours at a desk can contribute to tightness around the
              neck, shoulders, lower back and hips. Deep Tissue Massage can be
              part of a wellness routine for professionals looking to unwind
              and support better physical comfort after a demanding workday.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Who Should Choose Deep Tissue Massage?
            </h2>

            <p className="mb-10 leading-relaxed">
              This therapy can suit office professionals, fitness enthusiasts,
              athletes, travelers and guests who prefer firmer pressure and a
              targeted wellness session. Guests should communicate comfort
              preferences to the therapist before and during the session.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Deep Tissue Massage Process at Relaxio Spa
            </h2>

            <p className="mb-10 leading-relaxed">
              Sessions begin with a brief discussion about preferred pressure
              and areas of focus. The therapist then uses controlled strokes
              and focused pressure on selected muscle groups, adjusting the
              session according to comfort and wellness goals.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Deep Tissue Massage vs Regular Relaxation Massage
            </h2>

            <p className="mb-10 leading-relaxed">
              A relaxation massage generally emphasizes comfort and soothing
              movement, while Deep Tissue Massage uses firmer, more targeted
              pressure on deeper muscle areas. The right option depends on the
              type of wellness experience you prefer.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Deep Tissue Massage in Gomti Nagar Lucknow
            </h2>

            <p className="mb-6 leading-relaxed">
              Relaxio Spa is located in Vivek Khand 4, Gomti Nagar and welcomes
              guests from Gomti Nagar, Vibhuti Khand, Viram Khand, Patrakarpuram,
              Indira Nagar and nearby Lucknow areas.
            </p>

            <p className="mb-10 leading-relaxed">
              Contact Relaxio Spa to check availability, session duration and
              the latest package details before booking.
            </p>

            <PricingSection
              title="Deep Tissue Massage Pricing"
              description="Choose a 60, 90 or 120-minute Deep Tissue Massage session at Relaxio Spa in Gomti Nagar Lucknow."
              buttonText="Book Deep Tissue Massage"
              whatsappMessage="Hi Relaxio Spa, I want Deep Tissue Massage in Gomti Nagar Lucknow."
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

            <p className="text-center text-sm text-stone-600 mb-12">
              Looking for a different wellness experience?{" "}
              <Link
                href="/services/thai-massage"
                className="text-amber-800 underline underline-offset-4"
              >
                Explore Thai Massage
              </Link>{" "}
              or{" "}
              <Link
                href="/services/balinese-massage"
                className="text-amber-800 underline underline-offset-4"
              >
                explore Balinese Massage
              </Link>
              .
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
                  title: "Balinese Massage in Gomti Nagar",
                  href: "/services/balinese-massage",
                  description:
                    "Aromatherapy-based wellness therapy focused on stress relief and calm relaxation.",
                },
                {
                  title: "Couple Massage in Gomti Nagar",
                  href: "/services/couple-massage",
                  description:
                    "Private shared wellness experience for couples with relaxing spa therapies.",
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
