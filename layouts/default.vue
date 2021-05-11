<template>
  <div class="body">
    <Hamburger />
    <Header />
    <Nuxt />
    <Footer />
    <Notification />
  </div>
</template>
<script>
import Notification from '../components/Notification.vue'
export default {
  components: { Notification },
  created() {
    this.$i18n.mergeLocaleMessage(
      'ru',
      this.$store.getters.getLocaleMessage('ru')
    )
    this.$i18n.mergeLocaleMessage(
      'en',
      this.$store.getters.getLocaleMessage('en')
    )
  },
  mounted() {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted')
    if (!cookiesAccepted) {
      this.$notify({
        group: 'notification',
        title: 'Cookies.',
        text: 'Сайт использует куки-файлы',
        closeOnClick: true,
        duration: -1,
        data: {
          type: 'info',
          action: () => {
            localStorage.setItem('cookiesAccepted', true)
            console.log('куки приняты, согласие записано в localStorage')
          },
          actionBtnText: 'Понятно',
        },
      })
    }
  },
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.body {
  display: block;
  margin: 0 auto;
  /* max-width: 1280px; */
  width: 100%;
  font-family: 'Vollkorn', Arial, Helvetica, serif;
}
</style>
