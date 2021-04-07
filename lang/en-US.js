import { api } from '@/utils/api'

export default async function (context) {
  let localeMessages = null
  await api
    .getData()
    .then(([intro, mission, achievements, about, promo, help, support]) => {
      const allAchievements = achievements.data.map((achievement) => {
        const text = achievement['en_text']
        const title = achievement['en_title']
        achievement['text'] = text
        achievement['title'] = title
        return achievement
      })

      localeMessages = {
        intro: intro.data['en_text'],
        mission: {
          title: mission.data['en_title'],
          text: mission.data['en_text'],
          link: mission.data['en_link'],
        },
        achievements: allAchievements,
        arrLength: allAchievements.length,
        about: {
          title: about.data['en_title'],
          text: about.data['en_text'],
        },
        promo: {
          support: promo.data['en_support'],
          help: promo.data['en_help'],
        },
        help: {
          title: help.data['en_title'],
          text: help.data['en_text'],
          link: help.data['en_link'],
        },
        support: {
          title: support.data['en_title'],
          subtitle: support.data['en_subtitle'],
          paymentBtn: support.data['en_paymentBtn'],
          privacy: support.data['en_privacy'],
          offer: support.data['en_offer'],
        },
      }
    })
    .catch(() => {
      localeMessages = {}
    })
  return localeMessages
}
