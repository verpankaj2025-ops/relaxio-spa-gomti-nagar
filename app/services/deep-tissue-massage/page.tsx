import Image from 'next/image';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';
import FadeIn from '@/components/ui/FadeIn';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Best Deep Tissue Massage in Gomti Nagar Lucknow | Relaxio Spa',
  description: 'Get the best Deep Tissue Massage in Gomti Nagar, Lucknow. Ideal for chronic pain, muscle stiffness, and sports recovery. Book your session today.',
  keywords: ['Deep Tissue Massage Lucknow', 'Best Spa in Gomti Nagar', 'Spa in Gomti Nagar Lucknow', 'Massage Spa in Lucknow', 'Body Massage near me'],
  alternates: {
    canonical: '/services/deep-tissue-massage',
  },
  openGraph: {
    title: 'Best Deep Tissue Massage in Gomti Nagar Lucknow | Relaxio Spa',
    description: 'Get the best Deep Tissue Massage in Gomti Nagar, Lucknow. Ideal for chronic pain, muscle stiffness, and sports recovery.',
    url: '/services/deep-tissue-massage',
    images: ['https://relaxiospa.in/images/deep-tissue-massage-gomti-nagar-lucknow.webp']
  }
};

export default function DeepTissueMassagePage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Deep Tissue Massage', item: '/services/deep-tissue-massage' }
  ];

  const faqs = [
    {
      question: "Is Deep Tissue Massage painful?",
      answer: "Deep tissue massage uses firm pressure to reach deeper muscle layers. While you may feel some discomfort as knots are worked out, it should never be agonizingly painful. Our therapists in Gomti Nagar will constantly check in with you to adjust the pressure."
    },
    {
      question: "Will I be sore after the massage?",
      answer: "It is common to feel a bit sore for a day or two after a deep tissue massage, similar to how you feel after a good workout. Drinking plenty of water helps flush out the toxins released during the session."
    },
    {
      question: "Who should get a Deep Tissue Massage?",
      answer: "This therapy is ideal for athletes, individuals with chronic back or neck pain, people recovering from injuries, or anyone experiencing severe muscle stiffness from sitting at a desk all day."
    },
    {
      question: "How often should I get a Deep Tissue Massage?",
      answer: "For chronic pain or injury recovery, we recommend a session every 1-2 weeks initially. For general maintenance and tension relief, once a month is highly beneficial."
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
        <div className="absolute inset-0 z-0">
  <Image 
    src="/images/deep-tissue-massage-gomti-nagar-lucknow.webp"
    alt="Deep Tissue Massage in Gomti Nagar Lucknow Relaxio Spa"
    fill
    className="object-cover object-bottom"
    priority
  />

  <div className="absolute inset-0 bg-black/50" />
</div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-[#d4af37] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Targeted Pain Relief</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
              Best Deep Tissue Massage in <br/><span className="italic text-stone-300">Gomti Nagar Lucknow</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 font-light max-w-2xl mx-auto mb-10">
              Release chronic muscle tension, break up scar tissue, and alleviate severe stiffness with our intense, focused deep tissue therapy.
            </p>
            <a href="https://wa.me/919999999999?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20a%20Deep%20Tissue%20Massage." 
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
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Healing from the Inside Out</h2>
              <p className="mb-6 leading-relaxed">
                If you suffer from chronic aches, stiff neck, upper back pain, or leg muscle tightness, our Deep Tissue Massage is exactly what you need. As the leading <strong>massage spa in Lucknow</strong>, Relaxio Spa specializes in this intense, therapeutic treatment designed to realign deeper layers of muscles and connective tissue.
              </p>
              <p className="mb-10 leading-relaxed">
                Unlike a standard relaxation massage, deep tissue therapy uses slow, deliberate strokes and firm pressure. Our highly trained therapists focus on the inner layers of your muscles, tendons, and fascia. By physically breaking down adhesions (bands of painful, rigid tissue), this massage restores normal movement and relieves severe pain.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="my-16 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
  src="/images/deep-tissue-therapy-lucknow-spa.webp"
  alt="Deep Tissue Massage Therapy in Gomti Nagar Lucknow Relaxio Spa"
  fill
  className="object-cover"
  loading="lazy"
/>
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Why You Need a Deep Tissue Massage</h2>
              <p className="mb-6 leading-relaxed">
                Many of our clients visit our <strong>spa in Gomti Nagar Lucknow</strong> specifically for pain management and sports recovery. A deep tissue massage provides profound, long-lasting benefits:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                    <CheckCircle2 className="text-[#d4af37] shrink-0 mt-1" size={20} />
                    <span className="text-stone-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">The Best Spa in Gomti Nagar for Pain Relief</h2>
              <p className="mb-6 leading-relaxed">
                Performing a deep tissue massage requires extensive anatomical knowledge and physical skill. At Relaxio Spa, our therapists are certified experts in deep tissue modalities. We don&apos;t just apply hard pressure; we apply <em>smart</em> pressure, targeting the exact source of your discomfort.
              </p>
              <p className="mb-10 leading-relaxed">
                We combine this intense therapy with premium, soothing oils and a calming luxury environment to ensure that while your muscles are being worked on, your mind remains relaxed. If you are searching for a therapeutic <strong>body massage near me</strong>, our Gomti Nagar sanctuary is equipped to help you heal.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-stone-100 my-16">
                <h2 className="font-serif text-3xl text-stone-900 mb-8 text-center">Deep Tissue Massage Pricing</h2>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-stone-100 pb-6">
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
                  <a href="https://wa.me/919999999999?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20a%20Deep%20Tissue%20Massage." 
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
