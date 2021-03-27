<template>
  <div class="hamburger">
    <Navigation />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
export default {
  name: 'Hamburger',
  components: { Navigation },
}
</script>

<style scoped>
.hamburger {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  background: #ffffff;
}
</style>
