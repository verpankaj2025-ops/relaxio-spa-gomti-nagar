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
    <section className="mt-24">

      <div className="text-center mb-10">

        <span className="uppercase tracking-[0.3em] text-xs text-[#d4af37] font-medium">
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
            className="group bg-[#fffdf9] backdrop-blur-sm border border-stone-200/60 rounded-3xl p-8 min-h-[260px] flex flex-col justify-between hover:border-[#d4af37]/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 no-underline"
          >

            <h3 className="text-2xl font-serif text-stone-900 mb-4 group-hover:text-[#d4af37] transition-colors no-underline">
              {therapy.title}
            </h3>

            <p className="text-stone-600 leading-relaxed text-base no-underline max-w-[90%]">
              {therapy.description}
            </p>

          </Link>
        ))}

      </div>

    </section>
  );
}