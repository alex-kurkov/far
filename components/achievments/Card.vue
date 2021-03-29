<template>
  <div class="card">
    <div class="card__stamp">
<<<<<<< HEAD
      <p class="card__stamp-text">{{ news.stamp }}</p>
    </div> 
=======
      <span class="card__stamp-text">{{ news.stamp }}</span>
    </div>
>>>>>>> develop
    <div class="card__info">
      <h3 class="card__title">{{ news.title }}</h3>
      <div class="card__line"></div>
      <p class="card__text">{{ news.text }}</p>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  components: {
    Icon,
  },
  props: {
    news: {
      type: Object,
      default: () => ({
        title: 'Заголовок',
        stamp: '???',
        text: 'Текст достижения/новости',
      }),
    },
  },
}
</script>

<style scoped>
<<<<<<< HEAD
  .card {
    width: 100%;
    height: 198px;
    display: flex;
    overflow: hidden;
    flex-wrap: nowrap;
    background: transparent;
  }
  .card__stamp {
    display: flex;
    min-width: 150px;
    max-width: 150px;
    justify-content: center;
  }
  .card__info {
    width: calc(100% - 150px);
    padding: 12px;
    overflow: hidden;
  }
  .card__stamp-text {
    text-align: center;
    font-family: 'Tomorrow Wind', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 114px;
    color: #fff;
    z-index: 6;
    align-self: center;
    justify-self: center;
    transform: translateX(-16px);
  }
  .card__title {
    color: #b23438;
    font-family: 'Vollkorn', 'Times New Roman', serif;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.15;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .card__line {
    width: 100%;
    height: 2px;
    background: #fff;
    margin-bottom: 4px;
  }
  .card__text {
    font-family: 'Vollkorn', serif;
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    color: #313131;
    text-align: left;
  }
/*   @media screen and (max-width: 768px) {
    .card__stamp-text {
      transform: none;
    }
  } */
</style>
=======
.card {
  width: 100%;
  height: 198px;
  display: flex;
  overflow: hidden;
  flex-wrap: nowrap;
  background: transparent;
}
.card__stamp {
  display: flex;
  min-width: 150px;
  max-width: 150px;
}
.card__info {
  width: calc(100% - 150px);
  padding: 12px;
  overflow: hidden;
}
.card__stamp-text {
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 60px;
  color: #fff;
  letter-spacing: -9px;
  z-index: 6;
  align-self: center;
  justify-self: center;
  /*     transform: translateX(-8px); */
}
.card__title {
  color: #b23438;
  font-family: 'Vollkorn', 'Times New Roman', serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.15;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.card__line {
  width: 100%;
  height: 2px;
  background: #fff;
  margin-bottom: 4px;
}
.card__text {
  font-family: 'Vollkorn', serif;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  color: #313131;
  text-align: left;
}
@media screen and (max-width: 768px) {
  .card__stamp-text {
    transform: none;
  }
}
</style>
>>>>>>> develop
