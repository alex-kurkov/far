export const state = () => ({
  content: {},
})

export const mutations = {
  SET_CONTENT(state, data) {
    state.content = data
  },
}

const ruContent = {
  text: {
    mainPageLink: 'Главная',
    homepageAbout:
      'это организация-сообщество, площадка для инициатив в сфере гуманизации наркополитики',
    abbreviation: 'ФАР',
    aboutPageTitle: 'ЗДЕСЬ БУДЕТ БУДУЩАЯ СТРАНИЦА О НАС',
    aboutPageLink: 'О НАС',
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getContent')
  },

  getContent({ commit }) {
    return commit('SET_CONTENT', ruContent)
  },
}
