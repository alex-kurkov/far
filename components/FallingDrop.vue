<template>
  <transition name="falling-drop" @enter="enter" @after-enter="afterEnter">
    <icon v-show="isMenuOpen" name="drop" class="falling-drop"></icon>
  </transition>
</template>

<script>
import Icon from '~/components/Icon'
export default {
  name: 'FallingDrop',
  props: ['isMenuOpen'],
  components: { Icon },
  data() {
    return {
      greyDropTopPosition: 172,
    }
  },
  methods: {
    enter(el) {
      el.style.top = '5px'
      el.style.display = 'block'
      setTimeout(() => {
        el.style.top = this.greyDropTopPosition + 'px'
      }, 0)
    },
    afterEnter(el) {
      el.style.top = this.greyDropTopPosition + 'px'
      el.style.display = 'none'
    },
    handleWindowResize() {
      if (window.innerWidth >= 769) {
        this.greyDropTopPosition = 264
      } else if (window.innerWidth < 769 && window.innerWidth >= 640) {
        this.greyDropTopPosition = 304
      } else if (window.innerWidth < 640) {
        this.greyDropTopPosition = 172
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
}
</script>

<style scoped>
.falling-drop {
  position: absolute;
  right: 13px;
  fill: var(--light-grey);
  width: 22px;
  height: 40px;
  z-index: 2;
  display: none;
}

.falling-drop-enter-active {
  transition: top 0.7s ease-in-out;
}

@media screen and (min-width: 640px) {
  .falling-drop {
    right: 22px;
    width: 34px;
    height: 60px;
  }
}

@media screen and (min-width: 769px) {
  .falling-drop {
    right: 17px;
    width: 34px;
    height: 60px;
  }
}
</style>
