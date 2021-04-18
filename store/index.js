import { api } from '@/utils/api'
import dictionary from '@/utils/dictionary'

export const state = () => ({
  content: {},
  cookies: {}
})

export const getters = {
  getNumberOfCards: (state) => {
    return state.content.achievements.length
  },

  getLocaleMessage: (state) => (locale) => {
    return dictionary(state.content, locale)
  },
  getCookiesAcceptanceStatus: (state) => {
    return state.cookies.accepted;
  }
}

export const mutations = {
  SET_CONTENT(state, data) {
    state.content = data
  },
  SET_COOKIES_ACCEPTANCE(state, bool) {
    state.cookies.accepted = bool;
  } 
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
        ]) => {
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
          }
          commit('SET_CONTENT', allData)
        }
      )
  },
}
