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
          v-for="(news, index) in newsArray"
          :key="news.id"
          :virtualIndex="index"
        >
          <Card :news="news" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ArrowIcon from './achievments/Swiper-arrow'
import Icon from '@/components/Icon'
import Card from './achievments/Card'

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
          text:
            'men were provided with HIV-sets and were consulted on self-inquiry',
          stamp: '1017',
          id: 'scjweoicjwepockwe233',
        },
        {
          title: 'Консультации по медицинским вопросам',
          text:
            'консультаций медицинских специалистов по постинъекционным осложнениям',
          stamp: '256',
          id: 'scjweoicjwepockwe23wefw',
        },
        {
          title: 'Служба поддержки психического здоровья',
          text:
            'консультаций по вопросам зависимости и проблемного употребления веществ, психологическая поддержка ',
          stamp: '706',
          id: 'scjw123eoicjwepdssockwe23wefw',
        },
        {
          title: 'Получили помощь',
          text:
            'уличной социальной службы ФАР: чистые шприцы, презервативы, тесты на ВИЧ, поддержку и направления',
          stamp: '3779',
          id: 'scjweoicjwwqf322ssockwe23wefw',
        },
        {
          title: 'Юридические вопросы',
          text:
            'консультаций для людей, подвергшихся правовому преследованию в связи с наркотиками',
          stamp: '640',
          id: 'scjwe234redwpdssockwe23wefw',
        },
      ]
    },
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
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
  background-color: #f00;
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
  fill: #000;
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
