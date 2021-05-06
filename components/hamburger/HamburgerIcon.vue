<template>
  <div
    class="hamburger-icon"
    :class="{ 'hamburger-icon_state_opened': isMenuOpen }"
    @click="menuClick"
    aria-label="Main Menu"
    :style="displayObj"
  >
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill-rule="evenodd"
      clip-rule="evenodd"
      class="hamburger-icon__svg"
    >
      <path
        class="hamburger-icon__svg-path hamburger-icon__svg-path_path_line1"
        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
      />
      <path
        class="hamburger-icon__svg-path hamburger-icon__svg-path_path_line2"
        d="M 20,50 H 80"
      />
      <path
        class="hamburger-icon__svg-path hamburger-icon__svg-path_path_line3"
        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HamburgerIcon',
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false,
    },
    displayObj: {
      type: Object,
    },
    handleMenuClick: {
      type: Function,
    },
  },
  methods: {
    menuClick() {
      this.handleMenuClick()
    },
  },
}
</script>

<style scoped>
.hamburger-icon {
  background-color: var(--simple-black);
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
  background-color: var(--simple-black);
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

.hamburger-icon__svg-path {
  fill: none;
  stroke: var(--light-grey);
  stroke-width: 8;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger-icon__svg-path_path_line1 {
  stroke-dasharray: 60 207;
  stroke-width: 8;
}

.hamburger-icon__svg-path_path_line2 {
  stroke-dasharray: 60 60;
  stroke-width: 8;
}

.hamburger-icon__svg-path_path_line3 {
  stroke-dasharray: 60 207;
  stroke-width: 8;
}

.hamburger-icon_state_opened .hamburger-icon__svg-path_path_line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 8;
}

.hamburger-icon_state_opened .hamburger-icon__svg-path_path_line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 8;
}

.hamburger-icon_state_opened .hamburger-icon__svg-path_path_line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 8;
}

@media screen and (min-width: 640px) {
  .hamburger-icon {
    width: 59px;
    height: 52px;
    top: 10px;
    right: 10px;
  }

  .hamburger-icon::after {
    transform: translateY(232px) rotate(-90deg);
    font-size: 45px;
    line-height: 41px;
    padding: 3px 0 0 0;
    height: 59px;
    width: 181px;
  }
}

@media screen and (min-width: 768px) {
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
}
</style>
