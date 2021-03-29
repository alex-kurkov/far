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
        backgroundPosition: '65px 25px',
      },
    }
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 54px;
}
</style>
