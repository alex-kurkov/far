<template>
  <transition
    name="expand-height"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <ul v-show="isOpen" class="navigation__sub-menu">
      <li
        v-for="(element, index) in subMenuList"
        class="navigation__sub-menu-item"
        :key="element.title[$i18n.locale]"
      >
        <NuxtLink
          :to="localePath(`${element.to}`)"
          class="navigation__sub-link"
          >{{ element.title[$i18n.locale] }}</NuxtLink
        >
      </li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: 'SubMenu',
  props: ['isOpen', 'subMenuList'],
  methods: {
    enter(el) {
      el.style.height = 'auto'
      const height = getComputedStyle(el).height
      el.style.height = 0
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = height
      }, 0)
    },
    afterEnter(el) {
      el.style.height = 'auto'
    },
    leave(el) {
      el.style.height = getComputedStyle(el).height
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = 0
      }, 0)
    },
  },
}
</script>

<style scoped>
.navigation__sub-menu {
  padding: 15px 0;
  width: 100%;
  list-style: none;
}

.navigation__sub-menu-item {
  background: #000000;
  opacity: 1;
}

.navigation__sub-link {
  text-decoration: none;
  color: #ffffff;
  font-family: PT, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 26px;
  transition: opacity 0.5s linear;
  text-transform: none;
}

.navigation__sub-link:hover {
  opacity: 0.7;
  cursor: pointer;
}

@media screen and (min-width: 640px) {
  .navigation__sub-link {
    font-size: 22px;
  }
}

@media screen and (min-width: 769px) {
  .navigation__sub-link {
    font-size: 18px;
  }
}

.expand-height-enter-active,
.expand-height-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}
</style>
