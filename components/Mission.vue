<template>
  <section class="mission">
    <div class="mission__sideblock">

    </div>
    <div class="mission__content">
      <div class="mission__info-wrapper">
        <h2 class="mission__title">Наша
миссия:</h2>
        <p class="mission__text">
          способствовать развитию наркополитики, основанной на гуманности,
          терпимости, защите здоровья, достоинства и прав человека.
        </p>
        <p class="mission__text">
          Работа ФАР строится на принципах горизонтального управления и развития
          проектов на основе инициатив людей, употребляющих наркотики, активистов
          и активисток, профессионалов и профессионалок в области общественного
          здравоохранения и защиты прав человека.
        </p>
      </div>
      <nuxt-link class="mission__about-link" to="/about"
        >Подробнее о нас &rsaquo;</nuxt-link
      >
      <div class="mission__graphics-wrapper">
        <div class="mission__graphics-road"><Icon name="road" /></div>
        <div class="mission__graphics-logo"><Icon name="logo" /></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Mission',
}
</script>

<style scoped>
.mission {
  width: 56%;
  background: none;
  height: 440px;
  display: flex;
}
.mission__sideblock {
  width: 100px;
  background: #d5d5d5;
}
.mission__info-wrapper {
  display: block;
  padding: 16px 32px 16px 16px;
  text-align: left;
  overflow: hidden;
}
.mission__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.mission__title {
  font-family: 'Vollkorn', serif;
  font-size: 40px;
  line-height: 0.8;
  font-weight: 600;
  display: inline;
  white-space: pre-wrap;
  text-decoration: underline solid 6px #b23438;
}
.mission__text {
  font-family: 'Vollkorn', serif;
  font-size: 14px;
  font-weight: 400;
  margin-top: 12px;
}
.mission__text:first-of-type {
  display: inline;
  margin-top: 0;
}
.mission__about-link {
  font-family: 'Vollkorn', serif;
  color: #b23438;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
  text-decoration: underline;
  text-underline-offset: 4px;
  padding-left: 16px;
}
.mission__graphics-wrapper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: flex-start;
}
.mission__graphics-road {
  width: 50%;
}
.mission__graphics-logo {
  width: 180px;
  height: auto;
  align-self: center;
  transform: translateX(-20px);
}
@media screen and (max-width: 768px) {
  .mission {
    width: 100%;
    height: auto;
  }
  .mission__sideblock {
    display: none;
  }
  .mission__info-wrapper {
    padding: 12px;
  }
  .mission__about-link {
    padding-left: 12px;
  }
}
.test {
  width: 30px;
  height: auto;
}
</style>
