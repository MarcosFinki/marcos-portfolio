export type ProjectImage = {
  src: string;
  label: string;
  alt: string;
};

type ProjectDetailSection = {
  title: string;
  items: string[];
};

export type Project = {
  name: string;
  eyebrow: string;
  tech: string;
  proof: string;
  link: string;
  cta: string;
  chips: string[];
  images: ProjectImage[];
  detail?: {
    eyebrow: string;
    title: string;
    overview: string;
    sections: ProjectDetailSection[];
  };
};

type TranslationResolver = {
  (key: string): string;
  raw: (key: string) => unknown;
};

type TranslatedImage = {
  label: string;
  alt: string;
};

type TranslatedSection = {
  title: string;
  items: string[];
};

function stringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
}

function imageArray(value: unknown): TranslatedImage[] {
  if (!Array.isArray(value)) return [];

  return value.filter(
    (item): item is TranslatedImage =>
      typeof item === "object" &&
      item !== null &&
      typeof (item as TranslatedImage).label === "string" &&
      typeof (item as TranslatedImage).alt === "string"
  );
}

function sectionArray(value: unknown): TranslatedSection[] {
  if (!Array.isArray(value)) return [];

  return value.filter(
    (item): item is TranslatedSection =>
      typeof item === "object" &&
      item !== null &&
      typeof (item as TranslatedSection).title === "string" &&
      Array.isArray((item as TranslatedSection).items)
  );
}

export function getProjects(t: TranslationResolver): Project[] {
  const amxpressImages = imageArray(t.raw("amxpress.images"));
  const tracklyImages = imageArray(t.raw("trackly.images"));

  return [
    {
      name: t("amxpress.name"),
      eyebrow: t("amxpress.eyebrow"),
      tech: t("amxpress.tech"),
      proof: t("amxpress.proof"),
      link: "https://amxpress.com.ar",
      cta: t("amxpress.cta"),
      chips: stringArray(t.raw("amxpress.chips")),
      images: [
        {
          src: "/projects/amxpress.png",
          label: amxpressImages[0]?.label ?? "",
          alt: amxpressImages[0]?.alt ?? "",
        },
        {
          src: "/projects/amxpress-admin.png",
          label: amxpressImages[1]?.label ?? "",
          alt: amxpressImages[1]?.alt ?? "",
        },
        {
          src: "/projects/amxpress-mobile.png",
          label: amxpressImages[2]?.label ?? "",
          alt: amxpressImages[2]?.alt ?? "",
        },
      ],
      detail: {
        eyebrow: t("amxpress.detail.eyebrow"),
        title: t("amxpress.detail.title"),
        overview: t("amxpress.detail.overview"),
        sections: sectionArray(t.raw("amxpress.detail.sections")),
      },
    },
    {
      name: t("trackly.name"),
      eyebrow: t("trackly.eyebrow"),
      tech: t("trackly.tech"),
      proof: t("trackly.proof"),
      link: "https://github.com/MarcosFinki/trackly/releases/tag/v1.0.0",
      cta: t("trackly.cta"),
      chips: stringArray(t.raw("trackly.chips")),
      images: [
        {
          src: "/projects/trackly.png",
          label: tracklyImages[0]?.label ?? "",
          alt: tracklyImages[0]?.alt ?? "",
        },
      ],
    },
  ];
}
