import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Relaxio Spa Blog | Wellness & Massage Guides in Gomti Nagar Lucknow",

  description:
    "Explore massage therapy benefits, wellness tips, relaxation guides, and luxury spa insights from Relaxio Spa in Gomti Nagar Lucknow.",

  alternates: {
    canonical: "https://relaxiospa.in/blog",
  },

  openGraph: {
    title:
      "Relaxio Spa Blog | Wellness & Massage Guides in Gomti Nagar Lucknow",

    description:
      "Discover wellness guides, Thai massage benefits, spa therapies, and relaxation tips from Relaxio Spa.",

    url: "https://relaxiospa.in/blog",

    siteName: "Relaxio Spa",

    images: [
      {
        url: "https://relaxiospa.in/images/spa.avif",
        width: 1200,
        height: 630,
        alt: "Relaxio Spa Blog",
      },
    ],

    locale: "en_IN",
    type: "website",
  },
};

export default function BlogPage() {
  const blogs = getAllPosts();

  const faqs = [
  {
    question: "Which is the best spa in Gomti Nagar Lucknow?",
    answer:
      "Relaxio Spa offers premium wellness therapies, luxury ambience, private rooms, and professional massage experiences.",
  },
  {
    question: "Which massage is best for stress relief?",
    answer:
      "Thai massage, Balinese massage, and aromatherapy therapies are highly effective for relaxation and stress relief.",
  },
];

  return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getFAQSchema(faqs)),
      }}
    />

    <div>


    {/* 🔥 HERO SECTION (same as services pages) */}

<section className="relative min-h-[35vh] md:min-h-[40vh] flex items-center justify-center text-center text-white overflow-hidden bg-stone-950">
  
  <Image
    src="/images/spa.avif"
    fill
    className="object-cover"
    alt="Luxury wellness spa experience at Relaxio Spa"
    sizes="100vw"
  />

  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
  <div className="text-center px-4 sm:px-6 max-w-5xl mx-auto 0 pb-10">
  
    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
      Relaxio Spa Blog
    </h2>

    <p className="text-amber-700 sm:text-lg md:text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed font-light">
      Discover wellness tips, massage benefits, spa therapies, and relaxation guides from the best spa in Gomti Nagar Lucknow.
    </p>
  </div>
</div>

<div className="relative">
    
  </div>

   </section>

      {/* 🔥 BLOG LIST */}
      <section className="relative -mt-16 z-20 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

  {blogs.map((blog) => (
    
    <div key={blog.slug}>

      <Link
  href={`/blog/${blog.slug}`}
  prefetch={true}
>
        
        <div className="group relative overflow-hidden w-full bg-[#fffdf9] rounded-[32px] border border-stone-200/70 hover:border-amber-400/50 shadow-lg hover:shadow-2xl hover:shadow-md transition-all duration-300 cursor-pointer">

  <div className="relative h-56 overflow-hidden">

    <Image
      src={blog.image || "/images/spa.avif"}
      alt={blog.title}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
    />

    <div className="absolute inset-0 bg-black/20" />

  </div>

  <div className="p-6">

  <div className="text-xs uppercase tracking-[0.2em] text-amber-700 mb-3">
    Wellness Guide
  </div>

  <h2
    className="
      font-serif
      text-2xl
      md:text-3xl
      mb-3
      leading-tight
      line-clamp-2
      text-stone-900
    "
  >
    {blog.title}
  </h2>

  <p className="text-stone-600 leading-relaxed text-sm line-clamp-3">
    {blog.description}
  </p>

          {/* CTA */}
          <div className="mt-8 inline-flex items-center justify-center rounded-full border border-amber-700 px-5 py-3 text-sm uppercase tracking-[0.18em] text-amber-800 font-semibold transition-all duration-300 group-hover:bg-amber-700 group-hover:text-white">
             Read Article →
                     </div>
          </div>

        </div>

      </Link>

    </div>

  ))}

