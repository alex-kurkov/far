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
            sumOption: support.data['ru_sum_option'],
            card: support.data['ru_card'],
            umoney: support.data['ru_umoney'],
            terminal: support.data['ru_terminal'],
            oneTime: support.data['ru_one_time_payment'],
            monthly: support.data['ru_consecutive_payments'],
            name: support.data['ru_name'],
          },
          achievementMain: {
            title: achievementMain.data['ru_title'],
            link: achievementMain.data['ru_link'],
          },
          footer: {
            title: footer.data['ru_title'],
            legal: footer.data['ru_legal'],
            license: footer.data['ru_license'],
            copyright: footer.data['ru_copyright'],
          },
        }
      }
    )
    .catch(() => {
      localeMessages = {}
    })
  return localeMessages
}
