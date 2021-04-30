<template>
  <div class="sup-button">
    <NuxtLink to="/support" class="sup-button__link">
      <span class="sup-button__text">Поддержать</span>
      <img class="sup-button__heart" :src="image" />
      <img class="sup-button__logo" :src="logo"/>
    </NuxtLink>
  </div>
</template>

<script>
import { baseUrl } from '@/utils/api'
import FarLogo from './icons/FarLogo'
export default {
  components: { FarLogo },
  name: 'SupportButton',
  data() {
    return {
      image: baseUrl + this.$store.state.content.support.buttonImage[0].url,
      logo: baseUrl + this.$store.state.content.support.buttonImage[1].url,
    }
  },
}
</script>

<style scoped>
.sup-button {
  position: fixed;
  top: 55%;
  right: 0;
  z-index: 10;
}

.sup-button__link {
  background: #9c212a;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  text-decoration: none;
  padding: 2px 0 6px;
  transition: opacity 0.5s linear;
}

.sup-button__link:hover {
  opacity: 0.7;
  cursor: pointer;
}

.sup-button__link:focus {
  outline: none;
}

.sup-button__text {
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  color: #ebd3d4;
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.1;
  text-transform: uppercase;
  font-style: italic;
  margin: 0;
  padding: 0;
  text-align: center;
}

.sup-button__heart {
  position: absolute;
  bottom: -16px;
  left: 0;
  width: 24px;
  height: 21px;
  font-size: 34px;
}

.sup-button__logo {
  display: none;
}

@media screen and (min-width: 768px) {
  .sup-button__link {
    min-width: 54px;
    padding: 5px 0 15px;
  }

  .sup-button__text {
    font-size: 38px;
  }

  .sup-button__heart {
    width: 54px;
    height: 49px;
    bottom: -35px;
  }
}

@media screen and (min-width: 1280px) {
  .sup-button__link {
    width: 120px;
    height: 78px;
    background: none;
  }

  .sup-button__logo {
    display: block;
    width: 120px;
    height: 78px;
  }

  .sup-button__heart {
    display: none;
  }

  .sup-button__text {
    display: none;
  }
}
</style>