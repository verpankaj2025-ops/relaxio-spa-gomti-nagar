export function getLocationSchemas({
  location,
  url,
  faq,
}: {
  location: string;
  url: string;
  faq: {
    question: string;
    answer: string;
  }[];
}) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://relaxiospa.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://relaxiospa.in/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Spa Near ${location}`,
        item: url,
      },
    ],
  };

  const spa = {
    "@context": "https://schema.org",
    "@type": "Spa",
    name: "Relaxio Spa",
    url: "https://relaxiospa.in",
    image: "https://relaxiospa.in/og-image.jpg",
    telephone: "+91-XXXXXXXXXX",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vivek Khand 4",
      addressLocality: "Gomti Nagar",
      addressRegion: "Uttar Pradesh",
      postalCode: "226010",
      addressCountry: "IN",
    },
    areaServed: location,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    breadcrumb,
    spa,
    faqSchema,
  };
}