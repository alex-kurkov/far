<template>
  <transition
    name="expand"
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
  background: #c4d77b;
}

.navigation__sub-link {
  color: blueviolet;
  text-decoration: none;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}
</style>
