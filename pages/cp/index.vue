<template>
  <section class="custom-page">
    <div class="custom-page-container">
      <h1>This page is not exist</h1>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  beforeCreate() {
    this.$router.push('/')
  },
  // beforeCreate () {
  // console.log("ROUTER", this.$router)
  // console.log("ROUTE", this.$route)
  // console.log(this.$store.state.content.customPages['custom_pages'][0].customPageTitle.ru)
  // if (this.$store.state.content.customPages['custom_pages'][0].customPageTitle.ru) {
  //   this.$router.push('/')
  // }
}
</script>

<style scoped>
.custom-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
