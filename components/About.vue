<template>
  <section class="about">
    <h1 class="about__text">
      <span class="about__abbreviation">{{ $t('about.title') }}&nbsp;</span>
      &#8212; {{ $t('about.subtitle') }}
    </h1>
  </section>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.about {
  width: 100%;
  max-width: 1280px;
  margin: auto;
  min-height: 90px;
  background: #fff;
}

.about__text {
  width: 263px;
  min-height: 104px;
  color: #313131;
  font-family: Vollkorn, Arial, sans-serif;
  font-style: italic;
  font-size: 25px;
  line-height: 23px;
  letter-spacing: normal;
  font-weight: normal;
  text-align: left;
  margin: 23px 0 23px 14px;
  padding: 0;
  position: relative;
}

.about__abbreviation {
  font-weight: 700;
}

.about__text::before {
  content: '';
  height: 11px;
  width: 71px;
  position: absolute;
  background-color: #b33438;
  top: 14px;
  left: 0;
}

@media screen and (min-width: 450px) {
  .about__text {
    width: 350px;
  }
}

@media screen and (min-width: 640px) {
  .about__text {
    width: 520px;
    font-size: 48px;
    line-height: 43px;
    margin: 33px 0 29px 55px;
  }

  .about__text::before {
    height: 18px;
    width: 107px;
    top: 26px;
  }
}

@media screen and (min-width: 769px) {
  .about__text {
    width: 600px;
    font-size: 36px;
    line-height: 34px;
    margin: 60px 0 88px 100px;
  }

  .about__text::before {
    height: 11px;
    width: 93px;
    top: 20px;
  }
}

@media screen and (min-width: 850px) {
  .about__text {
    margin-left: 183px;
  }
}
</style>
