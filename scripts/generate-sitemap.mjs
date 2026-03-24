import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const siteUrl = (
  process.env.SITE_URL ||
  process.env.VITE_SITE_URL ||
  'https://www.korion.network'
).replace(/\/+$/, '');

const staticRoutes = [
  '/',
  '/ecosystem',
  '/technology',
  '/korionpay',
  '/about',
  '/foundation',
  '/treasury',
  '/policy',
  '/smart-contract',
  '/news',
  '/tokenomics',
  '/roadmap',
  '/support',
  '/team',
  '/download',
  '/foxyya',
  '/mining',
  '/media-kit',
  '/faq',
  '/contact',
  '/explorer',
  '/listing-info',
  '/security',
  '/whitepaper',
  '/developers',
  '/developers/api',
  '/developers/sdk',
  '/developers/authentication',
  '/developers/webhooks',
  '/developers/errors',
  '/developers/sandbox',
  '/developers/examples',
  '/developers/rate-limits',
  '/developers/partners',
  '/developers/changelog',
  '/developers/preregister',
];

function extractNewsEntries() {
  const newsFile = path.join(projectRoot, 'src', 'app', 'data', 'newsPosts.ts');
  const source = fs.readFileSync(newsFile, 'utf8');
  const entryPattern =
    /slug:\s*'([^']+)'[\s\S]*?publishedAt:\s*'([^']+)'(?:[\s\S]*?updatedAt:\s*'([^']+)')?/g;

  const entries = [];
  let match;

  while ((match = entryPattern.exec(source)) !== null) {
    const [, slug, publishedAt, updatedAt] = match;
    if (slug !== 'new-post-slug') {
      entries.push({
        route: `/news/${slug}`,
        lastmod: updatedAt || publishedAt,
      });
    }
  }

  return entries;
}

const urls = [
  ...staticRoutes.map((route) => ({ route, lastmod: null })),
  ...extractNewsEntries(),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ route, lastmod }) => `  <url>
    <loc>${siteUrl}${route === '/' ? '/' : route}</loc>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(projectRoot, 'public', 'sitemap.xml'), xml);
