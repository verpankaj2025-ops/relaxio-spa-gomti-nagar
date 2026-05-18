import ServiceHero from "@/components/services/ServiceHero";
import Image from "next/image";
import Link from "next/link";
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';
import FAQ from "@/components/FAQ";
import FadeIn from '@/components/ui/FadeIn';
import PricingSection from "@/components/services/PricingSection";
import ExploreMore from "@/components/services/ExploreMore";

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
  <div className="my-16 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
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

  <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">Why Guests Choose Our Couple Wellness Experience
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

  <PricingSection
  title="Couple Massage Packages"
  description="Luxury couple wellness therapy with private spa rooms, peaceful ambience, and relaxing massage experience in Gomti Nagar Lucknow."
  buttonText="Book Couple Massage"
  whatsappMessage="Hi Relaxio Spa, I want Couple Massage. (Source: Couple Massage Page)"
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

  <ExploreMore
  therapies={[
    {
      title: "Balinese Massage",
      href: "/services/balinese-massage",
      description:
        "Relaxing aromatherapy wellness therapy designed for stress relief and calmness.",
    },
    {
      title: "Thai Massage",
      href: "/services/thai-massage",
      description:
        "Traditional assisted stretching therapy designed for flexibility and body recovery.",
    },
    {
      title: "Jacuzzi & Steam Bath",
      href: "/services/spa-facilities",
      description:
        "Luxury steam and Jacuzzi wellness sessions for complete relaxation.",
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