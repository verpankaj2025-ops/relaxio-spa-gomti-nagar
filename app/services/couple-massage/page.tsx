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
      
      {/* FULL WIDTH HERO (container ke bahar) */}
      <section className="relative h-[420px] md:h-[480px] lg:h-[520px] flex items-center justify-center overflow-hidden bg-stone-950">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
  src="/images/couple-massage-lucknow.webp"
  alt="Couple Massage in Gomti Nagar Lucknow"
  fill
  className="object-cover object-center"
  priority
/>
    <div className="absolute inset-0 bg-black/50" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center">

    <span className="text-[#d4af37] tracking-[0.25em] uppercase text-xs md:text-sm font-medium mb-4">
      Luxury Wellness Experience
    </span>

    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight">
      Couple Massage in <br/>
      <span className="italic text-stone-300">Gomti Nagar Lucknow</span>
    </h1>

    <p className="text-sm md:text-lg text-stone-300 max-w-2xl mx-auto mb-6">
      Enjoy a relaxing and romantic couple massage with private rooms and expert therapists.
    </p>

    <a
      href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20Couple%20Massage"
      className="inline-block px-8 py-3 bg-[#d4af37] text-black rounded-full text-xs md:text-sm uppercase tracking-widest font-medium hover:bg-[#c19b2e] transition"
    >
      Book Your Session
    </a>

  </div>
</section>

      <div className="py-20 px-4 max-w-5xl mx-auto">

      <div className="max-w-3xl mx-auto text-center mb-12">
  <p className="text-lg text-stone-600 leading-relaxed">
    Enjoy a relaxing and romantic couple massage at Relaxio Spa. 
    Our private rooms, luxury ambience and professional therapists 
    create the perfect spa experience for couples in Gomti Nagar Lucknow.
  </p>
</div>

      <div className="max-w-3xl mx-auto text-center mb-16">
  <h2 className="text-3xl font-serif mb-4">
    What is Couple Massage?
  </h2>

  <p className="text-stone-600 leading-relaxed">
    Couple massage is a relaxing spa experience where two people receive massage therapy together in a private room. 
    At Relaxio Spa, we provide a peaceful and luxurious environment perfect for partners and special occasions.
  </p>
</div>

      <div className="text-center mb-10">

  <div className="text-green-600 font-medium mb-4">
    ❤️ Private Room &nbsp;|&nbsp; 💆‍♂️ Expert Therapists &nbsp;|&nbsp; 🔥 Same Time Service
  </div>

  <a
    href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20Couple%20Massage"
    className="inline-block px-8 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
  >
    Book Couple Massage on WhatsApp
  </a>

</div>

      <div className="text-center mt-12 mb-16">

  <h2 className="text-3xl font-serif mb-4">
    Benefits of Couple Massage in Gomti Nagar Lucknow
  </h2>

  <p className="text-stone-600 max-w-2xl mx-auto mb-8">
    Experience the best couple massage in Gomti Nagar Lucknow with private rooms, expert therapists and a relaxing spa ambience designed for complete comfort and connection.
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

      <div className="max-w-3xl mx-auto text-center mt-10">

  <a 
    href="/services/spa-facilities" 
    className="inline-block underline text-amber-600 mb-6"
  >
    Add Jacuzzi & Steam Bath with your couple session
  </a>

  <h2 className="text-2xl font-semibold mb-4">
    What’s Included
  </h2>

  <p className="text-stone-600 leading-relaxed">
    You can combine couple massage with Thai, Balinese or Deep Tissue therapy. 
    Add Jacuzzi or Steam Bath for a complete luxury spa experience.
  </p>

</div>

      {/* 🔥 PRICING */}
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-stone-100 text-center mt-10 mb-16">

  <h2 className="text-2xl font-serif mb-6">
    Couple Massage Pricing
  </h2>

  <div className="space-y-5 text-stone-700">

    <div className="flex justify-between items-center">
      <span>60 Minutes</span>
      <span className="text-amber-600 font-semibold">₹2999</span>
    </div>

    <div className="flex justify-between items-center">
      <span>90 Minutes (Recommended)</span>
      <span className="text-amber-600 font-semibold">₹3999</span>
    </div>

    <div className="flex justify-between items-center">
      <span>120 Minutes (Luxury Session)</span>
      <span className="text-amber-600 font-semibold">₹4999</span>
    </div>

  </div>

  <a
    href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20Couple%20Massage%20pricing"
    className="inline-block mt-8 px-8 py-3 bg-black text-white rounded-full hover:bg-stone-800 transition"
  >
    Book Your Appointment
  </a>

</div>

      {/* 🔥 FINAL CTA */}
      <div className="text-center mt-10">
  <a
    href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20Couple%20Massage%20details.%20(Source:%20Couple%20Bottom)"
    className="inline-block px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
  >
    Check Availability Now
  </a>
</div>

      <FadeIn>
  <FAQ faqs={faqs} />
</FadeIn>

    </div>

   </>
  );
}