<template>
  <section class="andrey-rylkov">
    <AndreyPromo
      :imageWhoIsS="imageWhoIsS"
      :imageWhoIsM="imageWhoIsM"
      :imageWhoIsL="imageWhoIsL"
      :imageAndrey="imageAndrey"
      :imageAndreyAlt="imageAndreyAlt"
      :currentBackgroundImage="currentBackgroundImage"
    />
    <div class="andrey-rylkov__container">
      <div
        class="andrey-rylkov__content"
        :style="{
          marginLeft: `${contentMargin}px`,
          marginRight: `${contentMargin}px`,
        }"
      >
        <h2 class="andrey-rylkov__subtitle andrey-rylkov__subtitle_size">
          {{ $t('pages.andrey.subTitlesLocale[0]') }}
          <a :href="url" class="andrey-rylkov__link">
            {{ $t('pages.andrey.subTitlesLocale[1]') }}&gt;&gt;</a
          >
        </h2>
        <p class="andrey-rylkov__text">
          {{ $t('pages.andrey.pageTextsLocale[0]') }}
        </p>
        <div class="andrey-rylkov__video-container">
          <p class="andrey-rylkov__title">
            {{ $t('pages.andrey.mainTitleLocale') }}
          </p>
          <p class="andrey-rylkov__title">
            {{ $t('pages.andrey.subTitlesLocale[2]') }}
          </p>
          <iframe
            :width="videoWidth"
            :height="videoHeight"
            :src="videoLink"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
        <p class="andrey-rylkov__text">
          {{ $t('pages.andrey.pageTextsLocale[1]') }}
        </p>
        <ToggleLanguage />
        <SupportButton />
      </div>
    </div>
  </section>
</template>

<script>
import AndreyPromo from '@/components/andrey/AndreyPromo'
import ToggleLanguage from '@/components/promo/ToggleLanguage'
import SupportButton from '@/components/SupportButton'
import { baseUrl } from '@/utils/api'
export default {
  components: { ToggleLanguage, AndreyPromo, SupportButton },
  data() {
    return {
      title: this.$t('pages.andrey.metaTagsLocale.metaTitle'),
      description: this.$t('pages.andrey.metaTagsLocale.metaDescription'),
      keywords: this.$t('pages.andrey.metaTagsLocale.metaKeyWords'),
      imageMeta: this.$store.state.content.pages.andrey.metaTags
        ? this.$store.state.content.pages.andrey.metaTags['metaImage']
          ? baseUrl +
            this.$store.state.content.pages.andrey.metaTags['metaImage'].url
          : null
        : null,
      videoWidth: this.videoWidth,
      videoHeight: this.videoHeight,
      contentMargin: this.contentMargin,
      currentBackgroundImage: this.imageWhoIsS,
      imageWhoIsS:
        baseUrl + this.$store.state.content.pages.andrey.images[0].image[0].url,
      imageWhoIsM:
        baseUrl + this.$store.state.content.pages.andrey.images[1].image[0].url,
      imageWhoIsL:
        baseUrl + this.$store.state.content.pages.andrey.images[2].image[0].url,
      imageAndrey:
        baseUrl + this.$store.state.content.pages.andrey.images[3].image[0].url,
      imageAndreyAlt: this.$t('pages.andrey.imageAltsLocale[3]'),
      url: this.$t('pages.andrey.subTitlesLocale[3]'),
      videoLink: this.$store.state.content.pages.andrey.videoLinks[0].videoLink,
    }
  },
  methods: {
    handleWindowResize() {
      if (window.innerWidth >= 1140) {
        this.currentBackgroundImage = this.imageWhoIsL
        this.videoWidth = 499
        this.videoHeight = 398
      } else if (window.innerWidth < 1140 && window.innerWidth >= 750) {
        this.currentBackgroundImage = this.imageWhoIsM
        this.contentMargin = 52
        this.videoWidth = window.innerWidth - 104
        this.videoHeight = (window.innerWidth - 104) / 1.77
      } else if (window.innerWidth < 750) {
        this.currentBackgroundImage = this.imageWhoIsS
        this.videoWidth = window.innerWidth - 34
        this.videoHeight = (window.innerWidth - 34) / 1.77
        this.contentMargin = 18
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
.andrey-rylkov {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.andrey-rylkov__title {
  font-size: 15px;
  line-height: 14px;
  color: var(--main-red);
  font-weight: 600;
  font-style: normal;
  font-family: 'Vollkorn', Arial, sans-serif;
  margin: 0;
  padding: 0 0 17px;
  background: #fff;
}

.andrey-rylkov__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.andrey-rylkov__subtitle {
  font-size: 15px;
  line-height: 15px;
  color: var(--simple-black);
  font-weight: 800;
  font-style: normal;
  font-family: 'Vollkorn', Arial, sans-serif;
  padding: 25px 0;
  align-self: flex-start;
  background: #fff;
}

.andrey-rylkov__subtitle_color_red {
  color: var(--main-red);
}

.andrey-rylkov__subtitle_size {
  width: 85%;
}

.andrey-rylkov__link {
  font-size: 15px;
  line-height: 1;
  color: #b23438;
  font-weight: 800;
  font-style: normal;
  font-family: 'Vollkorn', Arial, sans-serif;
}

.andrey-rylkov__text {
  font-size: 14px;
  line-height: 16px;
  color: #484848;
  font-weight: 400;
  font-family: 'Vollkorn', Arial, serif;
  padding: 0 0 30px;
  background: #fff;
}

.andrey-rylkov__text:last-of-type {
  padding-top: 20px;
}

.andrey-rylkov__video-container {
  background: #fff;
  width: 100%;
}

@media screen and (min-width: 768px) {
  .andrey-rylkov__subtitle {
    padding: 57px 0;
    font-size: 38px;
    line-height: 1;
  }

  .andrey-rylkov__link {
    font-size: 38px;
  }

  .andrey-rylkov__text {
    font-size: 33px;
    line-height: 1;
    padding: 0 0 60px;
  }

  .andrey-rylkov__text:last-of-type {
    padding-top: 21px;
  }

  .andrey-rylkov__title {
    padding: 0 0 47px 0;
    font-size: 33px;
    line-height: 1;
  }
}

@media screen and (min-width: 1280px) {
  .andrey-rylkov {
    background: linear-gradient(to right, var(--simple-black) 50%, #b23438 50%);
  }

  .andrey-rylkov__container {
    background: linear-gradient(to right, #b23438 50%, var(--light-grey) 50%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .andrey-rylkov__content {
    flex-direction: row;
    flex-wrap: wrap;
    background: #fff;
    max-width: 1100px;
  }

  .andrey-rylkov__subtitle {
    font-size: 22px;
    text-align: right;
    padding: 25px 80px 25px 0;
  }

  .andrey-rylkov__link {
    font-size: 22px;
  }

  .andrey-rylkov__subtitle_size {
    width: 1100px;
  }

  .andrey-rylkov__video-container {
    width: 502px;
    float: right;
    align-self: flex-start;
    order: 4;
    padding: 0 0 59px 0;
  }

  .andrey-rylkov__text {
    font-size: 22px;
    line-height: 1.3;
    padding: 0 65px 31px 38px;
  }

  .andrey-rylkov__text:last-of-type {
    order: 3;
    width: 527px;
    padding: 0 45px 59px 0;
    align-self: flex-start;
  }

  .andrey-rylkov__title {
    font-size: 22px;
    padding: 0 0 19px;
  }
}
</style>
