<template>
  <section class="mission">
    <div class="mission__sideblock"></div>
    <div class="mission__content">
      <div class="mission__info-wrapper">
        <h2
          class="mission__title"
          v-html="$t('pages.index.subTitlesLocale[9]')"
        ></h2>
        <p
          class="mission__text"
          v-html="$t('pages.index.pageTextsLocale[0]')"
        ></p>
      </div>
      <nuxt-link class="mission__about-link" :to="aboutLink"
        >{{ $t('pages.index.subTitlesLocale[10]') }} &rsaquo;</nuxt-link
      >
      <div class="mission__graphics-wrapper">
        <div class="mission__graphics-road"><Icon name="road" /></div>
        <div class="mission__graphics-logo"><FarLogo /></div>
      </div>
    </div>
  </section>
</template>

<script>
import Icon from '@/components/Icon'
import FarLogo from '@/components/icons/FarLogo'
export default {
  name: 'Mission',
  components: { Icon, FarLogo },
  data() {
    return {
      aboutLink: this.$t('pages.index.subTitlesLocale[11]'),
    }
  },
}
</script>

<style scoped>
.mission {
  width: 100vw;
  background: var(--simple-white);
  height: auto;
  display: flex;
  justify-content: flex-end;
}

.mission__sideblock {
  width: 100px;
  min-height: 440px;
  background: var(--main-grey);
  display: none;
}
.mission__info-wrapper {
  display: block;
  padding: 12px;
  text-align: left;
  overflow: hidden;
  max-width: 445px;
}
.mission__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.mission__title {
  font-family: 'Vollkorn', serif;
  font-size: 27px;
  line-height: 0.8;
  font-weight: 600;
  display: inline;
  white-space: pre-wrap;
  text-transform: uppercase;
  /* text-decoration: underline solid 6px var(--main-red); */
}

.mission__title::before {
  content: '';
  height: 8px;
  width: 89px;
  position: absolute;
  background-color: var(--another-red);
  top: 24px;
  left: 12px;
}

.mission__title::after {
  content: '';
  height: 8px;
  width: 121px;
  position: absolute;
  background-color: var(--another-red);
  top: 44px;
  left: 12px;
}

.mission__text {
  font-family: 'Vollkorn', serif;
  font-size: 16px;
  font-weight: 400;
  margin-top: 12px;
}
.mission__text:first-of-type {
  display: inline;
  margin-top: 0;
}

.mission__about-link {
  font-family: 'Vollkorn', serif;
  color: var(--main-red);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
  text-decoration: underline;
  text-underline-offset: 4px;
  padding-left: 12px;
  display: block;
}
.mission__graphics-wrapper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: flex-start;
}
.mission__graphics-road {
  width: 50%;
}
.mission__graphics-logo {
  width: 180px;
  height: auto;
  align-self: center;
  transform: translateX(-20px);
}

@media screen and (min-width: 768px) {
  .mission__title {
    font-size: 54px;
  }

  .mission__info-wrapper {
    max-width: 800px;
    padding: 45px 53px 21px;
  }

  .mission__title::before {
    height: 11px;
    width: 177px;
    top: 69px;
    left: 52px;
  }

  .mission__title::after {
    height: 11px;
    width: 242px;
    top: 113px;
    left: 52px;
  }

  .mission__text {
    font-size: 32px;
    margin-top: 32px;
  }

  .mission__about-link {
    font-size: 34px;
    align-self: flex-end;
    padding: 0 53px 0 0;
  }

  .mission__graphics-wrapper {
    justify-content: space-between;
  }

  .mission__graphics-logo {
    width: 227px;
    height: 160px;
  }
}

@media screen and (min-width: 1280px) {
  .mission {
    width: 56%;
    min-height: 597px;
    max-width: 717px;
    justify-self: center;
  }

  .mission__container {
    width: 716px;
    display: flex;
    background: var(--simple-white);
    justify-content: flex-end;
  }

  .mission__sideblock {
    display: block;
  }

  .mission__title {
    font-size: 22px;
  }

  .mission__info-wrapper {
    max-width: 800px;
    padding: 48px 79px 0 89px;
  }

  .mission__title::before {
    height: 7px;
    width: 77px;
    top: 58px;
    left: 87px;
  }

  .mission__title::after {
    height: 7px;
    width: 101px;
    top: 79px;
    left: 87px;
  }

  .mission__text {
    font-size: 22px;
    margin-top: 23px;
  }

  .mission__about-link {
    display: none;
  }

  .mission__graphics-wrapper {
    justify-content: flex-start;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .mission__graphics-logo {
    width: 146px;
    height: 99px;
  }

  .mission__graphics-road {
    width: 343px;
    height: 281px;
  }
}
</style>
