import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    title: "Best Spa in Gomti Nagar Lucknow",
    slug: "best-spa-in-gomti-nagar-lucknow",
  },
  {
    title: "Benefits of Thai Massage",
    slug: "benefits-of-thai-massage",
  },
  {
    title: "Couple Massage Benefits",
    slug: "couple-massage-benefits",
  },
  {
    title: "Body Massage Benefits",
    slug: "body-massage-benefits",
  },
  {
    title: "Thai vs Balinese Massage",
    slug: "thai-vs-balinese-massage",
  },
  {
    title: "Spa Near Me Lucknow",
    slug: "spa-near-me-lucknow",
  },
];

export default function BlogPage() {
  return (
    <div>
      &quot;Luxury Spa&quot;

<section className="relative pt-32 pb-20 text-center text-white min-h-[400px]">

  <Image
    src="/images/spa.webp"
    fill
    className="object-cover"
    alt="Luxury Spa in Gomti Nagar Lucknow"
    priority
  />

  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative">
    
  </div>

</section>

      {/* 🔥 HERO SECTION (same as services pages) */}

      {/* 🔥 BLOG LIST */}
      <section className="pb-20 max-w-3xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`}>
              <div className="group p-6 bg-white/80 backdrop-blur rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-stone-200 hover:border-amber-400">

  {/* TITLE */}
  <h2 className="text-2xl font-serif mb-2 group-hover:text-amber-600 transition">
    {blog.title}
  </h2>

  {/* SUBTEXT */}
  <p className="text-sm text-stone-500">
    Discover expert spa tips & wellness insights
  </p>

  {/* CTA */}
  <div className="mt-4 text-amber-600 text-sm font-medium">
    Read More →
  </div>

</div>
            </Link>
          ))}
        </div>
      </section>
      
      <div className="text-center mt-12">
  <a
    href="https://wa.me/917081891995?text=Hi%20I%20want%20to%20book%20a%20spa%20session"
    target="_blank"
    className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg transition"
  >
    Check Availability Now
  </a>
</div>

    </div>
  );
}