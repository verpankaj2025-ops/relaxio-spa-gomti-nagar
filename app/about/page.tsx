import Image from 'next/image';
import { getBreadcrumbSchema } from '@/lib/seo';
import FadeIn from '@/components/ui/FadeIn';
import { ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

export const metadata = {
  title: 'About Relaxio Spa | Best Luxury Spa in Gomti Nagar Lucknow',
  description: 'Learn about Relaxio Spa, the premier luxury wellness destination in Gomti Nagar, Lucknow. Discover our commitment to hygiene, privacy, and expert therapy.',
  keywords: ['About Relaxio Spa', 'Best Spa in Gomti Nagar', 'Spa in Gomti Nagar Lucknow', 'Massage Spa in Lucknow', 'Luxury Spa Lucknow'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Relaxio Spa | Best Luxury Spa in Gomti Nagar Lucknow',
    description: 'Learn about Relaxio Spa, the premier luxury wellness destination in Gomti Nagar, Lucknow. Discover our commitment to hygiene, privacy, and expert therapy.',
    url: '/about',
    images: ['https://picsum.photos/seed/spa-about-1/1200/630'],
  }
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'About Us', item: '/about' }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)) }}
      />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image src="https://picsum.photos/seed/spa-about-hero/1920/1080" alt="Relaxio Spa Gomti Nagar Lucknow" fill className="object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-[#d4af37] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
              A Sanctuary in the Heart of <br/><span className="italic text-stone-300">Lucknow</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 font-light max-w-2xl mx-auto mb-10">
              Founded with a vision to bring authentic, world-class wellness therapies to Gomti Nagar, Relaxio Spa has quickly become the preferred destination for those seeking genuine relaxation and pain relief.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="py-24 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Redefining Wellness in Gomti Nagar</h2>
                <div className="prose prose-stone font-light text-stone-700">
                  <p className="mb-6 leading-relaxed">
                    When we opened the doors to Relaxio Spa, our mission was simple: to create the <strong>best spa in Gomti Nagar Lucknow</strong>. We noticed a gap in the market for a truly premium, hygienic, and authentic wellness center where clients could escape the chaos of the city.
                  </p>
                  <p className="mb-6 leading-relaxed">
                    We believe that a spa experience should be more than just a massage; it should be a holistic journey that rejuvenates the mind, body, and soul. That is why we obsess over every detail—from the ambient lighting and calming aromas to the premium quality of our massage oils.
                  </p>
                  <p className="leading-relaxed">
                    Today, we are proud to be recognized as a leading <strong>massage spa in Lucknow</strong>, trusted by professionals, couples, and wellness enthusiasts who demand nothing but the best.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="https://picsum.photos/seed/spa-about-1/800/1000" alt="Relaxio Spa Interior Gomti Nagar" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </FadeIn>
          </div>

          {/* Core Pillars */}
          <FadeIn>
            <div className="bg-stone-900 text-stone-50 py-24 px-8 md:px-16 rounded-3xl shadow-2xl mb-32 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <Image src="https://picsum.photos/seed/spa-pattern-2/1920/1080" alt="Texture" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative z-10">
                <div className="text-center mb-16">
                  <span className="text-[#d4af37] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">The Relaxio Standard</span>
                  <h2 className="text-4xl font-serif mb-6">Our Core Pillars</h2>
                  <div className="w-20 h-0.5 bg-[#d4af37] mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-[#d4af37]/10 rounded-full flex items-center justify-center mb-6">
                      <ShieldCheck className="text-[#d4af37]" size={32} />
                    </div>
                    <h3 className="text-2xl font-serif mb-4">Certified Therapists</h3>
                    <p className="text-stone-400 font-light leading-relaxed">Every therapist undergoes rigorous training and certification to ensure you receive authentic, effective treatments tailored to your body&apos;s needs.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-[#d4af37]/10 rounded-full flex items-center justify-center mb-6">
                      <HeartHandshake className="text-[#d4af37]" size={32} />
                    </div>
                    <h3 className="text-2xl font-serif mb-4">Absolute Privacy</h3>
                    <p className="text-stone-400 font-light leading-relaxed">Your comfort is our priority. We provide completely private, sound-insulated therapy rooms for undisturbed peace and tranquility.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-[#d4af37]/10 rounded-full flex items-center justify-center mb-6">
                      <Sparkles className="text-[#d4af37]" size={32} />
                    </div>
                    <h3 className="text-2xl font-serif mb-4">Premium Hygiene</h3>
                    <p className="text-stone-400 font-light leading-relaxed">We maintain strict, hospital-grade sanitization protocols. Fresh linens, sterilized equipment, and pristine shower facilities are guaranteed for every guest.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Why Choose Us SEO Content */}
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 text-center">Why We Are The Top Spa in Gomti Nagar Lucknow</h2>
              <div className="prose prose-stone font-light text-stone-700 max-w-none">
                <p className="mb-6 leading-relaxed">
                  Choosing the right wellness center is crucial for your health and peace of mind. When you search for a <strong>body massage near me</strong>, you want assurance that you are stepping into a safe, professional, and luxurious environment. 
                </p>
                <p className="mb-6 leading-relaxed">
                  At Relaxio Spa, we do not compromise. From the moment you walk through our doors in Gomti Nagar, you are treated like royalty. We offer a comprehensive menu of services, including authentic Thai massage, deeply relaxing Balinese massage, and therapeutic deep tissue treatments. 
                </p>
                <p className="mb-6 leading-relaxed">
                  Our commitment to excellence extends beyond our massages. We use only the finest, skin-nourishing essential oils. Our ambiance is meticulously curated to lower your heart rate and ease your mind before the therapy even begins. It is this dedication to the complete sensory experience that makes us the most highly recommended <strong>spa in Gomti Nagar Lucknow</strong>.
                </p>
                <div className="mt-12 text-center">
                  <a href="https://wa.me/919999999999?text=Hi%20Relaxio%20Spa,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                     className="inline-block px-10 py-4 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all duration-300 text-sm uppercase tracking-widest font-medium">
                    Experience Relaxio Today
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </>
  );
}
