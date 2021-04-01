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
      group="app-informer"
      :duration="50000"
      :width="500"
      animation-name="v-fade-left"
      closeOnClick="true"
      position="'top right'"
      max="2"
    >
      <template slot="body" slot-scope="props">
          <div class="notifications-wrap notifications-news">
          <div class="custom-template-icon">
            <i class="icon ion-android-checkmark-circle"></i>
          </div>
          <div class="custom-template-content">
            <div class="custom-template-title">
              {{ props }}

              <p>
                Random number: wfwewrandooom
              </p>
            </div>
            <div class="custom-template-text"
                  v-html="ewddwe"></div>
          </div>
          <button class="custom-template-close"
                @click="props.item.data.approve">
            <i class="icon ion-android-close"></i>НАЖМИ МЕНЯ
          </button>
        </div>
      </template>
    </notifications>
   
  </div>
</template>
<script>
export default {
   methods: {
    console() {
      console.log('clicked!')
    },
    show (group, type = '') {
      const text = `
        This is notification text!
        <br>
        Date: ${new Date()}
      `
      this.$notify({
        group,
        title: `Test ${type} notification #${this.id++}`,
        text,
        type,
        data: {
          randomNumber: Math.random()
        }
      })
    },
    clean (group) {
      this.$notify({ group, clean: true })
    }
  },
  mounted() {
    /* show('app-informer') */
    this.$notify({
      group: 'app-informer',
      title: 'Cookies',
      text: {s: 'Сайт использует куки-файлы - разве?', action: function() {console.log(this)}},
      data: {
        approve: () => {console.log('Понятно')},
        approveText: 'Gjyznyj'
        },
    });
    this.$notify({
      group: 'app-informer',
      title: 'Cookies',
      text: {s: 'Сайт использует куки-файлы - разве?', action: function() {console.log(this)}},
      data: {
        approve: () => {console.log('Понятно')},
        approveText: 'Gjyznyj'
        },
    })
/*     setTimeout(() => {
      this.$notify({
        group: 'app-informer',
        title: 'Подтвердите действие на странице rylkov-fond.org.',
        text: 'Данные материалы изданы и (или) распространяются некоммерческой организацией, выполняющей функции иностранного агента.',
        action: 'Понятно',
        fn() {console.log('я понял и иду на это!')}
      })
    }, 5000) */
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
  position: absolute;
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
