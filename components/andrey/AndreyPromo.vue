<template>
  <section class="andrey-rylkov-promo">
    <div
      class="andrey-rylkov-promo__whois andrey-rylkov-promo__whois_visibility_320"
      :style="{ backgroundImage: `url(${imageWhoIsSmall})` }"
    />
    <div
      class="andrey-rylkov-promo__whois andrey-rylkov-promo__whois_visibility_1280"
      :style="{ backgroundImage: `url(${imageWhoIsLarge})`}"
    />
    <img
      class="andrey-rylkov-promo__andrey"
      :src="imageAndrey"
      :alt="imageWhoIsSmall"
    />
  </section>
</template>

<script>
import Icon from '../../components/Icon'
import { baseUrl } from '@/utils/api'
export default {
  name: 'OurTeamPromo',
  components: {
    Icon,
  },

  data() {
    return {
      imageWhoIsSmall:
        baseUrl + this.$store.state.content.andreyRylkov.whois320[0].url,
      imageWhoIsLarge:
        baseUrl + this.$store.state.content.andreyRylkov.whois1280[0].url,
      imageAndrey:
        baseUrl + this.$store.state.content.andreyRylkov.andrey[0].url,
    }
  },
}
</script>

<style scoped>
.andrey-rylkov-promo {
  width: 100%;
  max-width: 1098px;
  min-height: auto;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
}

.andrey-rylkov-promo__whois {
  min-height: 197px;
  box-sizing: border-box;
  margin: 0;
  background-color: #b23438;
  background-image: url('Bitmap3.svg');
  background-repeat: no-repeat;
  background-position: bottom 20px right 75px;
}

.andrey-rylkov-promo__whois_visibility_1280 {
  display: none;
}

.andrey-rylkov-promo__andrey {
  color: white;
  min-width: calc(100vw - 65 * (100vw - 768px) / 224);
  height: auto;
}

.andrey-rylkov-promo__logo-link {
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

.andrey-rylkov-promo__logo-link:hover {
  opacity: 0.7;
  cursor: pointer;
}

.andrey-rylkov-promo__logo-link:focus {
  outline: none;
}

.andrey-rylkov-promo__logo {
  width: 83px;
  height: auto;
}

@media screen and (min-width: 768px) {
  .andrey-rylkov-promo {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1280px;
  height: auto;
  }

  .andrey-rylkov-promo__whois {
    background-color: #b23438;
    width: 40%;
    height: auto;
    background-position: top 0 right 0;
  }


  .andrey-rylkov-promo__whois_visibility_320 {
    display: none;
  }

  .andrey-rylkov-promo__whois_visibility_1280 {
    display: block;
  }

  .andrey-rylkov-promo__andrey {
    min-width: unset;
    width: 60%;
    height: auto;
  }

  .andrey-rylkov-promo__logo-link {
    bottom: -98px;
    right: 21px;
  }
}

@media screen and (min-width: 1280px) {
  .andrey-rylkov-promo {
    width: 1103px;
    min-height: 524px;
  }

  .andrey-rylkov-promo__andrey {
    width: 653px;
  }

  .andrey-rylkov-promo__whois {
    width: 100%;
  }

  .andrey-rylkov-promo__logo-link {
    width: 100px;
    bottom: -87px;
    right: -49px;
  }

  .andrey-rylkov-promo__logo {
    width: 100px;
    height: 84px;
  }
}
</style>
