<template>
  <div class="hamburger">
    <div class="hamburger__title">МЕНЮ</div>
    <button
      class="hamburger-icon"
      @click="handleMenuClick"
      aria-label="Main Menu"
    >
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
    </button>
    <icon name="drop" class="hamburger__drop"></icon>
    <transition name="drop-position" @enter="enter" @after-enter="afterEnter">
      <icon
        v-show="isMenuOpen"
        name="drop"
        class="hamburger__drop hamburger__drop_color"
      ></icon>
    </transition>
    <Navigation :isMenuOpen="isMenuOpen" />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
import Icon from '~/components/Icon'
export default {
  name: 'Hamburger',
  components: { Navigation, Icon },
  data() {
    return {
      isMenuOpen: false,
      counter: 0,
      greyDropTopPosition: 268,
    }
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
    enter(el) {
      el.style.top = '10px'
      setTimeout(() => {
        el.style.top = this.greyDropTopPosition + 'px'
      }, 0)
    },
    afterEnter(el) {
      el.style.top = this.greyDropTopPosition + 'px'
    },
    handleWindowResize() {
      if (window.innerWidth < 640) {
        this.greyDropTopPosition = 176
      } else {
        this.greyDropTopPosition = 268
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
.hamburger {
  color: white;
  background: #ffffff;
  position: relative;
}

.hamburger__title {
  background-color: #000000;
  transform: rotate(270deg);
  height: 48px;
  width: 159px;
  color: #ffffff;
  font-size: 36px;
  line-height: normal;
  font-style: italic;
  letter-spacing: normal;
  display: grid;
  place-items: center;
  padding: 3px 0 0 0;
  position: absolute;
  top: 106px;
  right: -45px;
  z-index: 10;
}

.hamburger__drop {
  position: absolute;
  top: 268px;
  right: 10px;
  width: 36px;
  height: 62px;
  z-index: 3;
}

.hamburger__drop_color {
  fill: #8c8c8c;
  width: 34px;
  height: 60px;
  right: 11px;
  z-index: 2;
}

.drop-position-enter-active {
  transition: top 0.7s ease-in-out;
}

.hamburger-icon {
  background-color: #000000;
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  width: 48px;
  height: 42px;
  z-index: 10;
  transition: opacity 0.5s linear;
}

.hamburger-icon:hover {
  opacity: 0.8;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .hamburger-icon {
    top: 10px;
    right: 10px;
    width: 59px;
    height: 52px;
  }

  .hamburger__title {
    font-size: 45px;
    line-height: 41px;
    padding: 3px 0 0 0;
    height: 59px;
    width: 181px;
    top: 122px;
    right: -51px;
  }

  .hamburger__drop {
    right: 21px;
  }

  .hamburger__drop_color {
    right: 22px;
  }
}

@media screen and (max-width: 640px) {
  .hamburger-icon {
    top: 5px;
    right: 5px;
    width: 38px;
    height: 35px;
  }

  .hamburger__title {
    font-size: 29px;
    line-height: 26px;
    padding: 3px 0 0 0;
    height: 38px;
    width: 117px;
    top: 79px;
    right: -34px;
  }

  .hamburger__drop {
    right: 12px;
    top: 175px;
    width: 24px;
    height: 42px;
  }

  .hamburger__drop_color {
    width: 22px;
    height: 40px;
    right: 13px;
  }
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
