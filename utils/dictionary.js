export default function (storeContent, locale) {
  return {
    about: {
      title: storeContent.aboutNew.title[`${locale}`],
      subtitle: storeContent.aboutNew.subtitle[`${locale}`],
    },
  }
}
