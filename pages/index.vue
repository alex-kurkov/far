<template>
  <div class="container">
    <About />
    <Promo />
    <Intro />
    <Mission />
    <Achievement />
    <Help />
    <Support />
  </div>
</template>

<script>
import About from '@/components/About'
import Achievement from '@/components/Achievement'
import Help from '@/components/Help'
import Intro from '@/components/Intro'
import Mission from '@/components/Mission'
import Promo from '@/components/Promo'
import SubMenu from '@/components/SubMenu'
import Support from '@/components/Support'
export default {
  components: {
    Support,
    SubMenu,
    Help,
    Achievement,
    Mission,
    Intro,
    Promo,
    About,
  },
}
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  flex-wrap: wrap;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
</style>
