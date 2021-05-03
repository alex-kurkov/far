<template>
  <section class="support-page">
    <div class="support-page__container">
      <Support :isOnSupportPage="true" class="support-page__support" />
      <article class="support-page__text support-page__text_type_intro">
        {{ introText }}
        <span class="support-page__arrows"
          >&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</span
        >
      </article>
    </div>

    <div class="support-page__container">
      <div class="support-page__info">
        <h3 class="support-page__subtitle support-page__subtitle_type_cf">
          {{ subtitleCF }}
        </h3>
        <article class="support-page__text support-page__text_type_cf">
          <img :src="qrCode" class="support-page__qr-code" :alt="qrCodeAlt" />
          {{ cfText }}
        </article>
        <h3 class="support-page__subtitle support-page__subtitle_type_ya">
          {{ subtitleYa }}
        </h3>
        <article class="support-page__text support-page__text_type_cf">
          {{ yaText }}
        </article>
        <Requisites />
      </div>
      <div></div>
      <div class="support-page__smile-container">
        <article class="support-page__text support-page__text_type_gl">
          <h3
            class="support-page__subtitle support-page__subtitle_type_gl"
            :style="{
              backgroundImage: `url(${flame})`,
            }"
          >
            {{ subtitleGl }}
          </h3>
          {{ glText }}
        </article>
        <SmileIcon
          class="support-page__smile"
          backgroundColor="#000"
          mainColor="#fff"
        />
      </div>
    </div>
    <ToggleLanguage />
  </section>
</template>

<script>
import { baseUrl } from '@/utils/api'
import Requisites from '@/components/Requisites'
import SmileIcon from '@/components/icons/smile'
import ToggleLanguage from '../components/promo/ToggleLanguage.vue'
import Support from '@/components/Support'
export default {
  components: {
    Requisites,
    SmileIcon,
    ToggleLanguage,
    Support
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
      introText: this.$store.state.content.pages.support.pageTexts[0][
        this.$i18n.locale
      ],
      subtitleCF: this.$store.state.content.pages.support.subTitles[0][
        this.$i18n.locale
      ],
      cfText: this.$store.state.content.pages.support.pageTexts[1][
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
      qrCode:
        baseUrl +
        this.$store.state.content.pages.support.images[0]['image'][0].url,
      qrCodeAlt: this.$store.state.content.pages.support.images[0]['imageAlt'][
        this.$i18n.locale
      ],
      flame:
        baseUrl +
        this.$store.state.content.pages.support.images[1]['image'][0].url,
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
.support-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
}

.support-page__text {
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  padding: 19px;
  margin: 0;
  background: #000;
}

.support-page__text_type_intro {
  color: var(--main-red);
  font-style: italic;
  font-size: 18px;
  line-height: 1;
}

.support-page__text_type_cf {
  background: #fff;
  color: #000;
  padding: 19px 9px 19px 19px;
}

.support-page__text_type_gl {
  color: #fff;
  padding-top: 0;
}

.support-page__arrows {
  display: none;
  color: #fff;
  font-size: 36px;
  transform: translate(-88px, 47px);
  max-width: 204px;
}

.support-page__info {
  background: #fff;
}

.support-page__subtitle {
  color: var(--main-red);
  margin: 0;
  padding: 19px 0 0 0;
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
  text-align: center;
  background: #fff;
}

.support-page__subtitle_type_cf {
}

.support-page__subtitle_type_ya {
  padding: 5px 0 0 0;
}

.support-page__subtitle_type_gl {
  background: 50% 40%/8vw 16vw #000 no-repeat;
  width: 100%;
  padding-top: 40px;
  text-align: center;
  font-weight: 400;
  font-style: italic;
}

.support-page__qr-code {
  float: right;
  width: 44%;
  height: auto;
  border: 20px solid var(--main-red);
  margin: 0 0 12px 12px;
}

.support-page__smile-container {
  background: #000;
  position: relative;
  width: 100%;
  min-height: 354px;
}

.support-page__smile {
  width: 354px;
  height: auto;
  transform: translate(4%, 10%);
}

@media screen and (min-width: 768px) {
  .support-page__subtitle {
    font-size: 54px;
    padding: 52px 0 0 0;
  }

  .support-page__subtitle_type_ya {
    padding: 0;
  }

  .support-page__subtitle_type_gl {
    padding: 140px 0 0 0;
  }

  .support-page__text {
    padding: 52px;
    font-size: 33px;
  }

  .support-page__text_type_intro {
    font-size: 36px;
  }

  .support-page__text_type_gl {
    padding-top: 0;
  }

  .support-page__smile-container {
    min-height: 674px;
  }
  .support-page__smile {
    width: 674px;
    transform: translate(20%, 10%);
  }

  .support-page__qr-code {
    border: 37px solid var(--main-red);
  }
}

@media screen and (min-width: 1280px) {
  .support-page__container {
    display: flex;
    flex-direction: row;
    width: 100%;
    background: linear-gradient(to right, #000 50%, #fff 50%);
    justify-content: center;
  }

  .support-page__container:nth-of-type(2) {
    overflow: hidden;
    background: var(--main-red);
  }

  .support-page__text {
    padding: 27px 31px;
    font-size: 16px;
    line-height: 1.3;
  }

  .support-page__text_type_intro {
    order: 1;
    width: 508px;
    min-height: 655px;
    background: #cbcbcb;
    padding: 309px 110px 100px 133px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    color: #000;
  }

  .support-page__text_type_gl {
    padding: 0 57px;
  }

  .support-page__text_type_cf:first-of-type {
    padding-right: 239px;
    position: relative;
  }

  .support-page__arrows {
    display: flex;
  }

  .support-page__support {
    order: 2;
    width: 591px;
    min-height: 655px;
    padding-top: 83px;
  }

  .support-page__info {
    width: 508px;
    order: 3;
    min-height: 896px;
  }

  .support-page__subtitle {
    font-size: 39px;
    padding: 35px 0 0 0;
  }

  .support-page__subtitle_type_ya {
    padding: 0;
  }

  .support-page__subtitle_type_gl {
    text-align: left;
    background: 71% 40%/52px 79px #000 no-repeat;
  }

  .support-page__qr-code {
    width: 242px;
    border: 22px solid var(--main-red);
    position: absolute;
    z-index: 5;
    right: -23px;
  }

  .support-page__smile-container {
    width: 591px;
    order: 4;
    min-height: 896px;
    overflow: hidden;
  }

  .support-page__smile {
    transform: translate(5%, 5%);
  }
}
</style>
