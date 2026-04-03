import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://notareum.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://notareum.com/protocol', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://notareum.com/developers', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://notareum.com/ecosystem', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://notareum.com/token', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://notareum.com/whitepaper', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://notareum.com/about', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ];
}
