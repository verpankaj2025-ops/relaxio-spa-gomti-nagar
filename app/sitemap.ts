import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  return [
    {
      url: 'https://relaxiospa.in',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },

    {
      url: 'https://relaxiospa.in/services',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // SERVICES
    {
      url: 'https://relaxiospa.in/services/thai-massage',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    {
      url: 'https://relaxiospa.in/services/balinese-massage',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    {
      url: 'https://relaxiospa.in/services/deep-tissue-massage',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    {
      url: 'https://relaxiospa.in/services/couple-massage',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    {
      url: 'https://relaxiospa.in/services/spa-facilities',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // OTHER PAGES
    {
      url: 'https://relaxiospa.in/about',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    {
      url: 'https://relaxiospa.in/contact',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
  url: 'https://relaxiospa.in/blog',
  lastModified: currentDate,
  changeFrequency: 'weekly',
  priority: 0.8,
},

{
  url: 'https://relaxiospa.in/blog/thai-massage-benefits',
  lastModified: currentDate,
  changeFrequency: 'monthly',
  priority: 0.7,
},

{
  url: 'https://relaxiospa.in/blog/deep-tissue-massage-benefits',
  lastModified: currentDate,
  changeFrequency: 'monthly',
  priority: 0.7,
},

{
  url: 'https://relaxiospa.in/blog/best-spa-in-gomti-nagar',
  lastModified: currentDate,
  changeFrequency: 'monthly',
  priority: 0.7,
},
 ]
}