import Image from "next/image";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export default function ServiceHero({
  title,
  subtitle,
  image,
  alt,
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[72vh] lg:min-h-[82vh] flex items-center justify-center overflow-hidden bg-stone-950">

      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={40}
          className="object-cover object-[center_65%] scale-[1.02]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-12">

        <div className="w-20 h-px bg-[#d4af37] mx-auto mb-8 opacity-80" />
         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-serif text-white mb-6 leading-[1.05]
                                                                                                    tracking-[-0.03em]">
          {title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-stone-200/90 max-w-3xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>

      </div>
    </section>
  );
}