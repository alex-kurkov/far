export default function menuBuilderEn(menuEn) {
  function buildNewMenuEn(menuEn) {
    let newMenuEn = []
    menuEn.forEach((menuItemEn) => {
      for (let key in menuItemEn) {
        if (menuItemEn.hasOwnProperty(key)) {
          if (key === 'title') {
            if (menuItemEn[key].en) {
              // console.log(menuItem[key].en)
              menuItemEn['menuTitle'] = menuItemEn[key].en
            }
          }
          if (key === 'subMenuList') {
            buildNewMenuEn(menuItemEn['subMenuList'])
          }
        }
      }
      newMenuEn.push(menuItemEn)
    })

    // console.log('newMenuEn', newMenuEn)
    return newMenuEn
  }

  return buildNewMenuEn(menuEn)
}
