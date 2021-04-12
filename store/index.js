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
    // const allAchievements = state.content.achievements.map((achievement) => {
    //   const text = achievement.cardTitle[0][`${locale}`]
    //   const title = achievement.cardText[0][`${locale}`]
    //   achievement['title'] = text
    //   achievement['text'] = title
    //   return achievement
    // })

    //  это надо будет переписать со стороны strapi и потом здесь
    // const metatags = state.content.metatags.map((meta) => {
    //   const title = meta[`${locale}_title`]
    //   const description = meta[`${locale}_description`]
    //   const keywords = meta[`${locale}_keywords`]
    //   const image = meta['image']
    //   meta['title'] = title
    //   meta['description'] = description
    //   meta['keywords'] = keywords
    //   meta['image'] = image
    //   return meta
    // })

    return {
      about: {
        title: state.content.about.aboutTitle[`${locale}`],
        subtitle: state.content.about.aboutSubTitle[`${locale}`],
      },
      promo: {
        support: state.content.promo.promoSupport[`${locale}`],
        help: state.content.promo.promoHelp[`${locale}`],
      },
      intro: state.content.intro.introText[`${locale}`],
      achievement: {
        title: state.content.achievement.cardsTitle[`${locale}`],
        link: state.content.achievement.cardsLink[`${locale}`],
      },
      // achievements: allAchievements,
      mission: {
        title: state.content.mission.missionTitle[`${locale}`],
        text: state.content.mission.missionText[`${locale}`],
        link: state.content.mission.missionLink[`${locale}`],
      },
      support: {
        title: state.content.support.supportTitle[`${locale}`],
        subtitle: state.content.support.supportSubTitle[`${locale}`],
        paymentBtn: state.content.support.supportPaymentBtn[`${locale}`],
        privacy: state.content.support.supportPrivacy[`${locale}`],
        offer: state.content.support.supportOffer[`${locale}`],
        sumOption: state.content.support.supportSumOption[`${locale}`],
        card: state.content.support.supportCard[`${locale}`],
        umoney: state.content.support.supportUMoney[`${locale}`],
        terminal: state.content.support.supportTerminal[`${locale}`],
        oneTime: state.content.support.supportOneTimePayment[`${locale}`],
        monthly: state.content.support.supportConsecutivePayments[`${locale}`],
        name: state.content.support.supportName[`${locale}`],
        agree: state.content.support.supportAgree[`${locale}`],
      },
      help: {
        title: state.content.help.helpTitle[`${locale}`],
        text: state.content.help.helpText[`${locale}`],
        link: state.content.help.helpLink[`${locale}`],
      },
      footer: {
        title: state.content.footer.footerTitle[`${locale}`],
        legal: state.content.footer.footerLegal[`${locale}`],
        license: state.content.footer.footerLicenseText[`${locale}`],
        copyright: state.content.footer.footerCopyright[`${locale}`],
      },
      // metatags: metatags,
    }
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
            metatags: meta.data,
          }
          commit('SET_CONTENT', allData)
        }
      )
  },
}
