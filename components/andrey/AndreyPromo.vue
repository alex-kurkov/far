<template>
  <section class="andrey-rylkov-promo">
    <div
      class="andrey-rylkov-promo__whois"
      :style="{ backgroundImage: `url(${currentBackgroundImage})` }"
    />
    <img
      class="andrey-rylkov-promo__andrey"
      :src="imageAndrey"
      :alt="imageAndreyAlt"
    />
  </section>
</template>

<script>
import Icon from '../../components/Icon'
export default {
  name: 'AndreyPromo',
  components: {
    Icon,
  },
  props: {
    imageWhoIsS: {
      type: String,
      default: '',
    },
    imageWhoIsM: {
      type: String,
      default: '',
    },
    imageWhoIsL: {
      type: String,
      default: '',
    },
    imageAndrey: {
      type: String,
      default: '',
    },
    imageAndreyAlt: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      currentBackgroundImage: this.imageWhoIsS,
    }
  },
  methods: {
    handleWindowResize() {
      if (window.innerWidth >= 1140) {
        this.currentBackgroundImage = this.imageWhoIsL
      } else if (window.innerWidth < 1140 && window.innerWidth >= 750) {
        this.currentBackgroundImage = this.imageWhoIsM
      } else if (window.innerWidth < 750) {
        this.currentBackgroundImage = this.imageWhoIsS
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
    this.handleWindowResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  computed: {},
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
  background: linear-gradient(to right, #000 50%, #b23438 50%);
}

.andrey-rylkov-promo__whois {
  min-height: 197px;
  box-sizing: border-box;
  margin: 0;
  background-color: #b23438;
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

@media screen and (min-width: 640px) {
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
