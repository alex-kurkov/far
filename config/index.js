import en from '../lang/en-US.js'
import ru from '../lang/ru-RU.js'

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
  vueI18n: {
    fallbackLocale: 'ru',
    messages: { en, ru },
  },
}
