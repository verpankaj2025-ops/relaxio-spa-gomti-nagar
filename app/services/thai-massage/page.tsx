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
  title: 'Thai Massage in Gomti Nagar Lucknow',
  description:
    'Experience authentic Thai massage therapy at Relaxio Spa in Gomti Nagar Lucknow with assisted stretching, pressure techniques, and deep relaxation.',
  alternates: {
    canonical: 'https://relaxiospa.in/services/thai-massage',
  },
  openGraph: {
    title: 'Thai Massage in Gomti Nagar Lucknow | Relaxio Spa',
    description:
      'Experience authentic Thai massage therapy with assisted stretching, deep relaxation, and professional wellness techniques at Relaxio Spa.',
    url: 'https://relaxiospa.in/services/thai-massage',
    siteName: 'Relaxio Spa',
    locale: 'en_IN',
    type: 'website',
    images: ['https://relaxiospa.in/images/thai-massage-gomti-nagar-lucknow.avif'],
  }
};

export default function ThaiMassagePage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Thai Massage', item: '/services/thai-massage' }
  ];

  const faqs = faqsData.thai || [];

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
        title="Thai Massage in Gomti Nagar Lucknow"
        subtitle="Traditional stretching and pressure-based Thai therapy designed to improve flexibility, body recovery, and relaxation."
        image="/images/thai-massage-gomti-nagar-lucknow.avif"
        alt="Thai Massage in Gomti Nagar Lucknow at Relaxio Spa"
      />

      {/* Main Content */}
      <section className="pt-20 pb-10 bg-[#fdfbf7] content-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none font-light text-stone-700">

            <h2
              className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">What is Authentic Thai Massage?</h2>
            <p className="mb-6 leading-relaxed">
              Thai Massage in Gomti Nagar Lucknow is ideal for people looking to improve flexibility, reduce body stiffness, support muscle recovery, and experience a traditional stretching-based wellness therapy that promotes deep relaxation and overall well-being.
            </p>
            <div className="space-y-6 mb-10">

              <p className="leading-relaxed">
                Unlike traditional Western massages that require oils, Thai massage is performed while you remain comfortably clothed in loose attire.
              </p>

              <p className="leading-relaxed">
                At Relaxio Spa, our Thai Massage therapy combines assisted stretching, rhythmic pressure techniques, and traditional wellness practices designed to improve flexibility, circulation, mobility, and relaxation for guests visiting from Gomti Nagar and across Lucknow.
              </p>

            </div>


            <div className="my-16 relative h-[350px] md:h-[450px] rounded-[32px] overflow-hidden shadow-lg">
              <Image
                src="/images/thai-massage-gomti-nagar-lucknow-spa.avif"
                alt="Thai Massage in Gomti Nagar Lucknow at Relaxio Spa"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                quality={80}
                className="object-cover brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>


            <h2
              className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">Top Benefits of Thai Massage</h2>
            <p
              className="mb-6 leading-relaxed">
              At Relaxio Spa, every Thai Massage session is designed to deliver physical relaxation, improved flexibility, stress relief, and a premium wellness experience for guests looking for professional massage therapy in Lucknow.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-12">
              {[
                "Improves joint flexibility and range of motion",
                "Relieves chronic lower back pain and stiffness",
                "Reduces muscle tension and spasms",
                "Boosts energy levels and reduces fatigue",
                "Stimulates blood circulation and lymphatic flow",
                "Alleviates headaches and migraines",
                "Reduces stress and promotes deep relaxation",
                "Clears energy blockages in the body"
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

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Thai Massage for Office Professionals
            </h2>

            <p className="mb-6 leading-relaxed">
              Office professionals often experience neck stiffness, shoulder tightness, lower back discomfort, and reduced flexibility due to prolonged sitting. Thai Massage combines assisted stretching and pressure techniques that help improve mobility and physical comfort.
            </p>

            <p className="mb-10 leading-relaxed">
              Many working professionals in Gomti Nagar choose Thai Massage as part of their wellness routine to reduce physical fatigue, improve flexibility, and support overall relaxation after long working hours.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
              Why Guests Choose Our Thai Therapy
            </h2>

            <p className="mb-10 leading-relaxed">
              At Relaxio Spa, Thai Massage is delivered by trained therapists who understand traditional stretching techniques, body alignment, and pressure-point based wellness practices. Guests choose our Thai therapy because it combines flexibility improvement, stress relief, relaxation, and overall wellness in one experience.

              Our focus on hygiene, comfort, privacy, and personalized wellness sessions makes Relaxio Spa a preferred destination for Thai Massage in Gomti Nagar Lucknow.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 mt-16">
              Who Should Get Thai Massage?
            </h2>

            <p className="mb-6 leading-relaxed">
              Thai massage is suitable for office professionals, fitness enthusiasts,
              travellers, and individuals experiencing body stiffness due to long sitting
              hours. Regular sessions may help improve flexibility and support overall
              wellness.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 mt-16">
              Thai Massage vs Deep Tissue Massage
            </h2>

            <p className="mb-6 leading-relaxed">
              Thai massage focuses on stretching, flexibility, and energy flow, while deep
              tissue massage focuses on deeper muscle layers and chronic tension relief.
              Both therapies provide unique wellness benefits depending on individual
              needs.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 mt-16">
              After Your Thai Massage Session
            </h2>

            <p className="mb-6 leading-relaxed">
              Guests are encouraged to stay hydrated, rest adequately, and avoid intense
              physical activity immediately after a Thai massage session to maximize
              relaxation benefits.
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6 mt-16">
              How Often Should You Get Thai Massage?
            </h2>

            <p className="mb-6 leading-relaxed">
              Many guests enjoy Thai massage every few weeks as part of their wellness
              routine. Frequency may vary depending on lifestyle, stress levels, and
              personal wellness goals.
            </p>
            <p className="mb-6 leading-relaxed">
              Professional Thai therapy requires proper stretching techniques, trained therapists, and a calm wellness environment.
            </p>
            <p className="mb-10 leading-relaxed">
              Relaxio Spa focuses on comfort, hygiene, privacy, and authentic wellness experiences for every guest.
            </p>
            <div className="w-24 h-px bg-[#d4af37] my-16 mx-auto" />

            <PricingSection
              title="Thai Massage Packages"
              description="Professional Thai massage therapy with stretching techniques, deep relaxation, and luxury wellness experience in Gomti Nagar Lucknow."
              buttonText="Book Thai Massage"
              whatsappMessage="Hi Relaxio Spa, I want Thai Massage. (Source: Thai Page)"
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
              Thai Massage in Gomti Nagar Lucknow
            </h2>

            <p className="mb-6 leading-relaxed">
              Relaxio Spa offers professional Thai Massage in Gomti Nagar Lucknow for guests seeking flexibility improvement, stress relief, and complete body relaxation in a premium wellness environment.
            </p>

            <p className="mb-10 leading-relaxed">
              Guests from Gomti Nagar, Vibhuti Khand, Viram Khand, Patrakarpuram, Indira Nagar, and nearby areas frequently visit Relaxio Spa for authentic Thai wellness therapy and relaxation experiences.
            </p>

            <p className="text-center text-sm text-stone-600 mb-12">
              Want to learn before booking?{" "}
              <Link
                href="/blog/best-thai-massage-benefits-lucknow"
                className="text-amber-800 underline underline-offset-4"
              >
                Read our Thai massage benefits guide
              </Link>{" "}
              or explore the{" "}
              <Link href="/blog" className="text-amber-800 underline underline-offset-4">
                Wellness Journal
              </Link>
              .
            </p>
            <div className="w-24 h-px bg-[#d4af37] my-16 mx-auto" />

            <ExploreMore
              therapies={[
                {
                  title: "Balinese Massage",
                  href: "/services/balinese-massage",
                  description:
                    "Experience aromatherapy-based relaxation therapy designed for stress relief and peaceful body recovery.",
                },
                {
                  title: "Deep Tissue Massage",
                  href: "/services/deep-tissue-massage",
                  description:
                    "Deep pressure therapy focused on muscle recovery, stiffness reduction, and chronic tension relief.",
                },
                {
                  title: "Couple Massage",
                  href: "/services/couple-massage",
                  description:
                    "Enjoy a relaxing private spa experience for couples with premium wellness therapies and peaceful ambience.",
                },

                {
                  title: "Spa Facilities",
                  href: "/services/spa-facilities",
                  description:
                    "Luxury Jacuzzi and Steam Bath experiences designed for relaxation and wellness.",
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
