<template>
  <div class="body">
    <Hamburger />
    <Header />
    <Nuxt />
    <Footer />
    <Notifications />
  </div>
</template>
<script>
import Notifications from '../components/Notifications.vue'
export default {
  components: { Notifications },
  mounted() {
    this.$notify({
      group: 'notification',
      title: 'Cookies.',
      text: 'Сайт использует куки-файлы',
      closeOnClick: true,
      duration: -1,
      data: {
        type: 'info',
        action: () => {
          console.log('куки приняты, согласие записано в $store')
        },
        actionBtnText: 'Понятно',
      },
    })
    /* setTimeout(() => {
      this.$notify({
        group: 'notification',
        title: 'Подтвердите действие на странице',
        text:
          'Данные материалы изданы и(или) распространяются некоммерческой организацией, выполняющей функции иностранного агента',
        duration: -1,
        data: {
          type: 'info',
          action: () => {
            console.log('loading....')
          },
          actionBtnText: 'Скачать материал',
        },
      })
    }, 30000)
    setTimeout(() => {
      this.$notify({
        group: 'notification',
        title: 'Срочная новость',
        text: 'Я устал, я ухожу. Версия 2021 - реальность или миф?',
        closeOnClick: true,
        duration: 7000,
        data: {
          type: 'news',
        },
      })
    }, 10000) */
  },
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
  font-family: Vollkorn, Arial, sans-serif;
}
</style>
