import { useState, useEffect, useCallback } from 'react';
import { getSecureMediaUrl, type MediaType } from '../api/media';

/**
 * Resolve a media id or URL to a short-lived secure stream URL.
 * - Blob URLs are returned as-is.
 * - Local paths (e.g. /dir/file.jpg) are requested as id (without leading slash).
 * - External URLs are passed as url= and proxied by the API.
 */
export function useSecureMediaUrl(
  type: MediaType,
  idOrUrl: string,
  options?: { watermark?: boolean }
): { url: string | null; error: Error | null; refresh: () => void } {
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchUrl = useCallback(() => {
    if (!idOrUrl) {
      setUrl(null);
      setError(null);
      return;
    }

    if (idOrUrl.startsWith('blob:')) {
      setUrl(idOrUrl);
      setError(null);
      return;
    }

    setError(null);
    const id = idOrUrl.startsWith('/') ? idOrUrl.slice(1) : undefined;
    const isExternal = idOrUrl.startsWith('http://') || idOrUrl.startsWith('https://');

    getSecureMediaUrl({
      type,
      ...(id && !isExternal ? { id } : {}),
      ...(isExternal ? { url: idOrUrl } : {}),
      watermark: options?.watermark,
    })
      .then(({ url: u }) => setUrl(u || null))
      .catch((e) => {
        setError(e instanceof Error ? e : new Error(String(e)));
        if (import.meta.env.DEV) {
          setUrl(idOrUrl);
        }
      });
  }, [type, idOrUrl, options?.watermark]);

  useEffect(() => {
    fetchUrl();
  }, [fetchUrl]);

  return { url, error, refresh: fetchUrl };
}
