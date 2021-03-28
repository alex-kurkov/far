<template>
  <section class="header">
    <p>Header</p>
    <p>Это компонент Header</p>
    <icon name="bond" class="icons_r"></icon>
  </section>
</template>

<script>
import Icon from '~/components/Icon'
export default {
  name: 'Header',
  components: {
    Icon,
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 400px;
  min-height: 70px;
  background: #3b8070;
}

.icons_r {
  fill: grey;
  width: 100%;
  height: 200px;
  stroke: white;
  stroke-width: 10px;
}
</style>
