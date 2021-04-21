<template>
  <section class="support-page">
    <Support :isOnSupportPage="true" />
    <article class="support-page__text support-page__text_type_intro">
      {{ introText }}
    </article>
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
    <h3 class="support-page__subtitle support-page__subtitle_type_gl"
      :style="{background: `50% 40%/8vw 13vw url(${flame}) #000 no-repeat`}">
      {{ subtitleGl }}
    </h3>
    <article class="support-page__text support-page__text_type_gl">
      {{ glText }}
    </article>
    <div class="support-page__smile-container">
      <SmileIcon class="support-page__smile"
        backgroundColor="#000"
        mainColor="#fff"/>
    </div>

  </section>
</template>

<script>
import { baseUrl } from '@/utils/api'
import Requisites from '@/components/Requisites'
import SmileIcon from '@/components/icons/smile'
export default {
  components: {
    Requisites, SmileIcon
  },
  data() {
    return {
      title: this.$store.state.content.pages.support.metaTags['metaTitle'][
        this.$i18n.locale
      ],
      description: this.$store.state.content.pages.support.metaTags[
        'metaDescription'
      ][this.$i18n.locale],
      keywords: this.$store.state.content.pages.support.metaTags[
        'metaKeyWords'
      ][this.$i18n.locale],
      image:
        baseUrl +
        this.$store.state.content.pages.support.metaTags['metaImage'].url,
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
      flame: baseUrl + this.$store.state.content.pages.support.images[1]['image'][0].url,
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
.support-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  color: #b23438;
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
}

.support-page__subtitle {
  color: #b23438;
  margin: 0;
  padding: 19px 0 0 0;
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
}

.support-page__subtitle_type_cf {

}

.support-page__subtitle_type_ya {
  padding: 5px 0 0 0;
}

.support-page__subtitle_type_gl {
  background: #000;
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
  border: 20px solid #b23438;
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
  position: absolute;
  top: 0;
  right:-50px;
}

@media screen and (min-width:768px) {
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

  .support-page__smile-container {
    min-height: 674px;
  }
  .support-page__smile {
    width: 674px;
  }

  .support-page__qr-code {
    border: 37px solid #b23438;
  }
}
</style>
