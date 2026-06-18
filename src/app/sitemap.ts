import type {MetadataRoute} from 'next';

const siteUrl = 'https://marcosfinkiel.online';
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${siteUrl}/en`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: `${siteUrl}/en`,
          es: `${siteUrl}/es`,
          'x-default': siteUrl
        }
      }
    },
    {
      url: `${siteUrl}/es`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: `${siteUrl}/en`,
          es: `${siteUrl}/es`,
          'x-default': siteUrl
        }
      }
    },
    {
      url: `${siteUrl}/cv/marcos-finkiel-cv-en.pdf`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${siteUrl}/cv/marcos-finkiel-cv-es.pdf`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5
    }
  ];
}
