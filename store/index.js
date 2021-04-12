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
            menuru: [
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
              { to: '/contacts', title: 'КОНТАКТЫ' },
            ],
            menuen: [
              {
                to: '#',
                title: 'About',
                open: false,
                subMenuList: [
                  {
                    to: '/?parent11-child1',
                    title: 'who is Андрей Рыльков',
                  },
                  {
                    to: '/?parent11-child1',
                    title: 'mission & strategy',
                  },
                  {
                    to: '/?parent11-child1',
                    title: 'our team',
                  },
                  {
                    to: '/?parent11-child1',
                    title: 'projects & reports',
                  },
                  {
                    to: '/?parent11-child1',
                    title: 'end of the year reports',
                  },
                  {
                    to: '/?parent11-child1',
                    title: 'legal information',
                  },
                ],
              },
              {
                to: '/?single2',
                title: 'Support FAR',
                open: false,
                subMenuList: [
                  {
                    to: '/?parent3-child3',
                    title: 'donate',
                  },
                  {
                    to: '/?parent3-child4',
                    title: 'be a volunteer',
                  },
                  {
                    to: '/?parent3-child4',
                    title: 'coop program',
                  },
                  {
                    to: '/?parent3-child4',
                    title: 'be a partner',
                  },
                ],
              },
              {
                to: '/?single',
                title: 'get help',
              },
              { to: '/contacts', title: 'contacts' },
            ],
          }
          commit('SET_CONTENT', allData)
        }
      )
  },
}
