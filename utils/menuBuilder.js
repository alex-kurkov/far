export default function menuBuilder(menu, locale) {
  console.log('builder locale', locale)
  function buildNewMenu(menu, locale) {
    let newMenu = []
    menu.forEach((menuItem) => {
      for (let key in menuItem) {
        if (menuItem.hasOwnProperty(key)) {
          if (key === 'title') {
            if (menuItem[key][locale]) {
              menuItem['menuTitle'] = menuItem[key][locale]
            }
          }
          if (key === 'subMenuList') {
            buildNewMenu(menuItem['subMenuList'], locale)
          }
        }
      }
      newMenu.push(menuItem)
    })
    return newMenu
  }

  return buildNewMenu(menu, locale)
}