</div>
             
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

  <div className="text-center mb-16">

    <span className="uppercase tracking-[0.3em] text-xs text-amber-900 font-medium">
      Relaxio Wellness Journal
    </span>

    <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mt-4 leading-tight">
      Wellness, Relaxation & Luxury Spa Insights
    </h3>

    <p className="text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto mt-6">
      Explore expert wellness tips, massage therapy benefits, body relaxation techniques, stress relief guides, and luxury spa experiences from Relaxio Spa in Gomti Nagar Lucknow.
    </p>

  </div>

  <div className="grid md:grid-cols-2 gap-12">

    <div className="bg-[#fffdf9] border border-stone-200 rounded-[32px] p-10 shadow-sm">
      
      <h3 className="font-serif text-3xl text-stone-900 mb-6">
        Why Wellness Content Matters
      </h3>

      <p className="text-stone-600 leading-relaxed mb-5">
        Wellness education helps people understand the benefits of therapies like Thai massage, Balinese massage, deep tissue massage, aromatherapy, and stress relief treatments.
      </p>

      <p className="text-stone-600 leading-relaxed">
        Our spa journal shares practical relaxation insights, wellness routines, and body recovery techniques designed for modern lifestyles in Lucknow.
      </p>

    </div>

    <div className="bg-[#fffdf9] border border-stone-200 rounded-[32px] p-10 shadow-sm">
      
      <h3 className="font-serif text-3xl text-stone-900 mb-6">
        Luxury Spa Experience in Gomti Nagar
      </h3>

      <p className="text-stone-600 leading-relaxed mb-5">
        Relaxio Spa offers professional wellness therapies, private spa rooms, couple spa sessions, jacuzzi facilities, and premium massage experiences in Gomti Nagar Lucknow.
      </p>

      <p className="text-stone-600 leading-relaxed">
        Through our wellness journal, we aim to help visitors discover the best spa therapies for relaxation, stress management, and body rejuvenation.
      </p>

    </div>

  </div>

</section>

<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

  <div className="space-y-6 text-lg leading-relaxed text-stone-700">

    <h2 className="font-serif text-4xl text-stone-900">
      Spa Wellness & Massage Therapy Guides in Lucknow
    </h2>

    <p>
      Relaxio Spa shares wellness insights, massage therapy benefits,
      stress relief techniques, and luxury spa guidance for guests
      seeking premium wellness experiences in Gomti Nagar Lucknow.
    </p>

    <p>
      Our wellness blog covers Thai massage benefits, Balinese massage
      therapies, deep tissue massage recovery techniques, couple spa
      experiences, and luxury relaxation sessions designed for comfort
      and rejuvenation.
    </p>

  </div>

</section>

<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

  <div className="text-center mb-16">

    <span className="uppercase tracking-[0.3em] text-xs text-amber-900 font-medium">
      Spa & Wellness FAQs
    </span>

    <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mt-4 leading-tight">
      Frequently Asked Questions
    </h3>

  </div>

  <div className="space-y-4 max-w-4xl mx-auto">

    <div className="bg-[#fffdf9] border border-stone-200 rounded-2xl p-6">
      <h3 className="font-serif text-2xl text-stone-900 mb-4">
        Which is the best spa in Gomti Nagar Lucknow?
      </h3>

      <p className="text-stone-600 leading-relaxed">
        Relaxio Spa is known for premium wellness therapies, luxury spa ambience, private rooms, and professional massage experiences in Gomti Nagar Lucknow.
      </p>
    </div>

    <div className="bg-[#fffdf9] border border-stone-200 rounded-3xl p-8">
      <h3 className="font-serif text-2xl text-stone-900 mb-4">
        Which massage is best for stress relief?
      </h3>

      <p className="text-stone-600 leading-relaxed">
        Thai massage, Balinese massage, and aromatherapy therapies are highly effective for relaxation, stress relief, and mental wellness.
      </p>
    </div>

    <div className="bg-[#fffdf9] border border-stone-200 rounded-3xl p-8">
      <h3 className="font-serif text-2xl text-stone-900 mb-4">
        Does Relaxio Spa offer couple spa sessions?
      </h3>

      <p className="text-stone-600 leading-relaxed">
        Yes, Relaxio Spa offers luxury couple spa sessions, private wellness rooms, jacuzzi facilities, and relaxing spa experiences for couples in Lucknow.
      </p>
    </div>

    <div className="bg-[#fffdf9] border border-stone-200 rounded-3xl p-8">
      <h3 className="font-serif text-2xl text-stone-900 mb-4">
        What are the benefits of professional massage therapy?
      </h3>

      <p className="text-stone-600 leading-relaxed">
        Professional massage therapies help improve blood circulation, reduce stress, relax muscles, improve sleep quality, and support overall wellness.
      </p>
    </div>

  </div>

