import { api } from '@/utils/api'
import dictionary from '@/utils/dictionary'

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
          teamMembers,
          ourTeamPromo,
        ]) => {
          const menu = pages.data
          menu.sort((a, b) => {
            if (a['sections'].length > 0 || b['sections'].length > 0) {
              a['sections'].sort((a, b) => (a['order'] > b['order'] ? 1 : -1))
              b['sections'].sort((a, b) => (a['order'] > b['order'] ? 1 : -1))
            }
            return a['order'] > b['order'] ? 1 : -1
          })

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
            menu,
            teamMembers: teamMembers.data,
            ourTeamPromo: ourTeamPromo.data,
          }
          commit('SET_CONTENT', allData)
        }
      )
  },
}
