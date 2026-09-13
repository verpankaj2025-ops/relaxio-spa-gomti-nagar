const SITE_URL = "https://relaxiospa.in";

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
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Spa Services",
        item: `${SITE_URL}/services`,
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
    "@id": `${SITE_URL}/#spa`,
    name: "Relaxio Spa",
    url: SITE_URL,
    image: `${SITE_URL}/images/luxury-spa-gomti-nagar-lucknow.avif`,
    telephone: ["+917081891995", "+919455671995"],
    priceRange: "₹1499 - ₹8999",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, 4/526, Vivek Khand 4",
      addressLocality: "Lucknow",
      addressRegion: "UP",
      postalCode: "226010",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.8553677,
      longitude: 80.9985092,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "21:00",
      },
    ],
    areaServed: {
      "@type": "Place",
      name: location,
    },
    sameAs: [
      "https://www.instagram.com/relaxio_spa_lko/",
      "https://www.facebook.com/profile.php?id=61589844524555",
    ],
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
