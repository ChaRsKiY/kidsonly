import { NextRequest, NextResponse } from 'next/server';
import { getTranslations } from 'next-intl/server';
import { locales, type Locale } from '@/i18n/routing';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ locale: string }> }
) {
    const { locale } = await params;

    // Validate locale
    if (!locales.includes(locale as Locale)) {
        return new NextResponse('Not Found', { status: 404 });
    }

    const t = await getTranslations({ locale, namespace: 'manifest' });

    const manifest = {
        name: t('name'),
        short_name: t('shortName'),
        description: t('description'),
        start_url: `/${locale}`,
        scope: `/${locale}`,
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
        lang: locale,
        dir: 'ltr',
    };

    return NextResponse.json(manifest, {
        headers: {
            'Content-Type': 'application/manifest+json',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
