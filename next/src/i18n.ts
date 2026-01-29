import { i18n } from "@lingui/core";

export const locales = ["en", "ja"];
export const defaultLocale = "en";

export async function loadCatalog(locale: string) {
    const { messages } = await import(`@/locales/${locale}`);
    return messages;
}

export function getLocale(requestLocale?: string) {
    if (requestLocale && locales.includes(requestLocale)) {
        return requestLocale;
    }
    return defaultLocale;
}
