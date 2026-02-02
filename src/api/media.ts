const API_BASE = import.meta.env.VITE_MEDIA_API_URL || '';

export type MediaType = 'image' | 'video' | 'audio';

export interface SecureUrlParams {
  type: MediaType;
  id?: string;
  url?: string;
  watermark?: boolean;
}

export async function getSecureMediaUrl(params: SecureUrlParams): Promise<{ url: string }> {
  const search = new URLSearchParams();
  search.set('type', params.type);
  if (params.id) search.set('id', params.id);
  if (params.url) search.set('url', params.url);
  if (params.watermark) search.set('watermark', '1');

  const res = await fetch(`${API_BASE}/api/media/url?${search.toString()}`, {
    method: 'GET',
    credentials: 'include',
    headers: { Accept: 'application/json' },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error || `Failed to get media URL: ${res.status}`);
  }

  const data = (await res.json()) as { url: string };
  return { url: data.url ? (API_BASE ? new URL(data.url, API_BASE).toString() : data.url) : '' };
}
