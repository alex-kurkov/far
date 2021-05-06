<template>
  <section class="achievement">
    <h3 class="achievement__title">
      {{ $t('pages.index.subTitlesLocale[12]') }}
    </h3>
    <Achievements />
    <div class="achievement__gethelp-wrapper">
      <nuxt-link :to="helpLink" class="achievement__gethelp-link"
        >{{ $t('pages.index.subTitlesLocale[13]') }} &rsaquo;</nuxt-link
      >
      <nuxt-link to="/support" class="achievement__logo-link">
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
  data() {
    return {
      helpLink: this.$t('pages.index.subTitlesLocale[14]'),
    }
  },
}
</script>

<style>
.achievement {
  width: 100vw;
  height: auto;
  background: var(--main-grey);
}

.achievement__title {
  font-family: 'Vollkorn', serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 0.8;
  padding: 16px;
  color: var(--main-grey);
  -webkit-text-stroke: 1px var(--simple-black);
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
  color: var(--main-red);
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
    -webkit-text-stroke: 2px var(--simple-black);
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
    -webkit-text-stroke: 2px var(--simple-black);
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
