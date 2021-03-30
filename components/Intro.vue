<template>
  <section class="intro">
    <h1 class="intro__text">
      Фонд содействия защите здоровья и социальной справедливости имени Андрея
      Рылькова
    </h1>
    <div class="intro__images"></div>
    <icon name="diamond" class="intro__image"></icon>
  </section>
</template>

<script>
export default {
  name: 'Intro',
}
</script>

<style scoped>
.intro {
  width: 100%;
  min-height: 131px;
  background: #b23438;
  position: relative;
}

.intro__text {
  color: #fff;
  font-family: 'Vollkorn', sans-serif;
  font-size: 23px;
  font-weight: 400;
  margin: 0;
  padding: 16px;
  line-height: 0.9;
  text-align: left;
}

.intro__image {
  width: 109px;
  height: 86px;
  position: absolute;
  right: 17px;
  bottom: -40px;
}

.intro__images {
  display: none;
}

@media screen and (min-width: 500px) {

  .intro__text {
    font-size: 43px;
    line-height: 0.9;
    padding: 25px 37px 37px 25px;
  }

  .intro__image {
    width: 185px;
    height: 159px;
    bottom: -64px;
    right: 24px;
  }
}

@media screen and (min-width: 769px) {
  .intro {
    display: flex;
    flex-direction: row;
    background: #fff;
    min-height: 128px;
  }

  .intro__text {
    width: 56%;
    font-size: 36px;
    line-height: 0.8;
    background: #b23438;
    padding: 25px 55px;
  }

  .intro__image {
    display: none;
  }

  .intro__images {
    display: block;
    width: 44%;
    min-height: 128px;
    background: center/90px 82px url('./intro/diamond.svg') #fff;
    background-repeat: space no-repeat;
  }
}

@media screen and (min-width:1280px) {
  .intro {
    min-height: 128px;
  }

  .intro__text {
    font-size: 36px;
    line-height: 0.8;
  }

  .intro__images {
    min-height: 128px;
    background: center/110px 82px url('./intro/diamond.svg') #fff;
    background-repeat: space no-repeat;
  }
}
</style>
