/**
 * i18n configuration — prepared for future locale support.
 *
 * When translations are needed:
 * 1. Install `next-intl`: npm install next-intl
 * 2. Move all routes under src/app/[locale]/
 * 3. Update middleware.ts to handle locale detection and redirects
 * 4. Create message files in /messages/{locale}.json
 * 5. Wrap layout with NextIntlClientProvider
 *
 * English (en) is the default locale and served at the root URL (/).
 * Additional locales will be served at /{locale}/ (e.g., /it/ for Italian).
 */

export const defaultLocale = "en" as const;

export const locales = ["en"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
};
