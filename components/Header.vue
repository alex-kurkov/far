<template>
  <div>
    <section :style="cssProps" class="header" />
    <ToggleLanguage />
    <NuxtLink :to="localePath('index')" class="playground_1">
      {{ $t('text.mainPageLink') }}
    </NuxtLink>
    <NuxtLink :to="localePath('about')" class="playground_2">
      {{ $t('text.aboutPageLink') }}
    </NuxtLink>
  </div>
</template>

<script>
import ToggleLanguage from '@/components/ToggleLanguage'
import BackGroundTextRu from './header/header-text-ru.svg'
export default {
  name: 'Header',
  components: { ToggleLanguage },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${BackGroundTextRu})`,
      },
    }
  },
}
</script>

<style scoped>
.playground_1 {
  position: absolute;
  left: 80px;
  top: 70px;
}

.playground_2 {
  position: absolute;
  left: 150px;
  top: 70px;
}

.header {
  width: 100%;
  height: 41px;
  background: #b13438 repeat-x -194px 4px / 594px 60px;
}

@media screen and (min-width: 640px) {
  .header {
    width: 100%;
    height: 64px;
    background: #b13438 repeat-x -286px 15px / 1250px 76px;
  }

  @media screen and (min-width: 769px) {
    .header {
      width: 100%;
      height: 53px;
      background: #b13438 repeat-x -286px 2px / 1089px 81px;
    }
  }
}
</style>
