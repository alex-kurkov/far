<template>
  <div class="toggle-switcher">
    <NuxtLink
      v-for="(locale, i) in showLocales"
      :key="i"
      :to="switchLocalePath(locale.code)"
      class="toggle-switcher-link"
    >
      {{ locale.name }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ToggleLanguage',
  computed: {
    showLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )
    },
  },
}
</script>

<style scoped>
.toggle-switcher {
  position: absolute;
  top: 70px;
  left: 20px;
  width: 40px;
  height: 30px;
  background-color: #313131;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.toggle-switcher-link {
  color: #ffffff;
  font-family: Vollkorn, Arial, sans-serif;
  font-size: 20px;
}
</style>
