import type { Metadata } from "next";
import Link from "next/link";
import { getLocationSchemas } from "@/lib/location-schema";

export const metadata: Metadata = {
  title: "Best Spa in Hazratganj Lucknow | Relaxio Spa",
  description:
    "Looking for a spa in Hazratganj Lucknow? Relaxio Spa in Gomti Nagar offers Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Spa, Jacuzzi and Steam Bath.",
  alternates: {
    canonical: "https://relaxiospa.in/spa-in-hazratganj-lucknow",
  },
  openGraph: {
    title: "Best Spa in Hazratganj Lucknow | Relaxio Spa",
    description:
      "Discover premium spa and massage services near Hazratganj Lucknow at Relaxio Spa, including Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Spa, Jacuzzi and Steam Bath.",
    url: "https://relaxiospa.in/spa-in-hazratganj-lucknow",
    siteName: "Relaxio Spa",
    locale: "en_IN",
    type: "website",
  },
};

const schemas = getLocationSchemas({
  location: "Hazratganj",
  url: "https://relaxiospa.in/spa-in-hazratganj-lucknow",
  faq: [
    {
      question: "Is Relaxio Spa near Hazratganj?",
      answer:
        "Yes. Relaxio Spa is located in Vivek Khand 4, Gomti Nagar and is accessible from Hazratganj by a short drive depending on traffic.",
    },
    {
      question: "Which spa services are available near Hazratganj?",
      answer:
        "Relaxio Spa offers Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Spa, Jacuzzi and Steam Bath services.",
    },
    {
      question: "Do you offer private spa rooms?",
      answer:
        "Yes, Relaxio Spa offers clean and private wellness rooms designed for a comfortable spa experience.",
    },
    {
      question: "Should I book a spa session in advance?",
      answer:
        "Advance booking is recommended, especially during weekends and evening hours.",
    },
  ],
});

export default function SpaHazratganjPage() {
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
            Best Spa in Hazratganj Lucknow
          </h1>

          <p className="text-lg leading-relaxed text-stone-700 mb-8">
            Looking for a premium spa near Hazratganj Lucknow? Relaxio Spa is
            located in Vivek Khand 4, Gomti Nagar and welcomes guests from
            Hazratganj, Lalbagh, Kaiserbagh and nearby commercial areas. Our
            wellness services include Thai Massage, Balinese Massage, Deep
            Tissue Massage, Couple Spa, Jacuzzi and Steam Bath in a calm,
            professional environment.
          </p>

          <h2 className="font-serif text-3xl mb-6">
            Luxury Spa Near Hazratganj
          </h2>

          <p className="leading-relaxed text-stone-700 mb-8">
            Whether you are visiting Hazratganj for shopping, business
            meetings or after office hours, Relaxio Spa offers a peaceful
            wellness experience designed to help you relax and recharge. Our
            professional massage therapies are available in a comfortable and
            private setting in Gomti Nagar.
          </p>

          <h2 className="font-serif text-3xl mb-6">
            Popular Spa Services Near Hazratganj
          </h2>

          <ul className="space-y-3 mb-10">
            <li>✓ Thai Massage in Gomti Nagar Lucknow</li>
            <li>✓ Balinese Massage in Gomti Nagar Lucknow</li>
            <li>✓ Deep Tissue Massage in Gomti Nagar Lucknow</li>
            <li>✓ Couple Massage in Gomti Nagar Lucknow</li>
            <li>✓ Jacuzzi &amp; Steam Bath in Gomti Nagar Lucknow</li>
          </ul>

          <h2 className="font-serif text-3xl mb-6">
            Why Guests from Hazratganj Choose Relaxio Spa
          </h2>

          <p className="leading-relaxed text-stone-700 mb-8">
            Guests choose Relaxio Spa for professional therapists, hygienic
            facilities, private wellness rooms, calming ambience and convenient
            access from central Lucknow. It is suitable for guests looking to
            relax after work, shopping or a busy day in the city.
          </p>

          <h2 className="font-serif text-3xl mt-16 mb-6">
            How to Reach Relaxio Spa from Hazratganj
          </h2>

          <p className="leading-relaxed text-stone-700 mb-8">
            Relaxio Spa is located at 2nd Floor, 4/526, Vivek Khand 4, Gomti
            Nagar, Lucknow. The journey from Hazratganj is generally a short
            drive via connecting central Lucknow roads, with travel time
            depending on current traffic.
          </p>

          <h2 className="font-serif text-3xl mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Is Relaxio Spa near Hazratganj?
              </h3>
              <p className="text-stone-700">
                Yes. Relaxio Spa is located in Vivek Khand 4, Gomti Nagar and
                is accessible from Hazratganj by a short drive depending on
                traffic.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Which spa services are available near Hazratganj?
              </h3>
              <p className="text-stone-700">
                Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Spa,
                Jacuzzi and Steam Bath are available at Relaxio Spa.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Do you offer private spa rooms?
              </h3>
              <p className="text-stone-700">
                Yes. Relaxio Spa offers clean and private wellness rooms for a
                peaceful and comfortable experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Should I book a spa session in advance?
              </h3>
              <p className="text-stone-700">
                Advance booking is recommended, especially during weekends and
                evening hours.
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
              href="/spa-in-aliganj-lucknow"
              className="block underline"
            >
              Spa Near Aliganj Lucknow
            </Link>

            <Link
              href="/spa-in-chinhat-lucknow"
              className="block underline"
            >
              Spa Near Chinhat Lucknow
            </Link>

            <Link
              href="/spa-in-mahanagar-lucknow"
              className="block underline"
            >
              Spa Near Mahanagar Lucknow
            </Link>
          </div>

          <div className="bg-stone-100 rounded-2xl p-8 mt-12">
            <h2 className="font-serif text-3xl mb-4">
              Book Your Wellness Session
            </h2>

            <p className="text-stone-700 mb-4">
              Looking for a premium spa near Hazratganj Lucknow? Contact Relaxio
              Spa to book your preferred wellness therapy and check
              availability before your visit.
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
