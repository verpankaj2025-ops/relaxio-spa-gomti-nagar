import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const blogs = getAllPosts();

  return (
    <div>


    {/* 🔥 HERO SECTION (same as services pages) */}

<section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden bg-stone-950">
  
  <Image
    src="/images/spa.avif"
    fill
    className="object-cover"
    alt="Luxury wellness spa experience at Relaxio Spa"
    sizes="100vw"
  />

  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
  <div className="text-center px-4 sm:px-6 max-w-5xl mx-auto pt-28 pb-16">
  
    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
      Relaxio Spa Blog
    </h1>

    <p className="text-base sm:text-lg md:text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed font-light">
      Discover wellness tips, massage benefits, spa therapies, and relaxation guides from the best spa in Gomti Nagar Lucknow.
    </p>
  </div>
</div>

<div className="relative">
    
  </div>

   </section>

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
  {blog.description}
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