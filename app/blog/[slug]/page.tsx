import { getPost } from "@/lib/blog";

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
    <article className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-10 leading-tight">
        {post.title}
      </h1>

      <div
        className="prose prose-stone prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: post.contentHtml,
        }}
      />
    </article>
  );
}