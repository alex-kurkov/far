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

  getReports: (state) => {
    return state.content.reports
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
    return api.getData().then(
      ([
        achievements,
        help,
        support,
        // achievement,
        footer,
        meta,
        pages,
        teamMembers,
        menu,
        customPages,
        header,
        reports,
        requisites,
      ]) => {
        const sortedMenu = menu.data
        sortedMenu.sort((a, b) => {
          if (a['sub_menus'].length > 0 || b['sub_menus'].length > 0) {
            a['sub_menus'].sort((a, b) => (a['order'] > b['order'] ? 1 : -1))
            b['sub_menus'].sort((a, b) => (a['order'] > b['order'] ? 1 : -1))
          }
          return a['order'] > b['order'] ? 1 : -1
        })

        const newPages = {}
        pages.data.forEach((page) => {
          newPages[page.name] = page
        })

        const allCustomPages = {}
        customPages.data.forEach((page) => {
          allCustomPages[page.path] = page
        })

        const allData = {
          achievements: achievements.data,
          help: help.data,
          support: support.data,
          footer: footer.data,
          metaTags: meta.data,
          menu: sortedMenu,
          pages: newPages,
          teamMembers: teamMembers.data,
          customPages: allCustomPages,
          header: header.data,
          reports: reports.data,
          requisites: requisites.data,
        }
        commit('SET_CONTENT', allData)
      }
    )
  },
}
