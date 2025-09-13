import '@mantine/core/styles.css';

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Important: add mantineHtmlProps to <html> to prevent color scheme hydration issues
    // https://help.mantine.dev/q/color-scheme-hydration-warning
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
