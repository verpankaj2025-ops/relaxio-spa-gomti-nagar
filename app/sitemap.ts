const lastUpdated = new Date("2026-04-01");

export default function sitemap() {
  return [
    {
      url: 'https://relaxiospa.in',
      lastModified: lastUpdated,
    },
    {
      url: 'https://relaxiospa.in/services',
      lastModified: lastUpdated,
    },

    // 🔥 SERVICES
    {
      url: 'https://relaxiospa.in/services/thai-massage',
      lastModified: lastUpdated,
    },
    {
      url: 'https://relaxiospa.in/services/balinese-massage',
      lastModified: lastUpdated,
    },
    {
      url: 'https://relaxiospa.in/services/deep-tissue-massage',
      lastModified: lastUpdated,
    },
    {
      url: 'https://relaxiospa.in/services/couple-massage',
      lastModified: lastUpdated,
    },
    {
      url: 'https://relaxiospa.in/services/spa-facilities',
      lastModified: lastUpdated,
    },

    // 🔥 OTHER PAGES
    {
      url: 'https://relaxiospa.in/about',
      lastModified: lastUpdated,
    },
    {
      url: 'https://relaxiospa.in/contact',
      lastModified: lastUpdated,
    },
  ];
}