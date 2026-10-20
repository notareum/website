import { MetadataRoute } from 'next';
import { pageUrl } from '@/lib/seo';

/**
 * Last significant content update for each URL, from git commit time.
 * Production builds use a shallow checkout, so these are recorded here
 * instead of `new Date()` (which stamped every URL with the build clock).
 * Update a page's date when its content changes. Omit lastModified when
 * a real date is not known.
 */
const pages: Array<{
  path: string;
  lastModified?: string;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
}> = [
  { path: '/', lastModified: '2026-04-25T11:16:48.000Z', changeFrequency: 'weekly', priority: 1 },
  { path: '/protocol', lastModified: '2026-04-08T22:00:26.000Z', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/developers', lastModified: '2026-04-25T11:16:48.000Z', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ecosystem', lastModified: '2026-04-08T22:00:26.000Z', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/token', lastModified: '2026-04-25T11:16:33.000Z', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/whitepaper', lastModified: '2026-04-03T13:02:44.000Z', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/about', lastModified: '2026-04-25T11:56:49.000Z', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/privacy-policy', lastModified: '2026-04-25T11:56:44.000Z', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', lastModified: '2026-04-25T11:56:44.000Z', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified, changeFrequency, priority }) => {
    const entry: MetadataRoute.Sitemap[number] = {
      url: pageUrl(path),
      changeFrequency,
      priority,
    };

    if (lastModified) {
      entry.lastModified = lastModified;
    }

    return entry;
  });
}
