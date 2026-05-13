import Image from 'next/image';
import type { Metadata } from 'next';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo';
import FadeIn from '@/components/ui/FadeIn';
import FAQ from '@/components/FAQ';
import { ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Relaxio Spa | Luxury Wellness Spa in Gomti Nagar Lucknow',
  description: 'Learn about Relaxio Spa, the premier luxury wellness destination in Gomti Nagar, Lucknow. Discover our commitment to hygiene, privacy, and expert therapy.',
  keywords: [
  'Luxury Wellness Spa',
  'Spa in Gomti Nagar',
  'Massage Spa Lucknow',
  'Relaxio Spa',
],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Relaxio Spa | Luxury Wellness Spa in Gomti Nagar Lucknow',
    description: 'Learn about Relaxio Spa, the premier luxury wellness destination in Gomti Nagar, Lucknow. Discover our commitment to hygiene, privacy, and expert therapy.',
    url: '/about',
    images: [
  {
    url: 'https://relaxiospa.in/images/spa-about-gomti-nagar-lucknow.avif',
    width: 1200,
    height: 630,
    alt: 'Relaxio Spa Gomti Nagar Lucknow',
  },
],
  }
};

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

  {faqs.length > 0 && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(getFAQSchema(faqs))
    }}
  />
)}

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
"name": "Relaxio Spa",
"url": "https://relaxiospa.in",
"image": "https://relaxiospa.in/images/spa-about-gomti-nagar-lucknow.avif",
"telephone": "+917081891995",
"priceRange": "₹1499 - ₹8999",
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
  "opens": "11:00",
  "closes": "21:00"
}]
      })
    }}
  />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
  <Image 
    src="/images/spa-about-gomti-nagar-lucknow.avif"
    alt="Luxury spa interior in Gomti Nagar Lucknow Relaxio Spa massage center"
    fill
    className="object-cover"
  />

  {/* Light overlay */}
  <div className="absolute inset-0 bg-black/50" />
</div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-16">
          <FadeIn>
            <span className="text-[#d4af37] tracking-[0.2em] uppercase text-sm font-medium mb-4 block">Our Story</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6 leading-tight">
  Luxury Wellness Spa in Gomti Nagar Lucknow <br/>
  <span className="italic text-stone-300 font-light">Relaxio Spa</span>
</h1>

{/* 🔥 MAIN SEO PARAGRAPH (ADD THIS) */}
<p className="text-base sm:text-lg md:text-xl text-stone-200 font-light max-w-3xl mx-auto leading-relaxed">
  Relaxio Spa offers relaxing wellness therapies and a peaceful luxury spa experience in Gomti Nagar Lucknow.
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
  Located in Gomti Nagar near Brijwasi Bakery, Relaxio Spa offers professional wellness therapies, relaxing body massages, and a peaceful luxury spa experience.
</p>
                  <p className="mb-6 leading-relaxed">
                    We believe that a spa experience should be more than just a massage; it should be a holistic journey that rejuvenates the mind, body, and soul. That is why we obsess over every detail—from the ambient lighting and calming aromas to the premium quality of our massage oils.
                  </p>
                  <p className="leading-relaxed">
                    Today, Relaxio Spa is trusted by professionals, couples, and wellness enthusiasts seeking a peaceful and premium wellness experience in Lucknow.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
  src="/images/massage-therapy-lucknow.avif"
  alt="Professional Massage Therapy in Gomti Nagar Lucknow"
  fill
  className="object-cover"
  loading="lazy"
/>
              </div>
            </FadeIn>
          </div>

          {/* Core Pillars */}
          <FadeIn>
            <div className="bg-stone-900 text-stone-50 py-24 px-8 md:px-16 rounded-3xl shadow-2xl mb-32 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <Image 
  src="/images/spa-texture-gomti-nagar.avif"
  alt="Spa ambiance background"
  fill
  className="object-cover"
  loading="lazy"
/>
              </div>
              <div className="relative z-10">
                <div className="text-center mb-16">
                  <span className="text-[#d4af37] tracking-[0.18em] uppercase text-xs md:text-sm font-medium mb-5 block">The Relaxio Standard</span>
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
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 text-center">Why Guests Choose Relaxio Spa</h2>
              <div className="prose prose-stone font-light text-stone-700 max-w-none">
                <p className="mb-6 leading-relaxed">
                  Choosing the right wellness center is crucial for your health and peace of mind. Relaxio Spa focuses on creating a safe, professional, and peaceful wellness experience for every guest. 
                </p>
                <p className="mb-6 leading-relaxed">
  Relaxio Spa offers professional therapies designed for deep relaxation, comfort, and rejuvenation in a peaceful luxury environment.
</p>
                <div className="mt-8 text-center">
  <p>
    Explore our <a href="/services" className="underline underline-offset-4">massage services </a> 
     or <a href="/contact" className="underline underline-offset-4">contact us</a> to book your session.
  </p>
</div>

          <div className="mt-12 text-center">
         <a 
           href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20a%20wellness%20session."
           target="_blank"
           rel="noopener noreferrer"
           className="inline-block px-10 py-4 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all duration-300 text-sm uppercase tracking-widest font-medium">
           Experience Relaxio Spa Today
        </a>
      </div>
      </div>
      
    </FadeIn>
  </div>

          </div>
             </div>

      <div className="bg-[#fdfbf7] py-24">
        <FAQ faqs={faqs} />
      </div>

    </>
  );
}
