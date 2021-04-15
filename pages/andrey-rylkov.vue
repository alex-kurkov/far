<template>
  <section class="andrey-rylkov">
    <AndreyPromo :imageAndrey="imageAndrey" />
  </section>
</template>

<script>
import AndreyPromo from '@/components/andrey/AndreyPromo'
import { baseUrl } from '@/utils/api'
export default {
  components: { AndreyPromo },
  data() {
    return {
      title: this.$t('metaTags[5].title'),
      description: this.$t('metaTags[5].description'),
      keywords: this.$t('metaTags[5].keywords'),
      imageAndrey:
        baseUrl + this.$store.state.content.andreyRylkov.andrey[0].url,
      imageWhoIsSmall:
        baseUrl + this.$store.state.content.andreyRylkov.whois320[0].url,
      imageWhoIsLarge:
        baseUrl + this.$store.state.content.andreyRylkov.whois1280[0].url,
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
  .andrey-rylkov {
    background: linear-gradient(to right, #000 50%, #b23438 50%);
  }
  .our-team__members {
    background: linear-gradient(to right, #727272 50%, #b23438 50%);
  }
}
</style>
