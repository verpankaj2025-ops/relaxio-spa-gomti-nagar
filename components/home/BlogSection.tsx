import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  return (
    <>
       {/* BLOG INTERNAL LINKS */}
<section className="py-16 bg-white">

  <div className="max-w-7xl mx-auto px-4">

    <h3 className="text-2xl md:text-[30px] tracking-[-0.02em] font-serif text-center mb-12">
      Wellness & Spa Guides
    </h3>
    <p className="text-stone-500 text-lg mt-4 mb-10 max-w-2xl mx-auto leading-relaxed">
  Explore wellness insights, massage therapy benefits, and premium spa experiences designed for relaxation and rejuvenation.
</p>

    <div className="grid md:grid-cols-3 gap-5 lg:gap-6">

      {/* BLOG 1 */}
      <div className="group relative overflow-hidden bg-[#fffdf9] border border-stone-200/80 rounded-[30px] hover:shadow-md hover:shadow-lg transition-all duration-300">

        <Image
           src="/images/blog/best-spa-gomti-nagar.avif"
           alt="Best Spa in Gomti Nagar Lucknow"
           width={800}
           height={500}
           quality={40}
           className="w-full h-52 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
         />
         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">

  <div className="absolute -top-24 -left-24 w-56 h-56 bg-white/40 blur-lg rotate-12"></div>

  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-amber-100/20"></div>

</div>

        <div className="p-8">

          <h4 className="font-serif text-[30px] tracking-[-0.02em] text-stone-900 leading-tight mb-4">
            Best Spa in Gomti Nagar Lucknow
          </h4>

          <p className="text-stone-600 leading-relaxed mb-6">
            Discover luxury wellness therapies, private spa rooms,
            and premium relaxation experiences at Relaxio Spa.
          </p>

          <Link
            href="/blog/best-spa-in-gomti-nagar"
            className="inline-flex items-center justify-center border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-200 px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em]"
          >
            Read Article
          </Link>

        </div>
      </div>

      {/* BLOG 2 */}
      <div className="group relative overflow-hidden bg-[#fffdf9] border border-stone-200/80 rounded-[30px] hover:shadow-md hover:shadow-lg transition-all duration-300">

        <Image
           src="/images/blog/deep-tissue-massage.avif"
           alt="Deep Tissue Massage Benefits"
           width={800}
           height={500}
           quality={40}
           className="w-full h-52 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
         />
         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">

  <div className="absolute -top-24 -left-24 w-56 h-56 bg-white/40 blur-lg rotate-12"></div>

  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-amber-100/20"></div>

</div>

        <div className="p-8">

          <h4 className="font-serif text-[30px] tracking-[-0.02em] text-stone-900 leading-tight mb-4">
            Deep Tissue Massage Benefits
          </h4>

          <p className="text-stone-600 leading-relaxed mb-6">
            Learn how deep tissue massage helps improve muscle recovery,
            relaxation, and stress relief experiences.
          </p>

          <Link
            href="/blog/deep-tissue-massage-benefits"
            className="inline-flex items-center justify-center border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-200 px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em]"
          >
            Read Article
          </Link>

        </div>
      </div>

      {/* BLOG 3 */}
      <div className="group relative overflow-hidden bg-[#fffdf9] border border-stone-200/80 rounded-[30px] hover:shadow-md hover:shadow-lg transition-all duration-300">

        <Image
          src="/images/blog/thai-massage.avif"
          alt="Benefits of Thai Massage"
          width={800}
          height={500}
          quality={40}
          loading="lazy"
          className="w-full h-52 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">

           <div className="absolute -top-24 -left-24 w-56 h-56 bg-white/40 blur-lg rotate-12"></div>

            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-amber-100/20"></div>

         </div>

        <div className="p-8">

          <h4 className="font-serif text-[30px] tracking-[-0.02em] text-stone-900 leading-tight mb-4">
            Benefits of Thai Massage
          </h4>

          <p className="text-stone-600 leading-relaxed mb-6">
            Explore wellness benefits of Thai massage including
            flexibility improvement and stress relief.
          </p>

          <Link
            href="/blog/thai-massage-benefits"
            className="inline-flex items-center justify-center border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 hover:shadow-lg px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em]"
          >
            Read Article
          </Link>

        </div>
      </div>

    </div>

  </div>

</section>
    </>
  );
}