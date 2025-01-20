import { getRequestConfig } from 'next-intl/server';

export const localeConfig = {
  locales: ['en', 'ar'],
  defaultLocale: 'ar',
};

export default getRequestConfig(async ({ requestLocale }) => {
  const { locales, defaultLocale } = localeConfig;

  let locale = await requestLocale;
  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }
  return {
    locale,
    messages: (await import(`./${locale}.json`)).default,
  };
});
