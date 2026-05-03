import ServiceHero from "@/components/services/ServiceHero";
import Image from "next/image";
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';
import FAQ from "@/components/FAQ";
import FadeIn from '@/components/ui/FadeIn';
export const revalidate = 3600;

async function getFAQs() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/faqs`, {
      next: { revalidate: 3600 }
    });

    return res.json();
  } catch {
    return [];
  }
}

export const metadata = {
  title:
    "Couple Massage in Gomti Nagar Lucknow | Luxury Couple Spa | Relaxio Spa",

  description:
    "Book luxury couple massage in Gomti Nagar Lucknow at Relaxio Spa. Private couple spa rooms, romantic ambience, Thai massage, steam bath & premium wellness therapies.",

  keywords: [
    "Couple Massage Gomti Nagar",
    "Couple Spa Lucknow",
    "Luxury Spa Lucknow",
    "Best Couple Spa in Gomti Nagar",
    "Thai Massage Lucknow",
    "Romantic Spa for Couples",
  ],

  openGraph: {
    title:
      "Couple Massage in Gomti Nagar Lucknow | Relaxio Spa",

    description:
      "Luxury couple massage and spa experience in Gomti Nagar Lucknow.",

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

      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "5000",
      },

      priceRange: "₹₹₹",
    }),
  }}
/>
      
      {/* HERO SECTION */}
      <ServiceHero
  title="Couple Massage in Gomti Nagar Lucknow"
  subtitle="Enjoy a luxury couple massage experience with private spa rooms at Relaxio Spa."
  image="/images/couple-massage-lucknow.avif"
  alt="Couple Massage in Gomti Nagar Lucknow"
/>

      <section className="pt-28 pb-24 bg-[#fdfbf7] content-auto">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="prose prose-stone prose-base md:prose-lg max-w-none font-light text-stone-700">

      <div className="max-w-3xl mx-auto text-center mb-12">
  <p className="text-lg text-stone-600 leading-relaxed">
    Enjoy a relaxing and romantic couple massage at Relaxio Spa. 
    Our private rooms, luxury ambience and professional therapists 
    create the perfect spa experience for couples in Gomti Nagar Lucknow.
  </p>
</div>
<p className="text-stone-600 leading-relaxed mt-6">
  Relaxio Spa is one of the most trusted luxury couple spas in Gomti Nagar Lucknow, known for private spa rooms, premium wellness therapies, and romantic spa experiences.
</p>
      <div className="text-center mt-12 mb-16">
  <h2 
    className="text-3xl font-serif mb-4">
    Incredible Benefits of Couple Massage
  </h2>

  <p className="text-stone-600 max-w-2xl mx-auto mb-8">
    A couple massage is more than just a relaxing spa session; it is a luxury wellness experience designed for comfort, bonding, and stress relief. If you are searching for the best couple massage in Gomti Nagar Lucknow, here is what you can expect:
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
    <span>Best couple spa experience in Lucknow</span>
  </div>
  <div className="flex items-start gap-3">
  <span className="text-amber-500 mt-1 text-sm">✔</span>

  <span>
    Luxury Jacuzzi and steam bath spa experience
  </span>
</div>

<div className="flex items-start gap-3">
  <span className="text-amber-500 mt-1 text-sm">✔</span>

  <span>
    Best luxury couple spa in Gomti Nagar Lucknow
  </span>
</div>

</div>
  </div>

  <FadeIn>
  <div className="my-16 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
    <Image
       src="/images/couple-massage-lucknow-spa.avif"
       alt="Couple Massage Therapy in Gomti Nagar Lucknow Relaxio Spa"
       fill
       sizes="(max-width:768px) 100vw, 1200px"
       className="object-cover brightness-95"
       loading="lazy"
     />
  </div>
</FadeIn>

  <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Why Relaxio is the Best Couple Spa in Gomti Nagar
  </h2>

  <p className="mb-6 leading-relaxed">
    At Relaxio Spa, we provide a premium couple massage experience designed for relaxation, privacy, and complete wellness. Our luxury spa rooms are specially designed for couples seeking a peaceful and romantic spa session in Gomti Nagar Lucknow.
  </p>

  <p className="mb-10 leading-relaxed">
  Our trained therapists provide synchronized massage therapies using premium oils, calming ambience, relaxing music, and hygienic spa standards.

  We also offer premium Thai Massage, Balinese Massage, Steam Bath Spa, and Jacuzzi Spa therapies in Gomti Nagar Lucknow.

  Whether you are visiting for stress relief, celebration, or quality time together, Relaxio Spa offers one of the best couple massage experiences in Lucknow.
</p>
  </div>
  </div>

  <div className="text-center my-16">
  <p className="text-2xl font-serif text-stone-900">
    ★★★★★ Rated 4.9 by 5000+ Happy Clients
  </p>

  <p className="text-stone-600 mt-4">
    Certified Therapists • Luxury Ambience • Hygienic Couple Spa Rooms
  </p>
</div>

  {/* 🔥 PREMIUM PRICING */}
<div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-[32px] shadow-xl border border-stone-100 px-6 md:px-10 py-12 my-20">

  <h2 className="text-3xl md:text-4xl font-serif text-center text-stone-900 mb-12">
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
      aria-label="Book Couple Massage on WhatsApp"
      className="inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-sm uppercase tracking-[0.2em] text-white hover:bg-stone-800 transition-colors duration-300"
    >
      Book Couple Spa Appointment
    </a>
  </div>

</div>
  <div className="mt-16">
  <FAQ faqs={faqs} />
</div>

   </section>

</>
  );
}