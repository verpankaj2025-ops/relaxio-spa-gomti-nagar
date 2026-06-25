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

export default function SpaChinhatPage() {
return ( <section className="py-24 bg-[#fdfbf7]"> <div className="max-w-5xl mx-auto px-4">


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

  </div>
</section>

);
}
