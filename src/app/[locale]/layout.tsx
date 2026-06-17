import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ThemeProvider} from 'next-themes';
import '../../app/globals.css';

export const metadata: Metadata = {
  icons: {
    icon: [
      {url: '/favicon.ico'},
      {url: '/favicon.svg', type: 'image/svg+xml'},
      {url: '/icon.png', sizes: '512x512', type: 'image/png'}
    ],
    apple: [{url: '/apple-icon.png', sizes: '180x180', type: 'image/png'}]
  }
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
