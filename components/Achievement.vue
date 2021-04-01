<template>
  <section class="achievement">
      <h3 class="achievement__title">Итоги нашей работы в 2020</h3>
      <Achievements />
      <div class="achievement__gethelp-wrapper">
        <nuxt-link to="#" class="achievement__gethelp-link"
          >Получить помощь &rsaquo;</nuxt-link
        >
        <nuxt-link to="#" class="achievement__logo-link">
          <Icon name="logo" class="achievement__logo" />
        </nuxt-link>
      </div>
  </section>
</template>

<script>
import Achievements from '@/components/Achievements'
import Icon from '~/components/Icon'
export default {
  components: {
    Achievements,
    Icon,
  },
}
</script>

<style>
.achievement {
  width: 100vw;
  height: auto;
  background: #d5d5d5;
}

.achievement__title {
  font-family: 'Vollkorn', serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 0.8;
  padding: 16px;
  color: #d5d5d5;
  -webkit-text-stroke: 1px #000;
  text-align: left;
}
.achievement__gethelp-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 26px 8px 19px 16px;
  flex-direction: column;
}
.achievement__logo-link {
  align-self: flex-end;
}
.achievement__logo {
  width: 180px;
  height: auto;
  display: block;
  align-self: flex-end;
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
@media screen and (min-width: 768px) {
  .achievement__title {
    padding: 57px 102px 40px 53px;
    font-size: 90px;
    letter-spacing: -3px;
    -webkit-text-stroke: 2px #000;
  }

  .achievement__gethelp-wrapper {
    padding: 27px 42px 49px 53px;
    flex-direction: row;
  }

  .achievement__gethelp-link {
    font-size: 34px;
  }

  .achievement__logo {
    width: 231px;
    height: 178px;
  }
}

@media screen and (min-width: 1280px) {
  .achievement {
    width: 44%;
    min-height: 440px;
    max-width: 564px;
    justify-self: center;
  }

  .achievement__title {
    padding: 27px 116px 21px 34px;
    font-size: 63px;
    letter-spacing: -3px;
    -webkit-text-stroke: 2px #000;
  }

  .achievement__gethelp-wrapper {
    padding: 31px 0 38px;
  }

  .achievement__gethelp-link {
    font-size: 22px;
    margin: 0 0 0 136px;
  }

  .achievement__logo {
    display: none;
  }
}
</style>
