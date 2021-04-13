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
        ]) => {
          const menu1 = [
            {
              to: 'index',
              title: {
                ru: 'О НАС',
                en: 'About',
              },
              open: false,
              subMenuList: [
                {
                  to: 'andrey',
                  title: {
                    ru: 'кто такой Андрей Рыльков',
                    en: 'who is Andrey',
                  },
                },
                {
                  to: '/mission',
                  title: {
                    ru: 'миссия и стратегии',
                    en: 'mission and strategy',
                  },
                },
                {
                  to: '/team',
                  title: { ru: 'команда ФАР', en: 'our team FAR' },
                },
              ],
            },
            {
              to: '/support',
              title: { ru: 'ПОДДЕРЖАТЬ ФАР', en: 'Support FAR' },
              open: false,
              subMenuList: [
                {
                  to: 'donate',
                  title: { ru: 'сделать пожертвование', en: 'donate' },
                },
                {
                  to: 'volunteer',
                  title: { ru: 'волонтёрство в ФАР', en: 'volunteer' },
                },
              ],
            },
            {
              to: 'help',
              title: { ru: 'ПОЛУЧИТЬ ПОМОЩЬ', en: 'GET HELP' },
            },
            { to: 'contacts', title: { ru: 'КОНТАКТЫ', en: 'Contacts' } },
          ]

          const menu2 = [
            {
              to: 'index',
              title: {
                ru: 'О НАС',
                en: 'About',
              },
              open: false,
              subMenuList: [
                {
                  to: 'andrey',
                  title: {
                    ru: 'кто такой Андрей Рыльков',
                    en: 'who is Andrey',
                  },
                },
                {
                  to: '/mission',
                  title: {
                    ru: 'миссия и стратегии',
                    en: 'mission and strategy',
                  },
                },
                {
                  to: '/team',
                  title: { ru: 'команда ФАР', en: 'our team FAR' },
                },
              ],
            },
            {
              to: '/support',
              title: { ru: 'ПОДДЕРЖАТЬ ФАР', en: 'Support FAR' },
              open: false,
              subMenuList: [
                {
                  to: 'donate',
                  title: { ru: 'сделать пожертвование', en: 'donate' },
                },
                {
                  to: 'volunteer',
                  title: { ru: 'волонтёрство в ФАР', en: 'volunteer' },
                },
              ],
            },
            {
              to: 'help',
              title: { ru: 'ПОЛУЧИТЬ ПОМОЩЬ', en: 'GET HELP' },
            },
            { to: 'contacts', title: { ru: 'КОНТАКТЫ', en: 'Contacts' } },
          ]

          console.log(
            '+++++++++++>>>>>>>>> final menu en',
            menuBuilderEn(menu1)
          )
          console.log(
            '+++++++++++>>>>>>>>> final menu ru',
            menuBuilderRu(menu1)
          )

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

            // menuEN: menuBuilderEn(menu1),
            // menuRU: menuBuilderRu(menu1),

            menuEN: menuBuilder(menu1, 'en'),
            menuRU: menuBuilder(menu2, 'ru'),

            // menuEN: menuBuilderEn(menu2),
            // menuRU: menuBuilderRu(menu1),
            // menuRU2: [
            //   {
            //     to: 'index',
            //     menuTitle: 'О НАС',
            //     open: false,
            //     subMenuList: [
            //       {
            //         to: 'andrey-rylkov',
            //         menuTitle: 'кто такой Андрей Рыльков',
            //       },
            //       {
            //         to: '/?parent11-child1',
            //         menuTitle: 'миссия и стратегии',
            //       },
            //       {
            //         to: '/?parent11-child1',
            //         menuTitle: 'команда ФАР',
            //       },
            //       {
            //         to: '/?parent11-child1',
            //         menuTitle: 'проекты и отчёты',
            //       },
            //       {
            //         to: '/?parent11-child1',
            //         menuTitle: 'годовые отчёты',
            //       },
            //       {
            //         to: '/?parent11-child1',
            //         menuTitle: 'учредительные документы',
            //       },
            //     ],
            //   },
            //   {
            //     to: '/?single2',
            //     menuTitle: 'ПОДДЕРЖАТЬ ФАР',
            //     open: false,
            //     subMenuList: [
            //       {
            //         to: '/?parent3-child3',
            //         menuTitle: 'сделать пожертвование',
            //       },
            //       {
            //         to: '/?parent3-child4',
            //         menuTitle: 'волонтёрство в ФАР',
            //       },
            //       {
            //         to: '/?parent3-child4',
            //         menuTitle: 'стажировка в ФАР',
            //       },
            //       {
            //         to: '/?parent3-child4',
            //         menuTitle: 'партнёрство с ФАР',
            //       },
            //     ],
            //   },
            //   {
            //     to: '/?single',
            //     menuTitle: 'ПОЛУЧИТЬ ПОМОЩЬ',
            //   },
            //   { to: 'contacts', menuTitle: 'КОНТАКТЫ' },
            // ],

            // menuEN2: [
            //   {
            //     to: 'index',
            //     menuTitle: 'About',
            //     open: false,
            //     subMenuList: [
            //       {
            //         to: 'andrey-rylkov',
            //         menuTitle: 'who is Андрей Рыльков',
            //       },
            //       {
            //         to: '/?parent11-child1',
            //         menuTitle: 'mission & strategy',
            //       },
            //       {
            //         to: '/?parent11-child1',
            //         menuTitle: 'our team',
            //       },
            //       {
            //         to: '/?parent11-child1',
            //         menuTitle: 'projects & reports',
            //       },
            //       {
            //         to: '/?parent11-child1',
            //         menuTitle: 'end of the year reports',
            //       },
            //       {
            //         to: '/?parent11-child1',
            //         menuTitle: 'legal information',
            //       },
            //     ],
            //   },
            //   {
            //     to: '/?single2',
            //     menuTitle: 'Support FAR',
            //     open: false,
            //     subMenuList: [
            //       {
            //         to: '/?parent3-child3',
            //         menuTitle: 'donate',
            //       },
            //       {
            //         to: '/?parent3-child4',
            //         menuTitle: 'be a volunteer',
            //       },
            //       {
            //         to: '/?parent3-child4',
            //         menuTitle: 'coop program',
            //       },
            //       {
            //         to: '/?parent3-child4',
            //         menuTitle: 'be a partner',
            //       },
            //     ],
            //   },
            //   {
            //     to: '/?single',
            //     menuTitle: 'get help',
            //   },
            //   { to: 'contacts', menuTitle: 'contacts' },
            // ],
          }
          commit('SET_CONTENT', allData)
        }
      )
  },
}
