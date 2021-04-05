<template>
  <div class="body">
    <Hamburger />
    <Header />
    <Nuxt />
    <Footer />
    <notifications group="notification" position="right bottom" :max="2">
      <template slot="body" slot-scope="{ item, close }">
        <div
          :class="`notification notification_type_${item.data.type}`"
          @click="close"
        >
          <!--           <div class="icon">
            <i class="icon-svg" @click="close"></i>
          </div> -->
          <div class="notification__content">
            <h4 class="notification__title" v-html="item.title" />
            <p class="notification__text" v-html="item.text" />
            <div
              v-if="item.data.action"
              class="notification__btn"
              v-html="item.data.actionBtnText"
              @click.prevent="item.data.action"
            />
          </div>
        </div>
      </template>
    </notifications>
  </div>
</template>
<script>
export default {
  methods: {
    clean(group) {
      this.$notify({ group, clean: true })
    },
  },
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
    setTimeout(() => {
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
    }, 10000)
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
.vue-notification-group {
  position: fixed;
  display: block;
  box-sizing: border-box;
  width: 320px;
  z-index: 10000;
}
.notification {
  width: 88%;
  box-sizing: border-box;
  min-height: 128px;
  border-radius: 20px;
  padding: 20px;
  margin: 24px;
  box-shadow: 0 0 4px #000;
  cursor: pointer;
}
.notification_type_news {
  background: #000;
  color: #fff;
}
.notification_type_info {
  background: #fff;
  color: #000;
}

.notification__content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-content: flex-start;
  justify-items: flex-start;
}
.notification__title {
  font-family: 'Vollkorn', sans-serif;
  font-size: 24px;
  font-weight: 700;
}
.notification__text {
  color: #666666;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
}
.notification__btn {
  cursor: pointer;
  display: block;
  font-family: 'Vollkorn', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #ff0000;
  text-decoration: underline;
}
</style>
