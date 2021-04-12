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
            menu: [
              {
                to: '#',
                title: 'О НАС',
                open: false,
                subMenuList: [
                  {
                    to: '/?parent11-child1',
                    title: 'кто такой Андрей Рыльков',
                  },
                  {
                    to: '/?parent11-child1',
                    title: 'миссия и стратегии',
                  },
                  {
                    to: '/?parent11-child1',
                    title: 'команда ФАР',
                  },
                  {
                    to: '/?parent11-child1',
                    title: 'проекты и отчёты',
                  },
                  {
                    to: '/?parent11-child1',
                    title: 'годовые отчёты',
                  },
                  {
                    to: '/?parent11-child1',
                    title: 'учредительные документы',
                  },
                ],
              },
              {
                to: '/?single2',
                title: 'ПОДДЕРЖАТЬ ФАР',
                open: false,
                subMenuList: [
                  {
                    to: '/?parent3-child3',
                    title: 'сделать пожертвование',
                  },
                  {
                    to: '/?parent3-child4',
                    title: 'волонтёрство в ФАР',
                  },
                  {
                    to: '/?parent3-child4',
                    title: 'стажировка в ФАР',
                  },
                  {
                    to: '/?parent3-child4',
                    title: 'партнёрство с ФАР',
                  },
                ],
              },
              {
                to: '/?single',
                title: 'ПОЛУЧИТЬ ПОМОЩЬ',
              },
              { to: '/?single', title: 'КОНТАКТЫ' },
            ],
          }
          commit('SET_CONTENT', allData)
        }
      )
  },
}
