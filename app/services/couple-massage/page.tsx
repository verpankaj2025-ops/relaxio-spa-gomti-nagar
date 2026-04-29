import ServiceHero from "@/components/services/ServiceHero";
import Image from "next/image";
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';
import FAQ from "@/components/FAQ";
import FadeIn from '@/components/ui/FadeIn';
import { CheckCircle2 } from 'lucide-react';

export const dynamic = "force-dynamic";

async function getFAQs() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/faqs`, {
      cache: "no-store",
    });

    return res.json();
  } catch {
    return [];
  }
}

export const metadata = {
  title: "Couple Massage in Gomti Nagar Lucknow | Relaxio Spa",
  description:
    "Book romantic couple massage in Gomti Nagar Lucknow at Relaxio Spa. Private room, luxury ambience, trained therapists. Starting from ₹2999.",
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
      
      {/* HERO SECTION */}
      <ServiceHero
  title="Couple Massage in Gomti Nagar Lucknow"
  subtitle="Enjoy a luxury couple massage experience with private spa rooms at Relaxio Spa."
  image="/images/couple-massage-lucknow.webp"
  alt="Couple Massage in Gomti Nagar Lucknow"
/>

      <section className="py-24 bg-[#fdfbf7] content-auto">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="prose prose-stone prose-lg max-w-none font-light text-stone-700">

      <div className="max-w-3xl mx-auto text-center mb-12">
  <p className="text-lg text-stone-600 leading-relaxed">
    Enjoy a relaxing and romantic couple massage at Relaxio Spa. 
    Our private rooms, luxury ambience and professional therapists 
    create the perfect spa experience for couples in Gomti Nagar Lucknow.
  </p>
</div>

      <div 
      className="text-center mt-12 mb-16">

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

</div>
  </div>

  <FadeIn>
  <div className="my-16 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
    <Image
      src="/images/couple-massage-lucknow-spa.webp"
      alt="Couple Massage Therapy in Gomti Nagar Lucknow Relaxio Spa"
      fill
      className="object-cover"
      loading="lazy"
    />
  </div>
</FadeIn>

<FadeIn>
  <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
    Why Relaxio is the Best Couple Spa in Gomti Nagar
  </h2>

  <p className="mb-6 leading-relaxed">
    At Relaxio Spa, we provide a premium couple massage experience designed for relaxation, privacy, and complete wellness. Our luxury spa rooms are specially designed for couples seeking a peaceful and romantic spa session in Gomti Nagar Lucknow.
  </p>

  <p className="mb-10 leading-relaxed">
    Our trained therapists provide synchronized massage therapies using premium oils, calming ambience, relaxing music, and hygienic spa standards. Whether you are visiting for stress relief, celebration, or quality time together, Relaxio Spa offers one of the best couple massage experiences in Lucknow.
  </p>
</FadeIn>

  </div>

    </div>

  {/* 🔥 PREMIUM PRICING */}
<div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-xl border border-stone-100 px-8 md:px-10 py-12 my-20">

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
      className="inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-sm uppercase tracking-[0.2em] text-white hover:bg-stone-800 transition"
    >
      Book Your Appointment
    </a>
  </div>

</div>

  <FAQ faqs={faqs} 
  />

   </section>

</>
  );
}