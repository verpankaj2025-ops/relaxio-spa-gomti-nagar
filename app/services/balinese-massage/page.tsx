import { faqsData } from "@/lib/faqs";
import ServiceHero from "@/components/services/ServiceHero";
import Image from 'next/image';
import Link from "next/link";
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';
import FAQ from "@/components/FAQ";
import { IconCheckCircle } from '@/components/icons';
import PricingSection from "@/components/services/PricingSection";
import ExploreMore from "@/components/services/ExploreMore";

export const metadata = {
  title: 'Balinese Massage in Gomti Nagar Lucknow | Relaxio Spa',
  description:
    'Experience professional Balinese Massage in Gomti Nagar Lucknow at Relaxio Spa. Enjoy aromatherapy, stress relief, relaxation, and a luxury wellness experience.',
  alternates: {
    canonical: 'https://relaxiospa.in/services/balinese-massage',
  },
  openGraph: {
    title: 'Balinese Massage in Gomti Nagar Lucknow | Relaxio Spa',
    description:
      'Experience professional Balinese Massage in Gomti Nagar Lucknow at Relaxio Spa. Enjoy aromatherapy, stress relief, relaxation, and a luxury wellness experience.',
    url: 'https://relaxiospa.in/services/balinese-massage',
    siteName: 'Relaxio Spa',
    locale: 'en_IN',
    type: 'website',
    images: ['https://relaxiospa.in/images/balinese-massage-gomti-nagar-lucknow.avif']
  }
};

