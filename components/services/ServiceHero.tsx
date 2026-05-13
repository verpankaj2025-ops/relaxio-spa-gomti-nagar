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
    <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-950">

      <div className="absolute inset-0 z-0">
        <Image
  src={image}
  alt={alt}
  fill
  sizes="100vw"
  
  className="object-cover object-[center_65%]"
/>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-16">

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
          {title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>

      </div>
    </section>
  );
}