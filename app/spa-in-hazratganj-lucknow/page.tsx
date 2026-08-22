import type { Metadata } from "next";
import Link from "next/link";
import { getLocationSchemas } from "@/lib/location-schema";

export const metadata: Metadata = {
title: "Best Spa in Hazratganj Lucknow | Relaxio Spa",
description:
"Looking for a spa near Hazratganj Lucknow? Relaxio Spa offers Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Spa, Jacuzzi and Steam Bath wellness experiences.",
alternates: {
canonical: "https://relaxiospa.in/spa-in-hazratganj-lucknow",
},
openGraph: {
title: "Best Spa in Hazratganj Lucknow | Relaxio Spa",
description:
"Premium wellness spa near Hazratganj Lucknow offering massage therapies, couple spa experiences and luxury relaxation services.",
url: "https://relaxiospa.in/spa-in-hazratganj-lucknow",
siteName: "Relaxio Spa",
locale: "en_IN",
type: "website",
},
};

export default function SpaHazratganjPage() {
return ( <section className="py-24 bg-[#fdfbf7]"> <div className="max-w-5xl mx-auto px-4">


    <h1 className="font-serif text-4xl md:text-6xl mb-8">
      Best Spa in Hazratganj Lucknow
    </h1>

    <p className="text-lg leading-relaxed text-stone-700 mb-8">
  Relaxio Spa is a premium wellness destination in Gomti Nagar, easily
  accessible from Hazratganj. Guests visiting from Hazratganj, Lalbagh,
  Kaiserbagh and nearby commercial areas choose Relaxio Spa for premium
  wellness therapies, private spa suites and a relaxing escape from the
  busy city lifestyle.
</p>

    <h2 className="font-serif text-3xl mb-6">
      Luxury Wellness Near Hazratganj
    </h2>

    <p className="leading-relaxed text-stone-700 mb-8">
  Whether you are coming from Hazratganj for shopping, business meetings
  or after office hours, Relaxio Spa offers a peaceful wellness experience
  with Thai Massage, Balinese Massage, Deep Tissue Therapy, Couple Spa,
  Jacuzzi and Steam Bath services designed to help you unwind and recharge.
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
      Why Guests from Hazratganj Choose Relaxio Spa
    </h2>

    <p className="leading-relaxed text-stone-700 mb-8">
  Many office executives, entrepreneurs, hotel guests and business
  travellers visiting Hazratganj choose Relaxio Spa because of our
  professional therapists, hygienic private rooms and premium wellness
  environment. It is an ideal destination to relax after a busy working
  day or a long shopping trip.
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

<Link href="/spa-in-chinhat-lucknow" className="block underline">
  Spa Near Chinhat
</Link>

<Link href="/spa-in-mahanagar-lucknow" className="block underline">
  Spa Near Mahanagar
</Link>
    </div>

    <h2 className="font-serif text-3xl mt-16 mb-6">
  Spa Services for Visitors from Hazratganj
</h2>

<p className="leading-relaxed text-stone-700 mb-6">
  Hazratganj is one of Lucknow&apos;s busiest commercial and shopping districts.
  Many office professionals, entrepreneurs, hotel guests and visitors choose
  Relaxio Spa after work or shopping to enjoy premium wellness therapies in
  a calm and private environment.
</p>

<p className="leading-relaxed text-stone-700 mb-8">
  Whether you are looking to reduce stress, relieve muscle fatigue or simply
  unwind after a busy day, our experienced therapists provide personalised
  spa treatments designed for complete relaxation.
</p>

<h2 className="font-serif text-3xl mb-6">
  How to Reach Relaxio Spa from Hazratganj
</h2>

<p className="leading-relaxed text-stone-700 mb-8">
  Relaxio Spa is located in Vivek Khand 4, Gomti Nagar and is approximately
  20 minutes from Hazratganj. Visitors can conveniently reach us via Ashok
  Marg, Vikramaditya Marg or Gomti Nagar Road depending on traffic.
</p>

  </div>
</section>

);
}
