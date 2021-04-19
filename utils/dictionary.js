import { baseUrl } from './api'

export default function (storeContent, locale) {
  let allMetaTags = []
  //  это надо будет переписать со стороны strapi и потом здесь
  storeContent.metaTags.forEach((meta) => {
    const title = meta[`${locale}_title`]
    const description = meta[`${locale}_description`]
    const keywords = meta[`${locale}_keywords`]
    const image = meta['image']
    const metaTagUnit = {
      title,
      description,
      keywords,
      image,
    }
    allMetaTags.push(metaTagUnit)
  })

  return {
    about: {
      title: storeContent.about.title[`${locale}`],
      subtitle: storeContent.about.subtitle[`${locale}`],
      article: storeContent.about.article[0][`${locale}`],
      image: baseUrl + storeContent.about.image.url,
    },
    promo: {
      support: storeContent.promo.promoSupport[`${locale}`],
      help: storeContent.promo.promoHelp[`${locale}`],
    },
    intro: storeContent.intro.introText[`${locale}`],
    achievement: {
      title: storeContent.achievement.cardsTitle[`${locale}`],
      link: storeContent.achievement.cardsLink[`${locale}`],
    },
    achievements: [
      ...storeContent.achievements.map(({ title, text, stamp }) => ({
        title: title[`${locale}`],
        text: text[`${locale}`],
        stamp,
      })),
    ],
    mission: {
      title: storeContent.mission.missionTitle[`${locale}`],
      text: storeContent.mission.missionText[`${locale}`],
      link: storeContent.mission.missionLink[`${locale}`],
    },
    support: {
      title: storeContent.support.supportTitle[0][`${locale}`],
      subtitle: storeContent.support.supportSubTitle[`${locale}`],
      titleOnPage: storeContent.support.supportTitle[1][`${locale}`],
      paymentBtn: storeContent.support.supportPaymentBtn[`${locale}`],
      privacy: storeContent.support.supportPrivacy[`${locale}`],
      offer: storeContent.support.supportOffer[`${locale}`],
      sumOption: storeContent.support.supportSumOption[`${locale}`],
      card: storeContent.support.supportCard[`${locale}`],
      umoney: storeContent.support.supportUMoney[`${locale}`],
      terminal: storeContent.support.supportTerminal[`${locale}`],
      oneTime: storeContent.support.supportOneTimePayment[`${locale}`],
      monthly: storeContent.support.supportConsecutivePayments[`${locale}`],
      name: storeContent.support.supportName[`${locale}`],
      agree: storeContent.support.supportAgree[`${locale}`],
    },
    help: {
      title: storeContent.help.helpTitle[`${locale}`],
      text: storeContent.help.helpText[`${locale}`],
      link: storeContent.help.helpLink[`${locale}`],
    },
    footer: {
      title: storeContent.footer.footerTitle[`${locale}`],
      legal: storeContent.footer.footerLegal[`${locale}`],
      license: storeContent.footer.footerLicenseText[`${locale}`],
      copyright: storeContent.footer.footerCopyright[`${locale}`],
    },
    metaTags: allMetaTags,
    menu: storeContent.menu,
    teamMembers: [
      ...storeContent.teamMembers.map(({ name, info, image }) => ({
        name: name[`${locale}`],
        info: info[`${locale}`],
        image: baseUrl + image.url,
      })),
    ],
    ourTeamPromo: {
      title: storeContent.ourTeamPromo.title[`${locale}`],
      image: storeContent.ourTeamPromo.image.url,
    },
    header: storeContent.header.marqueeText[`${locale}`],
  }
}
