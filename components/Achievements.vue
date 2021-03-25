<template>
<section class='achievements'>
  <Achievement/>
</section>
</template>

<script>
import Achievement from '~/components/Achievement'
export default {
  name: 'Achievements',
  components: { Achievement }
}
</script>

<style scoped>
.achievements{
  width: 100%;
}
</style>
