export const siteOrigin = 'https://notareum.com';

/**
 * Final public path for an indexable page.
 * `trailingSlash: true` (and the host rewrite) 301s slash-less paths, so
 * canonicals, the sitemap, and internal links use the trailing-slash form.
 * Hash links keep the slash before the fragment: `/protocol/#how-it-works`.
 */
export function pagePath(path: string): string {
  const hashIndex = path.indexOf('#');
  const hash = hashIndex === -1 ? '' : path.slice(hashIndex);
  const pathname = hashIndex === -1 ? path : path.slice(0, hashIndex);

  if (pathname === '' || pathname === '/') {
    return `/${hash}`;
  }

  const trimmed = pathname.replace(/^\/+|\/+$/g, '');
  return `/${trimmed}/${hash}`;
}

/** Absolute, non-redirecting URL for an indexable page. */
export function pageUrl(path: string): string {
  return `${siteOrigin}${pagePath(path)}`;
}
