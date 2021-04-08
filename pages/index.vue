<template>
  <div class="container">
    <About />
    <Promo />
    <Intro />
    <section class="container__info">
      <Mission />
      <Achievement />
    </section>
    <section class="container__donations">
      <Help />
      <Support />
    </section>
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
  data() {
    return {
      title: 'Домашняя страница'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Home, page, keywords',
        },
      ],
    }
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

.container__info {
  display: flex;
  flex-direction: column;
}

.container__donations {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}

@media screen and (min-width: 1280px) {
  .container__info {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    background: linear-gradient(to right, #d5d5d5 50%, #b23438 50%);
  }

  .container__donations {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    background: linear-gradient(to right, #000 50%, #d5d5d5 50%),
      linear-gradient(to right, #000 50%, #fff 50%);
    background-repeat: no-repeat;
    background-size: 100vw 615px;
    background-position: bottom right, 0 0;
  }
}
</style>
