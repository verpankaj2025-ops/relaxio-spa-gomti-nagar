import ServiceHero from "@/components/services/ServiceHero";
import Image from "next/image";
import Link from "next/link";
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';
import FAQ from "@/components/FAQ";
import FadeIn from '@/components/ui/FadeIn';
export const revalidate = 3600;

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

export const metadata = {
  title:
    "Luxury Couple Wellness Experience | Relaxio Spa",

  description:
    "Enjoy a private couple wellness experience with relaxing massage therapies, peaceful spa rooms, and premium wellness services at Relaxio Spa.",


  openGraph: {
    title:
      "Luxury Couple Wellness Experience | Relaxio Spa",

    description:
      "Enjoy a private couple wellness experience with relaxing massage therapies and peaceful spa rooms at Relaxio Spa.",

    images: [
      "https://relaxiospa.in/images/couple-massage-lucknow.avif",
    ],
  },

  alternates: {
    canonical:
      "https://relaxiospa.in/services/couple-massage",
  },
};

export default async function CoupleMassagePage() {

    const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Couple Massage', item: '/services/couple-massage' }
  ];

  const allFaqs = (await getFAQs()) || [];

  const faqs = Array.isArray(allFaqs)
    ? allFaqs.filter(
        (f) => f.page?.toLowerCase().trim() === "couple-massage"
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
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",

      name: "Relaxio Spa Gomti Nagar Lucknow",

      image:
        "https://relaxiospa.in/images/couple-massage-lucknow.avif",

      telephone: "+917081891995",

      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
      },
      
      priceRange: "₹₹₹",
    }),
  }}
/>
      
      {/* HERO SECTION */}
      <ServiceHero
  title="Couple Massage in Gomti Nagar Lucknow"
  subtitle="Relax together with private wellness therapies designed for comfort, peace, and shared relaxation."
  image="/images/couple-massage-lucknow.avif"
  alt="Private couple massage experience at Relaxio Spa"
/>

      <section className="pt-28 pb-24 bg-[#fdfbf7] content-auto">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="prose prose-stone prose-base md:prose-lg max-w-none font-light text-stone-700">

      <div className="max-w-4xl mx-auto text-center mb-12">
  <p className="text-lg text-stone-600 leading-relaxed">
    Enjoy a peaceful couple wellness experience with private spa rooms, calming ambience, and professionally guided massage therapies designed for relaxation and comfort.
  </p>
</div>
<p className="text-stone-600 leading-relaxed mt-6">
  Couples can enjoy calming spa therapies in private rooms designed for comfort, relaxation, and peaceful shared experiences.
</p>
      <div className="text-center mt-12 mb-16">
  <h2 
    className="text-3xl font-serif mb-4">
    Why Couples Enjoy Wellness Therapy Together
  </h2>

  <p className="text-stone-600 max-w-2xl mx-auto mb-8">
    Couple wellness therapy creates a peaceful environment where both guests can relax together, reduce stress, and enjoy a calming spa experience.
  </p>

    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto text-left text-stone-700">

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Private couple spa room for complete privacy</span>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Professional therapists for synchronized massage</span>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Luxury ambience with relaxing music</span>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Perfect for couples and special occasions</span>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Improves bonding and emotional connection</span>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Reduces stress and mental fatigue</span>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Enhances relaxation and comfort</span>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Private spa experience designed for couples</span>
  </div>
  <div className="flex items-start gap-3">
  <span className="text-amber-500 mt-1 text-sm">✔</span>

  <span>
    Private Jacuzzi and steam wellness experience
  </span>
</div>

<div className="flex items-start gap-3">
  <span className="text-amber-500 mt-1 text-sm">✔</span>

  <span>
    Peaceful wellness environment with premium amenities
  </span>
</div>

</div>
  </div>

  <FadeIn>
  <div className="my-16 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
    <Image
       src="/images/couple-massage-lucknow-spa.avif"
       alt="Private couple massage experience at Relaxio Spa"
       fill
       sizes="(max-width:768px) 100vw, 1200px"
       className="object-cover brightness-95"
       loading="lazy"
     />
  </div>
