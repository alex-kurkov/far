<template>
  <section>
    <Support />
    <article>{{ introText }}</article>
    <h3>{{ subtitleBF }}</h3>
    <article>{{ bfText }}</article>
    <h3>{{ subtitleYa }}</h3>
    <article>{{ yaText }}</article>
    <Requisites/>
    <h3>{{ subtitleGl }}</h3>
    <article>{{ glText }}</article>
  </section>
</template>

<script>
import { baseUrl } from '@/utils/api'
import Requisites from '@/components/Requisites'
export default {
  components: {
    Requisites,
  },
  data() {
    return {
      title: this.$store.state.content.pages.support.metaTags["metaTitle"][this.$i18n.locale],
      description: this.$store.state.content.pages.support.metaTags["metaDescription"][this.$i18n.locale],
      keywords: this.$store.state.content.pages.support.metaTags["metaKeyWords"][this.$i18n.locale],
      image: baseUrl + this.$store.state.content.pages.support.metaTags["metaImage"].url,
      introText: this.$store.state.content.pages.support.pageTexts[0][
        this.$i18n.locale
      ],
      subtitleBF: this.$store.state.content.pages.support.subTitles[0][
        this.$i18n.locale
      ],
      bfText: this.$store.state.content.pages.support.pageTexts[1][
        this.$i18n.locale
      ],
      subtitleYa: this.$store.state.content.pages.support.subTitles[1][
        this.$i18n.locale
      ],
      yaText: this.$store.state.content.pages.support.pageTexts[2][
        this.$i18n.locale
      ],
      subtitleGl: this.$store.state.content.pages.support.subTitles[2][
        this.$i18n.locale
      ],
      glText: this.$store.state.content.pages.support.pageTexts[3][
        this.$i18n.locale
      ],
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title,
        },
      ],
    }
  },
}
</script>

<style scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
}
</style>
