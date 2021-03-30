<template>
  <section class="about">
    <h1 class="about__text">
      <span class="about__text_style">ФАР&nbsp;</span> &#8212; это
      организация-сообщество, площадка для инициатив в сфере гуманизации
      наркополитики
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
  min-height: 90px;
  background: #ffffff;
}

.about__text {
  width: 600px;
  min-height: 104px;
  color: #313131;
  font-family: Vollkorn, Arial, sans-serif;
  font-size: 36px;
  font-style: italic;
  letter-spacing: normal;
  font-weight: normal;
  line-height: 34px;
  text-align: left;
  margin: 60px 0 88px 183px;
  padding: 0;
  position: relative;
}

.about__text_style {
  font-weight: 700;
}

.about__text::before {
  content: '';
  height: 11px;
  width: 93px;
  position: absolute;
  background-color: #b33438;
  top: 20px;
  left: 0;
}

.about__text_whitespace {
  display: none;
}

@media screen and (max-width: 850px) {
  .about__text {
    margin-left: 100px;
  }
}

@media screen and (max-width: 768px) {
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
    left: 0;
  }
}

@media screen and (max-width: 640px) {
  .about__text {
    width: 350px;
    font-size: 25px;
    line-height: 23px;
    margin: 23px 0 32px 14px;
  }

  .about__text::before {
    height: 11px;
    width: 71px;
    top: 14px;
    left: 0;
  }
}

@media screen and (max-width: 450px) {
  .about__text {
    width: 263px;
  }
}
</style>
