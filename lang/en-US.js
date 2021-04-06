import { api } from '@/utils/api'

export default async function (context) {
  let localeMessages = null
  await api
    .getData()
    .then(([intro, mission, achievements]) => {
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
      }
    })
    .catch(() => {
      localeMessages = {}
    })
  return localeMessages
}
