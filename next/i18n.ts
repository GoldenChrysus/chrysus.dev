import { detectLocaleFromHeaders } from '@/lib/i18n';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
    // Static for now, we'll change this later
    const locale = await detectLocaleFromHeaders();

    return {
        locale,
    };
});
