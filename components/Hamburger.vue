<template>
  <div class="hamburger">
    <div class="hamburger__title">МЕНЮ</div>
    <button
      class="hamburger-icon"
      @click="isMenOpen = !isMenOpen"
      onclick="this.classList.toggle('hamburger-icon_state_opened');
                this.setAttribute('aria-expanded', this.classList.contains('hamburger-icon_state_opened'))"
      aria-label="Main Menu"
    >
      <svg width="33" height="28" viewBox="0 0 100 100">
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
    <Navigation :isMenOpen="isMenOpen" />
    <icon name="drop" class="hamburger__drop"></icon>
    <transition
      name="drop-position"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <icon
        v-show="isMenOpen"
        name="drop"
        class="hamburger__drop hamburger__drop_color"
      ></icon>
    </transition>
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
      isMenOpen: false,
      counter: 0,
    }
  },
  methods: {
    enter(el) {
      el.style.top = 0
      setTimeout(() => {
        el.style.top = '281px'
      }, 0)
    },
    afterEnter(el) {
      el.style.top = '281px'
    },
    leave(el) {},
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
  height: 33px;
  width: 136px;
  color: #ffffff;
  font-size: 26px;
  font-style: italic;
  letter-spacing: normal;
  line-height: normal;
  display: grid;
  place-items: center;
  position: absolute;
  top: 88px;
  right: -41px;
  z-index: 10;
}

.hamburger__drop {
  position: absolute;
  top: 280px;
  right: 10px;
  width: 36px;
  height: 62px;
  z-index: 3;
}

.hamburger__drop_color {
  fill: #b13438;
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
  width: 33px;
  height: 28px;
  z-index: 10;
}

.hamburger-icon_path_line {
  fill: none;
  stroke: #cbcbcb;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger-icon_path_line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}

.hamburger-icon_path_line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}

.hamburger-icon_path_line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}

.hamburger-icon_state_opened .hamburger-icon_path_line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}

.hamburger-icon_state_opened .hamburger-icon_path_line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}

.hamburger-icon_state_opened .hamburger-icon_path_line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
</style>
