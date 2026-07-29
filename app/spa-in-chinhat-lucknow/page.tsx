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
  Relaxio Spa is a premium wellness destination in Gomti Nagar, easily
  accessible from Chinhat via Faizabad Road and Shaheed Path. Guests from
  Chinhat, Matiyari, Dayal Residency, Summit Building and nearby
  residential communities regularly visit our spa for Thai Massage,
  Balinese Massage, Deep Tissue Therapy, Couple Spa experiences and
  complete relaxation in a luxurious environment.
</p>

    <h2 className="font-serif text-3xl mb-6">
      Luxury Wellness Near Chinhat
    </h2>

    <p className="leading-relaxed text-stone-700 mb-8">
  Whether you are travelling from Chinhat, Matiyari, Summit Building,
  Malhaur or nearby areas, Relaxio Spa provides a peaceful wellness
  experience just a short drive away in Gomti Nagar. Our experienced
  therapists offer Thai Massage, Balinese Massage, Deep Tissue Massage,
  Couple Spa therapies, Jacuzzi and Steam Bath services designed to reduce
  stress, improve circulation and help you relax completely.
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
  Residents of Chinhat choose Relaxio Spa because of our hygienic private
  wellness rooms, experienced therapists and premium spa ambience. Many IT
  professionals, business owners, families and couples visit us after work
  or on weekends to enjoy a relaxing and rejuvenating wellness experience
  away from everyday stress.
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

      <Link href="/spa-in-aliganj-lucknow" className="block underline">
  Spa Near Aliganj
</Link>

<Link href="/spa-in-indira-nagar-lucknow" className="block underline">
  Spa Near Indira Nagar
</Link>

<Link href="/spa-near-faizabad-road-lucknow" className="block underline">
  Spa Near Faizabad Road
</Link>
    </div>

    <h2 className="font-serif text-3xl mb-6">
  How to Reach Relaxio Spa from Chinhat
</h2>

<p className="leading-relaxed text-stone-700 mb-8">
  Relaxio Spa is located in Vivek Khand 4, Gomti Nagar and can be reached
  from Chinhat in approximately 15–20 minutes via Faizabad Road or
  Shaheed Path, depending on traffic conditions.
</p>

  <h2 className="font-serif text-3xl mb-6 mt-12">
  Frequently Asked Questions
</h2>

<div className="space-y-6">
  <div>
    <h3 className="font-semibold text-xl">
      How far is Relaxio Spa from Chinhat?
    </h3>
    <p className="text-stone-700 mt-2">
      Relaxio Spa is approximately 15–20 minutes from Chinhat and is easily accessible through Faizabad Road and Shaheed Path.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-xl">
      Which massage is most popular among Chinhat visitors?
    </h3>
    <p className="text-stone-700 mt-2">
      Thai Massage, Deep Tissue Massage, Balinese Massage and Couple Spa sessions are among the most preferred wellness experiences for guests visiting from Chinhat.
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
