<template>
  <section class="help">
    <h3 class="help__title">{{ $t('pages.index.subTitlesLocale[16]') }}</h3>
    <p class="help__text">
      {{ $t('pages.index.pageTextsLocale[1]') }}
    </p>
    <Icon name="blade" class="help__blade"></Icon>
    <nuxt-link :to="helpLink" class="help__link"
      >{{ this.$t('pages.index.subTitlesLocale[19]') }} &rsaquo;</nuxt-link
    >
    <a :href="telLink" class="help__ellipse help__ellipse_type_tel">{{
      this.$t('pages.index.subTitlesLocale[18]')
    }}</a>
    <a
      :href="emailLink"
      target="_blank"
      rel="noreferrer noopener"
      class="help__ellipse help__ellipse_type_email"
      >{{ $t('pages.index.subTitlesLocale[17]') }}</a
    >
    <nuxt-link to="/support" class="help__logo-link">
      <Icon name="logo" class="help__logo" />
    </nuxt-link>
    <p class="help__side-text">TELEGRAM/WHATSAPPMAIL</p>
    <!--    <p class="help__side-text">{{ $t ('pages.index.subTitlesLocale[15]') }}</p>-->
  </section>
</template>

<script>
import Icon from '~/components/Icon'
export default {
  name: 'Help',
  components: {
    Icon,
  },
  data() {
    return {
      helpLink: this.$t('pages.index.subTitlesLocale[20]'),
      telLink: 'tel:' + this.$t('pages.index.subTitlesLocale[18]'),
      emailLink: 'mailto:' + this.$t('pages.index.subTitlesLocale[17]'),
    }
  },
}
</script>

<style scoped>
.help {
  width: 100%;
  height: auto;
  background: var(--simple-white);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.help__title {
  background: var(--main-red);
  min-height: 92px;
  width: 100%;
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 0.75;
  margin: 0;
  padding: 16px;
  text-shadow: -1px 0 var(--simple-white), 0 1px var(--simple-white),
    1px 0 var(--simple-white), 0 -1px var(--simple-white);
  mix-blend-mode: multiply;
  color: var(--main-red);
  text-align: left;
}

.help__text {
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-weight: 400;
  line-height: 1.1;
  text-align: left;
  color: var(--blacky-grey);
  padding: 28px 78px 28px 16px;
}

.help__blade {
  position: absolute;
  right: -48px;
  top: -14px;
  width: 168px;
  height: auto;
}

.help__link {
  padding: 0;
  margin: 0 0 39px 16px;
  color: var(--main-red);
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-weight: 800;
  font-size: 17px;
  line-height: 1.5;
  text-decoration: none;
  border-bottom: 1px solid var(--main-red);
  transition: opacity 0.5s linear;
}

.help__link:hover {
  opacity: 0.7;
  cursor: pointer;
}

.help__link:focus {
  outline: none;
}

.help__ellipse {
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-weight: 700;
  width: 100%;
  border-radius: 50%;
  background: var(--light-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: var(--simple-black);
  transition: opacity 0.5s linear;
}

.help__ellipse:hover {
  opacity: 0.7;
  cursor: pointer;
}

.help__ellipse:focus {
  outline: none;
}

.help__ellipse_type_tel {
  min-height: 70px;
  background: var(--simple-black);
  color: var(--simple-white);
  font-family: 'Tomorrow Wind', Arial, sans-serif;
  font-size: 50px;
  font-weight: 400;
  line-height: 0.7;
  margin-bottom: 2px;
}

.help__ellipse_type_email {
  min-height: 59px;
  font-size: 17px;
  line-height: 1.8;
  z-index: 10;
}

.help__logo-link {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: auto;
  padding: 28px 8px 52px 0;
  transition: opacity 0.5s linear;
}

.help__logo-link:hover {
  opacity: 0.7;
  cursor: pointer;
}

.help__logo-link:focus {
  outline: none;
}

.help__logo {
  width: 180px;
  height: auto;
}

.help__side-text {
  position: absolute;
  transform: rotate(-90deg);
  bottom: 290px;
  right: -219px;
  font-family: 'Vollkorn', Arial, Helvetica, serif;
  font-weight: 700;
  font-size: 34px;
  font-style: italic;
  line-height: 0.9;
  color: transparent;
  -webkit-text-stroke: 1px var(--main-red);
}

@media screen and (min-width: 768px) {
  .help__title {
    font-size: 90px;
    padding: 32px 294px 39px 53px;
    letter-spacing: -3px;
  }

  .help__blade {
    width: 367px;
    right: -48px;
    top: -22px;
    z-index: 15;
  }

  .help__text {
    width: 60%;
    font-size: 32px;
    line-height: 1.1;
    padding: 54px 0 56px 53px;
  }

  .help__link {
    margin: 0 0 24px 53px;
    font-size: 34px;
    line-height: 1.5;
  }

  .help__ellipse_type_tel {
    font-size: 121px;
    min-height: 166px;
  }

  .help__ellipse_type_email {
    font-size: 40px;
    min-height: 141px;
    margin-bottom: 63px;
  }

  .help__side-text {
    font-size: 67px;
    bottom: 447px;
    right: -426px;
  }

  .help__logo-link {
    display: none;
  }
}

@media screen and (min-width: 1280px) {
  .help {
    width: 44%;
    justify-self: flex-end;
    /* order: 7; */
    order: 2;
    max-width: 564px;
  }

  .help__title {
    padding: 15px 244px 26px 34px;
    font-size: 63px;
  }

  .help__blade {
    width: 288px;
    right: -80px;
    top: -70px;
  }

  .help__text {
    width: 70%;
    font-size: 22px;
    line-height: 1;
    padding: 40px 0 76px 136px;
  }

  .help__link {
    font-size: 22px;
    line-height: 1.9;
    margin: 0 0 110px 136px;
  }

  .help__logo-link {
    display: block;
    position: absolute;
    padding: 0;
    width: 150px;
    bottom: 246px;
    right: 56px;
  }

  .help__logo {
    width: 150px;
    height: 100px;
  }

  .help__ellipse_type_tel {
    min-height: 97px;
    font-size: 75px;
  }

  .help__ellipse_type_email {
    min-height: 101px;
    font-size: 25px;
    margin: 4px 0 0 0;
  }

  .help__side-text {
    font-size: 73px;
    font-weight: 700;
    font-style: normal;
    bottom: 488px;
    right: -12px;
    clip: rect(auto, 673px, auto, auto);
  }
}
</style>
