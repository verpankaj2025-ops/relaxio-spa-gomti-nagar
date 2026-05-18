import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[62vh] md:h-[72vh] flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 z-0">

        <Image
          src="/images/luxury-spa-gomti-nagar-lucknow.avif"
          alt="Luxury wellness spa experience at Relaxio Spa"
          fill
          priority
          fetchPriority="high"
          quality={32}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20 pb-10">

        <span className="text-amber-300 tracking-[0.3em] uppercase text-[11px] font-medium mb-6 block">
          Welcome to Relaxio Spa
        </span>

        <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-serif leading-[1.05] tracking-[-0.03em] text-white mb-4">
          Luxury Wellness Spa in Gomti Nagar Lucknow
        </h1>

        <h2 className="text-base md:text-xl text-stone-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Relaxio Spa offers private wellness therapies, calming spa ambience,
          and professionally guided massage experiences designed for relaxation
          and comfort.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          <a
            href="https://wa.me/917081891995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20a%20massage."
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-8 flex items-center justify-center bg-[#d4af37] text-stone-900 rounded-full hover:bg-[#c19b2e] transition-all duration-300 text-sm uppercase tracking-widest font-medium shadow-lg w-full sm:w-auto"
          >
            Book Relaxation Package
          </a>

          <a
            href="tel:+917081891995"
            className="h-12 px-8 flex items-center justify-center bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-stone-900 transition-all duration-300 text-sm uppercase tracking-[0.18em] font-medium w-full sm:w-auto"
          >
            Call Now
          </a>

        </div>
      </div>
    </section>
  );
}