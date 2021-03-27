<template>
  <div class="card">
    <div class="card__stamp">
      <span class="card__stamp-text">{{ news.stamp }}</span>
    </div>
    <div class="card__info">
      <h3>{{ news.title }}</h3>
      <div class="card__line"></div>
      <p> {{ news.text }} </p>
    </div>
  </div>
</template>

<script>
  import { SwiperSlide } from 'vue-awesome-swiper'
  export default {
     props: {
      news: {
        type: Object,
        default: () => (
          {
            title: 'Заголовок',
            stamp: '???',
            text: 'Текст достижения/новости'
          }
        ),
      }
    }
  }
</script>

<style scoped>
  .card {
    width: 100%;
    display: flex;
    overflow: hidden;
  }
  .card__stamp {
    width: 198px;
    height: 198px;
    transform: translateX(-44px);
    background: black;
    position: relative;
  }
  .card__info {
    width: calc (100% + 44px - 198px);
  }
  .card__stamp-text {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Courier New', Courier, monospace;
    font-size: 60px;
    color: white;
  }
  .card__line {
    width: 100%;
    height: 4px;
    background: #fff;
  }
</style>