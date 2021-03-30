<template>
  <section class="achievement">
    <h3 class="achievement__title">Итоги нашей работы в 2020</h3>
    <Achievements />
    <div class="achievement__gethelp-wrapper">
      <nuxt-link to="#" class="achievement__gethelp-link"
        >Получить помощь &rsaquo;</nuxt-link
      >
      <nuxt-link to="#">
        <Icon name="logo" class="achievement__logo" />
      </nuxt-link>
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
  width: 44%;
  background: #d5d5d5;
  height: 440px;
}
.achievement__title {
  font-family: 'Vollkorn', serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 0.8;
  padding: 16px;
  color: #d5d5d5;
  /*   text-shadow: 0 0 4px #000; */
  -webkit-text-stroke: 1px #000;
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
  width: 180px;
  height: auto;
  display: none;
}
.achievement__gethelp-link {
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
    height: auto;
  }
  .achievement__logo {
    display: block;
  }
  .achievement__gethelp-wrapper {
    padding: 8px;
  }
}
</style>
