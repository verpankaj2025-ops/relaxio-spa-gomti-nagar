const packages = [
  {
    name: 'Relaxation',
    duration: '60 Minutes Session',
    price: '₹2,499',
    features: ['Choice of Swedish or Balinese', 'Premium Essential Oils', 'Shower Facility'],
    cta: 'Book Deep Healing',
    waText: 'Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20the%20Relaxation%20package.',
    variant: 'light' as const,
    buttonClass:
      'block w-full py-4 border border-stone-900 text-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition-colors uppercase tracking-widest text-sm font-medium',
  },
  {
    name: 'Deep Healing',
    duration: '90 Minutes Session',
    price: '₹3,499',
    features: [
      'Deep Tissue or Thai Massage',
      'Hot Stone Therapy Add-on',
      'Premium Essential Oils',
      'Shower & Steam Facility',
    ],
    cta: 'Book Couple Retreat',
    waText: 'Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20a%20massage.',
    variant: 'featured' as const,
    buttonClass:
      'block w-full py-4 bg-[#d4af37] text-stone-900 rounded-full hover:bg-[#c19b2e] transition-all duration-300 hover:shadow-lg uppercase tracking-widest text-sm font-medium shadow-lg',
  },
  {
    name: "Couple's Retreat",
    duration: '90 Minutes Session',
    price: '₹6,499',
    features: [
      "Private Couple's Suite",
      'Any Massage of Choice',
      'Aromatherapy & Rose Petals',
      'Private Shower Facility',
    ],
    cta: 'Book Couple Retreat',
    waText: 'Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20a%20massage.',
    variant: 'light' as const,
    buttonClass:
      'block w-full py-4 bg-[#d4af37] text-stone-900 rounded-full hover:bg-[#c19b2e] transition-all duration-300 hover:shadow-lg uppercase tracking-widest text-sm font-medium shadow-lg',
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 md:py-20 bg-[#fdfbf7] content-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-amber-700 tracking-[0.2em] uppercase text-sm font-medium mb-4 block">
            Transparent Pricing
          </span>
          <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">
            Wellness Therapy Packages
          </h3>
          <div className="w-20 h-0.5 bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => {
            if (pkg.variant === 'featured') {
              return (
                <div
                  key={pkg.name}
                  className="group card-surface card-surface-dark relative bg-stone-900 p-12 rounded-[32px] border border-[#d4af37]/80 text-center md:-translate-y-2 transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-stone-900 px-6 py-2 rounded-full text-xs uppercase tracking-[0.25em] font-medium shadow-[0_10px_30px_rgba(212,175,55,0.35)] z-[1]">
                    Most Popular
                  </div>
                  <h3 className="relative z-[1] text-2xl font-serif text-white mb-2">{pkg.name}</h3>
                  <p className="relative z-[1] text-stone-300 font-light mb-8">{pkg.duration}</p>
                  <div className="relative z-[1] text-5xl font-serif text-white mb-8">{pkg.price}</div>
                  <ul className="relative z-[1] space-y-4 mb-10 text-stone-300 font-light">
                    {pkg.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/919455671995?text=${pkg.waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${pkg.cta} — ${pkg.name} package`}
                    className={`relative z-[1] ${pkg.buttonClass}`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              );
            }

            return (
              <div
                key={pkg.name}
                className="group card-surface bg-white p-8 rounded-[28px] border border-stone-200/80 text-center transition-shadow duration-300 hover:shadow-lg"
              >
                <h3 className="relative z-[1] text-2xl font-serif text-stone-900 mb-2">{pkg.name}</h3>
                <p className="relative z-[1] text-stone-600 font-light mb-8">{pkg.duration}</p>
                <div className="relative z-[1] text-5xl tracking-[-0.03em] font-serif text-stone-900 mb-8">
                  {pkg.price}
                </div>
                <ul className="relative z-[1] space-y-4 mb-10 text-stone-600 font-light">
                  {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/919455671995?text=${pkg.waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative z-[1] ${pkg.buttonClass}`}
                >
                  {pkg.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
