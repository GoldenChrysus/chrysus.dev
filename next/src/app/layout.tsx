import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import './globals.css';
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { theme } from '../theme';

const inconsolata = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Patrick Golden - Full-stack staff engineer - Chrysus.dev',
    template: '%s | Patrick Golden - Chrysus.dev',
  },
  description: 'Introducing Patrick Golden, full-stack staff engineer. Extensive experience in leading teams, enterprise development, finance products, and AI initiatives. Based in Tokyo, Japan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme='auto' />
      </head>
      <body className={inconsolata.className}>
        <MantineProvider theme={theme} defaultColorScheme='auto'>{children}</MantineProvider>
      </body>
    </html>
  );
}
