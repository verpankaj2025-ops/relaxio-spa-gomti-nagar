import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Best Spa in Gomti Nagar Lucknow",
    description:
      "Discover luxury wellness therapies, private spa rooms, and premium relaxation experiences at Relaxio Spa.",
    href: "/blog/best-spa-in-gomti-nagar",
    image: "/images/blog/best-spa-gomti-nagar.avif",
    alt: "Best Spa in Gomti Nagar Lucknow",
    eager: true,
  },
  {
    title: "Deep Tissue Massage Benefits",
    description:
      "Learn how deep tissue massage helps improve muscle recovery, relaxation, and stress relief experiences.",
    href: "/blog/deep-tissue-massage-benefits",
    image: "/images/blog/deep-tissue-massage.avif",
    alt: "Deep Tissue Massage Benefits",
    eager: true,
  },
  {
    title: "Benefits of Thai Massage",
    description:
      "Explore wellness benefits of Thai massage including flexibility improvement and stress relief.",
    href: "/blog/best-thai-massage-benefits-lucknow",
    image: "/images/blog/thai-massage.avif",
    alt: "Benefits of Thai Massage",
    eager: false,
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-white content-auto">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl md:text-[30px] tracking-[-0.02em] font-serif text-center mb-12">
          Wellness & Spa Guides
        </h3>
        <p className="text-stone-600 text-lg mt-4 mb-10 max-w-2xl mx-auto leading-relaxed text-center">
          Explore wellness insights, massage therapy benefits, and premium spa experiences designed for relaxation and rejuvenation.
        </p>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {posts.map((post) => (
            <article
              key={post.href}
              className="group overflow-hidden bg-[#fffdf9] border border-stone-200/80 rounded-[30px] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative media-hover-glow">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={800}
                  height={500}
                  quality={40}
                  loading={post.eager ? undefined : "lazy"}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-52 md:h-64 object-cover md:transition-transform md:duration-300 md:group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h4 className="font-serif text-[30px] tracking-[-0.02em] text-stone-900 leading-tight mb-4">
                  {post.title}
                </h4>
                <p className="text-stone-600 leading-relaxed mb-6">{post.description}</p>
                <Link
                  href={post.href}
                  prefetch={false}
                  aria-label={`Read article: ${post.title}`}
                  className="inline-flex items-center justify-center border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-200 px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em]"
                >
                  Read Article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
