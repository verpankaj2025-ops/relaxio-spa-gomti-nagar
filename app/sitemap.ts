const lastUpdated = new Date("2026-04-01");

export default function sitemap() {
  return [
    {
  url: 'https://relaxiospa.in',
  lastModified: lastUpdated,
  changeFrequency: 'weekly',
  priority: 1,
},
    {
      url: 'https://relaxiospa.in/services',
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // 🔥 SERVICES
    {
  url: 'https://relaxiospa.in/services/thai-massage',
  lastModified: lastUpdated,
  changeFrequency: 'monthly',
  priority: 0.8,
},
    {
      url: 'https://relaxiospa.in/services/balinese-massage',
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://relaxiospa.in/services/deep-tissue-massage',
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://relaxiospa.in/services/couple-massage',
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://relaxiospa.in/services/spa-facilities',
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8
    },

    // 🔥 OTHER PAGES
    {
      url: 'https://relaxiospa.in/about',
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://relaxiospa.in/contact',
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}