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
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background-color: var(--main-black);
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.toggle-switcher-link {
  color: var(--simple-white);
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-style: italic;
  text-transform: lowercase;
  text-decoration: none;
  font-size: 27px;
}

@media screen and (min-width: 640px) {
  .toggle-switcher {
    width: 64px;
    height: 64px;
  }

  .toggle-switcher-link {
    font-size: 50px;
  }
}

@media screen and (min-width: 769px) {
  .toggle-switcher {
    width: 53px;
    height: 53px;
  }

  .toggle-switcher-link {
    font-size: 37px;
  }
}
</style>
