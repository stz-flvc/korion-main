import { useEffect, useState } from 'react';

const assetUrlCache = new Map<string, Promise<string>>();

type AssetModule = {
  default: string;
};

export function loadAssetUrl(
  key: string,
  loader: () => Promise<AssetModule>,
) {
  const cached = assetUrlCache.get(key);
  if (cached) {
    return cached;
  }

  const promise = loader().then((module) => module.default);
  assetUrlCache.set(key, promise);
  return promise;
}

export function useAssetUrl(
  key: string,
  loader: () => Promise<AssetModule>,
  enabled = true,
) {
  const [assetUrl, setAssetUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let cancelled = false;

    loadAssetUrl(key, loader).then((url) => {
      if (!cancelled) {
        setAssetUrl(url);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [enabled, key, loader]);

  return assetUrl;
}
