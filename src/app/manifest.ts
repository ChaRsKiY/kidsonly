import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'kids only - Kinderbekleidung zu Outlet-Preisen',
    short_name: 'kids only',
    description: 'kids only bietet qualitativ hochwertige Kinderbekleidung zu Outlet-Preisen. Besuchen Sie unsere Filialen in Parndorf und Salzburg für die besten Marken zu erschwinglichen Preisen.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['shopping', 'fashion', 'children'],
    lang: 'de',
    dir: 'ltr',
  };
}

