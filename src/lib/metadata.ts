import type { Metadata } from "next";

const SITE_URL = "https://www.ivoweevers.com";
const SITE_NAME = "Ivo Weevers";
const SITE_DESCRIPTION =
  "Personal website of Ivo Weevers — author, entrepreneur, and digital product builder.";

export function createMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const pageDescription = description ?? SITE_DESCRIPTION;
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? `${SITE_URL}/og-default.jpg`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: SITE_NAME,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const siteConfig = {
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  author: {
    name: "Ivo Weevers",
    url: SITE_URL,
  },
} as const;
