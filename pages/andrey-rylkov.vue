<template>
  <section class="andrey-rylkov">
    <AndreyPromo
      :imageWhoIsS="imageWhoIsS"
      :imageWhoIsM="imageWhoIsM"
      :imageWhoIsL="imageWhoIsL"
      :imageAndrey="imageAndrey"
      :imageAndreyAlt="imageAndreyAlt"
      :currentBackgroundImage='currentBackgroundImage'
    />
    <div class="andrey-rylkov__content" :style="{ marginLeft: `${contentMargin}px`, marginRight:`${contentMargin}px`  }">

<!--      <i18n tag="h2" path="footer.license" class="footer__license">-->
<!--        <template v-slot:license>-->
<!--          <a-->
<!--            class="footer__link"-->
<!--            href="https://creativecommons.org/licenses/by/3.0/"-->
<!--          >-->
<!--            {{ license }}-->
<!--          </a>-->
<!--        </template>-->
<!--      </i18n>-->





      <h2 class="andrey-rylkov__subtitle andrey-rylkov__subtitle_size">{{ firstSubTitle }}</h2>
      <h2 class="andrey-rylkov__subtitle andrey-rylkov__subtitle_color_red">
        {{ secondSubTitle }}
      </h2>
      <p class="andrey-rylkov__text">{{ firstPageText }}</p>
      <h1 class="andrey-rylkov__title">{{ pageTitle }}</h1>
      <h1 class="andrey-rylkov__title">{{ mainSubTitle }}</h1>
      <div>
        <iframe
          :width='videoWidth'
          :height='videoHeight'
          :src="videoLink"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
      <p class="andrey-rylkov__text">{{ secondPageText }}</p>
      <!--    <h2>Meta Tags</h2>-->
      <!--    <h3>Meta Title: {{ metaTitle }}</h3>-->
      <!--    <h3>Meta Description: {{ metaDescription }}</h3>-->
      <!--    <h3>Meta KeyWords: {{ metaKeyWords }}</h3>-->
      <ToggleLanguage />
    </div>
  </section>
</template>

<script>
import AndreyPromo from '@/components/andrey/AndreyPromo'
import ToggleLanguage from '@/components/promo/ToggleLanguage'
import { baseUrl } from '@/utils/api'
export default {
  components: { ToggleLanguage, AndreyPromo },
  data() {
    return {
      videoWidth: this.videoWidth,
      videoHeight: this.videoHeight,
      contentMargin: this.contentMargin,

      currentBackgroundImage: this.imageWhoIsS,
      title: this.$t('metaTags[5].title'),
      description: this.$t('metaTags[5].description'),
      keywords: this.$t('metaTags[5].keywords'),
      imageWhoIsS:
        baseUrl + this.$store.state.content.pages.andrey.images[0].image[0].url,
      imageWhoIsM:
        baseUrl + this.$store.state.content.pages.andrey.images[1].image[0].url,
      imageWhoIsL:
        baseUrl + this.$store.state.content.pages.andrey.images[2].image[0].url,
      imageAndrey:
        baseUrl + this.$store.state.content.pages.andrey.images[3].image[0].url,
      imageAndreyAlt: this.$store.state.content.pages.andrey.images[3].imageAlt[
        this.$i18n.locale
      ],
      pageTitle: this.$store.state.content.pages.andrey.mainTitle[
        this.$i18n.locale
      ],
      firstSubTitle: this.$store.state.content.pages.andrey.subTitles[0][
        this.$i18n.locale
      ],
      secondSubTitle: this.$store.state.content.pages.andrey.subTitles[1][
        this.$i18n.locale
      ],
      mainSubTitle: this.$store.state.content.pages.andrey.subTitles[2][
        this.$i18n.locale
      ],
      firstPageText: this.$store.state.content.pages.andrey.pageTexts[0][
        this.$i18n.locale
      ],
      secondPageText: this.$store.state.content.pages.andrey.pageTexts[1][
        this.$i18n.locale
      ],
      metaTitle: this.$store.state.content.pages.andrey.metaTags.metaTitle[
        this.$i18n.locale
      ],
      metaDescription: this.$store.state.content.pages.andrey.metaTags
        .metaDescription[this.$i18n.locale],
      metaKeyWords: this.$store.state.content.pages.andrey.metaTags
        .metaKeyWords[this.$i18n.locale],
      videoLink: this.$store.state.content.pages.andrey.videoLinks[0].videoLink,
    }
  },
  methods: {
    handleWindowResize() {
      if (window.innerWidth >= 1140) {
        this.currentBackgroundImage = this.imageWhoIsL
      } else if (window.innerWidth < 1140 && window.innerWidth >= 750) {
        this.currentBackgroundImage = this.imageWhoIsM
      } else if (window.innerWidth < 750) {
        this.currentBackgroundImage = this.imageWhoIsS
        this.videoWidth = window.innerWidth - 34
        this.videoHeight = (window.innerWidth - 34) / 1.77
        this.contentMargin = 17
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
    this.handleWindowResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleWindowResize)
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
.andrey-rylkov {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.andrey-rylkov__title {
  font-size: 15px;
  line-height: 14px;
  color: #b23438;
  font-weight: 600;
  font-style: italic;
  font-family: 'Vollkorn', Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.andrey-rylkov__subtitle {
  font-size: 15px;
  line-height: 15px;
  color: #000000;
  font-weight: 800;
  font-style: italic;
  font-family: 'Vollkorn', Arial, sans-serif;
}

.andrey-rylkov__subtitle_color_red {
  color: #b23438;
}

.andrey-rylkov__subtitle_size {
  width: 85%;
}

.andrey-rylkov__text {
  font-size: 14px;
  line-height: 16px;
  color: #484848;
  font-weight: 400;
  font-family: 'Vollkorn', Arial, sans-serif;
}

.andrey-rylkov__content {
}

.our-team__members {
  list-style: none;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (min-width: 1280px) {
  .our-team__members {
    background: linear-gradient(to right, #727272 50%, #b23438 50%);
  }
}
</style>
