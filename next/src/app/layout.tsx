import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { theme } from '@/theme';

const inconsolata = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'Patrick Golden - Full-stack staff engineer - Chrysus.dev',
        template: '%s | Patrick Golden - Chrysus.dev',
    },
    description: 'Introducing Patrick Golden, full-stack staff engineer. Extensive experience in leading teams, enterprise development, finance products, and AI initiatives. Based in Tokyo, Japan.',
    openGraph: {
        images: ['https://chrysus.dev/images/business/intro.png'],
    },
    twitter: {
        images: ['https://chrysus.dev/images/business/intro.png'],
        card: 'summary_large_image',
    },
};

import { I18nProvider } from './I18nProvider';
import { all_messages, initI18n } from '@/lib/i18n';

global.performance = global.performance || {
    now: () => Date.now(),
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { locale } = await initI18n();

    return (
        <html lang={locale} {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript defaultColorScheme='auto' />
            </head>
            <body className={inconsolata.className}>
                <I18nProvider locale={locale} messages={all_messages[locale]}>
                    <MantineProvider theme={theme} defaultColorScheme='auto'>{children}</MantineProvider>
                    <GoogleTagManager gtmId="G-0VNEZTG7PP" />
                </I18nProvider>
            </body>
        </html>
    );
}
