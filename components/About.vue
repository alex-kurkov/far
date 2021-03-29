<template>
  <section class="about">
    <h1 class="about__text">
      <span class="about__text_style">ФАР</span> - это организация-сообщество,
      площадка для инициатив в сфере гуманизации наркополитики
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
  width: 570px;
  min-height: 104px;
  color: #313131;
  font-family: Vollkorn, Arial, sans-serif;
  font-size: 36px;
  font-style: italic;
  letter-spacing: normal;
  font-weight: normal;
  line-height: 35px;
  text-align: left;
  margin: 80px 0 80px 200px;
  padding: 0;
}

.about__text_style {
  font-weight: 700;
  font-style: normal;
}

.about__text::before {
  content: '';
  height: 11px;
  width: 93px;
  position: absolute;
  background-color: #b33438;
  top: 157px;
  left: 198px;
}
</style>
