<template>
  <div class="achievements">
    <div class="achievements__swiper-controls">
      <ArrowIcon class="achievements__swiper-btn-prev"></ArrowIcon>
      <div class="achievements__swiper-pagination"></div>
      <ArrowIcon class="achievements__swiper-btn-next"></ArrowIcon>
    </div>
    <div class="achievements__carousel">
      <Icon name="stamp" class="achievements__stamp-icon" />
      <swiper
        :slides-per-view="1"
        :space-between="10"
        ref="mySwiper"
        :options="swiperOptions"
        virtual
      >
        <swiper-slide
          v-for="index in numberOfCards"
          :key="index"
          :virtualIndex="index"
        >
          <Card :index="index" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import 'swiper/css/swiper.css'
import { directive, Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Card from './achievments/Card'
import ArrowIcon from './achievments/Swiper-arrow'

export default {
  components: {
    Swiper,
    SwiperSlide,
    ArrowIcon,
    Card,
    Icon,
  },
  directives: {
    swiper: directive,
  },

  data() {
    return {
      swiperOptions: {
        effect: 'flip',
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 10,
        pagination: {
          el: '.achievements__swiper-pagination',
          dynamicBullets: false,
          clickable: true,
        },
        navigation: {
          nextEl: '.achievements__swiper-btn-next',
          prevEl: '.achievements__swiper-btn-prev',
        },
      },
      achievementsLength: 1,
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    numberOfCards() {
      return this.$store.getters.getNumberOfCards
    },
  },
}
</script>

<style>
.achievments {
  width: 100%;
  overflow: visible;
  height: 400px;
}
.achievements__swiper-controls {
  padding: 4px 4px 16px 4px;
  margin: 0 auto;
  display: flex;
  justify-items: center;
  justify-content: center;
  gap: 20px;
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
.swiper-pagination-bullet {
  background-color: #fff;
  opacity: 100;
  margin: 6px;
}
.swiper-pagination-bullet-active {
  background-color: var(--main-red);
}
.achievements__carousel {
  position: relative;
  overflow: visible;
}
.achievements__stamp-icon {
  position: absolute;
  top: 0;
  left: -44px;
  width: 198px;
  height: 198px;
  background: transparent;
  fill: var(--simple-black);
  z-index: 2;
}
.swiper-wrapper,
.swiper-container {
  z-index: 5;
}
@media screen and (min-width: 768px) {
  .achievements__swiper-btn-next {
    height: 46px;
  }

  .achievements__swiper-btn-prev {
    height: 46px;
  }

  .swiper-pagination-bullet {
    width: 17px;
    height: 17px;
    margin: 12px;
  }

  .achievements__swiper-pagination {
    margin: 0 30px;
  }

  .achievements__swiper-controls {
    padding: 0 0 52px 0;
  }

  .achievements__stamp-icon {
    width: 400px;
    height: 400px;
  }
}

@media screen and (min-width: 1280px) {
  .achievements__swiper-btn-next {
    height: 35px;
  }

  .achievements__swiper-btn-prev {
    height: 35px;
  }

  .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    margin: 9px;
  }

  .achievements__swiper-pagination {
    margin: 0 29px;
  }

  .achievements__swiper-controls {
    padding: 0 0 29px 0;
  }

  .achievements__stamp-icon {
    width: 283px;
    height: 283px;
    left: -83px;
  }
}
</style>
