import { api } from '@/utils/api'

export const state = () => ({
  content: {},
})

export const getters = {
  getNumberOfCards(state) {
    return state.content.achievements.length
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

  getContent({ commit }) {
    return api
      .getData()
      .then(([intro, mission, achievements, about, promo, help, support]) => {
        const allData = {
          intro: intro.data,
          mission: mission.data,
          achievements: achievements.data,
          about: about.data,
          promo: promo.data,
          help: help.data,
          support: support.data,
        }
        commit('SET_CONTENT', allData)
      })
  },
}
