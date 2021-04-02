<template>
  <div class="toggle-switcher">
    <NuxtLink
      v-for="locale in showLocales"
      :key="locale.code"
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
  bottom: 14px;
  left: 14px;
  width: 41px;
  height: 41px;
  background-color: #313131;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.toggle-switcher-link {
  color: #ffffff;
  font-family: 'Vollkorn', Arial, sans-serif;
  font-style: italic;
  text-transform: lowercase;
  text-decoration: none;
  font-size: 27px;
}

@media screen and (min-width: 768px) {
  .toggle-switcher {
    bottom: 24px;
    left: 24px;
    width: 74px;
    height: 74px;
  }

  .toggle-switcher-link {
    font-size: 50px;
  }
}

@media screen and (min-width: 1280px) {
  .toggle-switcher {
    bottom: 18px;
    left: 18px;
    width: 55px;
    height: 55px;
  }

  .toggle-switcher-link {
    font-size: 37px;
  }
}
</style>
