<template>
  <transition
    name="expand-height"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <ul v-show="subMenuList.open" class="navigation__sub-menu">
      <li
        v-for="(element, index) in subMenuList.submenu"
        class="navigation__sub-menu-item"
        :key="element.title + index"
      >
        <NuxtLink :to="element.to" class="navigation__sub-link">{{
          element.title
        }}</NuxtLink>
      </li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: 'SubMenu',
  props: ['subMenuList'],
  methods: {
    enter(el) {
      el.style.height = 'auto'
      const height = getComputedStyle(el).height
      el.style.height = 0
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = height
      })
    },
    afterEnter(el) {
      el.style.height = 'auto'
    },
    leave(el) {
      console.log(el.classList)
      el.style.height = getComputedStyle(el).height
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = 0
      })
    },
  },
}
</script>

<style scoped>
.navigation__sub-menu {
  padding: 0;
  width: 100%;
  list-style: none;
}

.navigation__sub-menu-item {
  background: #000000;
}

.navigation__sub-link {
  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 26.37px;
}

.expand-height-enter-active,
.expand-height-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}
</style>
