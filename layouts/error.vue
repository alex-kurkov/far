<template>
  <div class="error-block">
    <h1>Здесь ничего нет</h1>
    <h2>Status: {{ error.statusCode }}</h2>
    <p>Message: {{ error.message }}</p>
    <NuxtLink to="/">На главную</NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    console.log(this.error)
  },
}
</script>

<style scoped>
.error-block {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}
</style>
