<template>
  <transition
    name="expand-width"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <nav v-show="isMenOpen" class="navigation">
      <ul class="navigation__menu">
        <li
          v-for="(element, index) in elements"
          class="navigation__menu-item"
          @click="element.open = !element.open"
          :key="element.title + index"
        >
          <NuxtLink :to="element.to" class="navigation__link">
            {{ element.title }}
          </NuxtLink>
          <span
            v-if="element.submenu"
            ><icon name="arrow-right"
            class='navigation__arrow-right'
            :class="[
              element.open
                ? 'navigation__arrow navigation__arrow_open'
                : 'navigation__arrow',
            ]"/></span
          >
          <SubMenu v-if="element.submenu" :subMenuList="element" />
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script>
import SubMenu from '@/components/SubMenu'
import Icon from '@/components/Icon'
export default {
  name: 'Navigation',
  components: { SubMenu, Icon },
  props: ['isMenOpen'],
  data() {
    return {
      elements: [
        {
          to: '#',
          title: 'Parent-1 ',
          open: false,
          submenu: [
            {
              to: '/?parent11-child1',
              title: 'Child-1',
            },
            {
              to: '/?parent11-child1',
              title: 'Child-2',
            },
          ],
        },
        { to: '/?single2', title: 'Single-2' },
        {
          to: '#',
          title: 'Parent-3',
          open: false,
          submenu: [
            {
              to: '/?parent3-child3',
              title: 'Child-3',
            },
            {
              to: '/?parent3-child4',
              title: 'Child-4',
            },
          ],
        },
        { to: '/?single', title: 'Single-4' },
      ],
    }
  },
  methods: {
    enter(el) {
      el.style.width = 'auto'
      const width = getComputedStyle(el).width
      el.style.width = 0
      getComputedStyle(el)
      setTimeout(() => {
        el.style.width = width
      })
    },
    afterEnter(el) {
      el.style.width = 'auto'
    },
    leave(el) {
      el.style.width = getComputedStyle(el).width
      getComputedStyle(el)
      setTimeout(() => {
        el.style.width = 0
      })
    },
  },
}
</script>

<style scoped>
.navigation {
  position: absolute;
  top: 10px;
  right: 50px;
}

.navigation__menu {
  padding: 0;
  list-style: none;
  min-width: 200px;
}

.navigation__menu-item {
  background: #75a6f5;
  border-top: 1px solid #fdf5d8;
  min-height: 25px;
  position: relative;
}

.navigation__link {
  text-decoration: none;
  color: #ffffff;
}

.navigation__arrow {
  transition: transform 0.5s ease-in-out;
}

.navigation__arrow_open {
  transform: rotate(90deg);
}

.navigation__arrow-right{
  width: 20px;
  height: 20px;
}

.expand-width-enter-active,
.expand-width-leave-active {
  transition: width 0.5s ease-in-out;
  overflow: hidden;
}
</style>
