import type { Metadata } from "next";
import Link from "next/link";
import { getLocationSchemas } from "@/lib/location-schema";

export const metadata: Metadata = {
  title: "Best Spa in Indira Nagar Lucknow | Relaxio Spa",
  description:
    "Looking for a spa near Indira Nagar Lucknow? Visit Relaxio Spa in Gomti Nagar for Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Massage, Jacuzzi and Steam Bath.",
  alternates: {
    canonical: "https://relaxiospa.in/spa-in-indira-nagar-lucknow",
  },
  openGraph: {
    title: "Best Spa in Indira Nagar Lucknow | Relaxio Spa",
    description:
      "Premium spa and massage services near Indira Nagar Lucknow, including Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Massage, Jacuzzi and Steam Bath.",
    url: "https://relaxiospa.in/spa-in-indira-nagar-lucknow",
    siteName: "Relaxio Spa",
    locale: "en_IN",
    type: "website",
  },
};

const schemas = getLocationSchemas({
  location: "Indira Nagar",
  url: "https://relaxiospa.in/spa-in-indira-nagar-lucknow",
  faq: [
    {
      question: "Is Relaxio Spa near Indira Nagar Lucknow?",
      answer:
        "Yes. Relaxio Spa is located in Vivek Khand 4, Gomti Nagar and is accessible from Indira Nagar by road, with travel time varying by traffic.",
    },
    {
      question: "Which spa services are available near Indira Nagar?",
      answer:
        "Relaxio Spa offers Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Massage, Jacuzzi and Steam Bath wellness services.",
    },
    {
      question: "Where is Relaxio Spa located?",
      answer:
        "Relaxio Spa is located at 2nd Floor, 4/526, Vivek Khand 4, Gomti Nagar, Lucknow, Uttar Pradesh 226010.",
    },
    {
      question: "Can I book a spa session in advance?",
      answer:
        "Yes. Advance booking is recommended, especially during evenings and weekends.",
    },
  ],
});

export default function SpaIndiraNagarPage() {
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
            Best Spa in Indira Nagar Lucknow
          </h1>

          <p className="text-lg leading-relaxed text-stone-700 mb-8">
            Looking for a spa near Indira Nagar Lucknow? Relaxio Spa is
            located in Vivek Khand 4, Gomti Nagar and welcomes guests from
            Munshipulia, Polytechnic, Takrohi, Bhootnath Market and nearby
            residential areas. Our wellness services include Thai Massage,
            Balinese Massage, Deep Tissue Massage, Couple Massage, Jacuzzi and
            Steam Bath.
          </p>

          <h2 className="font-serif text-3xl mb-6">
            Luxury Spa Near Indira Nagar
          </h2>

          <p className="leading-relaxed text-stone-700 mb-8">
            Whether you are travelling from Munshipulia, Polytechnic, Takrohi
            or Bhootnath Market, Relaxio Spa offers a calm wellness experience
            in Gomti Nagar. Guests can choose from professional massage
            therapies and premium spa facilities in a comfortable environment.
          </p>

          <h2 className="font-serif text-3xl mb-6">
            Popular Spa Services Near Indira Nagar
          </h2>

          <ul className="space-y-3 mb-10">
            <li>✓ Thai Massage in Gomti Nagar Lucknow</li>
            <li>✓ Balinese Massage in Gomti Nagar Lucknow</li>
            <li>✓ Deep Tissue Massage in Gomti Nagar Lucknow</li>
            <li>✓ Couple Massage in Gomti Nagar Lucknow</li>
            <li>✓ Jacuzzi &amp; Steam Bath in Gomti Nagar Lucknow</li>
          </ul>

          <h2 className="font-serif text-3xl mb-6">
            Why Guests from Indira Nagar Choose Relaxio Spa
          </h2>

          <p className="leading-relaxed text-stone-700 mb-8">
            Guests choose Relaxio Spa for professional therapists, private
            wellness rooms, hygienic facilities, calm ambience and a range of
            massage and wellness services. The experience is designed for
            relaxation, physical comfort and quality wellness time.
          </p>

          <h2 className="font-serif text-3xl mb-6">
            Spa Services for Indira Nagar Residents
          </h2>

          <p className="leading-relaxed text-stone-700 mb-6">
            Indira Nagar is one of Lucknow&apos;s major residential and
            commercial areas. Residents often look for convenient wellness
            options after work, travel, exercise or busy daily routines.
          </p>

          <p className="leading-relaxed text-stone-700 mb-8">
            Relaxio Spa provides multiple treatment options so guests can
            choose a session according to their preferred pressure, duration
            and overall wellness goals.
          </p>

          <h2 className="font-serif text-3xl mb-6">
            How to Reach Relaxio Spa from Indira Nagar
          </h2>

          <p className="leading-relaxed text-stone-700 mb-8">
            Relaxio Spa is located at 2nd Floor, 4/526, Vivek Khand 4, Gomti
            Nagar, Lucknow. Travel time from Indira Nagar varies with traffic
            and route conditions, so checking current navigation before your
            visit is recommended.
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
              href="/spa-in-chinhat-lucknow"
              className="block underline"
            >
              Spa Near Chinhat Lucknow
            </Link>

            <Link
              href="/spa-in-aliganj-lucknow"
              className="block underline"
            >
              Spa Near Aliganj Lucknow
            </Link>

            <Link
              href="/spa-in-gomti-nagar-extension-lucknow"
              className="block underline"
            >
              Spa Near Gomti Nagar Extension Lucknow
            </Link>

            <Link
              href="/spa-in-hazratganj-lucknow"
              className="block underline"
            >
              Spa Near Hazratganj Lucknow
            </Link>
          </div>

          <h2 className="font-serif text-3xl mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Is Relaxio Spa near Indira Nagar Lucknow?
              </h3>
              <p className="text-stone-700">
                Yes. Relaxio Spa is located in Vivek Khand 4, Gomti Nagar and
                is accessible from Indira Nagar by road, with travel time
                depending on traffic.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Which spa services are available near Indira Nagar?
              </h3>
              <p className="text-stone-700">
                Relaxio Spa offers Thai Massage, Balinese Massage, Deep Tissue
                Massage, Couple Massage, Jacuzzi and Steam Bath services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Where is Relaxio Spa located?
              </h3>
              <p className="text-stone-700">
                Relaxio Spa is located at 2nd Floor, 4/526, Vivek Khand 4,
                Gomti Nagar, Lucknow, Uttar Pradesh 226010.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I book a spa session in advance?
              </h3>
              <p className="text-stone-700">
                Yes. Advance booking is recommended, especially during evenings
                and weekends.
              </p>
            </div>
          </div>

          <div className="bg-stone-100 rounded-2xl p-8">
            <h2 className="font-serif text-3xl mb-4">
              Book Your Wellness Session
            </h2>

            <p className="text-stone-700 mb-4">
              Looking for a spa near Indira Nagar Lucknow? Contact Relaxio Spa
              to check the latest availability and book your preferred
              wellness therapy.
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
