<template>
  <div class="body">
    <Hamburger />
    <Header />
    <Nuxt />
    <Footer />
    <notifications 
      classes="notifications-wrap notifications-news"
      group="breaking-news"
      closeOnClick="true" 
    />
    <notifications 
      classes="notifications-wrap notifications-info" 
      group="app-informer" 
      closeOnClick="true"
      duration="10000"
      max="1"
    />
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$notify({
        group: 'app-informer',
        title: 'Cookies',
        text: 'Сайт использует куки-файлы - разве? <a>Понятно</a>'
      })
    });
    setTimeout(() => {
      this.$notify({
        group: 'app-informer',
        title: 'Подтвердите действие на странице rylkov-fond.org.',
        text: 'Данные материалы изданы и (или) распространяются некоммерческой организацией, выполняющей функции иностранного агента. <a>Скачать материал</a>'
      })
    }, 5000)
  }
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
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  position: relative;
  font-family: Vollkorn, Arial, sans-serif;
}

.notifications-wrap {
  width: 300px;
  min-height: 128px;
  border-radius: 20px;
  padding: 20px;
  margin: 12px;
  position: fixed;
  right: 40px;
  bottom: 40px;
  transition: 0.3s;
  box-shadow: 0 0 4px #000;
  z-index: 20;
  cursor: pointer;
}
.notifications-wrap a {
  margin-top: 8px;
  display: block;
  font-family: 'Vollkorn', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #ff0000;
}
.notifications-news {
  background: #000;
  color: #fff;
}
.notifications-info {
  background: #fff;
  color: #000;
}
.notification-title {
  font-family: 'Vollkorn', sans-serif;
  font-size: 24px;
  font-weight: 700;
}
.notification-content {
  color: #666666;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
}
</style>
