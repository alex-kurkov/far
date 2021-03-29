<template>
  <section class="achievement">
    <h3 class="achievement__title">Итоги нашей работы в 2020</h3>
    <Achievements />
    <div class="achievement__gethelp-wrapper">
<<<<<<< HEAD
      <nuxt-link to="#" class="achievement__gethelp">Получить помощь&rsaquo;</nuxt-link>
      <nuxt-link class="achievement__logo-link" to="#"> 
      <Icon name="logo" class="achievement__logo">ФАР ЛОГО</Icon>
      </nuxt-link>  
=======
      <nuxt-link to="#" class="achievement__gethelp"
        >Получить помощь&rsaquo;</nuxt-link
      >
      <nuxt-link to="#">
        <Icon name="logo" class="achievement__logo">ФАР ЛОГО</Icon>
      </nuxt-link>
>>>>>>> develop
    </div>
  </section>
</template>

<script>
import Icon from '~/components/Icon'
export default {
  components: {
    Icon,
  },
}
</script>

<style>
.achievement {
  width: calc(100% / 2);
  background: #d5d5d5;
}
.achievement__title {
  font-family: 'Vollkorn', serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.2;
  padding: 16px;
  color: #d5d5d5;
  text-shadow: 0 0 4px #000;
  -webkit-text-stroke: 2px #000;
  text-align: left;
}
.achievement__gethelp-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 8px 8px 24px;
}
.achievement__logo-link {
  display: none;
}
.achievement__logo {
  width: 136px;
  height: 104px;
}
.achievement__gethelp {
  font-family: 'Vollkorn', serif;
  color: #b23438;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
  text-decoration: underline;
  text-underline-offset: 4px;
}
@media screen and (max-width: 768px) {
  .achievement {
    width: 100%;
  }
  .achievement__logo-link {
    display: block;
  }
  .achievement__gethelp-wrapper {
    padding: 8px;
  }
}
</style>
