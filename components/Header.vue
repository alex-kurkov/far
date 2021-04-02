<template>
  <div>
    <section
      :style="$i18n.locale === 'ru' ? cssPropsRu : cssPropsEn"
      class="header"
    />
  </div>
</template>

<script>
import BackGroundTextEn from './header/far_en.svg'
import BackGroundTextRu from './header/far_rus.svg'
export default {
  name: 'Header',
  data() {
    return {
      cssPropsRu: {
        backgroundImage: `url(${BackGroundTextRu})`,
      },
      cssPropsEn: {
        backgroundImage: `url(${BackGroundTextEn})`,
      },
    }
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 41px;
  background: #b13438 repeat-x -194px 7px / 594px 60px;
}

@media screen and (min-width: 640px) {
  .header {
    width: 100%;
    height: 64px;
    background: #b13438 repeat-x -286px 20px / 800px 76px;
  }

  @media screen and (min-width: 769px) {
    .header {
      width: 100%;
      height: 53px;
      background: #b13438 repeat-x -286px 5px / 800px 81px;
    }
  }
}
</style>
