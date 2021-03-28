<template>
  <section class="achievement">
    <h3 class="achievement__title">Итоги нашей работы в 2020</h3>
    <Achievements />
    <div class="achievement__gethelp-wrapper">
      <nuxt-link to="#" class="achievement__gethelp">Получить помощь&rsaquo;</nuxt-link>
      <nuxt-link to="#"> 
      <Icon name="logo" class="achievement__logo">ФАР ЛОГО</Icon>
      </nuxt-link>  
    </div>
  </section>
</template>

<script>
import Icon from '~/components/Icon';
export default {
  components: {
    Icon,
  }
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
  color: #000;
  font-size: 40px;
  line-height: 1.2;
  padding: 16px;
}
.achievement__gethelp-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px;
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
}
</style>
