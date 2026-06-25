import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
title: "Best Spa in Chinhat Lucknow | Relaxio Spa",
description:
"Looking for a spa near Chinhat Lucknow? Relaxio Spa offers Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Spa, Jacuzzi and Steam Bath wellness experiences.",
alternates: {
canonical: "https://relaxiospa.in/spa-in-chinhat-lucknow"
},
openGraph: {
title: "Best Spa in Chinhat Lucknow | Relaxio Spa",
description:
"Premium wellness spa near Chinhat Lucknow offering massage therapies, couple spa experiences and luxury relaxation services.",
url: "https://relaxiospa.in/spa-in-chinhat-lucknow",
siteName: "Relaxio Spa",
locale: "en_IN",
type: "website",
},
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which is the best spa near Chinhat Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Relaxio Spa is a premium wellness destination near Chinhat offering Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Spa, Jacuzzi and Steam Bath facilities."
      }
    },
    {
      "@type": "Question",
      name: "How far is Relaxio Spa from Chinhat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Relaxio Spa is conveniently accessible from Chinhat and nearby areas."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer Couple Spa packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer Couple Spa experiences along with premium wellness therapies."
      }
    },
    {
      "@type": "Question",
      name: "Is advance booking available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, guests can reserve their preferred time slot in advance."
      }
    }
  ]
};

export default function SpaChinhatPage() {
return (
<>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>

<section className="py-24 bg-[#fdfbf7]">


    <h1 className="font-serif text-4xl md:text-6xl mb-8">
      Best Spa in Chinhat Lucknow
    </h1>

    <p className="text-lg leading-relaxed text-stone-700 mb-8">
      Relaxio Spa is a premium wellness destination conveniently located
      near Chinhat Lucknow. Guests from Chinhat regularly visit
      Relaxio Spa for professional massage therapies, luxury spa
      experiences, private wellness rooms, and complete relaxation.
    </p>

    <h2 className="font-serif text-3xl mb-6">
      Luxury Wellness Near Chinhat
    </h2>

    <p className="leading-relaxed text-stone-700 mb-8">
      Our spa offers Thai Massage, Balinese Massage, Deep Tissue Massage,
      Couple Massage, Jacuzzi and Steam Bath facilities designed to help
      guests relax, recover, and recharge in a peaceful environment.
    </p>

    <h2 className="font-serif text-3xl mb-6">
      Popular Services
    </h2>

    <ul className="space-y-3 mb-10">
      <li>✓ Thai Massage</li>
      <li>✓ Balinese Massage</li>
      <li>✓ Deep Tissue Massage</li>
      <li>✓ Couple Massage</li>
      <li>✓ Jacuzzi & Steam Bath</li>
    </ul>

    <h2 className="font-serif text-3xl mb-6">
      Why Guests from Chinhat Choose Relaxio Spa
    </h2>

    <p className="leading-relaxed text-stone-700 mb-8">
      Guests appreciate our hygienic facilities, professional therapists,
      luxury ambience, convenient location, and premium wellness
      experiences. Whether you are looking for relaxation after work or a
      complete wellness session, Relaxio Spa provides a comfortable and
      professional environment.
    </p>

    <h2 className="font-serif text-3xl mb-6">
      Explore Our Services
    </h2>

    <div className="space-y-3">
      <Link href="/services/thai-massage" className="block underline">
        Thai Massage
      </Link>

      <Link href="/services/balinese-massage" className="block underline">
        Balinese Massage
      </Link>

      <Link href="/services/deep-tissue-massage" className="block underline">
        Deep Tissue Massage
      </Link>

      <Link href="/services/couple-massage" className="block underline">
        Couple Massage
      </Link>

      <Link href="/services/spa-facilities" className="block underline">
        Jacuzzi & Steam Bath
      </Link>
    </div>

  <h2 className="font-serif text-3xl mb-6 mt-12">
  Frequently Asked Questions
</h2>

<div className="space-y-6">
  <div>
    <h3 className="font-semibold text-xl">
      Which is the best spa near Chinhat Lucknow?
    </h3>
    <p className="text-stone-700 mt-2">
      Relaxio Spa offers Thai Massage, Balinese Massage, Deep Tissue Massage,
      Couple Spa, Jacuzzi and Steam Bath facilities.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-xl">
      How far is Relaxio Spa from Chinhat?
    </h3>
    <p className="text-stone-700 mt-2">
      Relaxio Spa is easily accessible from Chinhat and surrounding areas.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-xl">
      Do you offer Couple Spa packages?
    </h3>
    <p className="text-stone-700 mt-2">
      Yes, we offer premium Couple Spa experiences.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-xl">
      Is advance booking available?
    </h3>
    <p className="text-stone-700 mt-2">
      Yes, advance booking is recommended for preferred timings.
    </p>
  </div>

  </div>
  
</section>
</>

);
}
