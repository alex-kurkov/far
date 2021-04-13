<template>
  <div class="container">
    <About />
    <Promo />
    <Intro />
    <section class="container__info">
      <Mission />
      <Achievement />
    </section>
    <section class="container__donations">
      <Help />
      <Support />
    </section>
  </div>
</template>

<script>
import About from '@/components/About'
import Achievement from '@/components/Achievement'
import Help from '@/components/Help'
import Intro from '@/components/Intro'
import Mission from '@/components/Mission'
import Promo from '@/components/Promo'
import SubMenu from '@/components/SubMenu'
import Support from '@/components/Support'
import { baseUrl } from '@/utils/api'

export default {
  components: {
    Support,
    SubMenu,
    Help,
    Achievement,
    Mission,
    Intro,
    Promo,
    About,
  },
  data() {
    return {
      // перенес в тело head() и перестали сыпаться такие warnings:
      // [vue-i18n] Cannot translate the value of keypath 'metaTags[0].image.url'.
      // title: this.$t('metaTags[0].title'),
      // description: this.$t('metaTags[0].description'),
      // keywords: this.$t('metaTags[0].keywords'),
      // image: baseUrl + this.$t('metaTags[0].image.url'),
    }
  },
  mounted() {},
  head() {
    return {
      title: this.$t('metaTags[0].title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('metaTags[0].description'),
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('metaTags[0].keywords'),
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$t('metaTags[0].title'),
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('metaTags[0].description'),
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: baseUrl + this.$t('metaTags[0].image.url'),
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.$t('metaTags[0].title'),
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('metaTags[0].title'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('metaTags[0].description'),
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: baseUrl + this.$t('metaTags[0].image.url'),
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: baseUrl + this.$t('metaTags[0].image.url'),
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.$t('metaTags[0].title'),
        },
      ],
    }
  },
}
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  flex-wrap: wrap;
  overflow: hidden;
}

.container__info {
  display: flex;
  flex-direction: column;
}

.container__donations {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}

@media screen and (min-width: 1280px) {
  .container__info {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    background: linear-gradient(to right, #d5d5d5 50%, #b23438 50%);
  }

  .container__donations {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    background: linear-gradient(to right, #000 50%, #d5d5d5 50%),
      linear-gradient(to right, #000 50%, #fff 50%);
    background-repeat: no-repeat;
    background-size: 100vw 615px;
    background-position: bottom right, 0 0;
  }
}
</style>
