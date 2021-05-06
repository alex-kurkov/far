<template>
  <div class="hamburger">
    <div class="hamburger__menu">
      <HamburgerIcon
        :displayObj="displayObj"
        :handleMenuClick="handleMenuClick"
        :isMenuOpen="isMenuOpen"
      />
      <icon name="drop" class="hamburger__drop"></icon>
    </div>
    <FallingDrop :isMenuOpen="isMenuOpen" />
    <Navigation :isMenuOpen="isMenuOpen" :handleMenuClick="handleMenuClick" />
  </div>
</template>

<script>
import FallingDrop from '@/components/FallingDrop'
import Navigation from '~/components/Navigation'
import Icon from '~/components/Icon'
import HamburgerIcon from './hamburger/HamburgerIcon'
export default {
  name: 'Hamburger',
  components: { FallingDrop, Navigation, Icon, HamburgerIcon },
  data() {
    return {
      isMenuOpen: false,
      displayObj: {
        '--display': 'grid',
      },
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleMenuClick() {
      this.isMenuOpen = !this.isMenuOpen
    },
    handleScroll() {
      if (!this.isMenuOpen) {
        this.displayObj = { '--display': 'none' }
      }
      if (window.scrollY < 200) {
        this.displayObj = { '--display': 'grid' }
      }
    },
  },
}
</script>

<style scoped>
.hamburger {
  color: white;
  background: var(--simple-white);
  position: relative;
  z-index: 20;
}

.hamburger__menu {
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  flex-direction: column;
  height: 208px;
  justify-content: space-between;
  align-items: center;
}

.hamburger__drop {
  width: 24px;
  height: 42px;
  z-index: 3;
  position: absolute;
  top: 200px;
  right: 5px;
}

@media screen and (min-width: 640px) {
  .hamburger__menu {
    top: 10px;
    right: 10px;
    height: 355px;
  }

  .hamburger__drop {
    width: 36px;
    height: 62px;
    top: 290px;
  }
}

@media screen and (min-width: 769px) {
  .hamburger__menu {
    top: 10px;
    right: 10px;
    height: 316px;
  }

  .hamburger__drop {
    top: 257px;
  }
}
</style>
