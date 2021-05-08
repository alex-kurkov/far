<template>
  <section class="projects">
    <div class="content">
      <Report
        v-for="(content, index) in projects"
        :key="content.slug + index"
        :content="content"
        :currentProject="true"
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
    projects() {
      return this.$store.getters.getProjects
    },
  },
}
</script>

<style scoped>
.projects {
  margin-top: 8px;
  position: relative;
  background:
  linear-gradient(
    to right,
    var(--light-grey) 50%,
    var(--simple-black) 0
  );
}
@media screen and (min-width: 768px) {
  .projects::after {
    content: '';
    position: absolute;
    width: 4px;
    background: var(--main-red);
    height: calc(100% + 20px);
    top: -40px;
    left: calc(50% - 2px);
  }
}
.content {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}
</style>
