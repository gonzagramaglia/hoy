export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function getAssetPath(path: string): string {
  if (!path) return path;
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('//')
  ) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (basePath) {
    return `${basePath}${cleanPath}`;
  }

  // Runtime detection fallback for GitHub Pages (e.g. /hoy/ or /today/)
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    const match = pathname.match(/^\/([^\/]+)/);
    const topLevelRoutes = [
      'en',
      'emojis',
      'emotes',
      'minigame',
      'export',
      'exportar',
      'import',
      'importar',
      '_next',
    ];
    if (
      match &&
      !topLevelRoutes.includes(match[1]) &&
      window.location.hostname.includes('github.io')
    ) {
      return `/${match[1]}${cleanPath}`;
    }
  }

  return cleanPath;
}
