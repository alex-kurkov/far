export default function (storeContent, locale) {
  let allAchievements = []
  storeContent.achievements.forEach((achievement) => {
    const title = achievement.cardTitle[0][`${locale}`]
    const text = achievement.cardText[0][`${locale}`]
    const stamp = achievement.stamp
    const card = {
      title,
      text,
      stamp,
    }
    allAchievements.push(card)
  })

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

  let localeMenu
  if (locale === 'ru') {
    localeMenu = storeContent.menuRU
  } else {
    localeMenu = storeContent.menuEN
  }

  // console.log(`locale`, locale, localeMenu)

  return {
    about: {
      title: storeContent.about.aboutTitle[`${locale}`],
      subtitle: storeContent.about.aboutSubTitle[`${locale}`],
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
    achievements: allAchievements,
    mission: {
      title: storeContent.mission.missionTitle[`${locale}`],
      text: storeContent.mission.missionText[`${locale}`],
      link: storeContent.mission.missionLink[`${locale}`],
    },
    support: {
      title: storeContent.support.supportTitle[`${locale}`],
      subtitle: storeContent.support.supportSubTitle[`${locale}`],
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
    menu: localeMenu,
  }
}
