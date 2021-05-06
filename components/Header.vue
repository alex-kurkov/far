<template>
  <header class="header" @mouseleave="toggleScroll" @mouseenter="toggleScroll">
    <span :class="`header__marquee header__marquee_animated_${animated}`">
      {{ this.$t('header') }}
    </span>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      animated: true,
    }
  },
  methods: {
    toggleScroll() {
      this.animated = !this.animated
    },
  },
}
</script>

<style scoped>
@keyframes scroll {
  from {
    transform: translate(0, 40%);
  }
  to {
    transform: translate(-100%, 40%);
  }
}

.header {
  width: 100%;
  height: 40px;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  background: var(--main-red);
}
.header__marquee {
  font-family: 'Vollkorn', Arial, sans-serif;
  font-size: 24px;
  font-weight: 600;
  display: inline-block;
  color: var(--main-red);
  text-transform: uppercase;
  padding-left: 100%;
  font-size: 36px;
  -webkit-text-stroke: 0.5px var( --simple-white);
  text-align: left;
  letter-spacing: 3px;
  word-spacing: 10px;
  animation: scroll 20s linear infinite;
}
.header__marquee_animated_true {
  animation-play-state: running;
}
.header__marquee_animated_false {
  animation-play-state: paused;
}
@media screen and (min-width: 640px) {
  .header {
    width: 100%;
    height: 64px;
    background: var(--main-red) repeat-x -286px 20px / 800px 76px;
  }

  @media screen and (min-width: 769px) {
    .header {
      width: 100%;
      height: 53px;
      background: var(--main-red) repeat-x -286px 5px / 800px 81px;
    }
    .header__marquee {
      font-size: 48px;
    }
  }
}
</style>
