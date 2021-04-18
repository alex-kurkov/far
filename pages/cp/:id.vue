<template>
  <section class="custom-page">
    <div class="custom-page-container">
      <h1>{{ currentPage.customPageTitle[$i18n.locale] }}</h1>
      <p>{{ currentPage.customPageSubtitle[0][$i18n.locale] }}</p>
    </div>
    <ToggleLanguage/>
  </section>
</template>

<script>
import ToggleLanguage from '@/components/promo/ToggleLanguage'
export default {
  components: { ToggleLanguage },
  data() {
    return {
      // currentPage: {},
    }
  },
  computed: {
    currentPage() {
      const { id } = this.$route.params
      if (this.$store.state.content.customPages[id]) {
        console.log(this.$store.state.content.customPages[id])
        // возможно здесь надо написать getter
        return this.$store.state.content.customPages[id]
      } else {
        this.$router.push('/')
      }
    },
  },
  methods: {
    getCustomPageTitle() {
      if (this.currentPage.customPageTitle) {
        return this.currentPage.customPageTitle[this.$i18n.locale]
      } else {
        return ''
      }
    },
  },
  beforeCreate() {
    // const { id } = this.$route.params
    // console.log(id)
    // console.log(this.$store.state.content.customPages[id])
    // if (this.$store.state.content.customPages[id]) {
    //   console.log(this.$store.state.content.customPages[id])
    //   // возможно здесь надо написать getter
    //   this.currentPage = this.$store.state.content.customPages[id]
    // } else {
    //   console.log('unable to find custom page')
    //   this.$router.push('/')
    // }
  },
}
</script>

<style scoped>
.custom-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
