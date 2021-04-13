import { api } from '@/utils/api'
import dictionary from '@/utils/dictionary'
import menuBuilderRu from '@/utils/menuBuilderRu'
import menuBuilderEn from '@/utils/menuBuilderEn'
import menuBuilder from '@/utils/menuBuilder'

export const state = () => ({
  content: {},
})

export const getters = {
  getNumberOfCards: (state) => {
    return state.content.achievements.length
  },

  getLocaleMessage: (state) => (locale) => {
    return dictionary(state.content, locale)
  },
}

export const mutations = {
  SET_CONTENT(state, data) {
    state.content = data
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getContent')
  },

  getContent: ({ commit }) => {
    return api
      .getData()
      .then(
        ([
          intro,
          mission,
          achievements,
          about,
          promo,
          help,
          support,
          achievement,
          footer,
          meta,
          pages,
        ]) => {
          console.log(pages.data[1].sections)

          const menu = [
            {
              path: 'index',
              menuTitle: {
                ru: 'О НАС',
                en: 'About',
              },
              open: false,
              sections: [
                {
                  path: 'andrey',
                  menuTitle: {
                    ru: 'кто такой Андрей Рыльков',
                    en: 'who is Andrey',
                  },
                },
                {
                  path: '/mission',
                  menuTitle: {
                    ru: 'миссия и стратегии',
                    en: 'mission and strategy',
                  },
                },
                {
                  path: '/team',
                  menuTitle: { ru: 'команда ФАР', en: 'our team FAR' },
                },
              ],
            },
            {
              path: '/support',
              menuTitle: { ru: 'ПОДДЕРЖАТЬ ФАР', en: 'Support FAR' },
              open: false,
              sections: [
                {
                  path: 'donate',
                  menuTitle: { ru: 'сделать пожертвование', en: 'donate' },
                },
                {
                  path: 'volunteer',
                  menuTitle: { ru: 'волонтёрство в ФАР', en: 'volunteer' },
                },
              ],
            },
            {
              path: 'help',
              menuTitle: { ru: 'ПОЛУЧИТЬ ПОМОЩЬ', en: 'GET HELP' },
              sections: [],
            },
            {
              path: 'contacts',
              menuTitle: { ru: 'КОНТАКТЫ', en: 'Contacts' },
              sections: [],
            },
          ]

          const allData = {
            intro: intro.data,
            mission: mission.data,
            achievements: achievements.data,
            about: about.data,
            promo: promo.data,
            help: help.data,
            support: support.data,
            achievement: achievement.data,
            footer: footer.data,
            metaTags: meta.data,
            menu: pages.data,
          }
          commit('SET_CONTENT', allData)
        }
      )
  },
}
