import { api } from '@/utils/api'

export default async function (context) {
  let localeMessages = null
  await api
    .getData()
    .then(([intro, mission]) => {
      console.log(intro.data, mission.data)
      localeMessages = {
        intro: intro.data['ru_text'],
        mission: {
          title: mission.data['ru_title'],
          text: mission.data['ru_text'],
          link: mission.data['ru_link'],
        },
      }
    })
    .catch(() => {
      localeMessages = {}
    })
  return localeMessages
}
