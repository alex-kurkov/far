import { api } from '@/utils/api'

export default async function (context) {
  let localeMessages = null
  await api
    .getData()
    .then(([intro, mission, achievements, about, promo, help, support]) => {
      const allAchievements = achievements.data.map((achievement) => {
        const text = achievement['ru_text']
        const title = achievement['ru_title']
        achievement['text'] = text
        achievement['title'] = title
        return achievement
      })

      localeMessages = {
        intro: intro.data['ru_text'],
        mission: {
          title: mission.data['ru_title'],
          text: mission.data['ru_text'],
          link: mission.data['ru_link'],
        },
        achievements: allAchievements,
        about: {
          title: about.data['ru_title'],
          text: about.data['ru_text'],
        },
        promo: {
          support: promo.data['ru_support'],
          help: promo.data['ru_help'],
        },
        help: {
          title: help.data['ru_title'],
          text: help.data['ru_text'],
          link: help.data['ru_link'],
        },
        support: {
          title: support.data['ru_title'],
          subtitle: support.data['ru_subtitle'],
          paymentBtn: support.data['ru_paymentBtn'],
          privacy: support.data['ru_privacy'],
          offer: support.data['ru_offer'],
        },
      }
    })
    .catch(() => {
      localeMessages = {}
    })
  return localeMessages
}
