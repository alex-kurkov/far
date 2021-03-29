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
        backgroundRepeat: 'repeat-x',
        backgroundColor: '#b13438',
      },
    }
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 52px;
  background-position: 65px 19px;
}

@media screen and (max-width: 768px) {
  .header {
    height: 65px;
    background-position: 65px 27px;
  }
}

@media screen and (max-width: 450px) {
  .header {
    height: 40px;
    background-position: 65px 17px;
  }
}
</style>
