<template>
  <section class="current-projects">
    <CurrentProjectsPromo />
    <CurrentProjectsMain />
    <SupportButton />
    <ToggleLanguage />
  </section>
</template>

<script>
import CurrentProjectsPromo from '@/components/CurrentProjectsPromo'
import SupportButton from '@/components/SupportButton'
import ToggleLanguage from '@/components/promo/ToggleLanguage'
import CurrentProjectsMain from '@/components/CurrentProjectsMain'
import { baseUrl } from '@/utils/api'
export default {
  components: { CurrentProjectsMain, CurrentProjectsPromo, SupportButton, ToggleLanguage },
  // data() {
  //   return {
  //     title: '',
  //     description: '',
  //     keywords: '',
  //     image: '',
  //   }
  // },
  // head() {
  //   return {
  //     title: this.title,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: this.description,
  //       },
  //       {
  //         hid: 'keywords',
  //         name: 'keywords',
  //         content: this.keywords,
  //       },
  //       {
  //         hid: 'twitter:title',
  //         name: 'twitter:title',
  //         content: this.title,
  //       },
  //       {
  //         hid: 'twitter:description',
  //         name: 'twitter:description',
  //         content: this.description,
  //       },
  //       {
  //         hid: 'twitter:image',
  //         name: 'twitter:image',
  //         content: this.image,
  //       },
  //       {
  //         hid: 'twitter:image:alt',
  //         name: 'twitter:image:alt',
  //         content: this.title,
  //       },
  //       {
  //         hid: 'og:title',
  //         property: 'og:title',
  //         content: this.title,
  //       },
  //       {
  //         hid: 'og:description',
  //         property: 'og:description',
  //         content: this.description,
  //       },
  //       {
  //         hid: 'og:image',
  //         property: 'og:image',
  //         content: this.image,
  //       },
  //       {
  //         hid: 'og:image:secure_url',
  //         property: 'og:image:secure_url',
  //         content: this.image,
  //       },
  //       {
  //         hid: 'og:image:alt',
  //         property: 'og:image:alt',
  //         content: this.title,
  //       },
  //     ],
  //   }
  // },
}
</script>

<style scoped>
.current-projects {
  background:
    linear-gradient(
      to right,
      var(--main-red) 50%,
      var(--simple-black) 0
    );
}
</style>
