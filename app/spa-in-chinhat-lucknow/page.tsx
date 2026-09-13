import type { Metadata } from "next";
import Link from "next/link";
import { getLocationSchemas } from "@/lib/location-schema";

export const metadata: Metadata = {
  title: "Best Spa in Chinhat Lucknow | Relaxio Spa",
  description:
    "Looking for a spa near Chinhat Lucknow? Visit Relaxio Spa in Gomti Nagar for Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Massage, Jacuzzi and Steam Bath.",
  alternates: {
    canonical: "https://relaxiospa.in/spa-in-chinhat-lucknow",
  },
  openGraph: {
    title: "Best Spa in Chinhat Lucknow | Relaxio Spa",
    description:
      "Premium spa and massage services near Chinhat Lucknow, including Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Massage, Jacuzzi and Steam Bath.",
    url: "https://relaxiospa.in/spa-in-chinhat-lucknow",
    siteName: "Relaxio Spa",
    locale: "en_IN",
    type: "website",
  },
};

const schemas = getLocationSchemas({
  location: "Chinhat",
  url: "https://relaxiospa.in/spa-in-chinhat-lucknow",
  faq: [
    {
      question: "Which is the best spa near Chinhat Lucknow?",
      answer:
        "Relaxio Spa is located in Vivek Khand 4, Gomti Nagar and offers Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Massage, Jacuzzi and Steam Bath wellness services.",
    },
    {
      question: "How far is Relaxio Spa from Chinhat?",
      answer:
        "Relaxio Spa is accessible from Chinhat by road via routes such as Faizabad Road and Shaheed Path, with travel time varying by traffic.",
    },
    {
      question: "Which massage services are available near Chinhat?",
      answer:
        "Relaxio Spa offers Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Massage, Jacuzzi and Steam Bath facilities.",
    },
    {
      question: "Is advance booking available?",
      answer:
        "Yes. Advance booking is recommended, especially for preferred evening and weekend timings.",
    },
  ],
});

