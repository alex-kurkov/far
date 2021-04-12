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
  strategy: 'prefix_except_default',
  routes: {
    about: {
      en: '/about',
    },
    contacts: {
      en: '/contacts',
    },
  },
  vueI18nLoader: true,
  vueI18n: {
    fallbackLocale: 'ru',
  },
}
