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
          <div
            :class="[
              index === elements.length - 1
                ? 'navigation__main-menu-item navigation__main-menu-item_style'
                : 'navigation__main-menu-item',
            ]"
          >
            <NuxtLink :to="element.to" class="navigation__link">
              {{ element.title }}
            </NuxtLink>
            <span v-show="element.submenu"
              ><icon
                name="arrow-right"
                class="navigation__arrow-right"
                :class="[
                  element.open
                    ? 'navigation__arrow navigation__arrow_open'
                    : 'navigation__arrow',
                ]"
            /></span>
          </div>
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
          title: 'О НАС',
          open: false,
          submenu: [
            {
              to: '/?parent11-child1',
              title: 'кто такой Андрей Рыльков',
            },
            {
              to: '/?parent11-child1',
              title: 'миссия и стратегии',
            },
            {
              to: '/?parent11-child1',
              title: 'команда ФАР',
            },
            {
              to: '/?parent11-child1',
              title: 'проекты и отчёты',
            },
            {
              to: '/?parent11-child1',
              title: 'годовые отчёты',
            },
            {
              to: '/?parent11-child1',
              title: 'учредительные документы',
            },
          ],
        },
        {
          to: '/?single2',
          title: 'ПОДДЕРЖАТЬ ФАР',
          open: false,
          submenu: [
            {
              to: '/?parent3-child3',
              title: 'сделать пожертвование',
            },
            {
              to: '/?parent3-child4',
              title: 'волонтёрство в ФАР',
            },
            {
              to: '/?parent3-child4',
              title: 'стажировка в ФАР',
            },
            {
              to: '/?parent3-child4',
              title: 'партнёрство с ФАР',
            },
          ],
        },
        {
          to: '/?single',
          title: 'ПОЛУЧИТЬ ПОМОЩЬ',
        },
        { to: '/?single', title: 'КОНТАКТЫ' },
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
      }, 0)
    },
    afterEnter(el) {
      el.style.width = 'auto'
    },
    leave(el) {
      el.style.width = getComputedStyle(el).width
      getComputedStyle(el)
      setTimeout(() => {
        el.style.width = 0
      }, 0)
    },
  },
}
</script>

<style scoped>
.navigation {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: black;
}

.navigation__menu {
  padding: 0 53px 0 17px;
  list-style: none;
  min-width: 300px;
}

.navigation__main-menu-item {
  border-bottom: 1px solid #fdf5d8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
}

.navigation__main-menu-item_style {
  border-bottom: unset;
}

.navigation__menu-item {
  position: relative;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  font-family: PT, Arial, sans-serif;
  text-align: left;
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

.navigation__arrow-right {
  width: 20px;
  height: 20px;
  fill: #ffffff;
  cursor: pointer;
}

.expand-width-enter-active,
.expand-width-leave-active {
  transition: width 0.5s ease-in-out;
  overflow: hidden;
}
</style>
