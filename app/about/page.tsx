import Image from 'next/image';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';
import FadeIn from '@/components/ui/FadeIn';
import FAQ from '@/components/FAQ';
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
    image: ['https://relaxiospa.in/images/spa-hero-lucknow.png']
  }
};

async function getFAQs() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/faqs`, {
      next: { revalidate: 3600 },
    });

    return res.json();
  } catch (error) {
    console.error("FAQ fetch error:", error);
    return [];
  }
}
export default async function AboutPage() {
  
    const allFaqs = (await getFAQs()) || [];

  const faqs = Array.isArray(allFaqs)
    ? allFaqs.filter(
        (f) => f.page?.toLowerCase().trim() === "about"
      )
    : [];
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'About Us', item: '/about' }
  ];

  return (

      <>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs))
    }}
  />

  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(getFAQSchema(faqs))
  }}
/>

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
"name": "Relaxio Spa",
"url": "https://relaxiospa.in",
"image": "https://relaxiospa.in/images/spa-hero-lucknow.webp",
"telephone": "+917081891995",
"priceRange": "₹1499 - ₹12000",
"address": {
    "@type": "PostalAddress",
    "streetAddress": "2nd Floor, 4/526, Vivek Khand 4",
    "addressLocality": "Gomti Nagar",
    "addressRegion": "Lucknow",
    "postalCode": "226010",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.8554035,
    "longitude": 80.9959241
  },
"openingHoursSpecification": [{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": [
    "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
  ],
  "opens": "10:00",
  "closes": "22:00"
}]
      })
    }}
  />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
  <Image 
    src="/images/spa-about-gomti-nagar-lucknow.webp"
    alt="Luxury spa interior in Gomti Nagar Lucknow Relaxio Spa massage center"
    fill
    className="object-cover scale-105"
    priority
  />

  {/* Light overlay */}
  <div className="absolute inset-0 bg-black/50" />
</div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-[#d4af37] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
  Best Spa in Gomti Nagar Lucknow <br/>
  <span className="italic text-stone-300">Relaxio Spa</span>
</h1>

{/* 🔥 MAIN SEO PARAGRAPH (ADD THIS) */}
<p className="text-lg md:text-xl text-stone-300 font-light max-w-2xl mx-auto mb-6">
  Relaxio Spa is a premium spa in Gomti Nagar Lucknow offering luxury wellness therapies, full body massage, Thai massage, and professional relaxation services.
</p>

{/* EXISTING LINE (KEEP THIS) */}
<p className="text-sm text-stone-400 max-w-2xl mx-auto">
  Experience the best spa in Gomti Nagar Lucknow with Relaxio Spa, known for luxury ambiance, expert therapists, and premium massage services.
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
  Located in Gomti Nagar near Brijwasi Bakery, Relaxio Spa is one of the best spa in Gomti Nagar Lucknow offering full body massage, Thai massage, and professional wellness therapies.
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
                <Image 
  src="/images/massage-therapy-lucknow.webp"
  alt="Professional Massage Therapy in Gomti Nagar Lucknow"
  fill
  className="object-cover"
/>
              </div>
            </FadeIn>
          </div>

          {/* Core Pillars */}
          <FadeIn>
            <div className="bg-stone-900 text-stone-50 py-24 px-8 md:px-16 rounded-3xl shadow-2xl mb-32 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <Image 
  src="/images/spa-texture-gomti-nagar.webp"
  alt="Spa ambiance background"
  fill
  className="object-cover"
/>
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
  If you are searching for the best spa in Gomti Nagar Lucknow or a professional body massage near you, Relaxio Spa is your trusted destination for relaxation and wellness.
</p>
                <div className="mt-8 text-center">
  <p>
    Explore our <a href="/services" className="underline">massage services </a> 
     or <a href="/contact" className="underline">contact us</a> to book your session.
  </p>
</div>

<div className="mt-12 text-center">
  <a href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa..."
                     className="inline-block px-10 py-4 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all duration-300 text-sm uppercase tracking-widest font-medium">
                    Experience Relaxio Spa Today
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

                </div>
             </div>

      <div className="bg-[#fdfbf7] pb-24">
        <FAQ faqs={faqs} />
      </div>
    </>
  );
}
