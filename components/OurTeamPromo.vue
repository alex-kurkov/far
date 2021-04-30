<template>
  <section class="our-team-promo">
    <h1
      class="our-team-promo__title"
      :style="{ backgroundImage: `url(${backgroundSvg})` }"
    >
      {{ title }}
    </h1>
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
    backgroundSvg: {
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
  background: 0 50%/304px 41px repeat space;
}

.our-team-promo__blade {
  color: white;
  width: 100%;
  height: auto;
}

@media screen and (min-width: 768px) {
  .our-team-promo {
    padding: 8px 0 21px;
  }

  .our-team-promo__title {
    padding: 45px 0 0 31px;
    font-weight: 700;
    font-size: 215px;
    background: 0 50%/575px 78px repeat space;
  }

  .our-team-promo__blade {
    height: 367px;
    object-fit: cover;
    object-position: 0 0;
  }

}

@media screen and (min-width: 1024px) {
  .our-team-promo {
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 0 21px;
    min-height: 453px;
  }

  .our-team-promo__blade {
    width: 393px;
    align-self: center;
  }

  .our-team-promo__title {
    padding: 33px 0 0 38px;
    font-size: 150px;
    max-width: 700px;
    width: 62%;
  }
}
</style>
