import Image from "next/image";
import Link from "next/link";

export default function SpaFacilitiesPage() {
  return (
    <div>

      {/* 🔥 HERO SECTION */}
      <section className="relative pt-40 pb-28 text-center text-white">
        <Image
          src="/images/spa.webp"
          fill
          className="object-cover"
          alt="Jacuzzi and Steam Bath in Gomti Nagar Lucknow"
          priority
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Jacuzzi & Steam Bath in Gomti Nagar Lucknow
          </h1>
          <p className="text-white/90 max-w-xl mx-auto">
            Relax your body and mind with luxury Jacuzzi and Steam Bath sessions at Relaxio Spa.
          </p>
        </div>
      </section>

      {/* 🔥 CONTENT */}
      <section className="py-20 max-w-3xl mx-auto px-4 text-center">

        <h2 className="text-3xl font-serif mb-6">
          Premium Spa Facilities for Deep Relaxation
        </h2>

        <p className="text-stone-700 leading-relaxed mb-6">
          Experience the best Jacuzzi and Steam Bath in Gomti Nagar Lucknow with a calm, hygienic and luxury spa environment.
        </p>

        <p className="text-stone-700 leading-relaxed mb-6">
          These therapies help detox your body, improve blood circulation and provide complete relaxation after a long day.
        </p>

      </section>

      {/* 🔥 BENEFITS (BALINESE STYLE) */}
      <section className="pb-20 max-w-3xl mx-auto px-4 text-center">

        <h3 className="text-2xl font-serif mb-6">
          Benefits of Jacuzzi & Steam Bath
        </h3>

        <div className="space-y-3 text-stone-700">

          <p>✔ Detoxifies body and removes toxins</p>
          <p>✔ Improves blood circulation</p>
          <p>✔ Relieves muscle tension and pain</p>
          <p>✔ Enhances skin health</p>
          <p>✔ Reduces stress and fatigue</p>
          <p>✔ Perfect before or after massage</p>

        </div>
      </section>

      {/* 💰 PRICING CARD */}
      <section className="pb-20 max-w-xl mx-auto px-4 text-center">

        <div className="p-8 bg-white rounded-2xl shadow-xl border border-amber-200">

          <h3 className="text-2xl font-serif mb-4">
            Pricing
          </h3>

          <p className="text-3xl font-semibold text-amber-600 mb-4">
            ₹999 – ₹5999
          </p>

          <p className="text-stone-600 mb-6">
            Combine with massage sessions for complete relaxation experience.
          </p>

          <a
            href="https://wa.me/917081891995?text=Hi%20I%20want%20to%20book%20Jacuzzi%20and%20Steam%20Bath"
            target="_blank"
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg transition"
          >
            Check Availability Now
          </a>

        </div>
      </section>

      {/* 🔥 FAQ */}
      <section className="pb-20 max-w-3xl mx-auto px-4">

        <h3 className="text-2xl font-serif text-center mb-6">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">

          <details className="bg-[#f8f5ef] p-4 rounded-xl">
            <summary className="font-semibold cursor-pointer">
              Is Jacuzzi safe for everyone?
            </summary>
            <p className="mt-2 text-stone-600">
              Yes, but people with medical conditions should consult before use.
            </p>
          </details>

          <details className="bg-[#f8f5ef] p-4 rounded-xl">
            <summary className="font-semibold cursor-pointer">
              Can I combine this with massage?
            </summary>
            <p className="mt-2 text-stone-600">
              Yes, it enhances relaxation when combined with Thai or Balinese massage.
            </p>
          </details>

        </div>
      </section>

      {/* 🔙 BACK */}
      <div className="text-center pb-20">
        <Link href="/services" className="text-amber-600 underline">
          ← Back to Services
        </Link>
      </div>

    </div>
  );
}