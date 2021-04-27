import { baseUrl } from './api'

export default function (storeContent, locale) {
  let allMetaTags = []
  // это надо будет удалить когда все метатеги перенесем в page
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

  const allPages = {}
  for (let key in storeContent.pages) {
    if (storeContent.pages.hasOwnProperty(key)) {
      const localePage = JSON.parse(JSON.stringify(storeContent.pages[key]))

      if (localePage['mainTitle']) {
        localePage['mainTitleLocale'] = localePage['mainTitle'][`${locale}`]
      }

      if (localePage['subTitles'].length > 0) {
        localePage['subTitlesLocale'] = localePage['subTitles'].map(
          (subTitle) => subTitle[`${locale}`]
        )
      }
      if (localePage['pageTexts'].length > 0) {
        localePage['pageTextsLocale'] = localePage['pageTexts'].map(
          (subTitle) => subTitle[`${locale}`]
        )
      }

      if (localePage.images.length > 0) {
        localePage['imageAltsLocale'] = localePage.images.map(
          (image) => image['imageAlt'] && image['imageAlt'][`${locale}`]
        )
      }

      const metaTagsLocale = {}
      for (let key in localePage.metaTags) {
        if (localePage.metaTags.hasOwnProperty(key)) {
          if (key !== 'metaImage') {
            metaTagsLocale[key] = localePage.metaTags[key][`${locale}`]
          }
        }
      }

      localePage['metaTagsLocale'] = metaTagsLocale
      allPages[key] = localePage
    }
  }

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
      paymentBtn: storeContent.support.supportPaymentBtn[0][`${locale}`],
      paymentBtnOnSupPage:
        storeContent.support.supportPaymentBtn[1][`${locale}`],
      privacy: storeContent.support.supportPrivacy[`${locale}`],
      offer: storeContent.support.supportOffer[`${locale}`],
      sumOption: storeContent.support.supportSumOption[`${locale}`],
      card: storeContent.support.supportCard[`${locale}`],
      typeCard: storeContent.support.supportCard.type,
      umoney: storeContent.support.supportUMoney[`${locale}`],
      typeUmoney: storeContent.support.supportUMoney.type,
      terminal: storeContent.support.supportTerminal[`${locale}`],
      typeTerminal: storeContent.support.supportTerminal.type,
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
    pages: allPages,
  }
}
