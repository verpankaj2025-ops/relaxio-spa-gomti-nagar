import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

type Props = {
  currentSlug: string;
};

export default function RelatedBlogs({ currentSlug }: Props) {
  const blogs = getAllPosts().filter(
    (blog) => blog.slug !== currentSlug
  );

  if (blogs.length === 0) return null;

  return (
    <section className="mt-28">

      <div className="text-center mb-14">

        <span className="uppercase tracking-[0.3em] text-xs text-[#d4af37] font-medium">
          Related Wellness Articles
        </span>

        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mt-4">
          Continue Exploring Wellness Insights
        </h2>

        <p className="text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto mt-6">
          Discover more spa wellness guides, massage therapy insights, and relaxation techniques from Relaxio Spa Gomti Nagar Lucknow.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {blogs.slice(0, 3).map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group bg-[#fffdf9] border border-stone-200 rounded-[28px] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >

            <h3 className="font-serif text-2xl text-stone-900 mb-4 group-hover:text-amber-600 transition-colors">
              {blog.title}
            </h3>

            <p className="text-stone-600 leading-relaxed">
              {blog.description}
            </p>

            <div className="mt-8 text-sm uppercase tracking-[0.2em] text-amber-600 font-semibold">
              Read Article →
            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}