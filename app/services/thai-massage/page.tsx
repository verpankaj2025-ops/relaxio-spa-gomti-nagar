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
    const res = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRqjcqONpk-8NyLGN4e74KKzFsGp8SMgZvOZxtBinYLaTg7IDQG8-NwuOFgbzTDCMfLVvIAJTiYEiPx/pub?output=csv",
      {
        next: { revalidate: 3600 },
      }
    );

    const text = await res.text();

    const rows = text
      .split("\n")
      .slice(1)
      .filter((row) => row.trim() !== "");

    const faqs = rows
      .map((row) => {
        const cols = row
          .split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
          .map((col) =>
            col
              .replace(/^"|"$/g, "")
              .replace(/\r/g, "")
              .trim()
          );

        return {
          page: cols[0]?.toLowerCase() || "",
          question: cols[1] || "",
          answer: cols.slice(2).join(", ") || "",
        };
      })
      .filter(
        (faq) =>
          faq.page &&
          faq.question &&
          faq.answer
      );

    return faqs;

  } catch (error) {
    console.error(error);
    return [];
  }
}

export const metadata = {
  title: 'Luxury Thai Massage Therapy | Relaxio Spa',
  description: 
     'Experience authentic Thai massage therapy at Relaxio Spa in Gomti Nagar Lucknow with assisted stretching, pressure techniques, and deep relaxation.',
  alternates: {
    canonical: 'https://relaxiospa.in/services/thai-massage',
  },
  openGraph: {
    title: 'Luxury Thai Massage Therapy | Relaxio Spa',
    description:
       'Experience authentic Thai massage therapy with assisted stretching, deep relaxation, and professional wellness techniques at Relaxio Spa.',
    url: 'https://relaxiospa.in/services/thai-massage',
    images: ['https://relaxiospa.in/images/thai-massage-gomti-nagar-lucknow.avif'],
  }
};

export default async function ThaiMassagePage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Thai Massage', item: '/services/thai-massage' }
  ];

  const allFaqs = (await getFAQs()) || [];

const faqs = Array.isArray(allFaqs)
  ? allFaqs.filter(
      (f) => f.page?.toLowerCase().trim() === "thai"
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
  title="Thai Massage in Gomti Nagar Lucknow"
  subtitle="Traditional stretching and pressure-based Thai therapy designed to improve flexibility, body recovery, and relaxation."
  image="/images/thai-massage-gomti-nagar-lucknow.avif"
  alt="Relaxing Thai massage therapy at Relaxio Spa"
/>

      {/* Main Content */}
      <section className="pt-20 pb-10 bg-[#fdfbf7] content-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none font-light text-stone-700">
            
              <h2 
               className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">What is Authentic Thai Massage?</h2>
              <p className="mb-6 leading-relaxed">
                Thai massage is ideal for people looking to improve flexibility, reduce body stiffness, and experience deep stretching-based relaxation therapy. 
              </p>
              <div className="space-y-6 mb-10">

                 <p className="leading-relaxed">
                    Unlike traditional Western massages that require oils, Thai massage is performed while you remain comfortably clothed in loose attire.
                  </p>

                  <p className="leading-relaxed">
                    The therapy takes place on a premium padded mat, allowing therapists to apply rhythmic stretching and pressure techniques designed to improve flexibility, circulation, and relaxation.
                   </p>

                </div>

            <FadeIn>
  <div className="my-16 relative h-[350px] md:h-[450px] rounded-[32px] overflow-hidden shadow-lg">
                <Image
                  src="/images/thai-massage-gomti-nagar-lucknow-spa.avif"
                  alt="Relaxing Thai massage therapy at Relaxio Spa"
  fill
  sizes="(max-width: 768px) 100vw, 1200px"
  quality={55}
  className="object-cover brightness-95"
  loading="lazy"
/>
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </FadeIn>

              <h2 
               className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">Top Benefits of Thai Massage</h2>
              <p 
               className="mb-6 leading-relaxed">
                At Relaxio Spa, every Thai massage session is designed to deliver physical relaxation and improved body flexibility.
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
                    <CheckCircle2 className="text-[#d4af37] shrink-0 mt-1" size={20} />
                    <span className="text-stone-700">{benefit}</span>
                  </div>
                ))}
              </div>
            
              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">Why Guests Choose Our Thai Therapy?</h2>
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
