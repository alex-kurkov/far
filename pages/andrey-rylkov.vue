<template>
  <section class="about">
    <p>{{ $t('text.aboutPageTitle') }}</p>

    <ul>
      <li>Кто такой Андрей Рыльков</li>
      <li>Миссия</li>
      <li>Команда</li>
      <li>Проекты и отчеты</li>
      <li>Годовые отчеты</li>
      <li>Учредительные документы</li>
    </ul>
  </section>
</template>

<script>
import { baseUrl } from '@/utils/api'
export default {
  data() {
    return {
      title: this.$t('metaTags[1].title'),
      description: this.$t('metaTags[1].description'),
      keywords: this.$t('metaTags[1].keywords'),
      image: baseUrl + this.$t('metaTags[1].image.url'),
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
