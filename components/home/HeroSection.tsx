import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[62vh] md:min-h-[72vh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/luxury-spa-gomti-nagar-lucknow.avif"
          alt="Luxury spa in Gomti Nagar Lucknow at Relaxio Spa"
          fill
          priority
          fetchPriority="high"
          quality={80}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 flex min-h-[62vh] md:min-h-[72vh] flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20 pb-10">
        <span className="text-amber-300 tracking-[0.18em] uppercase text-[11px] font-medium mb-6 block">
          Relaxio Spa • Gomti Nagar Lucknow
        </span>

        <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-serif leading-[1.05] tracking-[-0.03em] text-white mb-4">
          Best Spa in Gomti Nagar Lucknow
        </h1>

        <p className="text-base md:text-xl text-stone-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Relaxio Spa is a luxury wellness destination in Gomti Nagar offering
          Thai Massage, Balinese Massage, Deep Tissue Massage, Couple Massage,
          Jacuzzi, Steam Bath and other professional spa experiences in Lucknow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/919455671995?text=Hi%20Relaxio%20Spa,%20I%20want%20to%20book%20a%20massage%20in%20Gomti%20Nagar%20Lucknow."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a spa massage at Relaxio Spa in Gomti Nagar Lucknow"
            className="h-12 px-8 flex items-center justify-center bg-[#d4af37] text-stone-900 rounded-full hover:bg-[#c19b2e] transition-colors duration-300 text-sm uppercase tracking-widest font-medium shadow-lg w-full sm:w-auto"
          >
            Book a Spa Session
          </a>

          <a
            href="tel:+917081891995"
            aria-label="Call Relaxio Spa in Gomti Nagar Lucknow"
            className="h-12 px-8 flex items-center justify-center bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-stone-900 transition-colors duration-300 text-sm uppercase tracking-[0.18em] font-medium w-full sm:w-auto"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
