import Image from 'next/image';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';
import FadeIn from '@/components/ui/FadeIn';
import { CheckCircle2 } from 'lucide-react';

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

export default function BalineseMassagePage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Balinese Massage', item: '/services/balinese-massage' }
  ];

  const faqs = [
    {
      question: "What is a Balinese Massage?",
      answer: "Balinese massage is a full-body, deep-tissue, holistic treatment. It uses a combination of gentle stretches, acupressure, reflexology, and aromatherapy to stimulate the flow of blood, oxygen, and 'qi' (energy) around your body."
    },
    {
      question: "Is Balinese massage good for relaxation?",
      answer: "Absolutely. It is one of the most relaxing therapies available at our spa in Gomti Nagar Lucknow. The use of warm essential oils and smooth, flowing strokes deeply relaxes the mind and body."
    },
    {
      question: "How is it different from a Swedish massage?",
      answer: "While Swedish massage focuses primarily on relaxation using long, gliding strokes, Balinese massage incorporates deeper tissue work, acupressure, and reflexology to address muscle knots and energy blockages."
    },
    {
      question: "What oils are used during the massage?",
      answer: "At Relaxio Spa, we use premium, authentic essential oils imported specifically for our Balinese treatments. These include jasmine, sandalwood, and frangipani, which are known for their calming and therapeutic properties."
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
      <section className="relative h-[50vh] min-h-[340px] max-h-[520px] flex items-center justify-center overflow-hidden bg-stone-950">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image 
      src="/images/balinese-massage-gomti-nagar-lucknow.webp"
      alt="Balinese Massage in Gomti Nagar Lucknow Relaxio Spa"
      fill
      className="object-cover object-[center_70%]"
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
      Best Balinese Massage in <br/>
      <span className="italic text-stone-300">Gomti Nagar Lucknow</span>
    </h1>

    <p className="text-sm md:text-lg text-stone-300 font-light max-w-2xl mx-auto mb-6 leading-relaxed">
      Experience deep relaxation with Balinese massage in Gomti Nagar Lucknow at Relaxio Spa, combining aromatherapy, gentle stretches, and therapeutic techniques.
    </p>

    <a 
      href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20Balinese%20Massage"
      className="inline-block px-8 py-3 bg-[#d4af37] text-black rounded-full text-xs md:text-sm uppercase tracking-widest font-medium hover:bg-[#c19b2e] transition-all duration-300 shadow-lg hover:-translate-y-1"
    >
      Book Your Session
    </a>

  </div>
</section>

      {/* Main Content */}
      <section className="py-24 bg-[#fdfbf7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-stone prose-lg max-w-none font-light text-stone-700">
            
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Discover the Magic of Balinese Massage</h2>
              <p className="mb-6 leading-relaxed">
                When you are looking for the <strong>best spa in Gomti Nagar</strong> to unwind after a long week, our Balinese Massage is the ultimate escape. Originating from the beautiful island of Bali, this therapy is a deeply relaxing, holistic treatment that targets both the physical body and the mind.
              </p>
              <p className="mb-10 leading-relaxed">
                As a premier <strong>massage spa in Lucknow</strong>, Relaxio Spa brings this exotic therapy directly to you. The technique involves a seamless blend of gentle stretches, skin rolling, kneading, and stroking, combined with targeted acupressure. We use warm, premium essential oils that not only nourish your skin but also provide powerful aromatherapy benefits to calm your nervous system.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="absolute inset-0 z-0">
  <Image 
    src="/images/balinese-massage-gomti-nagar-lucknow.webp"
    alt="Balinese Massage in Gomti Nagar Lucknow Relaxio Spa"
    fill
    className="object-cover object-bottom"
    priority
  />
  <div className="absolute inset-0 bg-black/50" />
</div>
            </FadeIn>

            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Incredible Benefits of Balinese Massage</h2>
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
            </FadeIn>

            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Why Relaxio is the Best Spa in Gomti Nagar</h2>
              <p className="mb-6 leading-relaxed">
                At Relaxio Spa, we believe that the environment is just as important as the therapy itself. Our luxury spa in Gomti Nagar Lucknow is designed to transport you to a state of absolute serenity. Our private therapy rooms are soundproofed, climate-controlled, and infused with calming scents.
              </p>
              <p className="mb-10 leading-relaxed">
                Our therapists are certified experts in Balinese techniques. They understand how to read your body&apos;s tension points and adjust their pressure accordingly. We strictly maintain 100% hygiene, using fresh, high-quality linens and sanitized equipment for every guest. Experience the pinnacle of wellness and see why we are rated the top <strong>spa in Gomti Nagar Lucknow</strong>.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-stone-100 my-16">
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
                  <a href="https://wa.me/919999999999?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20book%20a%20Balinese%20Massage." 
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
