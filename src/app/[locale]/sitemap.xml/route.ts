import type { MetadataRoute } from "next";

import { locales, type Locale, routing } from "@/i18n/routing";
import { SITE_BASE_URL } from "@/lib/seo";

type RouteConfig = {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
};

const routes: RouteConfig[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/parndorf", changeFrequency: "weekly", priority: 0.9 },
    { path: "/salzburg", changeFrequency: "weekly", priority: 0.9 },
    { path: "/impressum", changeFrequency: "monthly", priority: 0.3 },
    { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
];

function buildUrl(locale: Locale, path: string) {
    const normalized = path === "/" ? "" : path;
    return `${SITE_BASE_URL}/${locale}${normalized}`;
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ locale: string }> }
) {
    const { locale } = await params;

    // Validate locale
    if (!locales.includes(locale as Locale)) {
        return new Response("Not Found", { status: 404 });
    }

    const lastModified = new Date();

    const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => {
        // Build alternates for all locales
        const languages = locales.reduce<Record<string, string>>((acc, loc) => {
            acc[loc === "de" ? "de-AT" : loc] = buildUrl(loc, route.path);
            return acc;
        }, {});

        // Add x-default pointing to base locale (de)
        languages["x-default"] = buildUrl("de", route.path);

        return {
            url: buildUrl(locale as Locale, route.path),
            lastModified,
            changeFrequency: route.changeFrequency,
            priority: route.priority,
            alternates: {
                languages,
            },
        };
    });

    // Generate XML manually for better control
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries.map((entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified instanceof Date ? entry.lastModified.toISOString() : new Date().toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>${entry.alternates?.languages
            ? '\n' + Object.entries(entry.alternates.languages)
                .map(([lang, url]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}" />`)
                .join('\n')
            : ''
        }
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
