import type { Metadata } from "next";
import Link from "next/link";
import { getLocationSchemas } from "@/lib/location-schema";

export const metadata: Metadata = {
  title: "Best Spa in Aliganj Lucknow | Relaxio Spa",
  description:
    "Looking for a spa in Aliganj Lucknow? Relaxio Spa in Gomti Nagar offers Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Spa, Jacuzzi and Steam Bath.",
  alternates: {
    canonical: "https://relaxiospa.in/spa-in-aliganj-lucknow",
  },
  openGraph: {
    title: "Best Spa in Aliganj Lucknow | Relaxio Spa",
    description:
      "Discover premium spa and massage services near Aliganj Lucknow at Relaxio Spa, including Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Spa, Jacuzzi and Steam Bath.",
    url: "https://relaxiospa.in/spa-in-aliganj-lucknow",
    siteName: "Relaxio Spa",
    locale: "en_IN",
    type: "website",
  },
};

const schemas = getLocationSchemas({
  location: "Aliganj",
  url: "https://relaxiospa.in/spa-in-aliganj-lucknow",
  faq: [
    {
      question: "How far is Relaxio Spa from Aliganj?",
      answer:
        "Relaxio Spa is located in Vivek Khand 4, Gomti Nagar and can be reached from Aliganj by a short drive, depending on traffic.",
    },
    {
      question: "Which massage services are available near Aliganj?",
      answer:
        "Relaxio Spa offers Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Spa, Jacuzzi and Steam Bath services.",
    },
    {
      question: "Do you provide private spa rooms?",
      answer:
        "Yes, Relaxio Spa offers clean and private wellness rooms designed for a comfortable spa experience.",
    },
    {
      question: "Is prior booking recommended?",
      answer:
        "Yes, advance booking is recommended, especially during weekends and evening hours.",
    },
  ],
});

export default function SpaAliganjPage() {
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
            Best Spa in Aliganj Lucknow
          </h1>

          <p className="text-lg leading-relaxed text-stone-700 mb-8">
            Looking for a premium spa near Aliganj Lucknow? Relaxio Spa is
            located in Vivek Khand 4, Gomti Nagar and welcomes guests from
            Kapoorthala, Aliganj Market, Sector I, Sector J, Sector K, Sector
            L and the Lucknow University area. Our wellness services include
            Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Spa,
            Jacuzzi and Steam Bath in a peaceful, professional environment.
          </p>

          <h2 className="font-serif text-3xl mb-6">
            Luxury Spa Near Aliganj
          </h2>

          <p className="leading-relaxed text-stone-700 mb-8">
            Whether you are travelling from Kapoorthala Crossing, Aliganj
            Market, Sector I, Sector J, Sector K, Sector L or the Lucknow
            University area, Relaxio Spa offers a convenient wellness escape
            in Gomti Nagar. Our experienced therapists provide professional
            massage and relaxation services designed for stress relief, muscle
            relaxation and overall well-being.
          </p>

          <h2 className="font-serif text-3xl mb-6">
            Popular Spa Services Near Aliganj
          </h2>

          <ul className="space-y-3 mb-10">
            <li>✓ Thai Massage in Gomti Nagar Lucknow</li>
            <li>✓ Balinese Massage in Gomti Nagar Lucknow</li>
            <li>✓ Deep Tissue Massage in Gomti Nagar Lucknow</li>
            <li>✓ Couple Massage in Gomti Nagar Lucknow</li>
            <li>✓ Jacuzzi &amp; Steam Bath in Gomti Nagar Lucknow</li>
          </ul>

          <h2 className="font-serif text-3xl mb-6">
            Why Guests from Aliganj Choose Relaxio Spa
          </h2>

          <p className="leading-relaxed text-stone-700 mb-8">
            Guests choose Relaxio Spa for professional therapists, hygienic
            facilities, private wellness rooms, a calm ambience and convenient
            access from Aliganj. The focus is on a comfortable and professional
            wellness experience rather than a rushed visit.
          </p>

          <h2 className="font-serif text-3xl mt-16 mb-6">
            How to Reach Relaxio Spa from Aliganj
          </h2>

          <p className="leading-relaxed text-stone-700 mb-8">
            Relaxio Spa is located at 2nd Floor, 4/526, Vivek Khand 4, Gomti
            Nagar, Lucknow. The journey from Aliganj typically takes a short
            drive via Kapoorthala and connecting roads, with travel time varying
            according to traffic.
          </p>

          <h2 className="font-serif text-3xl mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                How far is Relaxio Spa from Aliganj?
              </h3>
              <p className="text-stone-700">
                Relaxio Spa is in Vivek Khand 4, Gomti Nagar and can be reached
                from Aliganj by a short drive depending on traffic.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Which massage services are available near Aliganj?
              </h3>
              <p className="text-stone-700">
                Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Spa,
                Jacuzzi and Steam Bath are available at Relaxio Spa.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Do you provide private spa rooms?
              </h3>
              <p className="text-stone-700">
                Yes. Relaxio Spa offers clean and private wellness rooms for a
                peaceful and comfortable experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Is prior booking recommended?
              </h3>
              <p className="text-stone-700">
                Yes. Booking in advance is recommended, especially on weekends
                and during evening hours.
              </p>
            </div>
          </div>

          <div className="space-y-3">
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

            <Link href="/" className="block underline">
              Best Spa in Gomti Nagar Lucknow
            </Link>

            <Link href="/services" className="block underline">
              Spa Services in Gomti Nagar Lucknow
            </Link>

            <Link
              href="/spa-in-chinhat-lucknow"
              className="block underline"
            >
              Spa Near Chinhat Lucknow
            </Link>

            <Link
              href="/spa-in-indira-nagar-lucknow"
              className="block underline"
            >
              Spa Near Indira Nagar Lucknow
            </Link>

            <Link
              href="/spa-in-hazratganj-lucknow"
              className="block underline"
            >
              Spa Near Hazratganj Lucknow
            </Link>
          </div>

          <div className="bg-stone-100 rounded-2xl p-8 mt-12">
            <h2 className="font-serif text-3xl mb-4">
              Book Your Wellness Session
            </h2>

            <p className="text-stone-700 mb-4">
              Looking for a premium spa near Aliganj Lucknow? Contact Relaxio
              Spa to book your preferred wellness therapy and check availability
              before your visit.
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
