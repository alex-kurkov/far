<template>
  <section :class="['custom-page', `custom-page_${getTheme(currentPage)}`]">
    <div class="custom-page-container">
      <h1 class="custom-page__title">{{ getCustomPageTitle(currentPage) }}</h1>
      <h2 class="custom-page__subtitle">
        {{ getCustomPageSubTitle(currentPage, 0) }}
      </h2>
      <p class="custom-page__text">{{ getCustomPageText(currentPage, 0) }}</p>
      <ul class="custom-page__sections">
        <li
          v-for="element in getCustomPageSections(currentPage)"
          class="custom-page__section"
          :key="element.customPageSectionTitle[$i18n.locale]"
        >
          <div :class="['custom-page__section-item']">
            {{ element.customPageSectionTitle[$i18n.locale] }}
          </div>
        </li>
      </ul>
    </div>
    <SupportButton />
    <ToggleLanguage />
  </section>
</template>

<script>
import ToggleLanguage from '@/components/promo/ToggleLanguage'
import SupportButton from '@/components/SupportButton'
export default {
  components: { ToggleLanguage, SupportButton },
  computed: {
    currentPage() {
      const { id } = this.$route.params
      if (this.$store.state.content.customPages[id]) {
        // возможно здесь надо написать getter
        return this.$store.state.content.customPages[id]
      } else {
        return this.$store.state.content.customPages['404']
      }
    },
  },
  methods: {
    getTheme(currentPage) {
      if (currentPage) {
        return currentPage.theme
      } else {
        return ''
      }
    },

    getCustomPageTitle(currentPage) {
      if (currentPage.customPageTitle) {
        return currentPage.customPageTitle[this.$i18n.locale]
      } else {
        return ''
      }
    },

    getCustomPageSubTitle(currentPage, index) {
      if (currentPage.customPageSubtitle[index]) {
        return currentPage.customPageSubtitle[index][this.$i18n.locale]
      } else {
        return ''
      }
    },

    getCustomPageText(currentPage, index) {
      if (currentPage.customPageText[index]) {
        return currentPage.customPageText[index][this.$i18n.locale]
      } else {
        return ''
      }
    },

    getCustomPageSections(currentPage) {
      if (currentPage) {
        return currentPage.customPageSection
      } else {
        return ''
      }
    },
  },
}
</script>

<style scoped>
.custom-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.custom-page_red {
  color: #fff;
  background-color: #b23438;
}

.custom-page_grey {
  color: #b23438;
  background-color: #b3b3b3;
}
</style>
