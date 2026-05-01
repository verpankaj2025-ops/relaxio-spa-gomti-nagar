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
    <section className="relative h-[340px] md:h-[400px] lg:h-[440px] flex items-center justify-center overflow-hidden bg-stone-950">

      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 1400px"
          quality={75}
          className="object-cover object-[center_65%]"
        />

        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

        <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-sm md:text-lg text-stone-300 max-w-2xl mx-auto">
          {subtitle}
        </p>

      </div>
    </section>
  );
}