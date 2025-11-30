import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/test-api/'],
      },
    ],
    sitemap: [
      'https://kidsonly.at/sitemap.xml',
      'https://kidsonly.at/de/sitemap.xml',
      'https://kidsonly.at/en/sitemap.xml',
    ],
  };
}

