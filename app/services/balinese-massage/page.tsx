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
  } catch {
    return [];
  }
}

export const metadata = {
  title: 'Best Balinese Massage in Gomti Nagar Lucknow | Relaxio Spa',
  description: 'Indulge in the best Balinese Massage in Gomti Nagar, Lucknow. A holistic, full-body treatment combining acupressure, aromatherapy, and deep relaxation.',
  keywords: ['Balinese Massage Lucknow', 'Best Spa in Gomti Nagar', 'Spa in Gomti Nagar Lucknow', 'Massage Spa in Lucknow', 'Body Massage near me'],
  alternates: {
    canonical: '/services/balinese-massage',
  },
  openGraph: {
    title: 'Best Balinese Massage in Gomti Nagar Lucknow | Relaxio Spa',
    description: 'Indulge in the best Balinese Massage in Gomti Nagar, Lucknow. A holistic, full-body treatment combining acupressure, aromatherapy, and deep relaxation.',
    url: '/services/balinese-massage',
    images: ['https://relaxiospa.in/images/balinese-massage-gomti-nagar-lucknow.webp']
  }
};

export default async function BalineseMassagePage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Balinese Massage', item: '/services/balinese-massage' }
  ];

  const allFaqs = (await getFAQs()) || [];

const faqs = Array.isArray(allFaqs)
  ? allFaqs.filter(
      (f) => f.page?.toLowerCase().trim() === "balinese"
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
            title="Balinese Massage in Gomti Nagar Lucknow"
            subtitle="Relax your body and mind with luxury Balinese massage therapy at Relaxio Spa."
            image="/images/balinese-massage-gomti-nagar-lucknow.webp"
            alt="Balinese Massage in Gomti Nagar Lucknow"
          />

      {/* Main Content */}
          <section className="pt-28 pb-24 bg-[#fdfbf7] content-auto">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-stone prose-base md:prose-lg max-w-none font-light text-stone-700">

              <h2 
                className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
                Incredible Benefits of Balinese Massage
               </h2>
              <p className="mb-6 leading-relaxed">
              A Balinese massage is more than just a luxury; it is a therapeutic journey. If you are searching for a <strong>body massage near me</strong> that offers comprehensive healing, here is what you can expect:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  "Deeply relaxes the mind and reduces anxiety",
                  "Relieves muscle tension and joint pain",
                  "Improves blood circulation and heart rate",
                  "Enhances sleep quality and cures insomnia",
                  "Nourishes the skin with premium essential oils",
                  "Boosts the immune system and lymphatic drainage",
                  "Restores the body's natural energy balance",
                  "Alleviates symptoms of depression and stress"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#d4af37] shrink-0 mt-1" size={20} />
                  <span className="text-stone-700">{benefit}</span>
                  </div>
                ))}
              </div>

                 <FadeIn>
                   <div className="my-16 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
                   <Image 
                   src="/images/balinese-massage-gomti-nagar-lucknow-spa.webp"
                   alt="Balinese Massage Therapy in Gomti Nagar Lucknow Relaxio Spa"
                   fill
                   sizes="(max-width: 768px) 100vw, 1200px"
                   quality={80}
                   className="object-cover brightness-95"
                   loading="lazy"
                   />
                </div>
                </FadeIn>
            
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
                Why Relaxio is the Best Spa in Gomti Nagar
              </h2>
              <p className="mb-6 leading-relaxed">
                At Relaxio Spa, we believe that the environment is just as important as the therapy itself. Our luxury spa in Gomti Nagar Lucknow is designed to transport you to a state of absolute serenity. Our private therapy rooms are soundproofed, climate-controlled, and infused with calming scents.
              </p>
              <p className="mb-10 leading-relaxed">
                Our therapists are certified experts in Balinese techniques. They understand how to read your body&apos;s tension points and adjust their pressure accordingly. We strictly maintain 100% hygiene, using fresh, high-quality linens and sanitized equipment for every guest. Experience the pinnacle of wellness and see why we are rated the top <strong>spa in Gomti Nagar Lucknow</strong>.
              </p>

              <div className="bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-stone-100 my-16">
                <h2 className="font-serif text-3xl text-stone-900 mb-8 text-center">Balinese Massage Pricing</h2>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-stone-100 pb-6">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">Serenity Session</h4>
                      <p className="text-stone-500 text-sm">60 Minutes</p>
                    </div>
                    <div className="text-2xl font-serif text-[#d4af37]">₹2,499</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-100 pb-6">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">Deep Relaxation (Recommended)</h4>
                      <p className="text-stone-500 text-sm">90 Minutes</p>
                    </div>
                    <div className="text-2xl font-serif text-[#d4af37]">₹3,499</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900">The Royal Balinese</h4>
                      <p className="text-stone-500 text-sm">120 Minutes</p>
                    </div>
                    <div className="text-2xl font-serif text-[#d4af37]">₹4,499</div>
                  </div>
                </div>
                <div className="mt-10 text-center">
                  <a 
                    href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20a%20Balinese%20Massage."
                    aria-label="Book Balinese Massage Appointment" 
                    className="inline-block px-10 py-4 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors duration-300 text-sm uppercase tracking-widest font-medium w-full md:w-auto">
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
