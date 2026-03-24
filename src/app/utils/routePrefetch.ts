type RouteImporter = () => Promise<unknown>;

const routeImporters: Record<string, RouteImporter> = {
  '/about': () => import('../pages/AboutPage'),
  '/foundation': () => import('../pages/FoundationPage'),
  '/treasury': () => import('../pages/TreasuryPage'),
  '/policy': () => import('../pages/PolicyPage'),
  '/ecosystem': () => import('../pages/EcosystemPage'),
  '/technology': () => import('../pages/KorionPayPage'),
  '/korionpay': () => import('../pages/KorionPayPage'),
  '/smart-contract': () => import('../pages/SmartContractPage'),
  '/smartcontract': () => import('../pages/SmartContractPage'),
  '/news': () => import('../pages/NewsPage'),
  '/tokenomics': () => import('../pages/TokenomicsPage'),
  '/roadmap': () => import('../pages/RoadmapPage'),
  '/support': () => import('../pages/SupportPage'),
  '/team': () => import('../pages/TeamSection'),
  '/download': () => import('../pages/DownloadPage'),
  '/foxyya': () => import('../pages/FoxyyaPage'),
  '/mining': () => import('../pages/MiningPage'),
  '/media-kit': () => import('../pages/MediaKitPage'),
  '/faq': () => import('../pages/FAQPage'),
  '/contact': () => import('../pages/ContactPage'),
  '/explorer': () => import('../pages/ExplorerPage'),
  '/listing-info': () => import('../pages/ListingInfoPage'),
  '/security': () => import('../pages/SecurityPage'),
  '/partner': () => import('../pages/PartnerPage'),
  '/whitepaper': () => import('../pages/WhitepaperPage'),
  '/developers': () => import('../pages/DevelopersPage'),
};

const prefetched = new Set<string>();

function normalizePath(path: string) {
  const [pathname] = path.split(/[?#]/, 1);
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return normalized.toLowerCase() || '/';
}

export function prefetchRoute(path: string) {
  const normalized = normalizePath(path);
  const importer = routeImporters[normalized];

  if (!importer || prefetched.has(normalized)) {
    return;
  }

  prefetched.add(normalized);
  void importer().catch(() => {
    prefetched.delete(normalized);
  });
}

export function prefetchRoutesOnIdle(currentPath: string) {
  const current = normalizePath(currentPath);
  const queue = Object.keys(routeImporters).filter((path) => path !== current);

  const schedule =
    typeof window !== 'undefined' && 'requestIdleCallback' in window
      ? (cb: () => void) => window.requestIdleCallback(cb, { timeout: 1200 })
      : (cb: () => void) => window.setTimeout(cb, 250);

  let index = 0;

  const run = () => {
    if (index >= queue.length) {
      return;
    }

    prefetchRoute(queue[index]);
    index += 1;
    schedule(run);
  };

  schedule(run);
}