export default function SpaChinhatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.breadcrumb),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.spa),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.faqSchema),
        }}
      />

      <section className="py-24 bg-[#fdfbf7]">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl mb-8">
            Best Spa in Chinhat Lucknow
          </h1>

          <p className="text-lg leading-relaxed text-stone-700 mb-8">
            Looking for a spa near Chinhat Lucknow? Relaxio Spa is located in
            Vivek Khand 4, Gomti Nagar and welcomes guests from Chinhat,
            Matiyari, Malhaur, Summit Building and nearby residential and
            business areas. Our services include Thai Massage, Balinese
            Massage, Deep Tissue Massage, Couple Massage, Jacuzzi and Steam
            Bath.
          </p>

          <h2 className="font-serif text-3xl mb-6">
            Luxury Spa Near Chinhat
          </h2>

          <p className="leading-relaxed text-stone-700 mb-8">
            Guests travelling from Chinhat and nearby areas can choose from
            several professional massage and wellness services in a calm spa
            environment in Gomti Nagar. The right treatment depends on your
            preferred pressure, session duration and wellness goals.
          </p>

          <h2 className="font-serif text-3xl mb-6">
            Popular Spa Services Near Chinhat
          </h2>

          <ul className="space-y-3 mb-10">
            <li>✓ Thai Massage in Gomti Nagar Lucknow</li>
            <li>✓ Balinese Massage in Gomti Nagar Lucknow</li>
            <li>✓ Deep Tissue Massage in Gomti Nagar Lucknow</li>
            <li>✓ Couple Massage in Gomti Nagar Lucknow</li>
            <li>✓ Jacuzzi &amp; Steam Bath in Gomti Nagar Lucknow</li>
          </ul>

          <h2 className="font-serif text-3xl mb-6">
            Why Guests from Chinhat Choose Relaxio Spa
          </h2>

          <p className="leading-relaxed text-stone-700 mb-8">
            Guests choose Relaxio Spa for professional therapists, private
            wellness rooms, hygienic facilities and a peaceful ambience. The
            spa provides several treatment options for guests looking for
            relaxation, physical comfort and quality wellness time.
          </p>

          <h2 className="font-serif text-3xl mb-6">
            How to Reach Relaxio Spa from Chinhat
          </h2>

          <p className="leading-relaxed text-stone-700 mb-8">
            Relaxio Spa is located at 2nd Floor, 4/526, Vivek Khand 4, Gomti
            Nagar, Lucknow. Guests travelling from Chinhat can use connecting
            routes including Faizabad Road and Shaheed Path. Travel time varies
            according to traffic and the route used.
          </p>

          <h2 className="font-serif text-3xl mb-6">
            Explore Spa &amp; Massage Services
          </h2>

          <div className="space-y-3 mb-12">
            <Link
              href="/services/thai-massage"
              className="block underline"
            >
              Thai Massage in Gomti Nagar Lucknow
            </Link>

            <Link
              href="/services/balinese-massage"
              className="block underline"
            >
              Balinese Massage in Gomti Nagar Lucknow
            </Link>

            <Link
              href="/services/deep-tissue-massage"
              className="block underline"
            >
              Deep Tissue Massage in Gomti Nagar Lucknow
            </Link>

            <Link
              href="/services/couple-massage"
              className="block underline"
            >
              Couple Massage in Gomti Nagar Lucknow
            </Link>

            <Link
              href="/services/spa-facilities"
              className="block underline"
            >
              Jacuzzi &amp; Steam Bath in Gomti Nagar Lucknow
            </Link>

            <Link href="/services" className="block underline">
              All Spa Services in Gomti Nagar Lucknow
            </Link>
          </div>

          <h2 className="font-serif text-3xl mb-6">
            Other Nearby Spa Areas
          </h2>

          <div className="space-y-3 mb-12">
            <Link
              href="/spa-in-indira-nagar-lucknow"
              className="block underline"
            >
              Spa Near Indira Nagar Lucknow
            </Link>

            <Link
              href="/spa-in-aliganj-lucknow"
              className="block underline"
            >
              Spa Near Aliganj Lucknow
            </Link>

            <Link
              href="/spa-in-hazratganj-lucknow"
              className="block underline"
            >
              Spa Near Hazratganj Lucknow
            </Link>

            <Link
              href="/spa-near-faizabad-road-lucknow"
              className="block underline"
            >
              Spa Near Faizabad Road Lucknow
            </Link>
          </div>

          <h2 className="font-serif text-3xl mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Which is the best spa near Chinhat Lucknow?
              </h3>
              <p className="text-stone-700">
                Relaxio Spa is located in Vivek Khand 4, Gomti Nagar and offers
                Thai Massage, Balinese Massage, Deep Tissue Massage, Couple
                Massage, Jacuzzi and Steam Bath wellness services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                How far is Relaxio Spa from Chinhat?
              </h3>
              <p className="text-stone-700">
                Relaxio Spa is accessible from Chinhat by road via routes such
                as Faizabad Road and Shaheed Path, with travel time varying by
                traffic.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Which massage services are available near Chinhat?
              </h3>
              <p className="text-stone-700">
                Relaxio Spa offers Thai Massage, Balinese Massage, Deep Tissue
                Massage, Couple Massage, Jacuzzi and Steam Bath facilities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Is advance booking available?
              </h3>
              <p className="text-stone-700">
                Yes. Advance booking is recommended, especially for preferred
                evening and weekend timings.
              </p>
            </div>
          </div>

          <div className="bg-stone-100 rounded-2xl p-8">
            <h2 className="font-serif text-3xl mb-4">
              Book Your Wellness Session
            </h2>

            <p className="text-stone-700 mb-4">
              Looking for a spa near Chinhat Lucknow? Contact Relaxio Spa to
              check availability and book your preferred massage or wellness
              session.
            </p>

            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-[#d4af37] text-black rounded-lg"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
