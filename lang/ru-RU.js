import { api } from '@/utils/api'

export default async function (context) {
  let localeMessages = null
  await api
    .getData()
    .then(([intro, mission, achievements]) => {
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
        arrLength: allAchievements.length,
      }
    })
    .catch(() => {
      localeMessages = {}
    })
  return localeMessages
}
