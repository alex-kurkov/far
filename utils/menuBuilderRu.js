export default function menuBuilderRu(menuRu) {
  function buildNewMenuRu(menuRu) {
    let newMenuRu = []
    menuRu.forEach((menuItemRu) => {
      for (let key in menuItemRu) {
        if (menuItemRu.hasOwnProperty(key)) {
          if (key === 'title') {
            if (menuItemRu[key].ru) {
              // console.log(menuItem[key].ru)
              menuItemRu['menuTitle'] = menuItemRu[key].ru
            }
          }
          if (key === 'subMenuList') {
            buildNewMenuRu(menuItemRu['subMenuList'])
          }
        }
      }
      newMenuRu.push(menuItemRu)
    })
    // console.log('newMenuRu', newMenuRu)
    return newMenuRu
  }

  return buildNewMenuRu(menuRu)
}
