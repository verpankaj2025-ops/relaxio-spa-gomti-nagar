export function getLocalBusinessSchema() {
  const baseUrl = process.env.APP_URL || 'https://relaxiospa.com';
  return {
    "@context": "https://schema.org",
    "@type": ["Spa", "HealthAndBeautyBusiness", "LocalBusiness"],
    "name": "Relaxio Spa",
    "image": [
      "https://picsum.photos/seed/spa-exterior/1x1/800/800",
      "https://picsum.photos/seed/spa-exterior/4x3/800/600",
      "https://picsum.photos/seed/spa-exterior/16x9/1200/675"
    ],
    "@id": baseUrl,
    "url": baseUrl,
    "telephone": "+919999999999",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Luxury Avenue, Phase 1, Gomti Nagar",
      "addressLocality": "Lucknow",
      "postalCode": "226010",
      "addressRegion": "UP",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8500,
      "longitude": 80.9499
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "21:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    },
    "sameAs": [
      "https://www.facebook.com/relaxiospa",
      "https://www.instagram.com/relaxiospa"
    ]
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  const baseUrl = process.env.APP_URL || 'https://relaxiospa.com';
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": `${baseUrl}${breadcrumb.item}`
    }))
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getReviewSchema(reviews: { author: string; rating: number; reviewBody: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Spa",
      "name": "Relaxio Spa"
    },
    "review": reviews.map((review) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "reviewBody": review.reviewBody
    }))
  };
}
