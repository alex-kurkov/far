<template>
  <section :style="cssProps" class="header" />
</template>

<script>
import BackGroundTextRu from './header/header-text-ru.svg'
export default {
  name: 'Header',
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${BackGroundTextRu})`,
      },
    }
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 41px;
  background: #b13438 repeat-x -194px 4px / 594px 60px;
}

@media screen and (min-width: 640px) {
  .header {
    width: 100%;
    height: 64px;
    background: #b13438 repeat-x -286px 15px / 1250px 76px;
  }

  @media screen and (min-width: 769px) {
    .header {
      width: 100%;
      height: 53px;
      background: #b13438 repeat-x -286px 2px / 1089px 81px;
    }
  }
}
</style>
