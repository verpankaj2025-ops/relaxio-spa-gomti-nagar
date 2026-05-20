type PricingPackage = {
  name: string;
  duration: string;
  price: string;
  popular?: boolean;
};

type PricingSectionProps = {
  title: string;
  description: string;
  buttonText: string;
  whatsappMessage: string;
  packages: PricingPackage[];
};

export default function PricingSection({
  title,
  description,
  buttonText,
  whatsappMessage,
  packages,
}: PricingSectionProps) {
  return (
    <div className="bg-white/95 border border-stone-200/70 rounded-[36px] p-6 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.06)] my-20 max-w-5xl mx-auto overflow-hidden relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

      <div className="text-center mb-6">
        <span className="uppercase tracking-[0.3em] text-xs text-amber-900 font-medium">
          Relaxio Spa Pricing
        </span>

        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-3">
          {title}
        </h2>

        <p className="text-stone-600 mt-3 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      <div className="space-y-4">

        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`flex items-center justify-between rounded-[28px] px-5 py-5 relative transition-all ${
              pkg.popular
                ? "border border-[#d4af37]/40 bg-gradient-to-br from-[#fffaf0] to-white shadow-lg scale-[1.01]"
                : "border border-stone-100 hover:border-[#d4af37]/50 hover:shadow-lg"
            }`}
          >

            {pkg.popular && (
              <span className="absolute -top-3 right-4 bg-stone-900 text-amber-200 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="text-lg md:text-xl font-serif text-stone-900">
                {pkg.name}
              </h3>

              <p className="text-sm text-stone-600 mt-1">
                {pkg.duration}
              </p>
            </div>

            <div className="text-3xl md:text-4xl tracking-[-0.03em] font-serif text-amber-900">
              {pkg.price}
            </div>

          </div>
        ))}

      </div>

      <div className="mt-8 text-center">

        <p className="text-sm text-stone-600 mb-5">
          Private luxury rooms • Professional wellness therapy • Premium spa ambience
        </p>

        <a
          href={`https://wa.me/919455671995?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 bg-stone-900 text-white rounded-full hover:bg-[#1a1a1a] hover:scale-[1.02] transition-all duration-200 text-sm uppercase tracking-[0.2em] font-medium"
        >
          {buttonText}
        </a>

      </div>

    </div>
  );
}
