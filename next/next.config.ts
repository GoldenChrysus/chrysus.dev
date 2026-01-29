import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    swcPlugins: [
      ["@lingui/swc-plugin", {}],
    ],
  },
  reactCompiler: true,
};

const withNextIntl = createNextIntlPlugin('./i18n.ts');
export default withNextIntl(nextConfig);
