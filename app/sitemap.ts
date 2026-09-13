import fs from 'fs';
import path from 'path';
import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const BASE_URL = 'https://relaxiospa.in';
const BLOG_DIR = path.join(process.cwd(), 'content/blog');

function getBlogLastModified(slug: string): Date | undefined {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    return fs.statSync(filePath).mtime;
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: getBlogLastModified(post.slug),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },

    {
      url: `${BASE_URL}/services`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // SERVICE PAGES
    {
      url: `${BASE_URL}/services/thai-massage`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/balinese-massage`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/deep-tissue-massage`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/couple-massage`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/spa-facilities`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // CORE PAGES
    {
      url: `${BASE_URL}/about`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // LOCATION PAGES
    {
      url: `${BASE_URL}/spa-in-indira-nagar-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/spa-in-aliganj-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/spa-in-chinhat-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/spa-in-hazratganj-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/spa-in-mahanagar-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/spa-in-gomti-nagar-extension-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/spa-near-faizabad-road-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // LEGAL / USER-DATA PAGES
    {
      url: `${BASE_URL}/privacy-policy`,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/user-data-deletion`,
      changeFrequency: 'yearly',
      priority: 0.2,
    },

    ...blogs,
  ];
}
