<template>
  <div class="achievements">
    <div class="achievements__swiper-controls">
      <ArrowIcon class="achievements__swiper-btn-prev"></ArrowIcon>
      <div class="achievements__swiper-pagination"></div>
      <ArrowIcon class="achievements__swiper-btn-next"></ArrowIcon>
    </div>

    <swiper
      :slides-per-view="1"
      :space-between="10"
      ref="mySwiper" 
      :options="swiperOptions"
      virtual
      >

      <swiper-slide
        v-for="news in newsArray"
        :key="news.id"
        :virtualIndex="index"
      >
        <Card :news="news" />
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ArrowIcon from './achievments/Swiper-arrow'
import Card from './achievments/Card'

export default {
  name: 'Achievements',
  components: {
    Swiper,
    SwiperSlide,
    ArrowIcon,
    Card
  },
  directives: {
    swiper: directive
  },
  data() {
      return {
        swiperOptions: {
          loop: true,
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 10,
          pagination: {
            el: '.achievements__swiper-pagination',
            dynamicBullets: false,
            clickable: true
          },
          navigation: {
            nextEl: '.achievements__swiper-btn-next',
            prevEl: '.achievements__swiper-btn-prev',
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      },
      newsArray() {
        return [
          {
            title: 'HIV Testing',
            text: 'men were provided with HIV-sets and were consulted on self-inquiry',
            stamp: '1017',
            id: 'scjweoicjwepockwe233'
          },
          {
            title: 'Консультации по медицинским вопросам',
            text: 'консультаций медицинских специалистов по постинъекционным осложнениям',
            stamp: '256',
            id: 'scjweoicjwepockwe23wefw'
          },
          {
            title: 'Служба поддержки психического здоровья',
            text: 'консультаций по вопросам зависимости и проблемного употребления веществ, психологическая поддержка ',
            stamp: '706',
            id: 'scjweoicjwepdssockwe23wefw'
          },
        ]
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
    }
}


</script>

<style>
.achievments {
  width: 100%;
  overflow: hidden;
  height: 400px;
}
.achievements__swiper-controls {
  width: 80%;
  margin: 0 auto;
  padding: 4px;
  display: flex;
  justify-items: center;
  justify-content: space-between;
}
.achievements__swiper-pagination {
  position: relative;
  display: flex;
  align-items: center;
}

.achievements__swiper-btn-prev {
  height: 24px;
}
.achievements__swiper-btn-next {
  height: 24px;
  transform: rotate(180deg);
}
.swiper-slide {
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  background-color: #eee;
  display: flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.swiper-pagination-bullet {
  background-color: #fff;
  opacity: 100;
  margin: 6px;
}
.swiper-pagination-bullet-active {
  background-color: #f00;
}

</style>