</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

  <div className="text-center mb-16">

    <span className="uppercase tracking-[0.3em] text-xs text-amber-900 font-medium">
      Wellness & Massage Therapy Guides
    </span>

    <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-4">
      Learn More About Luxury Spa Therapies
    </h2>

    <p className="text-stone-600 text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
      Discover wellness guides, relaxation therapies, body recovery techniques, and luxury spa experiences designed for modern lifestyles in Gomti Nagar Lucknow.
    </p>

  </div>
  <div className="bg-[#fffdf9] border border-stone-200 rounded-[40px] p-10 md:p-16 shadow-sm">

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* CARD 1 */}
<div
  className="
  lg:col-span-3
  bg-gradient-to-br
  from-[#fffdf9]
  to-[#f8f5ef]
  border
  border-stone-200
  rounded-[36px]
  p-10
  hover:shadow-lg
  transition-all
  duration-300
  "
>

      <h3 className="font-serif text-2xl text-stone-900 mb-4">
        Traditional Thai Massage Benefits
      </h3>

      <p className="text-stone-600 leading-relaxed">
        Learn how traditional Thai massage helps improve flexibility,
        reduce stress, and support full-body wellness.
      </p>

      <p className="mt-6">
        <Link
          href="/services/thai-massage"
          className="
          inline-flex
          items-center
          mt-2
          text-amber-700
          font-medium
          hover:text-amber-900
          transition-colors
          "
        >
          Explore Thai Massage Service
        </Link>
      </p>

      <p className="mt-4">
  <Link
    href="/services/balinese-massage"
    className="underline text-amber-700"
  >
    Explore Balinese Massage
  </Link>
</p>

    </div>

    {/* CARD 2 */}
    <div className="bg-[#fffdf9] border border-stone-200 rounded-[24px] p-7 hover:shadow-lg transition-all duration-300">

      <h3 className="font-serif text-2xl text-stone-900 mb-4">
        Stress Relief Therapies
      </h3>

      <p className="text-stone-600 leading-relaxed">
        Explore wellness therapies designed for relaxation,
        stress management, improved sleep, and mental calmness.
      </p>

      <p className="mt-6">
  <Link
    href="/services/deep-tissue-massage"
    className="underline text-amber-700"
  >
    Explore Deep Tissue Massage
  </Link>
</p>

    </div>

    {/* CARD 3 */}
    <div className="bg-[#fffdf9] border border-stone-200 rounded-[24px] p-7 hover:shadow-lg transition-all duration-300">

      <h3 className="font-serif text-2xl text-stone-900 mb-4">
        Luxury Couple Spa
      </h3>

      <p className="text-stone-600 leading-relaxed">
        Discover private couple spa sessions, jacuzzi experiences,
        and premium wellness treatments in Lucknow.
      </p>

      <p className="mt-6">
        <Link
          href="/services/couple-massage"
          className="underline text-amber-700"
        >
          Explore Couple Massage Service
        </Link>
      </p>

    </div>

  </div>

  {/* BUTTON */}
  <div className="text-center mt-14">

    <a
      href="https://wa.me/919455671995?text=Hi%20I%20want%20to%20book%20a%20spa%20session"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-stone-900 hover:bg-black text-white px-8 py-4 rounded-full transition-all duration-300 uppercase tracking-[0.2em] text-sm"
    >
      Book Your Spa Session
    </a>

  </div>

</div>

</section>

    </div>
    </>
  );
}
