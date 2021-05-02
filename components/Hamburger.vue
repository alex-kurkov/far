<template>
  <div class="hamburger">
    <div class="hamburger__menu">
      <div
        class="hamburger-icon"
        @click="handleMenuClick"
        aria-label="Main Menu"
        :style="displayObj"
      >
        <!-- <span class="hamburger__menu-text">Меню</span> -->
        <svg viewBox="0 0 100 100">
          <path
            class="hamburger-icon_path_line hamburger-icon_path_line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path
            class="hamburger-icon_path_line hamburger-icon_path_line2"
            d="M 20,50 H 80"
          />
          <path
            class="hamburger-icon_path_line hamburger-icon_path_line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </div>
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
export default {
  name: 'Hamburger',
  components: { FallingDrop, Navigation, Icon },
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
      const hamburgerIconElement = document.querySelector('.hamburger-icon')
      hamburgerIconElement.classList.toggle('hamburger-icon_state_opened')
      const isOpen = hamburgerIconElement.classList.contains(
        'hamburger-icon_state_opened'
      )
      hamburgerIconElement.setAttribute('aria-expanded', `${isOpen}`)
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

.hamburger-icon {
  background-color: #000000;
  /* added */
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

.hamburger-icon:hover {
  opacity: 0.8;
  cursor: pointer;
}

.hamburger-icon::after {
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

  .hamburger-icon {
    width: 59px;
    height: 52px;
  }

  .hamburger-icon::after {
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

@media screen and (min-width: 640px) {
  .hamburger-icon {
    top: 10px;
    right: 10px;
  }
}

@media screen and (min-width: 769px) {
  .hamburger__menu {
    top: 10px;
    right: 10px;
    height: 316px;
  }

  .hamburger-icon {
    width: 48px;
    height: 42px;
  }

  .hamburger-icon::after {
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

@media screen and (min-width: 769px) {
}

.hamburger-icon_path_line {
  fill: none;
  stroke: #cbcbcb;
  stroke-width: 8;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger-icon_path_line1 {
  stroke-dasharray: 60 207;
  stroke-width: 8;
}

.hamburger-icon_path_line2 {
  stroke-dasharray: 60 60;
  stroke-width: 8;
}

.hamburger-icon_path_line3 {
  stroke-dasharray: 60 207;
  stroke-width: 8;
}

.hamburger-icon_state_opened .hamburger-icon_path_line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 8;
}

.hamburger-icon_state_opened .hamburger-icon_path_line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 8;
}

.hamburger-icon_state_opened .hamburger-icon_path_line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 8;
}
</style>
