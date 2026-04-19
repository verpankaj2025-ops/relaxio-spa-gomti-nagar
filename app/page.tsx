import Image from 'next/image';
import Link from 'next/link';
import { getFAQSchema } from '@/lib/seo';
import FadeIn from '@/components/ui/FadeIn';
import { Star, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

export default function Home() {
  const faqs = [
    {
      question: "What is the best spa in Gomti Nagar Lucknow?",
      answer: "Relaxio Spa is widely considered the best spa in Gomti Nagar, Lucknow, offering premium Thai, Balinese, and Deep Tissue massages in a luxurious and hygienic environment."
    },
    {
      question: "Do you offer body massage near me?",
      answer: "Yes, if you are in or around Gomti Nagar, Lucknow, Relaxio Spa provides the most relaxing and therapeutic body massages near you."
    }
  ];

  const reviews = [
    { author: 'Priya S.', rating: 5, reviewBody: 'Absolutely the best spa in Gomti Nagar. The Balinese massage was incredibly relaxing. The hygiene and ambiance are top-notch.' },
    { author: 'Rahul M.', rating: 5, reviewBody: 'I had severe back pain and opted for the Deep Tissue massage. The therapist was highly skilled. Highly recommended!' },
    { author: 'Anjali & Vikram', rating: 5, reviewBody: 'We booked a couple\'s session for our anniversary. The private room, the oils, the service—everything felt like a 5-star luxury hotel.' }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
   <Image 
  src="/images/luxury-spa-gomti-nagar-lucknow.webp"
  alt="Luxury spa in Gomti Nagar Lucknow Relaxio Spa premium massage room" 
  fill 
  sizes="100vw"
  className="object-cover"
  priority
/>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <FadeIn delay={0.2}>
            <span className="text-[#d4af37] tracking-[0.3em] uppercase text-sm md:text-base font-medium mb-6 block">
              Welcome to Relaxio Spa
            </span>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white mb-4">
  Best Spa in Gomti Nagar Lucknow
  <br />
</h1>
          </FadeIn>
          <FadeIn delay={0.6}>
  <h2 className="text-lg md:text-2xl text-stone-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
    Experience the ultimate luxury massage spa in Lucknow. Relax, Rejuvenate, and Recharge with our premium therapies.
  </h2>
</FadeIn>
        
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20a%20massage." 
                 className="px-10 py-4 bg-[#d4af37] text-white rounded-full hover:bg-[#c19b2e] transition-all duration-300 text-sm uppercase tracking-widest font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto">
                Book Now
              </a>
              <a href="tel:+917081891995" 
                 className="px-10 py-4 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-stone-900 transition-all duration-300 text-sm uppercase tracking-widest font-medium w-full sm:w-auto">
                Call Now
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-32 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-[#d4af37] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Our Offerings</span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Premium Body Massage Near Me</h2>
              <div className="w-20 h-0.5 bg-[#d4af37] mx-auto"></div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Deep Tissue Massage Lucknow',
                desc: 'Perfect for chronic pain relief and releasing deep muscle tension. The best deep tissue massage in Gomti Nagar.',
                img: '/images/deep-tissue-massage-gomti-nagar-lucknow.webp',
                alt: 'Deep tissue massage in Gomti Nagar Lucknow for pain relief at Relaxio Spa',
                link: '/services/deep-tissue-massage'
              },
              {
                title: 'Balinese Massage Lucknow',
                desc: 'A holistic, full-body treatment combining acupressure and aromatherapy for ultimate relaxation.',
                img: '/images/balinese-massage-gomti-nagar-lucknow.webp',
                alt: 'Balinese massage in Gomti Nagar Lucknow with aromatherapy at Relaxio Spa',
                link: '/services/balinese-massage'
              },
              {
                title: 'Thai Massage Lucknow',
                desc: 'An active therapy that improves flexibility and energy flow. Experience authentic Thai massage in Lucknow.',
                img: '/images/thai-massage-gomti-nagar-lucknow.webp',
                alt: 'Thai massage in Gomti Nagar Lucknow with stretching therapy at Relaxio Spa',
                link: '/services/thai-massage'
              }
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <Link href={service.link} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100">
                  <div className="relative h-96 overflow-hidden">
                    <Image 
  src={service.img} 
  alt={service.alt} 
  fill 
  sizes="(max-width: 768px) 100vw, 33vw"
  className="object-cover group-hover:scale-110 transition-transform duration-700"
/>
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                  <div className="p-8 text-center relative bg-white -mt-10 mx-6 rounded-xl shadow-lg group-hover:-translate-y-2 transition-transform duration-500">
                    <h3 className="text-2xl font-serif mb-3 text-stone-900 group-hover:text-[#d4af37] transition-colors">{service.title}</h3>
                    <p className="text-stone-600 font-light mb-6 line-clamp-2">{service.desc}</p>
                    <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-[#d4af37]">
                      Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS SECTION */}
      <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Image 
  src="/images/spa-texture-gomti-nagar.webp" 
  alt="Relaxio Spa Gomti Nagar Lucknow ambiance luxury spa background" 
  fill 
  sizes="100vw"
  className="object-cover"
/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-[#d4af37] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Guest Experiences</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">What Our Clients Say</h2>
              <div className="w-20 h-0.5 bg-[#d4af37] mx-auto"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="bg-stone-800/50 backdrop-blur-sm p-10 rounded-2xl border border-stone-700/50 hover:border-[#d4af37]/50 transition-colors duration-300 h-full flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={20} className="fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>
                  <p className="text-stone-300 font-light text-lg leading-relaxed mb-8 flex-grow italic">
                    &quot;{review.reviewBody}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-stone-700 rounded-full flex items-center justify-center text-[#d4af37] font-serif text-xl">
                      {review.author.charAt(0)}
                    </div>
                    <span className="font-medium tracking-wide">{review.author}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRICING SECTION */}
      <section className="py-32 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-[#d4af37] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Transparent Pricing</span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Massage Spa Packages in Lucknow</h2>
              <div className="w-20 h-0.5 bg-[#d4af37] mx-auto"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Basic */}
            <FadeIn delay={0.2}>
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-stone-100 text-center">
                <h3 className="text-2xl font-serif text-stone-900 mb-2">Relaxation</h3>
                <p className="text-stone-500 font-light mb-8">60 Minutes Session</p>
                <div className="text-4xl font-serif text-stone-900 mb-8">₹2,499</div>
                <ul className="space-y-4 mb-10 text-stone-600 font-light">
                  <li>Choice of Swedish or Balinese</li>
                  <li>Premium Essential Oils</li>
                  <li>Shower Facility</li>
                </ul>
                <a href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20the%20Relaxation%20package." className="block w-full py-4 border border-stone-900 text-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition-colors uppercase tracking-widest text-sm font-medium">
                  Book Now
                </a>
              </div>
            </FadeIn>

            {/* Premium (Highlighted) */}
            <FadeIn delay={0.4}>
              <div className="bg-stone-900 p-12 rounded-2xl shadow-2xl border border-[#d4af37] text-center relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-white px-6 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium">
                  Most Popular
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">Deep Healing</h3>
                <p className="text-stone-400 font-light mb-8">90 Minutes Session</p>
                <div className="text-5xl font-serif text-white mb-8">₹3,499</div>
                <ul className="space-y-4 mb-10 text-stone-300 font-light">
                  <li>Deep Tissue or Thai Massage</li>
                  <li>Hot Stone Therapy Add-on</li>
                  <li>Premium Essential Oils</li>
                  <li>Shower & Steam Facility</li>
                </ul>
                <a href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20the%20Deep%20Healing%20package." className="block w-full py-4 bg-[#d4af37] text-white rounded-full hover:bg-[#c19b2e] transition-colors uppercase tracking-widest text-sm font-medium shadow-lg">
                  Book Now
                </a>
              </div>
            </FadeIn>

            {/* Couple */}
            <FadeIn delay={0.6}>
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-stone-100 text-center">
                <h3 className="text-2xl font-serif text-stone-900 mb-2">Couple&apos;s Retreat</h3>
                <p className="text-stone-500 font-light mb-8">90 Minutes Session</p>
                <div className="text-4xl font-serif text-stone-900 mb-8">₹6,499</div>
                <ul className="space-y-4 mb-10 text-stone-600 font-light">
                  <li>Private Couple&apos;s Suite</li>
                  <li>Any Massage of Choice</li>
                  <li>Aromatherapy & Rose Petals</li>
                  <li>Private Shower Facility</li>
                </ul>
                <a href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20the%20Couples%20Retreat." className="block w-full py-4 border border-stone-900 text-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition-colors uppercase tracking-widest text-sm font-medium">
                  Book Now
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. LOCATION SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <span className="text-[#d4af37] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Find Us</span>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-10">Visit Our Sanctuary in Gomti Nagar</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#fdfbf7] rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="text-[#d4af37]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-stone-900 mb-2">Location</h4>
                      <p className="text-stone-600 font-light leading-relaxed">
                        2nd Floor, 4/526, Vivek Khand 4,<br />
                        Gomti Nagar, Lucknow, UP 226010
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#fdfbf7] rounded-full flex items-center justify-center shrink-0">
                      <Clock className="text-[#d4af37]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-stone-900 mb-2">Operating Hours</h4>
                      <p className="text-stone-600 font-light leading-relaxed">
                        Monday - Sunday<br />
                        11:00 AM - 9:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#fdfbf7] rounded-full flex items-center justify-center shrink-0">
                      <Phone className="text-[#d4af37]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-stone-900 mb-2">Contact</h4>
                      <p className="text-stone-600 font-light leading-relaxed">
                        +91 7081891995<br />
                        info@relaxiospa.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl relative">
                {/* Grayscale map for premium look */}
                <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.514229806334!2d80.9985044!3d26.8553987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be34ee0fb49db%3A0xbb9a4225ff54c30d!2sAura%20Wellness%20%26%20Spa%20%E2%80%93%20Gomti%20Nagar!5e0!3m2!1sen!2sin!4v1776314585804!5m2!1sen!2sin"
  width="100%" 
  height="100%" 
  style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} 
  allowFullScreen
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  title="Relaxio Spa Location in Gomti Nagar Lucknow"
/>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
