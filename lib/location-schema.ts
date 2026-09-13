const SITE_URL = 'https://relaxiospa.in';

const SPA_ID = `${SITE_URL}/#spa`;

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
  const canonicalUrl = url.startsWith('http')
    ? url
    : `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `Spa in ${location}`,
        item: canonicalUrl,
      },
    ],
  };

  const spa = {
    '@context': 'https://schema.org',
    '@type': 'Spa',
    '@id': SPA_ID,
    name: 'Relaxio Spa',
    url: SITE_URL,
    image: `${SITE_URL}/images/spa.avif`,
    telephone: ['+917081891995', '+919455671995'],
    priceRange: '₹2,499 - ₹6,499',

    address: {
      '@type': 'PostalAddress',
      streetAddress: '2nd Floor, 4/526, Vivek Khand 4',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      postalCode: '226010',
      addressCountry: 'IN',
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.8553677,
      longitude: 80.9985092,
    },

    hasMap:
      'https://www.google.com/maps/dir/?api=1&destination=26.8553677,80.9985092',

    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '11:00',
        closes: '21:00',
      },
    ],

    areaServed: [
      {
        '@type': 'Place',
        name: location,
      },
      {
        '@type': 'City',
        name: 'Lucknow',
      },
    ],

    sameAs: [
      'https://www.instagram.com/relaxio_spa_lko/',
      'https://www.facebook.com/profile.php?id=61589844524555',
    ],
  };

  const faqSchema =
    faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  return {
    breadcrumb,
    spa,
    faqSchema,
  };
}
