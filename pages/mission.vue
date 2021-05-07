<template>
  <section class="about">
    <div class="about__title-container">
      <HeavilyUnderlinedTitle
        class="about__title"
        :style="promoImage"
        lineColor="var(--main-red)"
        :title="pageTitle"
      />
    </div>
    <article class="about__article" v-html="article"></article>
    <SupportButton />
    <ToggleLanguage />
  </section>
</template>

<script>
import { baseUrl } from '@/utils/api'
import SupportButton from '@/components/SupportButton'
import ToggleLanguage from '@/components/promo/ToggleLanguage'
import HeavilyUnderlinedTitle from '../components/HeavilyUnderlinedTitle'
export default {
  components: {
    HeavilyUnderlinedTitle,
    SupportButton,
    ToggleLanguage,
  },
  data() {
    return {
      title: this.$t('pages.mission.metaTagsLocale.metaTitle'),
      description: this.$t('pages.mission.metaTagsLocale.metaDescription'),
      keywords: this.$t('pages.mission.metaTagsLocale.metaKeyWords'),
      imageMeta: this.$store.state.content.pages.mission.metaTags
        ? this.$store.state.content.pages.mission.metaTags['metaImage']
          ? baseUrl +
            this.$store.state.content.pages.mission.metaTags['metaImage'].url
          : null
        : null,
      pageTitle: this.$t('pages.mission.mainTitleLocale'),
      // promoImage: { background: `center/cover url(${this.$t('about.image')})` },
      promoImage: {
        background: `center/cover url(${
          baseUrl +
          this.$store.state.content.pages.mission.images[0].image[0].url
        })`,
      },
      // article: this.$t('about.article'),
      article: this.$t('pages.mission.pageTextsLocale[0]'),
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

<style scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.about__title-container {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about__title {
  width: 100%;
  min-height: 345px;
  margin: 0;
  padding: 17px 133px 0 21px;
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-style: italic;
  font-weight: 400;
  line-height: 0.8;
  font-size: 115px;
  color: var(--simple-white);
}

.about__article {
  padding: 32px;
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 1.4;
  min-height: 500px;
  background: var(--simple-white);
}

@media screen and (min-width: 768px) {
  .about__title {
    padding: 100px 0 0 54px;
    font-style: normal;
    font-weight: 500;
    font-size: 173px;
    line-height: 0.7;
    color: transparent;
    -webkit-text-stroke: 2px var(--simple-white);
    letter-spacing: -12px;
  }

  .about__article {
    padding: 54px;
    font-size: 33px;
    color: var(--blacky-grey);
  }
}

@media screen and (min-width: 1280px) {
  .about {
    background: linear-gradient(
      to right,
      var(--main-red) 50%,
      var(--light-grey) 50%
    );
  }

  .about__title-container {
    background: linear-gradient(
      to right,
      var(--simple-black) 50%,
      var(--simple-white) 50%
    );
  }

  .about__title {
    font-size: 247px;
    min-height: 419px;
    padding: 136px 0 0 92px;
    max-width: 1184px;
    margin-right: 94px;
    background-color: linear-gradient(
      to right,
      var(--simple-black) 50%,
      var(--simple-white) 50%
    );
    -webkit-text-stroke: 3px var(--simple-white);
  }

  .about__article {
    max-width: 1094px;
    font-size: 22px;
  }
}
</style>