export default function BalineseMassagePage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Balinese Massage', item: '/services/balinese-massage' }
  ];

  const faqs = faqsData.balinese || [];

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Spa",
            "name": "Relaxio Spa",
            "url": "https://relaxiospa.in",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lucknow",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            }
          })
        }}
      />

      {/* Hero Section */}
      <ServiceHero
        title="Balinese Massage in Gomti Nagar Lucknow"
        subtitle="Aromatherapy-based wellness therapy designed to relax the body, calm the mind, and reduce everyday stress."
        image="/images/balinese-massage-gomti-nagar-lucknow.avif"
        alt="Luxury Balinese massage therapy at Relaxio Spa"
      />

      {/* Main Content */}
      <section className="pt-20 pb-10 bg-[#fdfbf7] content-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none font-light text-stone-700">

            <h2
              className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Incredible Benefits of Balinese Massage
            </h2>
            <p className="mb-6 leading-relaxed">
              Balinese Massage in Gomti Nagar Lucknow combines aromatherapy oils, gentle stretching, and therapeutic pressure techniques to create a deeply relaxing wellness experience that helps reduce stress, improve circulation, and support overall well-being.
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
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <IconCheckCircle className="shrink-0 mt-1" size={20} />
                  <span className="text-stone-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="my-16 relative h-[350px] md:h-[450px] rounded-[32px] overflow-hidden shadow-lg">

              <Image
                src="/images/balinese-massage-gomti-nagar-lucknow-spa.avif"
                alt="Luxury Balinese massage therapy at Relaxio Spa"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover brightness-95"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            </div>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Balinese Massage for Office Professionals
            </h2>

            <p className="mb-6 leading-relaxed">
              Office professionals often experience stress, mental fatigue, poor sleep quality, and muscle tension due to long working hours. Balinese Massage combines aromatherapy and relaxation techniques that help calm the mind and support emotional well-being.
            </p>

            <p className="mb-10 leading-relaxed">
              Many professionals in Gomti Nagar choose Balinese Massage to disconnect from daily stress, improve relaxation, and enjoy a premium wellness experience after demanding work schedules.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Why Guests Love Our Balinese Therapy
            </h2>
            <p className="mb-6 leading-relaxed">
              At Relaxio Spa, our Balinese Massage therapy is designed for guests seeking relaxation, stress relief, and a premium wellness experience in Gomti Nagar Lucknow with professionally guided massage techniques and calming aromatherapy.
            </p>
            <div className="space-y-6 mb-10">

              <p className="leading-relaxed">
                Our trained therapists understand traditional Balinese Massage techniques and personalize each session according to your comfort level, helping reduce muscle tension, mental fatigue, and everyday stress.
              </p>

              <p className="leading-relaxed">
                We maintain high hygiene standards using fresh premium-quality linens and sanitized equipment for every guest. Experience the pinnacle of wellness and discover why Relaxio Spa is known as a premium wellness destination.
              </p>

              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
                Who Should Choose Balinese Massage?
              </h2>

              <p className="mb-10 leading-relaxed">
                Balinese Massage in Gomti Nagar Lucknow is ideal for guests seeking stress relief, mental relaxation, and a calm wellness experience. Office professionals, entrepreneurs, travelers, and individuals experiencing mental fatigue often choose Balinese Massage to disconnect from daily stress and restore balance.

                The therapy is also suitable for people who prefer moderate pressure combined with aromatherapy oils. Guests experiencing mild muscle tension, poor sleep quality, emotional stress, or general fatigue often find Balinese Massage to be a deeply relaxing experience.

                Many first-time spa visitors choose Balinese Massage because it combines traditional massage techniques with essential oils, helping create a comfortable and soothing introduction to wellness therapies.
              </p>

              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
                What Happens During a Balinese Massage Session?
              </h2>

              <p className="mb-10 leading-relaxed">
                Every Balinese Massage session at Relaxio Spa begins with a short consultation to understand guest preferences and wellness goals. Aromatherapy oils are selected to create a relaxing atmosphere and enhance the overall experience.

                The therapy combines long flowing strokes, gentle stretching, acupressure-inspired techniques, and rhythmic massage movements. These techniques help calm the nervous system while supporting physical relaxation and improved circulation.

                Throughout the session, therapists maintain a balanced pressure level designed to encourage comfort and relaxation. The experience concludes with a period of rest, allowing guests to fully enjoy the calming effects of the therapy.
              </p>

              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
                Benefits of Balinese Massage
              </h2>

              <p className="mb-10 leading-relaxed">
                Balinese Massage is widely appreciated for its ability to reduce stress and promote emotional well-being. The combination of aromatherapy and massage techniques helps calm the mind while encouraging a sense of relaxation.

                Guests often report improved sleep quality, reduced anxiety, and a greater sense of balance after therapy. The massage techniques may also support healthy circulation, improve flexibility, and reduce everyday muscle tension.

                For individuals seeking a wellness-focused spa experience in Gomti Nagar Lucknow, Balinese Massage offers a combination of physical comfort and mental relaxation that supports overall well-being.
              </p>

              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
                Why Relaxio Spa is a Preferred Wellness Destination
              </h2>

              <p className="mb-10 leading-relaxed">
                Relaxio Spa provides a premium wellness environment designed to help guests unwind and recharge. Our private spa rooms, trained therapists, high hygiene standards, and calming ambience create a comfortable experience from start to finish.

                Conveniently located in Gomti Nagar Lucknow, Relaxio Spa welcomes guests looking for professional wellness therapies in a peaceful setting. Every session is delivered with attention to guest comfort, privacy, and overall wellness.

                Whether you are seeking stress relief, relaxation, or a luxury spa experience, Relaxio Spa offers a professional environment focused on quality and guest satisfaction.
              </p>

            </div>

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

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 mt-16">
              Balinese Massage in Gomti Nagar Lucknow
            </h2>

            <p className="mb-6 leading-relaxed">
              Relaxio Spa offers professional Balinese Massage in Gomti Nagar Lucknow with aromatherapy oils, stress relief techniques, and luxury wellness experiences designed for complete relaxation.
            </p>

            <p className="mb-10 leading-relaxed">
              Guests from Gomti Nagar, Vibhuti Khand, Viram Khand, Patrakarpuram, Indira Nagar, and nearby areas visit Relaxio Spa for premium Balinese wellness therapy and relaxation sessions.
            </p>

            <p className="text-center text-sm text-stone-600 mb-12">
              Looking for more spa wellness insights?{" "}
              <Link href="/blog" className="text-amber-800 underline underline-offset-4">
                Explore the Wellness Journal
              </Link>{" "}
              for relaxation tips, massage guides, and local spa advice before you book.
            </p>

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

                {
                  title: "Couple Massage",
                  href: "/services/couple-massage",
                  description:
                    "Luxury private wellness experience for couples with relaxing spa therapies.",
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
