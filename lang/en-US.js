import { api } from '@/utils/api'

export default async function (context) {
  let localeMessages = null
  await api
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
        achievementMain,
        footer,
      ]) => {
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
            sumOption: support.data['en_sum_option'],
            card: support.data['en_card'],
            umoney: support.data['en_umoney'],
            terminal: support.data['en_terminal'],
            oneTime: support.data['en_one_time_payment'],
            monthly: support.data['en_consecutive_payments'],
            name: support.data['en_name'],
            agree: support.data['en_agree'],
          },
          achievementMain: {
            title: achievementMain.data['en_title'],
            link: achievementMain.data['en_link'],
          },
          footer: {
            title: footer.data['en_title'],
            legal: footer.data['en_legal'],
            license: footer.data['en_license'],
            copyright: footer.data['en_copyright'],
          },
        }
      }
    )
    .catch(() => {
      localeMessages = {}
    })
  return localeMessages
}
