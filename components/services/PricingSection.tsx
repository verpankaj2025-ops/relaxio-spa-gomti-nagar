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
    <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-sm my-14 max-w-5xl mx-auto">

      <div className="text-center mb-6">
        <span className="uppercase tracking-[0.3em] text-xs text-[#d4af37] font-medium">
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
            className={`flex items-center justify-between rounded-2xl px-5 py-5 relative transition-all ${
              pkg.popular
                ? "border-2 border-[#d4af37]/30 bg-[#fffaf0]"
                : "border border-stone-100 hover:border-[#d4af37]/40"
            }`}
          >

            {pkg.popular && (
              <span className="absolute -top-3 right-4 bg-[#d4af37] text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="text-lg md:text-xl font-serif text-stone-900">
                {pkg.name}
              </h3>

              <p className="text-sm text-stone-500 mt-1">
                {pkg.duration}
              </p>
            </div>

            <div className="text-3xl md:text-4xl font-serif text-[#d4af37]">
              {pkg.price}
            </div>

          </div>
        ))}

      </div>

      <div className="mt-8 text-center">

        <p className="text-sm text-stone-500 mb-5">
          Private luxury rooms • Professional wellness therapy • Premium spa ambience
        </p>

        <a
          href={`https://wa.me/917081891995?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 bg-stone-900 text-white rounded-full hover:bg-black transition-all duration-300 text-sm uppercase tracking-[0.2em] font-medium"
        >
          {buttonText}
        </a>

      </div>

    </div>
  );
}