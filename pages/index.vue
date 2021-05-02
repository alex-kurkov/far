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
      <Support :isOnSupportPage="false" />
    </section>
    <ToggleLanguage />
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
import ToggleLanguage from '@/components/promo/ToggleLanguage'
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
    ToggleLanguage,
  },
  name: 'index',
  data() {
    return {
      title: this.$t('pages.index.metaTagsLocale.metaTitle'),
      description: this.$t('pages.index.metaTagsLocale.metaDescription'),
      keywords: this.$t('pages.index.metaTagsLocale.metaKeyWords'),
      imageMeta: this.$store.state.content.pages.index.metaTags
        ? this.$store.state.content.pages.index.metaTags['metaImage']
          ? baseUrl +
            this.$store.state.content.pages.index.metaTags['metaImage'].url
          : null
        : null,
    }
  },
  mounted() {
    console.log(this.$store.state.content.pages.index)
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
          content: this.imageMeta,
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
          content: this.imageMeta,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.imageMeta,
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
