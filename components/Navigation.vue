<template>
  <transition
    name="expand-width"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <nav v-show="isMenuOpen" class="navigation">
      <ul class="navigation__menu">
        <li
          v-for="(element, index) in this.$t('menu')"
          class="navigation__menu-item"
          @click="element.open = !element.open"
          :key="element.title"
        >
          <div
            :class="[
              'navigation__main-menu-item',
              {
                'navigation__main-menu-item_style':
                  index === elements.length - 1,
              },
            ]"
          >
            <NuxtLink :to="element.to" class="navigation__link">
              {{ element.title }}
            </NuxtLink>
            <span v-show="element.subMenuList"
              ><icon
                name="arrow-right"
                class="navigation__arrow-right"
                :class="[
                  'navigation__arrow',
                  { navigation__arrow_open: element.open },
                ]"
            /></span>
          </div>
          <SubMenu
            v-if="element.subMenuList"
            :subMenuList="element.subMenuList"
            :isOpen="element.open"
          />
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
  props: ['isMenuOpen'],
  data() {
    return {
      elements: this.$t('menu')
      // elements: this.$i18n.locale==='en' ? this.$store.state.content.menuEn : this.$store.state.content.menuRu,
      // currentLanguage: this.$i18n.locale
    }
  },
  created() {},
  computed: {
    getMenu() {},
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
  top: 5px;
  right: 5px;
  background-color: black;
  z-index: 5;
}

.navigation__menu {
  padding: 0 44px 0 13px;
  list-style: none;
  min-width: 240px;
}

.navigation__main-menu-item {
  border-bottom: 1px solid #fdf5d8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 38px;
}

.navigation__main-menu-item_style {
  border-bottom: unset;
}

.navigation__menu-item {
  position: relative;
  color: #ffffff;
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  font-family: PT, Arial, sans-serif;
  text-align: left;
  text-transform: uppercase;
}

.navigation__link {
  text-decoration: none;
  color: #ffffff;
  transition: opacity 0.5s linear;
}

.navigation__link:hover {
  opacity: 0.7;
  cursor: pointer;
}

.navigation__arrow {
  transition: transform 0.5s ease-in-out, opacity 0.5s linear;
}

.navigation__arrow:hover {
  opacity: 0.7;
  cursor: pointer;
}

.navigation__arrow_open {
  transform: rotate(90deg);
}

.navigation__arrow-right {
  width: 14px;
  height: 14px;
  fill: #ffffff;
  cursor: pointer;
}

@media screen and (min-width: 640px) {
  .navigation {
    top: 10px;
    right: 10px;
  }

  .navigation__menu {
    padding: 0 70px 0 20px;
    min-width: 370px;
  }

  .navigation__menu-item {
    font-size: 25px;
  }

  .navigation__arrow-right {
    width: 22px;
    height: 22px;
  }
  .navigation__main-menu-item {
    min-height: 58px;
  }
}

@media screen and (min-width: 769px) {
  .navigation__menu {
    padding: 0 53px 0 17px;
    min-width: 300px;
  }

  .navigation__menu-item {
    font-size: 20px;
  }

  .navigation__arrow-right {
    width: 20px;
    height: 20px;
  }
  .navigation__main-menu-item {
    min-height: 50px;
  }
}

.expand-width-enter-active,
.expand-width-leave-active {
  transition: width 0.5s ease-in-out;
  overflow: hidden;
}
</style>
