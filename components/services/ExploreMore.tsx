import Link from "next/link";

type Therapy = {
  title: string;
  href: string;
  description: string;
};

type ExploreMoreProps = {
  therapies: Therapy[];
};

export default function ExploreMore({
  therapies,
}: ExploreMoreProps) {
  return (
    <section className="mt-28 pt-10 border-t border-stone-100">

      <div className="text-center mb-10">

        <span className="uppercase tracking-[0.3em] text-xs text-amber-900 font-medium">
          Relaxio Spa Services
        </span>

        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-3">
          Explore More Wellness Therapies
        </h2>

        <p className="text-stone-600 mt-4 max-w-3xl mx-auto leading-relaxed">
          Discover premium wellness therapies designed for deep relaxation, body recovery, and luxury spa experiences in Gomti Nagar Lucknow.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {therapies.map((therapy, index) => (
            <Link
              key={index}
              href={therapy.href}
              prefetch={true}
              className="group relative bg-white border border-stone-200/70 rounded-[32px] p-8 min-h-[280px] flex flex-col justify-between overflow-hidden hover:border-[#d4af37]/40 hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 no-underline"
            >

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="text-[2rem] leading-tight tracking-[-0.02em] font-serif text-stone-900 mb-4 group-hover:text-[#d4af37] transition-colors no-underline">
              {therapy.title}
            </h3>

            <p className="text-stone-600 leading-relaxed text-base no-underline max-w-full">
              {therapy.description}
            </p>

          </Link>
        ))}

      </div>

    </section>
  );
}