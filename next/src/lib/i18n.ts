import { match } from '@formatjs/intl-localematcher';

// eslint-disable-next-line
import linguiConfig from '../../lingui.config';

import { I18n, Messages, setupI18n } from '@lingui/core'
import Negotiator from 'negotiator';
import { headers, cookies } from 'next/headers';
import { cache } from 'react';
import { setI18n } from '@lingui/react/server';

export type SupportedLocale = 'en-US' | 'ja-JP';
const { locales, sourceLocale: source_locale } = linguiConfig;
export const default_locale = source_locale as SupportedLocale;
type AllI18nInstances = { [K in SupportedLocale]: I18n };

async function loadCatalog(locale: SupportedLocale): Promise<{
    [K in SupportedLocale]: Messages
}> {
    const { messages } = await import(`../locales/${locale}/messages.ts`)
    return {
        [locale]: messages
    } as { [K in SupportedLocale]: Messages };
}

// Export loadCatalog for use in hooks
export { loadCatalog };

const catalogs = await Promise.all(
    (locales as SupportedLocale[]).map(loadCatalog)
);

export const all_messages = catalogs.reduce((acc, oneCatalog) => {
    return { ...acc, ...oneCatalog }
}, {} as { [K in SupportedLocale]: Messages });

export const all_instances: AllI18nInstances = (locales as SupportedLocale[]).reduce(
    (acc, locale) => {
        const messages = all_messages[locale] ?? {}
        const i18n = setupI18n({
            locale,
            messages: { [locale]: messages }
        })
        return { ...acc, [locale]: i18n }
    },
    {} as AllI18nInstances
);

export const getI18nInstance = (locale: SupportedLocale): I18n => {
    if (!all_instances[locale]) {
        console.warn(`No i18n instance found for locale "${locale}"`)
    }
    return all_instances[locale] ?? all_instances[default_locale];
};

/**
 * Detect locale from browser language or return default
 */
export function detectLocale(languages?: string): SupportedLocale {
    if (!languages) {
        return default_locale;
    }

    // Normalize the language string
    const negotiated_languages = new Negotiator({
        headers: { 'accept-language': languages },
    }).languages();
    const locale = match(negotiated_languages, locales, default_locale) as SupportedLocale;

    return locale;
}

/**
 * Validate if a locale is supported
 */
export function isSupportedLocale(locale: string): locale is SupportedLocale {
    return locales.includes(locale);
}

/**
 * Detect locale from Next.js headers
 */
export async function detectLocaleFromHeaders(): Promise<SupportedLocale> {
    const headers_list = await headers();
    const accept = headers_list.get('accept-language');

    return detectLocale(accept || undefined);
}

export const initI18n = cache(async () => {
    const locale = await detectLocaleFromHeaders();
    const cookieStore = await cookies();
    const resolvedLocale = resolveLocale(cookieStore.get("NEXT_LOCALE")?.value || locale);
    const i18n = getI18nInstance(resolvedLocale);

    i18n.activate(resolvedLocale);
    setI18n(i18n);
    return { i18n, locale: resolvedLocale };
});


export const resolveLocale = (locale: string): SupportedLocale => {
    return (isSupportedLocale(locale)) ? locale : default_locale;
}
