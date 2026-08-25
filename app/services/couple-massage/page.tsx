import { faqsData } from "@/lib/faqs";
import ServiceHero from "@/components/services/ServiceHero";
import Image from "next/image";
import Link from "next/link";
import { getBreadcrumbSchema, getFAQSchema, getServiceSchema } from '@/lib/seo';
import FAQ from "@/components/FAQ";
import PricingSection from "@/components/services/PricingSection";
import ExploreMore from "@/components/services/ExploreMore";

export const revalidate = 3600;

export const metadata = {
  title:
"Couple Massage in Gomti Nagar Lucknow | Relaxio Spa",

  description:
"Experience Couple Massage in Gomti Nagar Lucknow at Relaxio Spa. Enjoy private spa rooms, relaxing wellness therapies, luxury ambience, and a peaceful couple spa experience.",


  openGraph: {
  title:
  "Couple Massage in Gomti Nagar Lucknow | Relaxio Spa",

  description:
  "Experience Couple Massage in Gomti Nagar Lucknow at Relaxio Spa. Enjoy private spa rooms, relaxing wellness therapies, luxury ambience, and a peaceful couple spa experience.",

  url:
    "https://relaxiospa.in/services/couple-massage",

  siteName:
    "Relaxio Spa",

  locale:
    "en_IN",

  type:
    "website",

  images: [
    "https://relaxiospa.in/images/couple-massage-lucknow.avif",
  ],
},

  alternates: {
    canonical:
      "https://relaxiospa.in/services/couple-massage",
  },
};

export default function CoupleMassagePage() {

    const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
    { name: 'Couple Massage', item: '/services/couple-massage' }
  ];

  const faqs = faqsData["couple-massage"] || [];

  const serviceSchema = getServiceSchema({
    name: "Couple Massage Spa in Lucknow",
    description:
      "Private Couple Massage Spa experience in Lucknow with relaxing wellness therapies, comfortable private rooms and a premium spa environment.",
    url: "https://relaxiospa.in/services/couple-massage",
    image:
      "https://relaxiospa.in/images/couple-massage-lucknow.avif",
  });

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
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",

      name: "Relaxio Spa Gomti Nagar Lucknow",

      image:
        "https://relaxiospa.in/images/couple-massage-lucknow.avif",

      telephone: "+917081891995",

      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
      },
      
      priceRange: "₹₹₹",
    }),
  }}
/>
      
      {/* HERO SECTION */}
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />

      {/* Hero Section */}
      <ServiceHero
  title="Couple Massage in Gomti Nagar Lucknow"
  subtitle="Relax together with private wellness therapies designed for comfort, peace, and shared relaxation."
  image="/images/couple-massage-lucknow.avif"
  alt="Private Couple Massage Spa Experience in Gomti Nagar Lucknow at Relaxio Spa"
/>

      <section className="pt-20 pb-10 bg-[#fdfbf7] content-auto">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="prose prose-stone prose-base md:prose-lg max-w-none font-light text-stone-700">

      <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-stone-600 leading-relaxed">
              Couple Massage in Gomti Nagar Lucknow offers partners a private wellness experience with relaxing massage therapies, peaceful spa rooms, calming ambience, and professionally guided treatments designed for relaxation, comfort, and quality time together.
             </p>
</div>
<p className="text-stone-600 leading-relaxed mt-6">
  Couples can enjoy calming spa therapies in private rooms designed for comfort, relaxation, and peaceful shared experiences.
</p>
      <div className="text-center mt-12 mb-16">
  <h2 
    className="text-3xl font-serif mb-4">
    Why Couples Enjoy Wellness Therapy Together
  </h2>

              <p className="text-stone-600 max-w-2xl mx-auto mb-8">
                 Couple Massage therapy helps partners relax together, reduce stress, reconnect emotionally, and enjoy a premium spa experience in a peaceful and private wellness environment.
               </p>

    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto text-left text-stone-700">

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Private couple spa room for complete privacy</span>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Professional therapists for synchronized massage</span>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Luxury ambience with relaxing music</span>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Perfect for couples and special occasions</span>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Improves bonding and emotional connection</span>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Reduces stress and mental fatigue</span>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Enhances relaxation and comfort</span>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-amber-500 mt-1 text-sm">✔</span>
    <span>Private spa experience designed for couples</span>
  </div>
  <div className="flex items-start gap-3">
  <span className="text-amber-500 mt-1 text-sm">✔</span>

  <span>
    Private Jacuzzi and steam wellness experience
  </span>
</div>

<div className="flex items-start gap-3">
  <span className="text-amber-500 mt-1 text-sm">✔</span>

  <span>
    Peaceful wellness environment with premium amenities
  </span>
</div>

