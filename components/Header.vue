<template>
  <section class="header">
    <p>Header</p>
    <p>Это компонент Header</p>
    <icon name='moscow' class="icons_r"></icon>
  </section>
</template>

<script>
  import Icon from '~/components/Icon';
  export default {
    name: 'Header',
    components: {
      Icon,
    }

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
  fill: yellow;
  width: 100%;
  height: 200px;
  stroke: red;
}

</style>


