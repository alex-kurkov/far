<template>
  <!-- <section :class="['custom-page', `custom-page_${getTheme(currentPage)}`]"> -->
  <div>
    <section v-show="getTheme(currentPage) !== 'error'" class="custom-page">
      <h1 class="custom-page__title">{{ getCustomPageTitle(currentPage) }}</h1>
      <div class="custom-page__container">
        <div class="custom-page__intro">
          <h2 class="custom-page__subtitle">
            {{ getCustomPageSubTitle(currentPage, 0) }}
          </h2>
          <img
            class="custom-page__image"
            :src="getCustomPageImage(currentPage).url"
            :alt="getCustomPageImage(currentPage).alt"
          />
        </div>
        <h3 class="custom-page__text-title">
          {{ getCustomPageSubTitle(currentPage, 1) }}
        </h3>
        <article class="custom-page__text">
          {{ getCustomPageText(currentPage, 0) }}
        </article>
        <!-- <ul class="custom-page__sections">
        <li
          v-for="element in getCustomPageSections(currentPage)"
          class="custom-page__section"
          :key="element.customPageSectionTitle[$i18n.locale]"
        >
          <div :class="['custom-page__section-item']">
            {{ element.customPageSectionTitle[$i18n.locale] }}
          </div>
          <img class="custom-page__image" :src="baseUrl + element.customPageSectionImage.url" alt=""/>
        </li>
      </ul> -->
      </div>
      <SupportButton />
      <ToggleLanguage />
    </section>
    <section v-show="getTheme(currentPage) === 'error'">
      <NotFoundPage />
    </section>
  </div>
</template>

<script>
import NotFoundPage from '@/components/NotFoundPage'
import ToggleLanguage from '@/components/promo/ToggleLanguage'
import SupportButton from '@/components/SupportButton'
import { baseUrl } from '@/utils/api'
export default {
  components: { NotFoundPage},
  data() {
    return {
      baseUrl: baseUrl,
    }
  },
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
      if (currentPage.pageText[index]) {
        return currentPage.pageText[index][this.$i18n.locale]
      } else {
        return ''
      }
    },

    getCustomPageImage(currentPage) {
      if (currentPage.image) {
        return {
          url: this.baseUrl + currentPage.image.image.url,
          alt: currentPage.image.imageAlt[this.$i18n.locale],
        }
      } else {
        return { url: '/images/defReports.png', alt: 'default' }
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
  color: var(--simple-white);
  background-color: var(--main-red);
}

.custom-page_grey {
  color: var(--main-red);
  background-color: var(--light-grey);
}

.custom-page__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.custom-page__intro {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1280px;
}

.custom-page__title {
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-weight: 400;
  font-style: italic;
  font-size: 110px;
  line-height: 0.8;
  text-decoration: underline 11px var(--main-red);
  background: var(--light-grey);
  width: 100%;
  color: var(--simple-white);
  padding: 18px 52px 27px 18px;
  word-break: break-all;
  margin: 0;
}

.custom-page__subtitle {
  background: var(--light-grey);
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-weight: 500;
  font-style: italic;
  color: var(--simple-black);
  font-size: 18px;
  padding: 0 62px 20px 18px;
  width: 100%;
  margin: 0;
}

.custom-page__text-title {
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-size: 21px;
  font-weight: 700;
  text-transform: uppercase;
  background: var(--simple-white);
  padding: 26px 0;
  margin: 0;
  letter-spacing: -1px;
  width: 100%;
  text-align: center;
  color: var(--blacky-grey);
  max-width: 1100px;
}

.custom-page__sections {
  list-style: none;
  margin: 0;
  padding: 0;
}

.custom-page__text {
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  padding: 0 18px 18px;
  background: var(--simple-white);
  color: var(--blacky-grey);
  max-width: 1100px;
}

.custom-page__image {
  width: 100%;
  height: 330px;
  object-fit: cover;
  background: var(--simple-white);
}

@media screen and (min-width: 768px) {
  .custom-page__title {
    font-size: 220px;
    padding: 40px 211px 43px 52px;
    text-decoration: underline 43px var(--main-red);
  }

  .custom-page__subtitle {
    padding: 40px 178px 52px 52px;
    font-size: 36px;
  }

  .custom-page__image {
    height: 365px;
  }

  .custom-page__text-title {
    font-size: 54px;
    padding: 65px 0 57px;
  }

  .custom-page__text {
    font-size: 33px;
    padding: 0 52px 70px;
  }
}

@media screen and (min-width: 1280px) {
  .custom-page {
    background: linear-gradient(
      to right,
      var(--simple-black) 50%,
      var(--simple-white) 50%
    );
  }

  .custom-page__container {
    background: linear-gradient(
      to right,
      var(--main-red) 50%,
      var(--light-grey) 50%
    );
    width: 100%;
  }
  .custom-page__title {
    font-size: 247px;
    padding: 132px 177px 110px 92px;
    max-width: 1280px;
    background: linear-gradient(
      to right,
      var(--light-grey) 1190px,
      var(--simple-white) 1190px
    );
  }

  .custom-page__subtitle {
    font-size: 36px;
    padding: 40px 92px;
    width: 590px;
    min-height: 300px;
    background: var(--simple-black);
    color: var(--simple-white);
  }

  .custom-page__text-title {
    font-size: 28px;
    padding: 46px 0 30px;
  }

  .custom-page__image {
    width: 600px;
    height: 300px;
  }
  .custom-page__text {
    font-size: 22px;
    padding: 0 46px 85px;
  }
}
</style>
