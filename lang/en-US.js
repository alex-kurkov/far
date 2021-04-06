import { api } from '@/utils/api'

export default async function (context) {
  let localeMessages = null
  await api
    .getData()
    .then(([intro, mission]) => {
      console.log(intro.data, mission.data)
      localeMessages = {
        intro: intro.data['en_text'],
        mission: {
          title: mission.data['en_title'],
          text: mission.data['en_text'],
        },
      }
    })
    .catch(() => {
      localeMessages = {}
    })
  return localeMessages
}
