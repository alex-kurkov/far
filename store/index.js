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
          andreyRylkov,
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

          // console.log(newPages)

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
            menu: sortedMenu,
            pages: newPages,
            teamMembers: teamMembers.data,
            ourTeamPromo: ourTeamPromo.data,
            andreyRylkov: andreyRylkov.data,
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
