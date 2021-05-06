<template>
  <section class="all-reports">
    <div class="all-reports__content">
      <Report
        v-for="(content, index) in reports"
        :key="content.slug + index"
        :content="content"
      />
    </div>
  </section>
</template>

<script>
import Report from '@/components/Report'
export default {
  name: 'AllReports',
  components: { Report },
  computed: {
    reports() {
      return this.$store.getters.getReports
    },
  },
}
</script>

<style scoped>
.all-reports {
  background: linear-gradient(to right, #c8c8c8 50%, var(--simple-black) 0);
}
.all-reports__content {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}
</style>
