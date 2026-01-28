import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import './globals.css';
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { theme } from '../theme';

const inconsolata = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chrysus.dev',
  description: 'Personal website of Patrick D. Golden',
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
