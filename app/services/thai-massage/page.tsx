import ServiceHero from "@/components/services/ServiceHero";
import Image from 'next/image';
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
  } catch (error) {
    return [];
  }
}

export const metadata = {
  title: 'Best Thai Massage in Gomti Nagar Lucknow | Relaxio Spa',
  description: 'Experience the best authentic Thai Massage in Gomti Nagar, Lucknow. Improve flexibility, relieve joint tension, and boost energy with our certified therapists.',
  keywords: ['Thai Massage Lucknow', 'Best Thai Massage in Gomti Nagar', 'Spa in Gomti Nagar Lucknow', 'Massage Spa in Lucknow', 'Body Massage near me'],
  alternates: {
    canonical: 'https://relaxiospa.in/services/thai-massage',
  },
  openGraph: {
    title: 'Best Thai Massage in Gomti Nagar Lucknow | Relaxio Spa',
    description: 'Experience the best authentic Thai Massage in Gomti Nagar, Lucknow. Improve flexibility, relieve joint tension, and boost energy.',
    url: 'https://relaxiospa.in/services/thai-massage',
    images: ['https://relaxiospa.in/images/thai-massage-gomti-nagar-lucknow.webp'],
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
  subtitle="Experience authentic Thai massage therapy at Relaxio Spa Gomti Nagar Lucknow."
  image="/images/thai-massage-gomti-nagar-lucknow.webp"
  alt="Thai Massage in Gomti Nagar Lucknow"
/>

      {/* Main Content */}
      <section className="pt-28 pb-24 bg-[#fdfbf7] content-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-stone prose-base md:prose-lg max-w-none font-light text-stone-700">
            
              <h2 
               className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">What is Authentic Thai Massage?</h2>
              <p className="mb-6 leading-relaxed">If you are searching for a rejuvenating <strong>spa in Gomti Nagar Lucknow</strong>, our authentic Thai Massage is the perfect choice. Often referred to as &quot;lazy man&apos;s yoga,&quot; Thai massage is a centuries-old healing system that combines acupressure, Indian Ayurvedic principles, and assisted yoga postures. 
              </p>
              <p className="mb-10 leading-relaxed">
                Unlike traditional Western massages that require you to undress and use oils, a Thai massage is performed while you are fully clothed in loose, comfortable attire. The treatment takes place on a premium padded mat on the floor, allowing our expert therapists to use their body weight to apply deep, rhythmic pressure along your body&apos;s energy lines (known as Sen lines).</p>

            <FadeIn>
              <div className="my-16 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
  src="/images/thai-massage-gomti-nagar-lucknow-spa.webp"
  alt="Thai Massage Therapy in Gomti Nagar Lucknow Relaxio Spa"
  fill
  sizes="(max-width: 768px) 100vw, 1200px"
  quality={80}
  className="object-cover brightness-95"
  loading="lazy"
/>
              </div>
            </FadeIn>

              <h2 
               className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Top Benefits of Thai Massage</h2>
              <p 
               className="mb-6 leading-relaxed">As the <strong>best spa in Gomti Nagar</strong>, Relaxio Spa ensures that every Thai massage session delivers profound physical and mental benefits. Here is why this therapy is highly recommended:
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
            
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Why Choose Relaxio Spa for Thai Massage in Lucknow?</h2>
              <p className="mb-6 leading-relaxed">
                Finding a reliable <strong>massage spa in Lucknow</strong> can be challenging. At Relaxio Spa, we pride ourselves on delivering a 5-star luxury experience. Our therapists are rigorously trained in authentic Thai techniques, ensuring that every stretch and compression is performed safely and effectively.
              </p>
              <p className="mb-10 leading-relaxed">
                Our Gomti Nagar facility is designed to be a tranquil sanctuary. From the moment you step in, you are greeted with calming aromas, soothing music, and impeccable hygiene standards. We use freshly laundered cotton garments for every client and sanitize our premium floor mats meticulously after each session. If you are looking for a <strong>body massage near me</strong> that prioritizes your wellness and privacy, Relaxio Spa is your ultimate destination.</p>

              <div className="bg-white/95 backdrop-blur-sm p-6 md:p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-stone-100 my-16">
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
  aria-label="Book Thai Massage Appointment"
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
