export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'EN',
    },
    {
      code: 'ru',
      iso: 'ru-RU',
      name: 'RU',
    },
  ],
  defaultLocale: 'ru',
  routes: {
    about: {
      en: '/about',
    },
  },
  vueI18nLoader: true,
  vueI18n: {
    fallbackLocale: 'ru',
  },
}
