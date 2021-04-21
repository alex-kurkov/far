<template>
  <section class="our-team-promo">
    <h1 class="our-team-promo__title">{{ title }}</h1>
    <img class="our-team-promo__blade" :src="image" :alt="title" />
    <!-- <nuxt-link to="#" class="our-team-promo__logo-link">
      <Icon name="logo" class="our-team-promo__logo" />
    </nuxt-link> -->
  </section>
</template>

<script>
import Icon from '../components/Icon'
export default {
  name: 'OurTeamPromo',
  components: {
    Icon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.our-team-promo {
  width: 100%;
  max-width: 1098px;
  min-height: auto;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
}

.our-team-promo__title {
  color: #b23438;
  min-height: 245px;
  font-family: 'Vollkorn', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 93px;
  line-height: 0.8;
  word-wrap: break-word;
  padding: 28px 19px 30px 13px;
  box-sizing: border-box;
  margin: 0;
  letter-spacing: -3px;
}

.our-team-promo__blade {
  color: white;
  width: 100%;
  height: auto;
}

.our-team-promo__logo-link {
  display: flex;
  justify-content: flex-end;
  width: 80px;
  height: 60px;
  position: absolute;
  bottom: -15px;
  right: 0;
  transition: opacity 0.5s linear;
  z-index: 10;
}

.our-team-promo__logo-link:hover {
  opacity: 0.7;
  cursor: pointer;
}

.our-team-promo__logo-link:focus {
  outline: none;
}

.our-team-promo__logo {
  width: 83px;
  height: auto;
}

@media screen and (min-width: 768px) {
  .our-team-promo {
    flex-direction: row;
    justify-content: space-between;
    min-height: 256px;
    padding: 8px 0 21px;
  }

  .our-team-promo__title {
    padding: 45px 0 0 31px;
    font-weight: 700;
  }

  .our-team-promo__blade {
    width: 269px;
    height: auto;
  }

  .our-team-promo__logo-link {
    bottom: -98px;
    right: 21px;
  }
}

@media screen and (min-width: 1280px) {
  .our-team-promo {
    min-height: 453px;
  }

  .our-team-promo__blade {
    width: 393px;
  }

  .our-team-promo__title {
    padding: 33px 0 0 38px;
    font-size: 150px;
    max-width: 700px;
  }

  .our-team-promo__logo-link {
    width: 100px;
    bottom: -87px;
    right: -49px;
  }

  .our-team-promo__logo {
    width: 100px;
    height: 84px;
  }
}
</style>
