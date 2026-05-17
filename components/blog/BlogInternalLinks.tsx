import Link from "next/link";

const links = [
  {
    title: "Thai Massage",
    href: "/services/thai-massage",
    description:
      "Traditional stretching therapy designed for flexibility and full-body relaxation.",
  },
  {
    title: "Deep Tissue Massage",
    href: "/services/deep-tissue-massage",
    description:
      "Professional deep-pressure wellness therapy for stress relief and muscle recovery.",
  },
  {
    title: "Balinese Massage",
    href: "/services/balinese-massage",
    description:
      "Luxury aromatherapy massage designed for calmness, relaxation, and wellness.",
  },
];

export default function BlogInternalLinks() {
  return (
    <section className="mt-24">

      <div className="text-center mb-12">

        <span className="uppercase tracking-[0.3em] text-xs text-[#d4af37] font-medium">
          Relaxio Spa Services
        </span>

        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-4">
          Explore Wellness Therapies
        </h2>

        <p className="text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto mt-6">
          Discover luxury wellness therapies, stress relief treatments, and premium spa experiences at Relaxio Spa Gomti Nagar Lucknow.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group bg-[#fffdf9] border border-stone-200 rounded-[28px] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >

            <h3 className="font-serif text-2xl text-stone-900 mb-4 group-hover:text-amber-600 transition-colors">
              {link.title}
            </h3>

            <p className="text-stone-600 leading-relaxed">
              {link.description}
            </p>

            <div className="mt-8 text-sm uppercase tracking-[0.2em] text-amber-600 font-semibold">
              Explore Therapy →
            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}