import type { Metadata } from "next";
import Link from "next/link";
import { getLocationSchemas } from "@/lib/location-schema";

export const metadata: Metadata = {
title: "Best Spa in Gomti Nagar Extension Lucknow | Relaxio Spa",
description:
"Looking for a spa near Gomti Nagar Extension Lucknow? Relaxio Spa offers Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Spa, Jacuzzi and Steam Bath wellness experiences.",
alternates: {
canonical: "https://relaxiospa.in/spa-in-gomti-nagar-extension-lucknow",
},
openGraph: {
title: "Best Spa in Gomti Nagar Extension Lucknow | Relaxio Spa",
description:
"Premium wellness spa near Gomti Nagar Extension Lucknow offering massage therapies, couple spa experiences and luxury relaxation services.",
url: "https://relaxiospa.in/spa-in-gomti-nagar-extension-lucknow",
siteName: "Relaxio Spa",
locale: "en_IN",
type: "website",
},
};

export default function SpaGomtiNagarExtensionPage() {
return ( <section className="py-24 bg-[#fdfbf7]"> <div className="max-w-5xl mx-auto px-4">


    <h1 className="font-serif text-4xl md:text-6xl mb-8">
      Best Spa in Gomti Nagar Extension Lucknow
    </h1>

    <p className="text-lg leading-relaxed text-stone-700 mb-8">
  Relaxio Spa is a premium wellness destination in Gomti Nagar, serving
  guests from Gomti Nagar Extension, Amar Shaheed Path, Sultanpur Road
  and nearby residential communities. We offer luxury massage therapies,
  private wellness suites and a peaceful environment for complete
  relaxation.
</p>

    <h2 className="font-serif text-3xl mb-6">
      Luxury Wellness Near Gomti Nagar Extension
    </h2>

    <p className="leading-relaxed text-stone-700 mb-8">
  Whether you are travelling from Gomti Nagar Extension, Amar Shaheed
  Path, Sultanpur Road or nearby residential townships, Relaxio Spa
  provides premium Thai Massage, Balinese Massage, Deep Tissue Therapy,
  Couple Spa, Jacuzzi and Steam Bath services with experienced therapists
  in a hygienic and relaxing setting.
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
      Why Guests from Gomti Nagar Extension Choose Relaxio Spa
    </h2>

    <p className="leading-relaxed text-stone-700 mb-8">
  Residents of Gomti Nagar Extension choose Relaxio Spa because of our
  convenient location, professional therapists, private wellness rooms
  and premium hospitality. Whether you want stress relief, muscle
  recovery or a relaxing weekend experience, our therapies are tailored
  to your individual wellness needs.
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

      <Link href="/spa-near-faizabad-road-lucknow" className="block underline">
  Spa Near Faizabad Road
</Link>

<Link href="/spa-in-indira-nagar-lucknow" className="block underline">
  Spa Near Indira Nagar
</Link>

<Link href="/spa-in-chinhat-lucknow" className="block underline">
  Spa Near Chinhat
</Link>
    </div>

    <h2 className="font-serif text-3xl mt-16 mb-6">
  Wellness Centre Near Gomti Nagar Extension
</h2>

<p className="leading-relaxed text-stone-700 mb-6">
  Gomti Nagar Extension is one of Lucknow&apos;s fastest-growing residential
  areas. Relaxio Spa welcomes professionals, families and couples looking
  for premium massage therapies and a calm wellness environment close to
  home.
</p>

<p className="leading-relaxed text-stone-700 mb-8">
  Our experienced therapists provide personalised wellness sessions using
  recognised massage techniques to help reduce stress, improve comfort
  and support overall relaxation.
</p>

<h2 className="font-serif text-3xl mb-6">
  How to Reach Relaxio Spa from Gomti Nagar Extension
</h2>

<p className="leading-relaxed text-stone-700 mb-8">
  Relaxio Spa is located in Vivek Khand 4, Gomti Nagar and is typically
  around 10–15 minutes from most parts of Gomti Nagar Extension via Amar
  Shaheed Path or internal Gomti Nagar roads, depending on traffic.
</p>

  </div>
</section>

);
}
