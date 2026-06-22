import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ThemeProvider} from 'next-themes';
import UmamiAnalytics from '../components/UmamiAnalytics';
import '../../app/globals.css';

const siteUrl = 'https://marcosfinkiel.online';

const seo = {
  en: {
    title: 'Marcos Finkiel | Full-Stack Developer',
    description:
      'Full-stack developer building real logistics software, internal tools and operational dashboards with Angular, Next.js, React, Node.js, NestJS and PostgreSQL.',
    locale: 'en_US',
    jobTitle: 'Full-Stack Developer',
    amxpress:
      'Logistics operations platform with customer portal, operations dashboard, backend APIs and mobile workflows.'
  },
  es: {
    title: 'Marcos Finkiel | Desarrollador Full-Stack',
    description:
      'Desarrollador full-stack enfocado en software logístico, herramientas internas y dashboards operativos con Angular, Next.js, React, Node.js, NestJS y PostgreSQL.',
    locale: 'es_ES',
    jobTitle: 'Desarrollador Full-Stack',
    amxpress:
      'Plataforma operativa logística con área cliente, panel operativo, APIs backend y flujos móviles.'
  }
} as const;

function localeKey(locale: string) {
  return locale === 'es' ? 'es' : 'en';
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const currentLocale = localeKey(locale);
  const data = seo[currentLocale];
  const path = `/${currentLocale}`;
  const url = `${siteUrl}${path}`;

  return {
    metadataBase: new URL(siteUrl),
    title: data.title,
    description: data.description,
    alternates: {
      canonical: path,
      languages: {
        en: '/en',
        es: '/es',
        'x-default': '/'
      }
    },
    robots: {
      index: true,
      follow: true
    },
    icons: {
      icon: [
        {url: '/favicon.ico'},
        {url: '/favicon.svg', type: 'image/svg+xml'},
        {url: '/icon.png', sizes: '512x512', type: 'image/png'}
      ],
      apple: [{url: '/apple-icon.png', sizes: '180x180', type: 'image/png'}]
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url,
      siteName: 'Marcos Finkiel',
      locale: data.locale,
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Marcos Finkiel full-stack developer portfolio'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: ['/og-image.png']
    }
  };
}

function structuredData(locale: string) {
  const currentLocale = localeKey(locale);
  const data = seo[currentLocale];
  const url = `${siteUrl}/${currentLocale}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Marcos Finkiel',
        url: siteUrl,
        image: `${siteUrl}/me-v2.webp`,
        jobTitle: data.jobTitle,
        knowsAbout: [
          'Angular',
          'Next.js',
          'React',
          'Node.js',
          'NestJS',
          'TypeScript',
          'PostgreSQL',
          'PHP',
          'Logistics software',
          'Internal tools',
          'Operational dashboards',
          'Web applications'
        ],
        sameAs: [
          'https://github.com/MarcosFinki',
          'https://www.linkedin.com/in/marcos-finkielsztajn'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'Marcos Finkiel Portfolio',
        url: siteUrl,
        inLanguage: currentLocale,
        description: data.description,
        publisher: {'@id': `${siteUrl}/#person`}
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}#profile`,
        name: data.title,
        url,
        inLanguage: currentLocale,
        description: data.description,
        isPartOf: {'@id': `${siteUrl}/#website`},
        about: {'@id': `${siteUrl}/#person`}
      },
      {
        '@type': 'CreativeWork',
        '@id': `${url}#amxpress`,
        name: 'AMXpress case study',
        creator: {'@id': `${siteUrl}/#person`},
        description: data.amxpress,
        url,
        keywords:
          'logistics, internal tools, dashboards, shipment tracking, customer portal, Node.js, NestJS, PostgreSQL',
        workExample: {
          '@type': 'WebApplication',
          name: 'AMXpress demo',
          url: 'https://demo.amxpress.com.ar',
          description:
            currentLocale === 'es'
              ? 'Entorno demo con datos operativos de muestra. No expone datos reales de clientes ni envíos.'
              : 'Demo environment using sample operational data. No real client or shipment data is exposed.'
        }
      }
    ]
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();
  const jsonLd = JSON.stringify(structuredData(locale)).replace(/</g, '\\u003c');

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: jsonLd}}
        />
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
        <UmamiAnalytics />
      </body>
    </html>
  );
}
