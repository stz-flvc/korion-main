const fallbackSiteUrl = 'https://www.korion.network';

export function getAbsoluteSiteUrl() {
  const envSiteUrl =
    import.meta.env.VITE_SITE_URL ||
    (typeof window !== 'undefined' ? window.location.origin : fallbackSiteUrl);

  return envSiteUrl.replace(/\/+$/, '');
}
