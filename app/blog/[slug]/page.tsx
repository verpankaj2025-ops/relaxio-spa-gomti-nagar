import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getPost } from '@/lib/blog';
import ExploreMore from '@/components/services/ExploreMore';
import BlogInternalLinks from '@/components/blog/BlogInternalLinks';
import RelatedBlogs from '@/components/blog/RelatedBlogs';

type Params = Promise<{ slug: string }>;

const SITE_URL = 'https://relaxiospa.in';

function getAbsoluteImageUrl(image?: string) {
  if (!image) {
    return `${SITE_URL}/images/spa.avif`;
  }

  if (image.startsWith('http://') || image.startsWith('https://')) {
    return image;
  }

  return `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;
}

async function loadPost(slug: string) {
  try {
    return await getPost(slug);
  } catch {
    notFound();
  }
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);

  const canonicalUrl = `${SITE_URL}/blog/${slug}`;
  const imageUrl = getAbsoluteImageUrl(post.image);

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },

    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      siteName: 'Relaxio Spa',
      locale: 'en_IN',
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const post = await loadPost(slug);

  const canonicalUrl = `${SITE_URL}/blog/${slug}`;
  const imageUrl = getAbsoluteImageUrl(post.image);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonicalUrl}#article`,
    headline: post.title,
    description: post.description,
    image: imageUrl,

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },

    author: {
      '@type': 'Organization',
      name: 'Relaxio Spa',
      url: SITE_URL,
    },

    publisher: {
      '@type': 'Organization',
      name: 'Relaxio Spa',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.ico`,
      },
    },

    isPartOf: {
      '@type': 'Blog',
      '@id': `${SITE_URL}/blog#blog`,
      name: 'Relaxio Spa Wellness Journal',
      url: `${SITE_URL}/blog`,
    },

    inLanguage: 'en-IN',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 py-24 content-auto">
        <header>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif text-stone-900 mb-10 leading-tight">
            {post.title}
          </h1>
        </header>

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
              title: 'Thai Massage',
              href: '/services/thai-massage',
              description:
                'Traditional stretching therapy designed for flexibility, deep relaxation, and body recovery.',
            },
            {
              title: 'Deep Tissue Massage',
              href: '/services/deep-tissue-massage',
              description:
                'Firm-pressure wellness therapy focused on muscle recovery and stress relief.',
            },
            {
              title: 'Balinese Massage',
              href: '/services/balinese-massage',
              description:
                'Luxury aromatherapy wellness therapy designed to calm the body and mind.',
            },
          ]}
        />
      </article>
    </>
  );
}
