export function getLocalBusinessSchema() {
  const baseUrl = process.env.APP_URL || 'https://relaxiospa.in';
  return {
    "@context": "https://schema.org",
    "@type": "Spa",
    "name": "Relaxio Spa",
    "image": [
  "https://relaxiospa.in/images/luxury-spa-gomti-nagar-lucknow.avif",
  "https://relaxiospa.in/images/thai-massage-gomti-nagar-lucknow.avif",
  "https://relaxiospa.in/images/balinese-massage-gomti-nagar-lucknow.avif"
],
    "@id": `${baseUrl}/#spa`,
    "url": baseUrl,
    "telephone": "+917081891995",
    "priceRange": "₹1499 - ₹8999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd Floor, 4/526, Vivek Khand 4, Gomti Nagar",
      "addressLocality": "Lucknow",
      "postalCode": "226010",
      "addressRegion": "UP",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8553677,
      "longitude": 80.9985092
    },
    
    "openingHoursSpecification": [
  {
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
    "opens": "11:00",
    "closes": "21:00"
  }
],
    
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61570999326665",
      "https://www.instagram.com/relaxio_spa_gomti_nagar",
    ]
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  const baseUrl = process.env.APP_URL || 'https://relaxiospa.in';
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
