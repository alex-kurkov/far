<template>
  <section class="about">
    <p>ЗДЕСЬ БУДЕТ БУДУЩАЯ СТРАНИЦА КОНТАКТЫ</p>
    <p>Текущий язык - {{ this.$i18n.locale }}</p>
    <span>{{ $t('about.title') }}&nbsp;</span>
    &#8212; {{ $t('about.subtitle') }}
    <SupportButton/>
    <ToggleLanguage/>
  </section>
</template>

<script>
import { baseUrl } from '@/utils/api'
import SupportButton from '@/components/SupportButton'
import ToggleLanguage from '@/components/promo/ToggleLanguage'
export default {
  components: {
    SupportButton, ToggleLanguage,
  },
  data() {
    return {
      title: this.$t('metaTags[2].title'),
      description: this.$t('metaTags[2].description'),
      keywords: this.$t('metaTags[2].keywords'),
      image: baseUrl + this.$t('metaTags[2].image.url'),
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
