<template>
  <section class="header"/>
</template>

<script>
import BackGroundTextRu from './header/header-text-ru.svg'
export default {
  name: 'Header',
  mounted () {
    const element=document.querySelector('.header')
    element.style.backgroundImage = `url(${BackGroundTextRu})`;
    element.style.backgroundRepeat='repeat-x';
    element.style.backgroundColor='#b13438'
    element.style.backgroundPosition='60px 25px'

  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 54px;
}
</style>