</FadeIn>

  <h2 className="font-serif text-3xl md:text-amber-700xl text-stone-900 mb-6">Why Guests Choose Our Couple Wellness Experience
  </h2>

  <p className="mb-6 leading-relaxed">
    At Relaxio Spa, we focus on creating a peaceful and comfortable environment where couples can relax together and enjoy premium wellness therapies in complete privacy.
  </p>

  <p className="mb-10 leading-relaxed">
     Our therapists provide synchronized wellness therapies using premium oils, calming music, and hygienic spa standards to create a deeply relaxing experience for couples. Whether you are visiting for relaxation, celebration, or peaceful quality time together, Relaxio Spa offers a comfortable and private wellness environment.
</p>

  </div>

  <div className="text-center my-16">
  <p className="text-2xl font-serif text-stone-900">
    Luxury Wellness Experience for Couples
  </p>

  <p className="text-stone-600 mt-4">
    Certified Therapists • Luxury Ambience • Hygienic Couple Spa Rooms
  </p>
</div>

  {/* 🔥 PREMIUM PRICING */}
<div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-[32px] shadow-xl border border-stone-100 px-6 md:px-10 py-12 my-20">

  <h2 className="text-3xl md:text-amber-700xl font-serif text-center text-stone-900 mb-12">
    Couple Massage Pricing
  </h2>

  <div className="divide-y divide-stone-200">

    {/* Package 1 */}
    <div className="flex items-center justify-between py-6">
      <div>
        <h3 className="text-2xl font-serif text-stone-900">
          Romantic Escape
        </h3>

        <p className="text-stone-500 mt-1">
          60 Minutes
        </p>
      </div>

      <p className="text-3xl text-[#d4af37] font-serif">
        ₹2,999
      </p>
    </div>

    {/* Package 2 */}
    <div className="flex items-center justify-between py-6">
      <div>
        <h3 className="text-2xl font-serif text-stone-900">
          Luxury Couple Retreat (Recommended)
        </h3>

        <p className="text-stone-500 mt-1">
          90 Minutes
        </p>
      </div>

      <p className="text-3xl text-[#d4af37] font-serif">
        ₹3,999
      </p>
    </div>

    {/* Package 3 */}
    <div className="flex items-center justify-between py-6">
      <div>
        <h3 className="text-2xl font-serif text-stone-900">
          Royal Couple Wellness
        </h3>

        <p className="text-stone-500 mt-1">
          120 Minutes
        </p>
      </div>

      <p className="text-3xl text-[#d4af37] font-serif">
        ₹4,999
      </p>
    </div>

  </div>

  <div className="text-center mt-10">
    <a
      href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20Couple%20Massage"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book Couple Massage on WhatsApp"
      className="inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-sm uppercase tracking-[0.2em] text-white hover:bg-stone-800 transition-colors duration-300"
    >
      Book Couple Spa Appointment
    </a>
  </div>

  </div>
  <section className="mt-24">
  <h2 className="font-serif text-3xl md:text-amber-700xl text-stone-900 mb-10">
    Explore More Wellness Therapies
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <Link
      href="/services/thai-massage"
      className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-[#d4af37] hover:shadow-lg transition-all"
    >
      <h3 className="text-2xl font-serif text-stone-900 mb-4">
        Thai Massage
      </h3>

      <p className="text-stone-600 leading-relaxed">
        Traditional stretching and pressure-based therapy designed to improve flexibility and relaxation.
      </p>
    </Link>

    <Link
      href="/services/balinese-massage"
      className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-[#d4af37] hover:shadow-lg transition-all"
    >
      <h3 className="text-2xl font-serif text-stone-900 mb-4">
        Balinese Massage
      </h3>

      <p className="text-stone-600 leading-relaxed">
        Aromatherapy wellness therapy focused on stress relief and full-body relaxation.
      </p>
    </Link>

    <Link
      href="/services/deep-tissue-massage"
      className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-[#d4af37] hover:shadow-lg transition-all"
    >
      <h3 className="text-2xl font-serif text-stone-900 mb-4">
        Deep Tissue Massage
      </h3>

      <p className="text-stone-600 leading-relaxed">
        Firm-pressure wellness therapy focused on muscle recovery and mobility support.
      </p>
    </Link>

  </div>
</section>


  <div className="mt-16">
  <FAQ faqs={faqs} />
</div>

</div>

   </section>

</>
  );
}