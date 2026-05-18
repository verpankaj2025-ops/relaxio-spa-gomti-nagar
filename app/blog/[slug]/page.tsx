import { getPost } from "@/lib/blog";
import ExploreMore from "@/components/services/ExploreMore";
import BlogInternalLinks from "@/components/blog/BlogInternalLinks";
import RelatedBlogs from "@/components/blog/RelatedBlogs";
type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,

    alternates: {
      canonical: `https://relaxiospa.in/blog/${slug}`,
    },

    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://relaxiospa.in/blog/${slug}`,
      siteName: "Relaxio Spa",
      locale: "en_IN",
      type: "article",
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  return (
    <>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        author: {
          "@type": "Organization",
          name: "Relaxio Spa",
        },
        publisher: {
          "@type": "Organization",
          name: "Relaxio Spa",
          logo: {
            "@type": "ImageObject",
            url: "https://relaxiospa.in/favicon.ico",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://relaxiospa.in/blog/${slug}`,
        },
        image: "https://relaxiospa.in/images/spa.avif",
      }),
    }}
  />
    <article className="max-w-4xl mx-auto px-4 py-24 content-auto">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif text-stone-900 mb-10 leading-tight">
        {post.title}
      </h1>

      <div
        className="
  prose prose-stone prose-lg max-w-none
  prose-headings:font-serif
  prose-headings:text-stone-900
  prose-headings:tracking-tight
  prose-h2:text-3xl
  prose-h2:mt-16
  prose-h2:mb-6
  prose-h3:text-2xl
  prose-h3:mt-12
  prose-h3:mb-4
  prose-p:text-stone-700
  prose-p:leading-relaxed
  prose-p:text-[17px]
  prose-a:text-amber-800
  prose-a:no-underline
  hover:prose-a:text-amber-700
  prose-strong:text-stone-900
  prose-li:text-stone-700
  prose-li:marker:text-amber-500
  prose-blockquote:border-amber-500
  prose-blockquote:text-stone-700
"
        dangerouslySetInnerHTML={{
          __html: post.contentHtml,
        }}
      />

      <RelatedBlogs currentSlug={slug} />

      <BlogInternalLinks />

      <ExploreMore
  therapies={[
    {
      title: "Thai Massage",
      href: "/services/thai-massage",
      description:
        "Traditional stretching therapy designed for flexibility, deep relaxation, and body recovery.",
    },
    {
      title: "Deep Tissue Massage",
      href: "/services/deep-tissue-massage",
      description:
        "Firm-pressure wellness therapy focused on muscle recovery and stress relief.",
    },
    {
      title: "Balinese Massage",
      href: "/services/balinese-massage",
      description:
        "Luxury aromatherapy wellness therapy designed to calm the body and mind.",
    },
  ]}
/>

    </article>
  </>
  );
}