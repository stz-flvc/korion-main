import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { getAbsoluteSiteUrl } from '../seo/siteConfig';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

export function SEO({
  title,
  description,
  canonicalPath,
  robots = 'index,follow',
  ogTitle,
  ogDescription,
  ogImage = '/favicon.ico',
  ogType = 'website',
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const siteUrl = getAbsoluteSiteUrl();
    const canonicalUrl = new URL(canonicalPath || location.pathname, siteUrl).toString();

    const upsertMetaTag = (selector: string, attributes: Record<string, string>) => {
      let tag = document.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        document.head.appendChild(tag);
      }

      Object.entries(attributes).forEach(([key, value]) => {
        tag!.setAttribute(key, value);
      });
    };

    // Set page title
    document.title = `${title} | KORION`;
    document.documentElement.lang = location.pathname.startsWith('/kr') ? 'ko' : 'en';

    // Set meta description
    upsertMetaTag('meta[name="description"]', {
      name: 'description',
      content: description,
    });

    upsertMetaTag('meta[name="robots"]', {
      name: 'robots',
      content: robots,
    });

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Set OG tags
    const ogTags = [
      { property: 'og:title', content: ogTitle || title },
      { property: 'og:description', content: ogDescription || description },
      { property: 'og:image', content: new URL(ogImage, siteUrl).toString() },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: ogType },
      { property: 'og:site_name', content: 'KORION' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: ogTitle || title },
      { name: 'twitter:description', content: ogDescription || description },
      { name: 'twitter:image', content: new URL(ogImage, siteUrl).toString() },
    ];

    ogTags.forEach(({ property, name, content }) => {
      upsertMetaTag(
        property ? `meta[property="${property}"]` : `meta[name="${name}"]`,
        property
          ? { property, content }
          : { name: name || '', content }
      );
    });

    if (publishedTime) {
      upsertMetaTag('meta[property="article:published_time"]', {
        property: 'article:published_time',
        content: publishedTime,
      });
    }

    if (modifiedTime) {
      upsertMetaTag('meta[property="article:modified_time"]', {
        property: 'article:modified_time',
        content: modifiedTime,
      });
    }
  }, [
    canonicalPath,
    description,
    location,
    modifiedTime,
    ogDescription,
    ogImage,
    ogTitle,
    ogType,
    publishedTime,
    robots,
    title,
  ]);

  return null;
}
