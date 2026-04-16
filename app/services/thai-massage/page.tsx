import Image from 'next/image';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';
import FadeIn from '@/components/ui/FadeIn';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Best Thai Massage in Gomti Nagar Lucknow | Relaxio Spa',
  description: 'Experience the best authentic Thai Massage in Gomti Nagar, Lucknow. Improve flexibility, relieve joint tension, and boost energy with our certified therapists.',
  keywords: ['Thai Massage Lucknow', 'Best Thai Massage in Gomti Nagar', 'Spa in Gomti Nagar Lucknow', 'Massage Spa in Lucknow', 'Body Massage near me'],
  alternates: {
    canonical: '/services/thai-massage',
  },
  openGraph: {
    title: 'Best Thai Massage in Gomti Nagar Lucknow | Relaxio Spa',
    description: 'Experience the best authentic Thai Massage in Gomti Nagar, Lucknow. Improve flexibility, relieve joint tension, and boost energy.',
    url: '/services/thai-massage',
    images: ['https://picsum.photos/seed/thai-massage-detail/1200/630'],
  }
};

export default function ThaiMassagePage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Thai Massage', item: '/services/thai-massage' }
  ];

  const faqs = [
    {
      question: "What should I wear for a Thai Massage?",
      answer: "Unlike traditional oil massages, Thai massage is performed fully clothed. We provide loose, comfortable cotton garments for you to wear during the session to allow for maximum flexibility and stretching."
    },
    {
      question: "Is Thai Massage painful?",
      answer: "While Thai massage involves deep stretching and pressure, it should not be painful. Our expert therapists in Gomti Nagar will communicate with you to ensure the pressure is perfectly tailored to your comfort level."
    },
    {
      question: "How is Thai Massage different from regular massage?",
      answer: "Thai massage is often called 'lazy man's yoga'. Instead of rubbing muscles with oil, the therapist uses their hands, knees, legs, and feet to move you into a series of yoga-like stretches and applies deep muscle compression."
    },
    {
      question: "How long does a typical session last?",
      answer: "At Relaxio Spa, we offer Thai massage sessions ranging from 60 minutes to 120 minutes. We highly recommend a 90-minute session to allow enough time for a full-body stretch and complete relaxation."
    }
  ];

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
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image src="https://picsum.photos/seed/thai-massage-hero/1920/1080" alt="Authentic Thai Massage in Gomti Nagar Lucknow" fill className="object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-[#d4af37] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Premium Wellness</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
              Best Thai Massage in <br/><span className="italic text-stone-300">Gomti Nagar Lucknow</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 font-light max-w-2xl mx-auto mb-10">
              Discover the ancient healing art of Thai Massage. Improve flexibility, relieve deep joint tension, and restore your body&apos;s natural energy flow at Lucknow&apos;s most luxurious spa.
            </p>
            <a href="https://wa.me/919999999999?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20a%20Thai%20Massage." 
               className="inline-block px-10 py-4 bg-[#d4af37] text-white rounded-full hover:bg-[#c19b2e] transition-all duration-300 text-sm uppercase tracking-widest font-medium shadow-lg hover:-translate-y-1">
              Book Your Session
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-[#fdfbf7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-stone prose-lg max-w-none font-light text-stone-700">
            
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">What is Authentic Thai Massage?</h2>
              <p className="mb-6 leading-relaxed">
                If you are searching for a rejuvenating <strong>spa in Gomti Nagar Lucknow</strong>, our authentic Thai Massage is the perfect choice. Often referred to as &quot;lazy man&apos;s yoga,&quot; Thai massage is a centuries-old healing system that combines acupressure, Indian Ayurvedic principles, and assisted yoga postures. 
              </p>
              <p className="mb-10 leading-relaxed">
                Unlike traditional Western massages that require you to undress and use oils, a Thai massage is performed while you are fully clothed in loose, comfortable attire. The treatment takes place on a premium padded mat on the floor, allowing our expert therapists to use their body weight to apply deep, rhythmic pressure along your body&apos;s energy lines (known as Sen lines).
              </p>
            </FadeIn>

            <FadeIn>
              <div className="my-16 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="https://picsum.photos/seed/thai-massage-detail/1200/800" alt="Thai Massage Therapy in Lucknow" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Top Benefits of Thai Massage</h2>
              <p className="mb-6 leading-relaxed">
                As the <strong>best spa in Gomti Nagar</strong>, Relaxio Spa ensures that every Thai massage session delivers profound physical and mental benefits. Here is why this therapy is highly recommended:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
            </FadeIn>

            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Why Choose Relaxio Spa for Thai Massage in Lucknow?</h2>
              <p className="mb-6 leading-relaxed">
                Finding a reliable <strong>massage spa in Lucknow</strong> can be challenging. At Relaxio Spa, we pride ourselves on delivering a 5-star luxury experience. Our therapists are rigorously trained in authentic Thai techniques, ensuring that every stretch and compression is performed safely and effectively.
              </p>
              <p className="mb-10 leading-relaxed">
                Our Gomti Nagar facility is designed to be a tranquil sanctuary. From the moment you step in, you are greeted with calming aromas, soothing music, and impeccable hygiene standards. We use freshly laundered cotton garments for every client and sanitize our premium floor mats meticulously after each session. If you are looking for a <strong>body massage near me</strong> that prioritizes your wellness and privacy, Relaxio Spa is your ultimate destination.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-stone-100 my-16">
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
                  <a href="https://wa.me/919999999999?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20a%20Thai%20Massage." 
                     className="inline-block px-10 py-4 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all duration-300 text-sm uppercase tracking-widest font-medium w-full md:w-auto">
                    Book Your Appointment
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-8 mb-16">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                    <h3 className="text-xl font-serif text-stone-900 mb-3">{faq.question}</h3>
                    <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
}
