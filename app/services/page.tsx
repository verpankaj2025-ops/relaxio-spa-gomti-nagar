import Image from 'next/image';
import Link from 'next/link';
import FAQ from "@/components/FAQ";

export const dynamic = "force-dynamic";
async function getFAQs() {
  try {
    const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const res = await fetch(`${baseUrl}/api/faqs`, {
  cache: "no-store",
});

    return res.json();
  } catch (error) {
    console.error("FAQ fetch error:", error);
    return [];
  }
}

export const metadata = {
  title: 'Our Spa Services',
  description: 'Explore our premium spa services in Gomti Nagar, Lucknow including Thai, Balinese, and Deep Tissue massages.',
};

export default async function ServicesPage() {
  const allFaqs = (await getFAQs()) || [];

  console.log("ALL FAQS 👉", Array.isArray(allFaqs) ? allFaqs : "NOT ARRAY");

  const faqs = Array.isArray(allFaqs)
  ? allFaqs.filter(
      (f) => f.page?.toLowerCase().trim() === "services"
    )
  : [];

  console.log("FILTERED FAQS", faqs);
  return (
    <>
    <div className="pt-32 pb-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-stone-900 mb-6">Our Premium Therapies</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
            Discover the perfect treatment for your body and mind. Our certified therapists customize each session to your specific needs.
          </p>
        </div>

        <div className="space-y-24">
          {/* Deep Tissue */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px]">
              <Image 
  src="/images/deep-tissue-massage-gomti-nagar-lucknow.webp"
  alt="Deep Tissue Massage in Gomti Nagar Lucknow"
  fill
  className="object-cover"
  loading="lazy"
/>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-4">Deep Tissue Massage</h2>
              <p className="text-stone-600 mb-6 font-light leading-relaxed">
                Designed to relieve severe tension in the muscle and the connective tissue or fascia. This type of massage focuses on the muscles located below the surface of the top muscles. Perfect for individuals who experience consistent pain, are involved in heavy physical activity, or have sustained physical injury.
              </p>
              <ul className="space-y-3 mb-8 font-light text-stone-700">
                <li>✓ Relieves chronic muscle tension</li>
                <li>✓ Improves blood pressure</li>
                <li>✓ Breaks up scar tissue</li>
                <li>✓ Rehabilitates injured muscles</li>
              </ul>
              <Link href="/services/deep-tissue-massage" className="inline-block border-b-2 border-amber-500 text-amber-600 pb-1 hover:text-amber-500 hover:border-amber-400 transition-colors uppercase tracking-widest text-sm font-medium">
                Learn More & Book
              </Link>
            </div>
          </div>

          {/* Balinese */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-serif text-stone-900 mb-4">Balinese Massage</h2>
              <p className="text-stone-600 mb-6 font-light leading-relaxed">
                A full-body, deep-tissue, holistic treatment. Balinese massage uses a combination of gentle stretches, acupressure, reflexology, and aromatherapy to stimulate the flow of blood, oxygen, and &quot;qi&quot; (energy) around your body, bringing a sense of wellbeing, calm, and deep relaxation.
              </p>
              <ul className="space-y-3 mb-8 font-light text-stone-700">
                <li>✓ Deep relaxation and stress relief</li>
                <li>✓ Improves circulation</li>
                <li>✓ Relieves joint pain</li>
                <li>✓ Boosts mood with aromatherapy</li>
              </ul>
              <Link href="/services/balinese-massage" className="inline-block border-b-2 border-amber-500 text-amber-600 pb-1 hover:text-amber-500 hover:border-amber-400 transition-colors uppercase tracking-widest text-sm font-medium">
                Learn More & Book
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[500px] order-1 lg:order-2">
         <Image 
           src="/images/balinese-massage-gomti-nagar-lucknow.webp"
           alt="Balinese Massage in Gomti Nagar Lucknow"
           fill
           className="object-cover"
           loading="lazy"
/>
            </div>
          </div>

          {/* Thai Massage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px]">
              <Image 
  src="/images/thai-massage-gomti-nagar-lucknow.webp"
  alt="Thai Massage in Gomti Nagar Lucknow"
  fill
  className="object-cover"
  loading="lazy"
/>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-4">Thai Massage</h2>
              <p className="text-stone-600 mb-6 font-light leading-relaxed">
                An ancient healing system combining acupressure, Indian Ayurvedic principles, and assisted yoga postures. Unlike traditional massages, Thai massage doesn&apos;t use oils or lotions, and you remain fully clothed. The therapist uses their hands, knees, legs, and feet to move you into a series of yoga-like stretches.
              </p>
              <ul className="space-y-3 mb-8 font-light text-stone-700">
                <li>✓ Increases flexibility and range of motion</li>
                <li>✓ Relieves headaches and back pain</li>
                <li>✓ Boosts energy levels</li>
                <li>✓ Reduces stress and anxiety</li>
              </ul>
              <Link href="/services/thai-massage" className="inline-block border-b-2 border-amber-500 text-amber-600 pb-1 hover:text-amber-500 hover:border-amber-400 transition-colors uppercase tracking-widest text-sm font-medium">
                Learn More & Book
              </Link>
            </div>
          </div>
          {/* Couple Massage */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

  <div className="order-2 lg:order-1">
    <h2 className="text-3xl font-serif text-stone-900 mb-4">
      Couple Massage
    </h2>

    <p className="text-stone-600 mb-6 font-light leading-relaxed">
      Enjoy a romantic and relaxing couple massage experience in Gomti Nagar Lucknow with private luxury rooms and expert therapists.
    </p>

    <ul className="space-y-3 mb-8 font-light text-stone-700">
      <li>✓ Private luxury spa room</li>
      <li>✓ Relaxing ambiance</li>
      <li>✓ Aromatherapy oils</li>
      <li>✓ Perfect for couples</li>
    </ul>

    <Link
      href="/services/couple-massage"
      className="inline-block border-b-2 border-amber-500 text-amber-600 pb-1 hover:text-amber-500 hover:border-amber-400 transition-colors uppercase tracking-widest text-sm font-medium"
    >
      Learn More & Book
    </Link>
  </div>

  <div className="relative h-[400px] lg:h-[500px] order-1 lg:order-2">
    <Image
      src="/images/couple-massage-lucknow.webp"
      alt="Couple Massage in Gomti Nagar Lucknow"
      fill
      className="object-cover"
      loading="lazy"
    />
        </div>
        </div>
        
{/* Jacuzzi & Steam Bath */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

  <div className="relative h-[400px] lg:h-[500px]">
    <Image
      src="/images/jacuzzi-steam-bath-lucknow.webp"
      alt="Jacuzzi and Steam Bath in Gomti Nagar Lucknow"
      fill
      className="object-cover"
      loading="lazy"
    />
  </div>

  <div>
    <h2 className="text-3xl font-serif text-stone-900 mb-4">
      Jacuzzi & Steam Bath
    </h2>

    <p className="text-stone-600 mb-6 font-light leading-relaxed">
      Detox and relax your body with premium Jacuzzi and Steam Bath sessions at Relaxio Spa Gomti Nagar Lucknow.
    </p>

    <ul className="space-y-3 mb-8 font-light text-stone-700">
      <li>✓ Detoxifies the body</li>
      <li>✓ Improves blood circulation</li>
      <li>✓ Relieves stress & fatigue</li>
      <li>✓ Luxury spa experience</li>
    </ul>

    <Link
      href="/services/spa-facilities"
      className="inline-block border-b-2 border-amber-500 text-amber-600 pb-1 hover:text-amber-500 hover:border-amber-400 transition-colors uppercase tracking-widest text-sm font-medium"
    >
      Learn More & Book
    </Link>
  </div>

      </div>
    </div>
</div>

</div>

    {/* 👇 FAQ SECTION */}
    <FAQ faqs={faqs} />
  </>
);
}
