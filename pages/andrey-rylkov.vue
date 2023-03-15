<template>
  <section class="andrey-rylkov">
    <AndreyPromo
      :imageWhoIsS="imageWhoIsS"
      :imageWhoIsM="imageWhoIsM"
      :imageWhoIsL="imageWhoIsL"
      :imageAndrey="imageAndrey"
      :imageAndreyAlt="imageAndreyAlt"
    />
    <h1>{{ pageTitle }}</h1>
    <h2>{{ firstSubTitle }}</h2>
    <h2>{{ secondSubTitle }}</h2>
    <p>{{ firstPageText }}</p>

    <div>
      <iframe
        :src="videoLink"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
    <h2>Meta Tags</h2>
    <h3>Meta Title: {{ metaTitle }}</h3>
    <h3>Meta Description: {{ metaDescription }}</h3>
    <h3>Meta KeyWords: {{ metaKeyWords }}</h3>
    <ToggleLanguage />
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
      firstPageText: this.$store.state.content.pages.andrey.pageTexts[0][
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
  mounted() {
    console.log(this.firstSubTitle)
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
