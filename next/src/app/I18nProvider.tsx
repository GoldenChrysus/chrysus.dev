"use client";

import { I18nProvider as ReactI18nProvider } from "@lingui/react";
import { setupI18n } from "@lingui/core";
import { useState } from "react";

export function I18nProvider({ children, locale, messages }: any) {
    const [i18n] = useState(() => {
        const i18n = setupI18n({
            locale,
            messages: { [locale]: messages },
        });
        return i18n;
    });

    return (
        <ReactI18nProvider i18n={i18n}>
            {children}
        </ReactI18nProvider>
    );
}
