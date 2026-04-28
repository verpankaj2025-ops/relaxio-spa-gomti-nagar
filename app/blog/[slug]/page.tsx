import Script from "next/script";
import { Metadata } from "next";
import Link from "next/link";

const blogContent: any = {
  "body-massage-benefits": {
  title: "Body Massage Benefits",
  content: `
  <div className="mt-6 text-stone-600 text-sm">
  Looking for the best spa in Gomti Nagar Lucknow?  
  Relaxio Spa offers premium massage services with expert therapists and private rooms.
</div>
Body massage improves blood circulation, reduces stress and relaxes muscles.

Regular massage helps improve sleep quality and boosts overall wellness.
  `,
},

"thai-vs-balinese-massage": {
  title: "Thai vs Balinese Massage",
  content: `
Thai massage focuses on stretching and energy flow, while Balinese massage focuses on relaxation and deep tissue techniques.

Both offer unique benefits based on your needs.
  `,
},

"spa-near-me-lucknow": {
  title: "Spa Near Me Lucknow",
  content: `
Looking for a spa near you in Lucknow? Relaxio Spa offers premium services in Gomti Nagar with expert therapists and luxury ambience.
  `,
},
  "best-spa-in-gomti-nagar-lucknow": {
    title: "Best Spa in Gomti Nagar Lucknow",
    content: `
Relaxio Spa is the best spa in Gomti Nagar Lucknow offering premium Thai, Balinese, Deep Tissue and Couple massage.

Our trained therapists, hygienic private rooms and luxury ambience make us the top-rated spa in Lucknow.

Services we offer:
- Thai Massage
- Balinese Massage
- Deep Tissue Massage
- Couple Massage
- Jacuzzi & Steam Bath

Book your appointment now for a luxury spa experience in Gomti Nagar.
    `,
  },

  "benefits-of-thai-massage": {
    title: "Benefits of Thai Massage",
    content: `
Thai massage improves flexibility, reduces stress and boosts energy.

It combines stretching, acupressure and body alignment techniques.

Regular Thai massage helps relieve pain, improve circulation and enhance overall wellness.
    `,
  },

  "couple-massage-benefits": {
    title: "Couple Massage Benefits",
    content: `
Couple massage helps improve bonding, reduce stress and create a relaxing shared experience.

It is perfect for partners, special occasions and relaxation therapy.
    `,
  },
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = blogContent[params.slug];

  return {
  title: `${post?.title} | Spa in Gomti Nagar Lucknow`,
  description: post?.content.slice(0, 155),

  alternates: {
    canonical: `https://relaxiospa.in/blog/${params.slug}`,
  },

  openGraph: {
    title: post?.title,
    description: post?.content.slice(0, 155),
    url: `https://relaxiospa.in/blog/${params.slug}`,
    type: "article",
    images: [
      {
        url: "https://relaxiospa.in/images/spa.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};
}

export default function BlogDetail({ params }: any) {
  const post = blogContent[params.slug];

  if (!post) return <div className="p-20 text-center">Blog not found</div>;

  return (
    <div className="py-20 max-w-3xl mx-auto px-4 text-center">
        <Script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",

      url: `https://relaxiospa.in/blog/${params.slug}`,
image: "https://relaxiospa.in/images/spa.jpg",

      headline: post?.title,
      description: post?.content.slice(0, 150),
      author: {
        "@type": "Organization",
        name: "Relaxio Spa",
      },
      publisher: {
        "@type": "Organization",
        name: "Relaxio Spa",
      },
    }),
  }}
/>
      <h1 className="text-4xl font-serif mb-6">{post.title}</h1>

      <p className="text-stone-700 whitespace-pre-line leading-relaxed text-center">
        {post.content}
      </p>
      <div className="mt-10 text-center">
  <a
    href="https://wa.me/917081891995?text=Hi%20I%20want%20to%20book%20a%20spa%20session"
    target="_blank"
    className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg transition"
  >
    Book Your Spa Session on WhatsApp
  </a>
</div>
      <div className="mt-10 space-y-3 bg-[#f8f5ef] p-5 rounded-xl text-center">
  <p className="font-semibold">Explore Our Services:</p>

  <p className="text-center">
    👉 <a href="/services/thai-massage" className="text-amber-600 hover:underline">
      Thai Massage
    </a>
  </p>

  <p className="text-center">
    👉 <a href="/services/couple-massage" className="text-amber-600 hover:underline">
      Couple Massage
    </a>
  </p>

  <p className="text-center">
    👉 <a href="/services/spa-facilities" className="text-amber-600 hover:underline">
      Jacuzzi & Steam Bath
    </a>
  </p>
</div>

      <div className="mt-10">
        <Link href="/blog" className="text-amber-600 underline">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}