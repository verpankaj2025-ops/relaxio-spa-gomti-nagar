import Link from "next/link";

export default function BlogPage() {
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
  ];

  return (
    <div className="py-20 max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-serif mb-10 text-center">
        Spa & Wellness Blog
      </h1>

      <div className="space-y-6">
        {blogs.map((blog, i) => (
          <Link
            key={i}
            href={`/blog/${blog.slug}`}
            className="block p-6 bg-white shadow rounded-lg hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}