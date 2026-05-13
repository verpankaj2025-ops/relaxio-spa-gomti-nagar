import ServiceHero from "@/components/services/ServiceHero";
import Image from 'next/image';
import Link from "next/link";
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';
import FAQ from "@/components/FAQ";
import FadeIn from '@/components/ui/FadeIn';
import { CheckCircle2 } from 'lucide-react';

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
      <section className="pt-28 pb-24 bg-[#fdfbf7] content-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-stone prose-base md:prose-lg max-w-none font-light text-stone-700">
            
              <h2 
               className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">What is Authentic Thai Massage?</h2>
              <p className="mb-6 leading-relaxed">
                Thai massage is ideal for people looking to improve flexibility, reduce body stiffness, and experience deep stretching-based relaxation therapy. 
              </p>
              <p className="mb-10 leading-relaxed">
                Unlike traditional Western massages that require you to undress and use oils, a Thai massage is performed while you are fully clothed in loose, comfortable attire. The treatment takes place on a premium padded mat on the floor, allowing our expert therapists to use their body weight to apply deep, rhythmic pressure along your body&apos;s energy lines (known as Sen lines).</p>

            <FadeIn>
              <div className="my-16 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/thai-massage-gomti-nagar-lucknow-spa.avif"
                  alt="Relaxing Thai massage therapy at Relaxio Spa"
  fill
  sizes="(max-width: 768px) 100vw, 1200px"
  quality={75}
  className="object-cover brightness-95"
  loading="lazy"
/>
              </div>
            </FadeIn>

              <h2 
               className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Top Benefits of Thai Massage</h2>
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
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#d4af37] shrink-0 mt-1" size={20} />
                    <span className="text-stone-700">{benefit}</span>
                  </div>
                ))}
              </div>
            
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Why Guests Choose Our Thai Therapy?</h2>
              <p className="mb-6 leading-relaxed">
                Professional Thai therapy requires proper stretching techniques, trained therapists, and a calm wellness environment.
              </p>
              <p className="mb-10 leading-relaxed">
                  Relaxio Spa focuses on comfort, hygiene, privacy, and authentic wellness experiences for every guest.
                </p>

              <div className="bg-white/95 backdrop-blur-sm p-6 md:p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-stone-100 my-16 max-w-6xl mx-auto">
                <h2 className="font-serif text-3xl text-stone-900 mb-8 text-center">Thai Massage Pricing</h2>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-stone-100 pb-6">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">Express Stretch</h4>
                      <p className="text-stone-500 text-sm">60 Minutes</p>
                    </div>
                    <div className="text-2xl font-serif text-[#d4af37]">₹2,499</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-100 pb-6">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">Deep Healing (Recommended)</h4>
                      <p className="text-stone-500 text-sm">90 Minutes</p>
                    </div>
                    <div className="text-2xl font-serif text-[#d4af37]">₹3,499</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">Ultimate Rejuvenation</h4>
                      <p className="text-stone-500 text-sm">120 Minutes</p>
                    </div>
                    <div className="text-2xl font-serif text-[#d4af37]">₹4,499</div>
                  </div>
                </div>
                <div className="mt-10 text-center">
                  <a
                     href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20Thai%20Massage.%20(Source:%20Thai%20Page)"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Book Thai Massage Appointment"
                     className="inline-block px-10 py-4 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors duration-300 text-sm uppercase tracking-widest font-medium w-full md:w-auto"
                   >
                     Book Your Appointment
                   </a>
                </div>
              </div>

              <section className="mt-24">
  <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-10">
    Explore More Wellness Therapies
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <Link
      href="/services/balinese-massage"
      className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-[#d4af37] hover:shadow-lg transition-all"
    >
      <h3 className="text-2xl font-serif text-stone-900 mb-4">
        Balinese Massage
      </h3>

      <p className="text-stone-600 leading-relaxed">
        Experience aromatherapy-based relaxation therapy designed for stress relief and peaceful body recovery.
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
        Deep pressure therapy focused on muscle recovery, stiffness reduction, and chronic tension relief.
      </p>
    </Link>

    <Link
      href="/services/couple-massage"
      className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-[#d4af37] hover:shadow-lg transition-all"
    >
      <h3 className="text-2xl font-serif text-stone-900 mb-4">
        Couple Massage
      </h3>

      <p className="text-stone-600 leading-relaxed">
        Enjoy a relaxing private spa experience for couples with premium wellness therapies and peaceful ambiance.
      </p>
    </Link>

  </div>
</section>

            <div className="mt-16">
              <FAQ faqs={faqs} />
           </div>

          </div>
        </div>
      </section>
    </>
  );
}
