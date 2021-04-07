export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'EN',
      file: 'en-US.js',
    },
    {
      code: 'ru',
      iso: 'ru-RU',
      name: 'RU',
      file: 'ru-RU.js',
    },
  ],
  defaultLocale: 'ru',
  routes: {
    about: {
      en: '/about',
    },
  },
  lazy: true,
  vueI18nLoader: true,
  langDir: './lang/',
  vueI18n: {
    fallbackLocale: 'ru',
  },
}
