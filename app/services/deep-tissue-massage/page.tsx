import ServiceHero from "@/components/services/ServiceHero";
import Image from 'next/image';
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

    const text = await res.text();

    try {
      return JSON.parse(text);
    } catch {
      return [];
    }
  } catch {
    return [];
  }
}

export const metadata = {
  title: 'Best Deep Tissue Massage in Gomti Nagar Lucknow | Relaxio Spa',
  description: 'Get the best Deep Tissue Massage in Gomti Nagar, Lucknow. Ideal for chronic pain, muscle stiffness, and sports recovery. Book your session today.',
  keywords: ['Deep Tissue Massage Lucknow', 'Best Spa in Gomti Nagar', 'Spa in Gomti Nagar Lucknow', 'Massage Spa in Lucknow', 'Body Massage near me'],
  alternates: {
  canonical: 'https://relaxiospa.in/services/deep-tissue-massage',
  },
  openGraph: {
    title: 'Best Deep Tissue Massage in Gomti Nagar Lucknow | Relaxio Spa',
    description: 'Get the best Deep Tissue Massage in Gomti Nagar, Lucknow. Ideal for chronic pain, muscle stiffness, and sports recovery.',
    url: 'https://relaxiospa.in/services/deep-tissue-massage',
    images: ['https://relaxiospa.in/images/deep-tissue-massage-gomti-nagar-lucknow.avif']
  }
};

export default async function DeepTissueMassagePage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Deep Tissue Massage', item: '/services/deep-tissue-massage' }
  ];

  const allFaqs = (await getFAQs()) || [];

const faqs = Array.isArray(allFaqs)
  ? allFaqs.filter(
      (f) => f.page?.toLowerCase().trim() === "deep-tissue"
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
  title="Deep Tissue Massage in Gomti Nagar Lucknow"
  subtitle="Relieve muscle tension and body pain with deep tissue massage therapy at Relaxio Spa."
  image="/images/deep-tissue-massage-gomti-nagar-lucknow.avif"
  alt="Deep Tissue Massage in Gomti Nagar Lucknow"
/>

      {/* Main Content */}
      <section className="pt-28 pb-24 bg-[#fdfbf7] content-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-stone prose-base md:prose-lg max-w-none font-light text-stone-700">
              <h2 
               className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Healing from the Inside Out</h2>
              <p className="mb-6 leading-relaxed">
                If you suffer from chronic aches, stiff neck, upper back pain, or leg muscle tightness, our Deep Tissue Massage is exactly what you need. As the leading <strong>massage spa in Lucknow</strong>, Relaxio Spa specializes in this intense, therapeutic treatment designed to realign deeper layers of muscles and connective tissue.
              </p>
              <p className="mb-10 leading-relaxed">
                Unlike a standard relaxation massage, deep tissue therapy uses slow, deliberate strokes and firm pressure. Our highly trained therapists focus on the inner layers of your muscles, tendons, and fascia. By physically breaking down adhesions (bands of painful, rigid tissue), this massage restores normal movement and relieves severe pain.</p>

            <FadeIn>
              <div 
                className="my-16 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/deep-tissue-massage-gomti-nagar-lucknow-spa.avif"
                  alt="Deep Tissue Massage Therapy in Gomti Nagar Lucknow Relaxio Spa"
                  fill
                  className="object-cover brightness-95"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  quality={80}
                  loading="lazy"
                />
              </div>
            </FadeIn>

              <h2 
               className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Why You Need a Deep Tissue Massage</h2>
              <p 
                className="mb-6 leading-relaxed">
                Many of our clients visit our <strong>spa in Gomti Nagar Lucknow</strong> specifically for pain management and sports recovery. A deep tissue massage provides profound, long-lasting benefits:</p>
                <div 
                 className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  "Provides highly effective chronic pain relief",
                  "Breaks up scar tissue and muscle adhesions",
                  "Rehabilitates injured muscles and speeds up recovery",
                  "Improves posture by releasing tight muscle groups",
                  "Flushes out toxins and lactic acid buildup",
                  "Increases joint mobility and flexibility",
                  "Reduces osteoarthritis and fibromyalgia symptoms",
                  "Lowers blood pressure and heart rate"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#d4af37] shrink-0 mt-1" size={20} 
                    />
                    <span 
                     className="text-stone-700">{benefit}</span>
                    </div>
                   ))}
                  </div>

              <h2 
               className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
               The Best Spa in Gomti Nagar for Pain Relief
              </h2>
              <p className="mb-6 leading-relaxed">
                Performing a deep tissue massage requires extensive anatomical knowledge and physical skill. At Relaxio Spa, our therapists are certified experts in deep tissue modalities. We don&apos;t just apply hard pressure; we apply <em>smart</em> pressure, targeting the exact source of your discomfort.
              </p>
              <p className="mb-10 leading-relaxed">
                We combine this intense therapy with premium, soothing oils and a calming luxury environment to ensure that while your muscles are being worked on, your mind remains relaxed. If you are searching for a therapeutic <strong>body massage near me</strong>, our Gomti Nagar sanctuary is equipped to help you heal.
              </p>

              <div 
                className="bg-white/95 backdrop-blur-sm p-6 md:p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-stone-100 my-16">
                <h2 
                 className="font-serif text-3xl text-stone-900 mb-8 text-center">Deep Tissue Massage Pricing</h2>
                <div 
                  className="space-y-6">
                  <div 
                  className="flex justify-between items-center border-b border-stone-100 pb-6">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">Targeted Relief</h4>
                      <p className="text-stone-500 text-sm">60 Minutes</p>
                    </div>
                    <div className="text-2xl font-serif text-[#d4af37]">₹2,999</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-100 pb-6">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">Full Body Recovery (Recommended)</h4>
                      <p className="text-stone-500 text-sm">90 Minutes</p>
                    </div>
                    <div className="text-2xl font-serif text-[#d4af37]">₹3,999</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">The Ultimate Overhaul</h4>
                      <p className="text-stone-500 text-sm">120 Minutes</p>
                    </div>
                    <div className="text-2xl font-serif text-[#d4af37]">₹4,999</div>
                  </div>
                </div>
                <div className="mt-10 text-center">
  <a
    href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20a%20Deep%20Tissue%20Massage."
    aria-label="Book Deep Tissue Massage Appointment"
    className="inline-block px-10 py-4 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors duration-300 text-sm uppercase tracking-widest font-medium w-full md:w-auto"
  >
    Book Your Appointment
  </a>
</div>
</div>

<div className="mt-16">
  <FAQ faqs={faqs} />
</div>
          </div>
        </div>
      </section>
    </>
  );
}