</div>
  </div>

  
  <div className="my-16 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
    <Image
       src="/images/couple-massage-lucknow-spa.avif"
       alt="Private Couple Massage Spa Experience in Gomti Nagar Lucknow at Relaxio Spa"
       fill
       sizes="(max-width:768px) 100vw, 1200px"
       className="object-cover brightness-95"
       loading="lazy"
     />
  </div>


  <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
      Why Guests Choose Our Couple Wellness Experience
  </h2>

              <p className="mb-6 leading-relaxed">
                At Relaxio Spa, our Couple Massage experience is designed for partners seeking relaxation, privacy, and premium wellness therapies in Gomti Nagar Lucknow with dedicated couple spa rooms and calming ambience.
               </p>

  <p className="mb-10 leading-relaxed">
     Our therapists provide synchronized wellness therapies using premium oils, calming music, and hygienic spa standards to create a deeply relaxing experience for couples. Whether you are visiting for relaxation, celebration, or peaceful quality time together, Relaxio Spa offers a comfortable and private wellness environment.
</p>

  </div>

  <div className="text-center my-16">
  <p className="text-2xl font-serif text-stone-900">
    Luxury Wellness Experience for Couples
  </p>

  <p className="text-stone-600 mt-4">
    Certified Therapists • Luxury Ambience • Hygienic Couple Spa Rooms
  </p>

  <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
Who Should Choose Couple Massage?
</h2>

<p className="mb-10 leading-relaxed">
Couple Massage in Gomti Nagar Lucknow is ideal for partners looking to relax together and enjoy quality wellness time. Many couples choose this experience for anniversaries, birthdays, special occasions, date experiences, or simply to take a break from busy schedules.

The therapy allows both partners to enjoy relaxing treatments in the same private room while maintaining a calm and peaceful atmosphere. It is a popular option for couples seeking comfort, stress relief, and a memorable spa experience together.
</p>

<h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
What Happens During a Couple Massage Session?
</h2>

<p className="mb-10 leading-relaxed">
Every Couple Massage session at Relaxio Spa begins with a brief consultation to understand guest preferences and comfort levels. Couples are then guided to a private spa room where therapists prepare the wellness experience.

The session includes synchronized therapies performed side by side in a peaceful environment. Premium oils, relaxing music, and a comfortable setting help create a calming atmosphere designed for relaxation and shared wellness.
</p>

<h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
Benefits of Couple Massage
</h2>

<p className="mb-10 leading-relaxed">
Couple Massage provides both physical relaxation and emotional connection. Many couples enjoy the opportunity to disconnect from daily stress and spend uninterrupted time together in a peaceful environment.

The experience encourages relaxation, reduces stress, promotes comfort, and helps create positive shared memories. It is often chosen as part of a wellness lifestyle focused on balance and well-being.
</p>

<h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
Why Relaxio Spa is a Preferred Choice for Couples
</h2>

<p className="mb-10 leading-relaxed">
Relaxio Spa offers private couple spa rooms, professional therapists, hygienic facilities, and a luxury wellness environment designed specifically for guest comfort. Our team focuses on privacy, relaxation, and personalized service.

Located in Gomti Nagar Lucknow, Relaxio Spa provides a peaceful destination where couples can enjoy wellness therapies together in a comfortable and welcoming atmosphere.
</p>

</div>

  <PricingSection
  title="Couple Massage Packages"
  description="Luxury couple wellness therapy with private spa rooms, peaceful ambience, and relaxing massage experience in Gomti Nagar Lucknow."
  buttonText="Book Couple Massage"
  whatsappMessage="Hi Relaxio Spa, I want Couple Massage. (Source: Couple Massage Page)"
  packages={[
    {
      name: "Romantic Escape",
      duration: "60 Minutes Therapy",
      price: "₹2,999",
    },
    {
      name: "Luxury Couple Retreat",
      duration: "90 Minutes Therapy",
      price: "₹3,999",
      popular: true,
    },
    {
      name: "Royal Couple Wellness",
      duration: "120 Minutes Therapy",
      price: "₹4,999",
    },
  ]}
/>

  <p className="text-center text-sm text-stone-600 mb-12">
    Planning a relaxing spa visit together?{" "}
    <Link href="/blog" className="text-amber-800 underline underline-offset-4">
      Read our Wellness Journal
    </Link>{" "}
    for local spa insights and booking ideas before choosing your couple experience.
  </p>

  <ExploreMore
  therapies={[
    {
      title: "Balinese Massage",
      href: "/services/balinese-massage",
      description:
        "Relaxing aromatherapy wellness therapy designed for stress relief and calmness.",
    },
    {
      title: "Thai Massage",
      href: "/services/thai-massage",
      description:
        "Traditional assisted stretching therapy designed for flexibility and body recovery.",
    },
    {
      title: "Jacuzzi & Steam Bath",
      href: "/services/spa-facilities",
      description:
        "Luxury steam and Jacuzzi wellness sessions for complete relaxation.",
    },
  ]}
/>


  <div className="mt-16">
  <FAQ faqs={faqs} />
</div>

</div>

   </section>

</>
  );
}
