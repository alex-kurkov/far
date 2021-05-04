<template>
  <div class="hamburger">
    <div class="hamburger__menu">
      <HamburgerIcon :displayObj="displayObj" :handleMenuClick="handleMenuClick" :isMenuOpen="isMenuOpen"/>
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
  components: { FallingDrop, Navigation, Icon, HamburgerIcon},
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
      // const hamburgerIconElement = document.querySelector('.hamburger__icon')
      // hamburgerIconElement.classList.toggle('hamburger__icon_state_opened')
      // const isOpen = hamburgerIconElement.classList.contains(
      //   'hamburger__icon_state_opened'
      // )
      // hamburgerIconElement.setAttribute('aria-expanded', `${isOpen}`)
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
  background: #ffffff;
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

.hamburger__icon {
  background-color: #000000;
  position: fixed;
  top: 5px;
  right: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  z-index: 10;
  transition: opacity 0.5s linear;
  width: 38px;
  height: 35px;
  --display: grid;
}

.hamburger__icon:hover {
  opacity: 0.8;
  cursor: pointer;
}

.hamburger__icon::after {
  content: 'МЕНЮ';
  background-color: #000000;
  transform: translateY(152px) rotate(-90deg);
  transform-origin: left top;
  color: #ffffff;
  font-style: italic;
  letter-spacing: normal;
  display: var(--display);
  place-items: center;
  position: absolute;
  z-index: 10;
  font-size: 29px;
  line-height: 26px;
  padding: 3px 0 0 0;
  height: 38px;
  width: 117px;
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

  .hamburger__icon {
    width: 59px;
    height: 52px;
    top: 10px;
    right: 10px;
  }

  .hamburger__icon::after {
    transform: translateY(232px) rotate(-90deg);
    font-size: 45px;
    line-height: 41px;
    padding: 3px 0 0 0;
    height: 59px;
    width: 181px;
  }

  .hamburger__drop {
    width: 36px;
    height: 62px;
    top: 290px;
  }
}

/* @media screen and (min-width: 640px) {
  .hamburger__icon {
    top: 10px;
    right: 10px;
  }
} */

@media screen and (min-width: 769px) {
  .hamburger__menu {
    top: 10px;
    right: 10px;
    height: 316px;
  }

  .hamburger__icon {
    width: 48px;
    height: 42px;
  }

  .hamburger__icon::after {
    transform: translateY(200px) rotate(-90deg);
    font-size: 36px;
    line-height: normal;
    padding: 3px 0 0 0;
    height: 48px;
    width: 159px;
  }

  .hamburger__drop {
    top: 257px;
  }
}

.hamburger__svg-path {
  fill: none;
  stroke: #cbcbcb;
  stroke-width: 8;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger__svg-path_path_line1 {
  stroke-dasharray: 60 207;
  stroke-width: 8;
}

.hamburger__svg-path_path_line2 {
  stroke-dasharray: 60 60;
  stroke-width: 8;
}

.hamburger__svg-path_path_line3 {
  stroke-dasharray: 60 207;
  stroke-width: 8;
}

.hamburger__icon_state_opened .hamburger__svg-path_path_line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 8;
}

.hamburger__icon_state_opened .hamburger__svg-path_path_line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 8;
}

.hamburger__icon_state_opened .hamburger__svg-path_path_line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 8;
}
</style>
